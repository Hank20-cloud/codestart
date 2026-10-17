// Programming basics, chapter 8 — Basic debugging (Pre-AP CSP topic 8).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py08", {
  lessons: [
    {
      id: "py08-l1",
      title: "Programs rarely work the first time",
      html: `
        <p>Debugging is one of the most important skills in programming. A <strong>bug</strong> is a mistake in a program.
        <strong>Debugging</strong> means finding and fixing bugs.</p>
        <p>Programming is not <em>write code → it works</em>. Usually it looks like this:</p>
        <pre><code>write code
    ↓
run
    ↓
something doesn't work
    ↓
find the problem
    ↓
fix it
    ↓
run again</code></pre>
        <p>This is normal, even for expert programmers. A bug does not mean you are bad at programming.</p>
        <p>There are three common types of problems:</p>
        <table>
          <tr><th>Type</th><th>What happens</th></tr>
          <tr><td><strong>Syntax error</strong></td><td>Python cannot read the code. The program does not start.</td></tr>
          <tr><td><strong>Runtime error</strong></td><td>The program starts, but crashes in the middle.</td></tr>
          <tr><td><strong>Logic error</strong></td><td>The program runs, but gives the wrong answer.</td></tr>
        </table>
      `
    },
    {
      id: "py08-l2",
      title: "Syntax errors",
      html: `
        <p>A <strong>syntax error</strong> means you broke the writing rules of Python. Python cannot understand the code, so nothing runs.</p>
        <pre><code>if score >= 50
    print("Pass")</code></pre>
        <p>Python complains because the colon <code>:</code> is missing. Correct:</p>
        <pre><code>if score >= 50:
    print("Pass")</code></pre>
        <p>In CodeStart, the Output box shows a message like this:</p>
        <pre><code>Line 2: Python cannot read this line. Check for a missing colon ...
(SyntaxError: bad input)</code></pre>
        <div class="tip"><strong>How to find it:</strong> look at the <strong>line number</strong> in the message.
        Check that line, and also <strong>the line just before it</strong>. Often the real mistake (a missing <code>:</code>
        or a missing <code>)</code> or <code>"</code>) is at the end of the line before.</div>
        <p>Common syntax errors:</p>
        <ul>
          <li>a missing <code>:</code> after <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>def</code></li>
          <li>wrong indentation (the spaces at the start of a line)</li>
          <li>a <code>(</code> or <code>"</code> that is never closed</li>
          <li><code>=</code> where you need <code>==</code> in a comparison</li>
        </ul>
      `
    },
    {
      id: "py08-l3",
      title: "Runtime errors",
      html: `
        <p>A <strong>runtime error</strong> happens while the program runs. The program starts, but crashes when it reaches the bad line:</p>
        <pre><code>number = 10
result = number / 0  # can't divide by zero</code></pre>
        <p>Output:</p>
        <pre><code>Line 2: You divided by zero. Check the number before you divide.
(ZeroDivisionError: integer division or modulo by zero)</code></pre>
        <p>The name of the error tells you what kind of problem it is:</p>
        <table>
          <tr><th>Error</th><th>Usual reason</th></tr>
          <tr><td><code>ZeroDivisionError</code></td><td>dividing by 0</td></tr>
          <tr><td><code>TypeError</code></td><td>mixing types, like <code>"Age: " + 15</code> (text + number)</td></tr>
          <tr><td><code>NameError</code></td><td>a misspelled variable name, or a variable used before it is created</td></tr>
          <tr><td><code>IndexError</code></td><td>a list index that does not exist, like <code>scores[5]</code> in a list of 5</td></tr>
          <tr><td><code>ValueError</code></td><td><code>int("hello")</code>: the text is not a number</td></tr>
        </table>
        <div class="tip">Some runtime errors only happen with some inputs. A program that divides by the number the user typed works with 5, but crashes with 0.
        Test your programs with different inputs!</div>
      `
    },
    {
      id: "py08-l4",
      title: "Logic errors",
      html: `
        <p>A <strong>logic error</strong> is often the most interesting kind. The program runs and shows no error message, but the answer is wrong:</p>
        <pre><code>score = 90

if score > 90:
    print("A")
else:
    print("Not A")</code></pre>
        <p>Output:</p>
        <pre><code>Not A</code></pre>
        <p>The programmer probably wanted 90 to be an A. But <code>90 > 90</code> is False. They probably meant <code>if score >= 90:</code>.</p>
        <div class="tip"><strong>Key lesson:</strong> A computer doesn't know what you meant. It only knows what you wrote.</div>
        <p>How to find logic errors:</p>
        <ul>
          <li><strong>Test the edges.</strong> If the rule is "90 or more", test 89, 90, and 91.</li>
          <li><strong>Print values.</strong> Add a <code>print()</code> to see what is inside a variable, for example <code>print("total is", total)</code> inside a loop.</li>
          <li><strong>Count carefully.</strong> <code>range(1, 5)</code> gives 1, 2, 3, 4. It stops <em>before</em> 5. Mistakes by one step are called <strong>off-by-one</strong> errors.</li>
        </ul>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP CSP names one more error type: an <strong>overflow error</strong>. It happens when a number is too big for the computer to store. AP also asks you to choose <strong>test cases</strong>: an input and the output you expect.</p>
        <pre><code>Input   Expected output
89      Not A
90      A
91      A</code></pre></div>
      `
    }
  ],
  exercises: [
    {
      id: "py08-ex1",
      title: "Fix the syntax error",
      type: "py",
      instructions: `
        <p>This program should ask for a score and print <code>Pass</code> if it is 50 or more, or <code>Fail</code> if it is less.</p>
        <p>But Python cannot read it. Press <strong>Run</strong>, read the line number in the error message, and fix the program.</p>
        <p>Example (the user typed <em>75</em>):</p>
        <pre><code>Enter your score: 75
Pass</code></pre>
      `,
      starterCode: "score = int(input(\"Enter your score: \"))\n\nif score >= 50\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\n",
      solution: "score = int(input(\"Enter your score: \"))\n\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\n",
      tests: [
        { inputs: ["75"], check: "!R.error", message: "Python still cannot read your program. Look at the line number in the Output box and at the line just before it." },
        { inputs: ["75"], check: "R.line('Pass') && !R.line('Fail')", message: "For 75, print Pass." },
        { inputs: ["50"], check: "R.line('Pass') && !R.line('Fail')", message: "For 50, print Pass." },
        { inputs: ["20"], check: "R.line('Fail') && !R.line('Pass')", message: "For 20, print Fail." }
      ],
      hints: [
        "Press Run. Which line number does the message show?",
        "Look at the end of the <code>if</code> line. Compare it with the <code>else</code> line.",
        "Every <code>if</code> line must end with a colon <code>:</code>"
      ]
    },
    {
      id: "py08-ex2",
      title: "Fix the crash: text + number",
      type: "py",
      instructions: `
        <p>This program asks for your age and should print a message like this:</p>
        <pre><code>How old are you? 15
In 5 years you will be 20</code></pre>
        <p>It starts, but crashes. Run it, read the error, and fix it.</p>
      `,
      starterCode: "age = int(input(\"How old are you? \"))\nfuture = age + 5\nprint(\"In 5 years you will be \" + future)\n",
      solution: "age = int(input(\"How old are you? \"))\nfuture = age + 5\nprint(\"In 5 years you will be \" + str(future))\n",
      tests: [
        { inputs: ["15"], check: "!R.error", message: "The program still crashes. Read the error: you cannot join text and a number with +." },
        { inputs: ["15"], check: "R.line('In 5 years you will be 20')", message: "For 15, print exactly: In 5 years you will be 20" },
        { inputs: ["30"], check: "R.line('In 5 years you will be 35')", message: "For 30, print: In 5 years you will be 35" }
      ],
      hints: [
        "Which line does the error show? What type is <code>future</code>?",
        "<code>+</code> can join text with text, but not text with a number.",
        "Turn the number into text with <code>str(future)</code>, or use a comma instead of <code>+</code>."
      ]
    },
    {
      id: "py08-ex3",
      title: "Fix the crash: share the pizza",
      type: "py",
      instructions: `
        <p>A pizza has 8 slices. The program asks how many people share it and prints the slices per person.</p>
        <pre><code>How many people? 4
Each person gets 2.0 slices</code></pre>
        <p>It works for 4, but try <em>0</em>: it crashes! Fix it so that for 0 people it prints
        <code>Nobody is eating</code> and does <strong>not</strong> divide.</p>
      `,
      starterCode: "slices = 8\npeople = int(input(\"How many people? \"))\n\neach = slices / people\nprint(\"Each person gets\", each, \"slices\")\n",
      solution: "slices = 8\npeople = int(input(\"How many people? \"))\n\nif people == 0:\n    print(\"Nobody is eating\")\nelse:\n    each = slices / people\n    print(\"Each person gets\", each, \"slices\")\n",
      tests: [
        { inputs: ["0"], check: "!R.error", message: "With 0 people the program still crashes. Check the number before you divide." },
        { inputs: ["0"], check: "R.line('Nobody is eating') && !R.has('Each person')", message: "For 0 people, print only: Nobody is eating" },
        { inputs: ["4"], check: "!R.error && R.has('Each person gets 2.0 slices') && !R.has('Nobody')", message: "For 4 people, it should still print: Each person gets 2.0 slices" },
        { inputs: ["2"], check: "R.has('Each person gets 4.0 slices')", message: "For 2 people, print: Each person gets 4.0 slices" }
      ],
      hints: [
        "Run it and type 0. Read the error name. Why is dividing by 0 a problem?",
        "Use an <code>if</code> to check <code>people == 0</code> before the division.",
        "Put the division and the print inside an <code>else:</code> block (indented), so they only run when people is not 0."
      ]
    },
    {
      id: "py08-ex4",
      title: "Fix the logic error: grade A",
      type: "py",
      instructions: `
        <p>A score of <strong>90 or more</strong> is an A. This program runs without an error message, but it gives a wrong answer for one score.</p>
        <pre><code>Enter your score: 90
A</code></pre>
        <p>Test it with 89, 90, and 91 to find the bug. Then fix it.</p>
      `,
      starterCode: "score = int(input(\"Enter your score: \"))\n\nif score > 90:\n    print(\"A\")\nelse:\n    print(\"Not A\")\n",
      solution: "score = int(input(\"Enter your score: \"))\n\nif score >= 90:\n    print(\"A\")\nelse:\n    print(\"Not A\")\n",
      tests: [
        { inputs: ["90"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["90"], check: "R.line('A') && !R.line('Not A')", message: "For 90, print A. 90 is \"90 or more\". Is 90 > 90 True?" },
        { inputs: ["95"], check: "R.line('A') && !R.line('Not A')", message: "For 95, print A." },
        { inputs: ["89"], check: "R.line('Not A') && !R.line('A')", message: "For 89, print Not A." }
      ],
      hints: [
        "Run it and type 90. Is the answer what you expected?",
        "<code>90 > 90</code> is False, because 90 is not greater than itself.",
        "Use the sign that means \"greater than or equal\". It has two characters."
      ]
    },
    {
      id: "py08-ex5",
      title: "Fix the off-by-one error",
      type: "py",
      instructions: `
        <p>The program asks for a number <code>n</code> and should count from 1 to <code>n</code>, <strong>including n</strong>.
        It should also add the numbers in <code>total</code>.</p>
        <pre><code>Count to: 5
1
2
3
4
5
Total: 15</code></pre>
        <p>But the program stops one number too early. Find the bug and fix it.</p>
      `,
      starterCode: "n = int(input(\"Count to: \"))\n\ntotal = 0\nfor i in range(1, n):\n    print(i)\n    total = total + i\n\nprint(\"Total:\", total)\n",
      solution: "n = int(input(\"Count to: \"))\n\ntotal = 0\nfor i in range(1, n + 1):\n    print(i)\n    total = total + i\n\nprint(\"Total:\", total)\n",
      tests: [
        { inputs: ["5"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["5"], check: "R.line('5') && R.line('1')", message: "For 5, the program should print the numbers 1 to 5. Does it print 5?" },
        { inputs: ["5"], check: "R.get('total') === 15 && R.line('Total: 15')", message: "For 5, the total should be 15 (1 + 2 + 3 + 4 + 5)." },
        { inputs: ["3"], check: "R.get('total') === 6 && R.line('3') && !R.line('4') && !R.line('0')", message: "For 3, print 1, 2, 3 and Total: 6. Do not print 0 or 4." }
      ],
      hints: [
        "Run it with 5. What is the last number it prints?",
        "<code>range(1, n)</code> stops <em>before</em> n. It never gives n itself.",
        "The end number of <code>range</code> must be one more than n."
      ]
    }
  ]
});
