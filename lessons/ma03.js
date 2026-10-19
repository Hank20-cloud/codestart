// Math 11 Pre-Calculus, chapter 3 — Section 2.3: Sums and Differences of Rational Expressions. Topics follow the class
// textbook (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples, and questions are our own.
// Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma03", {
    intro: `
      <p>You add and subtract rational expressions with the same rules you use for fractions. When the denominators are
      different, you first find the <strong>LCD (Least Common Denominator)</strong>. Textbook: Section 2.3 (pages 83–90).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li><strong>Like denominators</strong>: add or subtract the numerators; keep the denominator.</li>
          <li><strong>Unlike denominators</strong>: rewrite each expression with the LCD, then add or subtract.</li>
          <li><strong>LCD</strong>: the product of every factor of the denominators, each to the highest power it has in any one denominator.</li>
          <li>When you subtract, the minus sign goes to <strong>every</strong> term of the second numerator. Use brackets.</li>
          <li>Opposite denominators: (a − b) = −(b − a), so you can change one into the other.</li>
          <li>Always simplify the answer to lowest terms at the end.</li>
        </ul>
        <h3>Key formulas</h3>
        <ul>
          <li>${F("a", "b")} + ${F("c", "b")} = ${F("a + c", "b")} &nbsp;and&nbsp; ${F("a", "b")} − ${F("c", "b")} = ${F("a − c", "b")}, where b ≠ 0</li>
          <li>Unlike denominators: ${F("a", "b")} + ${F("c", "d")} = ${F("ad + bc", "bd")} (bd is a common denominator; the LCD may be smaller)</li>
        </ul>
        <h3>Steps to find the LCD and add or subtract</h3>
        <ol>
          <li>Factor each denominator.</li>
          <li>List each factor to the highest power it has in any one denominator. Their product is the LCD.</li>
          <li>Rewrite each expression with the LCD as its denominator.</li>
          <li>Add or subtract the numerators.</li>
          <li>Simplify to lowest terms.</li>
        </ol>
      </div>
    `,
    lessons: [
      {
        id: "ma03-l1",
        title: "Like denominators",
        html: `
          <div class="key-box">
            <h3>Adding and subtracting with like denominators</h3>
            <p>${F("a", "b")} + ${F("c", "b")} = ${F("a + c", "b")} &nbsp;and&nbsp; ${F("a", "b")} − ${F("c", "b")} = ${F("a − c", "b")}, where b ≠ 0</p>
          </div>
          <h3>Worked example 1</h3>
          <p>${F("5x", "x + 3")} + ${F("15", "x + 3")} = ${F("5x + 15", "x + 3")} = ${F("5(x + 3)", "x + 3")} = 5, &nbsp;x ≠ −3</p>
          <h3>Worked example 2: subtract with brackets</h3>
          <p>${F("4x + 1", "x − 2")} − ${F("2x + 5", "x − 2")} = ${F("(4x + 1) − (2x + 5)", "x − 2")} = ${F("4x + 1 − 2x − 5", "x − 2")} = ${F("2x − 4", "x − 2")} = ${F("2(x − 2)", "x − 2")} = 2</p>
          <div class="tip">A common mistake: writing 4x + 1 − 2x <strong>+</strong> 5. The minus sign changes the sign of every term in the second numerator: −(2x + 5) = −2x − 5.</div>
          <p>Never add the denominators: ${F("1", "x")} + ${F("1", "x")} = ${F("2", "x")}, not ${F("2", "2x")}.</p>
        `
      },
      {
        id: "ma03-l2",
        title: "Finding the LCD",
        html: `
          <p>The <strong>LCD</strong> is the smallest expression that every denominator divides into.</p>
          <h3>Monomial denominators</h3>
          <p>Find the LCD of the numbers, then take each variable to its highest power.</p>
          <table>
            <tr><th>Denominators</th><th>LCD</th><th>Why</th></tr>
            <tr><td>9x², 12x</td><td>36x²</td><td>LCD of 9 and 12 is 36; highest power of x is x²</td></tr>
            <tr><td>4a³b, 10ab²</td><td>20a³b²</td><td>LCD of 4 and 10 is 20; a³ and b²</td></tr>
          </table>
          <h3>Polynomial denominators</h3>
          <p>Factor first. Then take each different factor, to its highest power.</p>
          <table>
            <tr><th>Denominators</th><th>Factored</th><th>LCD</th></tr>
            <tr><td>x² − 1 and x² + 2x + 1</td><td>(x − 1)(x + 1) and (x + 1)²</td><td>(x − 1)(x + 1)²</td></tr>
            <tr><td>5x − 15 and x² − 3x</td><td>5(x − 3) and x(x − 3)</td><td>5x(x − 3)</td></tr>
          </table>
          <h3>Worked example: monomials</h3>
          <p>${F("2", "9x²")} + ${F("5", "12x")} = ${F("2 · 4", "9x² · 4")} + ${F("5 · 3x", "12x · 3x")} = ${F("8", "36x²")} + ${F("15x", "36x²")} = ${F("15x + 8", "36x²")}</p>
          <div class="tip">Multiplying all the denominators together always gives a common denominator, but often not the <em>least</em> one. A bigger denominator means more work to simplify at the end.</div>
        `
      },
      {
        id: "ma03-l3",
        title: "Unlike denominators with polynomials",
        html: `
          <h3>Worked example 1</h3>
          <p>Add ${F("3", "x − 4")} + ${F("2", "x + 1")}. The LCD is (x − 4)(x + 1).</p>
          <p>= ${F("3(x + 1)", "(x − 4)(x + 1)")} + ${F("2(x − 4)", "(x − 4)(x + 1)")} = ${F("3x + 3 + 2x − 8", "(x − 4)(x + 1)")} = ${F("5x − 5", "(x − 4)(x + 1)")} = ${F("5(x − 1)", "(x − 4)(x + 1)")}</p>
          <h3>Worked example 2: factor first</h3>
          <p>Add ${F("1", "x − 1")} + ${F("2", "x² − 3x + 2")}.</p>
          <p>x² − 3x + 2 = (x − 1)(x − 2), so the LCD is (x − 1)(x − 2).</p>
          <p>= ${F("1(x − 2)", "(x − 1)(x − 2)")} + ${F("2", "(x − 1)(x − 2)")} = ${F("x − 2 + 2", "(x − 1)(x − 2)")} = ${F("x", "(x − 1)(x − 2)")}</p>
          <div class="tip">After you add, factor the numerator and check if a factor cancels with the denominator. Often it does.</div>
        `
      },
      {
        id: "ma03-l4",
        title: "Opposite denominators and word problems",
        html: `
          <h3>Opposite denominators</h3>
          <p>(6 − x) is the opposite of (x − 6): 6 − x = −(x − 6). So ${F("3", "6 − x")} = ${F("−3", "x − 6")}.</p>
          <p>Example: ${F("10", "x − 6")} + ${F("3", "6 − x")} = ${F("10", "x − 6")} − ${F("3", "x − 6")} = ${F("7", "x − 6")}</p>
          <h3>Rate problems</h3>
          <p>Many word problems use rates. If a job takes t hours, then in 1 hour you do ${F("1", "t")} of the job.</p>
          <p>Example: one printer prints a report in x minutes, and a second printer in (x + 4) minutes. Working together for 1 minute, they print
          ${F("1", "x")} + ${F("1", "x + 4")} = ${F("(x + 4) + x", "x(x + 4)")} = ${F("2x + 4", "x(x + 4)")} of the report.</p>
          <p>Distance problems use time = ${F("distance", "speed")}. Two trips with different speeds give two rational expressions that you add.</p>
          <div class="tip">For "together" problems, add the rates (parts of the job per unit of time), not the times.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma03-ex1",
        title: "Like denominators: add",
        type: "mc",
        instructions: `<p>Simplify ${F("x²", "x + 5")} − ${F("25", "x + 5")}. Assume the denominator is not zero.</p>`,
        choices: ["x + 5", "x − 5", F("x² − 25", "2x + 10"), "1"],
        answer: 1,
        explain: "The denominators are the same, so subtract the numerators: x² − 25 over x + 5. Factor: (x − 5)(x + 5) over (x + 5) = x − 5.",
        hints: [
          "Keep the denominator and subtract the numerators.",
          "x² − 25 is a difference of squares. Does a factor cancel?"
        ]
      },
      {
        id: "ma03-ex2",
        title: "Like denominators: subtract",
        type: "mc",
        instructions: `<p>Simplify ${F("7x + 1", "x − 2")} − ${F("3x + 9", "x − 2")}. Assume the denominator is not zero.</p>`,
        choices: [F("4x + 10", "x − 2"), "−4", F("10x + 10", "x − 2"), "4"],
        answer: 3,
        explain: "(7x + 1) − (3x + 9) = 7x + 1 − 3x − 9 = 4x − 8 = 4(x − 2). Divide by (x − 2): the answer is 4.",
        hints: [
          "Put the second numerator in brackets: (7x + 1) − (3x + 9).",
          "The minus changes both signs: −3x and −9.",
          "Factor the new numerator. Does (x − 2) cancel?"
        ]
      },
      {
        id: "ma03-ex3",
        title: "LCD of monomials",
        type: "mc",
        instructions: `<p>What is the LCD of ${F("5", "8a²b")} and ${F("1", "12ab³")}?</p>`,
        choices: ["96a³b⁴", "24a²b³", "4ab", "24a³b⁴"],
        answer: 1,
        explain: "The LCD of 8 and 12 is 24. The highest power of a is a², and of b is b³. So the LCD is 24a²b³. 96a³b⁴ is a common denominator, but not the least one.",
        hints: [
          "Find the least common multiple of 8 and 12 first.",
          "For each variable, take the highest power, not the sum of the powers."
        ]
      },
      {
        id: "ma03-ex4",
        title: "LCD of polynomials",
        type: "mc",
        instructions: `<p>What is the LCD of ${F("1", "x² − 4")} and ${F("3", "x² + 4x + 4")}?</p>`,
        choices: ["(x − 2)(x + 2)", "(x² − 4)(x² + 4x + 4)", "(x − 2)(x + 2)²", "(x − 2)²(x + 2)"],
        answer: 2,
        explain: "x² − 4 = (x − 2)(x + 2) and x² + 4x + 4 = (x + 2)². Take (x − 2) once and (x + 2) to the highest power, 2: the LCD is (x − 2)(x + 2)².",
        hints: [
          "Factor both denominators.",
          "x² + 4x + 4 is a perfect square: (x + 2)².",
          "Each factor appears in the LCD with its highest power."
        ]
      },
      {
        id: "ma03-ex5",
        title: "Unlike monomial denominators",
        type: "mc",
        instructions: `<p>Simplify ${F("3", "8x")} + ${F("5", "6x³")}. Assume x ≠ 0.</p>`,
        choices: [F("9x² + 20", "24x³"), F("8", "14x⁴"), F("8", "24x³"), F("9x + 20", "24x³")],
        answer: 0,
        explain: "The LCD is 24x³. 3/(8x) = 9x²/(24x³) (multiply by 3x²), and 5/(6x³) = 20/(24x³) (multiply by 4). Add: (9x² + 20)/(24x³).",
        hints: [
          "The LCD of 8x and 6x³ is 24x³.",
          "What must you multiply 8x by to get 24x³? Multiply its numerator by the same thing."
        ]
      },
      {
        id: "ma03-ex6",
        title: "Opposite denominators",
        type: "mc",
        instructions: `<p>Simplify ${F("5", "2x − 1")} − ${F("3", "1 − 2x")}. Assume the denominators are not zero.</p>`,
        choices: [F("2", "2x − 1"), F("8", "2x − 1"), F("−8", "2x − 1"), F("15", "(2x − 1)(1 − 2x)")],
        answer: 1,
        explain: "1 − 2x = −(2x − 1), so −3/(1 − 2x) = +3/(2x − 1). Then 5/(2x − 1) + 3/(2x − 1) = 8/(2x − 1).",
        hints: [
          "(1 − 2x) and (2x − 1) are opposites.",
          "Changing the denominator to its opposite also changes the sign in front of the fraction."
        ]
      },
      {
        id: "ma03-ex7",
        title: "Two binomial denominators",
        type: "mc",
        instructions: `<p>Simplify ${F("2", "x + 3")} + ${F("5", "x − 1")}. Assume the denominators are not zero.</p>`,
        choices: [F("7", "2x + 2"), F("7x + 17", "(x + 3)(x − 1)"), F("7x + 13", "(x + 3)(x − 1)"), F("7x − 13", "(x + 3)(x − 1)")],
        answer: 2,
        explain: "LCD = (x + 3)(x − 1). Numerator: 2(x − 1) + 5(x + 3) = 2x − 2 + 5x + 15 = 7x + 13.",
        hints: [
          "You cannot add the denominators. Find the LCD: (x + 3)(x − 1).",
          "Multiply 2 by (x − 1) and 5 by (x + 3), then add.",
          "Check the constant: −2 + 15."
        ]
      },
      {
        id: "ma03-ex8",
        title: "Simplify after subtracting",
        type: "mc",
        instructions: `<p>Simplify ${F("x", "x² − 16")} − ${F("4", "x² − 16")}. Assume the denominator is not zero.</p>`,
        choices: [F("1", "x − 4"), F("1", "x + 4"), "x − 4", F("−1", "x + 4")],
        answer: 1,
        explain: "(x − 4) over (x² − 16) = (x − 4) over (x − 4)(x + 4) = 1 over (x + 4).",
        hints: [
          "Subtract the numerators first.",
          "Factor x² − 16 and look for a factor that matches the new numerator."
        ]
      },
      {
        id: "ma03-ex9",
        title: "Factor, then subtract",
        type: "mc",
        instructions: `<p>Simplify ${F("3", "x + 2")} − ${F("x − 4", "x² − x − 6")}. Assume the denominators are not zero.</p>`,
        choices: [F("2x − 13", "(x + 2)(x − 3)"), F("2x − 5", "(x + 2)(x − 3)"), F("4x − 13", "(x + 2)(x − 3)"), F("2x + 5", "(x + 2)(x − 3)")],
        answer: 1,
        explain: "x² − x − 6 = (x + 2)(x − 3), which is the LCD. Numerator: 3(x − 3) − (x − 4) = 3x − 9 − x + 4 = 2x − 5.",
        hints: [
          "Factor x² − x − 6. Is (x + 2) one of its factors?",
          "Multiply the first fraction by (x − 3) over (x − 3).",
          "Use brackets: 3(x − 3) − (x − 4). The minus changes −4 to +4."
        ]
      },
      {
        id: "ma03-ex10",
        title: "Word problem: perimeter",
        type: "mc",
        instructions: `<p>A rectangle has length ${F("3", "x + 1")} m and width ${F("2", "x")} m. Which expression is its perimeter?</p>`,
        choices: [F("10x + 4", "x(x + 1)"), F("10", "2x + 1"), F("5x + 2", "x(x + 1)"), F("6", "x(x + 1)")],
        answer: 0,
        explain: "Perimeter = 2(length + width) = 2(3/(x + 1) + 2/x). The sum is (3x + 2(x + 1))/(x(x + 1)) = (5x + 2)/(x(x + 1)). Times 2: (10x + 4)/(x(x + 1)).",
        hints: [
          "Perimeter of a rectangle = 2 × (length + width).",
          "First add 3/(x + 1) + 2/x with the LCD x(x + 1).",
          "Do not forget to multiply the sum by 2."
        ]
      }
    ]
  });
})();
