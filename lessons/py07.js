// Programming basics, chapter 7 — Boolean logic (Pre-AP CSP topic 7).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py07", {
  lessons: [
    {
      id: "py07-l1",
      title: "True or False",
      html: `
        <p>Boolean logic is one of the most important ideas in computer science.</p>
        <p>A <strong>Boolean</strong> is a value that can only be <code>True</code> or <code>False</code>.
        Every comparison gives a Boolean:</p>
        <pre><code>age = 15
print(age >= 13)</code></pre>
        <p>Output:</p>
        <pre><code>True</code></pre>
        <p>The comparison signs you know from <code>if</code> all give <code>True</code> or <code>False</code>:</p>
        <table>
          <tr><th>Sign</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
          <tr><td><code>==</code></td><td>is equal to</td><td><code>5 == 5</code></td><td><code>True</code></td></tr>
          <tr><td><code>!=</code></td><td>is not equal to</td><td><code>5 != 5</code></td><td><code>False</code></td></tr>
          <tr><td><code>&gt;</code> / <code>&lt;</code></td><td>greater / less than</td><td><code>3 &gt; 7</code></td><td><code>False</code></td></tr>
          <tr><td><code>&gt;=</code> / <code>&lt;=</code></td><td>greater / less than or equal</td><td><code>7 &lt;= 7</code></td><td><code>True</code></td></tr>
        </table>
        <p>You can store a Boolean in a variable: <code>is_teen = age >= 13</code>.</p>
      `
    },
    {
      id: "py07-l2",
      title: "and: both must be True",
      html: `
        <p>Sometimes a decision needs <strong>two</strong> conditions. With <code>and</code>, both conditions must be True:</p>
        <pre><code>age = 15
has_permission = True

if age >= 13 and has_permission:
    print("Allowed")</code></pre>
        <pre><code>Age >= 13?       True
Has permission?  True
                 ↓
                AND
                 ↓
               True</code></pre>
        <p>If even one of them is False, the result is False. This table shows every case. It is called a <strong>truth table</strong>:</p>
        <table>
          <tr><th>Input A</th><th>Input B</th><th>A and B</th></tr>
          <tr><td>False</td><td>False</td><td>False</td></tr>
          <tr><td>False</td><td>True</td><td>False</td></tr>
          <tr><td>True</td><td>False</td><td>False</td></tr>
          <tr><td>True</td><td>True</td><td><strong>True</strong></td></tr>
        </table>
        <div class="tip">Write the full condition on each side: <code>age >= 13 and age &lt;= 19</code>.
        Python does not understand <code>age >= 13 and &lt;= 19</code>.</div>
      `
    },
    {
      id: "py07-l3",
      title: "or: at least one must be True",
      html: `
        <p>With <code>or</code>, at least one condition must be True:</p>
        <pre><code>age = 15
has_parent_permission = True

if age >= 18 or has_parent_permission:
    print("Allowed")</code></pre>
        <p>Here <code>age >= 18</code> is False, but <code>has_parent_permission</code> is True. One True is enough, so the program prints <code>Allowed</code>.</p>
        <p>Truth table for <code>or</code>:</p>
        <table>
          <tr><th>Input A</th><th>Input B</th><th>A or B</th></tr>
          <tr><td>False</td><td>False</td><td><strong>False</strong></td></tr>
          <tr><td>False</td><td>True</td><td>True</td></tr>
          <tr><td>True</td><td>False</td><td>True</td></tr>
          <tr><td>True</td><td>True</td><td>True</td></tr>
        </table>
        <p>The only way to get False is when <em>both</em> are False.</p>
      `
    },
    {
      id: "py07-l4",
      title: "not: the opposite",
      html: `
        <p><code>not</code> reverses a Boolean. <code>not True</code> is <code>False</code>, and <code>not False</code> is <code>True</code>.</p>
        <pre><code>is_raining = False

if not is_raining:
    print("Go outside")</code></pre>
        <p>Output:</p>
        <pre><code>Go outside</code></pre>
        <table>
          <tr><th>Input A</th><th>not A</th></tr>
          <tr><td>False</td><td>True</td></tr>
          <tr><td>True</td><td>False</td></tr>
        </table>
        <p>The three basic Boolean operators are <code>and</code>, <code>or</code>, and <code>not</code>.
        You can combine them. Use brackets to make the order clear:</p>
        <pre><code>if (age >= 13 and age &lt;= 19) and not is_raining:
    print("A teenager on a dry day")</code></pre>
        <div class="tip">In Python the words are written in small letters: <code>and</code>, <code>or</code>, <code>not</code>.</div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP writes the operators in capital letters: <code>NOT</code>, <code>AND</code>, <code>OR</code>. The Boolean values are <code>true</code> and <code>false</code> in small letters.</p>
        <pre><code>is_raining ← false
IF ((age ≥ 13 AND age ≤ 19) AND NOT is_raining)
{
   DISPLAY("A teenager on a dry day")
}</code></pre></div>
      `
    }
  ],
  exercises: [
    {
      id: "py07-ex1",
      title: "Is it a teenager?",
      type: "py",
      instructions: `
        <p>Ask the user for their age (a whole number). If the age is from 13 to 19 (13 and 19 included),
        print <code>Teenager</code>. Otherwise print <code>Not a teenager</code>.</p>
        <p>Use <strong>one</strong> <code>if</code> with <code>and</code>.</p>
        <p>Example (the user typed <em>15</em>):</p>
        <pre><code>How old are you? 15
Teenager</code></pre>
      `,
      starterCode: "age = int(input(\"How old are you? \"))\n\n# Use one if with and\n",
      solution: "age = int(input(\"How old are you? \"))\n\nif age >= 13 and age <= 19:\n    print(\"Teenager\")\nelse:\n    print(\"Not a teenager\")\n",
      tests: [
        { inputs: ["15"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["15"], check: "R.line('Teenager')", message: "For 15, print Teenager." },
        { inputs: ["13"], check: "R.line('Teenager')", message: "For 13, print Teenager. 13 is included: use >= instead of >." },
        { inputs: ["19"], check: "R.line('Teenager')", message: "For 19, print Teenager. 19 is included: use <= instead of <." },
        { inputs: ["12"], check: "R.line('Not a teenager') && !R.line('Teenager') && /\\band\\b/.test(R.code)", message: "For 12, print only Not a teenager. Use and to join the two conditions." }
      ],
      hints: [
        "You need two conditions: the age is at least 13, and the age is at most 19.",
        "Join them with <code>and</code>. Write <code>age</code> on both sides: <code>age >= 13 and age ...</code>",
        "Write <code>if age >= 13 and age &lt;= 19:</code>, then print Teenager. Add an <code>else:</code> for the other message."
      ]
    },
    {
      id: "py07-ex2",
      title: "Weekend or holiday",
      type: "py",
      instructions: `
        <p>The program asks two questions. The user answers <code>yes</code> or <code>no</code>.
        If it is the weekend <strong>or</strong> a holiday, print <code>Sleep late!</code>.
        Otherwise print <code>Go to school</code>.</p>
        <p>The program turns each answer into a Boolean first. Finish the <code>if</code>.</p>
        <p>Example:</p>
        <pre><code>Is it the weekend? no
Is it a holiday? yes
Sleep late!</code></pre>
      `,
      starterCode: "weekend = input(\"Is it the weekend? \") == \"yes\"\nholiday = input(\"Is it a holiday? \") == \"yes\"\n\nif weekend and holiday:\n    print(\"Sleep late!\")\nelse:\n    print(\"Go to school\")\n",
      solution: "weekend = input(\"Is it the weekend? \") == \"yes\"\nholiday = input(\"Is it a holiday? \") == \"yes\"\n\nif weekend or holiday:\n    print(\"Sleep late!\")\nelse:\n    print(\"Go to school\")\n",
      tests: [
        { inputs: ["yes", "yes"], check: "!R.error && R.line('Sleep late!')", message: "Weekend yes, holiday yes: print Sleep late!" },
        { inputs: ["no", "yes"], check: "R.line('Sleep late!') && !R.line('Go to school')", message: "Weekend no, holiday yes: print Sleep late! One True is enough. Which operator needs only one True?" },
        { inputs: ["yes", "no"], check: "R.line('Sleep late!') && !R.line('Go to school')", message: "Weekend yes, holiday no: print Sleep late!" },
        { inputs: ["no", "no"], check: "R.line('Go to school') && !R.line('Sleep late!')", message: "Weekend no, holiday no: print Go to school." }
      ],
      hints: [
        "Run the program and answer <em>no</em>, then <em>yes</em>. What does it print?",
        "<code>and</code> needs both to be True. Here, one True should be enough.",
        "Change only one word in the <code>if</code> line. Look at the truth table for <code>or</code>."
      ]
    },
    {
      id: "py07-ex3",
      title: "Go outside?",
      type: "py",
      instructions: `
        <p>Ask the user if it is raining (<code>yes</code> or <code>no</code>).
        Store the answer as a Boolean in <code>is_raining</code>, like the program in the last exercise.</p>
        <p>Then use <code>not</code>: if it is <strong>not</strong> raining, print <code>Go outside</code>.
        Otherwise print <code>Stay inside</code>.</p>
        <p>Example:</p>
        <pre><code>Is it raining? no
Go outside</code></pre>
      `,
      starterCode: "is_raining = input(\"Is it raining? \")\n\n# Use not in your if\n",
      solution: "is_raining = input(\"Is it raining? \") == \"yes\"\n\nif not is_raining:\n    print(\"Go outside\")\nelse:\n    print(\"Stay inside\")\n",
      tests: [
        { inputs: ["no"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["no"], check: "R.get('is_raining') === false", message: "When the user types no, is_raining should be False. Write == \"yes\" after input(...)." },
        { inputs: ["yes"], check: "R.get('is_raining') === true", message: "When the user types yes, is_raining should be True." },
        { inputs: ["no"], check: "R.line('Go outside') && !R.line('Stay inside')", message: "When it is not raining, print Go outside." },
        { inputs: ["yes"], check: "R.line('Stay inside') && !R.line('Go outside') && /\\bnot\\b/.test(R.code)", message: "When it is raining, print Stay inside. Use not in your if." }
      ],
      hints: [
        "<code>input(...) == \"yes\"</code> gives True when the user typed yes, and False otherwise.",
        "<code>not is_raining</code> is True when <code>is_raining</code> is False.",
        "Write <code>if not is_raining:</code>, print Go outside, and add an <code>else:</code>."
      ]
    },
    {
      id: "py07-ex4",
      title: "Truth table detective",
      type: "py",
      instructions: `
        <p>Think first, then check with Python! Replace each <code>None</code> with <code>True</code> or <code>False</code>,
        to say what the expression gives:</p>
        <pre><code>a = True
b = False</code></pre>
        <ul>
          <li><code>answer1</code> = the value of <code>a and b</code></li>
          <li><code>answer2</code> = the value of <code>a or b</code></li>
          <li><code>answer3</code> = the value of <code>not b</code></li>
          <li><code>answer4</code> = the value of <code>not (a and b)</code></li>
        </ul>
        <p>Type the words <code>True</code> or <code>False</code> yourself, without copying the expression.
        Use the truth tables from the lessons.</p>
      `,
      starterCode: "a = True\nb = False\n\nanswer1 = None   # a and b\nanswer2 = None   # a or b\nanswer3 = None   # not b\nanswer4 = None   # not (a and b)\n\nprint(answer1, answer2, answer3, answer4)\n",
      solution: "a = True\nb = False\n\nanswer1 = False   # a and b\nanswer2 = True    # a or b\nanswer3 = True    # not b\nanswer4 = True    # not (a and b)\n\nprint(answer1, answer2, answer3, answer4)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('answer1') === false", message: "answer1 is not right. With and, both must be True. Is b True?" },
        { check: "R.get('answer2') === true", message: "answer2 is not right. With or, one True is enough." },
        { check: "R.get('answer3') === true", message: "answer3 is not right. not reverses the value of b." },
        { check: "R.get('answer4') === true", message: "answer4 is not right. First find a and b (it is answer1), then reverse it with not." }
      ],
      hints: [
        "<code>True</code> and <code>False</code> start with a capital letter and have no quotes.",
        "Find the row in the truth table where A is True and B is False.",
        "For <code>answer4</code>, do the part in brackets first. You already found it in <code>answer1</code>."
      ]
    },
    {
      id: "py07-ex5",
      title: "Mini challenge: movie ticket",
      type: "py",
      instructions: `
        <p>A movie is allowed if the person is <strong>at least 16</strong>, <strong>or</strong> if they come with a parent.
        But nobody can go if they have <strong>no ticket</strong>.</p>
        <p>Ask three questions. Print <code>Enjoy the movie!</code> or <code>Sorry, you cannot go in</code>.</p>
        <p>Example:</p>
        <pre><code>How old are you? 14
Do you have a parent with you? yes
Do you have a ticket? yes
Enjoy the movie!</code></pre>
      `,
      starterCode: "age = int(input(\"How old are you? \"))\nwith_parent = input(\"Do you have a parent with you? \") == \"yes\"\nhas_ticket = input(\"Do you have a ticket? \") == \"yes\"\n\n# Write one if that uses and, or\n",
      solution: "age = int(input(\"How old are you? \"))\nwith_parent = input(\"Do you have a parent with you? \") == \"yes\"\nhas_ticket = input(\"Do you have a ticket? \") == \"yes\"\n\nif (age >= 16 or with_parent) and has_ticket:\n    print(\"Enjoy the movie!\")\nelse:\n    print(\"Sorry, you cannot go in\")\n",
      tests: [
        { inputs: ["14", "yes", "yes"], check: "!R.error && R.line('Enjoy the movie!')", message: "Age 14 with a parent and a ticket: print Enjoy the movie!" },
        { inputs: ["16", "no", "yes"], check: "R.line('Enjoy the movie!') && !R.has('Sorry')", message: "Age 16 without a parent but with a ticket: print Enjoy the movie! (16 is included.)" },
        { inputs: ["14", "no", "yes"], check: "R.has('Sorry, you cannot go in') && !R.has('Enjoy')", message: "Age 14 without a parent: print Sorry, you cannot go in." },
        { inputs: ["20", "yes", "no"], check: "R.has('Sorry, you cannot go in') && !R.has('Enjoy')", message: "Without a ticket nobody can go in, even at age 20. Use and has_ticket." }
      ],
      hints: [
        "There are two parts: (old enough <em>or</em> with a parent), <em>and</em> has a ticket.",
        "Put brackets around the <code>or</code> part, so Python checks it first.",
        "The condition starts like this: <code>if (age >= 16 or with_parent) and ...</code>"
      ]
    }
  ]
});
