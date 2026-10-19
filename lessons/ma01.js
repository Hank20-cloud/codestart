// Math 11 Pre-Calculus, chapter 1 — Section 2.1: Properties of Rational Expressions. Topics follow the class textbook
// (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples, and questions are our own.
// Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma01", {
    intro: `
      <p>A <strong>rational expression</strong> is a fraction made of polynomials, for example ${F("x + 2", "x − 3")}.
      In this chapter you learn when a rational expression is undefined, and how to simplify it to lowest terms.
      Everything else in Chapter 2 uses these skills. Textbook: Section 2.1 (pages 69–75).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li><strong>Rational expression</strong>: the quotient of two polynomials, with a denominator that is not zero.</li>
          <li><strong>Domain</strong>: all real numbers you can use for the variable. We write it as the values the variable <em>cannot</em> be.</li>
          <li><strong>Restriction</strong> (non-permissible value): a value that makes a denominator zero. Find it with: denominator = 0, then solve.</li>
          <li><strong>Lowest terms</strong>: the numerator and denominator have no common factor other than 1 or −1. Writing this form is called <strong>simplifying</strong>.</li>
          <li>Cancel common <strong>factors</strong> (things that multiply), never common <strong>terms</strong> (things that are added).</li>
          <li>Restrictions come from the <strong>original</strong> expression, not the simplified one.</li>
        </ul>
        <h3>Key formulas</h3>
        <ul>
          <li>Rational expression: ${F("a", "b")}, where b ≠ 0</li>
          <li>Fundamental Principle of Rational Expressions: ${F("a · c", "b · c")} = ${F("a", "b")}, where b, c ≠ 0</li>
          <li>Opposites: b − a = −(a − b), so ${F("a − b", "b − a")} = −1</li>
          <li>Factoring patterns: a² − b² = (a − b)(a + b); x² + (m + n)x + mn = (x + m)(x + n)</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma01-l1",
        title: "Rational expressions and undefined values",
        html: `
          <p>A <strong>rational number</strong> is a fraction of two integers, like ${F("3", "4")}. A
          <strong>rational expression</strong> is the same idea with polynomials: ${F("a", "b")}, where a and b are
          polynomials and b ≠ 0.</p>
          <ul>
            <li>${F("5", "x")}, ${F("x + 1", "x² − 4")}, and ${F("x² + 3", "7")} are rational expressions.</li>
            <li>${F("√x", "x + 1")} is <em>not</em> a rational expression, because √x is not a polynomial.</li>
          </ul>
          <h3>Undefined values</h3>
          <p>Dividing by zero is <strong>undefined</strong>. So a rational expression is undefined for every value
          that makes its denominator zero. To find these values, set the denominator equal to zero and solve.
          We write the answer with ≠ ("is not equal to"). These values are the <strong>restrictions</strong>.</p>
          <h3>Worked examples: find the restrictions</h3>
          <table>
            <tr><th>Expression</th><th>Work</th><th>Restrictions</th></tr>
            <tr><td>${F("7", "x + 5")}</td><td>x + 5 = 0, so x = −5</td><td>x ≠ −5</td></tr>
            <tr><td>${F("x", "x² − 9")}</td><td>x² − 9 = (x − 3)(x + 3) = 0</td><td>x ≠ 3, x ≠ −3</td></tr>
            <tr><td>${F("x − 1", "x² + 5x + 6")}</td><td>(x + 2)(x + 3) = 0</td><td>x ≠ −2, x ≠ −3</td></tr>
            <tr><td>${F("2x", "x² + 1")}</td><td>x² + 1 = 0 means x² = −1, which no real number solves</td><td>none: the expression is defined for all real x</td></tr>
          </table>
          <p>The number line shows the domain of ${F("x", "x² − 9")}: every real number except −3 and 3 (open circles).</p>
          <svg viewBox="0 0 340 60" width="340" style="max-width:100%;height:auto" role="img" aria-label="Number line from minus 4 to 4 with open circles at minus 3 and 3">
            <line x1="10" y1="25" x2="330" y2="25" style="stroke:currentColor;stroke-width:2"/>
            <g style="stroke:currentColor">
              <line x1="30" y1="19" x2="30" y2="31"/><line x1="65" y1="19" x2="65" y2="31"/><line x1="100" y1="19" x2="100" y2="31"/>
              <line x1="135" y1="19" x2="135" y2="31"/><line x1="170" y1="19" x2="170" y2="31"/><line x1="205" y1="19" x2="205" y2="31"/>
              <line x1="240" y1="19" x2="240" y2="31"/><line x1="275" y1="19" x2="275" y2="31"/><line x1="310" y1="19" x2="310" y2="31"/>
            </g>
            <g style="fill:currentColor;font-size:13px" text-anchor="middle">
              <text x="30" y="50">−4</text><text x="65" y="50">−3</text><text x="100" y="50">−2</text><text x="135" y="50">−1</text>
              <text x="170" y="50">0</text><text x="205" y="50">1</text><text x="240" y="50">2</text><text x="275" y="50">3</text><text x="310" y="50">4</text>
            </g>
            <circle cx="65" cy="25" r="6" style="fill:var(--card);stroke:var(--fail);stroke-width:2.5"/>
            <circle cx="275" cy="25" r="6" style="fill:var(--card);stroke:var(--fail);stroke-width:2.5"/>
          </svg>
          <div class="tip">Always factor the denominator completely first. Each factor that can be zero gives one restriction.</div>
        `
      },
      {
        id: "ma01-l2",
        title: "Lowest terms and the Fundamental Principle",
        html: `
          <p>A fraction is in <strong>lowest terms</strong> when the numerator and denominator have no common factor
          other than 1 or −1. For example, ${F("18", "30")} = ${F("6 · 3", "6 · 5")} = ${F("3", "5")}.</p>
          <div class="key-box">
            <h3>Fundamental Principle of Rational Expressions</h3>
            <p>${F("a · c", "b · c")} = ${F("a", "b")}, where b, c ≠ 0. You may divide the numerator and the denominator by the same non-zero factor.</p>
          </div>
          <h3>How to simplify</h3>
          <ol>
            <li>Factor the numerator and the denominator completely.</li>
            <li>Write the restrictions, using the factored denominator of the <em>original</em> expression.</li>
            <li>Divide out (cancel) every common factor.</li>
          </ol>
          <h3>Worked example 1</h3>
          <p>Simplify ${F("4x − 8", "6x − 12")}.</p>
          <p>${F("4x − 8", "6x − 12")} = ${F("4(x − 2)", "6(x − 2)")}, x ≠ 2. &nbsp;Cancel (x − 2) and simplify ${F("4", "6")}: the answer is ${F("2", "3")}.</p>
          <h3>Worked example 2</h3>
          <p>Simplify ${F("x² − 9", "x² + x − 6")}.</p>
          <p>${F("x² − 9", "x² + x − 6")} = ${F("(x − 3)(x + 3)", "(x − 2)(x + 3)")}, x ≠ 2, −3. &nbsp;Cancel (x + 3): the answer is ${F("x − 3", "x − 2")}.</p>
          <div class="tip">Note: the simplified answer ${F("x − 3", "x − 2")} looks like it allows x = −3. It does not.
          The original expression is undefined at x = −3, so the restriction x ≠ −3 stays. Restrictions always come from the original expression.</div>
        `
      },
      {
        id: "ma01-l3",
        title: "Opposites: factoring out −1",
        html: `
          <p>Some factors look almost the same but are <strong>opposites</strong>, like (5 − x) and (x − 5).
          Because 5 − x = −1 · (x − 5), you can factor out −1 and then cancel.</p>
          <p>Rule: ${F("a − b", "b − a")} = −1, when a ≠ b.</p>
          <h3>Worked example</h3>
          <p>Simplify ${F("4 − x", "x² − 16")}.</p>
          <p>${F("4 − x", "x² − 16")} = ${F("−1(x − 4)", "(x − 4)(x + 4)")}, x ≠ 4, −4. &nbsp;Cancel (x − 4): the answer is ${F("−1", "x + 4")}.</p>
          <p>Be careful: (x + 5) and (5 + x) are the <em>same</em> (addition can change order), so ${F("x + 5", "5 + x")} = 1, not −1.</p>
          <div class="tip">A good habit: write every factor with the variable first, like (x − 5), before you compare factors.</div>
        `
      },
      {
        id: "ma01-l4",
        title: "Common errors: factors, not terms",
        html: `
          <p>The Fundamental Principle works for common <strong>factors</strong> (parts that are multiplied), not for common
          <strong>terms</strong> (parts that are added or subtracted).</p>
          <table>
            <tr><th>Wrong work</th><th>Why it is wrong</th></tr>
            <tr><td>${F("x + 7", "x")} = 7</td><td>x is a term in the numerator, not a factor of the whole numerator.</td></tr>
            <tr><td>${F("x² + 4", "x² + 9")} = ${F("4", "9")}</td><td>x² is added, not multiplied. This expression is already in lowest terms.</td></tr>
            <tr><td>${F("x − 6", "x + 2")} = −3</td><td>x and 6 and 2 are terms. Nothing can be cancelled here.</td></tr>
          </table>
          <h3>A quick test</h3>
          <p>Put a number into the original and into your answer. With x = 1: ${F("1 + 7", "1")} = 8, but the "answer" is 7.
          The numbers are different, so the simplification is wrong.</p>
          <div class="tip">Before you cancel, ask: "Is this whole thing multiplied by everything else on its line?" If it is joined by + or −, you cannot cancel it.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma01-ex1",
        title: "What is a rational expression?",
        type: "mc",
        instructions: `<p>Which of these is <strong>not</strong> a rational expression?</p>`,
        choices: [F("3", "x − 1"), F("x² + 2", "5"), F("√x", "x + 1"), F("x − 4", "x² + 9")],
        answer: 2,
        explain: "A rational expression is a quotient of two polynomials. √x is not a polynomial, because the power of x is ½, not a whole number. The other three are quotients of polynomials.",
        hints: [
          "Check the top and the bottom of each fraction. Are both of them polynomials?",
          "In a polynomial, every power of x is a whole number (0, 1, 2, ...)."
        ]
      },
      {
        id: "ma01-ex2",
        title: "Find the restrictions",
        type: "mc",
        instructions: `<p>What are the restrictions on ${F("x − 3", "x² − 49")}?</p>`,
        choices: ["x ≠ 3", "x ≠ 7 and x ≠ −7", "x ≠ 7 only", "There are no restrictions."],
        answer: 1,
        explain: "Set the denominator equal to zero: x² − 49 = (x − 7)(x + 7) = 0, so x = 7 or x = −7. Both values make the denominator zero. The numerator does not give restrictions.",
        hints: [
          "Restrictions come from the denominator, not the numerator.",
          "Factor x² − 49 as a difference of squares.",
          "(x − 7)(x + 7) = 0 has two solutions."
        ]
      },
      {
        id: "ma01-ex3",
        title: "A denominator that is never zero",
        type: "mc",
        instructions: `<p>What are the restrictions on ${F("x + 5", "x² + 4")}?</p>`,
        choices: ["x ≠ −5", "x ≠ 2 and x ≠ −2", "x ≠ −4", "There are no restrictions."],
        answer: 3,
        explain: "x² + 4 = 0 means x² = −4. The square of a real number is never negative, so no real x makes the denominator zero. The expression is defined for all real numbers.",
        hints: [
          "Set x² + 4 = 0 and try to solve it.",
          "Can the square of a real number be negative?"
        ]
      },
      {
        id: "ma01-ex4",
        title: "Factor first, then restrict",
        type: "mc",
        instructions: `<p>What are the restrictions on ${F("x − 7", "x² − 6x + 8")}?</p>`,
        choices: ["x ≠ 2 and x ≠ 4", "x ≠ −2 and x ≠ −4", "x ≠ 7", "x ≠ 8"],
        answer: 0,
        explain: "x² − 6x + 8 = (x − 2)(x − 4). This is zero when x = 2 or x = 4. Watch the signs: the factor (x − 2) is zero at x = +2.",
        hints: [
          "Find two numbers that multiply to 8 and add to −6.",
          "x² − 6x + 8 = (x − 2)(x − 4). Which x values make each factor zero?"
        ]
      },
      {
        id: "ma01-ex5",
        title: "Simplify: a common binomial",
        type: "mc",
        instructions: `<p>Simplify ${F("5x − 10", "15x − 30")}. Assume the denominator is not zero.</p>`,
        choices: [F("1", "6"), F("1", "3"), "3", F("x − 2", "3")],
        answer: 1,
        explain: "Factor: 5(x − 2) over 15(x − 2). Cancel (x − 2), then 5 over 15 is 1 over 3. The restriction is x ≠ 2.",
        hints: [
          "Take out the greatest common factor from the top and from the bottom.",
          "5x − 10 = 5(x − 2) and 15x − 30 = 15(x − 2). What is left after you cancel?"
        ]
      },
      {
        id: "ma01-ex6",
        title: "Simplify: factor both trinomials",
        type: "mc",
        instructions: `<p>Simplify ${F("x² − 49", "x² + 4x − 21")}. Assume the denominator is not zero.</p>`,
        choices: [F("x + 7", "x + 3"), F("−7", "4x − 21"), F("x − 7", "x − 3"), F("x − 7", "x + 3")],
        answer: 2,
        explain: "x² − 49 = (x − 7)(x + 7) and x² + 4x − 21 = (x + 7)(x − 3). Cancel (x + 7) to get (x − 7) over (x − 3). The restrictions are x ≠ −7, 3.",
        hints: [
          "The numerator is a difference of squares.",
          "For the denominator, find two numbers that multiply to −21 and add to 4.",
          "Both factored forms contain (x + 7)."
        ]
      },
      {
        id: "ma01-ex7",
        title: "Simplify: opposite factors",
        type: "mc",
        instructions: `<p>Simplify ${F("6 − x", "x² − 36")}. Assume the denominator is not zero.</p>`,
        choices: [F("−1", "x + 6"), F("1", "x + 6"), F("1", "x − 6"), F("−1", "x − 6")],
        answer: 0,
        explain: "6 − x = −1(x − 6) and x² − 36 = (x − 6)(x + 6). Cancel (x − 6). The −1 stays, so the answer is −1 over (x + 6).",
        hints: [
          "Compare (6 − x) with the factors of x² − 36. Are they the same or opposites?",
          "Write 6 − x as −1(x − 6). Do not lose the −1."
        ]
      },
      {
        id: "ma01-ex8",
        title: "Find the correct simplification",
        type: "mc",
        instructions: `<p>Only one of these simplifications is correct. Which one?</p>`,
        choices: [
          F("x + 5", "x") + " = 5",
          F("x² + 3", "x² + 7") + " = " + F("3", "7"),
          F("x − 4", "x + 4") + " = −1",
          F("3x + 6", "3") + " = x + 2"
        ],
        answer: 3,
        explain: "3x + 6 = 3(x + 2), and 3 is a common factor, so 3(x + 2) over 3 is x + 2. In the other three, x or x² is a term (it is added), not a factor, so it cannot be cancelled.",
        hints: [
          "You may cancel factors (multiplied), not terms (added).",
          "Factor each numerator if you can. Which one has a factor that matches the denominator?",
          "Test with x = 1: does each side give the same number?"
        ]
      },
      {
        id: "ma01-ex9",
        title: "Simplify: leading coefficients",
        type: "mc",
        instructions: `<p>Simplify ${F("2x² + 7x + 3", "4x² − 1")}. Assume the denominator is not zero.</p>`,
        choices: [F("x + 3", "2x + 1"), F("x − 3", "2x − 1"), F("2x + 3", "4x − 1"), F("x + 3", "2x − 1")],
        answer: 3,
        explain: "2x² + 7x + 3 = (2x + 1)(x + 3) and 4x² − 1 = (2x − 1)(2x + 1). Cancel (2x + 1) to get (x + 3) over (2x − 1).",
        hints: [
          "4x² − 1 is a difference of squares: (2x)² − 1².",
          "For 2x² + 7x + 3, find two numbers that multiply to 2 · 3 = 6 and add to 7.",
          "2x² + 7x + 3 = (2x + 1)(x + 3)."
        ]
      },
      {
        id: "ma01-ex10",
        title: "Restrictions after simplifying",
        type: "mc",
        instructions: `<p>${F("x² − x − 6", "x² + x − 2")} simplifies to ${F("x − 3", "x − 1")}. What are the restrictions on the original expression?</p>`,
        choices: ["x ≠ 1 only", "x ≠ 3 and x ≠ −2", "x ≠ −2 and x ≠ 1", "x ≠ 2 and x ≠ −1"],
        answer: 2,
        explain: "The original denominator is x² + x − 2 = (x + 2)(x − 1), so x ≠ −2 and x ≠ 1. The factor (x + 2) was cancelled, but x = −2 is still not allowed, because the original expression is undefined there.",
        hints: [
          "Use the denominator of the original expression, not the simplified one.",
          "Factor x² + x − 2."
        ]
      }
    ]
  });
})();
