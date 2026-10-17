// AP CSP, chapter 10 — practice test: 30 mixed AP-style questions from all five Big Ideas.
// Pseudocode follows the AP Exam Reference Sheet.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap10", {
  intro: `
    <p>This chapter is a <strong>practice test</strong> with 30 questions. The questions come from all five Big Ideas.</p>
    <p>Take it like a real test:</p>
    <ul>
      <li>Do the questions in order.</li>
      <li>Use scratch paper to trace the code.</li>
      <li>Try each question <strong>without hints</strong> first.</li>
      <li>When you finish, read the explanation of every question.</li>
    </ul>
    <p>The real multiple-choice exam has <strong>70 questions in 120 minutes</strong>. So 30 questions take about
    <strong>50 minutes</strong>. Set a timer if you want to practice the speed. (The rules can change.
    Always check the newest information from the College Board.)</p>
  `,
  lessons: [
    {
      id: "ap10-l1",
      title: "Before you start",
      html: `
        <h3>Tips for the test</h3>
        <ul>
          <li><strong>Trace code step by step.</strong> Write the value of each variable after each line. Do not guess from the shape of the code.</li>
          <li><strong>Remember:</strong> lists in AP pseudocode start at index <strong>1</strong>.</li>
          <li><strong>Eliminate wrong choices.</strong> Cross out the choices you know are wrong. Then choose from the rest.</li>
          <li><strong>Select-two questions:</strong> pick <strong>exactly two</strong> answers. Check each choice on its own: true or false?</li>
          <li><strong>Answer every question.</strong> There is no penalty for a wrong answer, so a guess is better than nothing.</li>
          <li><strong>After the test,</strong> review the explanation of every question, also the ones you got right.</li>
        </ul>
        <h3>Where to review</h3>
        <p>For each question you got wrong, go back to the chapter that covers its Big Idea:</p>
        <table>
          <tr><th>Big Idea</th><th>Chapter</th></tr>
          <tr><td>Big Idea 1: Creative Development</td><td>Chapter 1</td></tr>
          <tr><td>Big Idea 2: Data</td><td>Chapter 2</td></tr>
          <tr><td>Big Idea 3: Algorithms and Programming</td><td>Chapters 3, 4, and 5</td></tr>
          <tr><td>Big Idea 4: Computer Systems and Networks</td><td>Chapter 6</td></tr>
          <tr><td>Big Idea 5: Impact of Computing</td><td>Chapter 7</td></tr>
        </table>
      `
    }
  ],
  exercises: [
    {
      id: "ap10-ex1",
      title: "Overflow",
      type: "mc",
      instructions: `
        <p>A computer stores whole numbers with <strong>4 bits</strong>. It can only store numbers from 0 to 15
        (the largest 4-bit number is <code>1111</code>, which is 15).
        When a result is too big for 4 bits, there is an <strong>overflow error</strong>.</p>
        <p>Which addition causes an overflow error?</p>
      `,
      choices: ["<code>7 + 8</code>", "<code>6 + 5</code>", "<code>9 + 8</code>", "<code>10 + 5</code>"],
      answer: 2,
      explain: "9 + 8 = 17, and 17 is bigger than 15, the largest number 4 bits can store. The other sums are 15, 11, and 15, which all fit.",
      hints: [
        "Work out each sum first.",
        "Which sum is bigger than 15?"
      ]
    },
    {
      id: "ap10-ex2",
      title: "Every second item",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>vals ← [5, 2, 8, 4, 7]
total ← 0
i ← 1
REPEAT 3 TIMES
{
   total ← total + vals[i]
   i ← i + 2
}
DISPLAY(total)</code></pre>
      `,
      choices: [
        "<code>20</code>",
        "<code>13</code>",
        "<code>6</code>",
        "An error, because index 7 is out of range"
      ],
      answer: 0,
      explain: "The loop adds vals[1], vals[3], and vals[5]: 5 + 8 + 7 = 20. At the end i is 7, but vals[7] is never used, so there is no error.",
      hints: [
        "Lists start at index 1, so vals[1] is 5.",
        "i takes the values 1, 3, and 5 inside the loop. Which items are at those indexes?",
        "i becomes 7 only after the last repetition. Is vals[7] ever read?"
      ]
    },
    {
      id: "ap10-ex3",
      title: "Kind of error",
      type: "mc",
      instructions: `
        <p>A program should find the average of three test scores <code>a</code>, <code>b</code>, and <code>c</code>.
        The programmer writes:</p>
        <pre><code>avg ← a + b + c / 3</code></pre>
        <p>The program runs and shows no error message, but the average is wrong. What kind of error is this?</p>
      `,
      choices: ["A syntax error", "A logic error", "A runtime error", "An overflow error"],
      answer: 1,
      explain: "The program runs, but it gives a wrong result, so it is a logic error. Division happens before addition, so only c is divided by 3. The fix is (a + b + c) / 3.",
      hints: [
        "A syntax error stops the program before it runs. A runtime error stops it while it runs.",
        "Here the program runs to the end but the answer is wrong. What do we call that?"
      ]
    },
    {
      id: "ap10-ex4",
      title: "A strange email",
      type: "mc",
      instructions: `
        <p>Lena gets an email that looks like it comes from her bank. It says her account will be closed today
        unless she clicks a link and types her password. The link goes to a website that is not the bank's website.</p>
        <p>What is this most likely?</p>
      `,
      choices: [
        "A keylogger",
        "A rogue access point",
        "Multi-factor authentication",
        "A phishing attack"
      ],
      answer: 3,
      explain: "Phishing tricks a person into giving personal information, such as a password, by pretending to be a trusted company.",
      hints: [
        "The email pretends to come from someone Lena trusts.",
        "The goal is to make Lena type her password on a fake website."
      ]
    },
    {
      id: "ap10-ex5",
      title: "Internet protocols",
      type: "mc",
      instructions: `<p>Which <strong>two</strong> statements about Internet protocols (rules for sending data) are true?</p>`,
      choices: [
        "TCP makes sure all packets of a message arrive. It asks again for packets that are missing.",
        "HTTP is the protocol that gives each device on the Internet its address.",
        "DNS (Domain Name System) translates a name like <code>example.com</code> into an IP address.",
        "UDP checks that every packet arrives in the right order, so it is slower than TCP."
      ],
      answer: [0, 2],
      explain: "TCP is reliable: it checks that all packets arrive and asks for missing ones. DNS finds the IP address for a domain name. IP (not HTTP) gives addresses, and UDP does not make sure that packets arrive or ask again for lost ones, so it is faster.",
      hints: [
        "Check each statement on its own: true or false?",
        "IP addresses come from the IP protocol. HTTP is for web pages.",
        "UDP is the fast protocol that does not check if packets arrive."
      ]
    },
    {
      id: "ap10-ex6",
      title: "REPEAT UNTIL",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>n ← 3
total ← 0
REPEAT UNTIL (total ≥ 20)
{
   total ← total + n
   n ← n + 2
}
DISPLAY(n)</code></pre>
      `,
      choices: ["<code>9</code>", "<code>11</code>", "<code>24</code>", "<code>13</code>"],
      answer: 1,
      explain: "total becomes 3, 8, 15, then 24, and n becomes 5, 7, 9, then 11. Now total ≥ 20 is true, so the loop stops and 11 is displayed.",
      hints: [
        "The condition is checked before each repetition. The loop stops when total ≥ 20 is true.",
        "Write total and n after each repetition: 3 and 5, then 8 and 7, then…",
        "The code displays n, not total."
      ]
    },
    {
      id: "ap10-ex7",
      title: "Hexadecimal",
      type: "mc",
      instructions: `
        <p>Hexadecimal is base 16. It uses the digits 0 to 9 and the letters A to F, where A is 10, B is 11, …, and F is 15.</p>
        <p>What is the hexadecimal number <code>2F</code> in decimal (base 10)?</p>
      `,
      choices: ["<code>47</code>", "<code>32</code>", "<code>215</code>", "<code>45</code>"],
      answer: 0,
      explain: "The place values from the right are 1 and 16. So 2F is 2 × 16 + 15 × 1 = 32 + 15 = 47.",
      hints: [
        "In base 16, the place values from the right are 1, 16, 256, …",
        "F is 15. What is 2 × 16 + 15?"
      ]
    },
    {
      id: "ap10-ex8",
      title: "Nested IF",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>x ← 7
y ← 12
IF (x &gt; 5)
{
   IF (y MOD 2 = 1)
   {
      DISPLAY("cat")
   }
   ELSE
   {
      DISPLAY("dog")
   }
   DISPLAY("fish")
}
ELSE
{
   DISPLAY("bird")
}</code></pre>
      `,
      choices: [
        "<code>cat fish</code>",
        "<code>dog</code>",
        "<code>bird</code>",
        "<code>dog fish</code>"
      ],
      answer: 3,
      explain: "7 &gt; 5 is true, so the code goes into the first block. 12 MOD 2 is 0, not 1, so it displays dog. Then DISPLAY(\"fish\") runs, because it is inside the same block after the inner IF.",
      hints: [
        "Is 7 &gt; 5? That decides which big block runs.",
        "12 MOD 2 is 0. So which part of the inner IF runs?",
        "Look at DISPLAY(\"fish\"). Is it inside the inner IF or after it?"
      ]
    },
    {
      id: "ap10-ex9",
      title: "Digital divide",
      type: "mc",
      instructions: `<p>Which situation is an example of the <strong>digital divide</strong>?</p>`,
      choices: [
        "A website is slow because many people visit it at the same time.",
        "A programmer uses open-source code in a new app.",
        "Students in a rural area cannot do online homework because there is no fast Internet where they live.",
        "A school blocks some websites on its computers."
      ],
      answer: 2,
      explain: "The digital divide is the gap between people who have access to computers and the Internet and people who do not. Here, where students live decides their access.",
      hints: [
        "The digital divide is about access to technology.",
        "Which choice describes people who have no fast Internet, or no good device to use it?"
      ]
    },
    {
      id: "ap10-ex10",
      title: "Two processors",
      type: "mc",
      instructions: `
        <p>A program has four tasks. They take <strong>40, 30, 20, and 10 seconds</strong>.
        The tasks do not depend on each other, so they can run in any order and at the same time.
        The computer has <strong>2 processors</strong>. Each processor runs one task at a time.</p>
        <p>What is the shortest time to finish all four tasks?</p>
      `,
      choices: ["50 seconds", "40 seconds", "100 seconds", "60 seconds"],
      answer: 0,
      explain: "Give 40 and 10 to one processor (50 seconds) and 30 and 20 to the other (50 seconds). Both finish after 50 seconds. It cannot be faster, because the total work is 100 seconds and there are only 2 processors.",
      hints: [
        "The total work is 40 + 30 + 20 + 10 = 100 seconds. Split it between 2 processors.",
        "Try to give each processor the same amount of work. Can you make two groups of 50?"
      ]
    },
    {
      id: "ap10-ex11",
      title: "Procedure with parameters",
      type: "mc",
      instructions: `
        <p>What is displayed when this code runs?</p>
        <pre><code>PROCEDURE calc(a, b)
{
   result ← 0
   REPEAT b TIMES
   {
      result ← result + a
   }
   RETURN(result - b)
}

x ← calc(4, 3)
DISPLAY(calc(x, 2))</code></pre>
      `,
      choices: ["<code>9</code>", "<code>18</code>", "<code>16</code>", "<code>12</code>"],
      answer: 2,
      explain: "calc(4, 3) adds 4 three times (12) and returns 12 − 3 = 9, so x is 9. calc(9, 2) adds 9 two times (18) and returns 18 − 2 = 16.",
      hints: [
        "First find x. In calc(4, 3), a is 4 and b is 3.",
        "The loop adds a to result b times. Then the procedure returns result − b.",
        "x is 9. Now work out calc(9, 2)."
      ]
    },
    {
      id: "ap10-ex12",
      title: "Metadata",
      type: "mc",
      instructions: `<p>A phone takes a photo. Which of these is <strong>metadata</strong> about the photo?</p>`,
      choices: [
        "The colors of the pixels in the photo",
        "The date and time the photo was taken, and the GPS location",
        "The faces of the people in the photo",
        "The brightness of the sky in the photo"
      ],
      answer: 1,
      explain: "Metadata is data about data. The date, time, and location describe the photo, but they are not part of the picture itself.",
      hints: [
        "Metadata is \"data about data\".",
        "Which choice is not something you can see in the picture?"
      ]
    },
    {
      id: "ap10-ex13",
      title: "Useful test cases",
      type: "mc",
      instructions: `
        <p>A cinema has these ticket prices: children aged <strong>12 and under</strong> pay 5,
        people aged <strong>65 and over</strong> pay 6, and everyone else pays 10. A programmer writes:</p>
        <pre><code>PROCEDURE ticketPrice(age)
{
   IF (age &lt; 12)
   {
      RETURN(5)
   }
   IF (age &gt; 65)
   {
      RETURN(6)
   }
   RETURN(10)
}</code></pre>
        <p>Which <strong>two</strong> test inputs show that the procedure does <strong>not</strong> work as described?</p>
      `,
      choices: ["<code>10</code>", "<code>12</code>", "<code>30</code>", "<code>65</code>"],
      answer: [1, 3],
      explain: "A 12-year-old should pay 5, but 12 &lt; 12 is false, so the procedure returns 10. A 65-year-old should pay 6, but 65 &gt; 65 is false, so it also returns 10. Ages 10 and 30 give the right price.",
      hints: [
        "Run the procedure for each input and compare the result with the price list.",
        "Errors often hide at the boundary values, where one price changes to another.",
        "Is 12 &lt; 12 true? Is 65 &gt; 65 true?"
      ]
    },
    {
      id: "ap10-ex14",
      title: "Robot to the goal",
      type: "mc",
      instructions: `
        <p>In this grid, <code>▲</code> is the robot facing up (<code>▶</code> would be right, <code>▼</code> down, <code>◀</code> left).
        <code>■</code> is a blocked square, <code>·</code> is an open square, and <code>★</code> is the goal.
        The robot cannot move into a blocked square or off the grid. If it tries, it stays where it is and the program ends.</p>
        <pre><code>·  ·  ■  ★
·  ■  ·  ·
▲  ·  ·  ·</code></pre>
        <p>Which code moves the robot to the goal?</p>
      `,
      choices: [
        "<pre><code>REPEAT 2 TIMES\n{\n   MOVE_FORWARD()\n}\nROTATE_RIGHT()\nREPEAT 3 TIMES\n{\n   MOVE_FORWARD()\n}</code></pre>",
        "<pre><code>ROTATE_LEFT()\nREPEAT 3 TIMES\n{\n   MOVE_FORWARD()\n}\nROTATE_RIGHT()\nREPEAT 2 TIMES\n{\n   MOVE_FORWARD()\n}</code></pre>",
        "<pre><code>ROTATE_RIGHT()\nREPEAT 3 TIMES\n{\n   MOVE_FORWARD()\n}\nROTATE_RIGHT()\nREPEAT 2 TIMES\n{\n   MOVE_FORWARD()\n}</code></pre>",
        "<pre><code>ROTATE_RIGHT()\nREPEAT 3 TIMES\n{\n   MOVE_FORWARD()\n}\nROTATE_LEFT()\nREPEAT 2 TIMES\n{\n   MOVE_FORWARD()\n}</code></pre>"
      ],
      answer: 3,
      explain: "The robot turns right, moves 3 squares along the bottom row, turns left to face up, and moves 2 squares to the goal. In A it hits the blocked square in the top row. In B it faces the left edge. In C it faces down, off the grid.",
      hints: [
        "The top row has a blocked square, so the robot should go along the bottom row first.",
        "After moving right along the bottom row, the robot faces right. Which turn makes it face up?",
        "ROTATE_LEFT turns a robot that faces right so it faces up."
      ]
    },
    {
      id: "ap10-ex15",
      title: "Public key encryption",
      type: "mc",
      instructions: `
        <p>Ana wants to send a secret message to Ben with <strong>public key encryption</strong>.
        Each of them has a public key (anyone can know it) and a private key (only the owner knows it).
        Only Ben must be able to read the message. Which key should Ana use to encrypt it?</p>
      `,
      choices: ["Ben's public key", "Ben's private key", "Ana's private key", "Ana's public key"],
      answer: 0,
      explain: "A message encrypted with Ben's public key can only be decrypted with Ben's private key. Only Ben has that key, so only Ben can read it.",
      hints: [
        "Ana does not know Ben's private key. Only Ben knows it.",
        "The message must be opened with a key that only Ben has. Which key goes with it?"
      ]
    },
    {
      id: "ap10-ex16",
      title: "Binary search steps",
      type: "mc",
      instructions: `
        <p>Binary search looks for <code>40</code> in this sorted list:</p>
        <pre><code>[3, 7, 12, 18, 25, 31, 40, 52]</code></pre>
        <p>At each step, it checks the middle item of the part that is left. When there are two middle items,
        it checks the one on the <strong>left</strong>. Which items does it check, in order?</p>
      `,
      choices: [
        "<code>18, 40</code>",
        "<code>3, 7, 12, 18, 25, 31, 40</code>",
        "<code>18, 31, 40</code>",
        "<code>25, 40</code>"
      ],
      answer: 2,
      explain: "First it checks 18 (index 4). 40 is bigger, so it keeps 25, 31, 40, 52 and checks 31. 40 is bigger, so it keeps 40, 52 and checks 40. Found.",
      hints: [
        "The list has 8 items. The two middle items are 18 and 25. Which one is checked?",
        "40 &gt; 18, so only the right half is left: 25, 31, 40, 52. What is its left middle item?",
        "After 31, only 40 and 52 are left."
      ]
    },
    {
      id: "ap10-ex17",
      title: "Fault tolerance",
      type: "mc",
      instructions: `
        <p>In this network, each letter is a device and each line is a connection.</p>
        <pre><code>P ----- Q ----- R
|               |
|               |
S ----- T ----- U
        |
        V</code></pre>
        <p>What is the <strong>smallest</strong> number of connections that must fail so that P can no longer communicate with U?</p>
      `,
      choices: ["1", "2", "3", "4"],
      answer: 1,
      explain: "There are two separate paths from P to U: P–Q–R–U and P–S–T–U. One failure leaves the other path. If both connections of P fail (P–Q and P–S), P is cut off, so 2 is enough.",
      hints: [
        "Find all the paths from P to U.",
        "The paths P–Q–R–U and P–S–T–U share no connection. How many failures are needed to block both?"
      ]
    },
    {
      id: "ap10-ex18",
      title: "When to use lossy",
      type: "mc",
      instructions: `<p>In which situation is <strong>lossy</strong> compression the best choice?</p>`,
      choices: [
        "Compressing the text file of a legal contract",
        "Compressing an app's program file before download",
        "Compressing a spreadsheet with bank account numbers",
        "Streaming a video on a slow connection, where a small loss of quality is OK"
      ],
      answer: 3,
      explain: "Lossy compression throws away some data to make files much smaller. That is fine for video, where people do not notice small changes. Text, programs, and bank numbers must stay exact, so they need lossless compression.",
      hints: [
        "Lossy compression changes the data a little. Where would a small change be a problem?",
        "If one letter of a contract or one digit of a bank number changes, is that OK?"
      ]
    },
    {
      id: "ap10-ex19",
      title: "Unreasonable time",
      type: "mc",
      instructions: `<p>Which algorithm runs in an <strong>unreasonable</strong> amount of time when n becomes large?</p>`,
      choices: [
        "An algorithm that checks every possible order of n cities to find the shortest trip (n × (n − 1) × … × 1 orders)",
        "An algorithm that looks at each of n items once",
        "An algorithm that compares every pair of n items (about n² steps)",
        "Binary search on a sorted list of n items"
      ],
      answer: 0,
      explain: "The number of orders n × (n − 1) × … × 1 grows faster than any power of n, so it is unreasonable. n, n², and binary search are polynomial or better, so they are reasonable.",
      hints: [
        "Reasonable time means the steps grow like n, n², n³ (a polynomial) or slower.",
        "Try n = 10 for each choice. Which one gives millions of steps?"
      ]
    },
    {
      id: "ap10-ex20",
      title: "Sharing photos",
      type: "mc",
      instructions: `
        <p>Maya takes photos and posts them online. She wants other people to be free to use and share her photos,
        but they must give her credit. What is the best way to do this?</p>
      `,
      choices: [
        "Post the photos with no license, because then everyone may use them freely",
        "Post the photos without her name, so nobody must ask her",
        "Publish the photos with a Creative Commons license that requires attribution (giving credit)",
        "Encrypt the photos before she posts them"
      ],
      answer: 2,
      explain: "A Creative Commons license lets the owner say how others may use the work. An attribution license allows use and sharing, but people must name the creator. With no license, the work is still protected by copyright.",
      hints: [
        "Without a license, a creator's work is still protected by copyright.",
        "Which choice lets Maya give permission and also ask for credit?"
      ]
    },
    {
      id: "ap10-ex21",
      title: "Boolean expressions",
      type: "mc",
      instructions: `<p>The variable <code>x</code> has the value 6 and <code>y</code> has the value 10.
      Which <strong>two</strong> expressions are <strong>true</strong>?</p>`,
      choices: [
        "<code>(x &lt; y) AND (y MOD 2 = 0)</code>",
        "<code>(x &gt; 5) AND (y &lt; 10)</code>",
        "<code>NOT ((x + y) ≥ 16)</code>",
        "<code>(x = 10) OR (y - x = 4)</code>"
      ],
      answer: [0, 3],
      explain: "A: 6 &lt; 10 is true and 10 MOD 2 = 0 is true, so true. B: 10 &lt; 10 is false, so false. C: 16 ≥ 16 is true, and NOT makes it false. D: x = 10 is false, but 10 − 6 = 4 is true, so OR gives true.",
      hints: [
        "Work out each part in parentheses first, then the AND, OR, or NOT.",
        "Is 10 &lt; 10 true? Is 16 ≥ 16 true?",
        "OR is true when at least one part is true."
      ]
    },
    {
      id: "ap10-ex22",
      title: "User feedback",
      type: "mc",
      instructions: `
        <p>A team makes an app that helps older adults order food from a store. During testing, many users say
        the buttons are too small to press. The team uses an <strong>iterative</strong> development process
        (design, build, test, and repeat). What should the team do next?</p>
      `,
      choices: [
        "Release the app as it is, because the code has no errors",
        "Change the design to use bigger buttons, then test it again with users",
        "Throw away the app and start a completely new one",
        "Ask only the programmers on the team if the buttons are big enough"
      ],
      answer: 1,
      explain: "In iterative development, the team uses feedback to improve the program and then tests again. The users are the best people to say if the new buttons are easy to press.",
      hints: [
        "Iterative means the team repeats the steps and improves the program each time.",
        "Who should test the change: the programmers or the real users?"
      ]
    },
    {
      id: "ap10-ex23",
      title: "A simulation",
      type: "mc",
      instructions: `
        <p>A game designer simulates a player who hits a target with a chance of 1 in 4. The code tries 100 shots:</p>
        <pre><code>hits ← 0
REPEAT 100 TIMES
{
   IF (RANDOM(1, 4) = 1)
   {
      hits ← hits + 1
   }
}
DISPLAY(hits)</code></pre>
        <p>Which statement best describes the value that is displayed?</p>
      `,
      choices: [
        "It is always exactly 25.",
        "It is a number from 1 to 4.",
        "It is always 100.",
        "It is a whole number from 0 to 100, and it is most likely close to 25."
      ],
      answer: 3,
      explain: "Each repetition, RANDOM(1, 4) gives 1 with a chance of 1 in 4. So hits can be any number from 0 to 100, and it is usually near 100 ÷ 4 = 25. It changes each time the program runs.",
      hints: [
        "RANDOM gives a new number each time. Can the result be the same every time you run the program?",
        "Each shot hits with a chance of 1 in 4. About how many hits do you expect in 100 shots?"
      ]
    },
    {
      id: "ap10-ex24",
      title: "Survey bias",
      type: "mc",
      instructions: `
        <p>A school wants to know how all its students travel to school. It asks the question only to the
        students in the after-school robotics club. Why may the results be <strong>biased</strong> (not fair to all students)?</p>
      `,
      choices: [
        "The survey reaches only a small group of students, who may travel in a different way than most students.",
        "The survey has too many answers, so the data is too big to use.",
        "Data from a club can never be stored on a computer.",
        "The question is about travel, and travel data cannot be analyzed."
      ],
      answer: 0,
      explain: "The data comes from one small group only. For example, club students stay late and may need a ride home. So the data may not show how all students travel.",
      hints: [
        "Bias in data often comes from who is asked.",
        "Are the students in one club like all the students in the school?"
      ]
    },
    {
      id: "ap10-ex25",
      title: "Identify a person",
      type: "mc",
      instructions: `<p>Which piece of data, <strong>on its own</strong>, is most likely to identify one specific person?</p>`,
      choices: [
        "A person's favorite color",
        "The city where a person was born",
        "A person's passport number",
        "A person's shoe size"
      ],
      answer: 2,
      explain: "A passport number belongs to only one person, so it is PII (personally identifiable information). Many people share a favorite color, a birth city, or a shoe size.",
      hints: [
        "Which data is the same for many people?",
        "Which choice is a number given to only one person?"
      ]
    },
    {
      id: "ap10-ex26",
      title: "Read a flowchart",
      type: "mc",
      instructions: `
        <p>A flowchart has these parts. A <strong>diamond</strong> asks a yes/no question. A <strong>box</strong> does an action.</p>
        <ol>
          <li><strong>Start</strong> box: set <code>n ← 1</code> and <code>total ← 0</code>. Go to step 2.</li>
          <li><strong>Diamond:</strong> Is <code>n ≤ 5</code>? Yes: go to step 3. No: go to step 6.</li>
          <li><strong>Diamond:</strong> Is <code>n MOD 2 = 1</code>? Yes: go to step 4. No: go to step 5.</li>
          <li><strong>Box:</strong> <code>total ← total + n</code>. Go to step 5.</li>
          <li><strong>Box:</strong> <code>n ← n + 1</code>. Go back to step 2.</li>
          <li><strong>Box:</strong> <code>DISPLAY(total)</code>. End.</li>
        </ol>
        <p>What is displayed?</p>
      `,
      choices: ["<code>15</code>", "<code>9</code>", "<code>6</code>", "<code>4</code>"],
      answer: 1,
      explain: "n goes from 1 to 5. Only odd values (n MOD 2 = 1) are added: 1 + 3 + 5 = 9. When n is 6, the answer to step 2 is no, so 9 is displayed.",
      hints: [
        "Follow the steps with n = 1, 2, 3, … and write total each time.",
        "n MOD 2 = 1 is true only for odd numbers.",
        "Add the odd numbers from 1 to 5."
      ]
    },
    {
      id: "ap10-ex27",
      title: "A very big job",
      type: "mc",
      instructions: `
        <p>A research group must analyze a huge amount of data. On one computer it would take many years,
        and the data does not even fit in one computer's storage. Which solution is best?</p>
      `,
      choices: [
        "Run the program on one computer, one task after another",
        "Split the data into packets and send all of them to one server",
        "Use binary search on the data, because it works on any list",
        "Use distributed computing: many computers on a network each work on a part of the data"
      ],
      answer: 3,
      explain: "Distributed computing uses many computers that work together over a network. Each one stores and processes part of the data, so the job is faster and the data fits.",
      hints: [
        "One computer is too slow and too small. What could help?",
        "Look for the choice that uses more than one computer."
      ]
    },
    {
      id: "ap10-ex28",
      title: "Smart farm sensors",
      type: "mc",
      instructions: `
        <p><em>Read the text, then answer.</em></p>
        <p>A farm puts soil sensors in its fields. The sensors are connected to the Internet. Every hour, each sensor sends
        the soil moisture (how wet the soil is), the temperature, and its location to a cloud server.
        An app then tells the farmer when to water each field. The app learned its advice from data
        collected only on large farms in one country.</p>
        <p>Which <strong>two</strong> are possible <strong>risks</strong> or negative effects of this innovation?</p>
      `,
      choices: [
        "The farmer may use less water than before.",
        "The advice may be wrong for small farms or other climates, because the data came only from large farms in one country.",
        "If the Internet connection stops, the farmer may not get any watering advice.",
        "The sensors measure how wet the soil is."
      ],
      answer: [1, 2],
      explain: "Data from only one kind of farm can make the advice biased for other farms. And the system depends on the Internet, so a lost connection stops the advice. Using less water is a benefit, and choice D is only a fact.",
      hints: [
        "Check each choice: is it a risk, a benefit, or only a fact?",
        "Think about where the training data came from, and what the app needs to work."
      ]
    },
    {
      id: "ap10-ex29",
      title: "A good enough route",
      type: "mc",
      instructions: `
        <p>A delivery company must find a short route through 60 cities. Checking every possible route would take far too long.
        So the company uses an algorithm that always goes next to the nearest city it has not visited yet.
        Which statement best describes this approach?</p>
      `,
      choices: [
        "It is a heuristic: it finds a good route in a reasonable time, but maybe not the shortest route.",
        "The problem is undecidable, so the algorithm cannot give any route.",
        "It always finds the shortest route, and it is faster than checking every route.",
        "It is a binary search on the list of cities."
      ],
      answer: 0,
      explain: "A heuristic is a shortcut that gives a good answer fast when the best answer takes too long to find. Going to the nearest city is simple, but it does not always give the shortest route.",
      hints: [
        "The algorithm does not check every route. Can it be sure that its route is the shortest?",
        "What do we call a method that gives a good, but maybe not the best, answer in reasonable time?"
      ]
    },
    {
      id: "ap10-ex30",
      title: "Password and a code",
      type: "mc",
      instructions: `
        <p>To log in, a website asks for a password. Then it sends a code to the user's phone, and the user must type that code too.
        Why is this safer than a password alone?</p>
      `,
      choices: [
        "The password is stored with lossy compression.",
        "An attacker who steals the password still needs the user's phone to log in.",
        "The code makes the password longer, so it is harder to guess.",
        "It stops all computer viruses."
      ],
      answer: 1,
      explain: "This is multi-factor authentication. The user needs something they know (the password) and something they have (the phone). A stolen password alone is not enough.",
      hints: [
        "The user must show two different things to log in.",
        "What else does an attacker need if they only know the password?"
      ]
    }
  ]
});
