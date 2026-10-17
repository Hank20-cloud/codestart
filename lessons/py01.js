// Programming basics, chapter 1 — Variables and data types (Pre-AP CSP topic 1).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py01", {
  lessons: [
    {
      id: "py01-l1",
      title: "What is a program?",
      html: `
        <p>A <strong>program</strong> is a list of instructions for a computer. The computer does them
        one by one, from the top line to the bottom line.</p>
        <p>In this course you write programs in <strong>Python</strong>, a popular language that is easy to read.</p>
        <p>Your first instruction is <code>print()</code>. It shows text on the screen:</p>
        <pre><code>print("Hello!")
print("I am learning Python.")</code></pre>
        <p>Output:</p>
        <pre><code>Hello!
I am learning Python.</code></pre>
        <div class="tip"><strong>How exercises work:</strong> type your program in the box and press
        <strong>▶ Run</strong> (or Ctrl+Enter). The output appears in the black <em>Output</em> box.
        Press <strong>Check my answer</strong> when you think it is right. If you are stuck, press <strong>Hint</strong>.</div>
      `
    },
    {
      id: "py01-l2",
      title: "Variables: labeled boxes",
      html: `
        <p>A <strong>variable</strong> is a named place where a program stores information.
        Think of it like a labeled box. The arrow shows the value going <strong>into</strong> the box:</p>
        <pre><code>age   ←  15
name  ←  "Lisa"
score ←  92.5</code></pre>
        <p>AP CSP (Advanced Placement Computer Science Principles) writes assignment exactly like this, with <code>←</code>.</p>
        <p>In Python you make a variable with <code>=</code>:</p>
        <pre><code>age = 15
name = "Lisa"
score = 92.5
passed = True</code></pre>
        <p>The <code>=</code> means "store this value in this box". It does not mean "is equal to" like in math.</p>
        <p>To show what is in a variable, print it <em>without</em> quotes:</p>
        <pre><code>print(name)      # shows Lisa
print("name")    # shows the word name</code></pre>
        <p>A line that starts with <code>#</code> is a <strong>comment</strong>. Python skips it. Comments are notes for people.</p>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>Read <code>age ← 15</code> as "age gets 15". To show a value, AP uses <code>DISPLAY()</code> instead of <code>print()</code>.</p>
        <pre><code>age ← 15
name ← "Lisa"
DISPLAY(name)</code></pre></div>
        <p><strong>Key idea:</strong> variables let a program remember information.</p>
      `
    },
    {
      id: "py01-l3",
      title: "Data types",
      html: `
        <p>Every value has a <strong>type</strong>. These are the four most common types:</p>
        <table>
          <tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><code>int</code></td><td>whole numbers</td><td><code>age = 15</code></td></tr>
          <tr><td><code>float</code></td><td>decimal numbers</td><td><code>price = 19.99</code></td></tr>
          <tr><td><code>str</code></td><td>text (a "string" of letters)</td><td><code>name = "Lisa"</code></td></tr>
          <tr><td><code>bool</code></td><td>True or False</td><td><code>passed = True</code></td></tr>
        </table>
        <p>Text always goes inside quotes: <code>"Lisa"</code> or <code>'Lisa'</code>.
        <code>True</code> and <code>False</code> start with a capital letter and have no quotes.</p>
        <p>You can ask Python for the type of a value:</p>
        <pre><code>print(type(15))       # &lt;class 'int'&gt;
print(type("15"))     # &lt;class 'str'&gt;</code></pre>
        <p>Notice: <code>15</code> is a number, but <code>"15"</code> is text.</p>
      `
    },
    {
      id: "py01-l4",
      title: "Calculations and input",
      html: `
        <p>You can do math with numbers and variables:</p>
        <pre><code>math = 90
english = 85
science = 92

average = (math + english + science) / 3
print(average)       # 89.0</code></pre>
        <table>
          <tr><th>Symbol</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><code>+ - * /</code></td><td>add, subtract, multiply, divide</td><td><code>10 / 4</code> → <code>2.5</code></td></tr>
          <tr><td><code>//</code></td><td>divide and drop the decimals</td><td><code>10 // 4</code> → <code>2</code></td></tr>
          <tr><td><code>%</code></td><td>remainder</td><td><code>10 % 4</code> → <code>2</code></td></tr>
          <tr><td><code>**</code></td><td>power</td><td><code>2 ** 3</code> → <code>8</code></td></tr>
        </table>
        <p><code>print()</code> can show several values. Put commas between them, and Python adds spaces:</p>
        <pre><code>print("Average:", average)     # Average: 89.0</code></pre>
        <p><code>input()</code> asks the user to type something. A box appears in the Output area:</p>
        <pre><code>name = input("What is your name? ")
print("Hello,", name)</code></pre>
        <div class="tip"><strong>Important:</strong> <code>input()</code> always gives you <em>text</em>.
        To use it as a number, wrap it in <code>int()</code> (whole number) or <code>float()</code> (decimal number):
        <br><code>age = int(input("How old are you? "))</code></div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP uses <code>MOD</code> for the remainder (Python <code>%</code>). <code>10 MOD 4</code> is <code>2</code>. <code>INPUT()</code> gets a value from the user, like Python <code>input()</code>.</p>
        <pre><code>rest ← 10 MOD 4
DISPLAY(rest)
name ← INPUT()</code></pre></div>
      `
    }
  ],
  exercises: [
    {
      id: "py01-ex1",
      title: "Print two lines",
      type: "py",
      instructions: `
        <p>Write a program that prints exactly these two lines:</p>
        <pre><code>Hello, world!
I am learning Python.</code></pre>
      `,
      starterCode: "# Write your program below\n",
      solution: "print(\"Hello, world!\")\nprint(\"I am learning Python.\")\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.line('Hello, world!')", message: "I can't find the line \"Hello, world!\". Check the comma and the !" },
        { check: "R.line('I am learning Python.')", message: "I can't find the line \"I am learning Python.\" Check the spelling and the dot at the end." }
      ],
      hints: [
        "Use <code>print()</code> once for each line.",
        "Text must be inside quotes, like <code>print(\"...\")</code>.",
        "The first line is <code>print(\"Hello, world!\")</code>. Now write the second one."
      ]
    },
    {
      id: "py01-ex2",
      title: "Make your own variables",
      type: "py",
      instructions: `
        <p>Create three variables:</p>
        <ul>
          <li><code>name</code> — your name (text)</li>
          <li><code>age</code> — your age (a whole number, not text)</li>
          <li><code>likes_pizza</code> — <code>True</code> or <code>False</code></li>
        </ul>
        <p>Then print all three variables.</p>
      `,
      starterCode: "# Create your variables here\n\n\n# Print them here\n",
      solution: "name = \"Sam\"\nage = 15\nlikes_pizza = True\n\nprint(name)\nprint(age)\nprint(likes_pizza)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "typeof R.get('name') === 'string' && R.get('name').trim() !== ''", message: "I can't find a variable called name with some text in it. Remember the quotes." },
        { check: "typeof R.get('age') === 'number' && R.get('age') % 1 === 0", message: "age should be a whole number without quotes, like 15 (not \"15\")." },
        { check: "typeof R.get('likes_pizza') === 'boolean'", message: "likes_pizza should be True or False, with a capital letter and no quotes." },
        { check: "R.line(R.get('name')) && R.line(String(R.get('age'))) && (R.line('True') || R.line('False'))", message: "Your variables are right, but print all three of them. Print the variable name without quotes." }
      ],
      hints: [
        "A variable is made like this: <code>box_name = value</code>.",
        "Text needs quotes, numbers do not, and <code>True</code> / <code>False</code> do not either.",
        "To print a variable, write its name without quotes: <code>print(name)</code>."
      ]
    },
    {
      id: "py01-ex3",
      title: "Average of three marks",
      type: "py",
      instructions: `
        <p>The program has three marks. Calculate their <strong>average</strong> and store it in a variable
        called <code>average</code>. Then print it like this:</p>
        <pre><code>Average: 89.0</code></pre>
        <p>Your program must <em>calculate</em> the average from the three variables, so it still works if a mark changes.</p>
      `,
      starterCode: "math = 90\nenglish = 85\nscience = 92\n\n# Calculate the average here\n",
      solution: "math = 90\nenglish = 85\nscience = 92\n\naverage = (math + english + science) / 3\nprint(\"Average:\", average)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "Math.abs(R.get('average') - 89) < 0.001", message: "average is not right. Add the three marks, then divide by 3. Do you need ( ) around the addition?" },
        { check: "R.has('Average:') && R.has('89')", message: "Print the result like this: print(\"Average:\", average)" },
        { check: "/average\\s*=.*(math|english|science)/.test(R.code)", message: "Calculate average from the variables math, english, and science, instead of typing the number." }
      ],
      hints: [
        "The average is the total divided by how many there are.",
        "Python does <code>*</code> and <code>/</code> before <code>+</code>. Use brackets: <code>(a + b + c) / 3</code>.",
        "Write <code>average = (math + english + science) / 3</code>, then print it."
      ]
    },
    {
      id: "py01-ex4",
      title: "Say hello",
      type: "py",
      instructions: `
        <p>Ask the user for their name with <code>input()</code>. Then print a greeting that uses the name.</p>
        <p>Example (the user typed <em>Lisa</em>):</p>
        <pre><code>What is your name? Lisa
Hello, Lisa!</code></pre>
      `,
      starterCode: "# Ask for the name, then say hello\n",
      solution: "name = input(\"What is your name? \")\nprint(\"Hello, \" + name + \"!\")\n",
      tests: [
        { inputs: ["Lisa"], check: "R.prompts.length === 1", message: "Use input() once to ask for the name." },
        { inputs: ["Lisa"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["Lisa"], check: "R.lines.some(function (l) { return /hello/i.test(l) && l.indexOf('Lisa') >= 0; })", message: "When the user types Lisa, your program should print a line with Hello and Lisa." },
        { inputs: ["Marco"], check: "R.lines.some(function (l) { return /hello/i.test(l) && l.indexOf('Marco') >= 0; })", message: "Use the variable in your greeting, so it works for every name, not only Lisa." }
      ],
      hints: [
        "<code>input(\"What is your name? \")</code> shows the question and waits for the answer.",
        "Store the answer in a variable: <code>name = input(...)</code>.",
        "You can join text with <code>+</code>: <code>\"Hello, \" + name + \"!\"</code>"
      ]
    },
    {
      id: "py01-ex5",
      title: "Mini challenge: age next year",
      type: "py",
      instructions: `
        <p>Ask the user for their age. Then print how old they will be next year.</p>
        <p>Example (the user typed <em>15</em>):</p>
        <pre><code>How old are you? 15
Next year you will be 16</code></pre>
        <p>Watch out: <code>input()</code> gives text. You must turn it into a number before you add 1.</p>
      `,
      starterCode: "age = input(\"How old are you? \")\nprint(\"Next year you will be\", age + 1)\n",
      solution: "age = int(input(\"How old are you? \"))\nprint(\"Next year you will be\", age + 1)\n",
      tests: [
        { inputs: ["15"], check: "!R.error", message: "Your program has an error. Hint: can Python add the number 1 to text?" },
        { inputs: ["15"], check: "R.has('16')", message: "When the user types 15, the program should print 16." },
        { inputs: ["40"], check: "R.has('41') && !R.has('401')", message: "When the user types 40, the program should print 41." }
      ],
      hints: [
        "Press Run first and read the error message. What type does <code>input()</code> give?",
        "<code>int(...)</code> turns text like <code>\"15\"</code> into the number <code>15</code>.",
        "Put <code>int( )</code> around the whole <code>input(...)</code> on the first line."
      ]
    }
  ]
});
