// Chapter 10 — Talking to the page
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch10", {
  lessons: [
    {
      id: "ch10-l1",
      title: "The DOM: the page as objects",
      html: `
        <p>When the browser reads your HTML, it turns every tag into an <strong>object</strong> that JavaScript
        can use. All these objects together are called the <strong>DOM</strong> (Document Object Model).</p>
        <p>To get one element from the page, use <code>document.querySelector</code> with a CSS selector,
        the same kind you used in CSS:</p>
        <pre><code>&lt;h1 id="title"&gt;Hello&lt;/h1&gt;
&lt;p class="note"&gt;Some text&lt;/p&gt;</code></pre>
        <pre><code>let title = document.querySelector("#title");  // # for an id
let note = document.querySelector(".note");    // . for a class
let firstP = document.querySelector("p");      // a tag name</code></pre>
        <p>Now <code>title</code> is the heading. You can read and change it.</p>
        <div class="tip">In these exercises, the HTML is already on the page. You only write the JavaScript.
        Press <strong>Run</strong> to see the page change.</div>
      `
    },
    {
      id: "ch10-l2",
      title: "Changing text and style",
      html: `
        <p><code>textContent</code> is the text inside an element. You can read it, or set it to new text:</p>
        <pre><code>let title = document.querySelector("#title");
console.log(title.textContent);   // Hello
title.textContent = "Welcome!";   // the page now shows Welcome!</code></pre>
        <p><code>style</code> changes how the element looks. The property names are like CSS, but words
        after a dash start with a capital letter and there is no dash:</p>
        <pre><code>title.style.color = "red";
title.style.backgroundColor = "yellow";  // CSS: background-color
title.style.fontSize = "40px";           // CSS: font-size</code></pre>
        <div class="tip">Style values are always text in quotes, and sizes need a unit, like <code>"40px"</code>.</div>
      `
    },
    {
      id: "ch10-l3",
      title: "Reacting to clicks",
      html: `
        <p>A program can wait for the user to do something. This is called an <strong>event</strong>.
        A click is an event.</p>
        <p><code>addEventListener</code> says: "when this event happens, run this function".</p>
        <pre><code>&lt;button id="hello"&gt;Say hello&lt;/button&gt;
&lt;p id="message"&gt;&lt;/p&gt;</code></pre>
        <pre><code>let button = document.querySelector("#hello");
let message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "Hello there!";
});</code></pre>
        <p>The function does not run right away. It runs each time someone clicks the button.</p>
        <p>To read what the user typed in an <code>&lt;input&gt;</code>, use its <code>value</code>:</p>
        <pre><code>let nameBox = document.querySelector("#name");
button.addEventListener("click", function () {
  message.textContent = "Hi, " + nameBox.value;
});</code></pre>
        <div class="tip">Read <code>value</code> <em>inside</em> the click function. If you read it before,
        you get the text from before the user typed.</div>
      `
    },
    {
      id: "ch10-l4",
      title: "Creating new elements",
      html: `
        <p>JavaScript can also add <strong>new</strong> elements to the page. It takes three steps:</p>
        <ol>
          <li>Make the element: <code>document.createElement("li")</code></li>
          <li>Give it some text: <code>item.textContent = "Milk"</code></li>
          <li>Put it inside another element: <code>list.appendChild(item)</code></li>
        </ol>
        <pre><code>&lt;ul id="shopping"&gt;&lt;/ul&gt;</code></pre>
        <pre><code>let list = document.querySelector("#shopping");
let item = document.createElement("li");
item.textContent = "Milk";
list.appendChild(item);</code></pre>
        <p>Until you call <code>appendChild</code>, the new element exists only in your program. It is not on the page yet.</p>
        <p>With a loop you can turn a whole array into a list on the page:</p>
        <pre><code>let foods = ["Milk", "Bread", "Eggs"];
for (let i = 0; i &lt; foods.length; i++) {
  let item = document.createElement("li");
  item.textContent = foods[i];
  list.appendChild(item);
}</code></pre>
      `
    }
  ],
  exercises: [
    {
      id: "ch10-ex1",
      title: "Change the heading",
      type: "js",
      pageHtml: "<h1 id=\"title\">Hello</h1>\n<p>This page is controlled by JavaScript.</p>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;h1 id="title"&gt;Hello&lt;/h1&gt;
&lt;p&gt;This page is controlled by JavaScript.&lt;/p&gt;</code></pre>
        <p>Write JavaScript that changes the heading text to <strong>Welcome to my page</strong>.</p>
        <p>Do not change the HTML. Use <code>document.querySelector</code> and <code>textContent</code>.</p>
      `,
      starterCode: "// Find the heading, then change its text\n",
      solution: "let title = document.querySelector(\"#title\");\ntitle.textContent = \"Welcome to my page\";",
      tests: [
        { check: "CS.q('#title') !== null", message: "The heading with id=\"title\" is missing. Did your code remove it?" },
        { check: "CS.text('#title') === 'Welcome to my page'", message: "The heading should say exactly \"Welcome to my page\"." }
      ],
      hints: [
        "First get the heading with <code>document.querySelector(\"#title\")</code>.",
        "Save it in a variable, for example <code>let title = ...</code>.",
        "Then set <code>title.textContent</code> to the new text, in quotes."
      ]
    },
    {
      id: "ch10-ex2",
      title: "Paint the box",
      type: "js",
      pageHtml: "<div id=\"box\" style=\"padding:20px;border:2px solid #333;\">I am a box</div>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;div id="box"&gt;I am a box&lt;/div&gt;</code></pre>
        <p>Use JavaScript to give the box:</p>
        <ul>
          <li>a <strong>yellow</strong> background color</li>
          <li>a font size of <strong>30px</strong></li>
        </ul>
      `,
      starterCode: "let box = document.querySelector(\"#box\");\n",
      solution: "let box = document.querySelector(\"#box\");\nbox.style.backgroundColor = \"yellow\";\nbox.style.fontSize = \"30px\";",
      tests: [
        { check: "CS.css('#box', 'background-color') === CS.colorOf('yellow')", message: "The box should have a yellow background. In JavaScript the property is backgroundColor." },
        { check: "CS.css('#box', 'font-size') === '30px'", message: "The font size should be 30px. Use fontSize and remember the \"px\"." }
      ],
      hints: [
        "Use <code>box.style.</code> followed by the property name.",
        "In JavaScript, <code>background-color</code> is written <code>backgroundColor</code>, and <code>font-size</code> is <code>fontSize</code>.",
        "Example: <code>box.style.backgroundColor = \"...\";</code> Do the same for the font size with <code>\"30px\"</code>."
      ]
    },
    {
      id: "ch10-ex3",
      title: "A click counter",
      type: "js",
      pageHtml: "<button id=\"add\">Click me</button>\n<p>Clicks: <span id=\"count\">0</span></p>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;button id="add"&gt;Click me&lt;/button&gt;
&lt;p&gt;Clicks: &lt;span id="count"&gt;0&lt;/span&gt;&lt;/p&gt;</code></pre>
        <p>Make the number in <code>#count</code> go up by 1 each time the button is clicked.</p>
        <p>Press <strong>Run</strong> and click the button to test it.</p>
      `,
      starterCode: "let button = document.querySelector(\"#add\");\nlet countText = document.querySelector(\"#count\");\nlet count = 0;\n\n// Add a click listener here\n",
      solution: "let button = document.querySelector(\"#add\");\nlet countText = document.querySelector(\"#count\");\nlet count = 0;\n\nbutton.addEventListener(\"click\", function () {\n  count = count + 1;\n  countText.textContent = count;\n});",
      tests: [
        { check: "CS.text('#count') === '0'", message: "Before any click, the count should still show 0." },
        { check: "CS.click('#add') && CS.text('#count') === '1'", message: "After one click, the count should show 1." },
        { check: "CS.click('#add') && CS.click('#add') && CS.text('#count') === '3'", message: "After three clicks, the count should show 3. Does the number keep going up?" }
      ],
      hints: [
        "Use <code>button.addEventListener(\"click\", function () { ... });</code>",
        "Inside the function, add 1 to <code>count</code>.",
        "After you change <code>count</code>, show it on the page: <code>countText.textContent = ...</code>"
      ]
    },
    {
      id: "ch10-ex4",
      title: "Say hello to the user",
      type: "js",
      pageHtml: "<input id=\"name\" placeholder=\"Your name\">\n<button id=\"greet\">Greet me</button>\n<p id=\"message\"></p>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;input id="name" placeholder="Your name"&gt;
&lt;button id="greet"&gt;Greet me&lt;/button&gt;
&lt;p id="message"&gt;&lt;/p&gt;</code></pre>
        <p>When the button is clicked, show <strong>Hello, NAME!</strong> in <code>#message</code>, where NAME is
        what the user typed. For example, if they type <code>Maya</code>, show <code>Hello, Maya!</code></p>
      `,
      starterCode: "let nameBox = document.querySelector(\"#name\");\nlet button = document.querySelector(\"#greet\");\nlet message = document.querySelector(\"#message\");\n",
      solution: "let nameBox = document.querySelector(\"#name\");\nlet button = document.querySelector(\"#greet\");\nlet message = document.querySelector(\"#message\");\n\nbutton.addEventListener(\"click\", function () {\n  message.textContent = \"Hello, \" + nameBox.value + \"!\";\n});",
      tests: [
        { check: "CS.type('#name', 'Maya') && CS.click('#greet') && CS.text('#message') === 'Hello, Maya!'", message: "When I type Maya and click, the message should be exactly \"Hello, Maya!\"." },
        { check: "CS.type('#name', 'Leo') && CS.click('#greet') && CS.text('#message') === 'Hello, Leo!'", message: "When I type a different name, the message should change too. Read the value inside the click function." }
      ],
      hints: [
        "Add a click listener to <code>button</code>.",
        "Inside the function, <code>nameBox.value</code> is the text the user typed.",
        "Join the parts with <code>+</code>: <code>\"Hello, \" + nameBox.value + ...</code> and put it in <code>message.textContent</code>."
      ]
    },
    {
      id: "ch10-ex5",
      title: "Build a list from an array",
      type: "js",
      pageHtml: "<h2>My games</h2>\n<ul id=\"games\"></ul>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;h2&gt;My games&lt;/h2&gt;
&lt;ul id="games"&gt;&lt;/ul&gt;</code></pre>
        <p>For every game in the <code>games</code> array, create an <code>&lt;li&gt;</code> with the game's name and
        add it to the <code>#games</code> list.</p>
      `,
      starterCode: "let games = [\"Minecraft\", \"Chess\", \"Tetris\"];\nlet list = document.querySelector(\"#games\");\n\n// Create one <li> for each game\n",
      solution: "let games = [\"Minecraft\", \"Chess\", \"Tetris\"];\nlet list = document.querySelector(\"#games\");\n\nfor (let i = 0; i < games.length; i++) {\n  let item = document.createElement(\"li\");\n  item.textContent = games[i];\n  list.appendChild(item);\n}",
      tests: [
        { check: "CS.qa('#games li').length === 3", message: "The list should have 3 <li> items, one for each game." },
        { check: "CS.qa('#games li').map(function (li) { return li.textContent.trim(); }).join('|') === 'Minecraft|Chess|Tetris'", message: "The items should say Minecraft, Chess and Tetris, in that order." },
        { check: "/createElement/.test(CS.code)", message: "Use document.createElement(\"li\") to make each item." }
      ],
      hints: [
        "Use a <code>for</code> loop over <code>games</code>.",
        "Inside the loop: <code>let item = document.createElement(\"li\");</code>",
        "Then set <code>item.textContent</code> to <code>games[i]</code>, and add it with <code>list.appendChild(...)</code>."
      ]
    }
  ]
});
