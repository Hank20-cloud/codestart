// Math 11 Pre-Calculus, chapter 5 — Section 2.5: Rational Equations. Topics follow the class textbook
// (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples, and questions are our own.
// Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma05", {
    intro: `
      <p>Until now you <strong>simplified</strong> rational expressions. In this chapter you <strong>solve</strong>
      rational equations: you find the value of the variable that makes the equation true. You also learn why some
      answers must be rejected. Textbook: Section 2.5 (pages 98–105).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li><strong>Rational equation</strong>: an equation with at least one rational expression, for example ${F("3", "x")} + 1 = ${F("5", "x")}.</li>
          <li><strong>Step 1</strong>: find the restrictions (values that make any denominator zero).</li>
          <li><strong>Step 2</strong>: multiply <em>both sides</em> by the LCD (Least Common Denominator). This clears all fractions.</li>
          <li><strong>Step 3</strong>: solve the equation that is left (linear or quadratic).</li>
          <li><strong>Step 4</strong>: reject any answer that is a restriction. A rejected answer is called an <strong>extraneous solution</strong>.</li>
          <li><strong>∅</strong> (empty set) means "no solution". You get ∅ when the only answer is rejected, or when you get a false statement like 5 = 2.</li>
          <li>An <strong>identity</strong> (like 0 = 0) is true for every value of x. The solution is all real numbers except the restrictions.</li>
        </ul>
        <h3>Key formulas</h3>
        <ul>
          <li>Proportion (cross-multiply): if ${F("a", "b")} = ${F("c", "d")}, then a · d = b · c, where b, d ≠ 0</li>
          <li>Zero product: if (x − p)(x − q) = 0, then x = p or x = q</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma05-l1",
        title: "Clearing fractions with the LCD",
        html: `
          <p>An equation with fractions is hard to solve. If you multiply <strong>both sides</strong> by the LCD, every
          denominator cancels, and you get an equation without fractions.</p>
          <h3>Worked example: number denominators</h3>
          <p>Solve ${F("x", "3")} + ${F("x", "4")} = 7.</p>
          <p>The LCD of 3 and 4 is 12. Multiply every term by 12:</p>
          <p>12 · ${F("x", "3")} + 12 · ${F("x", "4")} = 12 · 7 &nbsp;→&nbsp; 4x + 3x = 84 &nbsp;→&nbsp; 7x = 84 &nbsp;→&nbsp; x = 12.</p>
          <p>Check: ${F("12", "3")} + ${F("12", "4")} = 4 + 3 = 7. ✓</p>
          <h3>Worked example: a variable in the denominator</h3>
          <p>Solve 4 − ${F("3", "x")} = x.</p>
          <p>Restriction: x ≠ 0. The LCD is x. Multiply every term by x:</p>
          <p>4x − 3 = x² &nbsp;→&nbsp; x² − 4x + 3 = 0 &nbsp;→&nbsp; (x − 1)(x − 3) = 0 &nbsp;→&nbsp; x = 1 or x = 3.</p>
          <p>Neither answer is 0, so both answers are good.</p>
          <div class="tip">Multiply <strong>every</strong> term, also the terms without a fraction. In the second example the 4 became 4x.
          Forgetting one term is the most common mistake.</div>
        `
      },
      {
        id: "ma05-l2",
        title: "Extraneous solutions, no solution, and identities",
        html: `
          <p>When you multiply by an expression with a variable, you can get an answer that does not work in the
          original equation. Always compare your answers with the restrictions.</p>
          <h3>Worked example: one answer is rejected</h3>
          <p>Solve ${F("x", "x − 4")} − ${F("2", "x + 1")} = ${F("20", "(x − 4)(x + 1)")}.</p>
          <p>Restrictions: x ≠ 4, x ≠ −1. Multiply by the LCD (x − 4)(x + 1):</p>
          <p>x(x + 1) − 2(x − 4) = 20 &nbsp;→&nbsp; x² + x − 2x + 8 = 20 &nbsp;→&nbsp; x² − x − 12 = 0 &nbsp;→&nbsp; (x − 4)(x + 3) = 0.</p>
          <p>So x = 4 or x = −3. But x = 4 is a restriction, so it is <strong>extraneous</strong>. The solution is <strong>x = −3</strong>.</p>
          <h3>Three possible results</h3>
          <table>
            <tr><th>You get</th><th>Example</th><th>Solution</th></tr>
            <tr><td>A value that is not a restriction</td><td>x = −3</td><td>x = −3</td></tr>
            <tr><td>Only restricted values, or a false statement</td><td>x = 4 (restricted), or 6 = −3</td><td>∅ (no solution)</td></tr>
            <tr><td>A statement that is always true</td><td>0 = 0</td><td>All real numbers except the restrictions</td></tr>
          </table>
          <h3>Worked example: a false statement</h3>
          <p>Solve ${F("6", "2x + 1")} = ${F("3", "x − 1")}. Cross-multiply: 6(x − 1) = 3(2x + 1) → 6x − 6 = 6x + 3 → −6 = 3.</p>
          <p>This is false for every x, so the answer is <strong>∅</strong>.</p>
          <h3>Worked example: an identity</h3>
          <p>Solve ${F("3", "x − 2")} + ${F("1", "x")} = ${F("4x − 2", "x(x − 2)")}. Multiply by x(x − 2): 3x + (x − 2) = 4x − 2 → 0 = 0.</p>
          <p>This is true for every x, so the solution is all real numbers except 0 and 2.</p>
        `
      },
      {
        id: "ma05-l3",
        title: "Solving a formula for one variable",
        html: `
          <p>Science formulas often have fractions. To "solve for" one letter, use the same steps: clear the fractions,
          then get the letter alone on one side.</p>
          <h3>Worked example: lens formula</h3>
          <p>Solve ${F("1", "f")} = ${F("1", "u")} + ${F("1", "v")} for v.</p>
          <p>Move ${F("1", "u")}: ${F("1", "v")} = ${F("1", "f")} − ${F("1", "u")} = ${F("u − f", "uf")}.</p>
          <p>Take the reciprocal of both sides: v = ${F("uf", "u − f")}.</p>
          <h3>Worked example: electric current</h3>
          <p>Solve I = ${F("E", "R + r")} for r.</p>
          <p>Multiply both sides by (R + r): I(R + r) = E &nbsp;→&nbsp; IR + Ir = E &nbsp;→&nbsp; Ir = E − IR &nbsp;→&nbsp; r = ${F("E − IR", "I")}.</p>
          <div class="tip">If the letter you want is in two terms, collect those terms on one side and <strong>factor the letter out</strong>.
          Example: xy − 3y = 2x + 1 → xy − 2x = 3y + 1 → x(y − 2) = 3y + 1 → x = ${F("3y + 1", "y − 2")}.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma05-ex1",
        title: "Values that cannot be solutions",
        type: "mc",
        instructions: `<p>Which values can <strong>not</strong> be solutions of ${F("4", "x − 1")} + ${F("1", "x² − 4")} = 2? Do not solve the equation.</p>`,
        choices: ["1 and 4", "1, 2, and −2", "−1, 2, and −2", "1 and 2"],
        answer: 1,
        explain: "Set each denominator equal to zero. x − 1 = 0 gives x = 1. x² − 4 = (x − 2)(x + 2) = 0 gives x = 2 and x = −2.",
        hints: [
          "A value that makes any denominator zero cannot be a solution.",
          "Factor x² − 4 as a difference of squares."
        ]
      },
      {
        id: "ma05-ex2",
        title: "Choose the LCD",
        type: "mc",
        instructions: `<p>To clear the fractions in ${F("3", "2x")} + ${F("1", "x²")} = 5, you multiply both sides by:</p>`,
        choices: ["2x", "x²", "2x³", "2x²"],
        answer: 3,
        explain: "The LCD needs the factor 2 (from 2x) and x² (the highest power of x). So the LCD is 2x². 2x³ also clears the fractions, but it is not the lowest.",
        hints: [
          "The LCD must contain every factor of every denominator.",
          "Use the highest power of x that appears."
        ]
      },
      {
        id: "ma05-ex3",
        title: "Number denominators",
        type: "mc",
        instructions: `<p>Solve ${F("x", "2")} − ${F("x", "5")} = 6.</p>`,
        choices: ["x = 10", "x = 20", "x = 30", "x = 2"],
        answer: 1,
        explain: "Multiply by the LCD 10: 5x − 2x = 60, so 3x = 60 and x = 20. Check: 10 − 4 = 6. ✓",
        hints: [
          "The LCD of 2 and 5 is 10.",
          "Multiply every term, including the 6, by 10."
        ]
      },
      {
        id: "ma05-ex4",
        title: "An equation that becomes quadratic",
        type: "mc",
        instructions: `<p>Solve 7 − ${F("10", "x")} = x.</p>`,
        choices: ["x = 10", "x = −2 or x = −5", "x = 2 or x = 5", "x = 2 only"],
        answer: 2,
        explain: "Restriction x ≠ 0. Multiply by x: 7x − 10 = x², so x² − 7x + 10 = 0 and (x − 2)(x − 5) = 0. Both 2 and 5 are allowed. Check x = 2: 7 − 5 = 2. ✓",
        hints: [
          "Multiply every term by x, the LCD.",
          "Move all terms to one side and factor x² − 7x + 10."
        ]
      },
      {
        id: "ma05-ex5",
        title: "An extraneous solution",
        type: "mc",
        instructions: `<p>Solve ${F("3x", "x − 1")} = ${F("3", "x − 1")} + 4.</p>`,
        choices: ["x = 1", "x = −1", "All real numbers except 1", "∅ (no solution)"],
        answer: 3,
        explain: "Restriction x ≠ 1. Multiply by (x − 1): 3x = 3 + 4(x − 1) = 4x − 1, so x = 1. But 1 is the restriction, so it is extraneous. There is no solution: ∅.",
        hints: [
          "First write the restriction.",
          "After you solve, compare your answer with the restriction."
        ]
      },
      {
        id: "ma05-ex6",
        title: "Factor the denominator first",
        type: "mc",
        instructions: `<p>Solve ${F("2", "x − 3")} − ${F("1", "x + 3")} = ${F("10", "x² − 9")}.</p>`,
        choices: ["x = 3", "x = 1", "x = −1", "∅ (no solution)"],
        answer: 1,
        explain: "x² − 9 = (x − 3)(x + 3), so the restrictions are 3 and −3 and the LCD is (x − 3)(x + 3). Then 2(x + 3) − (x − 3) = 10, so x + 9 = 10 and x = 1. Check: 2/(−2) − 1/4 = −1.25 and 10/(−8) = −1.25. ✓",
        hints: [
          "Factor x² − 9. It is the LCD.",
          "Be careful with the minus sign: −(x − 3) = −x + 3."
        ]
      },
      {
        id: "ma05-ex7",
        title: "One answer must be rejected",
        type: "mc",
        instructions: `<p>Solve ${F("x", "x + 2")} + ${F("3", "x − 1")} = ${F("9", "(x + 2)(x − 1)")}.</p>`,
        choices: ["x = −3 or x = 1", "x = −3", "x = 1", "x = 3"],
        answer: 1,
        explain: "Restrictions: −2 and 1. Multiply by (x + 2)(x − 1): x(x − 1) + 3(x + 2) = 9, so x² + 2x − 3 = 0 and (x + 3)(x − 1) = 0. Reject x = 1 (restriction). The solution is x = −3.",
        hints: [
          "Write the restrictions before you start.",
          "You get a quadratic. Factor it, then check both answers against the restrictions."
        ]
      },
      {
        id: "ma05-ex8",
        title: "An identity",
        type: "mc",
        instructions: `<p>Solve ${F("4", "x + 1")} + ${F("2", "x")} = ${F("6x + 2", "x(x + 1)")}.</p>`,
        choices: ["∅ (no solution)", "x = 0", "All real numbers except 0 and −1", "x = −1"],
        answer: 2,
        explain: "Multiply by x(x + 1): 4x + 2(x + 1) = 6x + 2, so 6x + 2 = 6x + 2, which gives 0 = 0. This is true for every x, except the restrictions 0 and −1.",
        hints: [
          "Clear the fractions and simplify both sides.",
          "What does it mean if you get 0 = 0?"
        ]
      },
      {
        id: "ma05-ex9",
        title: "Cross-multiply a proportion",
        type: "mc",
        instructions: `<p>Solve ${F("3", "x + 4")} = ${F("5", "2x − 1")}.</p>`,
        choices: ["x = 23", "x = 17", "x = −23", "x = 3"],
        answer: 0,
        explain: "Cross-multiply: 3(2x − 1) = 5(x + 4), so 6x − 3 = 5x + 20 and x = 23. Check: 3/27 = 1/9 and 5/45 = 1/9. ✓",
        hints: [
          "If a/b = c/d, then a · d = b · c.",
          "Expand both brackets, then collect the x terms on one side."
        ]
      },
      {
        id: "ma05-ex10",
        title: "Solve a formula",
        type: "mc",
        instructions: `<p>Solve ${F("1", "a")} + ${F("1", "b")} = ${F("1", "c")} for b.</p>`,
        choices: [F("ac", "c − a"), "a − c", F("ac", "a − c"), F("a − c", "ac")],
        answer: 2,
        explain: "1/b = 1/c − 1/a = (a − c)/(ac). Take the reciprocal of both sides: b = ac/(a − c).",
        hints: [
          "Get 1/b alone first.",
          "Subtract the fractions with the LCD ac, then flip both sides."
        ]
      }
    ]
  });
})();
