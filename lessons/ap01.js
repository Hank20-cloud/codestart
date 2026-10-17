// AP CSP, chapter 1 — Big Idea 1 (Creative Development): collaboration, program function and purpose,
// the development process, and finding and fixing errors. Pseudocode follows the AP Exam Reference Sheet.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap01", {
  intro: `
    <p><strong>AP CSP</strong> (Advanced Placement Computer Science Principles) is a course from the College Board.
    The course has five <strong>Big Ideas</strong>. This chapter is Big Idea 1: <strong>Creative Development</strong>.</p>
    <p>It is about <em>how</em> people make programs: how they work together, how they plan,
    and how they find and fix mistakes. You need very little code for this chapter.</p>
  `,
  lessons: [
    {
      id: "ap01-l1",
      title: "Working together",
      html: `
        <p>Most programs are not made by one person. They are made by teams. This is called <strong>collaboration</strong>.</p>
        <p>A team with <strong>diverse perspectives</strong> often makes better programs. "Diverse perspectives"
        means people with different backgrounds, skills, ages, languages, and life experiences.
        Each person notices different problems and has different ideas.</p>
        <div class="tip"><strong>Example:</strong> a team builds a map app. One team member uses a wheelchair.
        She notices that the app shows routes with stairs. The team adds a "no stairs" option.
        Without her, nobody on the team would have seen this problem.</div>
        <p>Collaboration also helps to <strong>avoid bias</strong>. Bias is when a program is unfair to some groups of people,
        often by accident. When many different people test and talk about a program, unfair parts are found earlier.</p>
        <p><strong>Pair programming</strong> is a common way to work together. Two people share one computer:</p>
        <table>
          <tr><th>Role</th><th>What the person does</th></tr>
          <tr><td><strong>Driver</strong></td><td>types the code</td></tr>
          <tr><td><strong>Navigator</strong></td><td>reads each line, looks for mistakes, and thinks about the next steps</td></tr>
        </table>
        <p>The two people change roles often. Other good habits for teams:</p>
        <ul>
          <li>Talk and listen. Give helpful feedback in a polite way.</li>
          <li>Ask the users what they need, for example with surveys or interviews.</li>
          <li>Use online tools to share code and work together from different places.</li>
        </ul>
      `
    },
    {
      id: "ap01-l2",
      title: "What a program does",
      html: `
        <p>Every program has a <strong>purpose</strong>: the problem it solves or the thing it lets people do.
        For example, the purpose of a calculator app is to do math quickly.</p>
        <p>A program works with <strong>inputs</strong> and <strong>outputs</strong>:</p>
        <table>
          <tr><th>Word</th><th>Meaning</th><th>Examples</th></tr>
          <tr><td><strong>Input</strong></td><td>data that goes <em>into</em> the program</td><td>typed text, a mouse click, a photo, data from a sensor or from another program</td></tr>
          <tr><td><strong>Output</strong></td><td>data that comes <em>out of</em> the program</td><td>text on the screen, a sound, a picture, a vibration of the phone</td></tr>
        </table>
        <p>An <strong>event</strong> is an action that makes some code run, for example a key press,
        a click on a button, or a timer that ends. Programs that wait for events and then react are called
        <strong>event-driven</strong> programs. Most apps work this way.</p>
        <pre><code>Event:   the user taps the "Play" button
Input:   the tap, and which song is selected
Output:  the song plays and the screen shows its name</code></pre>
        <p>The <strong>behavior</strong> of a program is what it does while it runs, and how the user can interact with it.
        You can often describe the behavior without showing any code.</p>
        <p>A <strong>code segment</strong> is a part of a program, for example a few lines. Each line is a
        <strong>statement</strong>: one instruction for the computer.</p>
      `
    },
    {
      id: "ap01-l3",
      title: "The development process",
      html: `
        <p>Programmers do not just start typing. They follow a <strong>development process</strong> with these steps:</p>
        <ol>
          <li><strong>Investigate:</strong> find out what the users need. Use surveys, interviews, or watch people work.
          Write down the <strong>requirements</strong>: what the program must do.</li>
          <li><strong>Design:</strong> plan the program. Make drawings of the screens, list the steps, split the big problem into smaller parts.</li>
          <li><strong>Prototype:</strong> build a first, simple version that works.</li>
          <li><strong>Test:</strong> try the program, find problems, and get feedback from users.</li>
        </ol>
        <p>There are two ways to move through these steps:</p>
        <table>
          <tr><th>Process</th><th>Meaning</th></tr>
          <tr><td><strong>Iterative</strong></td><td>You go through the steps many times. After each test, you go back, improve the program, and test again.</td></tr>
          <tr><td><strong>Incremental</strong></td><td>You build the program in small pieces. You make one piece work, then add the next piece.</td></tr>
        </table>
        <div class="tip"><strong>Remember:</strong> <em>iterative</em> means "repeat the cycle and make it better".
        <em>Incremental</em> means "add one small piece at a time". Teams often use both.</div>
        <p><strong>Documentation</strong> is text that explains how a program works and how to use it.
        <strong>Comments</strong> are notes inside the code. The computer skips them. They help other people
        (and you, later) understand the code. Write documentation <em>while</em> you build, not only at the end.</p>
        <p>When you use code that <strong>someone else wrote</strong>, you must say so. Write a comment with the
        name of the author or the place where you found it. For example, in Python a comment starts with <code>#</code>:</p>
        <pre><code># The sort procedure below is from the website example.com, written by Ana Ruiz.</code></pre>
        <p>Using someone's code without giving credit is like copying homework. It is not honest.</p>
      `
    },
    {
      id: "ap01-l4",
      title: "Finding and fixing errors",
      html: `
        <p>Every programmer makes mistakes. A mistake in a program is often called a <strong>bug</strong>.
        Finding and fixing bugs is called <strong>debugging</strong>. The AP exam names four kinds of errors:</p>
        <table>
          <tr><th>Error</th><th>What happens</th><th>Example</th></tr>
          <tr><td><strong>Syntax error</strong></td><td>The code breaks the rules of the language. The program does not run at all.</td><td><code>DISPLAY("Hi"</code> (the closing bracket is missing)</td></tr>
          <tr><td><strong>Runtime error</strong></td><td>The program starts, but stops with an error while it runs.</td><td>dividing by zero</td></tr>
          <tr><td><strong>Logic error</strong></td><td>The program runs without any message, but the result is wrong.</td><td><code>avg ← a + b / 2</code> instead of <code>avg ← (a + b) / 2</code></td></tr>
          <tr><td><strong>Overflow error</strong></td><td>A number is too big for the space the computer has to store it.</td><td>a counter that only has room for numbers up to 255 gets 256</td></tr>
        </table>
        <div class="tip">A <strong>logic error</strong> is the hardest to find, because nothing tells you about it.
        You only see it when you check the result.</div>
        <p><strong>Test cases</strong> help you find errors. A test case is an input together with the output you expect.
        Good test cases include <strong>boundary values</strong>: the values at the edges, where the behavior changes.</p>
        <p>Example: a program says "teen" for ages 13 to 19. Good test inputs are <code>12</code>, <code>13</code>,
        <code>19</code>, and <code>20</code>. Many bugs hide exactly at these edges, for example
        <code>&gt;</code> written where <code>≥</code> was needed.</p>
        <p>Ways to find a bug:</p>
        <ul>
          <li><strong>Hand tracing:</strong> go through the code line by line on paper. Write down the value of every variable after each line.</li>
          <li><strong>Extra DISPLAY statements:</strong> add <code>DISPLAY(x)</code> in the middle of the code to see the value of x at that moment. Remove them when the bug is fixed.</li>
          <li><strong>More test cases:</strong> try normal values, boundary values, and strange values.</li>
          <li><strong>A debugger:</strong> a tool that runs the program one line at a time.</li>
        </ul>
      `
    }
  ],
  exercises: [
    {
      id: "ap01-ex1",
      title: "Pair programming",
      type: "mc",
      instructions: `<p>Two students do pair programming. In this method, what is the job of the <strong>navigator</strong>?</p>`,
      choices: [
        "To type all of the code",
        "To work on a different part of the program on a second computer",
        "To review each line as it is typed, look for mistakes, and think about the next steps",
        "To test the program only after the driver has finished all the code"
      ],
      answer: 2,
      explain: "The driver types. The navigator watches and reviews the code, finds mistakes early, and plans ahead. They share one computer.",
      hints: [
        "In pair programming, there is one computer and two roles.",
        "The person who types is called the driver. What does the other person do at the same time?"
      ]
    },
    {
      id: "ap01-ex2",
      title: "Find the event",
      type: "mc",
      instructions: `
        <p>A weather app works like this: when the user taps the <em>Refresh</em> button, the app downloads
        new data and shows today's temperature on the screen.</p>
        <p>Which part is the <strong>event</strong>?</p>
      `,
      choices: [
        "The user taps the Refresh button",
        "Today's temperature on the screen",
        "The purpose of the app",
        "The weather data that is downloaded"
      ],
      answer: 0,
      explain: "An event is an action that makes code run. The tap on the button starts the download. The temperature on the screen is an output.",
      hints: [
        "An event is an action that makes some code start to run.",
        "What happens first, before anything else in the app changes?"
      ]
    },
    {
      id: "ap01-ex3",
      title: "Iterative or incremental?",
      type: "mc",
      instructions: `
        <p>A team makes a game. First they make only the player move. When that works, they add enemies.
        When that works, they add a score.</p>
        <p>Which word best describes this way of working?</p>
      `,
      choices: [
        "Iterative: they repeat the whole cycle and improve the game after each round of feedback",
        "Incremental: they build the game in small pieces and add one piece at a time",
        "Prototyping: they only build a simple version and never finish the game",
        "Pair programming: two people share one computer"
      ],
      answer: 1,
      explain: "The team adds one working piece at a time (moving, then enemies, then the score). That is incremental development.",
      hints: [
        "Look at what the team does each time: improve the same thing, or add something new?",
        "\"Increment\" means a small step that adds something."
      ]
    },
    {
      id: "ap01-ex4",
      title: "Code from someone else",
      type: "mc",
      instructions: `
        <p>Maya finds a useful procedure on a website and uses it in her program.
        What should she do?</p>
      `,
      choices: [
        "Nothing. Code on a website is free to use without any note.",
        "Change the variable names, so the code becomes her own.",
        "Delete the procedure before she shows her program to anyone.",
        "Add a comment that names the author or the website where she found the code."
      ],
      answer: 3,
      explain: "When you use code written by someone else, you must give credit, for example in a comment with the author or the source. Changing names does not make the code yours.",
      hints: [
        "Think about honesty. Who really wrote this code?",
        "Programmers use comments to give credit to the person or place the code came from."
      ]
    },
    {
      id: "ap01-ex5",
      title: "What kind of error?",
      type: "mc",
      instructions: `
        <p>This code is part of a program. The user has entered no scores yet, so <code>count</code> is <code>0</code>.</p>
        <pre><code>total ← 0
count ← 0
DISPLAY(total / count)</code></pre>
        <p>The program starts, but stops with an error message on the last line. What kind of error is this?</p>
      `,
      choices: ["A syntax error", "A logic error", "A runtime error", "An overflow error"],
      answer: 2,
      explain: "The code follows the rules of the language, and the program starts. It stops while it runs, because you cannot divide by zero. That is a runtime error.",
      hints: [
        "Is there a spelling or bracket mistake in the code? If not, it is not a syntax error.",
        "The program starts and then stops with an error while it is running. Which error happens \"at run time\"?"
      ]
    },
    {
      id: "ap01-ex6",
      title: "Test the edges",
      type: "mc",
      instructions: `
        <p>A cinema program should give a discount to people aged <strong>65 or older</strong>. A student wrote:</p>
        <pre><code>IF (age &gt; 65)
{
   DISPLAY("Discount")
}</code></pre>
        <p>Which set of test inputs is the <strong>best</strong> for finding the bug in this code?</p>
      `,
      choices: [
        "<code>20</code>, <code>30</code>, <code>40</code>",
        "<code>64</code>, <code>65</code>, <code>66</code>",
        "<code>70</code>, <code>80</code>, <code>90</code>",
        "<code>0</code>, <code>100</code>, <code>1000</code>"
      ],
      answer: 1,
      explain: "64, 65, and 66 are boundary values. With 65, the code shows nothing, but it should show Discount. So the bug is found: the condition should be age ≥ 65.",
      hints: [
        "Bugs often hide at the edge, where the answer changes from \"no discount\" to \"discount\".",
        "Where is the edge in this problem? Test values just below, at, and just above it."
      ]
    },
    {
      id: "ap01-ex7",
      title: "Ways to find bugs (select two)",
      type: "mc",
      instructions: `
        <p>A program gives a wrong result, but there is no error message.
        Which <strong>two</strong> actions are good ways to find the bug? Select two answers.</p>
      `,
      choices: [
        "Hand trace the code and write down the value of each variable after each line",
        "Delete lines one by one until the result looks right",
        "Add DISPLAY statements to show the values of variables while the program runs",
        "Run the program again many times with the same input and hope the result changes"
      ],
      answer: [0, 2],
      explain: "Hand tracing and extra DISPLAY statements both show you the values of the variables, so you can see where they first become wrong.",
      hints: [
        "A good method shows you what happens inside the program.",
        "Which two choices let you see the values of the variables?"
      ]
    },
    {
      id: "ap01-ex8",
      title: "Fix the logic error",
      type: "py",
      instructions: `
        <p>This Python program should show the average of three numbers. The average of 4, 6, and 8 is <code>6.0</code>.
        The program runs, but it shows a wrong number. This is a <strong>logic error</strong>.</p>
        <p>Find the bug and fix it. Do not change the numbers in a, b, and c.</p>
      `,
      starterCode: "a = 4\nb = 6\nc = 8\naverage = a + b + c / 3\nprint(average)\n",
      solution: "a = 4\nb = 6\nc = 8\naverage = (a + b + c) / 3\nprint(average)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('a') === 4 && R.get('b') === 6 && R.get('c') === 8", message: "Keep a = 4, b = 6, and c = 8. The bug is in the line with average." },
        { check: "Math.abs(R.get('average') - 6) < 0.001", message: "average should be 6.0. Python divides before it adds. Which part should happen first?" },
        { check: "/average\\s*=.*\\ba\\b/.test(R.code) && /average\\s*=.*\\bb\\b/.test(R.code) && /average\\s*=.*\\bc\\b/.test(R.code)", message: "Calculate the average from a, b, and c. Do not just write the number 6." },
        { check: "R.line('6.0')", message: "Print the average." }
      ],
      hints: [
        "Run the program. What number does it show? Is it bigger than all three numbers?",
        "Like in math, division happens before addition. So only c is divided by 3.",
        "Put brackets around the addition: <code>(a + b + c) / 3</code>"
      ]
    }
  ]
});
