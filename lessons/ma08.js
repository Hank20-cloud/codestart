// Math 11 Pre-Calculus, chapter 8 — Section 2.8: Chapter Review (mixed practice from Sections 2.1 to 2.7).
// Topics follow the class textbook (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples,
// and questions are our own. Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma08", {
    intro: `
      <p>This chapter reviews all of Chapter 2. The questions are mixed, like on a test, so first decide
      <strong>which section</strong> a question belongs to, then use that method. Textbook: Section 2.8 (pages 123–128).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li><strong>Simplify</strong> (2.1): factor, cancel common factors, state restrictions from the original expression.</li>
          <li><strong>Multiply and divide</strong> (2.2): factor everything; to divide, multiply by the reciprocal.</li>
          <li><strong>Add and subtract</strong> (2.3): find the LCD, rewrite each fraction, then combine the numerators.</li>
          <li><strong>Mixed operations and complex fractions</strong> (2.4): BEDMAS; multiply top and bottom by the LCD.</li>
          <li><strong>Equations</strong> (2.5): multiply both sides by the LCD, solve, reject restricted values.</li>
          <li><strong>Graphs</strong> (2.6): vertical asymptotes, horizontal asymptote, holes, intercepts.</li>
          <li><strong>Word problems</strong> (2.7): rates add; time = distance ÷ speed; reject answers that make no sense.</li>
        </ul>
        <h3>Key formulas</h3>
        <ul>
          <li>${F("a", "b")} · ${F("c", "d")} = ${F("ac", "bd")} &nbsp; and &nbsp; ${F("a", "b")} ÷ ${F("c", "d")} = ${F("a", "b")} · ${F("d", "c")}</li>
          <li>${F("a", "b")} + ${F("c", "d")} = ${F("ad + bc", "bd")}</li>
          <li>Horizontal asymptote, same degree: y = ${F("leading coefficient of top", "leading coefficient of bottom")}</li>
          <li>Work together: ${F("1", "a")} + ${F("1", "b")} = ${F("1", "T")}</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma08-l1",
        title: "Expression or equation? Choosing the method",
        html: `
          <p>The most important question on a test is: <strong>is there an equals sign?</strong></p>
          <table>
            <tr><th></th><th>Expression (no "=")</th><th>Equation (has "=")</th></tr>
            <tr><th>Example</th><td>${F("2", "x")} + ${F("3", "x + 1")}</td><td>${F("2", "x")} + ${F("3", "x + 1")} = 1</td></tr>
            <tr><th>Task</th><td>Simplify</td><td>Solve (find x)</td></tr>
            <tr><th>The LCD</th><td>Rewrite each fraction with the LCD. Keep the denominator.</td><td>Multiply both sides by the LCD. The denominators disappear.</td></tr>
            <tr><th>Answer</th><td>One fraction: ${F("5x + 2", "x(x + 1)")}</td><td>Values of x (check them against the restrictions)</td></tr>
          </table>
          <h3>Worked example: the same pieces, two tasks</h3>
          <p><strong>Simplify</strong> ${F("2", "x")} + ${F("3", "x + 1")}: ${F("2(x + 1) + 3x", "x(x + 1)")} = ${F("5x + 2", "x(x + 1)")}, &nbsp;x ≠ 0, −1.</p>
          <p><strong>Solve</strong> ${F("2", "x")} + ${F("3", "x + 1")} = 1: multiply by x(x + 1): 2(x + 1) + 3x = x(x + 1), so
          x² − 4x − 2 = 0. This does not factor, so use the quadratic formula: x = 2 ± √6. Neither is 0 or −1, so both are good.</p>
          <div class="tip">Never "multiply by the LCD" when you only simplify an expression. That changes its value.
          You may do it only in an equation, because you do the same thing to both sides.</div>
        `
      },
      {
        id: "ma08-l2",
        title: "Common mistakes to avoid",
        html: `
          <table>
            <tr><th>Mistake</th><th>Correct</th></tr>
            <tr><td>Cancel terms: ${F("x + 6", "x + 2")} = 3</td><td>Only cancel <strong>factors</strong>. ${F("x + 6", "x + 2")} does not simplify.</td></tr>
            <tr><td>Add the denominators: ${F("1", "x")} + ${F("1", "y")} = ${F("2", "x + y")}</td><td>${F("1", "x")} + ${F("1", "y")} = ${F("y + x", "xy")}</td></tr>
            <tr><td>Forget the sign: ${F("x", "x − 2")} − ${F("x + 1", "x − 2")} = ${F("2x + 1", "x − 2")}</td><td>${F("x − (x + 1)", "x − 2")} = ${F("−1", "x − 2")}</td></tr>
            <tr><td>Keep an extraneous answer</td><td>Compare every answer with the restrictions.</td></tr>
            <tr><td>Average of two speeds: (40 + 60) ÷ 2 = 50</td><td>Total distance ÷ total time = 48</td></tr>
            <tr><td>Asymptote at a cancelled factor</td><td>A factor that cancels gives a <strong>hole</strong>.</td></tr>
          </table>
          <div class="tip">Before you check an answer, read the question again. Did it ask you to simplify, to solve, or to find an asymptote?</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma08-ex1",
        title: "2.1 Simplify and restrict",
        type: "mc",
        instructions: `<p>Simplify ${F("x² − x − 12", "4 − x")}. State the restriction.</p>`,
        choices: ["x + 3, x ≠ 4", "−(x + 3), x ≠ 4", "x − 3, x ≠ 4", "−(x + 3), x ≠ −3"],
        answer: 1,
        explain: "x² − x − 12 = (x − 4)(x + 3), and 4 − x = −(x − 4). So the fraction is (x − 4)(x + 3) / (−(x − 4)) = −(x + 3). The restriction comes from 4 − x = 0: x ≠ 4.",
        hints: [
          "Factor the top. Write 4 − x as −(x − 4).",
          "The restriction comes from the original denominator."
        ]
      },
      {
        id: "ma08-ex2",
        title: "2.2 Multiply",
        type: "mc",
        instructions: `<p>Multiply and simplify ${F("x² + 5x + 6", "x² − 4")} · ${F("x − 2", "x + 3")}. Assume no denominator is zero.</p>`,
        choices: ["1", F("x + 3", "x − 2"), "x + 2", F("x − 2", "x + 2")],
        answer: 0,
        explain: "(x + 2)(x + 3) / ((x − 2)(x + 2)) · (x − 2)/(x + 3). Every factor cancels: (x + 2), (x + 3), and (x − 2). The answer is 1.",
        hints: [
          "Factor x² + 5x + 6 and x² − 4.",
          "Cancel each factor that appears on the top and on the bottom."
        ]
      },
      {
        id: "ma08-ex3",
        title: "2.2 Divide",
        type: "mc",
        instructions: `<p>Divide and simplify ${F("3x − 6", "x + 1")} ÷ ${F("x² − 4", "2x + 2")}. Assume no denominator is zero.</p>`,
        choices: [F("3", "2(x + 2)"), F("6", "x + 2"), F("6", "x − 2"), F("3(x − 2)²", "2(x + 1)²")],
        answer: 1,
        explain: "Multiply by the reciprocal: 3(x − 2)/(x + 1) · 2(x + 1)/((x − 2)(x + 2)). Cancel (x − 2) and (x + 1): 6/(x + 2).",
        hints: [
          "Change ÷ to · and flip the second fraction.",
          "Factor 3x − 6, 2x + 2, and x² − 4."
        ]
      },
      {
        id: "ma08-ex4",
        title: "2.3 Add with unlike denominators",
        type: "mc",
        instructions: `<p>Simplify ${F("4", "x − 2")} − ${F("3", "x + 1")}. Assume no denominator is zero.</p>`,
        choices: [F("1", "(x − 2)(x + 1)"), F("x + 10", "(x − 2)(x + 1)"), F("x − 2", "(x − 2)(x + 1)"), F("1", "2x − 1")],
        answer: 1,
        explain: "LCD (x − 2)(x + 1). Numerator: 4(x + 1) − 3(x − 2) = 4x + 4 − 3x + 6 = x + 10.",
        hints: [
          "The LCD is (x − 2)(x + 1).",
          "Be careful: −3(x − 2) = −3x + 6."
        ]
      },
      {
        id: "ma08-ex5",
        title: "2.4 A complex fraction",
        type: "mc",
        instructions: `<p>Simplify ${F("1 − " + F("9", "x²"), "1 + " + F("3", "x"))}. Assume no denominator is zero.</p>`,
        choices: [F("x − 3", "x"), "x − 3", F("x + 3", "x"), F("x − 3", "x + 3")],
        answer: 0,
        explain: "Multiply top and bottom by x²: (x² − 9)/(x² + 3x) = (x − 3)(x + 3)/(x(x + 3)) = (x − 3)/x.",
        hints: [
          "The LCD of the small fractions is x².",
          "Factor x² − 9 and x² + 3x, then cancel."
        ]
      },
      {
        id: "ma08-ex6",
        title: "2.5 Solve an equation",
        type: "mc",
        instructions: `<p>Solve ${F("x", "x − 3")} − ${F("1", "x + 2")} = ${F("15", "(x − 3)(x + 2)")}.</p>`,
        choices: ["x = 3 or x = −4", "x = −4", "x = 3", "∅ (no solution)"],
        answer: 1,
        explain: "Restrictions 3 and −2. Multiply by (x − 3)(x + 2): x(x + 2) − (x − 3) = 15, so x² + x − 12 = 0 and (x + 4)(x − 3) = 0. Reject x = 3. The solution is x = −4.",
        hints: [
          "Write the restrictions first.",
          "After you factor, check each answer against the restrictions."
        ]
      },
      {
        id: "ma08-ex7",
        title: "2.5 Solve for a variable",
        type: "mc",
        instructions: `<p>Solve y = ${F("2x + 1", "x − 4")} for x.</p>`,
        choices: [F("4y + 1", "y − 2"), F("y − 1", "2y − 4"), F("4y − 1", "y + 2"), F("1 − 4y", "y − 2")],
        answer: 0,
        explain: "Multiply by (x − 4): xy − 4y = 2x + 1. Collect the x terms: xy − 2x = 4y + 1. Factor: x(y − 2) = 4y + 1, so x = (4y + 1)/(y − 2).",
        hints: [
          "Clear the fraction, then move all x terms to one side.",
          "Factor x out of xy − 2x."
        ]
      },
      {
        id: "ma08-ex8",
        title: "2.6 All the asymptotes",
        type: "mc",
        instructions: `<p>Find all asymptotes of f(x) = ${F("3x² − 3", "x² − 9")}.</p>`,
        choices: ["x = 3, x = −3, and y = 3", "x = 1, x = −1, and y = 3", "x = 3, x = −3, and y = 0", "x = 9 and y = 1"],
        answer: 0,
        explain: "The bottom x² − 9 = (x − 3)(x + 3) is zero at 3 and −3, and no factor cancels (the top is 3(x − 1)(x + 1)). Same degree, so y = 3/1 = 3.",
        hints: [
          "Factor the top and the bottom. Does anything cancel?",
          "Same degree: divide the leading coefficients."
        ]
      },
      {
        id: "ma08-ex9",
        title: "2.6 A graph with a hole",
        type: "mc",
        instructions: `<p>f(x) = ${F("x² − 2x − 8", "x − 4")} is a straight line with one point missing. Which point is missing?</p>`,
        choices: ["(4, 0)", "(−2, 0)", "(4, 6)", "(4, 2)"],
        answer: 2,
        explain: "x² − 2x − 8 = (x − 4)(x + 2). Cancel (x − 4): f(x) = x + 2 with x ≠ 4. The line would pass through (4, 6), so that point is the hole.",
        hints: [
          "Factor the top and cancel the common factor.",
          "Put x = 4 into the simplified line."
        ]
      },
      {
        id: "ma08-ex10",
        title: "2.7 A work problem",
        type: "mc",
        instructions: `<p>Nora works 4 times as fast as Ben. Together they finish a job in 8 minutes. How long does Ben need alone?</p>`,
        choices: ["10 minutes", "32 minutes", "40 minutes", "2 minutes"],
        answer: 2,
        explain: "Let Ben's time be x, so Nora's time is x/4 and her rate is 4/x. 1/x + 4/x = 1/8, so 5/x = 1/8 and x = 40 minutes. (Nora needs 10 minutes.)",
        hints: [
          "If Nora is 4 times as fast, her rate is 4 times Ben's rate.",
          "Ben's rate is 1/x. Add the two rates."
        ]
      }
    ]
  });
})();
