// Programming basics, chapter 4 — while loops (Pre-AP CSP topic 4).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py04", {
  lessons: [
    {
      id: "py04-l1",
      title: "Repeat while something is True",
      html: `
        <p>A <code>while</code> loop means: <em>keep doing something while a condition is True.</em></p>
        <pre><code>number = 1

while number &lt;= 5:
    print(number)
    number = number + 1</code></pre>
        <p>Output:</p>
        <pre><code>1
2
3
4
5</code></pre>
        <p>This is what happens, step by step:</p>
        <pre><code>number = 1   1 &lt;= 5 ? True  → print 1, number becomes 2
number = 2   2 &lt;= 5 ? True  → print 2, number becomes 3
...
number = 5   5 &lt;= 5 ? True  → print 5, number becomes 6
number = 6   6 &lt;= 5 ? False → stop</code></pre>
        <p>Before each repetition, Python checks the condition again. When the condition is
        <code>False</code>, the loop stops and the program continues after the loop.</p>
        <div class="tip">A <code>while</code> loop looks like an <code>if</code>: a condition, a colon <code>:</code>,
        and an indented body. The difference: <code>if</code> runs the body <em>once</em>,
        <code>while</code> runs it <em>again and again</em> while the condition stays True.</div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP uses <code>REPEAT UNTIL (condition)</code>. It <strong>stops</strong> when the condition becomes true. This is the <strong>opposite</strong> of Python <code>while</code>, which runs <em>while</em> the condition is true. So <code>while number &lt;= 5</code> becomes <code>REPEAT UNTIL (number &gt; 5)</code>.</p>
        <pre><code>number ← 1
REPEAT UNTIL (number &gt; 5)
{
   DISPLAY(number)
   number ← number + 1
}</code></pre></div>
      `
    },
    {
      id: "py04-l2",
      title: "for or while?",
      html: `
        <p>Both loops repeat code. So which one should you use?</p>
        <ul>
          <li><code>for</code> — use it when you <strong>know how many times</strong> to repeat:
            <pre><code>for i in range(10):
    print(i)</code></pre></li>
          <li><code>while</code> — use it when you <strong>do not know</strong> exactly how many times.
          For example, keep asking until the user enters the correct password:
            <pre><code>password = ""

while password != "hello":
    password = input("Enter password: ")

print("Correct!")</code></pre></li>
        </ul>
        <p>The loop could run: wrong, wrong, wrong, wrong, correct. The number of attempts is not known
        before the program starts. It depends on the user.</p>
        <p>Notice the first line, <code>password = ""</code>. The variable must exist before the
        <code>while</code> line checks it. The empty text <code>""</code> is not <code>"hello"</code>,
        so the loop runs at least once.</p>
      `
    },
    {
      id: "py04-l3",
      title: "The infinite loop",
      html: `
        <p>Here is a very important beginner lesson. Look at this program:</p>
        <pre><code>number = 1

while number &lt;= 5:
    print(number)</code></pre>
        <p>Can you see the problem? <code>number</code> never changes. It is always 1, so
        <code>number &lt;= 5</code> is always True, and the loop repeats <strong>forever</strong>.
        This is called an <strong>infinite loop</strong>.</p>
        <pre><code>1
1
1
1
... (it never stops)</code></pre>
        <div class="tip"><strong>In CodeStart:</strong> CodeStart stops a program that runs too long
        (about 3 seconds), so you will see an error instead of a frozen page. Time while the program
        waits for you to type an answer does not count.</div>
        <p>When you see this error, ask yourself these questions:</p>
        <ol>
          <li>What is the condition of my <code>while</code> loop?</li>
          <li>Which variable in the condition should change inside the loop?</li>
          <li>Does it really change? And does it change in the right direction, so the condition becomes False one day?</li>
        </ol>
        <p>Finding and fixing a mistake like this is called <strong>debugging</strong>. You will do it a lot. Every programmer does!</p>
      `
    },
    {
      id: "py04-l4",
      title: "Stop when the user says so",
      html: `
        <p>A common use of <code>while</code>: keep reading numbers until the user types a special value,
        for example <code>0</code>. Here the program adds up all the numbers (the accumulator pattern from chapter 3):</p>
        <pre><code>total = 0
number = int(input("Number (0 to stop): "))

while number != 0:
    total = total + number
    number = int(input("Number (0 to stop): "))

print("Total:", total)</code></pre>
        <p>Example run:</p>
        <pre><code>Number (0 to stop): 5
Number (0 to stop): 3
Number (0 to stop): 0
Total: 8</code></pre>
        <p>The program asks once before the loop, and then once more at the <em>end</em> of each repetition.
        That new answer is what the <code>while</code> line checks next.</p>
        <p>You can also count repetitions inside a <code>while</code> loop with a counter:
        <code>count = count + 1</code>.</p>
      `
    }
  ],
  exercises: [
    {
      id: "py04-ex1",
      title: "Countdown",
      type: "py",
      instructions: `
        <p>Use a <code>while</code> loop to count down from 5 to 1. After the loop, print <code>Liftoff!</code></p>
        <pre><code>5
4
3
2
1
Liftoff!</code></pre>
      `,
      starterCode: "number = 5\n\n# Write your while loop here\n",
      solution: "number = 5\n\nwhile number >= 1:\n    print(number)\n    number = number - 1\n\nprint(\"Liftoff!\")\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. If it ran too long, check that number gets smaller inside the loop." },
        { check: "/\\bwhile\\b/.test(R.code)", message: "Use a while loop." },
        { check: "R.lines.join(',') === '5,4,3,2,1,Liftoff!'", message: "Print 5, 4, 3, 2, 1 (one on each line), and then Liftoff! once, after the loop." }
      ],
      hints: [
        "The loop should run while <code>number</code> is 1 or more.",
        "Inside the loop: print <code>number</code>, then make it 1 smaller with <code>number = number - 1</code>.",
        "<code>while number &gt;= 1:</code> — put the two indented lines below it, and put <code>print(\"Liftoff!\")</code> without indentation."
      ]
    },
    {
      id: "py04-ex2",
      title: "Fix the infinite loop",
      type: "py",
      instructions: `
        <p>This program should print the numbers 1 to 5. But it is an <strong>infinite loop</strong>.
        Press <strong>▶ Run</strong> and see what happens. CodeStart stops it after a few seconds.</p>
        <p>Find the problem and fix it, so the output is:</p>
        <pre><code>1
2
3
4
5</code></pre>
      `,
      starterCode: "number = 1\n\nwhile number <= 5:\n    print(number)\n",
      solution: "number = 1\n\nwhile number <= 5:\n    print(number)\n    number = number + 1\n",
      tests: [
        { check: "!R.error", message: "The program still runs too long or has an error. Does number change inside the loop?" },
        { check: "/\\bwhile\\b/.test(R.code)", message: "Keep the while loop and fix it." },
        { check: "R.lines.join(',') === '1,2,3,4,5'", message: "Print exactly the numbers 1 to 5, one on each line." }
      ],
      hints: [
        "Which variable is in the condition of the loop? Does its value ever change?",
        "Inside the loop, <code>number</code> must get bigger, so that <code>number &lt;= 5</code> becomes False one day.",
        "Add one more indented line inside the loop, after <code>print(number)</code>, that adds 1 to <code>number</code>."
      ]
    },
    {
      id: "py04-ex3",
      title: "Password check",
      type: "py",
      instructions: `
        <p>Keep asking for the password until the user types <code>hello</code>.
        Then print <code>Correct!</code></p>
        <p>Example:</p>
        <pre><code>Enter password: cat
Enter password: 1234
Enter password: hello
Correct!</code></pre>
        <p>Now the program asks only once. Change it so it uses a <code>while</code> loop.</p>
      `,
      starterCode: "password = input(\"Enter password: \")\n\nprint(\"Correct!\")\n",
      solution: "password = \"\"\n\nwhile password != \"hello\":\n    password = input(\"Enter password: \")\n\nprint(\"Correct!\")\n",
      tests: [
        { inputs: ["cat", "1234", "hello"], check: "!R.error", message: "Your program has an error. If it says it asked for more input, check that the loop stops when the user types hello." },
        { inputs: ["cat", "1234", "hello"], check: "R.prompts.length === 3", message: "With the answers cat, 1234, hello, the program should ask 3 times and then stop asking." },
        { inputs: ["cat", "1234", "hello"], check: "R.lines.filter(function (l) { return l === 'Correct!'; }).length === 1", message: "Print Correct! once, after the loop." },
        { inputs: ["hello"], check: "!R.error && R.prompts.length === 1 && R.line('Correct!')", message: "If the user types hello the first time, ask only once and print Correct!" },
        { inputs: ["a", "b", "c", "d", "hello"], check: "!R.error && R.prompts.length === 5 && R.line('Correct!')", message: "The loop should keep asking for as long as the answer is wrong." }
      ],
      hints: [
        "The loop should run while the password is <em>not</em> <code>hello</code>. \"Not equal\" is <code>!=</code>.",
        "Before the loop, the variable must exist. Start with <code>password = \"\"</code> (empty text).",
        "<code>while password != \"hello\":</code> and inside it ask again with <code>input()</code>. Keep the print after the loop."
      ]
    },
    {
      id: "py04-ex4",
      title: "Add until zero",
      type: "py",
      instructions: `
        <p>Ask the user for numbers again and again. When the user types <code>0</code>, stop and print the total
        of all the numbers.</p>
        <p>Example:</p>
        <pre><code>Number (0 to stop): 5
Number (0 to stop): 3
Number (0 to stop): 10
Number (0 to stop): 0
Total: 18</code></pre>
      `,
      starterCode: "total = 0\nnumber = int(input(\"Number (0 to stop): \"))\n\n# Add a while loop here\n\nprint(\"Total:\", total)\n",
      solution: "total = 0\nnumber = int(input(\"Number (0 to stop): \"))\n\nwhile number != 0:\n    total = total + number\n    number = int(input(\"Number (0 to stop): \"))\n\nprint(\"Total:\", total)\n",
      tests: [
        { inputs: ["5", "3", "10", "0"], check: "!R.error", message: "Your program has an error. If it says it asked for more input, check that the loop stops at 0. If it ran too long, ask for a new number inside the loop." },
        { inputs: ["5", "3", "10", "0"], check: "R.prompts.length === 4 && R.lines.some(function (l) { return /total/i.test(l) && /\\b18\\b/.test(l); })", message: "For 5, 3, 10, 0 the program should ask 4 times and print Total: 18" },
        { inputs: ["7", "0"], check: "!R.error && R.lines.some(function (l) { return /total/i.test(l) && /\\b7\\b/.test(l); })", message: "For 7, 0 the program should print Total: 7" },
        { inputs: ["0"], check: "!R.error && R.prompts.length === 1 && R.lines.some(function (l) { return /total/i.test(l) && /\\b0\\b/.test(l); })", message: "If the first number is 0, ask only once and print Total: 0" }
      ],
      hints: [
        "The loop should run while <code>number</code> is not 0.",
        "Inside the loop, do two things: add <code>number</code> to <code>total</code>, then ask for the next number.",
        "<code>while number != 0:</code> — then <code>total = total + number</code>, then the same <code>input</code> line as before the loop."
      ]
    },
    {
      id: "py04-ex5",
      title: "Mini challenge: guess the number",
      type: "py",
      instructions: `
        <p>The secret number is <code>7</code>. Keep asking the player to guess until the guess is right.</p>
        <ul>
          <li>If the guess is too small, print <code>Too low</code></li>
          <li>If the guess is too big, print <code>Too high</code></li>
          <li>When the guess is right, stop the loop and print <code>Correct! You needed 3 guesses.</code>
          (with the real number of guesses)</li>
        </ul>
        <p>Example:</p>
        <pre><code>Guess: 3
Too low
Guess: 9
Too high
Guess: 7
Correct! You needed 3 guesses.</code></pre>
      `,
      starterCode: "secret = 7\nguess = 0\ncount = 0\n\n# Write your while loop here\n",
      solution: "secret = 7\nguess = 0\ncount = 0\n\nwhile guess != secret:\n    guess = int(input(\"Guess: \"))\n    count = count + 1\n    if guess < secret:\n        print(\"Too low\")\n    elif guess > secret:\n        print(\"Too high\")\n\nprint(\"Correct! You needed\", count, \"guesses.\")\n",
      tests: [
        { inputs: ["3", "9", "7"], check: "!R.error", message: "Your program has an error. If it says it asked for more input, check that the loop stops when the guess is 7." },
        { inputs: ["3", "9", "7"], check: "R.prompts.length === 3 && R.lines.filter(function (l) { return /too low/i.test(l); }).length === 1 && R.lines.filter(function (l) { return /too high/i.test(l); }).length === 1", message: "For the guesses 3, 9, 7: ask 3 times, print Too low once and Too high once." },
        { inputs: ["3", "9", "7"], check: "R.lines.some(function (l) { return /correct/i.test(l) && /\\b3\\b/.test(l); })", message: "After 3 guesses, print Correct! with the number 3." },
        { inputs: ["7"], check: "!R.error && R.prompts.length === 1 && R.lines.some(function (l) { return /correct/i.test(l) && /\\b1\\b/.test(l); }) && !R.has('Too')", message: "If the first guess is 7, print Correct! with 1 guess (and no Too low / Too high)." },
        { inputs: ["1", "2", "10", "8", "7"], check: "!R.error && R.lines.filter(function (l) { return /too low/i.test(l); }).length === 2 && R.lines.filter(function (l) { return /too high/i.test(l); }).length === 2 && R.lines.some(function (l) { return /correct/i.test(l) && /\\b5\\b/.test(l); })", message: "For 1, 2, 10, 8, 7: two times Too low, two times Too high, then Correct! with 5 guesses. Do you add 1 to count each time?" }
      ],
      hints: [
        "Loop while <code>guess != secret</code>. Inside the loop, ask for a guess with <code>int(input(...))</code>.",
        "Use <code>count = count + 1</code> inside the loop to count the guesses. Use <code>if</code> / <code>elif</code> to print Too low or Too high.",
        "After the loop ends, the guess must be right. So print the Correct! line after the loop (not indented), using <code>count</code>."
      ]
    }
  ]
});
