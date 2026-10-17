// Programming basics, chapter 3 — for loops (Pre-AP CSP topic 3).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py03", {
  lessons: [
    {
      id: "py03-l1",
      title: "Doing things again and again",
      html: `
        <p>A <strong>loop</strong> means: <em>do something repeatedly.</em>
        Suppose we want to print the numbers 1 to 5.</p>
        <p>Without a loop:</p>
        <pre><code>print(1)
print(2)
print(3)
print(4)
print(5)</code></pre>
        <p>With a loop:</p>
        <pre><code>for i in range(1, 6):
    print(i)</code></pre>
        <p>Output:</p>
        <pre><code>1
2
3
4
5</code></pre>
        <p>The loop is only two lines. And if you want the numbers 1 to 1000, you change only one number.</p>
        <p>The line <code>for i in range(1, 6):</code> means roughly:</p>
        <pre><code>i = 1 → run
i = 2 → run
i = 3 → run
i = 4 → run
i = 5 → run
stop</code></pre>
        <div class="tip"><strong>Like if:</strong> the <code>for</code> line ends with a colon <code>:</code>,
        and the lines that repeat are indented with 4 spaces. This part is called the <strong>body</strong> of the loop.</div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP has a simple loop for "do this n times": <code>REPEAT n TIMES</code>. The body goes inside <code>{ }</code>.</p>
        <pre><code>REPEAT 5 TIMES
{
   DISPLAY("Hello")
}</code></pre></div>
      `
    },
    {
      id: "py03-l2",
      title: "How range() works",
      html: `
        <p><code>range()</code> makes a row of numbers for the loop. <code>i</code> is a variable that
        gets the next number each time the loop runs.</p>
        <table>
          <tr><th>Code</th><th>Numbers</th></tr>
          <tr><td><code>range(5)</code></td><td>0, 1, 2, 3, 4</td></tr>
          <tr><td><code>range(1, 6)</code></td><td>1, 2, 3, 4, 5</td></tr>
          <tr><td><code>range(0, 10, 2)</code></td><td>0, 2, 4, 6, 8</td></tr>
          <tr><td><code>range(5, 0, -1)</code></td><td>5, 4, 3, 2, 1</td></tr>
        </table>
        <div class="tip"><strong>Important:</strong> the <em>stop</em> number is never included.
        <code>range(1, 6)</code> stops <em>before</em> 6. So to get 1 to 10, write <code>range(1, 11)</code>.</div>
        <p>The third number is the <strong>step</strong>. You can step by 2:</p>
        <pre><code>for i in range(0, 10, 2):
    print(i)</code></pre>
        <p>Output:</p>
        <pre><code>0
2
4
6
8</code></pre>
        <p>You can use <code>i</code> inside the body, for example in a calculation:</p>
        <pre><code>for i in range(1, 4):
    print(i, "squared is", i * i)</code></pre>
      `
    },
    {
      id: "py03-l3",
      title: "The accumulator pattern",
      html: `
        <p>A more useful example: calculate the total of all numbers from 1 to 100.</p>
        <pre><code>total = 0

for i in range(1, 101):
    total = total + i

print(total)</code></pre>
        <p>Output:</p>
        <pre><code>5050</code></pre>
        <p>This is called the <strong>accumulator</strong> pattern. "Accumulate" means "collect more and more".
        The variable <code>total</code> starts at 0, and each time the loop runs, we add one more number to it:</p>
        <pre><code>total = 0
   ↓
add 1
   ↓
add 2
   ↓
add 3
   ↓
   ...
   ↓
add 100</code></pre>
        <p>The pattern has three steps:</p>
        <ol>
          <li><strong>Before</strong> the loop: create the variable with a start value (<code>total = 0</code>).</li>
          <li><strong>Inside</strong> the loop: update it (<code>total = total + i</code>).</li>
          <li><strong>After</strong> the loop: use the result (<code>print(total)</code>).</li>
        </ol>
        <div class="tip"><strong>Watch the indentation:</strong> if <code>print(total)</code> is indented,
        it is inside the loop and runs 100 times. If it is not indented, it runs once, after the loop.</div>
      `
    },
    {
      id: "py03-l4",
      title: "Loops with input",
      html: `
        <p>The numbers in <code>range()</code> can come from a variable. Then the user decides
        how many times the loop runs:</p>
        <pre><code>n = int(input("How many stars? "))

for i in range(n):
    print("*")</code></pre>
        <p>You can also put <code>input()</code> <em>inside</em> the loop. Then the program asks once
        for each repetition. Together with the accumulator pattern:</p>
        <pre><code>total = 0

for i in range(3):
    price = int(input("Price: "))
    total = total + price

print("Total:", total)</code></pre>
        <p>Example run:</p>
        <pre><code>Price: 4
Price: 10
Price: 6
Total: 20</code></pre>
        <p>A <code>for</code> loop is the right choice when you know <strong>how many times</strong>
        to repeat before the loop starts.</p>
      `
    }
  ],
  exercises: [
    {
      id: "py03-ex1",
      title: "Count to 10",
      type: "py",
      instructions: `
        <p>Use a <code>for</code> loop to print the numbers 1 to 10, one number on each line:</p>
        <pre><code>1
2
3
...
10</code></pre>
        <p>Do not write 10 <code>print()</code> lines. Use a loop.</p>
      `,
      starterCode: "# Use a for loop to print 1 to 10\n",
      solution: "for i in range(1, 11):\n    print(i)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you put a colon after the for line?" },
        { check: "/\\bfor\\b/.test(R.code)", message: "Use a for loop." },
        { check: "R.lines[0] === '1'", message: "The first number should be 1. range(10) starts at 0. Give range() a start number." },
        { check: "R.lines.join(',') === '1,2,3,4,5,6,7,8,9,10'", message: "Print exactly the numbers 1 to 10, one on each line. Remember: range() stops before the stop number." }
      ],
      hints: [
        "<code>for i in range(start, stop):</code> repeats the body. Inside the body, print <code>i</code>.",
        "The stop number is not included. To end at 10, the stop number must be 11.",
        "<code>for i in range(1, 11):</code> — now add the indented line that prints <code>i</code>."
      ]
    },
    {
      id: "py03-ex2",
      title: "Even numbers",
      type: "py",
      instructions: `
        <p>Use a <code>for</code> loop with a <strong>step</strong> to print the even numbers from 2 to 20:</p>
        <pre><code>2
4
6
...
20</code></pre>
      `,
      starterCode: "for i in range(1, 21):\n    print(i)\n",
      solution: "for i in range(2, 21, 2):\n    print(i)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "/\\bfor\\b/.test(R.code)", message: "Use a for loop." },
        { check: "R.lines.join(',') === '2,4,6,8,10,12,14,16,18,20'", message: "Print exactly 2, 4, 6, ... 20, one number on each line. Does your list include 20?" }
      ],
      hints: [
        "<code>range()</code> can take a third number: the step.",
        "<code>range(start, stop, step)</code>. Start at 2 and go up by 2.",
        "Use <code>range(2, 21, 2)</code>. Why 21 and not 20?"
      ]
    },
    {
      id: "py03-ex3",
      title: "Total from 1 to 100",
      type: "py",
      instructions: `
        <p>Use the <strong>accumulator pattern</strong> to add up all numbers from 1 to 100.
        Store the result in a variable called <code>total</code> and print it.</p>
        <p>Output:</p>
        <pre><code>5050</code></pre>
        <p>Use a loop to calculate it. Do not type 5050 yourself.</p>
      `,
      starterCode: "total = 0\n\n# Add a for loop here\n\nprint(total)\n",
      solution: "total = 0\n\nfor i in range(1, 101):\n    total = total + i\n\nprint(total)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "/\\bfor\\b/.test(R.code) && !/5050/.test(R.code)", message: "Calculate the total with a for loop. Do not type 5050 in your code." },
        { check: "R.get('total') === 5050", message: "total should be 5050 at the end. Does your range include 100? Do you add i to total inside the loop?" },
        { check: "R.lines.join(',') === '5050'", message: "Print total only once, after the loop. Is your print line indented by mistake?" }
      ],
      hints: [
        "Inside the loop, add the loop number <code>i</code> to <code>total</code>.",
        "To include 100, use <code>range(1, 101)</code>. The update line is <code>total = total + ...</code>",
        "<code>for i in range(1, 101):</code> and, indented below it, <code>total = total + i</code>. Keep <code>print(total)</code> not indented."
      ]
    },
    {
      id: "py03-ex4",
      title: "Times table",
      type: "py",
      instructions: `
        <p>Ask the user for a number. Then print its times table from 1 to 10.</p>
        <p>Example (the user typed <em>7</em>):</p>
        <pre><code>Which number? 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70</code></pre>
        <p>Tip: <code>print(n, "x", i, "=", n * i)</code> puts spaces between the parts for you.</p>
      `,
      starterCode: "n = int(input(\"Which number? \"))\n\n# Print the times table\n",
      solution: "n = int(input(\"Which number? \"))\n\nfor i in range(1, 11):\n    print(n, \"x\", i, \"=\", n * i)\n",
      tests: [
        { inputs: ["7"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["7"], check: "/\\bfor\\b/.test(R.code)", message: "Use a for loop." },
        { inputs: ["7"], check: "(function () { var t = R.lines.map(function (l) { return l.replace(/\\s+/g, '').toLowerCase(); }); return t.indexOf('7x1=7') >= 0 && t.indexOf('7x5=35') >= 0 && t.indexOf('7x10=70') >= 0 && t.filter(function (l) { return /^7x\\d+=/.test(l); }).length === 10; })()", message: "For 7, print 10 lines from 7 x 1 = 7 to 7 x 10 = 70." },
        { inputs: ["3"], check: "(function () { var t = R.lines.map(function (l) { return l.replace(/\\s+/g, '').toLowerCase(); }); return t.indexOf('3x1=3') >= 0 && t.indexOf('3x10=30') >= 0 && t.filter(function (l) { return /^3x\\d+=/.test(l); }).length === 10; })()", message: "For 3, print 3 x 1 = 3 up to 3 x 10 = 30. Use the variable n, so it works for every number." }
      ],
      hints: [
        "The loop number <code>i</code> goes from 1 to 10. Which <code>range()</code> gives that?",
        "In each line, you need <code>n</code>, <code>i</code>, and the answer <code>n * i</code>.",
        "<code>for i in range(1, 11):</code> and inside it use the <code>print()</code> from the tip."
      ]
    },
    {
      id: "py03-ex5",
      title: "Mini challenge: add up the prices",
      type: "py",
      instructions: `
        <p>First ask <strong>how many</strong> items the user bought. Then ask for the price of each item
        (whole numbers). At the end, print the total.</p>
        <p>Example (the user bought 3 items):</p>
        <pre><code>How many items? 3
Price: 4
Price: 10
Price: 6
Total: 20</code></pre>
      `,
      starterCode: "count = int(input(\"How many items? \"))\ntotal = 0\n\n# Ask for each price and add it to total\n\nprint(\"Total:\", total)\n",
      solution: "count = int(input(\"How many items? \"))\ntotal = 0\n\nfor i in range(count):\n    price = int(input(\"Price: \"))\n    total = total + price\n\nprint(\"Total:\", total)\n",
      tests: [
        { inputs: ["3", "4", "10", "6"], check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you use int() on each price?" },
        { inputs: ["3", "4", "10", "6"], check: "R.prompts.length === 4", message: "With 3 items, the program should ask 4 times: once for how many, then once for each price." },
        { inputs: ["3", "4", "10", "6"], check: "R.lines.some(function (l) { return /total/i.test(l) && /\\b20\\b/.test(l); })", message: "For the prices 4, 10, and 6, print Total: 20" },
        { inputs: ["2", "7", "8"], check: "!R.error && R.lines.some(function (l) { return /total/i.test(l) && /\\b15\\b/.test(l); })", message: "For 2 items with prices 7 and 8, print Total: 15. Use count in range()." },
        { inputs: ["5", "1", "2", "3", "4", "5"], check: "!R.error && R.lines.some(function (l) { return /total/i.test(l) && /\\b15\\b/.test(l); })", message: "For 5 items with prices 1, 2, 3, 4, 5, print Total: 15." }
      ],
      hints: [
        "The loop must run <code>count</code> times. <code>range(count)</code> does that.",
        "Inside the loop, ask for one price with <code>int(input(...))</code>, then add it to <code>total</code>.",
        "<code>for i in range(count):</code> and inside it: <code>price = int(input(\"Price: \"))</code>. Now add the accumulator line."
      ]
    }
  ]
});
