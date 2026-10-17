// Programming basics, chapter 2 — if / else (Pre-AP CSP topic 2).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py02", {
  lessons: [
    {
      id: "py02-l1",
      title: "Making decisions",
      html: `
        <p>Programs often need to make a <strong>decision</strong>. For example:
        <em>if the student's mark is 50 or higher, they pass; otherwise, they fail.</em></p>
        <p>In Python you write this with <code>if</code> and <code>else</code>:</p>
        <pre><code>score = 75

if score >= 50:
    print("Pass")
else:
    print("Fail")</code></pre>
        <p>The program checks the <strong>condition</strong> <code>score >= 50</code>. The answer is
        <code>True</code> or <code>False</code>:</p>
        <pre><code>score >= 50
     ↓
    True
     ↓
   "Pass"</code></pre>
        <p>If the condition is <code>True</code>, Python runs the lines under <code>if</code>.
        If it is <code>False</code>, Python runs the lines under <code>else</code>. It never runs both.</p>
        <div class="tip"><strong>Two rules to remember:</strong>
        <br>1. Put a colon <code>:</code> at the end of the <code>if</code> line and the <code>else</code> line.
        <br>2. Move the lines inside <code>if</code> and <code>else</code> to the right with 4 spaces.
        This is called <strong>indentation</strong>. Python uses it to know which lines belong to the <code>if</code>.</div>
      `
    },
    {
      id: "py02-l2",
      title: "Comparing values",
      html: `
        <p>A condition usually <strong>compares</strong> two values. These are the comparison operators:</p>
        <table>
          <tr><th>Symbol</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
          <tr><td><code>&gt;</code></td><td>greater than</td><td><code>7 &gt; 3</code></td><td><code>True</code></td></tr>
          <tr><td><code>&lt;</code></td><td>less than</td><td><code>7 &lt; 3</code></td><td><code>False</code></td></tr>
          <tr><td><code>&gt;=</code></td><td>greater than or equal to</td><td><code>50 &gt;= 50</code></td><td><code>True</code></td></tr>
          <tr><td><code>&lt;=</code></td><td>less than or equal to</td><td><code>49 &lt;= 50</code></td><td><code>True</code></td></tr>
          <tr><td><code>==</code></td><td>is equal to</td><td><code>5 == 5</code></td><td><code>True</code></td></tr>
          <tr><td><code>!=</code></td><td>is not equal to</td><td><code>5 != 5</code></td><td><code>False</code></td></tr>
        </table>
        <p>You can compare text too:</p>
        <pre><code>color = "blue"

if color == "blue":
    print("Same as the sky!")</code></pre>
        <div class="tip"><strong>Careful:</strong> one <code>=</code> <em>stores</em> a value in a variable.
        Two <code>==</code> <em>compare</em> two values. <code>if score = 50:</code> is an error.
        <br>Text comparisons care about capital letters: <code>"Blue" == "blue"</code> is <code>False</code>.</div>
        <p>An <code>if</code> does not always need an <code>else</code>. Without <code>else</code>,
        Python simply does nothing when the condition is <code>False</code>.</p>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP uses one <code>=</code> to <em>compare</em> (Python <code>==</code>). It uses <code>≠</code> for "not equal" (Python <code>!=</code>), and <code>≥</code> and <code>≤</code> (Python <code>&gt;=</code> and <code>&lt;=</code>). To store a value, AP uses <code>←</code>.</p>
        <pre><code>IF (color = "blue")
{
   DISPLAY("Same as the sky!")
}</code></pre></div>
      `
    },
    {
      id: "py02-l3",
      title: "More choices with elif",
      html: `
        <p>Sometimes there are more than two possibilities. Use <code>elif</code> (short for "else if"):</p>
        <pre><code>score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("Below C")</code></pre>
        <p>Output:</p>
        <pre><code>B</code></pre>
        <p>Python checks the conditions <strong>from top to bottom</strong>. It runs only the
        <strong>first</strong> part whose condition is <code>True</code>, and then it skips the rest.</p>
        <pre><code>score >= 90 ?  False → skip
score >= 80 ?  True  → print "B", then stop checking</code></pre>
        <p>That is why the order matters. If you check <code>score >= 70</code> first, a score of 95
        prints <code>C</code>, because 95 is also greater than 70.</p>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP puts the condition in <code>( )</code> and the body in <code>{ }</code>. AP has no <code>elif</code>. You put a new <code>IF</code> inside the <code>ELSE</code>:</p>
        <pre><code>IF (score ≥ 90)
{
   DISPLAY("A")
}
ELSE
{
   IF (score ≥ 80)
   {
      DISPLAY("B")
   }
   ELSE
   {
      DISPLAY("Below B")
   }
}</code></pre></div>
        <p><strong>Key idea:</strong> a program can choose what to do based on a condition.</p>
      `
    },
    {
      id: "py02-l4",
      title: "Decisions with input",
      html: `
        <p>Decisions are more fun when the user gives the value. Remember to turn the input into a number
        with <code>int()</code> before you compare it with a number:</p>
        <pre><code>age = int(input("How old are you? "))

if age >= 16:
    print("You can get a driving permit.")
else:
    print("You have to wait", 16 - age, "more years.")</code></pre>
        <p>Example run:</p>
        <pre><code>How old are you? 14
You have to wait 2 more years.</code></pre>
        <p><strong>Test your program with several values.</strong> Try a small value, a big value,
        and the value exactly on the border (here: 16). Many mistakes happen on the border, for example
        when you write <code>&gt;</code> but you mean <code>&gt;=</code>.</p>
        <div class="tip"><strong>Other languages:</strong> in C# the same idea looks like
        <code>if (score &gt;= 90) { ... } else if (score &gt;= 80) { ... } else { ... }</code>.
        It uses <code>( )</code> and <code>{ }</code> instead of the colon and the indentation.</div>
      `
    }
  ],
  exercises: [
    {
      id: "py02-ex1",
      title: "Pass or fail",
      type: "py",
      instructions: `
        <p>The program asks for a score. Add an <code>if</code> / <code>else</code>:</p>
        <ul>
          <li>if the score is <strong>50 or higher</strong>, print exactly <code>Pass</code></li>
          <li>otherwise, print exactly <code>Fail</code></li>
        </ul>
        <p>Example:</p>
        <pre><code>Enter your score: 75
Pass</code></pre>
      `,
      starterCode: "score = int(input(\"Enter your score: \"))\n\n# Add your if / else here\n",
      solution: "score = int(input(\"Enter your score: \"))\n\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\n",
      tests: [
        { inputs: ["75"], check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you put a colon after if and else?" },
        { inputs: ["75"], check: "R.line('Pass') && !R.line('Fail')", message: "A score of 75 should print Pass (and not Fail)." },
        { inputs: ["30"], check: "R.line('Fail') && !R.line('Pass')", message: "A score of 30 should print Fail (and not Pass)." },
        { inputs: ["50"], check: "R.line('Pass') && !R.line('Fail')", message: "A score of exactly 50 should print Pass. Check: > or >= ?" },
        { inputs: ["49"], check: "R.line('Fail') && !R.line('Pass')", message: "A score of 49 should print Fail." }
      ],
      hints: [
        "Start with <code>if score ... 50:</code> and choose the right comparison symbol.",
        "\"50 or higher\" means <code>&gt;=</code>. Do not forget the colon and the 4 spaces before <code>print</code>.",
        "<code>if score &gt;= 50:</code> then <code>print(\"Pass\")</code> on the next line (indented). Now add the <code>else:</code> part."
      ]
    },
    {
      id: "py02-ex2",
      title: "Even or odd",
      type: "py",
      instructions: `
        <p>Ask the user for a whole number. Print <code>Even</code> if the number is even,
        and <code>Odd</code> if it is odd.</p>
        <p>Example:</p>
        <pre><code>Enter a number: 7
Odd</code></pre>
        <p>Tip: a number is even when the remainder after dividing by 2 is 0. Remember the
        <code>%</code> operator from chapter 1: <code>7 % 2</code> is <code>1</code>.</p>
      `,
      starterCode: "number = int(input(\"Enter a number: \"))\n\n# Print Even or Odd\n",
      solution: "number = int(input(\"Enter a number: \"))\n\nif number % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")\n",
      tests: [
        { inputs: ["4"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["4"], check: "R.line('Even') && !R.line('Odd')", message: "4 is even. Your program should print Even." },
        { inputs: ["7"], check: "R.line('Odd') && !R.line('Even')", message: "7 is odd. Your program should print Odd." },
        { inputs: ["10"], check: "R.line('Even') && !R.line('Odd')", message: "10 is even. Your program should print Even." },
        { inputs: ["0"], check: "R.line('Even') && !R.line('Odd')", message: "0 is even (0 % 2 is 0). Your program should print Even." }
      ],
      hints: [
        "Use <code>number % 2</code> to get the remainder after dividing by 2.",
        "To check if two values are equal, use <code>==</code> (two equal signs).",
        "The condition is <code>if number % 2 == 0:</code>. Then print Even, and use <code>else:</code> for Odd."
      ]
    },
    {
      id: "py02-ex3",
      title: "Fix the letter grade",
      type: "py",
      instructions: `
        <p>This program should print a letter grade:</p>
        <table>
          <tr><th>Score</th><th>Print</th></tr>
          <tr><td>90 or more</td><td><code>A</code></td></tr>
          <tr><td>80 to 89</td><td><code>B</code></td></tr>
          <tr><td>70 to 79</td><td><code>C</code></td></tr>
          <tr><td>below 70</td><td><code>Below C</code></td></tr>
        </table>
        <p>But there is a bug: a score of 95 prints <code>C</code>. Press <strong>▶ Run</strong>, type 95, and see.
        Find out why and fix it.</p>
      `,
      starterCode: "score = int(input(\"Enter your score: \"))\n\nif score >= 70:\n    print(\"C\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 90:\n    print(\"A\")\nelse:\n    print(\"Below C\")\n",
      solution: "score = int(input(\"Enter your score: \"))\n\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"Below C\")\n",
      tests: [
        { inputs: ["95"], check: "!R.error && R.line('A') && !R.line('B') && !R.line('C')", message: "A score of 95 should print only A." },
        { inputs: ["90"], check: "R.line('A') && !R.line('B') && !R.line('C')", message: "A score of exactly 90 should print A." },
        { inputs: ["85"], check: "R.line('B') && !R.line('A') && !R.line('C')", message: "A score of 85 should print only B." },
        { inputs: ["70"], check: "R.line('C') && !R.line('B') && !R.line('Below C')", message: "A score of exactly 70 should print C." },
        { inputs: ["59"], check: "R.line('Below C') && !R.line('C')", message: "A score of 59 should print Below C." }
      ],
      hints: [
        "Python checks the conditions from top to bottom and stops at the first one that is True.",
        "For 95, the first condition <code>score >= 70</code> is already True. So Python never reaches the check for A.",
        "Check the biggest number first: start with <code>if score >= 90:</code>, then 80, then 70."
      ]
    },
    {
      id: "py02-ex4",
      title: "Secret password",
      type: "py",
      instructions: `
        <p>Ask the user for a password. If the password is exactly <code>python123</code>, print
        <code>Welcome!</code>. Otherwise, print <code>Wrong password</code>.</p>
        <p>Example:</p>
        <pre><code>Password: python123
Welcome!</code></pre>
        <p>Note: the password is text, so you do <em>not</em> need <code>int()</code> here.</p>
      `,
      starterCode: "password = input(\"Password: \")\n\n# Check the password here\n",
      solution: "password = input(\"Password: \")\n\nif password == \"python123\":\n    print(\"Welcome!\")\nelse:\n    print(\"Wrong password\")\n",
      tests: [
        { inputs: ["python123"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["python123"], check: "R.line('Welcome!') && !R.has('Wrong')", message: "When the user types python123, print Welcome! (and nothing about a wrong password)." },
        { inputs: ["hello"], check: "R.line('Wrong password') && !R.has('Welcome')", message: "When the user types hello, print Wrong password." },
        { inputs: ["Python123"], check: "R.line('Wrong password') && !R.has('Welcome')", message: "Python123 with a capital P is not the same password. It should print Wrong password." }
      ],
      hints: [
        "Compare the text in <code>password</code> with the text <code>\"python123\"</code>.",
        "Use <code>==</code> to compare, and put the correct password inside quotes.",
        "<code>if password == \"python123\":</code> and then <code>print(\"Welcome!\")</code>. Add the <code>else:</code> part."
      ]
    },
    {
      id: "py02-ex5",
      title: "Mini challenge: ticket price",
      type: "py",
      instructions: `
        <p>A cinema has three ticket prices:</p>
        <table>
          <tr><th>Age</th><th>Price</th></tr>
          <tr><td>under 12</td><td>5</td></tr>
          <tr><td>12 to 64</td><td>10</td></tr>
          <tr><td>65 or older</td><td>7</td></tr>
        </table>
        <p>Ask for the age and print the price like this: <code>Price: 10</code></p>
        <p>Example:</p>
        <pre><code>How old are you? 15
Price: 10</code></pre>
      `,
      starterCode: "age = int(input(\"How old are you? \"))\n\n# Print the price\n",
      solution: "age = int(input(\"How old are you? \"))\n\nif age < 12:\n    print(\"Price:\", 5)\nelif age < 65:\n    print(\"Price:\", 10)\nelse:\n    print(\"Price:\", 7)\n",
      tests: [
        { inputs: ["8"], check: "!R.error && R.lines.filter(function (l) { return /^price/i.test(l); }).join('|').replace(/\\s+/g, '').toLowerCase() === 'price:5'", message: "An 8-year-old should see exactly one line: Price: 5" },
        { inputs: ["12"], check: "R.lines.filter(function (l) { return /^price/i.test(l); }).join('|').replace(/\\s+/g, '').toLowerCase() === 'price:10'", message: "A 12-year-old should see Price: 10. Check the border: < or <= ?" },
        { inputs: ["40"], check: "R.lines.filter(function (l) { return /^price/i.test(l); }).join('|').replace(/\\s+/g, '').toLowerCase() === 'price:10'", message: "A 40-year-old should see Price: 10" },
        { inputs: ["65"], check: "R.lines.filter(function (l) { return /^price/i.test(l); }).join('|').replace(/\\s+/g, '').toLowerCase() === 'price:7'", message: "A 65-year-old should see Price: 7. Check the border." },
        { inputs: ["64"], check: "R.lines.filter(function (l) { return /^price/i.test(l); }).join('|').replace(/\\s+/g, '').toLowerCase() === 'price:10'", message: "A 64-year-old should see Price: 10" }
      ],
      hints: [
        "There are three possibilities, so use <code>if</code>, <code>elif</code>, and <code>else</code>.",
        "Start with the youngest group: <code>if age &lt; 12:</code>. The <code>elif</code> only runs when the age is 12 or more.",
        "<code>if age &lt; 12:</code> → Price: 5, <code>elif age &lt; 65:</code> → Price: 10. What goes in the <code>else:</code> part?"
      ]
    }
  ]
});
