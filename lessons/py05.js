// Programming basics, chapter 5 — Functions (Pre-AP CSP topic 5).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py05", {
  lessons: [
    {
      id: "py05-l1",
      title: "What is a function?",
      html: `
        <p>A <strong>function</strong> is a reusable piece of code. You give it a name, and then you can
        use it again and again.</p>
        <p>Suppose we often need to calculate a square (a number times itself). Instead of:</p>
        <pre><code>x = 5
print(x * x)

y = 10
print(y * y)

z = 20
print(z * z)</code></pre>
        <p>we create a function:</p>
        <pre><code>def square(number):
    return number * number</code></pre>
        <p>Then we use it:</p>
        <pre><code>print(square(5))
print(square(10))
print(square(20))</code></pre>
        <p>Output:</p>
        <pre><code>25
100
400</code></pre>
        <p>You already know some functions that are built into Python: <code>print()</code>,
        <code>input()</code>, <code>int()</code>, <code>len()</code>. Now you can make your own.</p>
      `
    },
    {
      id: "py05-l2",
      title: "def, parameters, and calling",
      html: `
        <p>Let us look at the parts of a function:</p>
        <pre><code>def square(number):
    return number * number</code></pre>
        <ul>
          <li><code>def</code> means "define": I am making a new function.</li>
          <li><code>square</code> is the name of the function.</li>
          <li><code>number</code> is a <strong>parameter</strong>: a variable that gets the value you give the function.</li>
          <li>The colon <code>:</code> and the indented lines are the <strong>body</strong>, like in <code>if</code> and loops.</li>
        </ul>
        <p>Defining a function does not run it yet. It only teaches Python a new word.
        The code runs when you <strong>call</strong> the function: <code>square(5)</code>.
        Then <code>number</code> gets the value 5.</p>
        <p>The structure is:</p>
        <pre><code>function
   ↓
input
   ↓
processing
   ↓
output</code></pre>
        <p>A function can have more than one parameter. Separate them with commas:</p>
        <pre><code>def add(a, b):
    return a + b

result = add(10, 20)
print(result)</code></pre>
        <p>Output:</p>
        <pre><code>30</code></pre>
        <div class="tip">Define the function <strong>before</strong> you call it, usually at the top of the program.
        Otherwise Python does not know the name yet.</div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP calls a function a <strong>procedure</strong>. It writes <code>PROCEDURE</code> instead of <code>def</code>, and <code>RETURN( )</code> with brackets.</p>
        <pre><code>PROCEDURE square(number)
{
   RETURN(number * number)
}
DISPLAY(square(5))</code></pre></div>
      `
    },
    {
      id: "py05-l3",
      title: "return or print?",
      html: `
        <p><code>return</code> <em>gives a value back</em> to the place where the function was called.
        You can store that value in a variable, print it, or use it in a calculation:</p>
        <pre><code>total = add(10, 20) + square(3)
print(total)      # 39</code></pre>
        <p><code>print()</code> only <em>shows</em> text on the screen. The rest of the program cannot use it.</p>
        <pre><code>def add_print(a, b):
    print(a + b)       # shows 30, but gives nothing back

def add_return(a, b):
    return a + b       # gives 30 back</code></pre>
        <p>If a function has no <code>return</code>, it gives back the special value <code>None</code>
        (which means "nothing").</p>
        <p>Some functions only do something and do not need to give a value back. That is fine:</p>
        <pre><code>def greet(name):
    print("Hello,", name)

greet("Lisa")
greet("Marco")</code></pre>
        <div class="tip"><strong>Remember:</strong> when the exercise says "<em>return</em> the result",
        use <code>return</code>, not <code>print</code>. <code>return</code> also ends the function immediately.</div>
      `
    },
    {
      id: "py05-l4",
      title: "Abstraction",
      html: `
        <p>Functions introduce <strong>abstraction</strong>, an important AP CSP (Advanced Placement
        Computer Science Principles) idea.</p>
        <p>Abstraction means: you can <em>use</em> something without thinking about <em>how</em> it works
        inside. Instead of worrying about how <code>add()</code> works every time, you simply call
        <code>add(10, 20)</code>.</p>
        <p>You do this every day: you use <code>print()</code>, but you do not know the code inside it.
        You only need to know its name, what you give it, and what it does.</p>
        <p>Functions can use everything you learned before, like <code>if</code> and loops:</p>
        <pre><code>def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    else:
        return "Below B"

print(grade(95))     # A
print(grade(85))     # B</code></pre>
        <p>Good functions have a clear name and do <strong>one</strong> job. This makes big programs easier
        to read, to test, and to fix.</p>
        <div class="tip"><strong>Other languages:</strong> in C# the same function looks like
        <code>static int Square(int number) { return number * number; }</code>. The idea is the same.</div>
      `
    }
  ],
  exercises: [
    {
      id: "py05-ex1",
      title: "Your first function",
      type: "py",
      instructions: `
        <p>Write a function called <code>square</code> that takes one number and <strong>returns</strong>
        the number times itself.</p>
        <p>Then call it to print the square of 5, 10, and 20:</p>
        <pre><code>25
100
400</code></pre>
      `,
      starterCode: "# Define the function square here\n\n\nprint(square(5))\nprint(square(10))\nprint(square(20))\n",
      solution: "def square(number):\n    return number * number\n\n\nprint(square(5))\nprint(square(10))\nprint(square(20))\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you define square before the print lines?" },
        { check: "R.call('square', 4) === 16 && R.call('square', 7) === 49", message: "square(4) should return 16 and square(7) should return 49. Use return, not print, inside the function." },
        { check: "R.lines.join(',') === '25,100,400'", message: "The output should be 25, 100, 400 (one on each line)." }
      ],
      hints: [
        "A function starts with <code>def</code>, then the name, then the parameter in brackets, then a colon.",
        "The first line is <code>def square(number):</code>. The next line must be indented.",
        "Inside the function, give the answer back with <code>return</code> and a calculation that uses <code>number</code>."
      ]
    },
    {
      id: "py05-ex2",
      title: "Add two numbers",
      type: "py",
      instructions: `
        <p>Write a function called <code>add</code> with two parameters, <code>a</code> and <code>b</code>.
        It should <strong>return</strong> their sum.</p>
        <p>The program already calls it:</p>
        <pre><code>30</code></pre>
      `,
      starterCode: "def add(a, b):\n    print(a + b)\n\n\nresult = add(10, 20)\nprint(result)\n",
      solution: "def add(a, b):\n    return a + b\n\n\nresult = add(10, 20)\nprint(result)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.call('add', 2, 3) === 5 && R.call('add', 100, -1) === 99", message: "add(2, 3) should return 5. Right now the function prints the sum but gives back nothing (None). Use return." },
        { check: "R.get('result') === 30 && R.lines.join(',') === '30'", message: "The program should print only 30. Is there still a print inside the function?" }
      ],
      hints: [
        "Press Run. Why do you see <code>None</code>? What does a function give back when it has no <code>return</code>?",
        "<code>print</code> only shows the value. <code>return</code> gives the value back, so it can be stored in <code>result</code>.",
        "Change only the line inside the function: replace <code>print( )</code> with <code>return</code>."
      ]
    },
    {
      id: "py05-ex3",
      title: "Pass or fail function",
      type: "py",
      instructions: `
        <p>Write a function called <code>check_score</code> that takes a score.
        It should <strong>return</strong> the text <code>"Pass"</code> if the score is 50 or higher,
        and <code>"Fail"</code> otherwise.</p>
        <p>Example:</p>
        <pre><code>print(check_score(75))    # Pass
print(check_score(30))    # Fail</code></pre>
      `,
      starterCode: "def check_score(score):\n    # Return \"Pass\" or \"Fail\"\n    return \"\"\n\n\nprint(check_score(75))\nprint(check_score(30))\n",
      solution: "def check_score(score):\n    if score >= 50:\n        return \"Pass\"\n    else:\n        return \"Fail\"\n\n\nprint(check_score(75))\nprint(check_score(30))\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box. Check the indentation: the if is inside the function." },
        { check: "R.call('check_score', 75) === 'Pass' && R.call('check_score', 100) === 'Pass'", message: "check_score(75) should return \"Pass\"." },
        { check: "R.call('check_score', 30) === 'Fail' && R.call('check_score', 0) === 'Fail'", message: "check_score(30) should return \"Fail\"." },
        { check: "R.call('check_score', 50) === 'Pass' && R.call('check_score', 49) === 'Fail'", message: "Check the border: 50 should return \"Pass\" and 49 should return \"Fail\"." }
      ],
      hints: [
        "Use an <code>if</code> / <code>else</code> inside the function, like in chapter 2.",
        "Instead of printing, use <code>return \"Pass\"</code> and <code>return \"Fail\"</code>. The <code>if</code> needs 4 spaces, and the lines inside it need 8.",
        "<code>if score &gt;= 50:</code> then <code>return \"Pass\"</code> on the next line. Now add the <code>else:</code> part."
      ]
    },
    {
      id: "py05-ex4",
      title: "Total with a loop",
      type: "py",
      instructions: `
        <p>Write a function called <code>total_up_to</code> that takes a number <code>n</code> and
        <strong>returns</strong> the total of all whole numbers from 1 to <code>n</code>.</p>
        <p>Use a <code>for</code> loop and the accumulator pattern from chapter 3.</p>
        <pre><code>print(total_up_to(4))      # 1 + 2 + 3 + 4 = 10
print(total_up_to(100))    # 5050</code></pre>
      `,
      starterCode: "def total_up_to(n):\n    total = 0\n    # Add a loop here\n    return total\n\n\nprint(total_up_to(4))\nprint(total_up_to(100))\n",
      solution: "def total_up_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        total = total + i\n    return total\n\n\nprint(total_up_to(4))\nprint(total_up_to(100))\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "/\\bfor\\b|\\bwhile\\b/.test(R.code)", message: "Use a loop inside the function." },
        { check: "R.call('total_up_to', 4) === 10 && R.call('total_up_to', 100) === 5050", message: "total_up_to(4) should return 10 and total_up_to(100) should return 5050. Does your range include n?" },
        { check: "R.call('total_up_to', 1) === 1 && R.call('total_up_to', 10) === 55", message: "total_up_to(1) should return 1 and total_up_to(10) should return 55." }
      ],
      hints: [
        "The loop must go from 1 to <code>n</code>. Remember that <code>range()</code> stops before the stop number.",
        "Use <code>range(1, n + 1)</code>. Inside the loop, add <code>i</code> to <code>total</code>.",
        "Keep <code>return total</code> after the loop, at the same indentation as <code>total = 0</code> (not inside the loop)."
      ]
    },
    {
      id: "py05-ex5",
      title: "Mini challenge: temperature converter",
      type: "py",
      instructions: `
        <p>Write a function called <code>to_fahrenheit</code> that takes a temperature in Celsius and
        <strong>returns</strong> it in Fahrenheit. The formula is:</p>
        <pre><code>fahrenheit = celsius * 9 / 5 + 32</code></pre>
        <p>Then ask the user for a temperature in Celsius, call your function, and print the result.</p>
        <p>Example:</p>
        <pre><code>Celsius: 100
Fahrenheit: 212.0</code></pre>
      `,
      starterCode: "# Define to_fahrenheit here\n\n\n# Ask for the temperature, call the function, print the result\n",
      solution: "def to_fahrenheit(celsius):\n    return celsius * 9 / 5 + 32\n\n\nc = float(input(\"Celsius: \"))\nprint(\"Fahrenheit:\", to_fahrenheit(c))\n",
      tests: [
        { inputs: ["100"], check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you turn the input into a number?" },
        { inputs: ["100"], check: "Math.abs(R.call('to_fahrenheit', 0) - 32) < 0.001 && Math.abs(R.call('to_fahrenheit', 100) - 212) < 0.001 && Math.abs(R.call('to_fahrenheit', -40) + 40) < 0.001", message: "to_fahrenheit(0) should return 32 and to_fahrenheit(100) should return 212. Use return and the formula." },
        { inputs: ["100"], check: "R.prompts.length === 1 && R.lines.some(function (l) { return /fahrenheit/i.test(l) && /\\b212(\\.0+)?\\b/.test(l); })", message: "Ask once for the temperature. For 100, print a line like Fahrenheit: 212.0" },
        { inputs: ["25"], check: "!R.error && R.lines.some(function (l) { return /fahrenheit/i.test(l) && /\\b77(\\.0+)?\\b/.test(l); })", message: "For 25, print Fahrenheit: 77.0. Call your function with the number the user typed." }
      ],
      hints: [
        "First write the function: <code>def to_fahrenheit(celsius):</code> and return the formula.",
        "Then, outside the function, ask with <code>float(input(\"Celsius: \"))</code> and store the answer in a variable.",
        "Call the function with that variable inside <code>print()</code>, for example <code>print(\"Fahrenheit:\", ...)</code>."
      ]
    }
  ]
});
