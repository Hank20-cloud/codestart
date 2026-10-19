// Math 11 Pre-Calculus, chapter 4 — Section 2.4: Mixed Operations (order of operations and complex fractions). Topics follow
// the class textbook (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples, and questions are our own.
// Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma04", {
    intro: `
      <p>This chapter puts all four operations together. You use the order of operations (BEDMAS), and you learn two
      methods to simplify <strong>complex fractions</strong>. Textbook: Section 2.4 (pages 91–97).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li><strong>BEDMAS</strong>: Brackets, Exponents, Division and Multiplication (from left to right), Addition and Subtraction (from left to right).</li>
          <li>Do ÷ and · before + and −, unless brackets say otherwise.</li>
          <li>A <strong>complex fraction</strong> has a fraction in its numerator, its denominator, or both.</li>
          <li><strong>Method 1</strong>: write the numerator and the denominator each as one fraction, then divide (multiply by the reciprocal).</li>
          <li><strong>Method 2</strong>: multiply the numerator and the denominator by the LCD of all the small fractions, then simplify.</li>
          <li>Restrictions: every denominator in the question, including the small ones, cannot be zero.</li>
        </ul>
        <h3>Key formulas</h3>
        <ul>
          <li>Complex fraction as division: ${F(F("a", "b"), F("c", "d"))} = ${F("a", "b")} ÷ ${F("c", "d")} = ${F("a · d", "b · c")}</li>
          <li>Method 2: ${F("N", "D")} = ${F("LCD · N", "LCD · D")} (multiplying top and bottom by the same thing does not change the value)</li>
          <li>Negative exponents: x⁻¹ = ${F("1", "x")}, x⁻² = ${F("1", "x²")}</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma04-l1",
        title: "Order of operations (BEDMAS)",
        html: `
          <table>
            <tr><th>Letter</th><th>Meaning</th></tr>
            <tr><td><strong>B</strong></td><td>Brackets</td></tr>
            <tr><td><strong>E</strong></td><td>Exponents</td></tr>
            <tr><td><strong>D M</strong></td><td>Division and Multiplication, from left to right</td></tr>
            <tr><td><strong>A S</strong></td><td>Addition and Subtraction, from left to right</td></tr>
          </table>
          <h3>Worked example: no brackets</h3>
          <p>Simplify ${F("3", "x − 1")} − ${F("4", "x² − 1")} · ${F("x + 1", "2")}.</p>
          <p>Multiply first: ${F("4", "(x − 1)(x + 1)")} · ${F("x + 1", "2")} = ${F("2", "x − 1")}.</p>
          <p>Then subtract: ${F("3", "x − 1")} − ${F("2", "x − 1")} = ${F("1", "x − 1")}, &nbsp;x ≠ 1, −1.</p>
          <h3>Worked example: brackets first</h3>
          <p>Simplify (${F("x", "x − 5")} − ${F("5", "x + 5")}) · ${F("x² − 25", "x² + 25")}.</p>
          <p>Inside the brackets, the LCD is (x − 5)(x + 5): ${F("x(x + 5) − 5(x − 5)", "(x − 5)(x + 5)")} = ${F("x² + 25", "(x − 5)(x + 5)")}.</p>
          <p>Then multiply: ${F("x² + 25", "(x − 5)(x + 5)")} · ${F("(x − 5)(x + 5)", "x² + 25")} = 1, &nbsp;x ≠ 5, −5.</p>
          <div class="tip">If you add before you multiply in the first example, you get a different (wrong) answer. Always look for · and ÷ first.</div>
        `
      },
      {
        id: "ma04-l2",
        title: "Complex fractions: two methods",
        html: `
          <p>A <strong>complex fraction</strong> is a fraction that contains other fractions, for example
          ${F(F("1", "x + 1") + " − 1", F("1", "x + 1") + " + 1")}.</p>
          <h3>Method 1: one fraction on top, one on the bottom, then divide</h3>
          <p>Top: ${F("1", "x + 1")} − 1 = ${F("1 − (x + 1)", "x + 1")} = ${F("−x", "x + 1")}. &nbsp;Bottom: ${F("1", "x + 1")} + 1 = ${F("x + 2", "x + 1")}.</p>
          <p>Divide: ${F("−x", "x + 1")} · ${F("x + 1", "x + 2")} = ${F("−x", "x + 2")}.</p>
          <h3>Method 2: multiply top and bottom by the LCD</h3>
          <p>The only small denominator is (x + 1), so the LCD is (x + 1).</p>
          <p>${F("(x + 1) · (" + F("1", "x + 1") + " − 1)", "(x + 1) · (" + F("1", "x + 1") + " + 1)")} = ${F("1 − (x + 1)", "1 + (x + 1)")} = ${F("−x", "x + 2")}.</p>
          <p>Both methods give the same answer. The restrictions are x ≠ −1 (small denominator) and x ≠ −2 (the big denominator cannot be zero).</p>
          <svg viewBox="0 0 360 120" width="360" style="max-width:100%;height:auto" role="img" aria-label="Diagram: a complex fraction has a main fraction bar; the small fractions sit above and below it">
            <g style="fill:currentColor;font-size:15px" text-anchor="middle">
              <text x="110" y="30">small fractions on top</text>
              <text x="110" y="100">small fractions below</text>
            </g>
            <line x1="20" y1="60" x2="200" y2="60" style="stroke:var(--accent);stroke-width:4"/>
            <g style="fill:var(--accent);font-size:14px">
              <text x="212" y="65">main fraction bar</text>
              <text x="212" y="85">(the big ÷)</text>
            </g>
          </svg>
          <div class="tip">Method 2 is often faster when there are many small fractions, because one multiplication clears all of them.</div>
        `
      },
      {
        id: "ma04-l3",
        title: "Harder complex fractions and negative exponents",
        html: `
          <h3>Worked example: two variables</h3>
          <p>Simplify ${F(F("1", "x") + " + " + F("1", "y"), F("1", "xy"))}.</p>
          <p>Method 2: the LCD of x, y, and xy is xy. Multiply top and bottom by xy:
          ${F("y + x", "1")} = x + y, &nbsp;x ≠ 0, y ≠ 0.</p>
          <h3>Negative exponents</h3>
          <p>Rewrite negative exponents as fractions first: x⁻¹ = ${F("1", "x")}. Then you have a complex fraction.</p>
          <p>Example: ${F("2x⁻¹ + 3", "x⁻¹")} = ${F(F("2", "x") + " + 3", F("1", "x"))}. Multiply top and bottom by x: ${F("2 + 3x", "1")} = 3x + 2.</p>
          <h3>Formulas from science</h3>
          <p>Rational expressions appear in science formulas. For two resistors in parallel, the total resistance is
          R = ${F("1", F("1", "R₁") + " + " + F("1", "R₂"))}. Multiply top and bottom by R₁R₂ to get R = ${F("R₁R₂", "R₂ + R₁")}.</p>
          <div class="tip">(x + y)⁻¹ is ${F("1", "x + y")}. It is <strong>not</strong> x⁻¹ + y⁻¹. The exponent belongs to the whole bracket.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma04-ex1",
        title: "BEDMAS: what comes first?",
        type: "mc",
        instructions: `<p>In ${F("2", "x")} + ${F("5", "x − 3")} ÷ ${F("x + 1", "x")}, which operation do you do first?</p>`,
        choices: ["The addition", "The division", "Find the LCD of all three fractions and add them", "Work from left to right, so the addition"],
        answer: 1,
        explain: "There are no brackets or exponents. Division comes before addition in BEDMAS, so you divide first, then add.",
        hints: [
          "BEDMAS: B, E, then D and M, then A and S.",
          "Is there a bracket? If not, look for ÷ or ·."
        ]
      },
      {
        id: "ma04-ex2",
        title: "Multiply before you add",
        type: "mc",
        instructions: `<p>Simplify ${F("1", "2")} + ${F("3", "x + 1")} · ${F("x + 1", "6")}. Assume x ≠ −1.</p>`,
        choices: [F("x + 7", "12"), "1", F("1", "2"), F("x + 4", "2(x + 1)")],
        answer: 1,
        explain: "Multiply first: 3/(x + 1) · (x + 1)/6 = 3/6 = 1/2. Then add: 1/2 + 1/2 = 1. The answer (x + 7)/12 comes from adding first, which is wrong.",
        hints: [
          "Do the multiplication before the addition.",
          "In the product, (x + 1) cancels. What is 3 over 6?"
        ]
      },
      {
        id: "ma04-ex3",
        title: "Brackets, then divide",
        type: "mc",
        instructions: `<p>Simplify (${F("2", "x − 3")} + ${F("1", "x")}) ÷ ${F("3x − 3", "x² − 3x")}. Assume no denominator is zero.</p>`,
        choices: ["3", "x", "1", F("3", "x(x − 3)")],
        answer: 2,
        explain: "Brackets: (2x + (x − 3))/(x(x − 3)) = (3x − 3)/(x(x − 3)). The divisor is (3x − 3)/(x(x − 3)), the same expression. Any non-zero expression divided by itself is 1.",
        hints: [
          "Add inside the brackets with the LCD x(x − 3).",
          "Factor the divisor's denominator: x² − 3x = x(x − 3). Compare it with your sum."
        ]
      },
      {
        id: "ma04-ex4",
        title: "A complex fraction with numbers",
        type: "mc",
        instructions: `<p>Simplify ${F("2 + " + F("1", "3"), "1 − " + F("1", "6"))}.</p>`,
        choices: [F("14", "5"), F("5", "14"), F("35", "18"), F("7", "18")],
        answer: 0,
        explain: "Top: 2 + 1/3 = 7/3. Bottom: 1 − 1/6 = 5/6. Divide: 7/3 · 6/5 = 42/15 = 14/5.",
        hints: [
          "Write the top as one fraction and the bottom as one fraction.",
          "Then divide: multiply the top by the reciprocal of the bottom."
        ]
      },
      {
        id: "ma04-ex5",
        title: "Method 1: divide two fractions",
        type: "mc",
        instructions: `<p>Simplify ${F(F("x² − 9", "x"), F("x + 3", "x²"))}. Assume no denominator is zero.</p>`,
        choices: [F("x − 3", "x"), "x(x + 3)", "x(x − 3)", F("x − 3", "x²")],
        answer: 2,
        explain: "(x² − 9)/x · x²/(x + 3) = (x − 3)(x + 3) · x² over x(x + 3). Cancel (x + 3) and one x: x(x − 3).",
        hints: [
          "The main fraction bar means ÷. Multiply the top fraction by the reciprocal of the bottom fraction.",
          "Factor x² − 9, then cancel."
        ]
      },
      {
        id: "ma04-ex6",
        title: "Method 2: multiply by the LCD",
        type: "mc",
        instructions: `<p>Simplify ${F("1 − " + F("1", "x"), "x − " + F("1", "x"))}. Assume no denominator is zero.</p>`,
        choices: ["x + 1", F("1", "x − 1"), F("x − 1", "x"), F("1", "x + 1")],
        answer: 3,
        explain: "Multiply top and bottom by x: (x − 1)/(x² − 1) = (x − 1)/((x − 1)(x + 1)) = 1/(x + 1).",
        hints: [
          "The only small denominator is x. Multiply the top and the bottom by x.",
          "You get (x − 1) over (x² − 1). Factor the bottom."
        ]
      },
      {
        id: "ma04-ex7",
        title: "Binomial small denominators",
        type: "mc",
        instructions: `<p>Simplify ${F("1 + " + F("1", "x − 1"), "1 − " + F("1", "x − 1"))}. Assume no denominator is zero.</p>`,
        choices: [F("x", "x − 2"), F("x − 2", "x"), F("x", "x − 1"), "−1"],
        answer: 0,
        explain: "Multiply top and bottom by (x − 1): top = (x − 1) + 1 = x, bottom = (x − 1) − 1 = x − 2. The answer is x/(x − 2).",
        hints: [
          "Use Method 2 with the LCD (x − 1).",
          "1 · (x − 1) + 1 = ? and 1 · (x − 1) − 1 = ?"
        ]
      },
      {
        id: "ma04-ex8",
        title: "Negative exponents",
        type: "mc",
        instructions: `<p>Simplify ${F("x⁻¹ + 4x⁻²", "x⁻²")}. Assume x ≠ 0.</p>`,
        choices: ["1 + 4x", "x + 4", F("x + 4", "x²"), "5x"],
        answer: 1,
        explain: "Rewrite: (1/x + 4/x²) over (1/x²). Multiply top and bottom by x²: (x + 4) over 1 = x + 4.",
        hints: [
          "First write x⁻¹ = 1/x and x⁻² = 1/x².",
          "The LCD of the small fractions is x². Multiply the top and the bottom by it."
        ]
      },
      {
        id: "ma04-ex9",
        title: "A continued fraction",
        type: "mc",
        instructions: `<p>Simplify ${F("1", "2 + " + F("1", "1 + " + F("1", "3")))}. Start from the bottom.</p>`,
        choices: [F("11", "4"), F("3", "11"), F("4", "11"), F("7", "4")],
        answer: 2,
        explain: "1 + 1/3 = 4/3. Then 1 over 4/3 = 3/4. Then 2 + 3/4 = 11/4. Finally 1 over 11/4 = 4/11.",
        hints: [
          "Work from the smallest fraction at the bottom up.",
          "1 + 1/3 = 4/3, and 1 ÷ (4/3) = 3/4. Keep going."
        ]
      },
      {
        id: "ma04-ex10",
        title: "Three small denominators",
        type: "mc",
        instructions: `<p>Simplify ${F(F("3", "x") + " + " + F("1", "4"), F("5", "8x"))}. Assume x ≠ 0.</p>`,
        choices: [F("2x + 24", "5"), F("5", "2x + 24"), F("2x + 24", "5x"), F("2x", "5")],
        answer: 0,
        explain: "Multiply the top and the bottom by the LCD 8x: top = 24 + 2x, bottom = 5. The answer is (2x + 24)/5.",
        hints: [
          "The LCD of x, 4, and 8x is 8x.",
          "8x · (3/x) = 24, 8x · (1/4) = 2x, and 8x · 5/(8x) = 5."
        ]
      }
    ]
  });
})();
