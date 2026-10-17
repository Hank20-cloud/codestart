// AP CSP, chapter 3 — Big Idea 3 (Algorithms and Programming): variables, expressions, strings,
// Booleans, and IF. Pseudocode follows the AP Exam Reference Sheet.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap03", {
  intro: `
    <p>On the AP exam, code is written in <strong>AP pseudocode</strong>. It is not a real language.
    It is a simple way to write programs that every student can read, whatever language they learned.
    The exam gives you a <strong>reference sheet</strong> with all of it. This chapter teaches the first part.</p>
    <p>You already know these ideas from <em>Programming basics</em>. Here you learn to read them the AP way.</p>
  `,
  lessons: [
    {
      id: "ap03-l1",
      title: "Assignment with ←",
      html: `
        <p>In AP pseudocode, you store a value in a variable with an arrow that points <strong>left</strong>:</p>
        <pre><code>age ← 15
name ← "Lisa"
score ← 92.5</code></pre>
        <p>Read <code>age ← 15</code> as <em>"age gets 15"</em>. The value on the right goes <strong>into</strong> the box on the left.</p>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th></tr>
          <tr><td><code>age ← 15</code></td><td><code>age = 15</code></td></tr>
          <tr><td><code>total ← total + 5</code></td><td><code>total = total + 5</code></td></tr>
        </table>
        <p>The arrow makes one thing very clear: this is not "equal" like in math. In math,
        <code>x = x + 1</code> is impossible. In a program, <code>x ← x + 1</code> means
        "take the value in x, add 1, and put the result back into x".</p>
        <div class="tip"><strong>Order matters.</strong> The computer runs the lines from top to bottom.
        A variable holds only its <em>newest</em> value:</div>
        <pre><code>a ← 3
b ← a
a ← 10
DISPLAY(b)</code></pre>
        <p>This shows <code>3</code>. When <code>b ← a</code> ran, a was 3. Changing a later does not change b.</p>
      `
    },
    {
      id: "ap03-l2",
      title: "DISPLAY, INPUT, and math",
      html: `
        <p><code>DISPLAY(expression)</code> shows a value on the screen. On the AP exam, each DISPLAY shows the
        value followed by a space, all on <strong>one line</strong>:</p>
        <pre><code>DISPLAY("Hi")
DISPLAY(5)</code></pre>
        <p>Output: <code>Hi 5</code></p>
        <p><code>INPUT()</code> gets a value from the user, like <code>input()</code> in Python:</p>
        <pre><code>name ← INPUT()</code></pre>
        <p>The math operators are the same as Python, except one:</p>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th><th>Meaning</th></tr>
          <tr><td><code>a + b</code>, <code>a - b</code>, <code>a * b</code>, <code>a / b</code></td><td>the same</td><td>add, subtract, multiply, divide</td></tr>
          <tr><td><code>a MOD b</code></td><td><code>a % b</code></td><td>the remainder after dividing a by b</td></tr>
        </table>
        <p>Examples: <code>17 MOD 5</code> is <code>2</code> (17 = 3 × 5 + 2). <code>10 MOD 2</code> is <code>0</code>.</p>
        <div class="tip"><strong>Useful trick:</strong> a number is <strong>even</strong> when
        <code>number MOD 2 = 0</code>. MOD is very common on the exam.</div>
        <p>MOD has the same priority as <code>*</code> and <code>/</code>. Like in math, these happen before <code>+</code> and <code>-</code>.</p>
      `
    },
    {
      id: "ap03-l3",
      title: "Strings and Booleans",
      html: `
        <p>A <strong>string</strong> is text. Two important ideas for the exam:</p>
        <ul>
          <li><strong>Concatenation</strong> joins two strings end to end: "bat" and "man" give "batman".</li>
          <li>A <strong>substring</strong> is a part of a string: <code>"bat"</code> is a substring of <code>"batman"</code>.</li>
        </ul>
        <div class="tip">The AP reference sheet has <strong>no symbol</strong> for joining strings.
        When an exam question needs it, the question gives you a procedure and says what it does. For example:
        <em>"The procedure <code>concat(str1, str2)</code> returns a string made of str1 followed by str2."</em>
        Then <code>concat("bat", "man")</code> gives <code>"batman"</code>. (In Python you write <code>"bat" + "man"</code>.)
        Always read the description of the procedure carefully.</div>
        <p>A <strong>Boolean</strong> value is only <code>true</code> or <code>false</code>. Comparisons give a Boolean.
        In AP pseudocode, four of the comparison symbols look different from Python:</p>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th><th>Meaning</th></tr>
          <tr><td><code>a = b</code></td><td><code>a == b</code></td><td>is equal to</td></tr>
          <tr><td><code>a ≠ b</code></td><td><code>a != b</code></td><td>is not equal to</td></tr>
          <tr><td><code>a &gt; b</code>, <code>a &lt; b</code>, <code>a ≥ b</code>, <code>a ≤ b</code></td><td><code>&gt; &lt; &gt;= &lt;=</code></td><td>compare</td></tr>
        </table>
        <div class="tip">In AP pseudocode, <code>=</code> always <em>compares</em>. Storing a value is always <code>←</code>.
        So there is no "one = or two ==" mistake.</div>
        <p>The logic operators are written in capital letters:</p>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th><th>true when…</th></tr>
          <tr><td><code>NOT condition</code></td><td><code>not</code></td><td>the condition is false</td></tr>
          <tr><td><code>condition1 AND condition2</code></td><td><code>and</code></td><td>both are true</td></tr>
          <tr><td><code>condition1 OR condition2</code></td><td><code>or</code></td><td>at least one is true</td></tr>
        </table>
      `
    },
    {
      id: "ap03-l4",
      title: "IF and ELSE",
      html: `
        <p>AP pseudocode uses braces <code>{ }</code> instead of indentation to show which lines belong to the IF:</p>
        <pre><code>IF (score ≥ 50)
{
   DISPLAY("Pass")
}
ELSE
{
   DISPLAY("Fail")
}</code></pre>
        <p>The same program in Python:</p>
        <pre><code>if score >= 50:
    print("Pass")
else:
    print("Fail")</code></pre>
        <p>AP pseudocode has no <code>elif</code>. For more than two choices, you put an IF inside the ELSE.
        This is called a <strong>nested</strong> conditional:</p>
        <pre><code>IF (score ≥ 90)
{
   grade ← "A"
}
ELSE
{
   IF (score ≥ 80)
   {
      grade ← "B"
   }
   ELSE
   {
      grade ← "C"
   }
}</code></pre>
        <p><strong>How to answer IF questions on the exam:</strong> write down the value of each variable,
        then go through the code line by line, like the computer. Do not guess from the shape of the code.</p>
      `
    }
  ],
  exercises: [
    {
      id: "ap03-ex1",
      title: "Follow the arrows",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>x ← 4
y ← x + 2
x ← y * 3
DISPLAY(x)</code></pre>
      `,
      choices: ["<code>4</code>", "<code>6</code>", "<code>12</code>", "<code>18</code>"],
      answer: 3,
      explain: "x starts at 4. y gets 4 + 2 = 6. Then x gets 6 * 3 = 18, so 18 is displayed.",
      hints: [
        "Go line by line. Write the value of x and y after each line.",
        "After the second line, y is 6. What is y * 3?"
      ]
    },
    {
      id: "ap03-ex2",
      title: "Swap two values",
      type: "mc",
      instructions: `
        <p>A programmer wants to swap the values of <code>a</code> and <code>b</code>.
        For example, if a is 1 and b is 2, after the code a should be 2 and b should be 1.
        Which code does this correctly?</p>
      `,
      choices: [
        "<pre><code>a ← b\nb ← a</code></pre>",
        "<pre><code>temp ← a\na ← b\nb ← temp</code></pre>",
        "<pre><code>b ← a\na ← b</code></pre>",
        "<pre><code>temp ← a\nb ← a\na ← temp</code></pre>"
      ],
      answer: 1,
      explain: "temp keeps a copy of the first value of a. Then a gets b, and b gets the saved copy. Without temp, the first value is lost.",
      hints: [
        "Try choice A with a = 1 and b = 2. What are a and b at the end?",
        "When you write <code>a ← b</code>, the old value of a is gone. You need to save it somewhere first."
      ]
    },
    {
      id: "ap03-ex3",
      title: "MOD",
      type: "mc",
      instructions: `<p>What is the value of <code>23 MOD 4</code>?</p>`,
      choices: ["<code>3</code>", "<code>5</code>", "<code>5.75</code>", "<code>0</code>"],
      answer: 0,
      explain: "4 goes into 23 five times (5 × 4 = 20). The remainder is 23 − 20 = 3.",
      hints: [
        "MOD gives the remainder, not the result of the division.",
        "How many times does 4 fit into 23? What is left over?"
      ]
    },
    {
      id: "ap03-ex4",
      title: "Even or odd",
      type: "mc",
      instructions: `<p>Which condition is <code>true</code> only when the variable <code>n</code> is an <strong>odd</strong> number?</p>`,
      choices: [
        "<code>n MOD 2 = 0</code>",
        "<code>n MOD 2 = 1</code>",
        "<code>n / 2 = 1</code>",
        "<code>n MOD 1 = 2</code>"
      ],
      answer: 1,
      explain: "An odd number has a remainder of 1 when you divide it by 2, for example 7 MOD 2 = 1.",
      hints: [
        "Try n = 7 and n = 8 in each choice.",
        "Even numbers have no remainder when you divide by 2. What remainder do odd numbers have?"
      ]
    },
    {
      id: "ap03-ex5",
      title: "Joining strings",
      type: "mc",
      instructions: `
        <p>The procedure <code>concat(str1, str2)</code> returns a string made of str1 followed by str2.
        What is displayed?</p>
        <pre><code>first ← "sun"
second ← "flower"
word ← concat(second, first)
DISPLAY(word)</code></pre>
      `,
      choices: ["<code>sunflower</code>", "<code>flowersun</code>", "<code>sun flower</code>", "<code>second first</code>"],
      answer: 1,
      explain: "concat puts str1 first. Here str1 is second (\"flower\") and str2 is first (\"sun\"), so the result is \"flowersun\".",
      hints: [
        "Read the description: which string comes first in the result, str1 or str2?",
        "In <code>concat(second, first)</code>, str1 is the variable second. What is stored in second?"
      ]
    },
    {
      id: "ap03-ex6",
      title: "AND, OR, NOT",
      type: "mc",
      instructions: `
        <p><code>a</code> is <code>true</code> and <code>b</code> is <code>false</code>.
        Which expression is <code>true</code>?</p>
      `,
      choices: [
        "<code>a AND b</code>",
        "<code>NOT a</code>",
        "<code>(NOT a) OR b</code>",
        "<code>a AND (NOT b)</code>"
      ],
      answer: 3,
      explain: "NOT b is true. a is true. true AND true is true.",
      hints: [
        "Work out the inside of the brackets first.",
        "NOT b is true, because b is false. Which choice uses AND with two true values?"
      ]
    },
    {
      id: "ap03-ex7",
      title: "Nested IF",
      type: "mc",
      instructions: `
        <p>What is displayed when <code>temp</code> is <code>15</code>?</p>
        <pre><code>IF (temp &gt; 25)
{
   DISPLAY("hot")
}
ELSE
{
   IF (temp &gt; 10)
   {
      DISPLAY("nice")
   }
   ELSE
   {
      DISPLAY("cold")
   }
}</code></pre>
      `,
      choices: ["<code>hot</code>", "<code>nice</code>", "<code>cold</code>", "<code>nice cold</code>"],
      answer: 1,
      explain: "15 > 25 is false, so the program goes to the ELSE. Inside it, 15 > 10 is true, so it displays nice. The last ELSE is skipped.",
      hints: [
        "Is 15 &gt; 25? If not, which part runs?",
        "Inside the ELSE, is 15 &gt; 10?"
      ]
    },
    {
      id: "ap03-ex8",
      title: "From pseudocode to Python",
      type: "py",
      instructions: `
        <p>Write this AP pseudocode as a Python program:</p>
        <pre><code>price ← 40
IF (price ≥ 30)
{
   price ← price - 5
}
DISPLAY(price)</code></pre>
        <p>The output should be <code>35</code>. Keep the variable name <code>price</code>.</p>
      `,
      starterCode: "# Write the pseudocode in Python\n",
      solution: "price = 40\nif price >= 30:\n    price = price - 5\nprint(price)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('price') === 35", message: "At the end, price should be 35. Remember: ← becomes = in Python." },
        { check: "R.line('35')", message: "Print the price. DISPLAY(price) becomes print(price)." },
        { check: "/if\\s+price\\s*>=\\s*30\\s*:/.test(R.code)", message: "Use an if with the same condition: price >= 30 (≥ becomes >= in Python)." }
      ],
      hints: [
        "<code>←</code> becomes <code>=</code>, and <code>≥</code> becomes <code>&gt;=</code>.",
        "The <code>{ }</code> become a colon and 4 spaces of indentation.",
        "Start with <code>price = 40</code> and then <code>if price &gt;= 30:</code>"
      ]
    }
  ]
});
