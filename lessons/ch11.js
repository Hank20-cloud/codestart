// Chapter 11 — Remembering data
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch11", {
  lessons: [
    {
      id: "ch11-l1",
      title: "Why programs forget",
      html: `
        <p>Try this: make a click counter, click it 10 times, then reload the page. The count goes back to 0.</p>
        <p>Variables live only while the page is open. When the page reloads, the program starts again from the
        top, and all variables are new.</p>
        <p>To remember something, we must <strong>save</strong> it. The browser has a small storage place for
        each website called <strong>localStorage</strong>. Data you put there stays, even after you close the
        browser. It is saved on <em>this</em> computer, in <em>this</em> browser only.</p>
        <pre><code>localStorage.setItem("player", "Sam");      // save
let name = localStorage.getItem("player");   // read
console.log(name);                            // Sam
localStorage.removeItem("player");            // delete</code></pre>
        <p>Each saved value has a <strong>key</strong> (a name, like <code>"player"</code>) and a
        <strong>value</strong>.</p>
        <div class="tip">In this course, each exercise has its own storage. Data your code saves is still there
        the next time you press <strong>Run</strong>, just like a real page that you reload.</div>
      `
    },
    {
      id: "ch11-l2",
      title: "Everything is saved as text",
      html: `
        <p>localStorage can only keep <strong>text</strong>. If you save a number, you get text back:</p>
        <pre><code>localStorage.setItem("score", 5);
let score = localStorage.getItem("score");
console.log(score + 1);   // "51"  (text joined, not added!)</code></pre>
        <p>Use <code>Number()</code> to turn the text back into a number:</p>
        <pre><code>let score = Number(localStorage.getItem("score"));
console.log(score + 1);   // 6</code></pre>
        <p>If nothing was saved with that key, <code>getItem</code> gives <code>null</code>.
        You can check for that and use a starting value:</p>
        <pre><code>let saved = localStorage.getItem("score");
let score = 0;
if (saved !== null) {
  score = Number(saved);
}</code></pre>
      `
    },
    {
      id: "ch11-l3",
      title: "Saving arrays and objects with JSON",
      html: `
        <p>Arrays and objects are not text, so we change them into text first. <strong>JSON</strong>
        (JavaScript Object Notation) is a way to write data as text.</p>
        <ul>
          <li><code>JSON.stringify(value)</code> turns an array or object into text.</li>
          <li><code>JSON.parse(text)</code> turns that text back into an array or object.</li>
        </ul>
        <pre><code>let todo = ["Homework", "Walk the dog"];
localStorage.setItem("todo", JSON.stringify(todo));
// saved text: ["Homework","Walk the dog"]

let loaded = JSON.parse(localStorage.getItem("todo"));
console.log(loaded[1]);   // Walk the dog</code></pre>
        <p>It works the same for objects:</p>
        <pre><code>let player = { name: "Sam", level: 3 };
localStorage.setItem("player", JSON.stringify(player));
let back = JSON.parse(localStorage.getItem("player"));
console.log(back.level);  // 3</code></pre>
        <div class="tip">Remember the pair: <strong>stringify</strong> when you save, <strong>parse</strong> when you load.</div>
      `
    },
    {
      id: "ch11-l4",
      title: "A counter that remembers",
      html: `
        <p>Now we can join everything. When the page starts, load the saved count. When the user clicks,
        change the count, show it, and save it again.</p>
        <pre><code>let button = document.querySelector("#add");
let countText = document.querySelector("#count");

// 1. Load (or start at 0)
let count = Number(localStorage.getItem("clicks"));
countText.textContent = count;

// 2. On each click: change, show, save
button.addEventListener("click", function () {
  count = count + 1;
  countText.textContent = count;
  localStorage.setItem("clicks", count);
});</code></pre>
        <p><code>Number(null)</code> is <code>0</code>, so the first time (when nothing is saved) the count starts at 0.</p>
        <p>This "load at the start, save after each change" pattern is used in almost every app that remembers things.</p>
      `
    }
  ],
  exercises: [
    {
      id: "ch11-ex1",
      title: "Save your name",
      type: "js",
      instructions: `
        <p>Save your name in localStorage with the key <code>"name"</code>.</p>
        <p>Then read it back with <code>getItem</code> and print it with <code>console.log</code>.</p>
      `,
      starterCode: "// Save your name, then read it back and print it\n",
      solution: "localStorage.setItem(\"name\", \"Sam\");\nlet name = localStorage.getItem(\"name\");\nconsole.log(name);",
      tests: [
        { check: "typeof CS.storage().name === 'string' && CS.storage().name.trim().length > 0", message: "Nothing is saved with the key \"name\". Use localStorage.setItem(\"name\", ...)." },
        { check: "/getItem/.test(CS.code)", message: "Read the value back with localStorage.getItem(\"name\")." },
        { check: "CS.logged(CS.storage().name)", message: "Print the name you read back from localStorage." }
      ],
      hints: [
        "<code>setItem</code> needs two things: the key and the value.",
        "Save: <code>localStorage.setItem(\"name\", \"...\");</code>",
        "Read it into a variable with <code>localStorage.getItem(\"name\")</code>, then print that variable."
      ]
    },
    {
      id: "ch11-ex2",
      title: "Load a saved score",
      type: "js",
      storage: { score: "40" },
      instructions: `
        <p>A score of <code>40</code> is already saved with the key <code>"score"</code>.</p>
        <p>Load it, turn it into a number, add <strong>10</strong>, then:</p>
        <ul>
          <li>print the new score (it should be <code>50</code>, not <code>4010</code>)</li>
          <li>save the new score back with the same key</li>
        </ul>
      `,
      starterCode: "let score = localStorage.getItem(\"score\");\n",
      solution: "let score = Number(localStorage.getItem(\"score\"));\nscore = score + 10;\nconsole.log(score);\nlocalStorage.setItem(\"score\", score);",
      tests: [
        { check: "!CS.logged('4010')", message: "You got 4010. The saved score is text. Turn it into a number with Number( ) first." },
        { check: "CS.logged('50')", message: "Print the new score. It should be 50." },
        { check: "CS.storage().score === '50'", message: "Save the new score back with localStorage.setItem(\"score\", ...)." }
      ],
      hints: [
        "<code>getItem</code> always gives text. Put it inside <code>Number( )</code>.",
        "Add 10 with <code>score = score + 10;</code> and print it.",
        "Save it again with <code>localStorage.setItem(\"score\", score);</code>"
      ]
    },
    {
      id: "ch11-ex3",
      title: "Save a list with JSON",
      type: "js",
      instructions: `
        <p>Save the <code>songs</code> array in localStorage with the key <code>"songs"</code>.
        Use <code>JSON.stringify</code> so the whole array is saved.</p>
      `,
      starterCode: "let songs = [\"Happy\", \"Believer\", \"Shake It Off\"];\n\n// Save the array here\n",
      solution: "let songs = [\"Happy\", \"Believer\", \"Shake It Off\"];\n\nlocalStorage.setItem(\"songs\", JSON.stringify(songs));",
      tests: [
        { check: "typeof CS.storage().songs === 'string'", message: "Nothing is saved with the key \"songs\" yet." },
        { check: "CS.storage().songs.charAt(0) === '['", message: "The saved text does not look like an array. Did you use JSON.stringify?" },
        { check: "JSON.parse(CS.storage().songs).join('|') === 'Happy|Believer|Shake It Off'", message: "The saved array should have all 3 songs, in the same order." }
      ],
      hints: [
        "<code>JSON.stringify(songs)</code> turns the array into text.",
        "Put that text in the second part of <code>setItem</code>.",
        "<code>localStorage.setItem(\"songs\", ...);</code> — replace the dots with the stringify part."
      ]
    },
    {
      id: "ch11-ex4",
      title: "Load a saved player",
      type: "js",
      storage: { player: "{\"name\":\"Zoe\",\"level\":7}" },
      instructions: `
        <p>A player object is already saved as JSON text with the key <code>"player"</code>.
        It looks like this: <code>{"name":"Zoe","level":7}</code></p>
        <p>Load it, turn it back into an object with <code>JSON.parse</code>, and print the player's
        <code>name</code> and then the <code>level</code> (two <code>console.log</code> lines).</p>
      `,
      starterCode: "let text = localStorage.getItem(\"player\");\n",
      solution: "let text = localStorage.getItem(\"player\");\nlet player = JSON.parse(text);\nconsole.log(player.name);\nconsole.log(player.level);",
      tests: [
        { check: "/JSON\\.parse/.test(CS.code)", message: "Use JSON.parse to turn the saved text back into an object." },
        { check: "CS.logged('Zoe')", message: "Print the player's name (it should be Zoe)." },
        { check: "CS.logged('7')", message: "Print the player's level (it should be 7)." }
      ],
      hints: [
        "<code>text</code> is only text. You cannot use <code>text.name</code> yet.",
        "Make an object: <code>let player = JSON.parse(text);</code>",
        "Now you can print <code>player.name</code> and <code>player.level</code>."
      ]
    },
    {
      id: "ch11-ex5",
      title: "A counter that remembers",
      type: "js",
      storage: { clicks: "5" },
      pageHtml: "<button id=\"add\">Click me</button>\n<p>Clicks: <span id=\"count\">0</span></p>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;button id="add"&gt;Click me&lt;/button&gt;
&lt;p&gt;Clicks: &lt;span id="count"&gt;0&lt;/span&gt;&lt;/p&gt;</code></pre>
        <p>The counter already works, but it forgets. Make it remember, using the key <code>"clicks"</code>:</p>
        <ul>
          <li>When the page starts, load the saved count and show it.</li>
          <li>After each click, save the new count.</li>
        </ul>
        <p>For this exercise, <code>5</code> is already saved, so after you fix it the page should start at 5.</p>
      `,
      starterCode: "let button = document.querySelector(\"#add\");\nlet countText = document.querySelector(\"#count\");\nlet count = 0;\ncountText.textContent = count;\n\nbutton.addEventListener(\"click\", function () {\n  count = count + 1;\n  countText.textContent = count;\n});\n",
      solution: "let button = document.querySelector(\"#add\");\nlet countText = document.querySelector(\"#count\");\nlet count = Number(localStorage.getItem(\"clicks\"));\ncountText.textContent = count;\n\nbutton.addEventListener(\"click\", function () {\n  count = count + 1;\n  countText.textContent = count;\n  localStorage.setItem(\"clicks\", count);\n});\n",
      tests: [
        { check: "CS.text('#count') === '5'", message: "When the page starts, it should show the saved count (5). Load it with getItem." },
        { check: "CS.click('#add') && CS.text('#count') === '6'", message: "After one click the count should be 6. Is the saved count turned into a number?" },
        { check: "CS.storage().clicks === '6'", message: "After a click, save the new count with localStorage.setItem(\"clicks\", ...)." }
      ],
      hints: [
        "Change the line <code>let count = 0;</code> so it loads the saved value instead.",
        "Load with <code>Number(localStorage.getItem(\"clicks\"))</code>.",
        "Inside the click function, after the count changes, add a <code>localStorage.setItem</code> line with the key <code>\"clicks\"</code>."
      ]
    }
  ]
});
