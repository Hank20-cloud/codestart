// Chapter 7 — Repeating things
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch07", {
  lessons: [
    {
      id: "ch07-l1",
      title: "The for loop",
      html: `
        <p>Imagine you must print the numbers from 1 to 100. Writing 100 lines of <code>console.log</code>
        is boring. A <strong>loop</strong> repeats code for you.</p>
        <pre><code>for (let i = 1; i &lt;= 5; i++) {
  console.log(i);
}</code></pre>
        <p>This prints 1, 2, 3, 4, 5. The line <code>for ( ... )</code> has three parts, split by <code>;</code></p>
        <ol>
          <li><code>let i = 1</code> — <strong>start</strong>: make a counter called <code>i</code> with the value 1.</li>
          <li><code>i &lt;= 5</code> — <strong>condition</strong>: keep going while this is true.</li>
          <li><code>i++</code> — <strong>step</strong>: after each round, add 1 to <code>i</code>.
          (<code>i++</code> is a short way to write <code>i = i + 1</code>.)</li>
        </ol>
        <p>The code inside <code>{ }</code> runs once in every round. When the condition becomes false,
        the loop stops and the program goes on with the next line.</p>
      `
    },
    {
      id: "ch07-l2",
      title: "Counting in other ways",
      html: `
        <p>You can change the start, the condition and the step.</p>
        <p><strong>Counting down:</strong> start high, and use <code>i--</code> (subtract 1).</p>
        <pre><code>for (let i = 3; i >= 1; i--) {
  console.log(i);
}
console.log("Go!");</code></pre>
        <p>This prints 3, 2, 1, and then <code>Go!</code>. The last line is outside the loop, so it runs only once.</p>
        <p><strong>Counting by 2:</strong> use <code>i += 2</code> as the step.</p>
        <pre><code>for (let i = 0; i &lt;= 10; i += 2) {
  console.log(i);   // 0 2 4 6 8 10
}</code></pre>
        <p>You can use the counter in the code inside the loop, for example
        <code>console.log("Round " + i);</code></p>
      `
    },
    {
      id: "ch07-l3",
      title: "Adding up numbers in a loop",
      html: `
        <p>A common job: add up many numbers. Make a variable for the total <strong>before</strong>
        the loop, and add to it <strong>inside</strong> the loop.</p>
        <pre><code>let total = 0;

for (let i = 1; i &lt;= 4; i++) {
  total = total + i;
}

console.log(total);   // 10</code></pre>
        <p>Step by step: total is 0. Then 0 + 1 = 1, then 1 + 2 = 3, then 3 + 3 = 6, then 6 + 4 = 10.</p>
        <div class="tip">Put <code>console.log(total)</code> <strong>after</strong> the loop to print only
        the final answer. If you put it inside the loop, it prints the total after every round.</div>
      `
    },
    {
      id: "ch07-l4",
      title: "while loops and loops that never end",
      html: `
        <p>A <code>while</code> loop is simpler. It only has a condition. It repeats while the condition is true.</p>
        <pre><code>let lives = 3;

while (lives > 0) {
  console.log("Lives left: " + lives);
  lives = lives - 1;
}
console.log("Game over");</code></pre>
        <p>Use <code>while</code> when you don't know in advance how many rounds you need.</p>
        <p><strong>Be careful:</strong> something inside the loop must change, so that the condition becomes
        false one day. If you forget the line <code>lives = lives - 1;</code>, lives stays 3 forever, and
        the loop <strong>never ends</strong>.</p>
        <div class="tip">A loop that never ends can freeze a normal web page. In this course the tool watches
        your loops. If a loop runs too long, it stops it and tells you "Your loop never stopped". Then look
        for the variable that should change inside the loop.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch07-ex1",
      title: "Count to 10",
      type: "js",
      instructions: `
        <p>Use a <code>for</code> loop to print the numbers from <strong>1 to 10</strong>, one number on each line.</p>
        <p>Don't write ten <code>console.log</code> lines. Use a loop with one <code>console.log</code> inside.</p>
      `,
      starterCode: "// Write your for loop here\n",
      solution: "// Write your for loop here\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n",
      tests: [
        { check: "/\\b(for|while)\\s*\\(/.test(CS.code)", message: "I can't find a loop. Use for ( ... ) { ... }." },
        { check: "CS.logs.length > 0 && CS.logs[0].trim() === '1'", message: "The first number printed should be 1." },
        { check: "CS.logs.map(function (l) { return l.trim(); }).join(',') === '1,2,3,4,5,6,7,8,9,10'", message: "The output should be exactly the numbers 1 to 10, one per line. Check where your loop starts and stops." }
      ],
      hints: [
        "A for loop has three parts: start, condition, step.",
        "Start at 1 and keep going while the counter is less than or equal to 10.",
        "<code>for (let i = 1; i &lt;= 10; i++) {</code> ... and print <code>i</code> inside the <code>{ }</code>."
      ]
    },
    {
      id: "ch07-ex2",
      title: "Rocket countdown",
      type: "js",
      instructions: `
        <p>Count down from <code>start</code> to 1, and then print <strong>Liftoff!</strong> once. With
        <code>start</code> = 5 the output is:</p>
        <pre><code>5
4
3
2
1
Liftoff!</code></pre>
        <p>Use the variable <code>start</code> in your loop, so the countdown also works for other numbers.</p>
      `,
      starterCode: "let start = 5;\n\n",
      solution: "let start = 5;\n\nfor (let i = start; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log(\"Liftoff!\");\n",
      tests: [
        { check: "CS.logs.map(function (l) { return l.trim(); }).join(',') === '5,4,3,2,1,Liftoff!'", message: "With start = 5, the output should be 5, 4, 3, 2, 1 and then Liftoff! (each on its own line)." },
        { check: "CS.runWith({ start: 3 }).map(function (l) { return l.trim(); }).join(',') === '3,2,1,Liftoff!'", message: "With start = 3, the output should be 3, 2, 1, Liftoff! Make your loop start at the variable start." },
        { check: "CS.logs.filter(function (l) { return l.trim() === 'Liftoff!'; }).length === 1", message: "\"Liftoff!\" should be printed only once. Should that line be inside or outside the loop?" }
      ],
      hints: [
        "To count down, start high and use <code>i--</code> as the step.",
        "Start the counter at the variable: <code>let i = start</code>. Keep going while <code>i &gt;= 1</code>.",
        "Put <code>console.log(\"Liftoff!\");</code> after the closing <code>}</code> of the loop."
      ]
    },
    {
      id: "ch07-ex3",
      title: "Add up 1 to n",
      type: "js",
      instructions: `
        <p>Add up all the whole numbers from 1 to <code>n</code> and print the total once, at the end.</p>
        <p>With <code>n</code> = 100, the total is 1 + 2 + 3 + ... + 100. The computer can do this in a flash.</p>
        <p>Your program should print only <strong>one</strong> line: the total.</p>
      `,
      starterCode: "let n = 100;\nlet total = 0;\n\n// Your loop here\n\nconsole.log(total);\n",
      solution: "let n = 100;\nlet total = 0;\n\n// Your loop here\nfor (let i = 1; i <= n; i++) {\n  total = total + i;\n}\n\nconsole.log(total);\n",
      tests: [
        { check: "CS.logs.map(function (l) { return l.trim(); }).join(',') === '5050'", message: "With n = 100 your program should print one line: the total of 1 to 100." },
        { check: "CS.runWith({ n: 4 }).map(function (l) { return l.trim(); }).join(',') === '10'", message: "With n = 4, the total should be 1 + 2 + 3 + 4 = 10. Make your loop stop at n, not at a fixed number." },
        { check: "CS.runWith({ n: 1 }).map(function (l) { return l.trim(); }).join(',') === '1'", message: "With n = 1, the total should be 1. Check where your loop starts and stops." }
      ],
      hints: [
        "Write a for loop from 1 to <code>n</code>.",
        "Inside the loop, add the counter to the total: <code>total = total + i;</code>",
        "<code>for (let i = 1; i &lt;= n; i++) { total = total + i; }</code> Keep the <code>console.log(total)</code> after the loop."
      ]
    },
    {
      id: "ch07-ex4",
      title: "Fix the loop that never ends",
      type: "js",
      instructions: `
        <p>This <code>while</code> loop should print 1, 2, 3, 4, 5. But it has a mistake: it never ends.
        Press <strong>Run</strong> to see what happens. The tool stops the loop for you.</p>
        <p>Fix the code so that it prints the numbers 1 to 5 and then stops.</p>
      `,
      starterCode: "let count = 1;\n\nwhile (count <= 5) {\n  console.log(count);\n}\n",
      solution: "let count = 1;\n\nwhile (count <= 5) {\n  console.log(count);\n  count = count + 1;\n}\n",
      tests: [
        { check: "CS.errors.length === 0", message: "Your code still has an error, or the loop still never stops." },
        { check: "/\\bwhile\\s*\\(/.test(CS.code)", message: "Keep the while loop. Fix it instead of removing it." },
        { check: "CS.logs.map(function (l) { return l.trim(); }).join(',') === '1,2,3,4,5'", message: "The output should be exactly 1, 2, 3, 4, 5, one per line." }
      ],
      hints: [
        "The loop runs while <code>count &lt;= 5</code>. Does <code>count</code> ever change inside the loop?",
        "Inside the loop, after printing, the value of <code>count</code> must grow by 1.",
        "Add one line inside the <code>{ }</code>, under the console.log, that adds 1 to <code>count</code>."
      ]
    },
    {
      id: "ch07-ex5",
      title: "Mini challenge: times table",
      type: "js",
      instructions: `
        <p>Print the times table of <code>number</code> from 1 to 10. With <code>number</code> = 7 the output starts like this:</p>
        <pre><code>7 x 1 = 7
7 x 2 = 14
7 x 3 = 21</code></pre>
        <p>...and the last line is <code>7 x 10 = 70</code>. Use a lowercase letter <code>x</code> and a space on
        each side of <code>x</code> and <code>=</code>.</p>
      `,
      starterCode: "let number = 7;\n\n",
      solution: "let number = 7;\n\nfor (let i = 1; i <= 10; i++) {\n  console.log(number + \" x \" + i + \" = \" + number * i);\n}\n",
      tests: [
        { check: "CS.logs.length === 10", message: "Your program should print exactly 10 lines." },
        { check: "CS.logs[0] && CS.logs[0].trim() === '7 x 1 = 7' && CS.logs[9] && CS.logs[9].trim() === '7 x 10 = 70'", message: "The first line should be \"7 x 1 = 7\" and the last line \"7 x 10 = 70\". Check the spaces." },
        { check: "(function () { var out = CS.runWith({ number: 3 }).map(function (l) { return l.trim(); }); return out.length === 10 && out[3] === '3 x 4 = 12' && out[9] === '3 x 10 = 30'; })()", message: "With number = 3, the lines should be \"3 x 1 = 3\" up to \"3 x 10 = 30\". Use the variable number in your text and your math." }
      ],
      hints: [
        "Use a for loop that counts from 1 to 10.",
        "Inside the loop, join the parts with <code>+</code>: the number, the text <code>\" x \"</code>, the counter, the text <code>\" = \"</code>, and the answer.",
        "The answer is <code>number * i</code>. The line starts like <code>console.log(number + \" x \" + i + ...);</code>"
      ]
    }
  ]
});
