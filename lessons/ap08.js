// AP CSP, chapter 8 — the Create performance task: what to submit, the required program parts,
// how a list manages complexity, and how to write about your own code.
// Rules come from the AP CSP Course and Exam Description and can change each year.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap08", {
  intro: `
    <p>Part of your AP score comes from a program that <strong>you</strong> build. This is called the
    <strong>Create performance task</strong>. You choose the idea and the programming language.</p>
    <p>This chapter explains what you must build, what you must submit, and how to answer the written questions about your code.</p>
    <div class="tip"><strong>Important:</strong> the College Board can change the rules each year.
    Always read the newest <em>Course and Exam Description</em> (CED) and the Create task guidelines on
    <strong>AP Central</strong>, and ask your teacher. If this page and the College Board say different things,
    follow the College Board.</div>
  `,
  lessons: [
    {
      id: "ap08-l1",
      title: "What you submit",
      html: `
        <p>Your teacher gives you class time (at least 9 hours) to build your program. You may work alone, or build the program
        together with a partner. But your video, your Personalized Project Reference, and your written answers must be your own work.
        You submit three things in the <strong>AP Digital Portfolio</strong> (the College Board website for the task):</p>
        <ol>
          <li><strong>Your program code</strong>, as a file (for example a PDF of the code).
          If you use code from someone else or from an AI tool, you must say clearly which part and where it comes from.</li>
          <li><strong>A short video</strong> of your program running. It must show:
            <ul>
              <li><strong>input</strong> to the program (for example the user types an answer or clicks),</li>
              <li>at least one part of the program's <strong>functionality</strong> (what it does),</li>
              <li><strong>output</strong> that the program makes.</li>
            </ul>
          The video is short (up to 1 minute), and it must not show your name or your voice. You may use text captions.</li>
          <li><strong>A Personalized Project Reference (PPR)</strong>: screenshots of parts of your own code.
            <ul>
              <li>your <strong>procedure</strong>: where it is defined, and where it is called,</li>
              <li>your <strong>list</strong>: where data is stored in it, and where the data in the list is used.</li>
            </ul>
          The PPR must not have comments in the code.</li>
        </ol>
        <h3>Then, in the exam</h3>
        <p>On the day of the AP exam, you get your PPR printed. You answer <strong>written-response questions</strong>
        about your own code. You cannot see your full program then, only the PPR. So you must know your code very well.</p>
        <div class="tip">Make sure your video and PPR are submitted before the deadline your teacher gives you.
        Without them, you cannot get points for the task.</div>
      `
    },
    {
      id: "ap08-l2",
      title: "The required parts of the program",
      html: `
        <p>You can use any language: Python, JavaScript, a block language, and others. But your program must have all these parts:</p>
        <table>
          <tr><th>Part</th><th>What it means</th></tr>
          <tr><td><strong>Input</strong></td><td>data that comes from the user, a device, an online data stream, or a file</td></tr>
          <tr><td><strong>A list</strong> (or another collection)</td><td>stores many values, and you <em>use</em> it to manage complexity (see the next lesson)</td></tr>
          <tr><td><strong>A procedure you wrote</strong></td><td>has a name, at least one <strong>parameter</strong> that changes what it does, and uses:
            <ul>
              <li><strong>sequencing</strong> (steps in order),</li>
              <li><strong>selection</strong> (an IF),</li>
              <li><strong>iteration</strong> (a loop).</li>
            </ul></td></tr>
          <tr><td><strong>Calls to the procedure</strong></td><td>your program uses (calls) your procedure</td></tr>
          <tr><td><strong>Output</strong></td><td>something the program gives back: visual (on the screen), audible (sound), tactile (something you can feel, like a vibration), or text. It is based on the input and the work of the program</td></tr>
        </table>
        <h3>A full small example (Python)</h3>
        <p>A quiz program. The user answers 3 questions. Then the program counts the right answers.</p>
        <pre><code>questions = ["2 + 3", "10 - 4", "3 * 3"]
correct = ["5", "6", "9"]
answers = []

# input: the user answers each question
for q in questions:
    answers.append(input("What is " + q + "? "))

# the student-developed procedure
def count_correct(user_answers, key):
    score = 0
    for i in range(len(key)):
        if user_answers[i] == key[i]:
            score = score + 1
    return score

# call the procedure, then output
score = count_correct(answers, correct)
print("You got", score, "out of", len(questions))
if score == len(questions):
    print("Perfect!")</code></pre>
        <p>Where are the required parts?</p>
        <ul>
          <li><strong>Input:</strong> <code>input(...)</code> gets the user's answers.</li>
          <li><strong>List:</strong> <code>questions</code>, <code>correct</code>, and <code>answers</code> store the data.</li>
          <li><strong>Procedure:</strong> <code>count_correct</code> with the parameters <code>user_answers</code> and <code>key</code>.
          It has sequencing (set score, loop, return), selection (<code>if</code>), and iteration (<code>for</code>).</li>
          <li><strong>Call:</strong> <code>count_correct(answers, correct)</code>.</li>
          <li><strong>Output:</strong> <code>print(...)</code> shows the score.</li>
        </ul>
        <div class="tip">Do not stop at the minimum. Your answers in the exam are easier when your procedure does
        something real and the parameter really changes the result.</div>
      `
    },
    {
      id: "ap08-l3",
      title: "How a list manages complexity",
      html: `
        <p>The task asks you to explain how your list <strong>manages complexity</strong>. This means: how the list makes your
        program simpler to write, read, and change.</p>
        <p>Look at the quiz again. <strong>Without a list</strong>, you need one variable for every question and every answer:</p>
        <pre><code>q1 = "2 + 3"
q2 = "10 - 4"
q3 = "3 * 3"
a1 = input("What is " + q1 + "? ")
a2 = input("What is " + q2 + "? ")
a3 = input("What is " + q3 + "? ")
score = 0
if a1 == "5":
    score = score + 1
if a2 == "6":
    score = score + 1
if a3 == "9":
    score = score + 1</code></pre>
        <p>With 3 questions this is long. With 50 questions you need 100 variables and 50 IFs.</p>
        <p><strong>With a list</strong>, all the questions are in one variable, and one loop works for any number of questions.
        To add a question, you add one item to the list. You change nothing else.</p>
        <div class="tip"><strong>A good answer names your own list</strong> and says what would be different without it, for example:
        "The list <code>questions</code> stores all the quiz questions. Without it, I would need a separate variable for each
        question and a separate IF to check each answer. With the list, one loop checks all answers, and I can add a question
        by adding one item."</div>
      `
    },
    {
      id: "ap08-l4",
      title: "Writing about your code",
      html: `
        <p>The written-response questions ask about the code in your PPR. Here are the common kinds of questions
        and how to answer them. Always talk about <strong>your own</strong> code, with the real names you used.</p>
        <h3>1. What does your procedure do?</h3>
        <p>Say what the procedure does, what the parameter is for, and how it helps the whole program.
        Then describe the algorithm step by step, so another person could write it again.</p>
        <p><em>Example:</em> "count_correct gets the user's answers and the right answers as parameters. It sets score to 0.
        Then it goes through each position in the list. If the user's answer is the same as the right answer, it adds 1 to score.
        At the end it returns score. The program uses it to show the result."</p>
        <h3>2. Two calls with different arguments</h3>
        <p>An <strong>argument</strong> is the value you give to a parameter when you call the procedure. Describe two calls
        that make <strong>different code</strong> run, and say what the result is each time.</p>
        <p><em>Example:</em> "First call: <code>count_correct(["5", "6", "9"], correct)</code>. Every IF condition is true,
        so <code>score = score + 1</code> runs 3 times, and it returns 3. Second call: <code>count_correct(["1", "1", "1"], correct)</code>.
        Every IF condition is false, so the line that adds 1 never runs, and it returns 0."</p>
        <h3>3. Possible errors and testing</h3>
        <p>You may be asked what could go wrong, and how you would fix it. Be specific.</p>
        <p><em>Example:</em> "If the user types <code>" 5"</code> with a space, the answer is counted as wrong. To fix it,
        I would remove the spaces from the answer before comparing, with <code>.strip()</code>."</p>
        <p>Another example: "If <code>user_answers</code> has fewer items than <code>key</code>, the program would use an index
        that does not exist and crash. I would check the lengths first with an IF."</p>
        <div class="tip"><strong>Practice now:</strong> for your own program, write these three answers before the exam.
        Use the real names of your procedure, parameter, and list.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ap08-ex1",
      title: "What the video shows",
      type: "mc",
      instructions: `<p>Which list describes what the Create task video must show?</p>`,
      choices: [
        "The student explaining the code with their voice",
        "Input to the program, some of its functionality, and output",
        "Only the code of the procedure",
        "The student's name and school, then the program"
      ],
      answer: 1,
      explain: "The video shows the program running: input, at least one feature, and output. It must not show your name or your voice.",
      hints: [
        "The video shows the program <em>running</em>, not the code.",
        "Think of three words: what goes in, what it does, what comes out."
      ]
    },
    {
      id: "ap08-ex2",
      title: "Does this procedure count?",
      type: "mc",
      instructions: `
        <p>A student wrote this procedure for the Create task:</p>
        <pre><code>def show_menu():
    print("1. Play")
    print("2. Quit")</code></pre>
        <p>Why is this procedure <strong>not enough</strong> for the requirements?</p>
      `,
      choices: [
        "It uses print instead of DISPLAY.",
        "Its name has an underscore.",
        "It has no parameter, no selection (IF), and no iteration (loop).",
        "It has too few lines. A procedure needs at least 10 lines."
      ],
      answer: 2,
      explain: "The required procedure needs a parameter that changes what it does, and it must use sequencing, selection, and iteration. This one only has sequencing.",
      hints: [
        "Look at the list of things the procedure must have.",
        "Is there anything between the brackets after <code>show_menu</code>? Is there an if or a loop?"
      ]
    },
    {
      id: "ap08-ex3",
      title: "Managing complexity",
      type: "mc",
      instructions: `<p>A program stores the names of 30 students in a list called <code>names</code> and prints them with one loop.
      Which sentence best explains how the list manages complexity?</p>`,
      choices: [
        "The list makes the program run faster than any other program.",
        "The list keeps the names secret from other users.",
        "The list is needed because Python cannot store text in a normal variable.",
        "Without the list, the program would need 30 separate variables and 30 print lines. With it, one loop handles any number of names."
      ],
      answer: 3,
      explain: "A list keeps many values in one variable, so the same code (one loop) works for all of them. Adding a name only means adding one item.",
      hints: [
        "Imagine the program without the list. How many variables would it need?",
        "Managing complexity means making the code simpler to write and to change."
      ]
    },
    {
      id: "ap08-ex4",
      title: "Two different calls",
      type: "mc",
      instructions: `
        <p>Look at this procedure:</p>
        <pre><code>def check_age(age):
    if age &gt;= 18:
        return "adult"
    else:
        return "child"</code></pre>
        <p>A written question asks for <strong>two calls that cause different code to run</strong>. Which pair is the best answer?</p>
      `,
      choices: [
        "<code>check_age(20)</code> and <code>check_age(30)</code>",
        "<code>check_age(10)</code> and <code>check_age(5)</code>",
        "<code>check_age(25)</code> and <code>check_age(12)</code>",
        "<code>check_age(18)</code> and <code>check_age(19)</code>"
      ],
      answer: 2,
      explain: "With 25, the condition is true and the first return runs. With 12, the condition is false and the else part runs. The other pairs run the same code twice.",
      hints: [
        "For each call, is <code>age &gt;= 18</code> true or false?",
        "You need one call where the condition is true and one where it is false."
      ]
    },
    {
      id: "ap08-ex5",
      title: "Write a procedure with a list",
      type: "py",
      instructions: `
        <p>Write a procedure <code>count_passing(scores, minimum)</code>. It gets a list of scores and a number.
        It returns <strong>how many</strong> scores are greater than or equal to <code>minimum</code>.</p>
        <p>It must use a loop over the list and an <code>if</code>. For example:</p>
        <ul>
          <li><code>count_passing([40, 75, 90, 50], 50)</code> returns <code>3</code></li>
          <li><code>count_passing([40, 75, 90, 50], 80)</code> returns <code>1</code></li>
        </ul>
        <p>See how the parameter <code>minimum</code> changes the result. This is what the Create task asks for.</p>
      `,
      starterCode: "def count_passing(scores, minimum):\n    count = 0\n    # loop over scores and use an if here\n    return count\n",
      solution: "def count_passing(scores, minimum):\n    count = 0\n    for s in scores:\n        if s >= minimum:\n            count = count + 1\n    return count\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.call('count_passing', [40, 75, 90, 50], 50) === 3", message: "count_passing([40, 75, 90, 50], 50) should return 3. Remember: 50 >= 50 is true." },
        { check: "R.call('count_passing', [40, 75, 90, 50], 80) === 1 && R.call('count_passing', [], 10) === 0", message: "count_passing([40, 75, 90, 50], 80) should return 1, and an empty list should give 0." },
        { check: "/\\bfor\\b/.test(R.code) && /\\bif\\b/.test(R.code)", message: "Use a for loop over the list and an if inside it." }
      ],
      hints: [
        "Use <code>for s in scores:</code> to look at each score.",
        "Inside the loop: <code>if s &gt;= minimum:</code> then add 1 to count.",
        "Keep <code>return count</code> after the loop, not inside it."
      ]
    },
    {
      id: "ap08-ex6",
      title: "A small complete program",
      type: "py",
      instructions: `
        <p>Write a small program with all the parts of a procedure for the Create task:</p>
        <ol>
          <li>Make a list <code>prices = [3, 12, 7, 20]</code>.</li>
          <li>Write a procedure <code>total_over(price_list, limit)</code>. It returns the <strong>sum</strong> of the prices
          that are greater than <code>limit</code>. Use a loop and an <code>if</code>.</li>
          <li>Call it with <code>prices</code> and <code>10</code>, and print the result. The output should be <code>32</code> (12 + 20).</li>
        </ol>
      `,
      starterCode: "prices = [3, 12, 7, 20]\n\ndef total_over(price_list, limit):\n    total = 0\n    # add the prices that are greater than limit\n    return total\n\n# call total_over and print the result\n",
      solution: "prices = [3, 12, 7, 20]\n\ndef total_over(price_list, limit):\n    total = 0\n    for p in price_list:\n        if p > limit:\n            total = total + p\n    return total\n\nprint(total_over(prices, 10))\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.call('total_over', [5, 20, 15], 10) === 35", message: "total_over([5, 20, 15], 10) should return 35 (20 + 15)." },
        { check: "R.call('total_over', [5, 20, 15], 15) === 20 && R.call('total_over', [1, 2], 5) === 0", message: "Only prices greater than limit are added: total_over([5, 20, 15], 15) should return 20. Use > and not >=." },
        { check: "R.line('32')", message: "Call total_over(prices, 10) and print the result. It should print 32." }
      ],
      hints: [
        "Loop with <code>for p in price_list:</code> and check <code>if p &gt; limit:</code>.",
        "Inside the if, write <code>total = total + p</code>.",
        "At the end of the program: <code>print(total_over(prices, 10))</code>"
      ]
    }
  ]
});
