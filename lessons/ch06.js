// Chapter 6 — Making decisions
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch06", {
  lessons: [
    {
      id: "ch06-l1",
      title: "True or false",
      html: `
        <p>Programs often ask questions with a yes or no answer. Is the player alive? Is the score above 100?</p>
        <p>In JavaScript, the answer is a <strong>boolean</strong>: <code>true</code> or <code>false</code>.
        You get one by <strong>comparing</strong> two values:</p>
        <pre><code>console.log(5 > 3);     // true
console.log(5 &lt; 3);     // false
console.log(4 === 4);   // true</code></pre>
        <p>The comparison signs:</p>
        <ul>
          <li><code>===</code> is equal to</li>
          <li><code>!==</code> is not equal to</li>
          <li><code>&gt;</code> is greater than, <code>&lt;</code> is less than</li>
          <li><code>&gt;=</code> is greater than or equal to, <code>&lt;=</code> is less than or equal to</li>
        </ul>
        <div class="tip">One <code>=</code> <strong>puts</strong> a value in a variable. Three <code>===</code>
        <strong>compare</strong> two values. Mixing them up is a very common mistake.</div>
        <p>You can compare strings too: <code>"cat" === "cat"</code> is <code>true</code>, but
        <code>"Cat" === "cat"</code> is <code>false</code>, because capital letters matter.</p>
      `
    },
    {
      id: "ch06-l2",
      title: "if and else",
      html: `
        <p>With <code>if</code>, some code runs only when a condition is <code>true</code>:</p>
        <pre><code>let age = 16;

if (age >= 16) {
  console.log("You can learn to drive.");
}</code></pre>
        <p>The condition goes in round brackets <code>( )</code>. The code to run goes in curly brackets
        <code>{ }</code>.</p>
        <p>Add <code>else</code> to say what happens when the condition is <code>false</code>:</p>
        <pre><code>if (age >= 16) {
  console.log("You can learn to drive.");
} else {
  console.log("Wait a little longer.");
}</code></pre>
        <p>Exactly one of the two parts runs. Never both.</p>
        <div class="tip">The code inside <code>{ }</code> is moved to the right with spaces. This is called
        <strong>indenting</strong>. The computer does not need it, but it helps humans read the code.</div>
      `
    },
    {
      id: "ch06-l3",
      title: "More choices with else if",
      html: `
        <p>When there are more than two choices, use <code>else if</code>:</p>
        <pre><code>let hour = 14;

if (hour &lt; 12) {
  console.log("Good morning");
} else if (hour &lt; 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}</code></pre>
        <p>The computer checks the conditions from top to bottom. It runs the <strong>first</strong> part
        whose condition is true and skips the rest. Here <code>hour &lt; 12</code> is false, then
        <code>hour &lt; 18</code> is true, so it prints <code>Good afternoon</code>.</p>
        <p>The last <code>else</code> has no condition. It runs when nothing above was true.</p>
      `
    },
    {
      id: "ch06-l4",
      title: "and (&&), or (||)",
      html: `
        <p>Sometimes you need two conditions together.</p>
        <p><code>&amp;&amp;</code> means <strong>and</strong>: it is true only when <em>both</em> sides are true.</p>
        <pre><code>let age = 15;
let hasTicket = true;

if (age >= 13 &amp;&amp; hasTicket) {
  console.log("Enjoy the movie!");
}</code></pre>
        <p><code>||</code> means <strong>or</strong>: it is true when <em>at least one</em> side is true.</p>
        <pre><code>let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
}</code></pre>
        <div class="tip">You must write the full comparison on both sides. <code>day === "Saturday" || "Sunday"</code>
        does not do what you want. Write <code>day === "Saturday" || day === "Sunday"</code>.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch06-ex1",
      title: "Print true or false",
      type: "js",
      instructions: `
        <p>The variable <code>age</code> holds a person's age. Print the answer to the question
        "Is this person 18 or older?". The output should be <code>true</code> or <code>false</code>.</p>
        <p>Don't type <code>true</code> or <code>false</code> yourself. Use a comparison.</p>
      `,
      starterCode: "let age = 15;\n\n",
      solution: "let age = 15;\n\nconsole.log(age >= 18);\n",
      tests: [
        { check: "CS.logged('false')", message: "With age 15, the answer should be false. Print a comparison with console.log." },
        { check: "CS.runWith({ age: 20 }).map(function (l) { return l.trim(); }).join('|') === 'true'", message: "With age 20, your program should print true. Use a comparison with the variable age." },
        { check: "CS.runWith({ age: 18 }).map(function (l) { return l.trim(); }).join('|') === 'true'", message: "With age 18 the person is \"18 or older\", so it should print true. Which sign means \"greater than or equal\"?" }
      ],
      hints: [
        "A comparison like <code>5 &gt; 3</code> gives <code>true</code> or <code>false</code>.",
        "\"18 or older\" means \"greater than or equal to 18\". That sign is <code>&gt;=</code>.",
        "Put the comparison inside console.log: <code>console.log(age ... 18);</code>"
      ]
    },
    {
      id: "ch06-ex2",
      title: "Hot or not",
      type: "js",
      instructions: `
        <p>Use <code>if</code> and <code>else</code>:</p>
        <ul>
          <li>If <code>temperature</code> is greater than 25, print <strong>Hot</strong></li>
          <li>Otherwise, print <strong>Not hot</strong></li>
        </ul>
        <p>Your program should print only one line. Try changing the number in the first line and press Run again.</p>
      `,
      starterCode: "let temperature = 30;\n\n",
      solution: "let temperature = 30;\n\nif (temperature > 25) {\n  console.log(\"Hot\");\n} else {\n  console.log(\"Not hot\");\n}\n",
      tests: [
        { check: "CS.runWith({ temperature: 30 }).map(function (l) { return l.trim(); }).join('|') === 'Hot'", message: "With temperature 30, your program should print only \"Hot\"." },
        { check: "CS.runWith({ temperature: 10 }).map(function (l) { return l.trim(); }).join('|') === 'Not hot'", message: "With temperature 10, your program should print only \"Not hot\". Did you add an else part?" },
        { check: "CS.runWith({ temperature: 25 }).map(function (l) { return l.trim(); }).join('|') === 'Not hot'", message: "25 is not greater than 25, so it should print \"Not hot\". Check your comparison sign." }
      ],
      hints: [
        "Start with <code>if (temperature &gt; 25) { ... }</code>.",
        "After the closing <code>}</code> of the if, write <code>else { ... }</code>.",
        "Put <code>console.log(\"Hot\");</code> inside the if part and <code>console.log(\"Not hot\");</code> inside the else part."
      ]
    },
    {
      id: "ch06-ex3",
      title: "Test grade",
      type: "js",
      instructions: `
        <p>Print a letter grade for the <code>points</code> on a test:</p>
        <ul>
          <li>90 or more: print <strong>A</strong></li>
          <li>70 or more (but less than 90): print <strong>B</strong></li>
          <li>less than 70: print <strong>C</strong></li>
        </ul>
        <p>Use <code>if</code>, <code>else if</code> and <code>else</code>. Print only one letter.</p>
      `,
      starterCode: "let points = 75;\n\n",
      solution: "let points = 75;\n\nif (points >= 90) {\n  console.log(\"A\");\n} else if (points >= 70) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}\n",
      tests: [
        { check: "CS.runWith({ points: 95 }).map(function (l) { return l.trim(); }).join('|') === 'A'", message: "With 95 points, your program should print only \"A\"." },
        { check: "CS.runWith({ points: 75 }).map(function (l) { return l.trim(); }).join('|') === 'B'", message: "With 75 points, your program should print only \"B\"." },
        { check: "CS.runWith({ points: 40 }).map(function (l) { return l.trim(); }).join('|') === 'C'", message: "With 40 points, your program should print only \"C\"." },
        { check: "CS.runWith({ points: 90 }).map(function (l) { return l.trim(); }).join('|') === 'A' && CS.runWith({ points: 70 }).map(function (l) { return l.trim(); }).join('|') === 'B'", message: "Check the edges: 90 points is an A, and 70 points is a B. Use >= (greater than or equal)." }
      ],
      hints: [
        "Check the highest grade first: <code>if (points &gt;= 90)</code>.",
        "Then <code>else if (points &gt;= 70)</code>. The computer only gets here when the first condition was false.",
        "The last part is <code>else { console.log(\"C\"); }</code>. It needs no condition."
      ]
    },
    {
      id: "ch06-ex4",
      title: "Can you ride?",
      type: "js",
      instructions: `
        <p>To ride the roller coaster you must be <strong>at least 12 years old</strong> AND
        <strong>at least 140 cm tall</strong>.</p>
        <ul>
          <li>If both are true, print <strong>You can ride</strong></li>
          <li>Otherwise, print <strong>Sorry, not today</strong></li>
        </ul>
      `,
      starterCode: "let age = 13;\nlet height = 150;\n\n",
      solution: "let age = 13;\nlet height = 150;\n\nif (age >= 12 && height >= 140) {\n  console.log(\"You can ride\");\n} else {\n  console.log(\"Sorry, not today\");\n}\n",
      tests: [
        { check: "CS.runWith({ age: 13, height: 150 }).map(function (l) { return l.trim(); }).join('|') === 'You can ride'", message: "Age 13 and height 150 should print only \"You can ride\"." },
        { check: "CS.runWith({ age: 10, height: 150 }).map(function (l) { return l.trim(); }).join('|') === 'Sorry, not today'", message: "Age 10 is too young, even when tall. It should print \"Sorry, not today\"." },
        { check: "CS.runWith({ age: 15, height: 130 }).map(function (l) { return l.trim(); }).join('|') === 'Sorry, not today'", message: "Height 130 is too short, even when old enough. Both conditions must be true. Did you use && ?" },
        { check: "CS.runWith({ age: 12, height: 140 }).map(function (l) { return l.trim(); }).join('|') === 'You can ride'", message: "Exactly 12 years and 140 cm is allowed (\"at least\"). Check your comparison signs." }
      ],
      hints: [
        "\"At least 12\" means <code>age &gt;= 12</code>.",
        "Join two conditions with <code>&amp;&amp;</code> when both must be true.",
        "The if line looks like <code>if (age &gt;= 12 &amp;&amp; height ... 140) {</code>. Then add the else part."
      ]
    },
    {
      id: "ch06-ex5",
      title: "Mini challenge: ticket price",
      type: "js",
      instructions: `
        <p>A museum ticket costs 10 dollars. Children <strong>under 12</strong> and seniors
        <strong>65 or older</strong> pay only 5 dollars.</p>
        <p>Print the price for <code>age</code> in this form:</p>
        <pre><code>Price: 10</code></pre>
        <p>or</p>
        <pre><code>Price: 5</code></pre>
        <div class="tip">You can solve this with <code>||</code> (or) and one <code>if</code> / <code>else</code>.</div>
      `,
      starterCode: "let age = 30;\n\n",
      solution: "let age = 30;\n\nif (age < 12 || age >= 65) {\n  console.log(\"Price: 5\");\n} else {\n  console.log(\"Price: 10\");\n}\n",
      tests: [
        { check: "CS.runWith({ age: 30 }).map(function (l) { return l.trim(); }).join('|') === 'Price: 10'", message: "Age 30 should print only \"Price: 10\"." },
        { check: "CS.runWith({ age: 8 }).map(function (l) { return l.trim(); }).join('|') === 'Price: 5'", message: "Age 8 (a child) should print only \"Price: 5\"." },
        { check: "CS.runWith({ age: 70 }).map(function (l) { return l.trim(); }).join('|') === 'Price: 5'", message: "Age 70 (a senior) should print only \"Price: 5\"." },
        { check: "CS.runWith({ age: 12 }).map(function (l) { return l.trim(); }).join('|') === 'Price: 10' && CS.runWith({ age: 65 }).map(function (l) { return l.trim(); }).join('|') === 'Price: 5'", message: "Check the edges: age 12 pays 10 (not under 12), and age 65 pays 5 (65 or older)." }
      ],
      hints: [
        "There are two groups that pay 5: children and seniors. That is an \"or\" question.",
        "Children: <code>age &lt; 12</code>. Seniors: <code>age &gt;= 65</code>. Join them with <code>||</code>.",
        "<code>if (age &lt; 12 || ...) {</code> print \"Price: 5\", <code>} else {</code> print \"Price: 10\"."
      ]
    }
  ]
});
