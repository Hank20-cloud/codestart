// Chapter 12 — Finding mistakes
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch12", {
  lessons: [
    {
      id: "ch12-l1",
      title: "Errors are normal",
      html: `
        <p>Every programmer makes mistakes, every day. A mistake in code is called a <strong>bug</strong>.
        Finding and fixing bugs is called <strong>debugging</strong>. It is a normal part of programming, not a sign
        that you are bad at it.</p>
        <p>When JavaScript finds a problem it cannot handle, it stops and shows an <strong>error message</strong>.
        In this course, the error appears in red in the output box under your code, like this:</p>
        <pre><code>⚠ Line 2: JavaScript does not know the name "scor". Check the spelling ...  (ReferenceError: scor is not defined)</code></pre>
        <p>An error message has three useful parts:</p>
        <ul>
          <li><strong>Line 2</strong> — the line where JavaScript noticed the problem. Look there first.</li>
          <li>A short tip in simple words.</li>
          <li>In brackets at the end, the real message from the browser, here <code>ReferenceError: scor is not defined</code>.
          You can search for this message online.</li>
        </ul>
        <p>When you press <strong>Check my answer</strong>, the same message also appears in the feedback.</p>
        <div class="tip">Sometimes the real mistake is a line or two <em>above</em> the line in the message.
        If line 5 looks fine, check line 4.</div>
      `
    },
    {
      id: "ch12-l2",
      title: "Typos and missing brackets",
      html: `
        <p><strong>"... is not defined"</strong> means JavaScript does not know that name. Usually it is a typo.
        Capital letters matter: <code>score</code>, <code>Score</code> and <code>scor</code> are three different names.</p>
        <pre><code>let score = 10;
console.log(Score);   // Error: Score is not defined</code></pre>
        <p>A <strong>SyntaxError</strong> means JavaScript cannot even read your code. Nothing runs at all.
        Often a bracket or a quote is missing:</p>
        <pre><code>function hello() {
  console.log("Hi");
                       // the } is missing here!
hello();</code></pre>
        <p>Every <code>(</code> needs a <code>)</code>, every <code>{</code> needs a <code>}</code>,
        and every <code>"</code> needs a second <code>"</code>.</p>
        <div class="tip">Indent the code inside <code>{ }</code>. Then a missing <code>}</code> is much easier to see.</div>
      `
    },
    {
      id: "ch12-l3",
      title: "Bugs without error messages",
      html: `
        <p>The hardest bugs give <strong>no error</strong>. The program runs, but it does the wrong thing.</p>
        <p><strong>= or ===?</strong> One <code>=</code> <em>sets</em> a value. Three <code>===</code> <em>compare</em> two values.</p>
        <pre><code>let age = 15;
if (age = 18) {          // wrong: this SETS age to 18
  console.log("Adult");  // so this always runs
}
if (age === 18) { ... }  // right: this compares</code></pre>
        <p><strong>Off-by-one.</strong> A loop runs one time too many, or one time too few. Remember that
        array indexes start at 0 and the last one is <code>length - 1</code>.</p>
        <pre><code>let pets = ["cat", "dog"];
for (let i = 0; i &lt;= pets.length; i++) {  // wrong: &lt;= goes to index 2
  console.log(pets[i]);                     // prints cat, dog, undefined
}</code></pre>
        <p>If you see <code>undefined</code>, you probably used an index that does not exist.</p>
        <p><strong>Text instead of a number.</strong> <code>"5" + 3</code> is <code>"53"</code>. Values from
        an <code>&lt;input&gt;</code> and from localStorage are always text. Use <code>Number()</code>.</p>
      `
    },
    {
      id: "ch12-l4",
      title: "Look inside with console.log",
      html: `
        <p>When something is wrong but you do not know where, make the program tell you what it is doing.
        Add <code>console.log</code> lines to see the values of your variables.</p>
        <pre><code>let total = 0;
let prices = [5, 10, 20];
for (let i = 1; i &lt; prices.length; i++) {
  console.log("i is", i, "price is", prices[i]);
  total = total + prices[i];
}
console.log("total is", total);   // 30? It should be 35!</code></pre>
        <p>The output shows <code>i is 1</code> first. So the loop skips index 0. The fix: start at
        <code>let i = 0</code>.</p>
        <p>A good way to debug:</p>
        <ol>
          <li>Read the error message, if there is one. Go to that line.</li>
          <li>Ask: "What did I expect? What happened instead?"</li>
          <li>Add <code>console.log</code> to check your guesses.</li>
          <li>Change <strong>one</strong> thing, then run again.</li>
        </ol>
        <div class="tip">When the bug is fixed, you can remove the extra <code>console.log</code> lines.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch12-ex1",
      title: "Fix the typo",
      type: "js",
      instructions: `
        <p>This code should print <code>Score: 10</code>, but it shows an error.</p>
        <p>Press <strong>Run</strong>, read the error message, and fix the mistake.</p>
      `,
      starterCode: "let score = 10;\nconsole.log(\"Score: \" + Score);\n",
      solution: "let score = 10;\nconsole.log(\"Score: \" + score);\n",
      tests: [
        { check: "CS.errors.length === 0", message: "Your code still has an error. Read the message and look at that line." },
        { check: "CS.logged('Score: 10')", message: "The code should print exactly \"Score: 10\"." }
      ],
      hints: [
        "The error says a name is not defined. Which name?",
        "Compare the name on line 1 with the name on line 2, letter by letter.",
        "Capital letters matter. <code>Score</code> and <code>score</code> are not the same name."
      ]
    },
    {
      id: "ch12-ex2",
      title: "The missing bracket",
      type: "js",
      instructions: `
        <p>The function <code>double</code> should give back a number times 2, and the code should print <code>8</code>.</p>
        <p>But JavaScript cannot read this code. Find what is missing and add it.</p>
      `,
      starterCode: "function double(n) {\n  return n * 2;\n\nconsole.log(double(4));\n",
      solution: "function double(n) {\n  return n * 2;\n}\n\nconsole.log(double(4));\n",
      tests: [
        { check: "CS.errors.length === 0", message: "There is still an error. JavaScript cannot read the code yet." },
        { check: "typeof double === 'function' && double(5) === 10", message: "The function double should still give back n * 2." },
        { check: "CS.logged('8')", message: "The code should print 8." }
      ],
      hints: [
        "Count the curly brackets. How many <code>{</code> are there? How many <code>}</code>?",
        "The function starts with <code>{</code> on line 1. Where does it end?",
        "Add a <code>}</code> on its own line after the <code>return</code> line."
      ]
    },
    {
      id: "ch12-ex3",
      title: "Always an adult?",
      type: "js",
      instructions: `
        <p>This code should print <code>You can vote</code> when <code>age</code> is 18 or more, and
        <code>Too young</code> otherwise.</p>
        <p>Right now it always says <code>You can vote</code>, even for age 15. There is no error message. Find the bug.</p>
      `,
      starterCode: "let age = 15;\n\nif (age = 18) {\n  console.log(\"You can vote\");\n} else {\n  console.log(\"Too young\");\n}\n",
      solution: "let age = 15;\n\nif (age >= 18) {\n  console.log(\"You can vote\");\n} else {\n  console.log(\"Too young\");\n}\n",
      tests: [
        { check: "CS.logged('Too young') && !CS.logged('You can vote')", message: "With age 15, the code should print \"Too young\" only." },
        { check: "CS.runWith({ age: 18 }).join('|') === 'You can vote'", message: "With age 18, the code should print \"You can vote\"." },
        { check: "CS.runWith({ age: 40 }).join('|') === 'You can vote'", message: "With age 40, the code should also print \"You can vote\". Older people can vote too." },
        { check: "CS.runWith({ age: 17 }).join('|') === 'Too young'", message: "With age 17, the code should print \"Too young\"." }
      ],
      hints: [
        "Look at the condition inside <code>if ( )</code>. Does it compare, or does it set a value?",
        "One <code>=</code> puts 18 into <code>age</code>. That is not a comparison.",
        "You need \"18 or more\". Which comparison operator means \"greater than or equal\"?"
      ]
    },
    {
      id: "ch12-ex4",
      title: "One name too many",
      type: "js",
      instructions: `
        <p>This loop should print every name in the array, one per line: <code>Ana</code>, <code>Ben</code>,
        <code>Cleo</code>.</p>
        <p>Press <strong>Run</strong> and look closely at the output. Something is wrong. Fix the loop.</p>
      `,
      starterCode: "let names = [\"Ana\", \"Ben\", \"Cleo\"];\n\nfor (let i = 1; i <= names.length; i++) {\n  console.log(names[i]);\n}\n",
      solution: "let names = [\"Ana\", \"Ben\", \"Cleo\"];\n\nfor (let i = 0; i < names.length; i++) {\n  console.log(names[i]);\n}\n",
      tests: [
        { check: "!CS.logged('undefined')", message: "Your code prints \"undefined\". It uses an index that does not exist in the array." },
        { check: "CS.logged('Ana')", message: "\"Ana\" is not printed. Which index does the first item have?" },
        { check: "CS.logs.join('|') === 'Ana|Ben|Cleo'", message: "The output should be exactly Ana, Ben, Cleo, one per line." }
      ],
      hints: [
        "The output starts with Ben and ends with <code>undefined</code>. So there are two problems.",
        "The first index of an array is 0. Where does the loop start?",
        "The last index is <code>names.length - 1</code>. Should the condition use <code>&lt;=</code> or <code>&lt;</code>?"
      ]
    },
    {
      id: "ch12-ex5",
      title: "The strange total",
      type: "js",
      pageHtml: "<input id=\"price\" placeholder=\"Price\">\n<button id=\"add\">Add</button>\n<p>Total: <span id=\"total\">0</span></p>\n",
      instructions: `
        <p>The page has this HTML:</p>
        <pre><code>&lt;input id="price" placeholder="Price"&gt;
&lt;button id="add"&gt;Add&lt;/button&gt;
&lt;p&gt;Total: &lt;span id="total"&gt;0&lt;/span&gt;&lt;/p&gt;</code></pre>
        <p>Type a price and press <strong>Add</strong>. The total should go up. But if you add <code>5</code> and then
        <code>3</code>, it shows <code>053</code> instead of <code>8</code>.</p>
        <p>Use the <code>console.log</code> line to look inside, then fix the bug.</p>
      `,
      starterCode: "let priceBox = document.querySelector(\"#price\");\nlet button = document.querySelector(\"#add\");\nlet totalText = document.querySelector(\"#total\");\nlet total = 0;\n\nbutton.addEventListener(\"click\", function () {\n  let price = priceBox.value;\n  console.log(\"price is\", price, \"and total is\", total);\n  total = total + price;\n  totalText.textContent = total;\n});\n",
      solution: "let priceBox = document.querySelector(\"#price\");\nlet button = document.querySelector(\"#add\");\nlet totalText = document.querySelector(\"#total\");\nlet total = 0;\n\nbutton.addEventListener(\"click\", function () {\n  let price = Number(priceBox.value);\n  console.log(\"price is\", price, \"and total is\", total);\n  total = total + price;\n  totalText.textContent = total;\n});\n",
      tests: [
        { check: "CS.text('#total') === '0'", message: "Before any click, the total should be 0." },
        { check: "CS.type('#price', '5') && CS.click('#add') && CS.text('#total') === '5'", message: "After adding 5, the total should be 5." },
        { check: "CS.type('#price', '3') && CS.click('#add') && CS.text('#total') === '8'", message: "After adding 5 and then 3, the total should be 8, not 053. The price is text." }
      ],
      hints: [
        "Look at the output. Is <code>total</code> a number, or does it grow like text?",
        "The <code>value</code> of an input is always text. <code>0 + \"5\"</code> gives <code>\"05\"</code>.",
        "Turn the price into a number with <code>Number( )</code> before you add it."
      ]
    }
  ]
});
