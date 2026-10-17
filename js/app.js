// Page navigation with hash routes, so it works when opened from a folder:
//   #/                     home: the two categories
//   #/web  #/python        category page: chapter list and projects
//   #/ch01                 chapter (or project) page
//   #/ch01/lesson/2        lesson page (1-based)
//   #/ch01/exercise/1      exercise page (1-based); for a project this is a step
(function () {
  var app = document.getElementById("app");
  var cleanup = null; // set by a page that needs to stop timers or iframes when you leave it

  var SHOW_ANSWER_AFTER = 3; // failed checks before "Show answer" appears
  var STORAGE_LIMIT = 100000; // most characters of localStorage data kept for one exercise's page

  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  // The home page shows the courses in this order.
  var CATEGORIES = [
    {
      id: "python", title: "Programming basics", lang: "Python", icon: "Py",
      summary: "Learn the main ideas of programming, step by step, to get ready for AP (Advanced Placement) Computer Science Principles.",
      chapters: CODESTART.pyChapters, projects: CODESTART.pyProjects,
      projectsIntro: "Six small programs. Do them in this order. Each one adds a few new ideas.",
      done: "Then build six small programs that combine everything."
    },
    {
      id: "web", title: "Build web apps", lang: "HTML, CSS, and JavaScript", icon: "&lt;/&gt;",
      summary: "Make web pages and small apps that run in any browser.",
      chapters: CODESTART.chapters, projects: CODESTART.projects,
      projectsIntro: "Pick one. Each project is built step by step. Finish chapters 1–11 first.",
      done: "At the end, pick one final project and build your own web app."
    },
    {
      id: "ap", title: "AP Computer Science Principles", lang: "AP pseudocode and Python", icon: "AP",
      summary: "The AP CSP course, Big Idea by Big Idea, with AP-style practice questions. Do Programming basics first.",
      chapters: CODESTART.apChapters, projects: [], book: "AP Computer Science Principles Premium, 2027",
      done: "Finish with the Create performance task, exam practice, and a practice test.",
      note: '<strong>Read chapter 8 early.</strong> In the real AP course you build your own program (the Create performance task) ' +
        'during the school year and submit it <em>before</em> the exam. Read <a href="#/ap08">chapter 8</a> before you start your program, ' +
        'so you know what it must include. Then come back here and do the chapters in order.'
    },
    {
      id: "psych", title: "AP Psychology", lang: "No code. Lessons and AP-style questions", icon: "Ψ",
      summary: "The AP Psychology course, unit by unit, with AP-style practice questions and exam skills.",
      chapters: CODESTART.psChapters, projects: [], book: "AP Psychology Premium, 2025",
      done: "Finish with exam skills and mixed exam practice."
    }
  ];

  function findUnit(id) {
    return allUnits().find(function (u) { return u.id === id; });
  }

  function categoryOf(unit) {
    return CATEGORIES.find(function (c) {
      return c.chapters.indexOf(unit) >= 0 || c.projects.indexOf(unit) >= 0;
    });
  }

  function isProject(unit) {
    return categoryOf(unit).projects.indexOf(unit) >= 0;
  }

  function hasContent(unit) {
    return !!((unit.lessons && unit.lessons.length) || (unit.exercises && unit.exercises.length));
  }

  function unitItemIds(unit) {
    return (unit.lessons || []).concat(unit.exercises || []).map(function (x) { return x.id; });
  }

  function unitHeading(unit) {
    var cat = categoryOf(unit);
    return isProject(unit) ? "Project: " + unit.title
      : "Chapter " + (cat.chapters.indexOf(unit) + 1) + ": " + unit.title;
  }

  function categoryCrumb(unit) {
    var cat = categoryOf(unit);
    return '<a href="#/">Home</a> › <a href="#/' + cat.id + '">' + esc(cat.title) + "</a>";
  }

  function crumbs(unit) {
    return '<div class="breadcrumb">' + categoryCrumb(unit) + ' › <a href="#/' + unit.id + '">' +
      esc(unit.title) + "</a></div>";
  }

  function render(html, title) {
    if (cleanup) { cleanup(); cleanup = null; }
    app.innerHTML = html;
    document.title = title ? title + " — CodeStart" : "CodeStart";
    window.scrollTo(0, 0);
    app.focus();
    showTutorButtons();
  }

  function notFound() {
    render('<h1>Page not found</h1><p><a href="#/">Back to the home page</a></p>', "Not found");
  }

  // ---- Home ------------------------------------------------------------------------------------

  function unitCard(unit, label) {
    var num = '<span class="num">' + label + "</span>";
    if (!hasContent(unit)) {
      return '<li><div class="card locked">' + num +
        '<div class="body"><div class="title">' + esc(unit.title) + "</div>" +
        '<div class="sub">Coming soon</div></div></div></li>';
    }
    var ids = unitItemIds(unit);
    var done = Progress.countDone(ids);
    var pct = Math.round((done / ids.length) * 100);
    return '<li><a class="card" href="#/' + unit.id + '">' + num +
      '<div class="body"><div class="title">' + esc(unit.title) +
      (done === ids.length ? ' <span class="check">✓</span>' : "") + "</div>" +
      '<div class="sub">' + esc(unit.summary) + "</div>" +
      '<div class="bar" role="img" aria-label="' + pct + '% done"><span style="width:' + pct + '%"></span></div>' +
      "</div></a></li>";
  }

  function showHome() {
    var cards = CATEGORIES.map(function (cat) {
      var ids = [];
      cat.chapters.concat(cat.projects).forEach(function (u) { ids = ids.concat(unitItemIds(u)); });
      var done = Progress.countDone(ids);
      var pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
      return '<li><a class="card" href="#/' + cat.id + '">' +
        '<span class="num">' + cat.icon + "</span>" +
        '<div class="body"><div class="title">' + esc(cat.title) + "</div>" +
        '<div class="sub"><strong>' + esc(cat.lang) + ".</strong> " + esc(cat.summary) + "</div>" +
        '<div class="bar" role="img" aria-label="' + pct + '% done"><span style="width:' + pct + '%"></span></div>' +
        "</div></a></li>";
    }).join("");

    render(
      "<h1>Choose a course</h1>" +
      '<p class="muted">Pick a course. You can take more than one, in any order. If you are new to programming, ' +
      "<em>Programming basics</em> is a good place to start.</p>" +
      '<ul class="card-list">' + cards + "</ul>" +
      '<p class="footer-note muted">Your progress is saved in this browser on this computer. ' +
      '<button type="button" class="linklike" id="reset-all">Start over</button></p>'
    );

    document.getElementById("reset-all").addEventListener("click", function () {
      if (confirm("Delete all your progress and saved code in this browser? This cannot be undone.")) {
        Progress.clearAll();
        showHome();
      }
    });
  }

  function showCategory(cat) {
    var chapters = cat.chapters.map(function (c, i) { return unitCard(c, i + 1); }).join("");
    var projects = cat.projects.map(function (p, i) { return unitCard(p, cat.id === "python" ? "P" + (i + 1) : "★"); }).join("");

    render(
      '<div class="breadcrumb"><a href="#/">Home</a></div>' +
      "<h1>" + esc(cat.title) + "</h1>" +
      '<p class="muted">' + esc(cat.lang) + ". Start at chapter 1. Each chapter has short lessons and exercises. " +
      esc(cat.done) + "</p>" +
      (cat.note ? '<div class="tip">' + cat.note + "</div>" : "") +
      '<ul class="card-list">' + chapters + "</ul>" +
      (projects ? "<h2>Projects</h2>" +
        '<p class="muted">' + esc(cat.projectsIntro) + "</p>" +
        '<ul class="card-list">' + projects + "</ul>" : ""),
      cat.title
    );
  }

  // ---- Chapter / project page --------------------------------------------------------------

  function itemCard(unit, kind, item, index) {
    var done = Progress.isDone(item.id);
    return '<li><a class="card" href="#/' + unit.id + "/" + kind + "/" + (index + 1) + '">' +
      '<span class="num">' + (index + 1) + "</span>" +
      '<div class="body"><div class="title">' + esc(item.title) + "</div></div>" +
      (done ? '<span class="check" aria-label="done">✓</span>' : "") +
      "</a></li>";
  }

  function showUnit(unit) {
    var lessons = unit.lessons.map(function (l, i) { return itemCard(unit, "lesson", l, i); }).join("");
    var exercises = unit.exercises.map(function (x, i) { return itemCard(unit, "exercise", x, i); }).join("");
    var project = isProject(unit);

    render(
      '<div class="breadcrumb">' + categoryCrumb(unit) + "</div>" +
      "<h1>" + esc(unitHeading(unit)) + "</h1>" +
      '<p class="muted">' + esc(unit.summary) + "</p>" +
      (unit.barrons ? '<p class="muted"><strong>In the Barron\'s book</strong> (' + esc(categoryOf(unit).book) + "): " + esc(unit.barrons) + ".</p>" : "") +
      (unit.intro ? '<div class="lesson">' + unit.intro + "</div>" : "") +
      (lessons ? '<h2>Lessons</h2><ul class="card-list">' + lessons + "</ul>" : "") +
      (exercises ? "<h2>" + (project ? "Steps" : "Exercises") + '</h2><ul class="card-list">' + exercises + "</ul>" : ""),
      unit.title
    );
  }

  // ---- Lesson page -----------------------------------------------------------------------------

  // The first exercise in the chapter that is not done yet, or exercise 1 if all are done (1-based).
  function firstOpenExercise(unit) {
    for (var i = 0; i < unit.exercises.length; i++) {
      if (!Progress.isDone(unit.exercises[i].id)) return i + 1;
    }
    return 1;
  }

  function showLesson(unit, index) {
    var lesson = unit.lessons[index];
    var last = index + 1 === unit.lessons.length;
    var prev = index > 0 ? "#/" + unit.id + "/lesson/" + index : "#/" + unit.id;
    var next = !last ? "#/" + unit.id + "/lesson/" + (index + 2)
      : (unit.exercises.length ? "#/" + unit.id + "/exercise/1" : "#/" + unit.id);
    var nextLabel = !last ? "Next lesson →" : (unit.exercises.length ? "Start the exercises →" : "Back to chapter");
    // On the last lesson, Next already goes to the exercises, so the extra button is not needed there.
    var toExercises = unit.exercises.length && !last
      ? '<a class="btn secondary" href="#/' + unit.id + "/exercise/" + firstOpenExercise(unit) + '">Go to exercises</a>'
      : "";

    render(
      crumbs(unit) +
      "<h1>" + esc(lesson.title) + "</h1>" +
      '<p class="muted">Lesson ' + (index + 1) + " of " + unit.lessons.length + "</p>" +
      '<div class="lesson">' + lesson.html + "</div>" +
      '<div class="actions">' +
        '<a class="btn secondary" href="' + prev + '">← Back</a>' +
        '<span class="actions-right">' + toExercises +
          '<a class="btn" id="next" href="' + next + '">' + nextLabel + "</a></span>" +
      "</div>",
      lesson.title
    );

    // Reading to the end and pressing Next counts as finishing the lesson.
    document.getElementById("next").addEventListener("click", function () {
      Progress.markDone(lesson.id);
    });
  }

  // ---- Exercise page ---------------------------------------------------------------------------

  // The code a step starts from. Project steps with carry: true continue from the previous step's code.
  function startingCode(unit, index) {
    var ex = unit.exercises[index];
    if (ex.carry && index > 0) {
      var prevCode = Progress.get(unit.exercises[index - 1].id).code;
      if (typeof prevCode === "string" && prevCode.trim()) return prevCode;
    }
    return ex.starterCode || "";
  }

  function plainText(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent.replace(/\s+/g, " ").trim();
  }

  function downloadFile(name, text) {
    var blob = new Blob([text], { type: /\.py$/.test(name) ? "text/x-python" : "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  // Links at the end of an exercise page: the next exercise, or the next chapter after the last one.
  function exerciseNext(unit, index) {
    var last = index + 1 === unit.exercises.length;
    var project = isProject(unit);
    var cat = categoryOf(unit);
    return {
      last: last,
      href: !last ? "#/" + unit.id + "/exercise/" + (index + 2) : (unit.next ? "#/" + unit.next : "#/" + cat.id),
      label: !last ? (project ? "Next step →" : "Next exercise →")
        : (unit.next ? (project ? "Next project →" : "Next chapter →") : "Back to " + cat.title)
    };
  }

  // A multiple-choice question. A wrong choice counts as a failed check, like a code exercise.
  function showChoiceExercise(unit, index) {
    var ex = unit.exercises[index];
    var nav = exerciseNext(unit, index);
    var multi = Array.isArray(ex.answer);
    var answer = multi ? ex.answer : [ex.answer];
    var lastFeedback = "";

    var choices = ex.choices.map(function (c, i) {
      return '<li><div class="choice"><input type="' + (multi ? "checkbox" : "radio") + '" name="choice" value="' + i +
        '" id="choice-' + i + '" aria-labelledby="choice-text-' + i + '">' +
        '<span class="letter">' + String.fromCharCode(65 + i) + '</span><div id="choice-text-' + i + '">' + c + "</div></div></li>";
    }).join("");

    render(
      crumbs(unit) +
      "<h1>" + esc(ex.title) + "</h1>" +
      '<p class="muted">Question ' + (index + 1) + " of " + unit.exercises.length + ' <span id="done-badge" class="check"' +
        (Progress.isDone(ex.id) ? "" : " hidden") + ">✓ Done</span></p>" +
      '<div class="lesson instructions">' + ex.instructions +
        (multi ? '<p class="muted small">Select <strong>two</strong> answers.</p>' : "") + "</div>" +
      '<ul class="choice-list">' + choices + "</ul>" +
      '<div class="toolbar">' +
        '<button type="button" class="btn" id="check">Check my answer</button>' +
        '<button type="button" class="btn secondary" id="hint"></button>' +
        '<button type="button" class="btn secondary" id="answer" hidden>Show answer</button>' +
        '<button type="button" class="btn secondary" id="ask" data-tutor hidden>Ask the AI tutor</button>' +
      "</div>" +
      '<div id="feedback" class="feedback" role="status" aria-live="polite"></div>' +
      '<div id="hints" class="hints"></div>' +
      '<div id="solution" class="solution" hidden></div>' +
      '<div id="tutor-box" class="tutor-box" hidden></div>' +
      '<div class="actions">' +
        '<a class="btn secondary" href="#/' + unit.id + '">← Back to chapter</a>' +
        '<span class="actions-right">' +
          (unit.lessons.length ? '<a class="btn secondary" href="#/' + unit.id + '/lesson/1">Review the lessons</a>' : "") +
          '<a class="btn" id="next" href="' + nav.href + '">' + nav.label + "</a></span>" +
      "</div>",
      ex.title
    );

    var feedback = document.getElementById("feedback");
    var hintBtn = document.getElementById("hint");
    var answerBtn = document.getElementById("answer");
    var boxes = Array.prototype.slice.call(document.querySelectorAll('input[name="choice"]'));

    function picked() {
      return boxes.filter(function (b) { return b.checked; }).map(function (b) { return Number(b.value); });
    }

    // Show the last choice again when the student comes back.
    var saved = Progress.get(ex.id).code;
    if (typeof saved === "string" && saved) {
      saved.split(",").forEach(function (v) { if (boxes[v]) boxes[v].checked = true; });
    }
    // <pre> is not allowed inside <label>, so each choice is a div. A click anywhere on it selects its input.
    Array.prototype.forEach.call(document.querySelectorAll(".choice"), function (row) {
      row.addEventListener("click", function (e) {
        var input = row.querySelector("input");
        if (e.target === input) return;
        input.checked = input.type === "radio" ? true : !input.checked;
        input.dispatchEvent(new Event("change"));
      });
    });
    boxes.forEach(function (b) {
      b.addEventListener("change", function () {
        var fields = { code: picked().join(",") };
        if (!Progress.isDone(ex.id)) fields.status = "started";
        Progress.update(ex.id, fields);
      });
    });

    function letters(list) {
      return list.map(function (i) { return String.fromCharCode(65 + i); }).join(" and ");
    }

    function renderHints() {
      var used = Math.min(Progress.get(ex.id).hintsUsed || 0, ex.hints.length);
      document.getElementById("hints").innerHTML = ex.hints.slice(0, used).map(function (h, i) {
        return '<div class="hint"><strong>Hint ' + (i + 1) + ":</strong> " + h + "</div>";
      }).join("");
      hintBtn.textContent = used < ex.hints.length ? "Hint (" + used + "/" + ex.hints.length + ")" : "No more hints";
      hintBtn.disabled = used >= ex.hints.length;
    }

    function updateAnswerButton() {
      answerBtn.hidden = (Progress.get(ex.id).failedChecks || 0) < SHOW_ANSWER_AFTER;
    }

    hintBtn.addEventListener("click", function () {
      var used = Progress.get(ex.id).hintsUsed || 0;
      if (used < ex.hints.length) Progress.update(ex.id, { hintsUsed: used + 1 });
      renderHints();
    });

    answerBtn.addEventListener("click", function () {
      var box = document.getElementById("solution");
      if (!box.hidden) { box.hidden = true; return; }
      Progress.update(ex.id, { answerShown: true });
      box.innerHTML = "<p><strong>The right answer is " + letters(answer) + ".</strong></p>" + (ex.explain || "");
      box.hidden = false;
    });

    document.getElementById("check").addEventListener("click", function () {
      var chosen = picked();
      if (!chosen.length) {
        feedback.className = "feedback fail";
        feedback.textContent = multi ? "Select two answers first." : "Select an answer first.";
        return;
      }
      if (multi && chosen.length !== answer.length) {
        feedback.className = "feedback fail";
        feedback.textContent = "Select exactly " + answer.length + " answers.";
        return;
      }
      var item = Progress.get(ex.id);
      var fields = { attempts: (item.attempts || 0) + 1 };
      var ok = chosen.length === answer.length && chosen.every(function (i) { return answer.indexOf(i) >= 0; });
      if (ok) {
        fields.status = "done";
        Progress.update(ex.id, fields);
        feedback.className = "feedback ok";
        feedback.innerHTML = "<strong>✓ Right!</strong> " + (ex.explain || "");
        document.getElementById("done-badge").hidden = false;
        lastFeedback = "The student chose the right answer.";
      } else {
        fields.failedChecks = (item.failedChecks || 0) + 1;
        Progress.update(ex.id, fields);
        feedback.className = "feedback fail";
        feedback.innerHTML = "<strong>Not yet.</strong> " + (multi ? "At least one of your answers is not right." : "That is not the right answer.") +
          " Read the question again, or press <em>Hint</em>.";
        lastFeedback = "The student chose " + letters(chosen) + ", which is wrong.";
      }
      updateAnswerButton();
    });

    document.getElementById("ask").addEventListener("click", function () {
      var choiceText = ex.choices.map(function (c, i) { return String.fromCharCode(65 + i) + ") " + plainText(c); }).join("\n");
      var fakeEditor = { getValue: function () { return "Choices:\n" + choiceText + "\n\nThe student selected: " + (letters(picked()) || "nothing yet"); } };
      openTutor(ex, fakeEditor, function () { return lastFeedback; });
    });

    renderHints();
    updateAnswerButton();
  }

  function showExercise(unit, index) {
    var ex = unit.exercises[index];
    if (ex.type === "mc") return showChoiceExercise(unit, index);
    var project = isProject(unit);
    var saved = Progress.get(ex.id);
    var code = typeof saved.code === "string" ? saved.code : startingCode(unit, index);
    var isHtml = ex.type === "html";
    var isPy = ex.type === "py";
    var hasPage = isHtml || !!ex.pageHtml;
    var nav = exerciseNext(unit, index);
    var last = nav.last, nextHref = nav.href, nextLabel = nav.label;
    var label = (project ? "Step " : "Exercise ") + (index + 1) + " of " + unit.exercises.length;

    render(
      crumbs(unit) +
      "<h1>" + esc(ex.title) + "</h1>" +
      '<p class="muted">' + label + ' <span id="done-badge" class="check"' +
        (Progress.isDone(ex.id) ? "" : " hidden") + ">✓ Done</span></p>" +
      '<div class="lesson instructions">' + ex.instructions + "</div>" +

      '<div class="editor-wrap" id="editor"></div>' +
      '<div class="toolbar">' +
        '<button type="button" class="btn secondary" id="run">▶ Run</button>' +
        (isPy ? '<button type="button" class="btn secondary" id="stop" hidden>■ Stop</button>' : "") +
        '<button type="button" class="btn" id="check">Check my answer</button>' +
        '<button type="button" class="btn secondary" id="hint"></button>' +
        '<button type="button" class="btn secondary" id="answer" hidden>Show answer</button>' +
        '<button type="button" class="btn secondary" id="ask" data-tutor hidden>Ask the AI tutor</button>' +
        '<button type="button" class="btn secondary" id="reset">Reset code</button>' +
        (project ? '<button type="button" class="btn secondary" id="download">Download my project</button>' : "") +
      "</div>" +

      '<div id="feedback" class="feedback" role="status" aria-live="polite"></div>' +
      '<div id="hints" class="hints"></div>' +
      '<div id="solution" class="solution" hidden></div>' +
      '<div id="tutor-box" class="tutor-box" hidden></div>' +

      '<h2 class="out-title">' + (hasPage ? "Your page" : "Output") + "</h2>" +
      '<div id="preview" class="preview"' + (hasPage ? "" : " hidden") + "></div>" +
      '<div id="console" class="console"' + (isHtml ? " hidden" : "") + ' aria-live="polite"></div>' +

      '<div class="actions">' +
        '<a class="btn secondary" href="#/' + unit.id + '">← Back to ' + (project ? "project" : "chapter") + "</a>" +
        '<span class="actions-right">' +
          (unit.lessons.length ? '<a class="btn secondary" href="#/' + unit.id + '/lesson/1">Review the lessons</a>' : "") +
          '<a class="btn" id="next" href="' + nextHref + '">' + nextLabel + "</a></span>" +
      "</div>",
      ex.title
    );

    var feedback = document.getElementById("feedback");
    var consoleEl = document.getElementById("console");
    var previewEl = document.getElementById("preview");
    var hintBtn = document.getElementById("hint");
    var answerBtn = document.getElementById("answer");
    var lastFeedback = "";
    var saveTimer = null, previewTimer = null, stopPreview = null, checking = false, cancelCheck = null;
    var storageWarned = false;

    var editor = Editor.create(document.getElementById("editor"), code, isPy ? "py" : "web", function (value) {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { saveCode(value); }, 400);
      if (isHtml) {
        clearTimeout(previewTimer);
        previewTimer = setTimeout(runPreview, 700);
      }
    });
    editor.area.rows = Math.min(24, Math.max(8, code.split("\n").length + 2));

    function saveCode(value) {
      var fields = { code: value };
      if (!Progress.isDone(ex.id)) fields.status = "started";
      Progress.update(ex.id, fields);
    }

    cleanup = function () {
      clearTimeout(previewTimer);
      if (saveTimer) { clearTimeout(saveTimer); saveCode(editor.getValue()); }
      if (stopPreview) stopPreview();
      if (cancelCheck) cancelCheck();
      if (isPy) PyRunner.stop();
    };

    // -- Output --
    function addConsoleLine(text, cls) {
      var line = document.createElement("div");
      line.className = "line " + (cls || "");
      line.textContent = text;
      consoleEl.appendChild(line);
      consoleEl.hidden = false;
    }

    // Python: printed text goes to the console. input() shows a box at the end of the console.
    function runPython() {
      var stopBtn = document.getElementById("stop");
      var runBtn = document.getElementById("run");
      var current = null; // the line that print() is writing to
      if (stopPreview) stopPreview();
      consoleEl.innerHTML = "";
      consoleEl.hidden = false;

      function write(text, cls) {
        var parts = String(text).split("\n");
        parts.forEach(function (part, i) {
          if (i > 0) current = null;
          if (!part && i === parts.length - 1) return;
          if (!current) {
            current = document.createElement("div");
            current.className = "line " + (cls || "");
            consoleEl.appendChild(current);
          }
          current.textContent += part;
        });
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }

      var printed = false;
      // input() can be called before PyRunner.run returns, so cancelInput lives outside the run object.
      var cancelInput = null;
      var run = PyRunner.run(editor.getValue(), {
        timeLimitMs: 5000,
        output: function (t) { printed = true; write(t); },
        input: function (prompt) {
          return new Promise(function (resolve, reject) {
            if (prompt) write(prompt);
            var box = document.createElement("input");
            box.type = "text";
            box.className = "console-input";
            box.setAttribute("aria-label", "Type your answer, then press Enter");
            box.setAttribute("autocomplete", "off");
            box.setAttribute("autocapitalize", "off");
            (current || consoleEl).appendChild(box);
            box.focus();
            box.addEventListener("keydown", function (e) {
              if (e.key !== "Enter") return;
              e.preventDefault();
              var value = box.value;
              var typed = document.createElement("span");
              typed.className = "typed";
              typed.textContent = value;
              box.replaceWith(typed);
              current = null;
              printed = true;
              cancelInput = null;
              resolve(value);
            });
            cancelInput = function () { box.remove(); reject(new Error("CODESTART_STOPPED")); };
          });
        }
      });

      runBtn.disabled = true;
      stopBtn.hidden = false;
      var stopThis = function () {
        if (cancelInput) cancelInput();
        run.stop();
      };
      stopPreview = stopThis;
      run.promise.then(function (r) {
        if (stopPreview === stopThis) stopPreview = null;
        runBtn.disabled = false;
        stopBtn.hidden = true;
        current = null;
        if (r.error) {
          var f = PyRunner.friendlyError(r.error);
          write("⚠ " + f.text + (f.detail ? "  (" + f.detail + ")" : ""), "error");
        } else if (!printed) {
          write("(Your program ran, but printed nothing.)", "muted");
        }
      });
    }

    function runPreview() {
      if (isPy && checking) return; // a Python check is using the Python engine
      if (isPy) return runPython();
      if (stopPreview) stopPreview();
      consoleEl.innerHTML = "";
      consoleEl.hidden = isHtml;
      if (!isHtml) addConsoleLine("Running your code…", "muted");
      var storage = Progress.get(ex.id).storage;
      stopPreview = Runner.preview(ex, editor.getValue(), previewEl, function (msg) {
        if (msg.type === "log") {
          addConsoleLine(msg.text, msg.level === "error" || msg.level === "warn" ? "warn" : "");
        } else if (msg.type === "error") {
          var f = Runner.friendlyError(msg);
          addConsoleLine("⚠ " + f.text + (f.detail ? "  (" + f.detail + ")" : ""), "error");
        } else if (msg.type === "storage") {
          // Keep the student's saved data small, so it cannot fill the browser storage used for progress.
          var size = JSON.stringify(msg.data || {}).length;
          if (size <= STORAGE_LIMIT) {
            Progress.update(ex.id, { storage: msg.data });
          } else if (!storageWarned) {
            storageWarned = true;
            addConsoleLine("⚠ Your page saved more than " + Math.round(STORAGE_LIMIT / 1000) +
              " KB with localStorage. CodeStart will not keep that much. It is kept only until you leave this page.", "warn");
          }
        }
      }, storage);
      if (!isHtml) {
        // Remove the "Running…" line once the code had a moment to print.
        setTimeout(function () {
          var first = consoleEl.querySelector(".line.muted");
          if (first) first.remove();
          if (!consoleEl.children.length) addConsoleLine("(Your code ran, but printed nothing.)", "muted");
        }, 300);
      }
    }

    // -- Hints --
    function renderHints() {
      var used = Math.min(Progress.get(ex.id).hintsUsed || 0, ex.hints.length);
      document.getElementById("hints").innerHTML = ex.hints.slice(0, used).map(function (h, i) {
        return '<div class="hint"><strong>Hint ' + (i + 1) + ":</strong> " + h + "</div>";
      }).join("");
      hintBtn.textContent = used < ex.hints.length
        ? "Hint (" + used + "/" + ex.hints.length + ")"
        : "No more hints";
      hintBtn.disabled = used >= ex.hints.length;
    }

    function updateAnswerButton() {
      var item = Progress.get(ex.id);
      answerBtn.hidden = !ex.solution || (item.failedChecks || 0) < SHOW_ANSWER_AFTER;
    }

    hintBtn.addEventListener("click", function () {
      var used = Progress.get(ex.id).hintsUsed || 0;
      if (used < ex.hints.length) Progress.update(ex.id, { hintsUsed: used + 1 });
      renderHints();
    });

    answerBtn.addEventListener("click", function () {
      var box = document.getElementById("solution");
      if (!box.hidden) { box.hidden = true; return; }
      Progress.update(ex.id, { answerShown: true });
      box.innerHTML =
        "<p><strong>One possible answer.</strong> Read it line by line and compare it with your code. " +
        "Then try to write it yourself instead of copying it.</p>" +
        "<pre><code>" + esc(ex.solution) + "</code></pre>";
      box.hidden = false;
    });

    // -- Check --
    document.getElementById("check").addEventListener("click", function () {
      if (checking) return;
      checking = true;
      var checkBtn = this;
      var runBtn = document.getElementById("run");
      checkBtn.disabled = true;
      if (isPy) runBtn.disabled = true;
      feedback.className = "feedback";
      feedback.textContent = "Checking…";
      var value = editor.getValue();
      saveCode(value);

      if (isPy && stopPreview) stopPreview();
      cancelCheck = (isPy ? PyRunner : Runner).check(ex, value, function (r) {
        checking = false;
        cancelCheck = null;
        checkBtn.disabled = false;
        if (isPy) runBtn.disabled = false;
        var item = Progress.get(ex.id);
        var fields = { attempts: (item.attempts || 0) + 1 };

        if (r.ok) {
          fields.status = "done";
          Progress.update(ex.id, fields);
          feedback.className = "feedback ok";
          feedback.innerHTML = "<strong>✓ Well done!</strong> All " + r.total + " checks passed." +
            (last ? "" : " Press <em>" + esc(nextLabel.replace(" →", "")) + "</em> when you are ready.");
          document.getElementById("done-badge").hidden = false;
          lastFeedback = "All checks passed.";
        } else {
          fields.failedChecks = (item.failedChecks || 0) + 1;
          Progress.update(ex.id, fields);
          var parts = [];
          if (r.timeout) {
            parts.push("Your code took too long to finish. Check for a loop that never ends.");
          } else {
            if (r.pyError) parts.push(PyRunner.friendlyError(r.pyError).text);
            else if (r.errors.length) parts.push(Runner.friendlyError(r.errors[0]).text);
            if (r.message) parts.push(r.message);
            parts.push("(" + r.passed + " of " + r.total + " checks passed.)");
          }
          lastFeedback = parts.join(" ");
          feedback.className = "feedback fail";
          feedback.innerHTML = "<strong>Not yet.</strong> " + parts.map(esc).join(" ");
        }
        updateAnswerButton();
      });
    });

    // -- Other buttons --
    document.getElementById("run").addEventListener("click", runPreview);
    if (isPy) {
      document.getElementById("stop").addEventListener("click", function () { if (stopPreview) stopPreview(); });
      // Ctrl+Enter runs the program.
      editor.area.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && e.ctrlKey) { e.preventDefault(); runPreview(); }
      });
    }

    document.getElementById("reset").addEventListener("click", function () {
      if (confirm("Replace your code with the starting code?")) {
        editor.setValue(startingCode(unit, index));
        Progress.update(ex.id, { storage: {} });
        if (!isPy) runPreview();
      }
    });

    var downloadBtn = document.getElementById("download");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", function () {
        downloadFile(unit.fileName || (isPy ? "my-program.py" : "my-project.html"), editor.getValue());
      });
    }

    document.getElementById("ask").addEventListener("click", function () {
      openTutor(ex, editor, function () { return lastFeedback; });
    });

    renderHints();
    updateAnswerButton();
    if (isHtml) runPreview();
  }

  // ---- AI tutor --------------------------------------------------------------------------------

  function showTutorButtons() {
    var show = Tutor.isAvailable();
    Array.prototype.forEach.call(document.querySelectorAll("[data-tutor]"), function (el) { el.hidden = !show; });
  }

  function openTutor(ex, editor, getFeedback) {
    var box = document.getElementById("tutor-box");
    if (!box.hidden) { box.hidden = true; return; }
    box.innerHTML =
      '<label for="tutor-q"><strong>Ask the AI tutor</strong> — what are you stuck on? (optional)</label>' +
      '<textarea id="tutor-q" rows="2" maxlength="500" placeholder="For example: Why does my loop not stop?"></textarea>' +
      '<div class="toolbar"><button type="button" class="btn" id="tutor-send">Send</button></div>' +
      '<div id="tutor-reply" class="tutor-reply" aria-live="polite"></div>' +
      '<p class="muted small">The AI tutor gives hints, not full answers. Do not type personal information.</p>';
    box.hidden = false;

    var sendBtn = document.getElementById("tutor-send");
    var reply = document.getElementById("tutor-reply");
    sendBtn.addEventListener("click", function () {
      sendBtn.disabled = true;
      reply.className = "tutor-reply";
      reply.textContent = "Thinking…";
      Tutor.ask({
        exerciseId: ex.id,
        language: ex.type === "py" ? "Python" : ex.type === "html" ? "HTML and CSS"
          : ex.type === "mc" ? (/^ps/.test(ex.id) ? "AP Psychology multiple-choice question" : "AP CSP multiple-choice question")
          : "JavaScript",
        title: ex.title,
        instructions: plainText(ex.instructions),
        code: editor.getValue(),
        checkResult: getFeedback(),
        question: document.getElementById("tutor-q").value
      }).then(function (text) {
        reply.textContent = text;
      }, function (err) {
        reply.className = "tutor-reply error";
        reply.textContent = err.message;
      }).then(function () { sendBtn.disabled = false; });
    });
  }

  // ---- Router ----------------------------------------------------------------------------------

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts.length === 0) return showHome();
    var cat = CATEGORIES.find(function (c) { return c.id === parts[0]; });
    if (cat) return parts.length === 1 ? showCategory(cat) : notFound();

    var unit = findUnit(parts[0]);
    if (!unit || !hasContent(unit)) return notFound();
    if (parts.length === 1) return showUnit(unit);

    var list = parts[1] === "lesson" ? unit.lessons : parts[1] === "exercise" ? unit.exercises : null;
    var index = parseInt(parts[2], 10) - 1;
    if (parts.length !== 3 || !list || !(index >= 0 && index < list.length)) return notFound();

    return parts[1] === "lesson" ? showLesson(unit, index) : showExercise(unit, index);
  }

  // ---- Theme -----------------------------------------------------------------------------------
  // Auto follows the device setting. Light and Dark are fixed. The choice is saved in this browser.

  var THEMES = ["auto", "light", "dark"];
  var THEME_LABELS = { auto: "◐ Theme: Auto", light: "☀ Theme: Light", dark: "☾ Theme: Dark" };

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "auto";
  }

  function showThemeLabel() {
    var label = THEME_LABELS[currentTheme()];
    var btn = document.getElementById("theme-btn");
    btn.textContent = label;
    btn.setAttribute("aria-label", label.slice(2) + ". Press to change the theme.");
  }

  document.getElementById("theme-btn").addEventListener("click", function () {
    var theme = THEMES[(THEMES.indexOf(currentTheme()) + 1) % THEMES.length];
    if (theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("codestart.theme", theme); } catch (e) { /* not saved: still works for this visit */ }
    showThemeLabel();
  });
  showThemeLabel();

  window.addEventListener("hashchange", route);
  window.addEventListener("pagehide", function () { if (cleanup) cleanup(); });
  route();
  Tutor.init(showTutorButtons);
})();
