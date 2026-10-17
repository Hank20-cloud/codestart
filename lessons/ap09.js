// AP CSP, chapter 9 — exam practice: how the multiple-choice exam works, and mixed AP-style questions
// from all five Big Ideas. Pseudocode follows the AP Exam Reference Sheet.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap09", {
  intro: `
    <p>This chapter is practice for the AP exam. First read how the exam works. Then answer 15 questions
    in the style of the real exam. They mix all five Big Ideas.</p>
    <p>Take your time. Use scratch paper to trace the code.</p>
  `,
  lessons: [
    {
      id: "ap09-l1",
      title: "How the AP exam works",
      html: `
        <div class="tip"><strong>Important:</strong> the College Board can change the exam each year.
        Always check the newest information on <strong>AP Central</strong> and the <em>Course and Exam Description</em> (CED),
        and ask your teacher.</div>
        <p>Your AP CSP score has two parts: the <strong>Create performance task</strong> (your own program and the written answers
        about it) and the <strong>multiple-choice exam</strong>. In recent years, the multiple-choice part was about 70% of the score.</p>
        <h3>The multiple-choice part</h3>
        <ul>
          <li><strong>70 questions in 120 minutes</strong> (2 hours). That is less than 2 minutes for each question.</li>
          <li>Most questions are <strong>single-select</strong>: you choose one answer from four.</li>
          <li>Some questions are <strong>select-two</strong>: you must choose exactly two answers. Both must be right to get the point.</li>
          <li>A few questions are based on a <strong>reading passage</strong> about a computing innovation, for example a new app.
          You read the text and answer questions about its data, its effects, and its risks.</li>
        </ul>
        <p>You get the <strong>Exam Reference Sheet</strong> during the exam. It shows all the AP pseudocode
        (←, DISPLAY, IF, REPEAT, lists, PROCEDURE, the robot commands, and more). You do not need to remember the exact
        words, but you must know how to <em>read</em> them quickly. Practice with the reference sheet before the exam.</p>
        <h3>Tips</h3>
        <ul>
          <li><strong>Trace code step by step.</strong> The exam is taken on a computer, but you usually get scratch paper. Ask your teacher what is allowed in your exam room. Write the value of every variable after each line. Do not guess from the shape of the code.</li>
          <li><strong>Remember:</strong> lists in AP pseudocode start at index <strong>1</strong>, not 0.</li>
          <li><strong>Eliminate wrong choices.</strong> Cross out the choices you know are wrong. Then choose from the rest.</li>
          <li><strong>Answer every question.</strong> There is no penalty for a wrong answer, so guessing is better than leaving a question empty.</li>
          <li><strong>Watch the time.</strong> If a question takes too long, choose your best guess, mark it, and come back later.</li>
          <li>For select-two questions, check each choice on its own: is this statement true or false?</li>
        </ul>
      `
    }
  ],
  exercises: [
    {
      id: "ap09-ex1",
      title: "Sum with a condition",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>nums ← [4, 1, 6, 3]
sum ← 0
FOR EACH n IN nums
{
   IF (n &gt; 2)
   {
      sum ← sum + n
   }
}
DISPLAY(sum)</code></pre>
      `,
      choices: ["<code>14</code>", "<code>3</code>", "<code>13</code>", "<code>10</code>"],
      answer: 2,
      explain: "Only the numbers greater than 2 are added: 4 + 6 + 3 = 13. The 1 is skipped.",
      hints: [
        "Go through the list one item at a time. Is each item greater than 2?",
        "Is 3 &gt; 2? Is 1 &gt; 2?"
      ]
    },
    {
      id: "ap09-ex2",
      title: "REPEAT UNTIL",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>x ← 1
count ← 0
REPEAT UNTIL (x &gt; 20)
{
   x ← x * 3
   count ← count + 1
}
DISPLAY(count)</code></pre>
      `,
      choices: ["<code>3</code>", "<code>2</code>", "<code>4</code>", "<code>27</code>"],
      answer: 0,
      explain: "x becomes 3, then 9, then 27. After the third time, x > 20 is true and the loop stops. count is 3.",
      hints: [
        "The condition is checked before each repetition. The loop stops when x &gt; 20 is true.",
        "Write x and count after each repetition: 3 and 1, then 9 and 2, then…"
      ]
    },
    {
      id: "ap09-ex3",
      title: "List operations",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>letters ← ["a", "b", "c"]
APPEND(letters, "d")
INSERT(letters, 2, "x")
REMOVE(letters, 4)
DISPLAY(letters)</code></pre>
      `,
      choices: [
        "<code>[\"a\", \"b\", \"x\", \"d\"]</code>",
        "<code>[\"a\", \"x\", \"b\", \"c\"]</code>",
        "<code>[\"x\", \"a\", \"b\", \"d\"]</code>",
        "<code>[\"a\", \"x\", \"b\", \"d\"]</code>"
      ],
      answer: 3,
      explain: "After APPEND: a, b, c, d. INSERT at index 2: a, x, b, c, d. REMOVE index 4 removes c: a, x, b, d.",
      hints: [
        "Write the list after each line. Remember that the first index is 1.",
        "After the INSERT the list is a, x, b, c, d. Which item is at index 4?"
      ]
    },
    {
      id: "ap09-ex4",
      title: "A procedure with RETURN",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>PROCEDURE mystery(a, b)
{
   IF (a &gt; b)
   {
      RETURN(a - b)
   }
   RETURN(b - a)
}

DISPLAY(mystery(3, 10))</code></pre>
      `,
      choices: ["<code>-7</code>", "<code>7</code>", "<code>13</code>", "<code>3</code>"],
      answer: 1,
      explain: "a is 3 and b is 10. 3 > 10 is false, so the first RETURN is skipped and the procedure returns 10 − 3 = 7.",
      hints: [
        "In the call, a gets 3 and b gets 10.",
        "Is 3 &gt; 10? If not, which RETURN runs?"
      ]
    },
    {
      id: "ap09-ex5",
      title: "Find the bug",
      type: "mc",
      instructions: `
        <p>This procedure should return the <strong>largest</strong> number in a list.</p>
        <pre><code>PROCEDURE findMax(numList)
{
   max ← 0
   FOR EACH num IN numList
   {
      IF (num &gt; max)
      {
         max ← num
      }
   }
   RETURN(max)
}</code></pre>
        <p>For which list does the procedure <strong>not</strong> return the correct answer?</p>
      `,
      choices: [
        "<code>[3, 9, 2]</code>",
        "<code>[0, 5, 1]</code>",
        "<code>[8, 8, 8]</code>",
        "<code>[-4, -1, -7]</code>"
      ],
      answer: 3,
      explain: "max starts at 0. No number in [-4, -1, -7] is greater than 0, so the procedure returns 0, but the right answer is −1. Setting max ← numList[1] would fix it.",
      hints: [
        "Trace each list. Start with max = 0.",
        "What happens when every number in the list is smaller than 0?"
      ]
    },
    {
      id: "ap09-ex6",
      title: "Binary to decimal",
      type: "mc",
      instructions: `<p>What is the binary number <code>101101</code> in decimal (base 10)?</p>`,
      choices: ["<code>44</code>", "<code>45</code>", "<code>54</code>", "<code>101</code>"],
      answer: 1,
      explain: "The place values from the right are 1, 2, 4, 8, 16, 32. The 1 bits are at 32, 8, 4, and 1: 32 + 8 + 4 + 1 = 45.",
      hints: [
        "Write the place values above the bits, from the right: 1, 2, 4, 8, 16, 32.",
        "Add the place values where there is a 1."
      ]
    },
    {
      id: "ap09-ex7",
      title: "Robot on a grid",
      type: "mc",
      instructions: `
        <p>The robot is in the bottom-left square and faces <strong>up</strong> (▲). It cannot leave the grid.</p>
        <pre><code>+---+---+---+---+
| D |   |   |   |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+
|   | A | B |   |
+---+---+---+---+
| ▲ | C |   |   |
+---+---+---+---+</code></pre>
        <p>The robot runs this code. Where does it stop?</p>
        <pre><code>REPEAT 2 TIMES
{
   MOVE_FORWARD()
   ROTATE_RIGHT()
}
MOVE_FORWARD()</code></pre>
      `,
      choices: ["The square marked A", "The square marked B", "The square marked C", "The square marked D"],
      answer: 2,
      explain: "First time: up one square, then turn to face right. Second time: right one square (A), then turn to face down. Last line: down one square, to C.",
      hints: [
        "ROTATE_RIGHT turns the robot 90 degrees to its right. It does not move it.",
        "After the loop, the robot is on A. Which way does it face after two right turns?"
      ]
    },
    {
      id: "ap09-ex8",
      title: "Random numbers",
      type: "mc",
      instructions: `<p>A game must simulate rolling a normal die with the numbers 1 to 6. Each number must be equally likely.
      Which code does this?</p>`,
      choices: [
        "<code>roll ← RANDOM(1, 6)</code>",
        "<code>roll ← RANDOM(0, 6)</code>",
        "<code>roll ← RANDOM(1, 7)</code>",
        "<code>roll ← RANDOM(0, 5)</code>"
      ],
      answer: 0,
      explain: "RANDOM(a, b) gives a random whole number from a to b, and both a and b are included. So RANDOM(1, 6) gives 1, 2, 3, 4, 5, or 6.",
      hints: [
        "In AP pseudocode, RANDOM(a, b) includes both a and b.",
        "Which choice can give 6 but never 0 or 7?"
      ]
    },
    {
      id: "ap09-ex9",
      title: "Binary search",
      type: "mc",
      instructions: `<p>Which must be true about a list before you can use <strong>binary search</strong> on it?</p>`,
      choices: [
        "The list must have fewer than 100 items.",
        "The list must contain only numbers.",
        "The list must be sorted.",
        "The list must not contain the same value twice."
      ],
      answer: 2,
      explain: "Binary search looks at the middle item and throws away half of the list. This only works when the list is sorted.",
      hints: [
        "Binary search checks the middle item and then keeps only one half.",
        "How does it know which half to keep?"
      ]
    },
    {
      id: "ap09-ex10",
      title: "Compression",
      type: "mc",
      instructions: `<p>A hospital compresses medical scans before it stores them. Doctors must be able to get back the
      <strong>exact</strong> original image. Which kind of compression should the hospital use?</p>`,
      choices: [
        "Lossy compression, because it makes the smallest files",
        "Lossless compression, because the original can be restored exactly",
        "Lossy compression, because it keeps all the data",
        "No kind of compression can be used for images"
      ],
      answer: 1,
      explain: "Lossless compression lets you rebuild the original data exactly. Lossy compression throws some data away for smaller files.",
      hints: [
        "One kind of compression throws some data away forever.",
        "\"Exact original\" is the key words. Which kind loses nothing?"
      ]
    },
    {
      id: "ap09-ex11",
      title: "Internet facts",
      type: "mc",
      instructions: `<p>Which <strong>two</strong> statements about the Internet are true?</p>`,
      choices: [
        "IPv6 gives far more possible addresses than IPv4.",
        "The packets of a message always arrive in the same order they were sent.",
        "The Internet and the World Wide Web are the same thing.",
        "Open protocols let devices from different companies communicate."
      ],
      answer: [0, 3],
      explain: "IPv6 uses 128 bits for an address and IPv4 uses 32, so IPv6 has many more addresses. Open protocols are free for anyone, so all devices can follow the same rules.",
      hints: [
        "Check each statement on its own: true or false?",
        "Packets can take different paths. And the Web is something that runs on the Internet."
      ]
    },
    {
      id: "ap09-ex12",
      title: "One broken connection",
      type: "mc",
      instructions: `
        <p>In this network, each letter is a device and each line is a connection.</p>
        <pre><code>A ----- B ----- C
|       |
|       |
D ----- E ----- F</code></pre>
        <p>If <strong>one</strong> connection fails, which failure stops F from communicating with A?</p>
      `,
      choices: ["A–B", "B–E", "D–E", "E–F"],
      answer: 3,
      explain: "F has only one connection, E–F. If it fails, F is cut off from every device. If any other single connection fails, there is still a path from A to F.",
      hints: [
        "Count the connections of F.",
        "A device with only one connection is a single point of failure."
      ]
    },
    {
      id: "ap09-ex13",
      title: "Parallel computing",
      type: "mc",
      instructions: `
        <p>A program has a first step that takes <strong>10 seconds</strong> and must finish before anything else starts.
        After it, three tasks can run in parallel. They take <strong>20, 30, and 40 seconds</strong>.
        The computer has <strong>3 processors</strong>. What is the shortest time for the whole program?</p>
      `,
      choices: ["40 seconds", "50 seconds", "90 seconds", "100 seconds"],
      answer: 1,
      explain: "The first step takes 10 seconds. Then the three tasks run at the same time, and the slowest takes 40 seconds. 10 + 40 = 50 seconds.",
      hints: [
        "The first step runs alone. Then each processor gets one task.",
        "The parallel part takes as long as its slowest task. Add the first step."
      ]
    },
    {
      id: "ap09-ex14",
      title: "Personal information",
      type: "mc",
      instructions: `<p>Which <strong>two</strong> are examples of PII (personally identifiable information)?</p>`,
      choices: [
        "A person's favorite kind of music",
        "A person's home address",
        "The number of students in a school",
        "A person's mobile phone number"
      ],
      answer: [1, 3],
      explain: "PII is information that can show who a person is or how to find them. A home address and a phone number belong to one person.",
      hints: [
        "PII can be used to find out <em>who</em> a person is.",
        "Many people like the same music. Which choices belong to only one person?"
      ]
    },
    {
      id: "ap09-ex15",
      title: "A city app",
      type: "mc",
      instructions: `
        <p><em>Read the text, then answer.</em></p>
        <p>A city makes a free app. When a person sees a hole in the road, they take a photo with the app.
        The app sends the photo, the GPS location, and the time to the city. Workers use the data to repair the roads faster.</p>
        <p>Which is a possible <strong>privacy</strong> risk of this app?</p>
      `,
      choices: [
        "The roads may be repaired faster than before.",
        "The city may get too many photos of the same hole.",
        "The location and time data could show where a user lives and when they are away from home.",
        "People without a smartphone cannot report holes in the road."
      ],
      answer: 2,
      explain: "GPS location and time are personal data. Many reports from the same person can show their home and daily routine. Choice D is a real problem too, but it is the digital divide, not privacy.",
      hints: [
        "Privacy is about personal data that could be used against the user.",
        "Which data does the app send that tells where a person is?"
      ]
    }
  ]
});
