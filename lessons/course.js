// Course outline. Chapter files (ch01.js, ...) and projects.js add their lessons and exercises here.
// Lesson and exercise ids must never change after release, because saved progress uses them.
//
// Exercise fields:
//   id, title, instructions (html)
//   type: "html" (the code is a whole web page), "js" (the code is JavaScript), "py" (Python),
//         or "mc" (multiple choice, no code).
//         For "py" tests, see the comment above check() in js/py-runner.js.
//   For "mc": choices (list of html), answer (index of the right choice, or a list of indexes when
//         more than one is right), explain (html shown after a right answer). No code, tests, or solution.
//   pageHtml: for "js" exercises, optional HTML put on the page before the student's script
//   starterCode, solution
//   tests: [{ check, message }]  check is a JavaScript expression run inside the student's page.
//          It can use the CS helpers from runner.js (CS.text, CS.css, CS.logged, CS.click, ...).
//   hints: 2-3 strings (html), from a small nudge to almost the answer
//   carry: true for project steps that continue from the previous step's code
var CODESTART = {
  chapters: [
    { id: "ch01", title: "What is a web page?", summary: "How browsers show pages. Your first HTML tags." },
    { id: "ch02", title: "HTML structure", summary: "Headings, paragraphs, lists, links, and images." },
    { id: "ch03", title: "CSS styling", summary: "Colors, fonts, sizes, and boxes." },
    { id: "ch04", title: "Layout", summary: "Flexbox basics and pages that fit a phone screen." },
    { id: "ch05", title: "JavaScript first steps", summary: "What a program is, variables, numbers, and text." },
    { id: "ch06", title: "Making decisions", summary: "if / else, comparisons, true and false." },
    { id: "ch07", title: "Repeating things", summary: "for and while loops." },
    { id: "ch08", title: "Functions", summary: "Writing and calling your own functions." },
    { id: "ch09", title: "Lists and objects", summary: "Arrays and objects." },
    { id: "ch10", title: "Talking to the page", summary: "The DOM: change the page and react to clicks." },
    { id: "ch11", title: "Remembering data", summary: "Save data in the browser with localStorage." },
    { id: "ch12", title: "Finding mistakes", summary: "Read error messages and debug step by step." }
  ],
  // Second category: general programming in Python, based on the Pre-AP Computer Science Principles
  // beginner curriculum (pre-ap-computer-science-principles-formatted.md). Exercises have type "py".
  pyChapters: [
    { id: "py01", title: "Variables and data types", summary: "Store information in variables: numbers, text, and True / False." },
    { id: "py02", title: "if / else", summary: "Let the program choose what to do." },
    { id: "py03", title: "for loops", summary: "Repeat code a set number of times." },
    { id: "py04", title: "while loops", summary: "Repeat code while a condition is True." },
    { id: "py05", title: "Functions", summary: "Write reusable pieces of code." },
    { id: "py06", title: "Lists", summary: "Store many values in one variable." },
    { id: "py07", title: "Boolean logic", summary: "and, or, and not." },
    { id: "py08", title: "Basic debugging", summary: "Syntax errors, runtime errors, and logic errors." },
    { id: "py09", title: "Small programs", summary: "Combine everything into small, complete programs." }
  ],
  pyProjects: [
    { id: "pyp-calc", title: "Calculator", summary: "Ask for two numbers and an operator, then show the result.", fileName: "calculator.py" },
    { id: "pyp-grade", title: "Grade calculator", summary: "Turn a score into a letter grade, with input checks.", fileName: "grade_calculator.py" },
    { id: "pyp-guess", title: "Number guessing game", summary: "The computer picks a number. The player guesses until it is right.", fileName: "guessing_game.py" },
    { id: "pyp-quiz", title: "Simple quiz", summary: "Ask questions, count the score, then use a list and a loop.", fileName: "quiz.py" },
    { id: "pyp-rps", title: "Rock-Paper-Scissors", summary: "Play against the computer, first to 3 wins.", fileName: "rock_paper_scissors.py" },
    { id: "pyp-menu", title: "Menu program", summary: "A menu that repeats until the user chooses Exit.", fileName: "menu.py" }
  ],
  // Third category: AP Computer Science Principles, in the order of the College Board course (5 Big Ideas),
  // using the AP Exam Reference Sheet pseudocode. Exercises are "mc" (multiple choice) or "py".
  apChapters: [
    { id: "ap01", title: "Big Idea 1: Creative Development", summary: "Computing innovations, working together, program purpose, the design process, and finding errors." },
    { id: "ap02", title: "Big Idea 2: Data", summary: "Binary and hexadecimal numbers, compression, and getting information from data." },
    { id: "ap03", title: "Big Idea 3: Variables, expressions, and decisions", summary: "AP pseudocode: ←, DISPLAY, MOD, strings, Booleans, and IF." },
    { id: "ap04", title: "Big Idea 3: Loops, lists, and searching", summary: "REPEAT, lists that start at index 1, binary search, and flowcharts." },
    { id: "ap05", title: "Big Idea 3: Procedures and algorithms", summary: "Abstraction, PROCEDURE, libraries, RANDOM, simulations, the robot, efficiency, and problems no computer can solve." },
    { id: "ap06", title: "Big Idea 4: Computer systems and networks", summary: "How the Internet works, fault tolerance, and parallel computing." },
    { id: "ap07", title: "Big Idea 5: Impact of computing", summary: "Good and bad effects, bias, the digital divide, privacy, and safe computing." },
    { id: "ap08", title: "The Create performance task", summary: "Plan and build your own program, and answer the written questions about it." },
    { id: "ap09", title: "Exam practice", summary: "Mixed AP-style questions from all five Big Ideas." },
    { id: "ap10", title: "Practice test", summary: "30 AP-style questions from all five Big Ideas. Take it like a real test." }
  ],
  // Fourth category: AP Psychology, in the order of the College Board course (Units 0-5). Topics follow
  // Barron's AP Psychology Premium and Myers' Psychology for the AP Course; the text is our own. Exercises are "mc".
  psChapters: [
    { id: "ps01", title: "Unit 0: Research methods", summary: "Perspectives, hypotheses, variables, experiments, correlations, and other methods." },
    { id: "ps02", title: "Unit 0: Statistics and ethics", summary: "Mean, median, mode, standard deviation, correlation, significance, and research ethics." },
    { id: "ps03", title: "Unit 1: Heredity, neurons, and drugs", summary: "Nature and nurture, the nervous system, neurons, neurotransmitters, hormones, and drugs." },
    { id: "ps04", title: "Unit 1: The brain", summary: "Brain parts and what they do, the two hemispheres, plasticity, and brain scans." },
    { id: "ps05", title: "Unit 1: Sleep and consciousness", summary: "Consciousness, circadian rhythm, sleep stages, sleep disorders, and dreams." },
    { id: "ps06", title: "Unit 1: Sensation", summary: "Thresholds, vision, hearing, touch, pain, taste, smell, and body senses." },
    { id: "ps07", title: "Unit 2: Perception", summary: "Top-down and bottom-up processing, Gestalt, depth cues, constancy, and attention." },
    { id: "ps08", title: "Unit 2: Thinking and problem solving", summary: "Concepts, algorithms, heuristics, biases, mental set, and creativity." },
    { id: "ps09", title: "Unit 2: Memory", summary: "Encoding, storage, retrieval, forgetting, and why memories can be wrong." },
    { id: "ps10", title: "Unit 2: Intelligence and testing", summary: "Theories of intelligence, IQ tests, reliability, validity, and test bias." },
    { id: "ps11", title: "Unit 3: Development across the lifespan", summary: "Prenatal growth, Piaget, attachment, Erikson, language, and gender development." },
    { id: "ps12", title: "Unit 3: Learning", summary: "Classical conditioning, operant conditioning, schedules, and learning by watching others." },
    { id: "ps13", title: "Unit 4: Social psychology", summary: "Attribution, attitudes, conformity, obedience, groups, prejudice, and helping." },
    { id: "ps14", title: "Unit 4: Personality", summary: "Psychodynamic, humanistic, social-cognitive, and trait theories, and how to measure personality." },
    { id: "ps15", title: "Unit 4: Motivation and emotion", summary: "Theories of motivation, hunger, theories of emotion, and how people show emotion." },
    { id: "ps16", title: "Unit 5: Health and positive psychology", summary: "Stress, coping, illness, and what makes people well and happy." },
    { id: "ps17", title: "Unit 5: Psychological disorders", summary: "How disorders are defined and classified, and the main categories in the DSM-5-TR." },
    { id: "ps18", title: "Unit 5: Treatment", summary: "Psychodynamic, humanistic, behavioral, cognitive, group, and biological therapies." },
    { id: "ps19", title: "Exam skills", summary: "Multiple-choice strategies and how to answer the AAQ and the EBQ free-response questions." },
    { id: "ps20", title: "Exam practice", summary: "Mixed AP-style questions from all units." }
  ],
  projects: [
    { id: "proj-game", title: "Number guessing game", summary: "The computer picks a secret number. You build the game that lets a player guess it.", fileName: "my-guessing-game.html" },
    { id: "proj-quiz", title: "Quiz app", summary: "A quiz about any topic you like, with a score at the end.", fileName: "my-quiz.html" },
    { id: "proj-todo", title: "To-do list", summary: "Add, finish, and delete tasks. The list is saved in the browser.", fileName: "my-todo-list.html" }
  ]
};

// Each chapter's "Next chapter" button goes to the following chapter in the same category.
[CODESTART.chapters, CODESTART.pyChapters, CODESTART.pyProjects, CODESTART.apChapters, CODESTART.psChapters].forEach(function (list) {
  list.forEach(function (c, i) {
    var next = list[i + 1];
    if (next) c.next = next.id;
  });
});

function allUnits() {
  return CODESTART.chapters.concat(CODESTART.projects, CODESTART.pyChapters, CODESTART.pyProjects, CODESTART.apChapters, CODESTART.psChapters);
}

// Called by each content file to attach its content to a chapter or project.
function addChapterContent(id, content) {
  var unit = allUnits().find(function (c) { return c.id === id; });
  unit.intro = content.intro || "";
  unit.lessons = content.lessons || [];
  unit.exercises = content.exercises || [];
}
