// Final projects: number guessing game, quiz app, to-do list.
// Lesson and exercise html is written by the course author (trusted content).
// Each step's solution is the whole web page after that step. The page() helper below builds it,
// so every step uses the same page skeleton.
(function () {
  // Adds spaces in front of every line that is not empty.
  function indent(text, spaces) {
    var pad = new Array(spaces + 1).join(" ");
    return text.split("\n").map(function (line) { return line ? pad + line : line; }).join("\n");
  }

  // Builds one complete HTML page from its CSS, body HTML, and JavaScript.
  function page(title, css, body, script) {
    return "<!doctype html>\n" +
      "<html>\n" +
      "<head>\n" +
      "  <meta charset=\"utf-8\">\n" +
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
      "  <title>" + title + "</title>\n" +
      "  <style>\n" + indent(css.trim(), 4) + "\n  </style>\n" +
      "</head>\n" +
      "<body>\n" + indent(body.trim(), 2) + "\n\n" +
      "  <script>\n" + indent(script.trim(), 4) + "\n  </script>\n" +
      "</body>\n" +
      "</html>\n";
  }

  var EMPTY_CSS = "/* Your CSS goes here */";
  var EMPTY_BODY = "<!-- Your HTML goes here -->";
  var EMPTY_JS = "// Your JavaScript goes here";

  // ==============================================================================================
  // Project 1: Number guessing game
  // ==============================================================================================

  var GAME_TITLE = "Guess the Number";

  var GAME_BODY_1 = `
<h1>Guess the Number</h1>
<p>I am thinking of a number between 1 and 100. Can you guess it?</p>
<input id="guess" type="number" min="1" max="100">
<button id="guess-btn">Guess</button>
<p id="message"></p>
`;

  var GAME_BODY_4 = `
<h1>Guess the Number</h1>
<p>I am thinking of a number between 1 and 100. Can you guess it?</p>
<input id="guess" type="number" min="1" max="100">
<button id="guess-btn">Guess</button>
<p id="message"></p>
<p>Guesses: <span id="count">0</span></p>
`;

  var GAME_BODY_5 = `
<h1>Guess the Number</h1>
<p>I am thinking of a number between 1 and 100. Can you guess it?</p>
<input id="guess" type="number" min="1" max="100">
<button id="guess-btn">Guess</button>
<p id="message"></p>
<p>Guesses: <span id="count">0</span></p>
<button id="again">Play again</button>
`;

  var GAME_JS_2 = `
let secret = Math.floor(Math.random() * 100) + 1;

const input = document.querySelector("#guess");
const button = document.querySelector("#guess-btn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  const number = Number(input.value);
  message.textContent = "You guessed " + number;
});
`;

  var GAME_JS_3 = `
let secret = Math.floor(Math.random() * 100) + 1;

const input = document.querySelector("#guess");
const button = document.querySelector("#guess-btn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  const number = Number(input.value);
  if (number > secret) {
    message.textContent = "Too high! Try a smaller number.";
  } else if (number < secret) {
    message.textContent = "Too low! Try a bigger number.";
  } else {
    message.textContent = "Correct! You found my number.";
  }
});
`;

  var GAME_JS_4 = `
let secret = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const input = document.querySelector("#guess");
const button = document.querySelector("#guess-btn");
const message = document.querySelector("#message");
const count = document.querySelector("#count");

button.addEventListener("click", function () {
  const number = Number(input.value);
  guesses = guesses + 1;
  count.textContent = guesses;
  if (number > secret) {
    message.textContent = "Too high! Try a smaller number.";
  } else if (number < secret) {
    message.textContent = "Too low! Try a bigger number.";
  } else {
    message.textContent = "Correct! You needed " + guesses + " guesses.";
  }
});
`;

  var GAME_JS_5 = `
let secret = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const input = document.querySelector("#guess");
const button = document.querySelector("#guess-btn");
const message = document.querySelector("#message");
const count = document.querySelector("#count");
const again = document.querySelector("#again");

button.addEventListener("click", function () {
  const number = Number(input.value);
  guesses = guesses + 1;
  count.textContent = guesses;
  if (number > secret) {
    message.textContent = "Too high! Try a smaller number.";
  } else if (number < secret) {
    message.textContent = "Too low! Try a bigger number.";
  } else {
    message.textContent = "Correct! You needed " + guesses + " guesses.";
  }
});

again.addEventListener("click", function () {
  secret = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  count.textContent = guesses;
  message.textContent = "";
  input.value = "";
});
`;

  var GAME_CSS_6 = `
body {
  font-family: Arial, sans-serif;
  background-color: #1e3a5f;
  color: white;
  text-align: center;
  padding: 40px 16px;
}

input {
  font-size: 20px;
  padding: 8px;
  width: 120px;
  border-radius: 8px;
  border: none;
}

button {
  font-size: 18px;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background-color: #ffb703;
  cursor: pointer;
}

button:hover {
  background-color: #ffd166;
}

#message {
  font-size: 24px;
  font-weight: bold;
}
`;

  var game1 = page(GAME_TITLE, EMPTY_CSS, GAME_BODY_1, EMPTY_JS);
  var game2 = page(GAME_TITLE, EMPTY_CSS, GAME_BODY_1, GAME_JS_2);
  var game3 = page(GAME_TITLE, EMPTY_CSS, GAME_BODY_1, GAME_JS_3);
  var game4 = page(GAME_TITLE, EMPTY_CSS, GAME_BODY_4, GAME_JS_4);
  var game5 = page(GAME_TITLE, EMPTY_CSS, GAME_BODY_5, GAME_JS_5);
  var game6 = page(GAME_TITLE, GAME_CSS_6, GAME_BODY_5, GAME_JS_5);

  addChapterContent("proj-game", {
    intro: `
      <p>In this project you build a <strong>number guessing game</strong>. The computer picks a secret
      number between 1 and 100. The player types a guess and presses a button. The game says
      <strong>"Too high"</strong>, <strong>"Too low"</strong>, or <strong>"Correct!"</strong>.</p>
      <p>The finished game will:</p>
      <ul>
        <li>pick a new secret number each time you play,</li>
        <li>give a hint after every guess,</li>
        <li>count how many guesses you needed,</li>
        <li>have a <strong>Play again</strong> button,</li>
        <li>look nice, with your own colors.</li>
      </ul>
      <p>You build it in small steps. <strong>Each step builds on the last one</strong>: your code from the
      step before is already in the editor when you start the next step.</p>
      <div class="tip">At the end, press <strong>Download my project</strong>. You get one HTML file that
      you can open in any browser, or send to a friend so they can play.</div>
    `,
    lessons: [],
    exercises: [
      {
        id: "proj-game-s1",
        title: "Step 1: Build the game page",
        type: "html",
        instructions: `
          <p>First, build the parts of the page that the player sees. You get a page skeleton with
          places for CSS, HTML, and JavaScript. In this step you only write HTML.</p>
          <p>Inside <code>&lt;body&gt;</code>, above the <code>&lt;script&gt;</code>, add:</p>
          <ul>
            <li>an <code>&lt;h1&gt;</code> with a title for your game (you choose the words),</li>
            <li>a <code>&lt;p&gt;</code> that tells the player what to do,</li>
            <li>an <code>&lt;input&gt;</code> where the player types a number. Give it
              <code>id="guess"</code> and <code>type="number"</code>,</li>
            <li>a <code>&lt;button&gt;</code> with the text <strong>Guess</strong> and
              <code>id="guess-btn"</code>,</li>
            <li>an empty paragraph <code>&lt;p id="message"&gt;&lt;/p&gt;</code>. Later the game writes its
              messages here.</li>
          </ul>
          <p>Nothing happens when you click the button yet. That comes next.</p>
        `,
        starterCode: page(GAME_TITLE, EMPTY_CSS, EMPTY_BODY, EMPTY_JS),
        solution: game1,
        tests: [
          { check: "CS.q('h1') !== null && CS.text('h1') !== ''", message: "Add an <h1> heading with a title for your game." },
          { check: "CS.q('input#guess') !== null", message: "I can't find an <input> with id=\"guess\"." },
          { check: "CS.q('button#guess-btn') !== null", message: "I can't find a <button> with id=\"guess-btn\"." },
          { check: "CS.q('#message') !== null", message: "Add an empty paragraph with id=\"message\": <p id=\"message\"></p>" }
        ],
        hints: [
          "Write your HTML between <code>&lt;body&gt;</code> and <code>&lt;script&gt;</code>. You can replace the comment <code>&lt;!-- Your HTML goes here --&gt;</code>.",
          "An id goes inside the opening tag, like this: <code>&lt;button id=\"guess-btn\"&gt;</code>.",
          "The input looks like this: <code>&lt;input id=\"guess\" type=\"number\"&gt;</code>. It has no closing tag."
        ]
      },
      {
        id: "proj-game-s2",
        title: "Step 2: Pick a secret number",
        type: "html",
        instructions: `
          <p>Now the computer picks its secret number. Write all JavaScript in this project inside the
          <code>&lt;script&gt;</code> tag at the bottom of the page.</p>
          <ol>
            <li>Create a variable named <code>secret</code> with a random whole number from 1 to 100.
              Use <code>let</code>, because later the game will change it:
              <pre><code>let secret = Math.floor(Math.random() * 100) + 1;</code></pre>
              <code>Math.random()</code> gives a number from 0 up to (but not including) 1.
              Times 100, round down, plus 1: now it is 1 to 100.</li>
            <li>Find the input, the button, and the message paragraph with
              <code>document.querySelector</code> and keep them in variables.</li>
            <li>When the player clicks the Guess button, read the number from the input and show
              <strong>You guessed</strong> and the number in <code>#message</code>. For example: "You guessed 42".</li>
          </ol>
          <p>Use <code>Number(input.value)</code> to turn the text from the input into a number.</p>
        `,
        carry: true,
        starterCode: game1,
        solution: game2,
        tests: [
          { check: "typeof secret === 'number' && Number.isInteger(secret)", message: "Create a variable named secret with a whole number in it. Use Math.floor and Math.random." },
          { check: "secret >= 1 && secret <= 100", message: "The secret number must be from 1 to 100. Did you add + 1 at the end?" },
          { check: "CS.type('#guess', '42') && CS.click('#guess-btn') && CS.text('#message').includes('42')", message: "When I type 42 and click Guess, #message should show the number 42." }
        ],
        hints: [
          "Copy the <code>let secret = ...</code> line into your <code>&lt;script&gt;</code>.",
          "Find the elements like this: <code>const button = document.querySelector(\"#guess-btn\");</code>. Do the same for <code>#guess</code> and <code>#message</code>.",
          "Inside <code>button.addEventListener(\"click\", function () { ... });</code> read <code>Number(input.value)</code> and set <code>message.textContent</code> to <code>\"You guessed \" + number</code>."
        ]
      },
      {
        id: "proj-game-s3",
        title: "Step 3: Too high or too low?",
        type: "html",
        instructions: `
          <p>Now make it a real game. When the player clicks Guess, compare their number with
          <code>secret</code>:</p>
          <ul>
            <li>If the number is bigger than <code>secret</code>, show a message that starts with
              <strong>Too high</strong>.</li>
            <li>If the number is smaller than <code>secret</code>, show a message that starts with
              <strong>Too low</strong>.</li>
            <li>Otherwise the player found it: show a message that starts with <strong>Correct!</strong></li>
          </ul>
          <p>You can add more words after these, for example "Too high! Try a smaller number."
          Replace the "You guessed" message from step 2.</p>
          <div class="tip">To test your game, you can add <code>console.log(secret);</code> for a moment to
          see the secret number. Remove it when you are done, so players can't cheat!</div>
        `,
        carry: true,
        starterCode: game2,
        solution: game3,
        tests: [
          { check: "CS.type('#guess', String(secret + 1)) && CS.click('#guess-btn') && CS.text('#message').includes('Too high')", message: "When the guess is bigger than secret, #message should say \"Too high\"." },
          { check: "CS.type('#guess', String(secret - 1)) && CS.click('#guess-btn') && CS.text('#message').includes('Too low')", message: "When the guess is smaller than secret, #message should say \"Too low\"." },
          { check: "CS.type('#guess', String(secret)) && CS.click('#guess-btn') && CS.text('#message').includes('Correct!')", message: "When the guess is the same as secret, #message should say \"Correct!\"." }
        ],
        hints: [
          "You need <code>if</code>, <code>else if</code>, and <code>else</code> inside the click function.",
          "The first test is <code>if (number &gt; secret) { ... }</code>. The second is <code>else if (number &lt; secret) { ... }</code>.",
          "Capital letters matter: write <code>Too high</code>, <code>Too low</code>, and <code>Correct!</code> exactly like this."
        ]
      },
      {
        id: "proj-game-s4",
        title: "Step 4: Count the guesses",
        type: "html",
        instructions: `
          <p>Players like to know how well they did. Count every guess.</p>
          <ol>
            <li>In the HTML, under the message, add:
              <pre><code>&lt;p&gt;Guesses: &lt;span id="count"&gt;0&lt;/span&gt;&lt;/p&gt;</code></pre>
              The <code>&lt;span&gt;</code> holds only the number.</li>
            <li>In the JavaScript, create a variable <code>guesses</code> that starts at 0.</li>
            <li>Every time the player clicks Guess, add 1 to <code>guesses</code> and show it in
              <code>#count</code>.</li>
          </ol>
          <p>Extra idea: in the "Correct!" message, also say how many guesses the player needed.</p>
        `,
        carry: true,
        starterCode: game3,
        solution: game4,
        tests: [
          { check: "CS.text('#count') === '0'", message: "Add a <span id=\"count\">0</span> that shows 0 when the page opens." },
          { check: "CS.type('#guess', '50') && CS.click('#guess-btn') && CS.text('#count') === '1'", message: "After one guess, #count should show 1." },
          { check: "CS.click('#guess-btn') && CS.click('#guess-btn') && CS.text('#count') === '3'", message: "After three guesses, #count should show 3. Add 1 every time the button is clicked." }
        ],
        hints: [
          "Create the counter at the top of your script, next to <code>secret</code>: <code>let guesses = 0;</code>",
          "Find the span with <code>document.querySelector(\"#count\")</code>.",
          "Inside the click function, write <code>guesses = guesses + 1;</code> and then put <code>guesses</code> into the span's <code>textContent</code>."
        ]
      },
      {
        id: "proj-game-s5",
        title: "Step 5: Play again",
        type: "html",
        instructions: `
          <p>After a game, the player wants to play again without reloading the page.</p>
          <ol>
            <li>Add a button with the text <strong>Play again</strong> and <code>id="again"</code>.</li>
            <li>When it is clicked, start a new game:
              <ul>
                <li>pick a <strong>new</strong> secret number (give <code>secret</code> a new random value),</li>
                <li>set <code>guesses</code> back to 0 and show 0 in <code>#count</code>,</li>
                <li>make <code>#message</code> empty (<code>""</code>),</li>
                <li>make the input empty.</li>
              </ul>
            </li>
          </ol>
        `,
        carry: true,
        starterCode: game4,
        solution: game5,
        tests: [
          { check: "CS.q('#again') !== null", message: "Add a button with id=\"again\"." },
          { check: "CS.type('#guess', String(secret + 1)) && CS.click('#guess-btn') && CS.click('#again') && CS.text('#count') === '0'", message: "After I click Play again, #count should show 0 again." },
          { check: "CS.text('#message') === '' && CS.q('#guess').value === ''", message: "After I click Play again, #message and the input should be empty." },
          { check: "(function () { Math.random = function () { return 0.25; }; CS.click('#again'); var first = secret; Math.random = function () { return 0.75; }; CS.click('#again'); return first !== secret; })()", message: "Play again should pick a new secret number. Give secret a new Math.random() value inside the click function." }
        ],
        hints: [
          "Find the new button with <code>document.querySelector(\"#again\")</code> and add a click listener to it.",
          "Do not write <code>let</code> again inside the function. Write <code>secret = ...</code> to change the variable you already have.",
          "To empty things, set <code>message.textContent = \"\";</code> and <code>input.value = \"\";</code>. Remember to also update the text in <code>#count</code>."
        ]
      },
      {
        id: "proj-game-s6",
        title: "Step 6: Make it look great",
        type: "html",
        instructions: `
          <p>Your game works! Now give it style. Write CSS inside the <code>&lt;style&gt;</code> tag in the
          <code>&lt;head&gt;</code>. Your design is up to you, but please do at least these three things:</p>
          <ul>
            <li>Give the <code>body</code> a <code>background-color</code>.</li>
            <li>Give the buttons round corners with <code>border-radius</code> (for example <code>8px</code>).</li>
            <li>Make the message bigger: <code>#message</code> needs a <code>font-size</code> of at least <code>20px</code>.</li>
          </ul>
          <p>More ideas: center everything with <code>text-align: center</code>, choose a nice font, add
          <code>padding</code> to the buttons, change the button color when the mouse is over it with
          <code>button:hover</code>.</p>
          <div class="tip">You are done! Press <strong>Download my project</strong> to save your game as one
          HTML file. Double-click the file to play it in your browser.</div>
        `,
        carry: true,
        starterCode: game5,
        solution: game6,
        tests: [
          { check: "CS.css('body', 'background-color') !== 'rgba(0, 0, 0, 0)'", message: "Give the body a background-color." },
          { check: "parseFloat(CS.css('#guess-btn', 'border-top-left-radius')) > 0", message: "Give the buttons round corners with border-radius." },
          { check: "parseFloat(CS.css('#message', 'font-size')) >= 20", message: "Make #message bigger: font-size of at least 20px." }
        ],
        hints: [
          "A CSS rule looks like this: <code>body { background-color: navy; }</code>",
          "One rule for <code>button { ... }</code> styles both buttons at once.",
          "For the message, use the id selector: <code>#message { font-size: 24px; }</code>. If the background is dark, also change the text <code>color</code> so you can still read it."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 2: Quiz app
  // ==============================================================================================

  var QUIZ_TITLE = "My Quiz";

  var QUIZ_CSS = `
body {
  font-family: Arial, sans-serif;
  background-color: #f0f4ff;
  color: #222;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px 16px;
}

#question {
  font-size: 22px;
  font-weight: bold;
}

#answers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  font-size: 18px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #4361ee;
  color: white;
  cursor: pointer;
}

#feedback {
  font-size: 20px;
}
`;

  var QUIZ_CSS_7 = QUIZ_CSS + `
#again {
  display: none;
}
`;

  var QUIZ_BODY_1 = `
<h1>Space Quiz</h1>
<p id="question"></p>
<div id="answers"></div>
<p id="feedback"></p>
<p>Score: <span id="score">0</span></p>
`;

  var QUIZ_BODY_5 = `
<h1>Space Quiz</h1>
<p id="question"></p>
<div id="answers"></div>
<p id="feedback"></p>
<p>Score: <span id="score">0</span></p>
<button id="next">Next question</button>
`;

  var QUIZ_BODY_7 = `
<h1>Space Quiz</h1>
<p id="question"></p>
<div id="answers"></div>
<p id="feedback"></p>
<p>Score: <span id="score">0</span></p>
<button id="next">Next question</button>
<button id="again">Try again</button>
`;

  var QUIZ_DATA = `
const questions = [
  {
    question: "What is the biggest planet?",
    answers: ["Earth", "Jupiter", "Mars"],
    correct: 1
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Mercury", "Venus", "Saturn"],
    correct: 0
  },
  {
    question: "How many moons does Earth have?",
    answers: ["None", "Two", "One"],
    correct: 2
  }
];
`;

  var QUIZ_JS_2 = QUIZ_DATA;

  var QUIZ_JS_3 = QUIZ_DATA + `
let current = 0;

const questionText = document.querySelector("#question");
const answersBox = document.querySelector("#answers");

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;
  answersBox.textContent = "";
  for (let i = 0; i < q.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = q.answers[i];
    answersBox.appendChild(button);
  }
}

showQuestion();
`;

  var QUIZ_JS_4 = QUIZ_DATA + `
let current = 0;
let score = 0;
let answered = false;

const questionText = document.querySelector("#question");
const answersBox = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const scoreText = document.querySelector("#score");

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;
  answersBox.textContent = "";
  answered = false;
  for (let i = 0; i < q.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = q.answers[i];
    button.addEventListener("click", function () {
      checkAnswer(i);
    });
    answersBox.appendChild(button);
  }
}

function checkAnswer(i) {
  if (answered) {
    return;
  }
  answered = true;
  const q = questions[current];
  if (i === q.correct) {
    score = score + 1;
    scoreText.textContent = score;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong. The answer was: " + q.answers[q.correct];
  }
}

showQuestion();
`;

  var QUIZ_JS_5 = QUIZ_DATA + `
let current = 0;
let score = 0;
let answered = false;

const questionText = document.querySelector("#question");
const answersBox = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const scoreText = document.querySelector("#score");
const nextButton = document.querySelector("#next");

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;
  answersBox.textContent = "";
  feedback.textContent = "";
  answered = false;
  for (let i = 0; i < q.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = q.answers[i];
    button.addEventListener("click", function () {
      checkAnswer(i);
    });
    answersBox.appendChild(button);
  }
}

function checkAnswer(i) {
  if (answered) {
    return;
  }
  answered = true;
  const q = questions[current];
  if (i === q.correct) {
    score = score + 1;
    scoreText.textContent = score;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong. The answer was: " + q.answers[q.correct];
  }
}

nextButton.addEventListener("click", function () {
  current = current + 1;
  showQuestion();
});

showQuestion();
`;

  var QUIZ_JS_6 = QUIZ_DATA + `
let current = 0;
let score = 0;
let answered = false;

const questionText = document.querySelector("#question");
const answersBox = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const scoreText = document.querySelector("#score");
const nextButton = document.querySelector("#next");

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;
  answersBox.textContent = "";
  feedback.textContent = "";
  answered = false;
  for (let i = 0; i < q.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = q.answers[i];
    button.addEventListener("click", function () {
      checkAnswer(i);
    });
    answersBox.appendChild(button);
  }
}

function checkAnswer(i) {
  if (answered) {
    return;
  }
  answered = true;
  const q = questions[current];
  if (i === q.correct) {
    score = score + 1;
    scoreText.textContent = score;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong. The answer was: " + q.answers[q.correct];
  }
}

function showEnd() {
  questionText.textContent = "You finished the quiz!";
  answersBox.textContent = "";
  feedback.textContent = "Your final score: " + score + " out of " + questions.length;
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", function () {
  current = current + 1;
  if (current < questions.length) {
    showQuestion();
  } else {
    showEnd();
  }
});

showQuestion();
`;

  var QUIZ_JS_7 = QUIZ_DATA + `
let current = 0;
let score = 0;
let answered = false;

const questionText = document.querySelector("#question");
const answersBox = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const scoreText = document.querySelector("#score");
const nextButton = document.querySelector("#next");
const againButton = document.querySelector("#again");

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;
  answersBox.textContent = "";
  feedback.textContent = "";
  answered = false;
  for (let i = 0; i < q.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = q.answers[i];
    button.addEventListener("click", function () {
      checkAnswer(i);
    });
    answersBox.appendChild(button);
  }
}

function checkAnswer(i) {
  if (answered) {
    return;
  }
  answered = true;
  const q = questions[current];
  if (i === q.correct) {
    score = score + 1;
    scoreText.textContent = score;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong. The answer was: " + q.answers[q.correct];
  }
}

function showEnd() {
  questionText.textContent = "You finished the quiz!";
  answersBox.textContent = "";
  feedback.textContent = "Your final score: " + score + " out of " + questions.length;
  nextButton.style.display = "none";
  againButton.style.display = "inline-block";
}

nextButton.addEventListener("click", function () {
  current = current + 1;
  if (current < questions.length) {
    showQuestion();
  } else {
    showEnd();
  }
});

againButton.addEventListener("click", function () {
  current = 0;
  score = 0;
  scoreText.textContent = score;
  nextButton.style.display = "inline-block";
  againButton.style.display = "none";
  showQuestion();
});

showQuestion();
`;

  var quiz1 = page(QUIZ_TITLE, QUIZ_CSS, QUIZ_BODY_1, EMPTY_JS);
  var quiz2 = page(QUIZ_TITLE, QUIZ_CSS, QUIZ_BODY_1, QUIZ_JS_2);
  var quiz3 = page(QUIZ_TITLE, QUIZ_CSS, QUIZ_BODY_1, QUIZ_JS_3);
  var quiz4 = page(QUIZ_TITLE, QUIZ_CSS, QUIZ_BODY_1, QUIZ_JS_4);
  var quiz5 = page(QUIZ_TITLE, QUIZ_CSS, QUIZ_BODY_5, QUIZ_JS_5);
  var quiz6 = page(QUIZ_TITLE, QUIZ_CSS, QUIZ_BODY_5, QUIZ_JS_6);
  var quiz7 = page(QUIZ_TITLE, QUIZ_CSS_7, QUIZ_BODY_7, QUIZ_JS_7);

  // Check code that plays the whole quiz: a wrong answer on question 1, then right answers,
  // clicking "Next" after each question.
  var PLAY_ALL = "(function () { for (var i = 0; i < questions.length; i++) { " +
    "var q = questions[i]; var pick = i === 0 ? (q.correct + 1) % q.answers.length : q.correct; " +
    "var b = CS.qa('#answers button'); if (b[pick]) b[pick].click(); CS.click('#next'); } " +
    "return true; })()";

  // Index of a wrong answer for question 1.
  var WRONG_0 = "(questions[0].correct + 1) % questions[0].answers.length";

  addChapterContent("proj-quiz", {
    intro: `
      <p>In this project you build a <strong>quiz app</strong> about a topic <strong>you</strong> choose:
      your favorite game, a sport, animals, music, a school subject... anything!</p>
      <p>The finished quiz will:</p>
      <ul>
        <li>keep your questions in an array of objects,</li>
        <li>show one question at a time, with a button for each answer,</li>
        <li>say if the answer is right or wrong and keep a score,</li>
        <li>go to the next question,</li>
        <li>show the final score at the end, with a <strong>Try again</strong> button.</li>
      </ul>
      <p>You build it in small steps. <strong>Each step builds on the last one</strong>: your code from the
      step before is already in the editor when you start the next step.</p>
      <div class="tip">At the end, press <strong>Download my project</strong>. You get one HTML file that
      you can open in any browser. Send it to your friends and see who gets the best score!</div>
    `,
    lessons: [],
    exercises: [
      {
        id: "proj-quiz-s1",
        title: "Step 1: Build the quiz page",
        type: "html",
        instructions: `
          <p>First, choose the topic of your quiz. Then build the page. You get a page skeleton with
          places for CSS, HTML, and JavaScript.</p>
          <p>In the <code>&lt;body&gt;</code>, above the <code>&lt;script&gt;</code>, add:</p>
          <ul>
            <li>an <code>&lt;h1&gt;</code> with the name of your quiz,</li>
            <li>an empty paragraph <code>&lt;p id="question"&gt;&lt;/p&gt;</code> for the question,</li>
            <li>an empty <code>&lt;div id="answers"&gt;&lt;/div&gt;</code> for the answer buttons,</li>
            <li>an empty paragraph <code>&lt;p id="feedback"&gt;&lt;/p&gt;</code> for "Correct!" or "Wrong",</li>
            <li>a score line: <code>&lt;p&gt;Score: &lt;span id="score"&gt;0&lt;/span&gt;&lt;/p&gt;</code></li>
          </ul>
          <p>In the <code>&lt;style&gt;</code> tag, give the <code>body</code> a <code>background-color</code>
          and a font you like. You can also style <code>button</code> now: the answer buttons will use it later.</p>
          <div class="tip">The empty parts will be filled by JavaScript in the next steps.</div>
        `,
        starterCode: page(QUIZ_TITLE, EMPTY_CSS, EMPTY_BODY, EMPTY_JS),
        solution: quiz1,
        tests: [
          { check: "CS.q('h1') !== null && CS.text('h1') !== ''", message: "Add an <h1> with the name of your quiz." },
          { check: "CS.q('#question') !== null && CS.q('#answers') !== null && CS.q('#feedback') !== null", message: "I need three empty elements: id=\"question\", id=\"answers\", and id=\"feedback\"." },
          { check: "CS.text('#score') === '0'", message: "Add the score line with <span id=\"score\">0</span>." },
          { check: "CS.css('body', 'background-color') !== 'rgba(0, 0, 0, 0)'", message: "Give the body a background-color in the <style> tag." }
        ],
        hints: [
          "Write your HTML between <code>&lt;body&gt;</code> and <code>&lt;script&gt;</code>.",
          "The answers box is a <code>&lt;div&gt;</code>: <code>&lt;div id=\"answers\"&gt;&lt;/div&gt;</code>. It stays empty for now.",
          "Inside <code>&lt;style&gt;</code> write a rule like <code>body { background-color: ...; font-family: Arial, sans-serif; }</code>."
        ]
      },
      {
        id: "proj-quiz-s2",
        title: "Step 2: Write your questions",
        type: "html",
        instructions: `
          <p>Now write your questions. Keep them in an <strong>array of objects</strong>: one object for
          each question. In the <code>&lt;script&gt;</code>, create an array named <code>questions</code>:</p>
          <pre><code>const questions = [
  {
    question: "What is the biggest planet?",
    answers: ["Earth", "Jupiter", "Mars"],
    correct: 1
  },
  {
    question: "...",
    answers: ["...", "...", "..."],
    correct: 0
  }
];</code></pre>
          <p>Each object has three properties:</p>
          <ul>
            <li><code>question</code>: the question text,</li>
            <li><code>answers</code>: an array with at least 2 possible answers,</li>
            <li><code>correct</code>: the <strong>index</strong> (position) of the right answer. Remember:
              the first answer is 0, the second is 1, the third is 2.</li>
          </ul>
          <p>Write <strong>at least 3</strong> questions about <strong>your</strong> topic.
          You will not see them on the page yet. That is the next step.</p>
        `,
        carry: true,
        starterCode: quiz1,
        solution: quiz2,
        tests: [
          { check: "typeof questions !== 'undefined' && Array.isArray(questions)", message: "Create an array named questions: const questions = [ ... ];" },
          { check: "questions.length >= 3", message: "Write at least 3 questions." },
          { check: "questions.every(function (q) { return typeof q.question === 'string' && q.question.trim() !== '' && Array.isArray(q.answers) && q.answers.length >= 2; })", message: "Every question object needs a question (text) and answers (an array with at least 2 answers)." },
          { check: "questions.every(function (q) { return Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.answers.length; })", message: "Every question needs correct: the index of the right answer (0 for the first answer, 1 for the second, ...)." }
        ],
        hints: [
          "Objects go between <code>{ }</code> and are separated by commas inside the <code>[ ]</code>.",
          "Property names must be exactly <code>question</code>, <code>answers</code>, and <code>correct</code>.",
          "<code>correct</code> is a number without quotes, like <code>correct: 2</code>. If you have 3 answers, it can only be 0, 1, or 2."
        ]
      },
      {
        id: "proj-quiz-s3",
        title: "Step 3: Show a question",
        type: "html",
        instructions: `
          <p>Now show the first question on the page, with one button for each answer.</p>
          <ol>
            <li>Create a variable <code>let current = 0;</code>. It is the index of the question we show now.</li>
            <li>Write a function named <code>showQuestion</code>. It must:
              <ul>
                <li>get the current question: <code>const q = questions[current];</code></li>
                <li>put <code>q.question</code> into <code>#question</code>,</li>
                <li>make <code>#answers</code> empty (set its <code>textContent</code> to <code>""</code>),</li>
                <li>use a <code>for</code> loop over <code>q.answers</code>. For each answer, create a
                  <code>&lt;button&gt;</code> with <code>document.createElement</code>, put the answer text
                  in it, and add it to <code>#answers</code> with <code>appendChild</code>.</li>
              </ul>
            </li>
            <li>Call <code>showQuestion();</code> at the end of your script.</li>
          </ol>
          <p>The buttons don't do anything yet. That is the next step.</p>
        `,
        carry: true,
        starterCode: quiz2,
        solution: quiz3,
        tests: [
          { check: "typeof showQuestion === 'function'", message: "Write a function named showQuestion." },
          { check: "CS.text('#question') === questions[0].question.trim()", message: "When the page opens, #question should show the text of your first question. Did you call showQuestion()?" },
          { check: "CS.qa('#answers button').length === questions[0].answers.length", message: "#answers should have one <button> for each answer of the first question." },
          { check: "CS.qa('#answers button').every(function (b, i) { return b.textContent.trim() === String(questions[0].answers[i]).trim(); })", message: "Each answer button should show the text of one answer, in the same order as in your array." }
        ],
        hints: [
          "Find the elements first: <code>const answersBox = document.querySelector(\"#answers\");</code>",
          "The loop: <code>for (let i = 0; i &lt; q.answers.length; i++) { ... }</code>. Inside, <code>q.answers[i]</code> is one answer.",
          "Inside the loop: <code>const button = document.createElement(\"button\");</code>, then set <code>button.textContent</code>, then <code>answersBox.appendChild(button);</code>"
        ]
      },
      {
        id: "proj-quiz-s4",
        title: "Step 4: Check the answer",
        type: "html",
        instructions: `
          <p>Now the answer buttons must work.</p>
          <ol>
            <li>Create two more variables: <code>let score = 0;</code> and <code>let answered = false;</code></li>
            <li>Write a function <code>checkAnswer(i)</code>. <code>i</code> is the index of the clicked answer.
              <ul>
                <li>If <code>answered</code> is already <code>true</code>, stop with <code>return;</code>
                  (the player may only answer once).</li>
                <li>Otherwise set <code>answered = true;</code></li>
                <li>If <code>i</code> is the same as the question's <code>correct</code>: add 1 to
                  <code>score</code>, show it in <code>#score</code>, and show <strong>Correct!</strong>
                  in <code>#feedback</code>.</li>
                <li>Else show a "wrong" message in <code>#feedback</code>, for example
                  "Wrong. The answer was: Jupiter".</li>
              </ul>
            </li>
            <li>In <code>showQuestion</code>, give every button a click listener that calls
              <code>checkAnswer(i)</code>. Also set <code>answered = false;</code> in
              <code>showQuestion</code>, so a new question can be answered.</li>
          </ol>
        `,
        carry: true,
        starterCode: quiz3,
        solution: quiz4,
        tests: [
          { check: "(CS.qa('#answers button')[" + WRONG_0 + "].click(), CS.text('#score') === '0' && CS.text('#feedback') !== '' && !CS.text('#feedback').includes('Correct!'))", message: "When I click a wrong answer, the score should stay 0 and #feedback should show a \"wrong\" message." },
          { check: "(showQuestion(), CS.qa('#answers button')[questions[0].correct].click(), CS.text('#score') === '1' && CS.text('#feedback').includes('Correct!'))", message: "When I click the right answer, #feedback should say \"Correct!\" and #score should go up by 1. Did you set answered = false in showQuestion?" },
          { check: "(CS.qa('#answers button')[" + WRONG_0 + "].click(), CS.text('#score') === '1')", message: "After the player answered, clicking another answer must not change anything. Use the answered variable." }
        ],
        hints: [
          "Add the listener inside the loop in <code>showQuestion</code>: <code>button.addEventListener(\"click\", function () { checkAnswer(i); });</code>",
          "Inside <code>checkAnswer</code>, get the question again with <code>const q = questions[current];</code> and compare: <code>if (i === q.correct) { ... }</code>",
          "At the start of <code>checkAnswer</code>: <code>if (answered) { return; }</code> and then <code>answered = true;</code>"
        ]
      },
      {
        id: "proj-quiz-s5",
        title: "Step 5: Next question",
        type: "html",
        instructions: `
          <p>One question is not a quiz! Let the player go to the next question.</p>
          <ol>
            <li>Add a button with the text <strong>Next question</strong> and <code>id="next"</code>
              (under the score).</li>
            <li>When it is clicked, add 1 to <code>current</code> and call <code>showQuestion()</code>.</li>
            <li>In <code>showQuestion</code>, also make <code>#feedback</code> empty, so the old
              "Correct!" message goes away.</li>
          </ol>
          <p>Don't worry about the end of the quiz yet. If you click Next after the last question, you get
          an error. You fix that in the next step.</p>
        `,
        carry: true,
        starterCode: quiz4,
        solution: quiz5,
        tests: [
          { check: "CS.q('#next') !== null", message: "Add a button with id=\"next\"." },
          { check: "(CS.qa('#answers button')[questions[0].correct].click(), CS.click('#next')) && CS.text('#question') === questions[1].question.trim()", message: "After I click Next, #question should show your second question." },
          { check: "CS.qa('#answers button').length === questions[1].answers.length && CS.text('#feedback') === ''", message: "After Next, the answer buttons should be for the second question, and #feedback should be empty." },
          { check: "(CS.qa('#answers button')[questions[1].correct].click(), CS.text('#score') === '2')", message: "After two right answers, the score should be 2." }
        ],
        hints: [
          "Find the button with <code>document.querySelector(\"#next\")</code> and add a click listener.",
          "In the listener: <code>current = current + 1;</code> and then <code>showQuestion();</code>",
          "To empty the feedback, add <code>feedback.textContent = \"\";</code> inside <code>showQuestion</code>."
        ]
      },
      {
        id: "proj-quiz-s6",
        title: "Step 6: The final score",
        type: "html",
        instructions: `
          <p>When the player clicks Next after the <strong>last</strong> question, show the end of the quiz
          instead of an error.</p>
          <ol>
            <li>In the Next button's listener, after <code>current = current + 1;</code>, check:
              if <code>current</code> is smaller than <code>questions.length</code>, call
              <code>showQuestion()</code>. Else call a new function <code>showEnd()</code>.</li>
            <li>Write the function <code>showEnd</code>. It must:
              <ul>
                <li>show a "finished" message in <code>#question</code>,</li>
                <li>make <code>#answers</code> empty (no more answer buttons),</li>
                <li>show the final score in <code>#feedback</code> with the score <strong>and</strong> the
                  number of questions, for example "Your final score: 2 out of 3",</li>
                <li>hide the Next button: <code>nextButton.style.display = "none";</code></li>
              </ul>
            </li>
          </ol>
        `,
        carry: true,
        starterCode: quiz5,
        solution: quiz6,
        tests: [
          { check: PLAY_ALL + " && CS.qa('#answers button').length === 0", message: "After the last question, clicking Next should remove all answer buttons. Call showEnd() when there are no more questions." },
          { check: "CS.text('#feedback').includes(String(questions.length - 1)) && CS.text('#feedback').includes(String(questions.length))", message: "At the end, #feedback should show the score and the number of questions, like \"2 out of 3\"." },
          { check: "CS.css('#next', 'display') === 'none'", message: "At the end, hide the Next button with style.display = \"none\"." }
        ],
        hints: [
          "Use <code>if (current &lt; questions.length) { showQuestion(); } else { showEnd(); }</code>",
          "<code>questions.length</code> is the number of questions. Join text and numbers with <code>+</code>.",
          "In <code>showEnd</code>: <code>feedback.textContent = \"Your final score: \" + score + ...</code> Finish the line yourself."
        ]
      },
      {
        id: "proj-quiz-s7",
        title: "Step 7: Try again",
        type: "html",
        instructions: `
          <p>The last step: let the player play again.</p>
          <ol>
            <li>Add a button with the text <strong>Try again</strong> and <code>id="again"</code>.</li>
            <li>Hide it when the page opens. In the CSS: <code>#again { display: none; }</code></li>
            <li>In <code>showEnd</code>, show it: <code>againButton.style.display = "inline-block";</code></li>
            <li>When it is clicked, start over:
              <ul>
                <li>set <code>current</code> and <code>score</code> back to 0, and show 0 in <code>#score</code>,</li>
                <li>show the Next button again and hide the Try again button,</li>
                <li>call <code>showQuestion()</code>.</li>
              </ul>
            </li>
          </ol>
          <div class="tip">You are done! Press <strong>Download my project</strong> to save your quiz as one
          HTML file. Want more? Add more questions, or change the colors.</div>
        `,
        carry: true,
        starterCode: quiz6,
        solution: quiz7,
        tests: [
          { check: "CS.q('#again') !== null && CS.css('#again', 'display') === 'none'", message: "Add a button with id=\"again\" and hide it when the page opens (#again { display: none; })." },
          { check: PLAY_ALL + " && CS.css('#again', 'display') !== 'none'", message: "At the end of the quiz, the Try again button should be visible." },
          { check: "CS.click('#again') && CS.text('#score') === '0' && CS.text('#question') === questions[0].question.trim()", message: "After Try again, the score should be 0 and the first question should show again." },
          { check: "CS.qa('#answers button').length === questions[0].answers.length && CS.text('#feedback') === '' && CS.css('#next', 'display') !== 'none' && CS.css('#again', 'display') === 'none'", message: "After Try again, show the answer buttons and the Next button again, and hide the Try again button." }
        ],
        hints: [
          "Find the button with <code>document.querySelector(\"#again\")</code> and add a click listener.",
          "Do not write <code>let</code> in the listener. Write <code>current = 0;</code> and <code>score = 0;</code> to change the variables you already have.",
          "To show the Next button again: <code>nextButton.style.display = \"inline-block\";</code>. Then hide the Try again button the same way, with <code>\"none\"</code>."
        ]
      }
    ]
  });

  // ==============================================================================================
  // Project 3: To-do list
  // ==============================================================================================

  var TODO_TITLE = "My To-Do List";

  var TODO_CSS = `
body {
  font-family: Arial, sans-serif;
  background-color: #fff8e7;
  color: #222;
  max-width: 500px;
  margin: 0 auto;
  padding: 24px 16px;
}

input {
  font-size: 18px;
  padding: 8px;
}

button {
  font-size: 16px;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background-color: #2a9d8f;
  color: white;
  cursor: pointer;
}

li {
  font-size: 18px;
  margin: 8px 0;
}
`;

  var TODO_CSS_4 = TODO_CSS + `
li span {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: gray;
}
`;

  var TODO_CSS_5 = TODO_CSS_4 + `
.delete {
  margin-left: 10px;
  padding: 4px 10px;
  background-color: #e63946;
}
`;

  var TODO_BODY_1 = `
<h1>My To-Do List</h1>
<input id="new-task" type="text" placeholder="What do you need to do?">
<button id="add">Add</button>
<ul id="list"></ul>
`;

  var TODO_BODY_7 = `
<h1>My To-Do List</h1>
<input id="new-task" type="text" placeholder="What do you need to do?">
<button id="add">Add</button>
<ul id="list"></ul>
<p>Tasks left: <span id="left">0</span></p>
`;

  var TODO_JS_2 = `
let tasks = [];

const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

function render() {
  list.textContent = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasks[i].text;
    li.appendChild(span);
    list.appendChild(li);
  }
}

addButton.addEventListener("click", function () {
  const text = input.value;
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
});

render();
`;

  var TODO_JS_3 = `
let tasks = [];

const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

function render() {
  list.textContent = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasks[i].text;
    li.appendChild(span);
    list.appendChild(li);
  }
}

addButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
});

render();
`;

  var TODO_JS_4 = `
let tasks = [];

const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

function render() {
  list.textContent = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasks[i].text;
    span.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      render();
    });
    li.appendChild(span);
    if (tasks[i].done) {
      li.className = "done";
    }
    list.appendChild(li);
  }
}

addButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
});

render();
`;

  var TODO_JS_5 = `
let tasks = [];

const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

function render() {
  list.textContent = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasks[i].text;
    span.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      render();
    });
    li.appendChild(span);
    if (tasks[i].done) {
      li.className = "done";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(i, 1);
      render();
    });
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
}

addButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
});

render();
`;

  var TODO_JS_6 = `
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.textContent = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasks[i].text;
    span.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      save();
      render();
    });
    li.appendChild(span);
    if (tasks[i].done) {
      li.className = "done";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(i, 1);
      save();
      render();
    });
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
}

addButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, done: false });
  input.value = "";
  save();
  render();
});

render();
`;

  var TODO_JS_7 = `
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");
const left = document.querySelector("#left");

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.textContent = "";
  let notDone = 0;
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasks[i].text;
    span.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      save();
      render();
    });
    li.appendChild(span);
    if (tasks[i].done) {
      li.className = "done";
    } else {
      notDone = notDone + 1;
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(i, 1);
      save();
      render();
    });
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
  left.textContent = notDone;
}

addButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  tasks.push({ text: text, done: false });
  input.value = "";
  save();
  render();
});

render();
`;

  var todo1 = page(TODO_TITLE, TODO_CSS, TODO_BODY_1, EMPTY_JS);
  var todo2 = page(TODO_TITLE, TODO_CSS, TODO_BODY_1, TODO_JS_2);
  var todo3 = page(TODO_TITLE, TODO_CSS, TODO_BODY_1, TODO_JS_3);
  var todo4 = page(TODO_TITLE, TODO_CSS_4, TODO_BODY_1, TODO_JS_4);
  var todo5 = page(TODO_TITLE, TODO_CSS_5, TODO_BODY_1, TODO_JS_5);
  var todo6 = page(TODO_TITLE, TODO_CSS_5, TODO_BODY_1, TODO_JS_6);
  var todo7 = page(TODO_TITLE, TODO_CSS_5, TODO_BODY_7, TODO_JS_7);

  // Check code that adds a task: types the text and clicks Add.
  function add(text) { return "CS.type('#new-task', '" + text + "') && CS.click('#add')"; }
  // Check code that clicks the text of task number n (the span, or the li if there is no span).
  function clickTask(n) { return "(function () { var li = CS.qa('#list li')[" + n + "]; (li.querySelector('span') || li).click(); return true; })()"; }
  // Check code that clicks the Delete button of task number n.
  function deleteTask(n) { return "(function () { CS.qa('#list li')[" + n + "].querySelector('.delete').click(); return true; })()"; }
  // Check code that reads the saved tasks array from localStorage.
  var SAVED = "JSON.parse(CS.storage().tasks)";

  addChapterContent("proj-todo", {
    intro: `
      <p>In this project you build a <strong>to-do list</strong>: a list of things you need to do.</p>
      <p>The finished app will:</p>
      <ul>
        <li>add a task when you type it and click <strong>Add</strong> (but not an empty task),</li>
        <li>cross out a task when you click it, to mark it as done,</li>
        <li>have a <strong>Delete</strong> button for every task,</li>
        <li>show how many tasks are left,</li>
        <li><strong>remember</strong> your list with localStorage, so it is still there when you open the page again.</li>
      </ul>
      <p>You build it in small steps. <strong>Each step builds on the last one</strong>: your code from the
      step before is already in the editor when you start the next step.</p>
      <div class="tip">At the end, press <strong>Download my project</strong>. You get one HTML file that
      you can open in any browser and really use for your homework list!</div>
    `,
    lessons: [],
    exercises: [
      {
        id: "proj-todo-s1",
        title: "Step 1: Build the page",
        type: "html",
        instructions: `
          <p>First, build the page. You get a page skeleton with places for CSS, HTML, and JavaScript.</p>
          <p>In the <code>&lt;body&gt;</code>, above the <code>&lt;script&gt;</code>, add:</p>
          <ul>
            <li>an <code>&lt;h1&gt;</code> with a title (you choose the words),</li>
            <li>a text <code>&lt;input&gt;</code> with <code>id="new-task"</code>. Tip: add
              <code>placeholder="What do you need to do?"</code> to show a gray example text,</li>
            <li>a <code>&lt;button&gt;</code> with the text <strong>Add</strong> and <code>id="add"</code>,</li>
            <li>an empty list: <code>&lt;ul id="list"&gt;&lt;/ul&gt;</code>. JavaScript fills it later.</li>
          </ul>
          <p>In the <code>&lt;style&gt;</code> tag, give the <code>body</code> a <code>background-color</code>
          and make the page look the way you like.</p>
        `,
        starterCode: page(TODO_TITLE, EMPTY_CSS, EMPTY_BODY, EMPTY_JS),
        solution: todo1,
        tests: [
          { check: "CS.q('h1') !== null && CS.text('h1') !== ''", message: "Add an <h1> with a title." },
          { check: "CS.q('input#new-task') !== null", message: "I can't find an <input> with id=\"new-task\"." },
          { check: "CS.q('button#add') !== null", message: "I can't find a <button> with id=\"add\"." },
          { check: "CS.q('ul#list') !== null", message: "Add an empty list: <ul id=\"list\"></ul>" },
          { check: "CS.css('body', 'background-color') !== 'rgba(0, 0, 0, 0)'", message: "Give the body a background-color in the <style> tag." }
        ],
        hints: [
          "Write your HTML between <code>&lt;body&gt;</code> and <code>&lt;script&gt;</code>.",
          "An id goes inside the opening tag: <code>&lt;button id=\"add\"&gt;Add&lt;/button&gt;</code>.",
          "The list is empty for now: <code>&lt;ul id=\"list\"&gt;&lt;/ul&gt;</code>. For the color, write a CSS rule for <code>body</code>."
        ]
      },
      {
        id: "proj-todo-s2",
        title: "Step 2: Add tasks",
        type: "html",
        instructions: `
          <p>Now make the Add button work. We keep the tasks in an <strong>array of objects</strong>, and a
          function draws the list from that array. This makes the next steps much easier.</p>
          <ol>
            <li>Create the array: <code>let tasks = [];</code> Each task will be an object like
              <code>{ text: "Buy milk", done: false }</code>.</li>
            <li>Write a function <code>render()</code> that draws the list:
              <ul>
                <li>make <code>#list</code> empty (set its <code>textContent</code> to <code>""</code>),</li>
                <li>loop over <code>tasks</code>. For each task, create an <code>&lt;li&gt;</code>. Inside the
                  <code>&lt;li&gt;</code>, put a <code>&lt;span&gt;</code> with the task text. (Why a span?
                  Later we add a button next to the text.) Add the <code>&lt;li&gt;</code> to <code>#list</code>.</li>
              </ul>
            </li>
            <li>When <strong>Add</strong> is clicked: read the input text, add a new object to
              <code>tasks</code> with <code>push</code>, make the input empty, and call <code>render()</code>.</li>
          </ol>
        `,
        carry: true,
        starterCode: todo1,
        solution: todo2,
        tests: [
          { check: add("Buy milk") + " && CS.qa('#list li').length === 1", message: "When I type a task and click Add, one <li> should appear in #list." },
          { check: "CS.text('#list li').includes('Buy milk')", message: "The new <li> should show the text I typed." },
          { check: "CS.q('#new-task').value === ''", message: "After adding a task, make the input empty." },
          { check: add("Walk the dog") + " && CS.qa('#list li').length === 2", message: "When I add a second task, #list should have 2 items." }
        ],
        hints: [
          "Add a new task like this: <code>tasks.push({ text: input.value, done: false });</code>",
          "In <code>render</code>: <code>const li = document.createElement(\"li\");</code> and <code>const span = document.createElement(\"span\");</code>. Set <code>span.textContent = tasks[i].text;</code>",
          "Put the parts together with <code>appendChild</code>: first the span into the li, then the li into the list. Don't forget to call <code>render();</code> after <code>push</code>."
        ]
      },
      {
        id: "proj-todo-s3",
        title: "Step 3: No empty tasks",
        type: "html",
        instructions: `
          <p>Right now, if you click Add with an empty input, you get an empty task. Fix that.</p>
          <ul>
            <li>Read the text with <code>input.value.trim()</code>. <code>trim()</code> removes spaces at
              the start and the end, so <code>"   "</code> becomes <code>""</code>.</li>
            <li>If the text is <code>""</code>, stop the function with <code>return;</code>.
              Nothing is added.</li>
            <li>Otherwise add the task like before.</li>
          </ul>
        `,
        carry: true,
        starterCode: todo2,
        solution: todo3,
        tests: [
          { check: add("") + " && CS.qa('#list li').length === 0", message: "When the input is empty and I click Add, nothing should be added." },
          { check: add("   ") + " && CS.qa('#list li').length === 0", message: "When the input has only spaces, nothing should be added. Use trim()." },
          { check: add("Read a book") + " && CS.qa('#list li').length === 1", message: "A normal task should still be added." }
        ],
        hints: [
          "Write the text into a variable first: <code>const text = input.value.trim();</code>",
          "Then use an <code>if</code> to compare <code>text</code> with <code>\"\"</code> (an empty string).",
          "Put <code>if (text === \"\") { return; }</code> before the <code>push</code> line, and use <code>text</code> in the new object."
        ]
      },
      {
        id: "proj-todo-s4",
        title: "Step 4: Mark tasks as done",
        type: "html",
        instructions: `
          <p>When you finish a task, click its text to cross it out. Click again to undo.</p>
          <ol>
            <li>In the CSS, add a class that crosses out text:
              <pre><code>.done {
  text-decoration: line-through;
  color: gray;
}</code></pre></li>
            <li>In <code>render</code>, add a click listener to the <strong>span</strong>. When it is
              clicked, flip the task's <code>done</code> value and call <code>render()</code> again:
              <pre><code>tasks[i].done = !tasks[i].done;</code></pre>
              <code>!</code> means "not": <code>true</code> becomes <code>false</code>, and <code>false</code>
              becomes <code>true</code>.</li>
            <li>Also in <code>render</code>: if <code>tasks[i].done</code> is <code>true</code>, give the
              <code>&lt;li&gt;</code> the class <code>done</code> with <code>li.className = "done";</code></li>
          </ol>
        `,
        carry: true,
        starterCode: todo3,
        solution: todo4,
        tests: [
          { check: add("First") + " && " + add("Second") + " && " + clickTask(1) + " && CS.qa('#list li')[1].classList.contains('done') && !CS.qa('#list li')[0].classList.contains('done')", message: "When I click the second task, its <li> should get the class \"done\" (and only that one)." },
          { check: "getComputedStyle(CS.qa('#list li')[1]).textDecorationLine.includes('line-through')", message: "A done task should be crossed out. Add a CSS rule .done { text-decoration: line-through; }" },
          { check: clickTask(1) + " && !CS.qa('#list li')[1].classList.contains('done')", message: "When I click a done task again, it should not be done any more." }
        ],
        hints: [
          "The listener goes inside the loop in <code>render</code>, after you create the span: <code>span.addEventListener(\"click\", function () { ... });</code>",
          "Inside the listener, flip <code>tasks[i].done</code> and then call <code>render();</code> so the list is drawn again.",
          "Before <code>list.appendChild(li)</code>, add <code>if (tasks[i].done) { ... }</code> and set the class in it."
        ]
      },
      {
        id: "proj-todo-s5",
        title: "Step 5: Delete tasks",
        type: "html",
        instructions: `
          <p>Give every task a <strong>Delete</strong> button.</p>
          <ol>
            <li>In <code>render</code>, for every task, create a <code>&lt;button&gt;</code> with the text
              <strong>Delete</strong> (or ✕) and give it the class <code>delete</code>:
              <code>deleteButton.className = "delete";</code></li>
            <li>Add it to the <code>&lt;li&gt;</code>, after the span.</li>
            <li>When it is clicked, remove the task from the array and draw the list again:
              <pre><code>tasks.splice(i, 1);
render();</code></pre>
              <code>splice(i, 1)</code> removes 1 item at index <code>i</code> from the array.</li>
          </ol>
          <p>Style the <code>.delete</code> button in the CSS, for example with a red color.</p>
        `,
        carry: true,
        starterCode: todo4,
        solution: todo5,
        tests: [
          { check: add("Task one") + " && " + add("Task two") + " && CS.qa('#list li .delete').length === 2", message: "Every task needs a button with class=\"delete\" inside its <li>." },
          { check: deleteTask(0) + " && CS.qa('#list li').length === 1 && CS.text('#list li').includes('Task two')", message: "When I click Delete on the first task, only that task should go away." },
          { check: "!CS.q('#list li').classList.contains('done')", message: "Clicking Delete should not mark another task as done. Put the \"done\" click listener on the span, not on the li." }
        ],
        hints: [
          "Create it in the loop, like the span: <code>const deleteButton = document.createElement(\"button\");</code>",
          "Set its <code>textContent</code> and <code>className</code>, then <code>li.appendChild(deleteButton);</code>",
          "The click listener for the button uses <code>i</code>, the index of the task, just like the span listener. Inside it, use <code>splice</code> and then call <code>render</code>."
        ]
      },
      {
        id: "proj-todo-s6",
        title: "Step 6: Save the list",
        type: "html",
        instructions: `
          <p>Right now the list is gone when you reload the page. Save it in <strong>localStorage</strong>.
          localStorage can only keep text, so turn the array into JSON text first.</p>
          <ol>
            <li>Write a function <code>save()</code> that stores the array under the key <code>"tasks"</code>:
              <pre><code>localStorage.setItem("tasks", JSON.stringify(tasks));</code></pre></li>
            <li>Call <code>save()</code> every time the tasks change: after you add, mark done, or delete a task.</li>
            <li>When the page opens, load the saved tasks. Change the first line to:
              <pre><code>let tasks = JSON.parse(localStorage.getItem("tasks")) || [];</code></pre>
              If nothing is saved yet, <code>getItem</code> gives <code>null</code>, and <code>|| []</code>
              gives an empty array instead.</li>
          </ol>
          <div class="tip">For this step, the checker pretends there is already one saved task called
          <strong>Old task</strong>. It must be on the list when the page opens.</div>
        `,
        carry: true,
        starterCode: todo5,
        solution: todo6,
        storage: { tasks: JSON.stringify([{ text: "Old task", done: false }]) },
        tests: [
          { check: "CS.qa('#list li').length === 1 && CS.text('#list li').includes('Old task')", message: "When the page opens, load the saved tasks from localStorage (key \"tasks\") and show them." },
          { check: add("New task") + " && " + SAVED + ".length === 2 && " + SAVED + "[1].text === 'New task'", message: "After adding a task, save the whole tasks array in localStorage under the key \"tasks\" with JSON.stringify." },
          { check: clickTask(0) + " && " + SAVED + "[0].done === true", message: "After marking a task as done, save the tasks again." },
          { check: deleteTask(0) + " && " + SAVED + ".length === 1", message: "After deleting a task, save the tasks again." }
        ],
        hints: [
          "The key must be exactly <code>\"tasks\"</code> in both <code>setItem</code> and <code>getItem</code>.",
          "Put <code>save();</code> just before every <code>render();</code> call inside your click listeners.",
          "Loading happens once, at the top: <code>JSON.parse</code> turns the saved text back into an array."
        ]
      },
      {
        id: "proj-todo-s7",
        title: "Step 7: Count the tasks left",
        type: "html",
        instructions: `
          <p>The last step: show how many tasks are <strong>not done</strong> yet.</p>
          <ol>
            <li>Under the list, add: <code>&lt;p&gt;Tasks left: &lt;span id="left"&gt;0&lt;/span&gt;&lt;/p&gt;</code></li>
            <li>In <code>render</code>, create a counter <code>let notDone = 0;</code> before the loop.</li>
            <li>In the loop, add 1 to the counter for every task that is not done.</li>
            <li>After the loop, show the counter in <code>#left</code>.</li>
          </ol>
          <p>Because <code>render()</code> runs after every change, the number is always right.</p>
          <div class="tip">You are done! Press <strong>Download my project</strong> to save your to-do list as one
          HTML file. When you open the file in your browser, your tasks are saved there too.</div>
        `,
        carry: true,
        starterCode: todo6,
        solution: todo7,
        tests: [
          { check: "CS.text('#left') === '0'", message: "Add <span id=\"left\">0</span>. It should show 0 when the list is empty." },
          { check: add("One") + " && " + add("Two") + " && " + add("Three") + " && CS.text('#left') === '3'", message: "After adding 3 tasks, #left should show 3." },
          { check: clickTask(0) + " && CS.text('#left') === '2'", message: "When I mark one task as done, #left should show 2. Only count tasks that are not done." },
          { check: deleteTask(1) + " && CS.text('#left') === '1'", message: "When I delete a task that is not done, #left should go down by 1." }
        ],
        hints: [
          "Find the span at the top of your script: <code>const left = document.querySelector(\"#left\");</code>",
          "You already have an <code>if (tasks[i].done)</code> in the loop. Add an <code>else</code> part that adds 1 to <code>notDone</code>.",
          "After the loop ends (after its <code>}</code>), set <code>left.textContent</code> to the counter."
        ]
      }
    ]
  });
})();
