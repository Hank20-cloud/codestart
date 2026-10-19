// Math 11 Pre-Calculus, chapter 2 — Section 2.2: Multiplication and Division of Rational Expressions. Topics follow the
// class textbook (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples, and questions are our own.
// Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma02", {
    intro: `
      <p>You multiply and divide rational expressions the same way you multiply and divide fractions.
      The new part is factoring: factor everything first, then cancel common factors. Textbook: Section 2.2 (pages 76–82).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li>To <strong>multiply</strong>: write the product as one fraction, factor every numerator and denominator, then cancel common factors.</li>
          <li>To <strong>divide</strong>: multiply the first expression (the dividend) by the <strong>reciprocal</strong> of the second (the divisor).</li>
          <li>The <strong>reciprocal</strong> of ${F("c", "d")} is ${F("d", "c")} (turn it upside down).</li>
          <li>A factor in any numerator can cancel with the same factor in any denominator.</li>
          <li>Opposite factors cancel to −1: (a − b) and (b − a).</li>
        </ul>
        <h3>Key formulas</h3>
        <ul>
          <li>Multiplying: ${F("a", "b")} · ${F("c", "d")} = ${F("a · c", "b · d")}, where b, d ≠ 0</li>
          <li>Dividing: ${F("a", "b")} ÷ ${F("c", "d")} = ${F("a", "b")} · ${F("d", "c")} = ${F("a · d", "b · c")}, where b, c, d ≠ 0</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma02-l1",
        title: "Multiplying rational expressions",
        html: `
          <div class="key-box">
            <h3>Multiplying rational expressions</h3>
            <p>${F("a", "b")} · ${F("c", "d")} = ${F("a · c", "b · d")}: multiply the numerators, and multiply the denominators.</p>
          </div>
          <h3>Steps</h3>
          <ol>
            <li>Factor every numerator and every denominator.</li>
            <li>Write everything as one fraction (keep it factored; do not expand).</li>
            <li>Cancel common factors, then multiply what is left.</li>
          </ol>
          <h3>Worked example 1: numbers</h3>
          <p>${F("4", "9")} · ${F("15", "8")} = ${F("4 · 15", "9 · 8")} = ${F("4 · 3 · 5", "3 · 3 · 4 · 2")} = ${F("5", "6")}</p>
          <p>Cancelling before you multiply keeps the numbers small.</p>
          <h3>Worked example 2: polynomials</h3>
          <p>Multiply ${F("x² − 9", "2x")} · ${F("6x²", "x + 3")}.</p>
          <p>= ${F("(x − 3)(x + 3) · 6x²", "2x · (x + 3)")}. &nbsp;Cancel (x + 3), and ${F("6x²", "2x")} = 3x. &nbsp;The answer is 3x(x − 3).</p>
          <div class="tip">Do not multiply out the numerator and denominator first. If you expand, the common factors are hidden and you cannot cancel them.</div>
        `
      },
      {
        id: "ma02-l2",
        title: "Trinomials and opposite factors",
        html: `
          <p>Most questions need you to factor trinomials. Factor each part, then look for matching factors on the top and the bottom.</p>
          <h3>Worked example 1</h3>
          <p>Multiply ${F("x² − 3x", "x + 2")} · ${F("x² − 4", "x² − 6x + 9")}.</p>
          <p>= ${F("x(x − 3)", "x + 2")} · ${F("(x − 2)(x + 2)", "(x − 3)(x − 3)")}</p>
          <p>Cancel (x + 2) once and (x − 3) once. &nbsp;The answer is ${F("x(x − 2)", "x − 3")}.</p>
          <h3>Worked example 2: opposites</h3>
          <p>Multiply ${F("x − 5", "3x")} · ${F("12x", "5 − x")}.</p>
          <p>Write 5 − x = −1(x − 5). Then ${F("(x − 5) · 12x", "3x · (−1)(x − 5)")} = ${F("12", "−3")} = −4.</p>
          <div class="tip">When you see (a − b) and (b − a), factor −1 out of one of them. They cancel and leave −1.</div>
        `
      },
      {
        id: "ma02-l3",
        title: "Dividing rational expressions",
        html: `
          <div class="key-box">
            <h3>Dividing rational expressions</h3>
            <p>${F("a", "b")} ÷ ${F("c", "d")} = ${F("a", "b")} · ${F("d", "c")}: keep the first, change ÷ to ·, and flip the second (use its reciprocal).</p>
          </div>
          <h3>Worked example 1: numbers</h3>
          <p>${F("6", "25")} ÷ ${F("9", "10")} = ${F("6", "25")} · ${F("10", "9")} = ${F("2 · 3 · 2 · 5", "5 · 5 · 3 · 3")} = ${F("4", "15")}</p>
          <h3>Worked example 2: polynomials</h3>
          <p>Divide ${F("x² − 4", "x + 5")} ÷ ${F("x − 2", "x² − 25")}.</p>
          <p>= ${F("(x − 2)(x + 2)", "x + 5")} · ${F("(x − 5)(x + 5)", "x − 2")}. &nbsp;Cancel (x − 2) and (x + 5). &nbsp;The answer is (x + 2)(x − 5).</p>
          <h3>Dividing by a polynomial</h3>
          <p>A polynomial like (x² − 9) is the same as ${F("x² − 9", "1")}, so its reciprocal is ${F("1", "x² − 9")}.</p>
          <div class="tip">Flip only the expression <em>after</em> the ÷ sign. Then follow the same steps as for multiplying.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma02-ex1",
        title: "Multiply two fractions",
        type: "mc",
        instructions: `<p>Multiply and simplify: ${F("6", "35")} · ${F("14", "9")}</p>`,
        choices: [F("4", "15"), F("2", "5"), F("27", "245"), F("20", "44")],
        answer: 0,
        explain: "6 · 14 over 35 · 9 = (2 · 3 · 2 · 7) over (5 · 7 · 3 · 3). Cancel one 3 and one 7: 4 over 15.",
        hints: [
          "Multiply the numerators and multiply the denominators, but write the numbers as prime factors first.",
          "6 = 2 · 3, 14 = 2 · 7, 35 = 5 · 7, 9 = 3 · 3."
        ]
      },
      {
        id: "ma02-ex2",
        title: "Divide two fractions",
        type: "mc",
        instructions: `<p>Divide and simplify: ${F("8", "15")} ÷ ${F("12", "25")}</p>`,
        choices: [F("32", "125"), F("9", "10"), F("10", "9"), F("2", "3")],
        answer: 2,
        explain: "8 over 15 times 25 over 12 = (2 · 2 · 2 · 5 · 5) over (3 · 5 · 2 · 2 · 3) = 10 over 9.",
        hints: [
          "Multiply by the reciprocal of the second fraction.",
          "8/15 · 25/12. Cancel 4 from 8 and 12, and 5 from 15 and 25."
        ]
      },
      {
        id: "ma02-ex3",
        title: "The reciprocal",
        type: "mc",
        instructions: `<p>To divide by ${F("x + 4", "x − 7")}, you multiply by which expression?</p>`,
        choices: [F("x − 7", "x + 4"), F("−(x + 4)", "x − 7"), F("x + 4", "x − 7"), F("x + 7", "x − 4")],
        answer: 0,
        explain: "The reciprocal turns the fraction upside down: the numerator and the denominator change places. The signs inside do not change.",
        hints: [
          "Dividing by a fraction is the same as multiplying by its reciprocal.",
          "Reciprocal means: the top goes to the bottom, and the bottom goes to the top."
        ]
      },
      {
        id: "ma02-ex4",
        title: "Multiply monomials",
        type: "mc",
        instructions: `<p>Multiply and simplify: ${F("4x²", "15y")} · ${F("5y³", "8x")}. Assume no denominator is zero.</p>`,
        choices: [F("x²y", "6"), F("xy²", "6"), F("2xy²", "3"), F("6", "xy²")],
        answer: 1,
        explain: "Numbers: 4 · 5 over 15 · 8 = 20/120 = 1/6. Variables: x² over x = x, and y³ over y = y². The answer is xy² over 6.",
        hints: [
          "Do the numbers and each variable separately.",
          "x² ÷ x = x and y³ ÷ y = y². Where does each one end up: top or bottom?"
        ]
      },
      {
        id: "ma02-ex5",
        title: "Multiply: difference of squares",
        type: "mc",
        instructions: `<p>Multiply and simplify: ${F("x² − 36", "4x")} · ${F("8x²", "x − 6")}. Assume no denominator is zero.</p>`,
        choices: ["2x(x − 6)", "2(x + 6)", F("x + 6", "2x"), "2x(x + 6)"],
        answer: 3,
        explain: "x² − 36 = (x − 6)(x + 6). Cancel (x − 6). Then 8x² over 4x = 2x. The answer is 2x(x + 6).",
        hints: [
          "Factor x² − 36 first.",
          "After you cancel (x − 6), simplify 8x² over 4x."
        ]
      },
      {
        id: "ma02-ex6",
        title: "Multiply: trinomials",
        type: "mc",
        instructions: `<p>Multiply and simplify: ${F("x² + x − 20", "x² − 16")} · ${F("x + 4", "x² − 25")}. Assume no denominator is zero.</p>`,
        choices: [F("1", "x + 5"), F("x + 5", "x − 5"), F("1", "x − 5"), "x − 5"],
        answer: 2,
        explain: "x² + x − 20 = (x + 5)(x − 4), x² − 16 = (x − 4)(x + 4), x² − 25 = (x − 5)(x + 5). Cancel (x + 5), (x − 4), and (x + 4). Only (x − 5) is left, in the denominator.",
        hints: [
          "Factor all three polynomials that are not already factored.",
          "x² + x − 20 = (x + 5)(x − 4).",
          "After cancelling, is anything left in the numerator? If all factors cancel, the numerator is 1."
        ]
      },
      {
        id: "ma02-ex7",
        title: "Multiply: opposite factors",
        type: "mc",
        instructions: `<p>Multiply and simplify: ${F("x − 6", "4")} · ${F("10", "6 − x")}. Assume no denominator is zero.</p>`,
        choices: [F("5", "2"), F("−5", "2"), F("−2", "5"), F("5(x − 6)", "2(6 − x)") + " (cannot be simplified)"],
        answer: 1,
        explain: "6 − x = −1(x − 6). Cancel (x − 6) and keep the −1: 10 over 4 · (−1) = −5/2.",
        hints: [
          "(x − 6) and (6 − x) are opposites.",
          "Write 6 − x = −1(x − 6), then cancel."
        ]
      },
      {
        id: "ma02-ex8",
        title: "Divide: flip the second expression",
        type: "mc",
        instructions: `<p>Divide and simplify: ${F("x² − 25", "x + 1")} ÷ ${F("x − 5", "x² − 1")}. Assume no denominator is zero.</p>`,
        choices: ["(x + 5)(x − 1)", "(x − 5)(x + 1)", F("x + 5", "x − 1"), "(x − 5)(x − 1)"],
        answer: 0,
        explain: "Multiply by the reciprocal: (x − 5)(x + 5) over (x + 1), times (x − 1)(x + 1) over (x − 5). Cancel (x − 5) and (x + 1). The answer is (x + 5)(x − 1).",
        hints: [
          "Change ÷ to · and flip the second fraction.",
          "Factor x² − 25 and x² − 1. Both are differences of squares."
        ]
      },
      {
        id: "ma02-ex9",
        title: "Divide by a polynomial",
        type: "mc",
        instructions: `<p>Divide and simplify: ${F("3x + 12", "x − 2")} ÷ (x² − 16). Assume no denominator is zero.</p>`,
        choices: [F("3", "(x − 2)(x + 4)"), F("3(x − 4)", "x − 2"), F("3", "(x − 2)(x − 4)"), F("3(x + 4)", "x − 2")],
        answer: 2,
        explain: "x² − 16 is x² − 16 over 1, so its reciprocal is 1 over (x − 4)(x + 4). Then 3(x + 4) over (x − 2)(x − 4)(x + 4). Cancel (x + 4): 3 over (x − 2)(x − 4).",
        hints: [
          "Write x² − 16 as a fraction over 1. What is its reciprocal?",
          "3x + 12 = 3(x + 4) and x² − 16 = (x − 4)(x + 4)."
        ]
      },
      {
        id: "ma02-ex10",
        title: "Divide: two trinomials",
        type: "mc",
        instructions: `<p>Divide and simplify: ${F("3x² + 5x − 2", "x² − x − 6")} ÷ ${F("9x² − 1", "x² − 2x − 8")}. Assume no denominator is zero.</p>`,
        choices: [
          F("(x + 4)(x − 2)", "(x + 3)(3x + 1)"),
          F("(x − 4)(x + 2)", "(x − 3)(3x + 1)"),
          F("(x − 4)(x + 2)", "(x − 3)(3x − 1)"),
          F("x − 4", "x − 3")
        ],
        answer: 1,
        explain: "Factor: 3x² + 5x − 2 = (3x − 1)(x + 2); x² − x − 6 = (x − 3)(x + 2); 9x² − 1 = (3x − 1)(3x + 1); x² − 2x − 8 = (x − 4)(x + 2). Flip the second fraction, then cancel (3x − 1) and one (x + 2). Left: (x − 4)(x + 2) over (x − 3)(3x + 1).",
        hints: [
          "First flip the second fraction. Then factor all four polynomials.",
          "3x² + 5x − 2 = (3x − 1)(x + 2) and 9x² − 1 = (3x − 1)(3x + 1).",
          "Which two factors appear on both the top and the bottom?"
        ]
      }
    ]
  });
})();
