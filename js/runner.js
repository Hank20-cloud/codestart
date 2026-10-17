// Runs student code in a sandboxed iframe. The iframe has no access to this page or its storage.
// Two modes:
//   preview: a visible iframe the student can see and click. Console output and errors go to onMessage.
//   check:   a hidden iframe that runs the exercise checks once and reports the result.
var Runner = (function () {
  var listeners = [];

  window.addEventListener("message", function (e) {
    if (!e.data || !e.data.codestart) return;
    for (var i = 0; i < listeners.length; i++) {
      if (listeners[i].win === e.source) {
        listeners[i].fn(e.data);
        return;
      }
    }
  });

  function listen(frame, fn) {
    var entry = { win: frame.contentWindow, fn: fn };
    listeners.push(entry);
    return function () {
      var i = listeners.indexOf(entry);
      if (i >= 0) listeners.splice(i, 1);
    };
  }

  // ---- Loop protection -------------------------------------------------------------------------
  // Adds a call to __lp() in the condition of every for / while / do-while loop, so a loop that never
  // ends is stopped instead of freezing the browser. It never adds or removes line breaks, so error
  // line numbers still match the student's code.

  function skipString(code, i) {
    var quote = code[i], j = i + 1;
    while (j < code.length) {
      var c = code[j];
      if (c === "\\") { j += 2; continue; }
      if (c === quote) return j + 1;
      if (c === "\n" && quote !== "`") return j;
      j++;
    }
    return code.length;
  }

  // Returns the end index if a comment or string starts at i, otherwise -1.
  function skipNonCode(code, i) {
    var c = code[i], next = code[i + 1];
    if (c === "/" && next === "/") {
      var end = code.indexOf("\n", i);
      return end < 0 ? code.length : end;
    }
    if (c === "/" && next === "*") {
      var close = code.indexOf("*/", i + 2);
      return close < 0 ? code.length : close + 2;
    }
    if (c === '"' || c === "'" || c === "`") return skipString(code, i);
    return -1;
  }

  function loopKeywordAt(code, i) {
    var words = ["while", "for"];
    for (var k = 0; k < words.length; k++) {
      var w = words[k];
      if (code.substr(i, w.length) !== w) continue;
      var before = i > 0 ? code[i - 1] : "";
      var after = code[i + w.length] || "";
      if (!/[\w$.]/.test(before) && !/[\w$]/.test(after)) return w;
    }
    return null;
  }

  function matchParen(code, open) {
    var depth = 0, j = open;
    while (j < code.length) {
      var skip = skipNonCode(code, j);
      if (skip >= 0) { j = skip; continue; }
      if (code[j] === "(") depth++;
      else if (code[j] === ")" && --depth === 0) return j;
      j++;
    }
    return -1;
  }

  function splitTopLevel(text, sep) {
    var parts = [], depth = 0, startAt = 0, j = 0;
    while (j < text.length) {
      var skip = skipNonCode(text, j);
      if (skip >= 0) { j = skip; continue; }
      var c = text[j];
      if (c === "(" || c === "[" || c === "{") depth++;
      else if (c === ")" || c === "]" || c === "}") depth--;
      else if (c === sep && depth === 0) { parts.push(text.slice(startAt, j)); startAt = j + 1; }
      j++;
    }
    parts.push(text.slice(startAt));
    return parts;
  }

  function guardHeader(keyword, header) {
    if (keyword === "while") return "__lp() && (" + header + ")";
    var parts = splitTopLevel(header, ";");
    if (parts.length !== 3) return header; // for...of / for...in always end
    var cond = parts[1].trim() ? " __lp() && (" + parts[1] + ")" : " __lp()";
    return parts[0] + ";" + cond + ";" + parts[2];
  }

  function protectLoops(code) {
    var out = "", i = 0;
    while (i < code.length) {
      var skip = skipNonCode(code, i);
      if (skip >= 0) { out += code.slice(i, skip); i = skip; continue; }
      var keyword = loopKeywordAt(code, i);
      if (keyword) {
        var open = i + keyword.length;
        while (code[open] === " " || code[open] === "\t") open++;
        var close = code[open] === "(" ? matchParen(code, open) : -1;
        if (close > 0) {
          var header = protectLoops(code.slice(open + 1, close));
          out += code.slice(i, open + 1) + guardHeader(keyword, header) + ")";
          i = close + 1;
          continue;
        }
      }
      out += code[i];
      i++;
    }
    return out;
  }

  function protectHtml(html) {
    return html.replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/gi, function (all, open, body, end) {
      return /\bsrc\s*=/i.test(open) ? all : open + protectLoops(body) + end;
    });
  }

  // ---- Code that runs inside the iframe --------------------------------------------------------
  // This function is copied into the iframe as text. It must not use anything from outside itself.
  function harness(cfg) {
    var preview = cfg.mode === "preview";
    var logs = [], errors = [], posted = 0;

    function post(msg) {
      msg.codestart = true;
      parent.postMessage(msg, "*");
    }

    /* Loop guard: code that loops for 1.5 seconds without giving the browser a break is stopped.
       The time is measured per task (one click, one timer), so code that runs often but briefly is fine. */
    var burstStart = 0, inTask = false;
    function endTask() { inTask = false; }
    window.__lp = function () {
      var now = Date.now();
      if (!inTask) {
        inTask = true;
        burstStart = now;
        setTimeout(endTask, 0); // runs only after the current task gives the browser a break
      }
      if (now - burstStart > 1500) {
        burstStart = now;
        throw new Error("CODESTART_LOOP");
      }
      return true;
    };

    /* The sandbox blocks real localStorage, so give the student code a copy kept in memory. */
    var store = {};
    Object.keys(cfg.storage).forEach(function (k) { store[k] = String(cfg.storage[k]); });
    /* Send the saved data to the main page at most every 300 ms, so a loop of setItem calls stays cheap. */
    var storeTimer = null;
    function stored() {
      if (!preview || storeTimer) return;
      storeTimer = setTimeout(function () { storeTimer = null; post({ type: "storage", data: store }); }, 300);
    }
    var shim = {
      getItem: function (k) { k = String(k); return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
      setItem: function (k, v) { store[String(k)] = String(v); stored(); },
      removeItem: function (k) { delete store[String(k)]; stored(); },
      clear: function () { store = {}; stored(); },
      key: function (i) { var keys = Object.keys(store); return i < keys.length ? keys[i] : null; }
    };
    Object.defineProperty(shim, "length", { get: function () { return Object.keys(store).length; } });
    try { Object.defineProperty(window, "localStorage", { value: shim, configurable: true }); } catch (e) { }

    function show(v) {
      if (typeof v === "string") return v;
      if (v === null || typeof v !== "object") return String(v);
      if (v instanceof Node) return v.nodeType === 1 ? "<" + v.tagName.toLowerCase() + ">" : String(v.nodeName);
      try { return JSON.stringify(v); } catch (e) { return String(v); }
    }

    ["log", "info", "warn", "error"].forEach(function (level) {
      var original = console[level];
      console[level] = function () {
        var text = Array.prototype.map.call(arguments, show).join(" ");
        if (logs.length < 10000) logs.push(text);
        if (preview && posted < 500) {
          posted++;
          post({ type: "log", level: level, text: posted === 500 ? "... (more output hidden)" : text });
        }
        original.apply(console, arguments);
      };
    });

    window.addEventListener("error", function (e) {
      var info = {
        type: "error",
        message: String(e.message || "Error"),
        line: e.lineno > cfg.offset ? e.lineno - cfg.offset : 0
      };
      if (errors.length < 20) errors.push(info);
      if (preview) post(info);
    });

    if (!preview) {
      window.alert = function () { };
      window.confirm = function () { return false; };
      window.prompt = function () { return null; };
    }

    function q(sel) { return document.querySelector(sel); }

    /* Helpers that exercise checks can use, for example CS.text("h1") === "Hello". */
    window.CS = {
      code: cfg.code,
      logs: logs,
      errors: errors,
      q: q,
      qa: function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); },
      text: function (sel) { var el = q(sel); return el ? el.textContent.trim() : ""; },
      css: function (sel, prop) { var el = q(sel); return el ? getComputedStyle(el).getPropertyValue(prop).trim() : ""; },
      colorOf: function (value) {
        var el = document.createElement("span");
        el.style.color = value;
        if (!el.style.color) return "invalid color";
        document.body.appendChild(el);
        var c = getComputedStyle(el).color;
        el.remove();
        return c;
      },
      click: function (sel) { var el = q(sel); if (!el) return false; el.click(); return true; },
      type: function (sel, value) {
        var el = q(sel);
        if (!el) return false;
        el.value = value;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
        return true;
      },
      logged: function (text) { return logs.some(function (l) { return l.trim() === String(text); }); },
      storage: function () { return store; },
      /* Runs the student's JavaScript again with other starting values and returns what it printed.
         Example: CS.runWith({ age: 70 }) replaces "let age = 15" with "let age = 70". */
      runWith: function (values) {
        var code = cfg.runCode, out = [], original = console.log;
        Object.keys(values).forEach(function (name) {
          var re = new RegExp("((?:let|const|var)\\s+" + name + "\\s*=\\s*)[^;\\n]+");
          code = code.replace(re, function (all, start) { return start + JSON.stringify(values[name]); });
        });
        console.log = function () { out.push(Array.prototype.map.call(arguments, show).join(" ")); };
        try {
          burstStart = Date.now();
          new Function(code)();
        } catch (e) {
          out.push("ERROR: " + e.message);
        } finally {
          console.log = original;
        }
        return out;
      }
    };

    function runChecks() {
      var results = cfg.tests.map(function (check) {
        burstStart = Date.now();
        try { return !!(0, eval)("(" + check + ")"); } catch (e) { return false; }
      });
      post({ type: "result", results: results, errors: errors, token: cfg.token });
    }

    if (!preview) {
      // Start after the page has loaded. Do not wait more than 3 seconds for slow images.
      var started = false;
      var start = function () { if (!started) { started = true; setTimeout(runChecks, 0); } };
      window.addEventListener("load", start);
      document.addEventListener("DOMContentLoaded", function () { setTimeout(start, 3000); });
    }
  }

  // ---- Building the iframe page ----------------------------------------------------------------

  function countLines(text) { return text.split("\n").length - 1; }

  function harnessTag(cfg) {
    var json = JSON.stringify(cfg).replace(/</g, "\\u003c");
    return "<script>(" + harness.toString() + ")(" + json + ");<\/script>";
  }

  function build(exercise, code, mode, storage) {
    var cfg = {
      mode: mode,
      // A random value the check result must carry. It makes faking a passing result harder.
      // (Student code runs in the same frame, so this is not real security.)
      token: mode === "check" ? Math.random().toString(36).slice(2) + Date.now().toString(36) : "",
      offset: 0,
      code: code,
      runCode: exercise.type === "html" ? "" : protectLoops(code),
      storage: storage || exercise.storage || {},
      tests: mode === "check" ? exercise.tests.map(function (t) { return t.check; }) : []
    };

    if (exercise.type === "html") {
      // Keep the student's doctype first, or the page switches to old "quirks" mode.
      var m = /^\s*<!doctype[^>]*>/i.exec(code);
      var head = m ? m[0] : "<!doctype html>";
      var body = protectHtml(m ? code.slice(m[0].length) : code);
      cfg.offset = countLines(harnessTag(cfg));
      return head + harnessTag(cfg) + body;
    }

    var page = exercise.pageHtml || "";
    cfg.offset = countLines("<!doctype html>" + harnessTag(cfg) + page + "<script>");
    var script = protectLoops(code).replace(/<\/script/gi, "<\\/script");
    return "<!doctype html>" + harnessTag(cfg) + page + "<script>" + script + "\n<\/script>";
  }

  function makeFrame(sandbox, srcdoc, parentEl, hidden) {
    var frame = document.createElement("iframe");
    frame.setAttribute("sandbox", sandbox);
    frame.setAttribute("title", hidden ? "Code check" : "Your page");
    if (hidden) {
      // Off screen but still laid out, so size and layout checks work.
      frame.style.cssText = "position:fixed;left:-10000px;top:0;width:900px;height:700px;visibility:hidden;";
    }
    frame.srcdoc = srcdoc;
    parentEl.appendChild(frame);
    return frame;
  }

  // ---- Public API ------------------------------------------------------------------------------

  // Runs the checks. Calls done({ ok, passed, total, message, errors, timeout }).
  // Returns a function that cancels the check; done is then never called.
  function check(exercise, code, done) {
    var srcdoc = build(exercise, code, "check");
    var token = /"token":"([a-z0-9]+)"/.exec(srcdoc)[1];
    var frame = makeFrame("allow-scripts allow-forms", srcdoc, document.body, true);
    var finished = false;
    var stop = listen(frame, function (msg) { if (msg.type === "result" && msg.token === token) finish(msg); });
    var timer = setTimeout(function () { finish({ timeout: true, results: [], errors: [] }); }, 8000);

    function cleanUp() {
      finished = true;
      clearTimeout(timer);
      stop();
      frame.remove();
    }

    function finish(r) {
      if (finished) return;
      cleanUp();
      var results = r.results || [];
      var passed = results.filter(Boolean).length;
      var firstFail = results.indexOf(false);
      done({
        ok: !r.timeout && results.length === exercise.tests.length && passed === results.length,
        passed: passed,
        total: exercise.tests.length,
        message: firstFail >= 0 ? exercise.tests[firstFail].message : "",
        errors: r.errors || [],
        timeout: !!r.timeout
      });
    }

    return function () { if (!finished) cleanUp(); };
  }

  // Shows the student's page in container. Returns a function that removes it.
  function preview(exercise, code, container, onMessage, storage) {
    container.innerHTML = "";
    var frame = makeFrame("allow-scripts allow-modals allow-forms", build(exercise, code, "preview", storage), container, false);
    var stop = listen(frame, onMessage);
    return function () { stop(); frame.remove(); };
  }

  // Turns a raw error into a short message a beginner can act on. Keeps the real message as detail.
  function friendlyError(err) {
    var m = String(err.message || "").replace(/^Uncaught /, "");
    var where = err.line > 0 ? "Line " + err.line + ": " : "";
    var name = /(\S+) is not defined/.exec(m);
    var tip;
    if (/CODESTART_LOOP/.test(m)) {
      return { text: where + "Your loop never stopped. Make sure the loop's condition becomes false at some point.", detail: "" };
    } else if (name) {
      tip = "JavaScript does not know the name \"" + name[1] + "\". Check the spelling (capital letters matter), or create it first with let.";
    } else if (/before initialization/.test(m)) {
      tip = "You used a variable before the line that creates it. Move the let or const line higher.";
    } else if (/Assignment to constant/.test(m)) {
      tip = "You tried to change a const. Use let if the value needs to change.";
    } else if (/already been declared/.test(m)) {
      tip = "This name is created twice. Use let only the first time you create it.";
    } else if (/Maximum call stack/.test(m)) {
      tip = "A function keeps calling itself and never stops.";
    } else if (/is not a function/.test(m)) {
      tip = "You tried to call something that is not a function. Check the name and the ( ).";
    } else if (/Cannot (read|set) properties of (null|undefined)/.test(m)) {
      tip = "Something is empty (null or undefined). If you used document.querySelector, check that the selector matches an element on the page.";
    } else if (/SyntaxError/.test(m)) {
      tip = "JavaScript cannot read this code. Look for a missing ( ) { } or quote, or a typing mistake.";
    } else {
      tip = "Your code has an error.";
    }
    return { text: where + tip, detail: m };
  }

  return { check: check, preview: preview, friendlyError: friendlyError, protectLoops: protectLoops };
})();
