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
  // barrons: the matching part of Barron's AP Computer Science Principles Premium (2027 edition), shown on the
  // chapter page. Taken from photos of the book's table of contents; our own text does not come from the book.
  apChapters: [
    { id: "ap01", title: "Big Idea 1: Creative Development", summary: "Computing innovations, working together, program purpose, the design process, and finding errors.", barrons: "Chapter 2, Big Idea 1: Creative Development (pages 133–148)" },
    { id: "ap02", title: "Big Idea 2: Data", summary: "Binary and hexadecimal numbers, compression, and getting information from data.", barrons: "Chapter 3, Big Idea 2: Data (pages 149–198). Its section Privacy Concerns (page 167) is in our chapter 7" },
    { id: "ap03", title: "Big Idea 3: Variables, expressions, and decisions", summary: "AP pseudocode: ←, DISPLAY, MOD, strings, Booleans, and IF.", barrons: "Chapter 4, Big Idea 3: Mathematical Operators (page 202), How to Solve Modulus (page 203), Assignment Operators (page 205), Display Operators (page 208), Input Operators (page 209), Relational and Boolean Operators (page 210), and The Swap (page 232)" },
    { id: "ap04", title: "Big Idea 3: Loops, lists, and searching", summary: "REPEAT, lists that start at index 1, binary search, and flowcharts.", barrons: "Chapter 4, Big Idea 3: Lists (pages 207 and 263), Searching (page 234), and Flowcharts (page 261)" },
    { id: "ap05", title: "Big Idea 3: Procedures and algorithms", summary: "Abstraction, PROCEDURE, libraries, RANDOM, simulations, the robot, efficiency, and problems no computer can solve.", barrons: "Chapter 4, Big Idea 3: What Is an Abstraction? (page 199), The Robot (page 216), and Procedures (page 266)" },
    { id: "ap06", title: "Big Idea 4: Computer systems and networks", summary: "How the Internet works, fault tolerance, and parallel computing.", barrons: "Chapter 5, Big Idea 4: Computer Systems and Networks (pages 315–332), and The World Wide Web (page 333, in Chapter 6)" },
    { id: "ap07", title: "Big Idea 5: Impact of computing", summary: "Good and bad effects, bias, the digital divide, privacy, and safe computing.", barrons: "Chapter 6, Big Idea 5: Impact of Computing (pages 333–358), and Privacy Concerns (page 167, in Chapter 3)" },
    { id: "ap08", title: "The Create performance task", summary: "Plan and build your own program, and answer the written questions about it.", barrons: "Chapter 1, Create Performance Task (pages 45–132), with six full sample tasks" },
    { id: "ap09", title: "Exam practice", summary: "Mixed AP-style questions from all five Big Ideas.", barrons: "Introduction: General Information About the Exam (page 1) and Hints for Taking the Exam (page 2), and the Diagnostic Test (page 3)" },
    { id: "ap10", title: "Practice test", summary: "30 AP-style questions from all five Big Ideas. Take it like a real test.", barrons: "Practice Test 1 (page 359) and Practice Test 2 (page 393)" }
  ],
  // Fourth category: AP Psychology, in the order of the College Board course (Units 0-5). Topics follow
  // Barron's AP Psychology Premium and Myers' Psychology for the AP Course; the text is our own. Exercises are "mc".
  // barrons: the matching part of Barron's AP Psychology Premium (2027 edition), shown on the chapter page. Lessons
  // have their own barrons field with the section and page.
  psChapters: [
    { id: "ps01", title: "Unit 0: Research methods", summary: "History, perspectives, hypotheses, variables, experiments, correlations, other methods, validity, and reliability.", barrons: "Chapter 1, History of Psychology (page 3), and Chapter 2, Research Methods (page 7)" },
    { id: "ps02", title: "Unit 0: Statistics and ethics", summary: "Mean, median, mode, standard deviation, correlation, significance, and research ethics.", barrons: "Chapter 3, Statistics and Ethics in Research (page 13)" },
    { id: "ps03", title: "Unit 1: Heredity, neurons, and drugs", summary: "Nature and nurture, the nervous system, neurons, neurotransmitters, hormones, and drugs.", barrons: "Chapter 4, Biological Bases of Behavior: Genetics, Neuroanatomy, Nervous System, and Endocrine System (pages 22–27), and Chapter 5: Drugs (page 40)" },
    { id: "ps04", title: "Unit 1: The brain", summary: "Brain parts and what they do, the two hemispheres, plasticity, and brain scans.", barrons: "Chapter 4, Biological Bases of Behavior: The Brain (page 27)" },
    { id: "ps05", title: "Unit 1: Sleep and consciousness", summary: "Consciousness, circadian rhythm, sleep stages, sleep disorders, and dreams.", barrons: "Chapter 5, States of Consciousness (page 39)" },
    { id: "ps06", title: "Unit 1: Sensation", summary: "Thresholds, vision, hearing, touch, pain, taste, smell, and body senses.", barrons: "Chapter 6, Sensation (page 49)" },
    { id: "ps07", title: "Unit 2: Perception", summary: "Top-down and bottom-up processing, Gestalt, depth cues, constancy, attention, and ESP claims.", barrons: "Chapter 7, Perception (page 61)" },
    { id: "ps08", title: "Unit 2: Thinking and problem solving", summary: "Concepts, algorithms, heuristics, biases, mental set, and creativity.", barrons: "Chapter 8, Thinking and Creativity (page 71)" },
    { id: "ps09", title: "Unit 2: Memory", summary: "Encoding, storage, retrieval, forgetting, and why memories can be wrong.", barrons: "Chapter 9, Memory (page 79)" },
    { id: "ps10", title: "Unit 2: Intelligence and testing", summary: "Theories of intelligence, IQ tests, reliability, validity, and test bias.", barrons: "Chapter 10, Testing and Individual Differences (page 85)" },
    { id: "ps11", title: "Unit 3: Development across the lifespan", summary: "Prenatal growth, Piaget, attachment, Erikson, language, gender development, and sexual orientation.", barrons: "Chapter 11, Developmental Psychology (page 103), and the Sexual Motivation section of Chapter 15 (pages 169–170)" },
    { id: "ps12", title: "Unit 3: Learning", summary: "Classical conditioning, operant conditioning, schedules, and learning by watching others.", barrons: "Chapter 12, Learning (page 121)" },
    { id: "ps13", title: "Unit 4: Social psychology", summary: "Attribution, attitudes, conformity, obedience, groups, prejudice, and helping.", barrons: "Chapter 13, Social Psychology (page 139)" },
    { id: "ps14", title: "Unit 4: Personality", summary: "Psychodynamic, humanistic, social-cognitive, and trait theories, and how to measure personality.", barrons: "Chapter 14, Personality (page 155)" },
    { id: "ps15", title: "Unit 4: Motivation and emotion", summary: "Theories of motivation, hunger, theories of emotion, and how people show emotion.", barrons: "Chapter 15, Motivation and Emotion (page 165). Its section Sexual Motivation (pages 169–170) is taught in chapter 11, lesson 7" },
    { id: "ps16", title: "Unit 5: Health and positive psychology", summary: "Stress, coping, illness, and what makes people well and happy.", barrons: "Chapter 16, Health Psychology (page 179)" },
    { id: "ps17", title: "Unit 5: Psychological disorders", summary: "How disorders are defined and classified, and the main categories in the DSM-5-TR.", barrons: "Chapter 17, Psychological Disorders (page 187)" },
    { id: "ps18", title: "Unit 5: Treatment", summary: "Psychodynamic, humanistic, behavioral, cognitive, group, and biological therapies.", barrons: "Chapter 18, Treatment of Psychological Disorders (page 197)" },
    { id: "ps19", title: "Exam skills", summary: "Multiple-choice strategies and how to answer the AAQ and the EBQ free-response questions.", barrons: "Chapter 19, Multiple-Choice Test-Taking Tips (page 210), and Chapter 20, Answering Free-Response Questions (page 219)" },
    { id: "ps20", title: "Exam practice", summary: "Mixed AP-style questions from all units.", barrons: "the Review Questions at the end of Chapters 4–18, and Practice Tests 1, 2, and 3 (pages 239, 271, and 305)" }
  ],
  // Fifth category: Math 11 Pre-Calculus, Chapter 2 (Rational Functions) of the class textbook (Crescent Beach Publishing),
  // one chapter per section 2.1-2.4. Taken from the owner's photos of the textbook; our own text. Exercises are "mc".
  maChapters: [
    { id: "ma01", title: "2.1 Properties of rational expressions", summary: "Rational expressions, undefined values, restrictions, and simplifying to lowest terms." },
    { id: "ma02", title: "2.2 Multiplying and dividing", summary: "Multiply rational expressions, and divide by multiplying by the reciprocal." },
    { id: "ma03", title: "2.3 Adding and subtracting", summary: "Like denominators, the LCD (Least Common Denominator), and unlike denominators." },
    { id: "ma04", title: "2.4 Mixed operations", summary: "Order of operations (BEDMAS) and complex fractions." }
  ],
  projects: [
    { id: "proj-game", title: "Number guessing game", summary: "The computer picks a secret number. You build the game that lets a player guess it.", fileName: "my-guessing-game.html" },
    { id: "proj-quiz", title: "Quiz app", summary: "A quiz about any topic you like, with a score at the end.", fileName: "my-quiz.html" },
    { id: "proj-todo", title: "To-do list", summary: "Add, finish, and delete tasks. The list is saved in the browser.", fileName: "my-todo-list.html" }
  ]
};

// Each chapter's "Next chapter" button goes to the following chapter in the same category.
[CODESTART.chapters, CODESTART.pyChapters, CODESTART.pyProjects, CODESTART.apChapters, CODESTART.psChapters, CODESTART.maChapters].forEach(function (list) {
  list.forEach(function (c, i) {
    var next = list[i + 1];
    if (next) c.next = next.id;
  });
});

function allUnits() {
  return CODESTART.chapters.concat(CODESTART.projects, CODESTART.pyChapters, CODESTART.pyProjects, CODESTART.apChapters, CODESTART.psChapters, CODESTART.maChapters);
}

// Called by each content file to attach its content to a chapter or project.
function addChapterContent(id, content) {
  var unit = allUnits().find(function (c) { return c.id === id; });
  unit.intro = content.intro || "";
  unit.lessons = content.lessons || [];
  unit.exercises = content.exercises || [];
}
