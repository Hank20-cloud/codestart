// Chapter 5 — JavaScript first steps
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch05", {
  lessons: [
    {
      id: "ch05-l1",
      title: "What is a program?",
      html: `
        <p>A <strong>program</strong> is a list of instructions for the computer. The computer does them
        one by one, from the top line to the bottom line.</p>
        <p>HTML only says <em>what</em> is on a page. <strong>JavaScript</strong> is a real programming
        language: it can do math, make decisions, and repeat work.</p>
        <p>Your first instruction is <code>console.log</code>. It prints something on the screen:</p>
        <pre><code>console.log("Hello, world!");</code></pre>
        <ul>
          <li>The text goes between the round brackets <code>( )</code>.</li>
          <li>Text must be inside quotes: <code>"Hello"</code>.</li>
          <li>The line ends with a semicolon <code>;</code>. It is like a full stop at the end of a sentence.</li>
        </ul>
        <div class="tip"><strong>Where do I see the result?</strong> In JavaScript exercises, press
        <strong>Run</strong>. What your program prints with <code>console.log</code> appears in the
        <strong>Output</strong> box under the editor.</div>
      `
    },
    {
      id: "ch05-l2",
      title: "Comments and numbers",
      html: `
        <p>A <strong>comment</strong> is a note for humans. The computer skips it. A comment starts with
        <code>//</code> and goes to the end of the line.</p>
        <pre><code>// This line is a comment. Nothing happens.
console.log(5);   // prints 5</code></pre>
        <p>JavaScript is very good at math. Numbers do <strong>not</strong> need quotes.</p>
        <pre><code>console.log(2 + 3);    // 5   (add)
console.log(10 - 4);   // 6   (subtract)
console.log(6 * 7);    // 42  (multiply, use *)
console.log(20 / 4);   // 5   (divide, use /)
console.log(17 % 5);   // 2   (remainder)</code></pre>
        <p>The <code>%</code> sign gives the <strong>remainder</strong> after dividing.
        17 divided by 5 is 3, with 2 left over. So <code>17 % 5</code> is 2.</p>
        <div class="tip">Quotes matter: <code>console.log(2 + 3)</code> prints <code>5</code>, but
        <code>console.log("2 + 3")</code> prints the text <code>2 + 3</code>.</div>
      `
    },
    {
      id: "ch05-l3",
      title: "Text and joining text",
      html: `
        <p>Text in a program is called a <strong>string</strong>. A string is inside quotes.
        You can use double quotes <code>"Hi"</code> or single quotes <code>'Hi'</code>.</p>
        <p>The <code>+</code> sign can also <strong>join</strong> strings together:</p>
        <pre><code>console.log("Hello, " + "Maria");      // Hello, Maria
console.log("I am " + 15 + " years old"); // I am 15 years old</code></pre>
        <p>Look at the spaces. The computer does not add spaces for you. <code>"Hello," + "Maria"</code>
        gives <code>Hello,Maria</code>. Put the space inside the quotes.</p>
        <p>You can also give <code>console.log</code> several things with commas. It puts a space between them:</p>
        <pre><code>console.log("Score:", 10);   // Score: 10</code></pre>
      `
    },
    {
      id: "ch05-l4",
      title: "Variables: let and const",
      html: `
        <p>A <strong>variable</strong> is a box with a name. You put a value in the box and use the name later.</p>
        <pre><code>let age = 15;
let firstName = "Leo";
console.log(firstName + " is " + age);   // Leo is 15</code></pre>
        <p><code>let</code> creates a variable that can <strong>change</strong> later. To change it, write the
        name, <code>=</code>, and the new value (no <code>let</code> the second time):</p>
        <pre><code>let score = 0;
score = 10;           // now score is 10
score = score + 5;    // take the old value, add 5: now 15
score += 5;           // short way to write the same thing: now 20
console.log(score);   // 20</code></pre>
        <p><code>const</code> creates a variable that can <strong>never change</strong>:</p>
        <pre><code>const daysInWeek = 7;</code></pre>
        <div class="tip">Names cannot have spaces. Use one word, like <code>firstName</code> or
        <code>totalScore</code>. Capital letters matter: <code>score</code> and <code>Score</code> are
        two different names.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch05-ex1",
      title: "Say hello",
      type: "js",
      instructions: `
        <p>Use <code>console.log</code> to print exactly: <strong>Hello, world!</strong></p>
        <p>Press <strong>Run</strong> and look at the Output box.</p>
      `,
      starterCode: "// Write your code below this line\n",
      solution: "// Write your code below this line\nconsole.log(\"Hello, world!\");\n",
      tests: [
        { check: "CS.logs.length >= 1", message: "Your program does not print anything yet. Use console.log( ... )." },
        { check: "CS.logged('Hello, world!')", message: "Something is printed, but not exactly \"Hello, world!\". Check the comma, the capital H and the !" }
      ],
      hints: [
        "To print, use <code>console.log( )</code>.",
        "Text must be inside quotes, like <code>\"some text\"</code>.",
        "The pattern is: <code>console.log(\"your text\");</code>"
      ]
    },
    {
      id: "ch05-ex2",
      title: "Let the computer do the math",
      type: "js",
      instructions: `
        <p>Print the answers to these two questions. Do not work them out yourself:
        write the math inside <code>console.log</code> and let the computer do it.</p>
        <ol>
          <li>What is 7 times 8?</li>
          <li>What is 100 minus 37?</li>
        </ol>
        <p>Print each answer on its own line (use two <code>console.log</code> lines).</p>
      `,
      starterCode: "// 1. 7 times 8\n\n// 2. 100 minus 37\n",
      solution: "// 1. 7 times 8\nconsole.log(7 * 8);\n// 2. 100 minus 37\nconsole.log(100 - 37);\n",
      tests: [
        { check: "CS.logged('56')", message: "I can't see the answer to 7 times 8. Remember: multiply uses *." },
        { check: "CS.logged('63')", message: "I can't see the answer to 100 minus 37." },
        { check: "!/console\\.log\\(\\s*['\"]?(56|63)['\"]?\\s*\\)/.test(CS.code)", message: "Don't type the answer yourself. Write the math (like 7 * 8) inside console.log." }
      ],
      hints: [
        "Numbers do not need quotes. Math inside <code>console.log( )</code> is done before printing.",
        "Multiply uses <code>*</code> and minus uses <code>-</code>.",
        "The first line looks like <code>console.log(7 * 8);</code>. Write the second one the same way."
      ]
    },
    {
      id: "ch05-ex3",
      title: "Join text with a variable",
      type: "js",
      instructions: `
        <p>The variable <code>firstName</code> already holds a name. Print a sentence that uses it, like this:</p>
        <pre><code>Hi, my name is Sam</code></pre>
        <p>Use the variable, not the word "Sam" typed by hand. If someone changes the name in the
        first line, your sentence should change too.</p>
      `,
      starterCode: "let firstName = \"Sam\";\n\n// Print: Hi, my name is Sam\n",
      solution: "let firstName = \"Sam\";\n\n// Print: Hi, my name is Sam\nconsole.log(\"Hi, my name is \" + firstName);\n",
      tests: [
        { check: "CS.logged('Hi, my name is Sam')", message: "I can't see \"Hi, my name is Sam\" in the output. Check the spaces and the comma." },
        { check: "CS.runWith({ firstName: 'Lee' }).map(function (l) { return l.trim(); }).indexOf('Hi, my name is Lee') >= 0", message: "When I change the name to Lee, your sentence does not change. Use the variable firstName instead of typing Sam." }
      ],
      hints: [
        "Use <code>+</code> to join a string and a variable.",
        "The variable name goes <strong>outside</strong> the quotes. Inside quotes it would be just text.",
        "Start like this: <code>console.log(\"Hi, my name is \" + ...);</code> Don't forget the space before the closing quote."
      ]
    },
    {
      id: "ch05-ex4",
      title: "Change a variable",
      type: "js",
      instructions: `
        <p>In a game, <code>score</code> starts at 0.</p>
        <ol>
          <li>The player gets 10 points. Add 10 to <code>score</code>.</li>
          <li>Then the player gets 5 more points. Add 5 to <code>score</code>.</li>
          <li>Print <code>score</code>.</li>
        </ol>
        <p>Do not change the first line. Change the variable on new lines below it.</p>
      `,
      starterCode: "let score = 0;\n\n",
      solution: "let score = 0;\n\nscore = score + 10;\nscore = score + 5;\nconsole.log(score);\n",
      tests: [
        { check: "/let\\s+score\\s*=\\s*0\\s*;?/.test(CS.code)", message: "Keep the first line: let score = 0;" },
        { check: "typeof score !== 'undefined' && score === 15", message: "At the end, score should be 15. Did you add 10 and then 5?" },
        { check: "CS.logged('15')", message: "Print score at the end with console.log(score);" }
      ],
      hints: [
        "To change a variable, write its name, then <code>=</code>, then the new value. Don't use <code>let</code> again.",
        "<code>score + 10</code> means \"the old score plus 10\".",
        "One line is <code>score = score + 10;</code>. Add a similar line for the 5 points, then print."
      ]
    },
    {
      id: "ch05-ex5",
      title: "Mini challenge: sharing pizza",
      type: "js",
      instructions: `
        <p>Friends share pizza slices. Each friend gets the same number of slices. Some slices may be left over.</p>
        <p>Write code that prints how many slices are <strong>left over</strong>, in this form:</p>
        <pre><code>Left over: 2</code></pre>
        <p>With 12 slices and 5 people, 2 slices are left over. Your code must work for other numbers too,
        so use the variables <code>slices</code> and <code>people</code>.</p>
        <div class="tip">Which math sign gives the remainder after dividing?</div>
      `,
      starterCode: "let slices = 12;\nlet people = 5;\n\n",
      solution: "let slices = 12;\nlet people = 5;\n\nlet leftOver = slices % people;\nconsole.log(\"Left over: \" + leftOver);\n",
      tests: [
        { check: "CS.logged('Left over: 2')", message: "With 12 slices and 5 people I expected \"Left over: 2\" in the output." },
        { check: "CS.runWith({ slices: 20, people: 6 }).map(function (l) { return l.trim(); }).indexOf('Left over: 2') >= 0", message: "With 20 slices and 6 people, 2 should be left over. Use the variables, not fixed numbers." },
        { check: "CS.runWith({ slices: 10, people: 5 }).map(function (l) { return l.trim(); }).indexOf('Left over: 0') >= 0", message: "With 10 slices and 5 people, 0 should be left over. Use the variables slices and people in your math." }
      ],
      hints: [
        "The remainder sign is <code>%</code>.",
        "<code>slices % people</code> gives the number of slices left over.",
        "Join the text and the result: <code>\"Left over: \" + (...)</code>, and print it."
      ]
    }
  ]
});
