// Runs student Python code with Skulpt (vendor/skulpt), a Python 3 engine written in JavaScript.
// Skulpt runs in this page, so dangerous built-ins are removed and only a few safe modules can be imported.
var PyRunner = (function () {
  var ALLOWED_MODULES = ["random", "math", "time", "string"];
  var MAX_RANGE = 10000000;   // Skulpt builds the whole range() list at once, so a huge one freezes the page
  var MAX_SLEEP_SECONDS = 5;
  var running = null; // the run that is going now, so a new run can stop it first
  var patched = false;
  var sleepFast = false; // true during checks, so time.sleep() does not slow them down

  function patchOnce() {
    if (patched) return;
    patched = true;
    var origNew = Sk.builtin.range_.prototype.tp$new;
    // Check the size before Skulpt builds the list.
    Sk.builtin.range_.prototype.tp$new = function (args, kwargs) {
      var nums = (args || []).map(function (a) {
        try { return Number(Sk.ffi.remapToJs(a)); } catch (e) { return NaN; }
      });
      if (nums.length && nums.every(function (n) { return isFinite(n); })) {
        var start = nums.length > 1 ? nums[0] : 0;
        var stop = nums.length > 1 ? nums[1] : nums[0];
        var step = nums.length > 2 ? nums[2] : 1;
        if (step !== 0 && (stop - start) / step > MAX_RANGE) {
          throw new Sk.builtin.ValueError("CODESTART_BIG_RANGE");
        }
      }
      return origNew.call(this, args, kwargs);
    };
  }

  // Replaces the timer inside time.sleep(). The wait is capped, it does not count as running time,
  // it ends early when the program is stopped, and during checks it does not wait at all.
  // Called from the patched time.js source (see read()).
  function sleep(seconds, resolve) {
    var ms = Math.min(Math.max(Number(seconds) || 0, 0), MAX_SLEEP_SECONDS) * 1000;
    var run = running;
    var start = Date.now();
    var tick = setInterval(function () {
      if (sleepFast || !run || run.isStopped() || Date.now() - start >= ms) {
        clearInterval(tick);
        Sk.execStart = Date.now();
        resolve(Sk.builtin.none.none$); // a stopped run then ends at the next suspension check
      }
    }, sleepFast ? 0 : 50);
  }

  function setup() {
    patchOnce();
    ["jseval", "execfile", "open", "__import__", "eval_$rw$"].forEach(function (name) { delete Sk.builtins[name]; });
  }

  function read(path) {
    var m = /^src\/(?:lib|builtin)\/([a-z_]+)(?:\/__init__)?\.(?:js|py)$/.exec(path);
    var ok = path === "src/builtin/sys.js" || (m && ALLOWED_MODULES.indexOf(m[1]) >= 0);
    if (!ok || !Sk.builtinFiles || Sk.builtinFiles.files[path] === undefined) {
      throw "File not found: '" + path + "'";
    }
    var source = Sk.builtinFiles.files[path];
    if (path === "src/builtin/sys.js") {
      // Students must not change the time limit. The module ends with "c.stdin=c.__stdin__,c};":
      // delete the three functions just before it is returned.
      var tail = "c.stdin=c.__stdin__,c}";
      if (source.indexOf(tail) < 0) throw "File not found: '" + path + "'"; // unknown Skulpt version: no sys
      source = source.replace(tail,
        "c.stdin=c.__stdin__,delete c.setExecutionLimit,delete c.setYieldLimit,delete c.resetTimeout,c}");
    } else if (path === "src/lib/time.js") {
      var timer = "Sk.setTimeout(function(){b(Sk.builtin.none.none$)},1e3*Sk.ffi.remapToJs(a))";
      if (source.indexOf(timer) < 0) throw "File not found: '" + path + "'"; // unknown Skulpt version: no time
      source = source.replace(timer, "PyRunner.sleep(Sk.ffi.remapToJs(a),b)");
    }
    return source;
  }

  // Runs code. opts:
  //   output(text)          called with printed text (can be part of a line)
  //   input(prompt)         returns a Promise for the text the user typed; reject to stop the program
  //   timeLimitMs           the program is stopped after this much running time (time waiting for input is not counted)
  // Returns { promise, stop }. The promise resolves to { error, module } (error is null on success).
  function run(code, opts) {
    if (running) running.stop();
    var stopped = false;
    var self = {
      stop: function () { stopped = true; },
      isStopped: function () { return stopped; }
    };
    running = self;

    Sk.configure({
      __future__: Sk.python3,
      output: function (text) { if (!stopped) opts.output(text); },
      read: read,
      inputfun: function (prompt) {
        return opts.input(prompt).then(function (value) {
          Sk.execStart = Date.now(); // waiting for the user does not count as running time
          return value;
        });
      },
      inputfunTakesPrompt: true,
      execLimit: opts.timeLimitMs || 3000,
      yieldLimit: 100,        // lets the page stay responsive during long loops
      killableWhile: true     // while loops check the time limit (for loops always end)
    });
    setup();
    Sk.execStart = Date.now();

    // A wall-clock limit as a second safety net, in case the run time limit does not stop the program.
    var wallLimit = opts.wallLimitMs || 0;
    var wallTimer = wallLimit ? setTimeout(function () { stopped = true; }, wallLimit) : null;

    self.promise = Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    }, {
      "*": function () { if (stopped) throw new Error("CODESTART_STOPPED"); }
    }).then(function (module) {
      return { error: null, module: module };
    }, function (err) {
      return { error: err, module: null };
    }).then(function (r) {
      if (wallTimer) clearTimeout(wallTimer);
      if (running === self) running = null;
      return r;
    });
    return self;
  }

  // ---- Errors ----------------------------------------------------------------------------------

  function errorInfo(err) {
    if (!err) return null;
    var name = err.tp$name || (err instanceof Error ? "Error" : "Error");
    var message = "";
    try {
      if (err.args && err.args.v && err.args.v.length) message = String(Sk.ffi.remapToJs(err.args.v[0]));
      else message = String(err.message || err);
    } catch (e) {
      message = String(err);
    }
    var line = err.traceback && err.traceback.length ? err.traceback[0].lineno : 0;
    return { name: name, message: message, line: line };
  }

  // Turns a Python error into a short message a beginner can act on. Keeps the real message as detail.
  function friendlyError(err) {
    var e = errorInfo(err) || { name: "Error", message: "", line: 0 };
    var where = e.line > 0 ? "Line " + e.line + ": " : "";
    var m = e.message, tip;
    if (/CODESTART_STOPPED/.test(m)) return { text: "The program was stopped.", detail: "" };
    if (/CODESTART_BIG_RANGE/.test(m)) {
      return { text: where + "This range() is too big. CodeStart allows up to " + MAX_RANGE.toLocaleString("en-US") + " numbers.", detail: "" };
    }
    if (/RangeError|out of memory|Invalid array length/i.test(m)) {
      return { text: where + "Your program used too much memory. Check for a very big range() or a list that keeps growing.", detail: e.name + ": " + m };
    }
    if (/CODESTART_NO_INPUT/.test(m)) {
      return { text: where + "Your program asked for more input than the check expected. Check how many times you call input().", detail: "" };
    }
    switch (e.name) {
      case "TimeLimitError":
        tip = "Your program ran for too long. A while loop probably never stops: make sure its condition becomes False at some point.";
        return { text: where + tip, detail: "" };
      case "SyntaxError":
      case "IndentationError":
      case "TokenError":
        tip = "Python cannot read this line. Check for a missing colon ( : ) at the end of if, elif, else, for, while, or def; " +
          "check the spaces at the start of the line (indentation); and check that every ( and \" is closed.";
        break;
      case "NameError":
        var n = /name '([^']+)'/.exec(m);
        tip = n ? "Python does not know the name \"" + n[1] + "\". Check the spelling (capital letters matter), or create the variable before you use it."
          : "Python does not know one of the names you used.";
        break;
      case "TypeError":
        if (/concatenate|must be str|can only concatenate/.test(m)) {
          tip = "You tried to join text and a number with +. Use str(number) to turn the number into text, or use a comma in print().";
        } else if (/not callable/.test(m)) {
          tip = "You used ( ) after something that is not a function.";
        } else if (/unsupported operand/.test(m)) {
          tip = "You tried to do math with text. input() always gives text: use int(...) or float(...) to turn it into a number.";
        } else {
          tip = "A value has the wrong type for what you are doing.";
        }
        break;
      case "ValueError":
        tip = /invalid literal/.test(m) ? "int() or float() got text that is not a number." : "A value is not allowed here.";
        break;
      case "ZeroDivisionError":
        tip = "You divided by zero. Check the number before you divide.";
        break;
      case "IndexError":
        tip = "You used a position that is not in the list. Remember that the first item is at position 0.";
        break;
      case "KeyError":
        tip = "That key is not in the dictionary.";
        break;
      case "AttributeError":
        tip = "That value does not have this method or property. Check the spelling after the dot.";
        break;
      case "RecursionError":
        tip = "A function keeps calling itself and never stops.";
        break;
      case "ImportError":
      case "ModuleNotFoundError":
        tip = "This module is not available in CodeStart. You can use: " + ALLOWED_MODULES.join(", ") + ".";
        break;
      default:
        tip = "Your program has an error.";
    }
    return { text: where + tip, detail: e.name + ": " + m };
  }

  // ---- Checks ----------------------------------------------------------------------------------
  // A Python exercise test looks like { inputs: ["10", "5"], check: "R.has('15')", message: "..." }
  // (or inputFn instead of inputs, see runScripted).
  // The program runs once for each different set of inputs. check is a JavaScript expression that can use R:
  //   R.out        all printed text          R.lines     printed lines, trimmed, without empty lines
  //   R.has(t)     some line contains t      R.line(t)   some line equals t
  //   R.error      null, or { name, message, line }
  //   R.prompts    the prompt texts passed to input()
  //   R.get(name)  a global variable as a JavaScript value (undefined if missing)
  //   R.call(name, ...args)  calls a Python function and returns its result as a JavaScript value
  //   R.code       the student's code

  function toJs(v) {
    try { return Sk.ffi.remapToJs(v); } catch (e) { return undefined; }
  }

  // Skulpt stores some Python names under another key (for example name is stored as name_$rw$).
  function lookup(globals, name) {
    if (!globals) return undefined;
    var has = Object.prototype.hasOwnProperty;
    if (has.call(globals, name)) return globals[name];
    if (has.call(globals, name + "_$rw$")) return globals[name + "_$rw$"];
    return undefined;
  }

  function makeResult(code, out, prompts, r) {
    var globals = r.module ? r.module.$d : {};
    var lines = out.split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
    return {
      code: code,
      out: out,
      lines: lines,
      prompts: prompts,
      error: errorInfo(r.error),
      rawError: r.error,
      has: function (t) { t = String(t); return lines.some(function (l) { return l.indexOf(t) >= 0; }); },
      line: function (t) { t = String(t); return lines.some(function (l) { return l === t; }); },
      get: function (name) { var v = lookup(globals, name); return v === undefined ? undefined : toJs(v); },
      call: function (name) {
        var fn = lookup(globals, name);
        if (!fn) throw new Error("no function " + name);
        var args = Array.prototype.slice.call(arguments, 1).map(function (a) { return Sk.ffi.remapToPy(a); });
        // This call blocks the page, so a function that never ends gets only a short time.
        var limit = Sk.execLimit;
        Sk.execLimit = 500;
        Sk.execStart = Date.now();
        try {
          return toJs(Sk.misceval.callsimArray(fn, args));
        } finally {
          Sk.execLimit = limit;
        }
      }
    };
  }

  // Reads a global variable of the program that is running now (for inputFn).
  function liveGlobal(name) {
    var v = lookup(Sk.globals, name);
    return v === undefined ? undefined : toJs(v);
  }

  // Runs code with no interaction. The answers to input() come from:
  //   inputs:  a list of strings, used in order
  //   inputFn: JavaScript source of function (prompt, count, get) that returns the next answer, or null to stop.
  //            get(name) reads a variable of the running program, e.g. get("secret") in a guessing game.
  // Resolves to the R object.
  function runScripted(code, inputs, inputFn) {
    var out = "", prompts = [], queue = (inputs || []).slice();
    var fn = inputFn ? new Function("return (" + inputFn + ");")() : null;
    return run(code, {
      timeLimitMs: 3000,
      wallLimitMs: 10000,
      output: function (t) { if (out.length < 100000) out += t; },
      input: function (prompt) {
        prompts.push(String(prompt));
        out += String(prompt);
        var value = null;
        if (fn) {
          try { value = fn(String(prompt), prompts.length, liveGlobal); } catch (e) { value = null; }
        } else if (queue.length) {
          value = queue.shift();
        }
        if (value === null || value === undefined || prompts.length > 200) {
          return Promise.reject(new Sk.builtin.RuntimeError("CODESTART_NO_INPUT"));
        }
        value = String(value);
        out += value + "\n"; // like a real console, the typed answer appears after the prompt
        return Promise.resolve(value);
      }
    }).promise.then(function (r) { return makeResult(code, out, prompts, r); });
  }

  // Runs the exercise checks. Calls done({ ok, passed, total, message, errors, timeout }) like Runner.check.
  // Returns a function that cancels the check; done is then never called.
  function check(exercise, code, done) {
    var cache = {}, results = [], firstError = null, i = 0, cancelled = false;

    function next() {
      if (cancelled) return;
      if (i >= exercise.tests.length) return finish();
      var test = exercise.tests[i];
      var key = JSON.stringify([test.inputs || [], test.inputFn || ""]);
      if (!cache[key]) {
        sleepFast = true;
        cache[key] = runScripted(code, test.inputs, test.inputFn);
      }
      cache[key].then(function (R) {
        sleepFast = false;
        if (cancelled) return;
        if (R.error && !firstError) firstError = R;
        var ok = false;
        try { ok = !!new Function("R", "return (" + test.check + ");")(R); } catch (e) { ok = false; }
        results.push(ok);
        i++;
        next();
      });
    }

    function finish() {
      var passed = results.filter(Boolean).length;
      var failAt = results.indexOf(false);
      done({
        ok: passed === exercise.tests.length,
        passed: passed,
        total: exercise.tests.length,
        message: failAt >= 0 ? exercise.tests[failAt].message : "",
        pyError: firstError ? firstError.rawError : null,
        errors: [],
        timeout: false
      });
    }

    next();
    return function () {
      cancelled = true;
      sleepFast = false;
      if (running) running.stop();
    };
  }

  return {
    run: run,
    check: check,
    sleep: sleep,
    runScripted: runScripted,
    friendlyError: friendlyError,
    stop: function () { if (running) running.stop(); }
  };
})();
