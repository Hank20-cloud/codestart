// AP CSP, chapter 5 — Big Idea 3 (Algorithms and Programming): procedures, libraries, RANDOM,
// simulations, robot commands, algorithmic efficiency, and undecidable problems.
// Pseudocode follows the AP Exam Reference Sheet.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap05", {
  intro: `
    <p>A <strong>procedure</strong> is a named group of instructions, like a function in Python.
    In this chapter you first learn what an <strong>abstraction</strong> is. Then you learn to read procedures in AP pseudocode,
    use random numbers, and move the AP robot.</p>
    <p>Then you learn two big ideas about algorithms: some algorithms are too slow to be useful,
    and some problems cannot be solved by any computer at all.</p>
  `,
  lessons: [
    {
      id: "ap05-l6",
      title: "What is an abstraction?",
      html: `
        <p>An <strong>abstraction</strong> hides details so that you can work with an idea without thinking about every small part.
        This helps people <strong>manage complexity</strong>: a big, complicated program becomes a set of simple ideas.</p>
        <p>An example from daily life: to drive a car, you use the steering wheel and the pedals.
        You do not need to know how the engine works inside. The steering wheel and the pedals hide the details.</p>
        <p><strong>Data abstraction.</strong> A name stands for data, so you do not need to think about the single values.</p>
        <ul>
          <li>A <strong>variable</strong> name like <code>score</code> stands for a value. You use the name, and the program finds the value.</li>
          <li>A <strong>list</strong> name stands for many values. <code>grades</code> can hold 3 grades or 3,000 grades.
          The code <code>FOR EACH g IN grades</code> works for both, without one variable for each grade.</li>
        </ul>
        <pre><code>grades ← [80, 95, 72]
total ← 0
FOR EACH g IN grades
{
   total ← total + g
}</code></pre>
        <p><strong>Procedural abstraction.</strong> You call a procedure by <em>what</em> it does, not <em>how</em> it does it.
        When you write <code>DISPLAY(x)</code>, you do not know how the computer draws the letters on the screen. You do not need to know.
        It is the same with your own procedures: if <code>average(grades)</code> works, you can use it without reading its inside.
        And you can change the inside of a procedure (for example, make it faster) without changing the code that calls it.</p>
        <p><strong>Layers of abstraction.</strong> Computers use many abstractions, one on top of the other:</p>
        <table>
          <tr><th>Layer</th><th>What it hides</th></tr>
          <tr><td>Bits (0 and 1)</td><td>the electric signals in the hardware</td></tr>
          <tr><td>Numbers</td><td>the single bits. For example, the bits 01000001 are the number 65.</td></tr>
          <tr><td>Text</td><td>the numbers. For example, the number 65 can stand for the letter "A".</td></tr>
        </table>
        <p>Programming languages are layers too. A <strong>high-level language</strong> (like Python or AP pseudocode) is close to human language.
        The computer turns each line into many small <strong>machine instructions</strong> (very simple steps that the processor can run).
        The high-level language hides these machine instructions from you.</p>
        <p><strong>Why abstraction helps:</strong></p>
        <ul>
          <li>The code is <strong>simpler</strong> and shorter, so it is easier to read.</li>
          <li>You can <strong>reuse</strong> a procedure or a list many times.</li>
          <li>There are <strong>fewer mistakes</strong>, because each part is small and you can test it alone.</li>
          <li>The program is <strong>easier to change</strong>: you change one procedure, not many copies of the same code.</li>
        </ul>
        <div class="tip"><strong>For the exam:</strong> when a question asks how something "manages complexity",
        the answer is often an abstraction: a list instead of many variables, or a procedure instead of copied code.</div>
      `
    },
    {
      id: "ap05-l1",
      title: "Procedures, parameters, and RETURN",
      html: `
        <p>A procedure is written like this in AP pseudocode:</p>
        <pre><code>PROCEDURE double(n)
{
   RETURN(n * 2)
}</code></pre>
        <p>To run (or <strong>call</strong>) it, write its name and the values in parentheses <code>( )</code>:</p>
        <pre><code>result ← double(5)
DISPLAY(result)</code></pre>
        <p>Output: <code>10</code></p>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th></tr>
          <tr><td><code>PROCEDURE double(n)</code> with <code>{ }</code></td><td><code>def double(n):</code> with indentation</td></tr>
          <tr><td><code>RETURN(n * 2)</code></td><td><code>return n * 2</code></td></tr>
          <tr><td><code>result ← double(5)</code></td><td><code>result = double(5)</code></td></tr>
        </table>
        <p>Two words that are easy to mix up:</p>
        <ul>
          <li>A <strong>parameter</strong> is the variable in the procedure definition. Here: <code>n</code>.</li>
          <li>An <strong>argument</strong> is the value you give when you call the procedure. Here: <code>5</code>.</li>
        </ul>
        <p><code>RETURN</code> sends a value back to the caller and <strong>ends the procedure at once</strong>.
        Lines after a RETURN that runs are skipped. A procedure can also have no RETURN. Then it just does something, for example DISPLAY.</p>
        <div class="tip"><strong>Procedural abstraction</strong> (see the lesson "What is an abstraction?"): to use a procedure, you only need to know <em>what</em> it does,
        not <em>how</em> it does it. This makes programs easier to read. It also gives <strong>modularity</strong>:
        a big program is split into small parts that you can write, test, and fix one at a time.
        And if you change the inside of a procedure, the code that calls it does not need to change.</div>
        <p>One procedure with a parameter can replace many copies of almost the same code. This is called <strong>generalizing</strong> the code.</p>
      `
    },
    {
      id: "ap05-l2",
      title: "Libraries, APIs, and RANDOM",
      html: `
        <p>A <strong>library</strong> is a collection of procedures that other people wrote and tested, ready for you to use.
        For example, Python's <code>random</code> and <code>math</code> are libraries.
        Libraries save time, because you do not have to write everything yourself.</p>
        <p>An <strong>API</strong> (Application Programming Interface) is the description of how to use a library:
        the names of the procedures, what each one does, which arguments it needs, and what it returns.
        The documentation of an API helps programmers use the library correctly.</p>
        <p>The AP reference sheet has one random procedure:</p>
        <pre><code>RANDOM(a, b)</code></pre>
        <p>It gives a random whole number from a to b, and <strong>both a and b are included</strong>.
        Each number has the same chance.</p>
        <table>
          <tr><th>AP pseudocode</th><th>Possible values</th><th>Python</th></tr>
          <tr><td><code>RANDOM(1, 6)</code></td><td>1, 2, 3, 4, 5, 6</td><td><code>random.randint(1, 6)</code></td></tr>
          <tr><td><code>RANDOM(0, 1)</code></td><td>0 or 1</td><td><code>random.randint(0, 1)</code></td></tr>
        </table>
        <div class="tip">How many different values can <code>RANDOM(a, b)</code> give? <strong>b − a + 1</strong>.
        For <code>RANDOM(3, 7)</code>: 7 − 3 + 1 = 5 values (3, 4, 5, 6, 7).</div>
        <p>To do something with a chance of 25%, you can write:</p>
        <pre><code>IF (RANDOM(1, 4) = 1)
{
   DISPLAY("You win!")
}</code></pre>
        <p>1 is one of 4 equal values, so the chance is 1 out of 4.</p>
      `
    },
    {
      id: "ap05-l3",
      title: "Simulations",
      html: `
        <p>A <strong>simulation</strong> is a program that imitates something from the real world, for example
        traffic in a city, the spread of a disease, or the weather. Simulations often use RANDOM to model chance.</p>
        <p><strong>Why use a simulation?</strong> It is cheaper, faster, and safer than a real experiment.
        You can test ideas that are impossible or dangerous in real life, and you can run them many times.</p>
        <p><strong>Limits:</strong> a simulation is always a <strong>simplification</strong>. It leaves out some details of the real world.
        The people who build it decide what to leave out, so a simulation can contain <strong>bias</strong>.
        Its results are only as good as its rules and its data.</p>
      `
    },
    {
      id: "ap05-l5",
      title: "The robot",
      html: `
        <p>Some AP exam questions show a <strong>robot</strong> on a <strong>grid</strong>. A grid is a set of squares in rows and columns, like a chess board.
        The robot stands on one square. It is drawn as a <strong>triangle</strong>, and the point of the triangle shows the direction it faces.
        The robot always faces one of four directions: up, right, down, or left.</p>
        <p>In this course we draw grids as text. These are the symbols:</p>
        <table>
          <tr><th>Symbol</th><th>Meaning</th></tr>
          <tr><td><code>▲ ▶ ▼ ◀</code></td><td>the robot, facing up, right, down, or left</td></tr>
          <tr><td><code>■</code></td><td>a blocked square (the robot cannot go there)</td></tr>
          <tr><td><code>·</code></td><td>an open square</td></tr>
          <tr><td><code>★</code></td><td>the goal (the square the robot should reach). It is an open square.</td></tr>
        </table>
        <p>Row 1 is the top row, and column 1 is the left column. The robot cannot leave the grid.</p>
        <p><strong>The commands:</strong></p>
        <table>
          <tr><th>Command</th><th>What it does</th></tr>
          <tr><td><code>MOVE_FORWARD()</code></td><td>moves one square in the direction the robot faces.
          If the square is blocked or outside the grid, the robot stays where it is and the program ends.</td></tr>
          <tr><td><code>ROTATE_LEFT()</code></td><td>turns 90 degrees to the left (counterclockwise), on the same square</td></tr>
          <tr><td><code>ROTATE_RIGHT()</code></td><td>turns 90 degrees to the right (clockwise), on the same square</td></tr>
          <tr><td><code>CAN_MOVE(direction)</code></td><td>true if the robot can move one square in that direction. The direction is
          <code>left</code>, <code>right</code>, <code>forward</code>, or <code>backward</code>, seen from the robot.</td></tr>
        </table>
        <pre><code>REPEAT UNTIL (NOT CAN_MOVE(forward))
{
   MOVE_FORWARD()
}
ROTATE_RIGHT()</code></pre>
        <p>The robot walks forward until a blocked square (■) or the edge of the grid is in front of it, then turns right.</p>
        <p><code>CAN_MOVE</code> uses directions <strong>seen from the robot</strong>, not from you.
        If the robot faces right (<code>▶</code>), then <code>forward</code> is the square to the right,
        <code>left</code> is the square above it, <code>right</code> is the square below it, and <code>backward</code> is the square to its left.
        CAN_MOVE only checks. It does not move or turn the robot.</p>
        <div class="tip">To turn around (180 degrees), rotate twice. Three ROTATE_RIGHT() commands are the same as one ROTATE_LEFT().</div>
        <p><strong>A blocked move.</strong> If <code>MOVE_FORWARD()</code> would take the robot onto a <code>■</code> square or outside the grid,
        the robot stays on its square, and the <strong>program ends</strong> at once. The commands after it never run.</p>
        <p><strong>How to trace.</strong> To trace means to run the program by hand. After each command, write down the robot's
        square (row and column) and the direction it faces. Do not try to "see" the answer. Go one command at a time.</p>
        <pre>· · · ★
· ■ · ·
▲ · · ·</pre>
        <pre><code>MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_RIGHT()
REPEAT 3 TIMES
{
   MOVE_FORWARD()
}</code></pre>
        <table>
          <tr><th>Command</th><th>Square (row, column)</th><th>Facing</th></tr>
          <tr><td>(start)</td><td>row 3, column 1</td><td>up ▲</td></tr>
          <tr><td><code>MOVE_FORWARD()</code></td><td>row 2, column 1</td><td>up ▲</td></tr>
          <tr><td><code>MOVE_FORWARD()</code></td><td>row 1, column 1</td><td>up ▲</td></tr>
          <tr><td><code>ROTATE_RIGHT()</code></td><td>row 1, column 1</td><td>right ▶</td></tr>
          <tr><td><code>MOVE_FORWARD()</code> (round 1)</td><td>row 1, column 2</td><td>right ▶</td></tr>
          <tr><td><code>MOVE_FORWARD()</code> (round 2)</td><td>row 1, column 3</td><td>right ▶</td></tr>
          <tr><td><code>MOVE_FORWARD()</code> (round 3)</td><td>row 1, column 4 ★</td><td>right ▶</td></tr>
        </table>
        <p>On the same grid, this program ends early:</p>
        <pre><code>ROTATE_RIGHT()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()
MOVE_FORWARD()</code></pre>
        <p>The robot turns right and moves to row 3, column 2. It turns left, so it faces up.
        The square above it (row 2, column 2) is blocked. So the robot stays on row 3, column 2, facing up, and the program ends.
        The last <code>MOVE_FORWARD()</code> never runs.</p>
        <p><strong>Loops and decisions with the robot.</strong> Exam questions often use <code>REPEAT UNTIL</code> and <code>IF</code> with the robot.
        Sometimes a question uses a procedure like <code>GoalReached()</code>, which is true when the robot is on the goal square.
        It is <strong>not</strong> on the reference sheet. When a question uses such a procedure, the question will tell you what it does.</p>
        <pre>▶ · · ■
■ ■ · ■
■ ★ · ■</pre>
        <pre><code>REPEAT UNTIL (GoalReached())
{
   IF (CAN_MOVE(forward))
   {
      MOVE_FORWARD()
   }
   ELSE
   {
      ROTATE_RIGHT()
   }
}</code></pre>
        <p>The robot starts on row 1, column 1, facing right. Each round: if the square in front is open, it moves. If not, it turns right.</p>
        <ol>
          <li>Forward is open: move to row 1, column 2.</li>
          <li>Forward is open: move to row 1, column 3.</li>
          <li>Forward (row 1, column 4) is blocked: turn right. Now it faces down.</li>
          <li>Forward is open: move to row 2, column 3.</li>
          <li>Forward is open: move to row 3, column 3.</li>
          <li>Forward is outside the grid: turn right. Now it faces left.</li>
          <li>Forward is open: move to row 3, column 2. This is ★, so <code>GoalReached()</code> is true and the loop stops.</li>
        </ol>
        <p>Because the code checks <code>CAN_MOVE(forward)</code> before each move, this robot never tries a blocked move.
        But be careful: if the robot can never reach ★, a <code>REPEAT UNTIL (GoalReached())</code> loop runs forever.</p>
      `
    },
    {
      id: "ap05-l4",
      title: "Efficiency and unsolvable problems",
      html: `
        <p>The <strong>efficiency</strong> of an algorithm is how much time (number of steps) or memory it needs,
        and how this grows when the input grows.</p>
        <table>
          <tr><th>Kind</th><th>How the steps grow for n items</th><th>Example</th></tr>
          <tr><td><strong>Reasonable time</strong> (polynomial)</td><td>like n, n<sup>2</sup>, or n<sup>3</sup></td><td>linear search, binary search, sorting a list</td></tr>
          <tr><td><strong>Unreasonable time</strong> (exponential or factorial)</td><td>like 2<sup>n</sup> or n! (1 × 2 × 3 × ... × n)</td><td>trying every possible order to visit 50 cities</td></tr>
        </table>
        <p>With 100 items, n<sup>2</sup> is 10,000 steps. A computer does this in much less than a second.
        But 2<sup>100</sup> is about 10<sup>30</sup> steps (1 followed by 30 zeros). Even a computer that does one billion
        steps every second would need much longer than the age of the universe.</p>
        <p>When the exact solution needs unreasonable time, programmers use a <strong>heuristic</strong>:
        a shortcut that finds a solution that is <em>good enough</em>, quickly, but maybe not the best one.
        Example: "always go to the nearest city that you have not visited yet".</p>
        <p>Some words for the exam:</p>
        <ul>
          <li>A <strong>decision problem</strong> has a yes or no answer. Example: "Is this number prime?"</li>
          <li>An <strong>optimization problem</strong> asks for the best solution. Example: "What is the shortest route?"</li>
        </ul>
        <p>Some problems are <strong>undecidable</strong>: no algorithm can give the correct yes or no answer for <em>every</em> possible input.
        This is not about slow computers. It has been proven that such an algorithm cannot exist.</p>
        <div class="tip"><strong>The halting problem:</strong> "Given any program and its input, will the program
        stop some day, or run forever?" Alan Turing proved in 1936 that no program can answer this correctly for every program.
        For some programs we can know the answer, but there is no method that works for all of them.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ap05-ex13",
      title: "What is an abstraction?",
      type: "mc",
      instructions: `<p>Which statement best describes an <strong>abstraction</strong> in programming?</p>`,
      choices: [
        "Writing every detail of a program in one long list of steps",
        "Making a program run faster by using less memory",
        "Copying the same code to many places, so each part is easy to find",
        "Hiding details, so that a complex thing is easier to use and understand"
      ],
      answer: 3,
      explain: "An abstraction hides details to manage complexity. Examples are a list name that stands for many values, or a procedure that you call by what it does.",
      hints: [
        "Think of a car: you use the steering wheel without knowing how the engine works.",
        "Which choice is about hiding details?"
      ]
    },
    {
      id: "ap05-ex14",
      title: "Change the inside of a procedure",
      type: "mc",
      instructions: `
        <p>A program calls the procedure <code>drawSquare(size)</code> in 20 different places.
        The programmer changes the code inside <code>drawSquare</code> so it runs faster.
        It still draws the same square as before. What must change in the 20 calls?</p>
      `,
      choices: [
        "Nothing. The calls only depend on what the procedure does, and that did not change.",
        "Every call must be rewritten to match the new code inside the procedure.",
        "Every call must give a new, different argument.",
        "The 20 calls must be replaced by 20 copies of the new code."
      ],
      answer: 0,
      explain: "This is procedural abstraction: the calls use the procedure by what it does, not how. When the inside changes but the result is the same, the calls stay the same.",
      hints: [
        "Did the name, the parameter, or the result of drawSquare change?",
        "A call only needs to know <em>what</em> a procedure does, not <em>how</em>.",
        "If the square is the same and the call looks the same, does the caller notice any change?"
      ]
    },
    {
      id: "ap05-ex1",
      title: "Trace a procedure",
      type: "mc",
      instructions: `
        <p>What is displayed?</p>
        <pre><code>PROCEDURE calc(a, b)
{
   result ← a * 2 + b
   RETURN(result)
}

x ← calc(3, 4)
DISPLAY(calc(x, 1))</code></pre>
      `,
      choices: ["<code>10</code>", "<code>11</code>", "<code>21</code>", "<code>23</code>"],
      answer: 2,
      explain: "calc(3, 4) returns 3 * 2 + 4 = 10, so x is 10. Then calc(10, 1) returns 10 * 2 + 1 = 21.",
      hints: [
        "First find x. In calc(3, 4), a is 3 and b is 4.",
        "x is 10. Now call calc again with a = 10 and b = 1."
      ]
    },
    {
      id: "ap05-ex2",
      title: "RETURN ends the procedure",
      type: "mc",
      instructions: `
        <p>What is displayed?</p>
        <pre><code>PROCEDURE check(n)
{
   IF (n &gt; 5)
   {
      RETURN("big")
   }
   RETURN("small")
}

DISPLAY(check(8))</code></pre>
      `,
      choices: ["<code>big small</code>", "<code>small</code>", "<code>8</code>", "<code>big</code>"],
      answer: 3,
      explain: "8 &gt; 5 is true, so the procedure returns \"big\" and stops at once. The second RETURN never runs.",
      hints: [
        "Is 8 &gt; 5?",
        "What happens to the lines after a RETURN that runs?"
      ]
    },
    {
      id: "ap05-ex3",
      title: "Parameter or argument?",
      type: "mc",
      instructions: `
        <pre><code>PROCEDURE greet(name)
{
   DISPLAY("Hello")
   DISPLAY(name)
}

greet("Sara")</code></pre>
        <p>Which statement is correct?</p>
      `,
      choices: [
        "<code>name</code> is a parameter, and <code>\"Sara\"</code> is an argument",
        "<code>name</code> is an argument, and <code>\"Sara\"</code> is a parameter",
        "Both <code>name</code> and <code>\"Sara\"</code> are parameters",
        "<code>greet</code> is the argument"
      ],
      answer: 0,
      explain: "The parameter is the variable in the PROCEDURE line (name). The argument is the value given in the call (\"Sara\").",
      hints: [
        "One of them is in the definition of the procedure. The other is in the call.",
        "The parameter is the variable that receives the value."
      ]
    },
    {
      id: "ap05-ex4",
      title: "RANDOM values (select two)",
      type: "mc",
      instructions: `
        <p>Which <strong>two</strong> values can <code>RANDOM(1, 6)</code> give? Select two answers.</p>
      `,
      choices: ["<code>0</code>", "<code>1</code>", "<code>6</code>", "<code>7</code>"],
      answer: [1, 2],
      explain: "RANDOM(a, b) gives a whole number from a to b, and both ends are included. So 1 and 6 are possible, but 0 and 7 are not.",
      hints: [
        "Are the two numbers in RANDOM(a, b) included?",
        "RANDOM(1, 6) is like a dice. Which numbers are on a dice?"
      ]
    },
    {
      id: "ap05-ex5",
      title: "A coin toss",
      type: "mc",
      instructions: `
        <p>A program should display <code>"heads"</code> with a 50% chance. Which code does this correctly?</p>
      `,
      choices: [
        "<pre><code>IF (RANDOM(1, 3) = 1)\n{\n   DISPLAY(\"heads\")\n}</code></pre>",
        "<pre><code>IF (RANDOM(0, 2) = 1)\n{\n   DISPLAY(\"heads\")\n}</code></pre>",
        "<pre><code>IF (RANDOM(1, 2) = 1)\n{\n   DISPLAY(\"heads\")\n}</code></pre>",
        "<pre><code>IF (RANDOM(1, 2) = 3)\n{\n   DISPLAY(\"heads\")\n}</code></pre>"
      ],
      answer: 2,
      explain: "RANDOM(1, 2) gives 1 or 2, each with the same chance. So it is 1 half of the time. RANDOM(0, 2) gives 0, 1, or 2, so 1 has only a 1 in 3 chance.",
      hints: [
        "How many different values can each RANDOM give? Remember: both ends are included.",
        "For a 50% chance, you need 2 equal values, and the condition must be true for 1 of them."
      ]
    },
    {
      id: "ap05-ex9",
      title: "Trace the robot",
      type: "mc",
      instructions: `
        <p>Row 1 is the top row and column 1 is the left column. The robot starts on row 4, column 1, facing up.</p>
        <pre>· · · ·
· · · ·
· · · ·
▲ · · ·</pre>
        <pre><code>MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_RIGHT()</code></pre>
        <p>Where is the robot at the end, and which way does it face?</p>
      `,
      choices: [
        "Row 3, column 3, facing right ▶",
        "Row 3, column 3, facing down ▼",
        "Row 2, column 3, facing down ▼",
        "Row 3, column 1, facing left ◀"
      ],
      answer: 1,
      explain: "Up to row 3, column 1. Turn right: it faces right. Two moves: row 3, column 3. The last ROTATE_RIGHT turns it from right to down.",
      hints: [
        "Write the square and the direction after each command.",
        "ROTATE_RIGHT turns clockwise: up → right → down → left.",
        "After the two moves the robot is on row 3, column 3, facing right. What does the last command do?"
      ]
    },
    {
      id: "ap05-ex10",
      title: "Reach the goal",
      type: "mc",
      instructions: `
        <p>The robot starts on row 3, column 1, facing up. Which program moves it to the ★ square?</p>
        <pre>· · ★
· ■ ·
▲ · ·</pre>
      `,
      choices: [
        "<pre><code>MOVE_FORWARD()\nMOVE_FORWARD()\nROTATE_LEFT()\nMOVE_FORWARD()\nMOVE_FORWARD()</code></pre>",
        "<pre><code>MOVE_FORWARD()\nROTATE_RIGHT()\nMOVE_FORWARD()\nMOVE_FORWARD()\nROTATE_LEFT()\nMOVE_FORWARD()</code></pre>",
        "<pre><code>ROTATE_RIGHT()\nMOVE_FORWARD()\nMOVE_FORWARD()\nROTATE_RIGHT()\nMOVE_FORWARD()\nMOVE_FORWARD()</code></pre>",
        "<pre><code>REPEAT 2 TIMES\n{\n   MOVE_FORWARD()\n}\nROTATE_RIGHT()\nREPEAT 2 TIMES\n{\n   MOVE_FORWARD()\n}</code></pre>"
      ],
      answer: 3,
      explain: "Two moves up reach row 1, column 1. ROTATE_RIGHT makes the robot face right, and two moves reach row 1, column 3, the ★.",
      hints: [
        "Trace each program. Stop if a move goes onto ■ or outside the grid, because then the program ends.",
        "From row 1, column 1, facing up, which turn makes the robot face the ★?",
        "The robot must be on row 1, column 1 and then face right. Only one program does this."
      ]
    },
    {
      id: "ap05-ex11",
      title: "REPEAT UNTIL with CAN_MOVE",
      type: "mc",
      instructions: `
        <p>The robot starts on row 2, column 1, facing right.</p>
        <pre>■ ■ · ■
▶ · · ·</pre>
        <pre><code>REPEAT UNTIL (CAN_MOVE(left))
{
   MOVE_FORWARD()
}
ROTATE_LEFT()
MOVE_FORWARD()</code></pre>
        <p>Where is the robot at the end?</p>
      `,
      choices: [
        "Row 1, column 3, facing up ▲",
        "Row 2, column 3, facing up ▲",
        "Row 2, column 2, facing up ▲",
        "Row 2, column 1, facing up ▲"
      ],
      answer: 0,
      explain: "The robot faces right, so its left is the square above it. Above column 1 and column 2 is ■, so it moves on. Above column 3 is open, so the loop stops. It turns left (up) and moves to row 1, column 3.",
      hints: [
        "CAN_MOVE(left) is seen from the robot. If the robot faces right, where is its left?",
        "Its left is the square above it. Check the square above the robot before each round.",
        "The loop stops on row 2, column 3. Then the robot turns to face up and moves once."
      ]
    },
    {
      id: "ap05-ex12",
      title: "A blocked move",
      type: "mc",
      instructions: `
        <p>The robot starts on row 3, column 1, facing up.</p>
        <pre>· · · ·
· · ■ ·
▲ · · ·</pre>
        <pre><code>ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()</code></pre>
        <p>Where is the robot when the program ends?</p>
      `,
      choices: [
        "Row 1, column 4, facing right ▶",
        "Row 3, column 4, facing right ▶",
        "Row 3, column 3, facing up ▲",
        "Row 3, column 1, facing up ▲, because the robot goes back to the start after an error"
      ],
      answer: 2,
      explain: "The robot moves to row 3, column 3 and turns to face up. The square above it is ■, so the robot stays where it is and the program ends. The last three commands never run.",
      hints: [
        "Trace one command at a time. Check each square before the robot moves onto it.",
        "After ROTATE_LEFT, the robot is on row 3, column 3, facing up. What is on the square above it?",
        "A blocked move does not skip to the next command. What happens to the program?"
      ]
    },
    {
      id: "ap05-ex6",
      title: "Reasonable time?",
      type: "mc",
      instructions: `
        <p>Four algorithms each work on a list of n items. The number of steps each one needs is shown below.
        Which algorithm runs in <strong>unreasonable</strong> time?</p>
      `,
      choices: [
        "2<sup>n</sup> steps",
        "n<sup>2</sup> steps",
        "n steps",
        "10 × n steps"
      ],
      answer: 0,
      explain: "2<sup>n</sup> is exponential: each extra item doubles the steps. The other choices are polynomial, so they run in reasonable time.",
      hints: [
        "Reasonable time means polynomial, like n or n<sup>2</sup>.",
        "In which choice is n in the exponent (the small number up high)?"
      ]
    },
    {
      id: "ap05-ex7",
      title: "Undecidable",
      type: "mc",
      instructions: `<p>Which statement about an <strong>undecidable</strong> problem is true?</p>`,
      choices: [
        "It can be solved, but only by a very fast computer.",
        "No algorithm can give a correct answer for every possible input.",
        "It is a problem with an answer that is not yes or no.",
        "It can be solved with a heuristic in reasonable time."
      ],
      answer: 1,
      explain: "An undecidable problem has no algorithm that is always correct for all inputs, like the halting problem. A faster computer does not help.",
      hints: [
        "Undecidable is not the same as \"slow\". Speed is not the issue.",
        "Remember the halting problem. What did Alan Turing prove about it?"
      ]
    },
    {
      id: "ap05-ex8",
      title: "From PROCEDURE to Python",
      type: "py",
      instructions: `
        <p>Write this AP procedure as a Python function with the same name and the same behavior:</p>
        <pre><code>PROCEDURE countDown(start)
{
   total ← 0
   REPEAT UNTIL (start = 0)
   {
      total ← total + start
      start ← start - 1
   }
   RETURN(total)
}</code></pre>
        <p>For example, <code>countDown(4)</code> returns 4 + 3 + 2 + 1 = <code>10</code>.
        Use the name <code>countDown</code> and <strong>return</strong> the value (do not print it inside the function).</p>
      `,
      starterCode: "def countDown(start):\n    total = 0\n    # Write the REPEAT UNTIL loop here\n    return total\n\nprint(countDown(4))\n",
      solution: "def countDown(start):\n    total = 0\n    while start != 0:\n        total = total + start\n        start = start - 1\n    return total\n\nprint(countDown(4))\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.call('countDown', 4) === 10", message: "countDown(4) should return 10. Use a while loop with the opposite condition: while start != 0:" },
        { check: "R.call('countDown', 1) === 1 && R.call('countDown', 10) === 55", message: "countDown(10) should return 55. Inside the loop, add start to total, then take 1 away from start." },
        { check: "R.call('countDown', 0) === 0", message: "countDown(0) should return 0. When start is 0, the loop should not run at all." }
      ],
      hints: [
        "REPEAT UNTIL (start = 0) stops when start is 0. So the while loop runs while start is not 0: <code>while start != 0:</code>",
        "Inside the loop (8 spaces, because it is inside a function): <code>total = total + start</code> and then <code>start = start - 1</code>.",
        "Keep <code>return total</code> after the loop, with 4 spaces."
      ]
    }
  ]
});
