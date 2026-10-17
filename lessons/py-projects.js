// Programming basics — six beginner projects (Pre-AP CSP "Six Beginner Projects with Sample Answers").
// Lesson and exercise html is written by the course author (trusted content).
// Each step's solution is the whole program after that step. Steps with carry: true start from the
// student's code of the previous step, so their starterCode is the previous step's solution.
(function () {
  var ERROR_TEST = "Your program has an error. Read the message in the Output box.";

  // ==============================================================================================
  // Project 1: Calculator
  // ==============================================================================================

  var CALC_1 = `num1 = float(input("Enter first number: "))
operator = input("Enter +, -, *, or /: ")
num2 = float(input("Enter second number: "))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    result = num1 / num2
else:
    result = None
    print("Invalid operator")

if result is not None:
    print("Result:", result)
`;

  var CALC_2 = `num1 = float(input("Enter first number: "))
operator = input("Enter +, -, *, or /: ")
num2 = float(input("Enter second number: "))

result = None

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 == 0:
        print("Cannot divide by zero")
    else:
        result = num1 / num2
else:
    print("Invalid operator")

if result is not None:
    print("Result:", result)
`;

  var CALC_3 = `def calculate(num1, operator, num2):
    if operator == "+":
        return num1 + num2
    elif operator == "-":
        return num1 - num2
    elif operator == "*":
        return num1 * num2
    elif operator == "/":
        if num2 == 0:
            print("Cannot divide by zero")
            return None
        return num1 / num2
    else:
        print("Invalid operator")
        return None

num1 = float(input("Enter first number: "))
operator = input("Enter +, -, *, or /: ")
num2 = float(input("Enter second number: "))

result = calculate(num1, operator, num2)

if result is not None:
    print("Result:", result)
`;

  addChapterContent("pyp-calc", {
    intro: `
      <p>In this project you build a <strong>calculator</strong>. The user types two numbers and an operator
      (<code>+</code>, <code>-</code>, <code>*</code>, or <code>/</code>). Your program shows the result.</p>
      <p>Example run:</p>
      <pre><code>Enter first number: 10
Enter +, -, *, or /: *
Enter second number: 5
Result: 50.0</code></pre>
      <p>You build it in 3 steps. Each step continues from your code of the step before.
      At the end, press <strong>Download my project</strong> to save it as a <code>.py</code> file.</p>
      <h3>What you will practice</h3>
      <ul>
        <li>variables and <code>input()</code></li>
        <li>data types (<code>float</code> and text)</li>
        <li><code>if</code> / <code>elif</code> / <code>else</code> and comparisons</li>
        <li>arithmetic (math with <code>+ - * /</code>)</li>
        <li>basic error handling (what to do when the input is wrong)</li>
        <li>functions with <code>def</code> and <code>return</code></li>
      </ul>
    `,
    lessons: [],
    exercises: [
      {
        id: "pyp-calc-s1",
        title: "Step 1: A simple calculator",
        type: "py",
        instructions: `
          <p>Write a calculator. Your program must:</p>
          <ol>
            <li>Ask for the first number with <code>float(input("Enter first number: "))</code> and store it in <code>num1</code>.</li>
            <li>Ask for the operator with <code>input("Enter +, -, *, or /: ")</code> and store it in <code>operator</code>.</li>
            <li>Ask for the second number and store it in <code>num2</code>.</li>
            <li>Use <code>if</code> / <code>elif</code> to calculate <code>result</code> for <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code>.</li>
            <li>For any other operator, set <code>result = None</code> and print <code>Invalid operator</code>.</li>
            <li>If there is a result, print it like this: <code>print("Result:", result)</code></li>
          </ol>
          <p>Ask in this order: first number, operator, second number. Example run:</p>
          <pre><code>Enter first number: 10
Enter +, -, *, or /: *
Enter second number: 5
Result: 50.0</code></pre>
          <p>Another example (the operator is wrong):</p>
          <pre><code>Enter first number: 10
Enter +, -, *, or /: x
Enter second number: 5
Invalid operator</code></pre>
        `,
        starterCode: `# Step 1: ask for the first number (use float so decimals work)
num1 = float(input("Enter first number: "))

# Step 2: ask for the operator (+, -, *, or /)

# Step 3: ask for the second number

# Step 4: use if / elif / else to calculate result

# Step 5: print the result
`,
        solution: CALC_1,
        tests: [
          { inputs: ["10", "*", "5"], check: "!R.error && R.prompts.length === 3", message: "Your program should ask for 3 things: first number, operator, second number. Check for errors in the Output box." },
          { inputs: ["10", "*", "5"], check: "R.has('Result: 50')", message: "With 10, * and 5, your program should print Result: 50.0" },
          { inputs: ["10", "+", "5"], check: "R.has('Result: 15') && !R.has('Invalid')", message: "With 10, + and 5, your program should print Result: 15.0" },
          { inputs: ["7", "-", "2"], check: "R.has('Result: 5') && R.has('Result: 9') === false", message: "With 7, - and 2, your program should print Result: 5.0" },
          { inputs: ["10", "x", "5"], check: "R.line('Invalid operator') && !R.has('Result')", message: "With the operator x, your program should print Invalid operator and no Result." }
        ],
        hints: [
          "Ask in this order: first number, operator, second number. Use <code>float(input(...))</code> for the numbers, but not for the operator.",
          "Compare the operator with text: <code>if operator == \"+\":</code> then <code>elif operator == \"-\":</code> and so on.",
          "In the <code>else:</code> part, write <code>result = None</code> and <code>print(\"Invalid operator\")</code>. At the end, print only <code>if result is not None:</code>."
        ]
      },
      {
        id: "pyp-calc-s2",
        title: "Step 2: Do not divide by zero",
        type: "py",
        carry: true,
        instructions: `
          <p>Try this: run your calculator with <code>10</code>, <code>/</code>, and <code>0</code>.
          Python stops with a <code>ZeroDivisionError</code>. Nobody can divide by zero!</p>
          <p>Protect your calculator:</p>
          <ol>
            <li>Put <code>result = None</code> before the <code>if</code>, so <code>result</code> always exists.</li>
            <li>In the <code>/</code> part, check <code>num2</code> first. If it is <code>0</code>, print exactly
            <code>Cannot divide by zero</code>. Otherwise, divide.</li>
          </ol>
          <pre><code>elif operator == "/":
    if num2 == 0:
        print("Cannot divide by zero")
    else:
        result = num1 / num2</code></pre>
          <p>Example run:</p>
          <pre><code>Enter first number: 10
Enter +, -, *, or /: /
Enter second number: 0
Cannot divide by zero</code></pre>
          <p>The other operators must still work.</p>
        `,
        starterCode: CALC_1,
        solution: CALC_2,
        tests: [
          { inputs: ["10", "/", "0"], check: "!R.error", message: "Dividing by zero still gives an error. Check num2 before you divide." },
          { inputs: ["10", "/", "0"], check: "R.line('Cannot divide by zero') && !R.has('Result')", message: "With 10, / and 0, print Cannot divide by zero (and no Result)." },
          { inputs: ["9", "/", "2"], check: "R.has('Result: 4.5')", message: "Normal division must still work: 9 / 2 should print Result: 4.5" },
          { inputs: ["10", "*", "5"], check: "R.has('Result: 50')", message: "The other operators must still work: 10 * 5 should print Result: 50.0" },
          { inputs: ["10", "x", "5"], check: "R.line('Invalid operator') && !R.error", message: "A wrong operator should still print Invalid operator." }
        ],
        hints: [
          "You need an <code>if</code> inside the <code>elif operator == \"/\":</code> part. Indent it one more level.",
          "If you only print a message, <code>result</code> is never set. That is why you need <code>result = None</code> before the first <code>if</code>.",
          "Inside the division part: <code>if num2 == 0:</code> print the message, <code>else:</code> do the division."
        ]
      },
      {
        id: "pyp-calc-s3",
        title: "Step 3: Turn it into a function",
        type: "py",
        carry: true,
        instructions: `
          <p>Good programmers put work into <strong>functions</strong>, so they can use it again.
          Move the calculation into a function called <code>calculate</code>:</p>
          <pre><code>def calculate(num1, operator, num2):
    if operator == "+":
        return num1 + num2
    ...</code></pre>
          <p>Rules for the function:</p>
          <ul>
            <li>It <strong>returns</strong> the answer with <code>return</code>. It does not print it.</li>
            <li>For <code>/</code> with <code>num2 == 0</code>: print <code>Cannot divide by zero</code> and <code>return None</code>.</li>
            <li>For a wrong operator: print <code>Invalid operator</code> and <code>return None</code>.</li>
          </ul>
          <p>Below the function, keep the three <code>input()</code> lines. Then call the function and print the result:</p>
          <pre><code>result = calculate(num1, operator, num2)

if result is not None:
    print("Result:", result)</code></pre>
          <p>The program works the same as before. Example run:</p>
          <pre><code>Enter first number: 10
Enter +, -, *, or /: *
Enter second number: 5
Result: 50.0</code></pre>
          <p>The checks also call your function directly, for example <code>calculate(10, "*", 5)</code> must give <code>50</code>.</p>
        `,
        starterCode: CALC_2,
        solution: CALC_3,
        tests: [
          { inputs: ["10", "*", "5"], check: "!R.error && R.has('Result: 50')", message: "The program should still work: 10, * and 5 should print Result: 50.0" },
          { inputs: ["10", "*", "5"], check: "R.call('calculate', 10, '*', 5) === 50 && R.call('calculate', 10, '+', 5) === 15", message: "I need a function calculate(num1, operator, num2) that returns the answer. calculate(10, \"*\", 5) should return 50." },
          { inputs: ["10", "*", "5"], check: "R.call('calculate', 7, '-', 2) === 5 && R.call('calculate', 9, '/', 2) === 4.5", message: "calculate(7, \"-\", 2) should return 5, and calculate(9, \"/\", 2) should return 4.5." },
          { inputs: ["10", "*", "5"], check: "R.call('calculate', 1, '/', 0) == null && R.call('calculate', 1, 'x', 2) == null", message: "calculate(1, \"/\", 0) and calculate(1, \"x\", 2) should return None (and not crash)." },
          { inputs: ["10", "/", "0"], check: "!R.error && R.line('Cannot divide by zero') && !R.has('Result')", message: "With 10, / and 0, the program should print Cannot divide by zero and no Result." }
        ],
        hints: [
          "Start with <code>def calculate(num1, operator, num2):</code> at the top. Everything inside the function is indented.",
          "Inside the function, use <code>return num1 + num2</code> instead of <code>result = num1 + num2</code>.",
          "Below the function: ask the three inputs, then write <code>result = calculate(num1, operator, num2)</code> and keep your <code>if result is not None:</code> print."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 2: Grade calculator
  // ==============================================================================================

  var GRADE_1 = `score = float(input("Enter your score: "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print("Your grade is:", grade)
`;

  var GRADE_2 = `score = float(input("Enter your score: "))

if score >= 90:
    grade = "A"
    message = "Excellent!"
elif score >= 80:
    grade = "B"
    message = "Good job!"
elif score >= 70:
    grade = "C"
    message = "Not bad!"
elif score >= 60:
    grade = "D"
    message = "You passed."
else:
    grade = "F"
    message = "Keep trying!"

print("Your grade is:", grade)
print(message)
`;

  var GRADE_3 = `score = float(input("Enter your score: "))

if score < 0 or score > 100:
    print("Invalid score.")
else:
    if score >= 90:
        grade = "A"
        message = "Excellent!"
    elif score >= 80:
        grade = "B"
        message = "Good job!"
    elif score >= 70:
        grade = "C"
        message = "Not bad!"
    elif score >= 60:
        grade = "D"
        message = "You passed."
    else:
        grade = "F"
        message = "Keep trying!"

    print("Your grade is:", grade)
    print(message)
`;

  addChapterContent("pyp-grade", {
    intro: `
      <p>In this project you build a <strong>grade calculator</strong>. The user types a score, and your program
      shows the letter grade.</p>
      <p>Example run:</p>
      <pre><code>Enter your score: 87
Your grade is: B</code></pre>
      <p>You build it in 3 steps: first the grade, then a message, then a check for wrong scores.</p>
      <h3>What you will practice</h3>
      <ul>
        <li>variables and numbers</li>
        <li><code>input()</code></li>
        <li><code>if</code> / <code>elif</code> / <code>else</code> with many conditions</li>
        <li>comparison operators like <code>&gt;=</code> and <code>&lt;</code></li>
        <li>decision making, and input validation (checking that the input makes sense)</li>
      </ul>
    `,
    lessons: [],
    exercises: [
      {
        id: "pyp-grade-s1",
        title: "Step 1: Score to grade",
        type: "py",
        instructions: `
          <p>Ask for a score with <code>float(input("Enter your score: "))</code>. Then find the grade:</p>
          <table>
            <tr><th>Score</th><th>Grade</th></tr>
            <tr><td>90 or more</td><td>A</td></tr>
            <tr><td>80 or more</td><td>B</td></tr>
            <tr><td>70 or more</td><td>C</td></tr>
            <tr><td>60 or more</td><td>D</td></tr>
            <tr><td>less than 60</td><td>F</td></tr>
          </table>
          <p>Store the letter in a variable <code>grade</code> and print it with <code>print("Your grade is:", grade)</code>.</p>
          <p>Example run:</p>
          <pre><code>Enter your score: 87
Your grade is: B</code></pre>
        `,
        starterCode: `score = float(input("Enter your score: "))

# Use if / elif / else to set grade to "A", "B", "C", "D", or "F"


# Print the grade
`,
        solution: GRADE_1,
        tests: [
          { inputs: ["87"], check: "!R.error && R.line('Your grade is: B')", message: "With the score 87, your program should print Your grade is: B" },
          { inputs: ["95"], check: "R.line('Your grade is: A')", message: "With the score 95, your program should print Your grade is: A" },
          { inputs: ["72"], check: "R.line('Your grade is: C')", message: "With the score 72, your program should print Your grade is: C" },
          { inputs: ["60"], check: "R.line('Your grade is: D')", message: "With the score 60, your program should print Your grade is: D (60 or more is a D)." },
          { inputs: ["40"], check: "R.line('Your grade is: F')", message: "With the score 40, your program should print Your grade is: F" }
        ],
        hints: [
          "Start with the highest grade: <code>if score &gt;= 90:</code>. Python checks the conditions from top to bottom.",
          "Use <code>elif score &gt;= 80:</code> for B, and so on. The last one is <code>else:</code> for F.",
          "In each part, write a line like <code>grade = \"B\"</code>. After the whole <code>if</code>, print the grade once."
        ]
      },
      {
        id: "pyp-grade-s2",
        title: "Step 2: Add a message",
        type: "py",
        carry: true,
        instructions: `
          <p>Make the program friendlier. Next to each grade, also set a variable <code>message</code>:</p>
          <table>
            <tr><th>Grade</th><th>message</th></tr>
            <tr><td>A</td><td><code>Excellent!</code></td></tr>
            <tr><td>B</td><td><code>Good job!</code></td></tr>
            <tr><td>C</td><td><code>Not bad!</code></td></tr>
            <tr><td>D</td><td><code>You passed.</code></td></tr>
            <tr><td>F</td><td><code>Keep trying!</code></td></tr>
          </table>
          <pre><code>if score &gt;= 90:
    grade = "A"
    message = "Excellent!"
...</code></pre>
          <p>Print the message on its own line, after the grade. Example run:</p>
          <pre><code>Enter your score: 87
Your grade is: B
Good job!</code></pre>
        `,
        starterCode: GRADE_1,
        solution: GRADE_2,
        tests: [
          { inputs: ["87"], check: "!R.error && R.line('Your grade is: B') && R.line('Good job!')", message: "With 87, print Your grade is: B and then Good job!" },
          { inputs: ["95"], check: "R.line('Excellent!') && !R.has('Good job!')", message: "With 95, the message should be Excellent! (and only that message)." },
          { inputs: ["72"], check: "R.line('Not bad!')", message: "With 72 (grade C), the message should be Not bad!" },
          { inputs: ["65"], check: "R.line('You passed.')", message: "With 65 (grade D), the message should be You passed." },
          { inputs: ["40"], check: "R.line('Your grade is: F') && R.line('Keep trying!')", message: "With 40 (grade F), the message should be Keep trying!" }
        ],
        hints: [
          "A part of an <code>if</code> can have more than one line. All lines must have the same indentation.",
          "Under <code>grade = \"A\"</code>, add <code>message = \"Excellent!\"</code>. Do the same for the other grades.",
          "After <code>print(\"Your grade is:\", grade)</code>, add one more print for the message variable."
        ]
      },
      {
        id: "pyp-grade-s3",
        title: "Step 3: Check for invalid scores",
        type: "py",
        carry: true,
        instructions: `
          <p>What happens if the user types <code>125</code>? Right now the program says "A". But a score must be
          between 0 and 100. Checking that the input makes sense is called <strong>input validation</strong>.
          It is an important programming skill.</p>
          <p>Change your program:</p>
          <ul>
            <li>If the score is less than 0 <strong>or</strong> more than 100, print exactly <code>Invalid score.</code> and nothing else.</li>
            <li>Otherwise, do everything as before (grade and message).</li>
          </ul>
          <pre><code>if score &lt; 0 or score &gt; 100:
    print("Invalid score.")
else:
    # your grade code goes here, indented one more level</code></pre>
          <p>Example runs:</p>
          <pre><code>Enter your score: 125
Invalid score.</code></pre>
          <pre><code>Enter your score: 87
Your grade is: B
Good job!</code></pre>
        `,
        starterCode: GRADE_2,
        solution: GRADE_3,
        tests: [
          { inputs: ["125"], check: "!R.error && R.line('Invalid score.')", message: "With 125, your program should print Invalid score." },
          { inputs: ["125"], check: "!R.has('Your grade is')", message: "With 125, do not print a grade. Put the grade code in the else part." },
          { inputs: ["-5"], check: "R.line('Invalid score.') && !R.has('Your grade is')", message: "With -5, your program should also print Invalid score. (A score cannot be less than 0.)" },
          { inputs: ["100"], check: "R.line('Your grade is: A') && !R.has('Invalid')", message: "100 is a valid score. It should give Your grade is: A" },
          { inputs: ["87"], check: "R.line('Your grade is: B') && R.line('Good job!')", message: "With 87, the program should still print Your grade is: B and Good job!" }
        ],
        hints: [
          "You need one new <code>if</code> at the top that checks for a bad score.",
          "<code>or</code> means: True if at least one side is True. So <code>score &lt; 0 or score &gt; 100</code> catches both bad cases.",
          "Put your old grade code inside the <code>else:</code> part. Select those lines and press Tab to indent them."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 3: Number guessing game
  // ==============================================================================================

  var GUESS_1 = `secret = 7

guess = int(input("Guess the number from 1 to 10: "))

while guess != secret:

    if guess < secret:
        print("Too low!")
    else:
        print("Too high!")

    guess = int(input("Try again: "))

print("Correct!")
`;

  var GUESS_2 = `secret = 7
attempts = 0

guess = int(input("Guess the number from 1 to 10: "))

while guess != secret:
    attempts += 1

    if guess < secret:
        print("Too low!")
    else:
        print("Too high!")

    guess = int(input("Try again: "))

attempts += 1

print("Correct!")
print("You needed", attempts, "guesses.")
`;

  var GUESS_3 = `import random

secret = random.randint(1, 100)
attempts = 0

guess = int(input("Guess the number from 1 to 100: "))

while guess != secret:
    attempts += 1

    if guess < secret:
        print("Too low!")
    else:
        print("Too high!")

    guess = int(input("Try again: "))

attempts += 1

print("Correct!")
print("You needed", attempts, "guesses.")
`;

  // Guesses 101 (too high), then 0 (too low), then the real secret number.
  var GUESS_SMART = "function (prompt, count, get) { if (count === 1) return '101'; if (count === 2) return '0'; if (count === 3) return String(get('secret')); return null; }";

  addChapterContent("pyp-guess", {
    intro: `
      <p>In this project you build a <strong>number guessing game</strong>. The program has a secret number.
      The player guesses until the guess is right. After each wrong guess, the program says "Too low!" or "Too high!".</p>
      <p>Example run:</p>
      <pre><code>Guess the number from 1 to 10: 3
Too low!
Try again: 8
Too high!
Try again: 7
Correct!</code></pre>
      <p>This is one of the best beginner projects, because it uses a <strong>loop</strong>. You build it in 3 steps:
      the game, then a guess counter, then a random secret number.</p>
      <h3>What you will practice</h3>
      <ul>
        <li>variables and <code>input()</code></li>
        <li><code>if</code> / <code>else</code></li>
        <li><code>while</code> loops (repetition)</li>
        <li>comparison operators like <code>!=</code> and <code>&lt;</code></li>
        <li>random numbers with <code>import random</code></li>
      </ul>
    `,
    lessons: [],
    exercises: [
      {
        id: "pyp-guess-s1",
        title: "Step 1: Guess until it is right",
        type: "py",
        instructions: `
          <p>The secret number is <code>7</code>. Write the game:</p>
          <ol>
            <li>Ask for the first guess: <code>guess = int(input("Guess the number from 1 to 10: "))</code></li>
            <li>Use <code>while guess != secret:</code> to repeat while the guess is wrong.</li>
            <li>Inside the loop, print <code>Too low!</code> or <code>Too high!</code>, then ask again with <code>input("Try again: ")</code>.</li>
            <li>After the loop, print <code>Correct!</code></li>
          </ol>
          <p>Example run:</p>
          <pre><code>Guess the number from 1 to 10: 3
Too low!
Try again: 8
Too high!
Try again: 7
Correct!</code></pre>
        `,
        starterCode: `secret = 7

# Ask for the first guess (use int to make it a number)

# While the guess is wrong:
#     say "Too low!" or "Too high!"
#     ask again

# After the loop, say "Correct!"
`,
        solution: GUESS_1,
        tests: [
          { inputs: ["3", "8", "7"], check: "!R.error && R.prompts.length === 3", message: "With the guesses 3, 8, 7 your program should ask 3 times and stop after the right guess." },
          { inputs: ["3", "8", "7"], check: "R.line('Too low!') && R.line('Too high!')", message: "For 3 print Too low! and for 8 print Too high!" },
          { inputs: ["3", "8", "7"], check: "R.line('Correct!')", message: "When the user guesses 7, print Correct!" },
          { inputs: ["7"], check: "R.prompts.length === 1 && R.line('Correct!') && !R.has('Too')", message: "If the first guess is 7, the program should print Correct! at once, with no Too low / Too high." }
        ],
        hints: [
          "The <code>while</code> condition is <code>guess != secret</code>. <code>!=</code> means \"is not equal to\".",
          "Inside the loop, the last line must ask for a new guess. If not, <code>guess</code> never changes and the loop never ends.",
          "Use <code>if guess &lt; secret:</code> to print <code>Too low!</code>, and <code>else:</code> to print <code>Too high!</code>."
        ]
      },
      {
        id: "pyp-guess-s2",
        title: "Step 2: Count the guesses",
        type: "py",
        carry: true,
        instructions: `
          <p>Count how many guesses the player needs. This is called a <strong>counter</strong>.</p>
          <ol>
            <li>Before the first guess, create <code>attempts = 0</code>.</li>
            <li>At the start of the loop, add 1: <code>attempts += 1</code></li>
            <li>After the loop, add 1 more (for the last, correct guess).</li>
            <li>After <code>Correct!</code>, print <code>print("You needed", attempts, "guesses.")</code></li>
          </ol>
          <p>Example run:</p>
          <pre><code>Guess the number from 1 to 10: 3
Too low!
Try again: 8
Too high!
Try again: 7
Correct!
You needed 3 guesses.</code></pre>
        `,
        starterCode: GUESS_1,
        solution: GUESS_2,
        tests: [
          { inputs: ["3", "8", "7"], check: "!R.error && R.line('Correct!')", message: "The game should still work: with 3, 8, 7 it ends with Correct!" },
          { inputs: ["3", "8", "7"], check: "R.line('You needed 3 guesses.')", message: "With the guesses 3, 8, 7, print You needed 3 guesses." },
          { inputs: ["3", "8", "7"], check: "R.get('attempts') === 3", message: "The variable attempts should be 3 after the guesses 3, 8, 7." },
          { inputs: ["7"], check: "R.has('You needed 1 guesses')", message: "If the first guess is right, print You needed 1 guesses. Did you add 1 after the loop?" }
        ],
        hints: [
          "<code>attempts += 1</code> is a short way to write <code>attempts = attempts + 1</code>.",
          "The loop runs once for every wrong guess. The correct guess is not counted inside the loop, so add 1 after the loop.",
          "The last line is <code>print(\"You needed\", attempts, \"guesses.\")</code>. Make sure <code>attempts = 0</code> is before the loop, not inside it."
        ]
      },
      {
        id: "pyp-guess-s3",
        title: "Step 3: A random secret number",
        type: "py",
        carry: true,
        instructions: `
          <p>The game is boring if the secret is always 7. Let the computer choose a random number from 1 to 100.</p>
          <ol>
            <li>On the first line, write <code>import random</code></li>
            <li>Change the secret to <code>secret = random.randint(1, 100)</code>. This gives a whole number from 1 to 100.</li>
            <li>Change the first question to <code>"Guess the number from 1 to 100: "</code></li>
          </ol>
          <p>Keep the variable name <code>secret</code>: the checks read it to know the right answer.
          Example run (your numbers will be different):</p>
          <pre><code>Guess the number from 1 to 100: 50
Too high!
Try again: 25
Too low!
Try again: 31
Correct!
You needed 3 guesses.</code></pre>
          <div class="tip"><strong>Tip:</strong> a smart player always guesses the middle. Then 7 guesses are enough for 1 to 100!</div>
        `,
        starterCode: GUESS_2,
        solution: GUESS_3,
        tests: [
          { inputFn: GUESS_SMART, check: "!R.error && R.line('Correct!')", message: "Your game has an error, or it does not print Correct! when the guess is right." },
          { inputFn: GUESS_SMART, check: "/import\\s+random/.test(R.code) && /random\\.randint\\s*\\(\\s*1\\s*,\\s*100\\s*\\)/.test(R.code)", message: "Use import random and secret = random.randint(1, 100)." },
          { inputFn: GUESS_SMART, check: "R.get('secret') >= 1 && R.get('secret') <= 100 && R.get('secret') % 1 === 0", message: "secret should be a whole number from 1 to 100." },
          { inputFn: GUESS_SMART, check: "R.line('Too high!') && R.line('Too low!') && R.line('You needed 3 guesses.')", message: "With the guesses 101, 0, and then the secret, print Too high!, Too low!, Correct! and You needed 3 guesses." }
        ],
        hints: [
          "<code>import random</code> must be at the top, before you use <code>random</code>.",
          "<code>random.randint(a, b)</code> gives a random whole number from a to b. Both a and b can come out.",
          "Replace <code>secret = 7</code> with the <code>random.randint</code> line. The rest of the game stays the same."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 4: Simple quiz
  // ==============================================================================================

  var QUIZ_1 = `score = 0

answer = input("What is the capital of Canada? ")

if answer.lower() == "ottawa":
    print("Correct!")
    score += 1
else:
    print("Wrong!")

answer = input("What is 5 x 6? ")

if answer == "30":
    print("Correct!")
    score += 1
else:
    print("Wrong!")

answer = input("Which planet is known as the Red Planet? ")

if answer.lower() == "mars":
    print("Correct!")
    score += 1
else:
    print("Wrong!")

print("Your score is", score, "out of 3")
`;

  var QUIZ_2 = `questions = [
    "What is the capital of Canada? ",
    "What is 5 x 6? ",
    "Which planet is known as the Red Planet? "
]
answers = ["ottawa", "30", "mars"]

score = 0

for i in range(len(questions)):
    answer = input(questions[i])

    if answer.lower() == answers[i]:
        print("Correct!")
        score += 1
    else:
        print("Wrong!")

print("Your score is", score, "out of", len(questions))
`;

  var QUIZ_3 = `questions = [
    "What is the capital of Canada? ",
    "What is 5 x 6? ",
    "Which planet is known as the Red Planet? ",
    "How many legs does a spider have? "
]
answers = ["ottawa", "30", "mars", "8"]

score = 0

for i in range(len(questions)):
    answer = input(questions[i])

    if answer.lower() == answers[i]:
        print("Correct!")
        score += 1
    else:
        print("Wrong!")

print("Your score is", score, "out of", len(questions))
`;

  // Answers every question with the right answer from the student's answers list.
  var QUIZ_ALL_RIGHT = "function (prompt, count, get) { var a = get('answers') || []; return count <= a.length ? a[count - 1] : null; }";
  // Answers every question wrong.
  var QUIZ_ALL_WRONG = "function (prompt, count, get) { var a = get('answers') || []; return count <= a.length ? 'xyz' : null; }";

  addChapterContent("pyp-quiz", {
    intro: `
      <p>In this project you build a <strong>quiz</strong>. The program asks questions, says if each answer is right,
      and counts the score.</p>
      <p>Example run:</p>
      <pre><code>What is the capital of Canada? Ottawa
Correct!
What is 5 x 6? 30
Correct!
Which planet is known as the Red Planet? Venus
Wrong!
Your score is 2 out of 3</code></pre>
      <p>You build it in 3 steps. First you write each question by hand. Then you put the questions in a
      <strong>list</strong> and use a <code>for</code> loop, so you do not repeat the same code. Then you add your own question.</p>
      <h3>What you will practice</h3>
      <ul>
        <li>variables and strings (text)</li>
        <li><code>if</code> / <code>else</code> and Boolean comparisons (True or False)</li>
        <li><code>input()</code></li>
        <li>counters, like <code>score += 1</code></li>
        <li><code>.lower()</code>, so "Ottawa" and "ottawa" are both right</li>
        <li>lists and <code>for</code> loops, to organize data and write reusable code</li>
      </ul>
    `,
    lessons: [],
    exercises: [
      {
        id: "pyp-quiz-s1",
        title: "Step 1: Three questions",
        type: "py",
        instructions: `
          <p>Write a quiz with these 3 questions, in this order:</p>
          <table>
            <tr><th>Question</th><th>Right answer</th></tr>
            <tr><td><code>What is the capital of Canada? </code></td><td>ottawa</td></tr>
            <tr><td><code>What is 5 x 6? </code></td><td>30</td></tr>
            <tr><td><code>Which planet is known as the Red Planet? </code></td><td>mars</td></tr>
          </table>
          <ul>
            <li>Start with <code>score = 0</code>.</li>
            <li>After each answer, print <code>Correct!</code> and add 1 to <code>score</code>, or print <code>Wrong!</code></li>
            <li>Use <code>answer.lower()</code> for the text answers, so <code>Ottawa</code> and <code>MARS</code> are also right.</li>
            <li>At the end, print <code>print("Your score is", score, "out of 3")</code></li>
          </ul>
          <p>The first question is already done for you. Example run:</p>
          <pre><code>What is the capital of Canada? Ottawa
Correct!
What is 5 x 6? 30
Correct!
Which planet is known as the Red Planet? Venus
Wrong!
Your score is 2 out of 3</code></pre>
        `,
        starterCode: `score = 0

answer = input("What is the capital of Canada? ")

if answer.lower() == "ottawa":
    print("Correct!")
    score += 1
else:
    print("Wrong!")

# Question 2: What is 5 x 6?

# Question 3: Which planet is known as the Red Planet?

# Print the score
`,
        solution: QUIZ_1,
        tests: [
          { inputs: ["Ottawa", "30", "Venus"], check: "!R.error && R.prompts.length === 3", message: "Your quiz should ask exactly 3 questions. Check for errors in the Output box." },
          { inputs: ["Ottawa", "30", "Venus"], check: "R.line('Your score is 2 out of 3') && R.line('Wrong!')", message: "With the answers Ottawa, 30, Venus, print Wrong! for Venus and Your score is 2 out of 3" },
          { inputs: ["ottawa", "30", "MARS"], check: "R.line('Your score is 3 out of 3') && !R.has('Wrong')", message: "With ottawa, 30, MARS all answers are right: Your score is 3 out of 3. Did you use .lower()?" },
          { inputs: ["Paris", "31", "Earth"], check: "R.line('Your score is 0 out of 3') && !R.has('Correct')", message: "With Paris, 31, Earth all answers are wrong: Your score is 0 out of 3" }
        ],
        hints: [
          "Copy the first question block and change the question and the right answer.",
          "For the math question, the answer is text too. Compare it with <code>\"30\"</code> (with quotes).",
          "The last line is <code>print(\"Your score is\", score, \"out of 3\")</code>. It should not be indented."
        ]
      },
      {
        id: "pyp-quiz-s2",
        title: "Step 2: Use a list and a loop",
        type: "py",
        carry: true,
        instructions: `
          <p>Your quiz repeats almost the same code 3 times. A loop can do this for you!</p>
          <ol>
            <li>Make a list <code>questions</code> with the 3 question texts.</li>
            <li>Make a list <code>answers</code> with the 3 right answers in small letters: <code>["ottawa", "30", "mars"]</code></li>
            <li>Use a <code>for</code> loop over the positions: <code>for i in range(len(questions)):</code></li>
            <li>Inside the loop, ask <code>questions[i]</code> and compare <code>answer.lower()</code> with <code>answers[i]</code>.</li>
            <li>At the end: <code>print("Your score is", score, "out of", len(questions))</code></li>
          </ol>
          <p>Use the names <code>questions</code> and <code>answers</code>: the checks read them.
          There must be only one <code>input()</code> in your code now, inside the loop.</p>
          <p>The quiz works the same as before:</p>
          <pre><code>What is the capital of Canada? Ottawa
Correct!
What is 5 x 6? 30
Correct!
Which planet is known as the Red Planet? Venus
Wrong!
Your score is 2 out of 3</code></pre>
        `,
        starterCode: QUIZ_1,
        solution: QUIZ_2,
        tests: [
          { inputs: ["Ottawa", "30", "Venus"], check: "!R.error && R.line('Your score is 2 out of 3')", message: "With Ottawa, 30, Venus the quiz should still print Your score is 2 out of 3" },
          { inputs: ["Ottawa", "30", "Venus"], check: "Array.isArray(R.get('questions')) && R.get('questions').length === 3 && Array.isArray(R.get('answers')) && R.get('answers').length === 3", message: "Make two lists, questions and answers, with 3 items each." },
          { inputs: ["Ottawa", "30", "Venus"], check: "/for\\s+\\w+\\s+in\\s/.test(R.code) && (R.code.match(/input\\s*\\(/g) || []).length === 1", message: "Use a for loop, and write input() only once, inside the loop." },
          { inputs: ["ottawa", "30", "MARS"], check: "R.line('Your score is 3 out of 3')", message: "With ottawa, 30, MARS the score should be 3 out of 3." }
        ],
        hints: [
          "A list looks like this: <code>answers = [\"ottawa\", \"30\", \"mars\"]</code>. <code>answers[0]</code> is the first item.",
          "<code>range(len(questions))</code> gives the positions 0, 1, 2. So <code>i</code> is 0, then 1, then 2.",
          "Inside the loop: <code>answer = input(questions[i])</code>, then <code>if answer.lower() == answers[i]:</code>. Delete the old question blocks."
        ]
      },
      {
        id: "pyp-quiz-s3",
        title: "Step 3: Add your own question",
        type: "py",
        carry: true,
        instructions: `
          <p>Now you see why the list is so useful. To add a question, you only add one item to each list.
          No new <code>if</code>, no new <code>input()</code>!</p>
          <ul>
            <li>Add a 4th question of your choice to <code>questions</code>.</li>
            <li>Add its right answer, in small letters, to <code>answers</code>.</li>
          </ul>
          <p>Because the last line uses <code>len(questions)</code>, it now says <code>out of 4</code> by itself.
          Example run (with your own question at the end):</p>
          <pre><code>What is the capital of Canada? Ottawa
Correct!
What is 5 x 6? 30
Correct!
Which planet is known as the Red Planet? Mars
Correct!
How many legs does a spider have? 8
Correct!
Your score is 4 out of 4</code></pre>
        `,
        starterCode: QUIZ_2,
        solution: QUIZ_3,
        tests: [
          { inputFn: QUIZ_ALL_RIGHT, check: "!R.error && R.prompts.length === 4", message: "Your quiz should ask 4 questions now." },
          { inputFn: QUIZ_ALL_RIGHT, check: "R.get('answers').length === 4 && R.get('questions').length === 4", message: "Both lists, questions and answers, need 4 items." },
          { inputFn: QUIZ_ALL_RIGHT, check: "R.line('Your score is 4 out of 4')", message: "When all 4 answers are right, print Your score is 4 out of 4. Is your new answer in small letters?" },
          { inputFn: QUIZ_ALL_WRONG, check: "R.line('Your score is 0 out of 4')", message: "When all 4 answers are wrong, print Your score is 0 out of 4" }
        ],
        hints: [
          "Put a comma after the last old item, then add the new item.",
          "The new question and its answer must be at the same position (the 4th) in both lists.",
          "Write the answer in small letters, because the program compares it with <code>answer.lower()</code>."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 5: Rock-Paper-Scissors
  // ==============================================================================================

  var RPS_1 = `import random

choices = ["rock", "paper", "scissors"]

computer = random.choice(choices)

player = input("Choose rock, paper, or scissors: ").lower()

print("Computer chose:", computer)

if player == computer:
    print("Tie!")
elif player == "rock" and computer == "scissors":
    print("You win!")
elif player == "paper" and computer == "rock":
    print("You win!")
elif player == "scissors" and computer == "paper":
    print("You win!")
else:
    print("Computer wins!")
`;

  var RPS_2 = `import random

choices = ["rock", "paper", "scissors"]

player_score = 0
computer_score = 0

while player_score < 3 and computer_score < 3:
    computer = random.choice(choices)

    player = input("Choose rock, paper, or scissors: ").lower()

    print("Computer chose:", computer)

    if player == computer:
        print("Tie!")
    elif player == "rock" and computer == "scissors":
        print("You win!")
        player_score += 1
    elif player == "paper" and computer == "rock":
        print("You win!")
        player_score += 1
    elif player == "scissors" and computer == "paper":
        print("You win!")
        player_score += 1
    else:
        print("Computer wins!")
        computer_score += 1

    print("You:", player_score, "Computer:", computer_score)
`;

  var RPS_3 = `import random

choices = ["rock", "paper", "scissors"]

player_score = 0
computer_score = 0

while player_score < 3 and computer_score < 3:
    computer = random.choice(choices)

    player = input("Choose rock, paper, or scissors: ").lower()

    if player not in choices:
        print("Invalid choice.")
        continue

    print("Computer chose:", computer)

    if player == computer:
        print("Tie!")
    elif player == "rock" and computer == "scissors":
        print("You win!")
        player_score += 1
    elif player == "paper" and computer == "rock":
        print("You win!")
        player_score += 1
    elif player == "scissors" and computer == "paper":
        print("You win!")
        player_score += 1
    else:
        print("Computer wins!")
        computer_score += 1

    print("You:", player_score, "Computer:", computer_score)

if player_score == 3:
    print("You won the game!")
else:
    print("The computer won the game!")
`;

  // Builds an inputFn that plays a fixed plan. Each item is "win", "lose", "tie", or a word to type.
  // It reads the computer's choice from the running program, so the result of each round is known.
  function rpsPlan(plan) {
    return "function (prompt, count, get) {" +
      " var plan = " + JSON.stringify(plan) + ";" +
      " var move = plan[count - 1]; if (!move) return null;" +
      " var c = get('computer');" +
      " if (move === 'tie') return c;" +
      " if (move === 'win') return { rock: 'paper', paper: 'scissors', scissors: 'rock' }[c];" +
      " if (move === 'lose') return { rock: 'scissors', paper: 'rock', scissors: 'paper' }[c];" +
      " return move; }";
  }

  addChapterContent("pyp-rps", {
    intro: `
      <p>In this project you build <strong>Rock-Paper-Scissors</strong> against the computer.
      Rock beats scissors, scissors beats paper, and paper beats rock.</p>
      <p>Example run:</p>
      <pre><code>Choose rock, paper, or scissors: rock
Computer chose: scissors
You win!</code></pre>
      <p>You build it in 3 steps: one round, then a score and many rounds until someone reaches 3,
      then a winner message and a check for wrong input.</p>
      <h3>What you will practice</h3>
      <ul>
        <li>lists, like <code>["rock", "paper", "scissors"]</code></li>
        <li>variables and strings</li>
        <li>random choices with <code>random.choice()</code></li>
        <li><code>if</code> / <code>elif</code> / <code>else</code></li>
        <li>Boolean logic with <code>and</code>: both conditions must be True</li>
        <li><code>while</code> loops and counters</li>
      </ul>
    `,
    lessons: [],
    exercises: [
      {
        id: "pyp-rps-s1",
        title: "Step 1: Play one round",
        type: "py",
        instructions: `
          <p>Write one round of the game:</p>
          <ol>
            <li>Let the computer choose: <code>computer = random.choice(choices)</code></li>
            <li>Ask the player: <code>player = input("Choose rock, paper, or scissors: ").lower()</code></li>
            <li>Print <code>print("Computer chose:", computer)</code></li>
            <li>Print the result: <code>Tie!</code>, <code>You win!</code>, or <code>Computer wins!</code></li>
          </ol>
          <p>The player wins in 3 cases. Each case needs <code>and</code>, because two things must be True:</p>
          <pre><code>player == "rock" and computer == "scissors"</code></pre>
          <p>Choose the computer <strong>before</strong> you ask the player, and keep the variable names
          <code>computer</code> and <code>player</code>. Example run:</p>
          <pre><code>Choose rock, paper, or scissors: rock
Computer chose: scissors
You win!</code></pre>
        `,
        starterCode: `import random

choices = ["rock", "paper", "scissors"]

# Let the computer choose from the list

# Ask the player (use .lower() so ROCK also works)

# Print what the computer chose

# Tie? Player wins? Computer wins?
`,
        solution: RPS_1,
        tests: [
          { inputFn: rpsPlan(["win"]), check: "!R.error && R.has('Computer chose: ' + R.get('computer'))", message: "Print what the computer chose, like Computer chose: scissors. Check for errors too." },
          { inputFn: rpsPlan(["win"]), check: "R.line('You win!') && !R.has('Computer wins') && !R.has('Tie')", message: "When the player beats the computer, print You win!" },
          { inputFn: rpsPlan(["lose"]), check: "R.line('Computer wins!') && !R.has('You win')", message: "When the computer beats the player, print Computer wins!" },
          { inputFn: rpsPlan(["tie"]), check: "R.line('Tie!')", message: "When both choose the same thing, print Tie!" },
          { inputFn: rpsPlan(["ROCK"]), check: "R.lines.some(function (l) { return l === 'Tie!' || l === 'You win!' || l === 'Computer wins!'; }) && (R.get('computer') !== 'scissors' || R.line('You win!'))", message: "The player typed ROCK in capital letters. Use .lower() after input(), so it still works." }
        ],
        hints: [
          "<code>random.choice(choices)</code> picks one item from the list.",
          "Check a tie first: <code>if player == computer:</code>. Then one <code>elif</code> for each way the player can win.",
          "Everything else means the computer wins, so the last part is <code>else:</code> with <code>print(\"Computer wins!\")</code>."
        ]
      },
      {
        id: "pyp-rps-s2",
        title: "Step 2: Keep score, first to 3",
        type: "py",
        carry: true,
        instructions: `
          <p>Now play many rounds and keep the score. The game continues until someone has 3 points.</p>
          <ol>
            <li>Before the loop, create <code>player_score = 0</code> and <code>computer_score = 0</code>.</li>
            <li>Put the round inside <code>while player_score &lt; 3 and computer_score &lt; 3:</code></li>
            <li>The computer must choose again in every round, so <code>random.choice</code> goes inside the loop.</li>
            <li>When the player wins, add 1 to <code>player_score</code>. When the computer wins, add 1 to <code>computer_score</code>.
            A tie gives no points.</li>
            <li>At the end of each round, print the score: <code>print("You:", player_score, "Computer:", computer_score)</code></li>
          </ol>
          <p>Example run (the start of a game):</p>
          <pre><code>Choose rock, paper, or scissors: rock
Computer chose: scissors
You win!
You: 1 Computer: 0
Choose rock, paper, or scissors: paper
Computer chose: paper
Tie!
You: 1 Computer: 0
...</code></pre>
        `,
        starterCode: RPS_1,
        solution: RPS_2,
        tests: [
          { inputFn: rpsPlan(["win", "win", "win"]), check: "!R.error && R.prompts.length === 3", message: "If the player wins 3 rounds in a row, the game should ask 3 times and then stop." },
          { inputFn: rpsPlan(["win", "win", "win"]), check: "R.line('You: 3 Computer: 0') && R.get('player_score') === 3", message: "After 3 wins, print the score You: 3 Computer: 0" },
          { inputFn: rpsPlan(["lose", "lose", "lose"]), check: "R.prompts.length === 3 && R.line('You: 0 Computer: 3')", message: "If the computer wins 3 rounds, the game should stop with You: 0 Computer: 3" },
          { inputFn: rpsPlan(["win", "tie", "lose", "win", "win"]), check: "R.prompts.length === 5 && R.line('You: 1 Computer: 1') && R.line('You: 3 Computer: 1')", message: "A tie gives no points. With win, tie, lose, win, win the game takes 5 rounds and ends with You: 3 Computer: 1" }
        ],
        hints: [
          "Everything that happens in one round must be indented inside the <code>while</code> loop.",
          "Under each <code>print(\"You win!\")</code>, add <code>player_score += 1</code>. Under <code>print(\"Computer wins!\")</code>, add <code>computer_score += 1</code>.",
          "Print the score as the last line inside the loop, after the whole <code>if</code> / <code>elif</code> / <code>else</code>."
        ]
      },
      {
        id: "pyp-rps-s3",
        title: "Step 3: Winner message and wrong input",
        type: "py",
        carry: true,
        instructions: `
          <p>Finish the game with two improvements:</p>
          <ol>
            <li><strong>Wrong input:</strong> if the player types something that is not in <code>choices</code> (for example <code>lizard</code>),
            print <code>Invalid choice.</code> and go to the next round. Nobody gets a point.
            Use <code>if player not in choices:</code> and <code>continue</code> (it jumps back to the top of the loop).</li>
            <li><strong>Winner:</strong> after the loop, print <code>You won the game!</code> if <code>player_score</code> is 3.
            Otherwise print <code>The computer won the game!</code></li>
          </ol>
          <p>Example run (the end of a game):</p>
          <pre><code>Choose rock, paper, or scissors: lizard
Invalid choice.
Choose rock, paper, or scissors: rock
Computer chose: scissors
You win!
You: 3 Computer: 1
You won the game!</code></pre>
        `,
        starterCode: RPS_2,
        solution: RPS_3,
        tests: [
          { inputFn: rpsPlan(["win", "win", "win"]), check: "!R.error && R.line('You won the game!') && !R.has('The computer won')", message: "When the player reaches 3 points, print You won the game! after the loop." },
          { inputFn: rpsPlan(["lose", "lose", "lose"]), check: "R.line('The computer won the game!') && !R.has('You won the game')", message: "When the computer reaches 3 points, print The computer won the game!" },
          { inputFn: rpsPlan(["lizard", "win", "win", "win"]), check: "!R.error && R.line('Invalid choice.') && R.prompts.length === 4", message: "When the player types lizard, print Invalid choice. and ask again (the round does not count)." },
          { inputFn: rpsPlan(["lizard", "win", "win", "win"]), check: "R.line('You: 3 Computer: 0') && !R.has('Computer wins!')", message: "lizard is not a real choice, so the computer must not get a point for it." }
        ],
        hints: [
          "<code>player not in choices</code> is True when the player's word is not in the list.",
          "Put the <code>Invalid choice.</code> check right after the <code>input()</code> line, inside the loop. <code>continue</code> skips the rest of the round.",
          "The winner message goes after the loop, with no indentation. Use <code>if player_score == 3:</code> and <code>else:</code>."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 6: Menu program
  // ==============================================================================================

  var MENU_1 = `while True:

    print()
    print("===== MENU =====")
    print("1. Say Hello")
    print("2. Add Two Numbers")
    print("3. Say Goodbye")
    print("4. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        print("Hello!")

    elif choice == "2":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        print("Result:", num1 + num2)

    elif choice == "3":
        print("Goodbye!")

    elif choice == "4":
        print("Program ending...")
        break

    else:
        print("Invalid choice.")
`;

  var MENU_2 = `def add(num1, num2):
    return num1 + num2


while True:

    print()
    print("===== MENU =====")
    print("1. Say Hello")
    print("2. Add Two Numbers")
    print("3. Say Goodbye")
    print("4. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        print("Hello!")

    elif choice == "2":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        print("Result:", add(num1, num2))

    elif choice == "3":
        print("Goodbye!")

    elif choice == "4":
        print("Program ending...")
        break

    else:
        print("Invalid choice.")
`;

  var MENU_3 = `def add(num1, num2):
    return num1 + num2


def multiply(num1, num2):
    return num1 * num2


while True:

    print()
    print("===== MENU =====")
    print("1. Say Hello")
    print("2. Add Two Numbers")
    print("3. Say Goodbye")
    print("4. Multiply Two Numbers")
    print("5. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        print("Hello!")

    elif choice == "2":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        print("Result:", add(num1, num2))

    elif choice == "3":
        print("Goodbye!")

    elif choice == "4":
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        print("Result:", multiply(num1, num2))

    elif choice == "5":
        print("Program ending...")
        break

    else:
        print("Invalid choice.")
`;

  addChapterContent("pyp-menu", {
    intro: `
      <p>In this project you build a <strong>menu program</strong>. It shows a list of options, the user picks one,
      and the program does it. The menu repeats until the user chooses Exit. Many real applications work like this.</p>
      <p>Example run:</p>
      <pre><code>===== MENU =====
1. Say Hello
2. Add Two Numbers
3. Say Goodbye
4. Exit
Choose an option: 2
Enter first number: 10
Enter second number: 25
Result: 35.0</code></pre>
      <p>You build it in 3 steps: the menu, then a function for the addition, then a new menu option with its own function.</p>
      <h3>What you will practice</h3>
      <ul>
        <li>variables, strings, and numbers</li>
        <li><code>input()</code></li>
        <li><code>if</code> / <code>elif</code> / <code>else</code></li>
        <li><code>while True</code> and <code>break</code></li>
        <li>functions</li>
        <li>program structure: how to organize a bigger program</li>
      </ul>
    `,
    lessons: [],
    exercises: [
      {
        id: "pyp-menu-s1",
        title: "Step 1: The menu",
        type: "py",
        instructions: `
          <p>Write a menu that repeats. Use <code>while True:</code> so the loop runs again and again.
          In each round:</p>
          <ol>
            <li>Print an empty line with <code>print()</code>, then the menu (the lines are already in the starter code).</li>
            <li>Ask <code>choice = input("Choose an option: ")</code></li>
            <li>Do what the user chose:
              <ul>
                <li><code>"1"</code>: print <code>Hello!</code></li>
                <li><code>"2"</code>: ask for two numbers (with <code>float</code>) and print <code>print("Result:", num1 + num2)</code></li>
                <li><code>"3"</code>: print <code>Goodbye!</code></li>
                <li><code>"4"</code>: print <code>Program ending...</code> and stop the loop with <code>break</code></li>
                <li>anything else: print <code>Invalid choice.</code></li>
              </ul>
            </li>
          </ol>
          <p>Example run:</p>
          <pre><code>===== MENU =====
1. Say Hello
2. Add Two Numbers
3. Say Goodbye
4. Exit
Choose an option: 1
Hello!

===== MENU =====
1. Say Hello
2. Add Two Numbers
3. Say Goodbye
4. Exit
Choose an option: 4
Program ending...</code></pre>
        `,
        starterCode: `# Put everything below inside a while True: loop (indent it)
print()
print("===== MENU =====")
print("1. Say Hello")
print("2. Add Two Numbers")
print("3. Say Goodbye")
print("4. Exit")

# Ask for the choice

# Use if / elif / else for each option. Option 4 uses break.
`,
        solution: MENU_1,
        tests: [
          { inputs: ["4"], check: "!R.error && R.prompts.length === 1 && R.line('===== MENU =====') && R.line('4. Exit') && R.line('Program ending...')", message: "When the user chooses 4, print the menu, then Program ending... and stop." },
          { inputs: ["1", "4"], check: "R.line('Hello!') && R.prompts.length === 2 && R.lines.filter(function (l) { return l === '===== MENU ====='; }).length === 2", message: "With 1 and then 4: print Hello!, show the menu again, then end." },
          { inputs: ["2", "10", "25", "4"], check: "!R.error && R.has('Result: 35')", message: "With 2, 10, 25 (and then 4), print Result: 35.0" },
          { inputs: ["3", "4"], check: "R.line('Goodbye!') && R.line('Program ending...')", message: "With 3 (and then 4), print Goodbye!" },
          { inputs: ["9", "4"], check: "R.line('Invalid choice.') && R.line('Program ending...')", message: "With 9 (and then 4), print Invalid choice. and show the menu again." }
        ],
        hints: [
          "Write <code>while True:</code> at the top and indent all other lines under it.",
          "The choice is text, so compare it with text: <code>if choice == \"1\":</code>.",
          "<code>break</code> stops the loop. Put it under <code>print(\"Program ending...\")</code> in the part for option 4."
        ]
      },
      {
        id: "pyp-menu-s2",
        title: "Step 2: Add with a function",
        type: "py",
        carry: true,
        instructions: `
          <p>Bigger programs put their work into <strong>functions</strong>. Write a function <code>add</code>
          at the top of your program, before the loop:</p>
          <pre><code>def add(num1, num2):
    return num1 + num2</code></pre>
          <p>Then use it in option 2: <code>print("Result:", add(num1, num2))</code></p>
          <p>The program works the same as before. The checks call your function directly too:
          <code>add(10, 25)</code> must give <code>35</code>.</p>
          <pre><code>Choose an option: 2
Enter first number: 10
Enter second number: 25
Result: 35.0</code></pre>
        `,
        starterCode: MENU_1,
        solution: MENU_2,
        tests: [
          { inputs: ["4"], check: "!R.error && R.call('add', 10, 25) === 35 && R.call('add', 2, 3) === 5", message: "I need a function add(num1, num2) that returns the sum. add(10, 25) should return 35." },
          { inputs: ["2", "10", "25", "4"], check: "!R.error && R.has('Result: 35')", message: "Option 2 should still work: 10 and 25 give Result: 35.0" },
          { inputs: ["2", "10", "25", "4"], check: "/add\\s*\\(\\s*num1\\s*,\\s*num2\\s*\\)/.test(R.code.split('while')[1] || '')", message: "Use the function in option 2: print(\"Result:\", add(num1, num2))" },
          { inputs: ["1", "4"], check: "R.line('Hello!') && R.line('Program ending...')", message: "The other options should still work: 1 prints Hello!, 4 ends the program." }
        ],
        hints: [
          "A function must be defined before it is used. Put <code>def add(num1, num2):</code> at the very top.",
          "Inside the function, write <code>return num1 + num2</code>. <code>return</code> gives the answer back.",
          "In option 2, replace <code>num1 + num2</code> in the print with a call to your function."
        ]
      },
      {
        id: "pyp-menu-s3",
        title: "Step 3: A new menu option",
        type: "py",
        carry: true,
        instructions: `
          <p>Add a new option that multiplies two numbers. Exit moves to number 5.</p>
          <ol>
            <li>Write a second function at the top: <code>def multiply(num1, num2):</code> that <strong>returns</strong> <code>num1 * num2</code>.</li>
            <li>Change the menu: <code>4. Multiply Two Numbers</code> and <code>5. Exit</code></li>
            <li>Option <code>"4"</code>: ask for two numbers and print <code>print("Result:", multiply(num1, num2))</code></li>
            <li>Option <code>"5"</code>: print <code>Program ending...</code> and <code>break</code></li>
          </ol>
          <p>Example run:</p>
          <pre><code>===== MENU =====
1. Say Hello
2. Add Two Numbers
3. Say Goodbye
4. Multiply Two Numbers
5. Exit
Choose an option: 4
Enter first number: 6
Enter second number: 7
Result: 42.0</code></pre>
          <div class="tip"><strong>Well done!</strong> You finished all six projects. Now try a new idea of your own:
          break the problem into small steps, and build it one step at a time.</div>
        `,
        starterCode: MENU_2,
        solution: MENU_3,
        tests: [
          { inputs: ["5"], check: "!R.error && R.line('5. Exit') && R.line('4. Multiply Two Numbers') && R.line('Program ending...')", message: "The menu should show 4. Multiply Two Numbers and 5. Exit, and 5 should end the program." },
          { inputs: ["5"], check: "R.call('multiply', 6, 7) === 42 && R.call('multiply', 10, 0) === 0", message: "I need a function multiply(num1, num2) that returns the product. multiply(6, 7) should return 42." },
          { inputs: ["4", "6", "7", "5"], check: "!R.error && R.has('Result: 42')", message: "With 4, 6, 7 (and then 5), print Result: 42.0" },
          { inputs: ["2", "10", "25", "5"], check: "!R.error && R.has('Result: 35')", message: "Option 2 should still add: 10 and 25 give Result: 35.0" },
          { inputs: ["1", "4", "3", "3", "5"], check: "!R.error && R.line('Hello!') && R.has('Result: 9') && R.prompts.length === 5", message: "Options 1 and 4 should still work, and only 5 ends the program." }
        ],
        hints: [
          "Copy your <code>add</code> function and change the name and the <code>+</code>.",
          "You need a new <code>elif choice == \"4\":</code> part. The old exit part becomes <code>elif choice == \"5\":</code>.",
          "Option 4 looks like option 2, but it calls <code>multiply(num1, num2)</code> instead of <code>add(num1, num2)</code>."
        ]
      }
    ]
  });
})();
