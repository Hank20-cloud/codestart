// A simple code box: a textarea with Tab, auto-indent on Enter, and buttons for symbols that are
// hard to type on a phone or tablet keyboard.
var Editor = (function () {
  var SYMBOLS = {
    web: ["<", ">", "/", "=", '"', "'", "(", ")", "{", "}", "[", "]", ";", ":", ".", "+", "-", "*", "!", "&", "|", "#"],
    py: [":", "(", ")", "[", "]", '"', "'", "=", "<", ">", "!", "+", "-", "*", "/", "%", ",", ".", "#", "_"]
  };

  function insert(area, text) {
    area.focus();
    // execCommand keeps the browser's undo (Ctrl+Z). If it is not supported, fall back to setRangeText.
    var ok = false;
    try { ok = document.execCommand("insertText", false, text); } catch (e) { ok = false; }
    if (!ok) {
      area.setRangeText(text, area.selectionStart, area.selectionEnd, "end");
      area.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }

  function onKeyDown(e) {
    var area = e.target;
    var unit = area.getAttribute("data-mode") === "py" ? "    " : "  ";
    if (e.key === "Tab" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      insert(area, unit);
    } else if (e.key === "Escape") {
      area.blur(); // lets keyboard users press Tab again to leave the editor
    } else if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.isComposing) {
      var before = area.value.slice(0, area.selectionStart);
      var line = before.slice(before.lastIndexOf("\n") + 1);
      var indent = /^[ \t]*/.exec(line)[0];
      if (unit === "    " ? /:\s*(#.*)?$/.test(line) : /[{(\[]\s*$/.test(line)) indent += unit;
      if (indent) {
        e.preventDefault();
        insert(area, "\n" + indent);
      }
    }
  }

  // Creates the editor inside container. mode is "web" or "py". Returns { area, getValue, setValue }.
  function create(container, value, mode, onChange) {
    container.innerHTML =
      '<textarea class="code-input" spellcheck="false" autocapitalize="off" autocomplete="off" ' +
      'autocorrect="off" aria-label="Code editor. Press Escape, then Tab, to leave the editor."></textarea>' +
      '<div class="symbols" aria-label="Insert a symbol">' +
      SYMBOLS[mode].map(function (s) {
        return '<button type="button" class="sym" data-sym="' + s.replace(/"/g, "&quot;").replace(/</g, "&lt;") + '">' +
          s.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</button>";
      }).join("") +
      "</div>";

    var area = container.querySelector("textarea");
    area.setAttribute("data-mode", mode);
    area.value = value;
    area.addEventListener("keydown", onKeyDown);
    area.addEventListener("input", function () { onChange(area.value); });

    container.querySelector(".symbols").addEventListener("mousedown", function (e) {
      // Keep the cursor in the editor while the button is pressed.
      if (e.target.classList.contains("sym")) e.preventDefault();
    });
    container.querySelector(".symbols").addEventListener("click", function (e) {
      var btn = e.target.closest(".sym");
      if (btn) insert(area, btn.getAttribute("data-sym"));
    });

    return {
      area: area,
      getValue: function () { return area.value; },
      setValue: function (v) { area.value = v; onChange(v); }
    };
  }

  return { create: create };
})();
