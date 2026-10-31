// Math 11 Pre-Calculus, chapter 6 — Section 2.6: Graphing Rational Functions (domain, asymptotes, intercepts, graphs).
// Topics follow the class textbook (Chapter 2, Rational Functions, Crescent Beach Publishing). The text, examples,
// and questions are our own. Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  // A small graph from x = -6 to 6 and y = -6 to 6, drawn as inline SVG.
  // fn: the function. va: x-values of vertical asymptotes. ha: y-value of the horizontal asymptote (or null).
  function G(fn, va, ha, label) {
    var S = 20, W = 12 * S;                                    // 20 px per unit, 240 px wide
    function px(x) { return (x + 6) * S; }
    function py(y) { return (6 - y) * S; }
    var grid = "";
    for (var i = -6; i <= 6; i++) {
      grid += '<line x1="' + px(i) + '" y1="0" x2="' + px(i) + '" y2="' + W + '"/>' +
              '<line x1="0" y1="' + py(i) + '" x2="' + W + '" y2="' + py(i) + '"/>';
    }
    var asym = "";
    va.forEach(function (a) { asym += '<line x1="' + px(a) + '" y1="0" x2="' + px(a) + '" y2="' + W + '"/>'; });
    if (ha !== null) asym += '<line x1="0" y1="' + py(ha) + '" x2="' + W + '" y2="' + py(ha) + '"/>';
    // Curve: sample x, and start a new piece when the curve leaves the window or crosses an asymptote.
    var d = "", pen = false;
    for (var k = 0; k <= 1200; k++) {
      var x = -6 + k * 0.01, prev = x - 0.01;
      if (va.some(function (a) { return Math.abs(x - a) < 0.005 || (prev - a) * (x - a) < 0; })) { pen = false; continue; }
      var y = fn(x);
      if (!isFinite(y) || y > 6.5 || y < -6.5) { pen = false; continue; }
      d += (pen ? "L" : "M") + px(x).toFixed(1) + " " + py(y).toFixed(1) + " ";
      pen = true;
    }
    return '<svg viewBox="-2 -2 ' + (W + 4) + " " + (W + 4) + '" width="' + W + '" style="max-width:100%;height:auto;display:block;margin:8px 0" role="img" aria-label="' + label + '">' +
      '<g style="stroke:var(--line);stroke-width:1">' + grid + "</g>" +
      '<g style="stroke:var(--text);stroke-width:1.5"><line x1="0" y1="' + py(0) + '" x2="' + W + '" y2="' + py(0) + '"/><line x1="' + px(0) + '" y1="0" x2="' + px(0) + '" y2="' + W + '"/></g>' +
      '<g style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 4">' + asym + "</g>" +
      '<path d="' + d + '" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>' +
      '<g style="fill:var(--muted);font-size:11px"><text x="' + (px(6) - 10) + '" y="' + (py(0) - 4) + '">x</text><text x="' + (px(0) + 4) + '" y="10">y</text></g>' +
      "</svg>";
  }

  addChapterContent("ma06", {
    intro: `
      <p>A <strong>rational function</strong> is a function whose rule is a rational expression. In this chapter you
      find its domain, its <strong>asymptotes</strong> (lines the graph comes close to but does not touch), and its
      intercepts. Then you sketch the graph. Textbook: Section 2.6 (pages 106–114).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ul>
          <li><strong>Rational function</strong>: f(x) = ${F("g(x)", "h(x)")}, where g(x) and h(x) are polynomials.</li>
          <li><strong>Domain</strong>: all real numbers except the values that make the denominator zero.</li>
          <li><strong>Vertical asymptote</strong> x = a: the graph goes to +∞ or −∞ as x comes close to a. Find it with denominator = 0 (after you cancel common factors).</li>
          <li><strong>Horizontal asymptote</strong> y = b: the graph comes close to y = b as x → +∞ or x → −∞.</li>
          <li><strong>Hole</strong>: if a factor cancels (top and bottom), that x-value gives a missing point, not an asymptote.</li>
          <li>Notation: x → 2⁺ means "x comes close to 2 from the right" (slightly more than 2). x → 2⁻ means from the left (slightly less than 2).</li>
          <li><strong>x-intercept</strong>: set the numerator = 0. <strong>y-intercept</strong>: put x = 0 (only if 0 is in the domain).</li>
        </ul>
        <h3>Key formulas: horizontal asymptote of ${F("g(x)", "h(x)")}</h3>
        <ul>
          <li>Degree of bottom is higher: y = 0</li>
          <li>Same degree: y = ${F("leading coefficient of top", "leading coefficient of bottom")}</li>
          <li>Degree of top is higher: no horizontal asymptote</li>
          <li>Shift: f(x) = ${F("1", "x − h")} + k has vertical asymptote x = h and horizontal asymptote y = k</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma06-l1",
        title: "The basic graph y = 1/x",
        html: `
          <p>Look at f(x) = ${F("1", "x")}. It is not defined at x = 0. Make a table of values near 0 and far from 0:</p>
          <table>
            <tr><th>x</th><td>−100</td><td>−1</td><td>−0.01</td><td>0.01</td><td>1</td><td>100</td></tr>
            <tr><th>f(x)</th><td>−0.01</td><td>−1</td><td>−100</td><td>100</td><td>1</td><td>0.01</td></tr>
          </table>
          <ul>
            <li>As x → 0⁺, f(x) → +∞. As x → 0⁻, f(x) → −∞. So <strong>x = 0</strong> (the y-axis) is a vertical asymptote.</li>
            <li>As x → +∞, f(x) → 0⁺. As x → −∞, f(x) → 0⁻. So <strong>y = 0</strong> (the x-axis) is a horizontal asymptote.</li>
          </ul>
          ${G(function (x) { return 1 / x; }, [0], 0, "Graph of y = 1 over x: two curves, one in the top right and one in the bottom left, close to both axes")}
          <h3>Shifting the graph</h3>
          <p>g(x) = ${F("1", "x − 2")} + 1 is the same graph moved 2 right and 1 up. The asymptotes move too:
          <strong>x = 2</strong> and <strong>y = 1</strong> (dashed lines below).</p>
          ${G(function (x) { return 1 / (x - 2) + 1; }, [2], 1, "Graph of y = 1 over (x minus 2), plus 1, with dashed asymptotes x = 2 and y = 1")}
          <div class="tip">An asymptote is <strong>not part of the graph</strong>. Draw it as a dashed line to help you sketch.</div>
        `
      },
      {
        id: "ma06-l2",
        title: "Finding vertical and horizontal asymptotes",
        html: `
          <h3>Vertical asymptotes: denominator = 0</h3>
          <table>
            <tr><th>Function</th><th>Denominator = 0</th><th>Vertical asymptote(s)</th></tr>
            <tr><td>${F("5", "x + 4")}</td><td>x + 4 = 0</td><td>x = −4</td></tr>
            <tr><td>${F("x", "x² − x − 6")}</td><td>(x − 3)(x + 2) = 0</td><td>x = 3, x = −2</td></tr>
            <tr><td>${F("x + 1", "x² + 4")}</td><td>x² = −4 (no real answer)</td><td>none</td></tr>
          </table>
          <h3>Horizontal asymptotes: compare the degrees</h3>
          <table>
            <tr><th>Function</th><th>Degrees (top, bottom)</th><th>Horizontal asymptote</th></tr>
            <tr><td>${F("3x", "x² + 1")}</td><td>1, 2 (bottom higher)</td><td>y = 0</td></tr>
            <tr><td>${F("4x − 1", "2x + 3")}</td><td>1, 1 (same)</td><td>y = ${F("4", "2")} = 2</td></tr>
            <tr><td>${F("(3x + 1)(x − 2)", "x² + 5")}</td><td>2, 2 (same; top starts 3x²)</td><td>y = 3</td></tr>
            <tr><td>${F("x² + 1", "x − 1")}</td><td>2, 1 (top higher)</td><td>none</td></tr>
          </table>
          <h3>Holes</h3>
          <p>f(x) = ${F("(x − 1)(x + 3)", "x − 1")} simplifies to x + 3, but x ≠ 1. The graph is the line y = x + 3 with the
          point <strong>(1, 4)</strong> missing (an open circle). There is no vertical asymptote at x = 1, because the factor cancelled.</p>
          <div class="tip">For a horizontal asymptote, look only at the <strong>highest power</strong> in the top and in the bottom.
          When x is very large, the other terms are too small to matter.</div>
        `
      },
      {
        id: "ma06-l3",
        title: "Intercepts and sketching the graph",
        html: `
          <p>Steps to sketch a rational function:</p>
          <ol>
            <li>Factor the top and the bottom. Cancel common factors (they give holes).</li>
            <li>Find the vertical asymptotes and the horizontal asymptote. Draw them dashed.</li>
            <li>Find the intercepts. x-intercepts: numerator = 0. y-intercept: f(0).</li>
            <li>Make a short table: one x-value on each side of every vertical asymptote, and large x-values.</li>
            <li>Draw smooth curves that come close to the asymptotes.</li>
          </ol>
          <h3>Worked example</h3>
          <p>Sketch f(x) = ${F("2x − 2", "x + 2")} = ${F("2(x − 1)", "x + 2")}.</p>
          <ul>
            <li>Vertical asymptote: x = −2. Horizontal asymptote (same degree): y = ${F("2", "1")} = 2.</li>
            <li>x-intercept: 2(x − 1) = 0 → (1, 0). y-intercept: f(0) = ${F("−2", "2")} = −1 → (0, −1).</li>
            <li>Table: f(−3) = 8, f(−1) = −4, f(100) ≈ 1.94 (just below 2), f(−100) ≈ 2.06 (just above 2).</li>
          </ul>
          ${G(function (x) { return (2 * x - 2) / (x + 2); }, [-2], 2, "Graph of y = (2x minus 2) over (x plus 2), with dashed asymptotes x = -2 and y = 2; it crosses the x-axis at 1 and the y-axis at -1")}
          <h3>Domain and range from the graph</h3>
          <p>For this graph: domain x ≠ −2 (all real numbers except −2), range y ≠ 2.</p>
          <div class="tip">A graph can cross its <strong>horizontal</strong> asymptote in the middle (for example ${F("x", "x² + 1")} crosses y = 0 at the origin).
          It can never cross a <strong>vertical</strong> asymptote, because the function is not defined there.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma06-ex1",
        title: "Domain of a rational function",
        type: "mc",
        instructions: `<p>What is the domain of f(x) = ${F("x + 5", "x² − 16")}?</p>`,
        choices: ["All real numbers except −5", "All real numbers except 4", "All real numbers except 4 and −4", "All real numbers"],
        answer: 2,
        explain: "The denominator is x² − 16 = (x − 4)(x + 4). It is zero at x = 4 and x = −4. The numerator does not change the domain.",
        hints: [
          "The domain excludes the values that make the denominator zero.",
          "Factor x² − 16 as a difference of squares."
        ]
      },
      {
        id: "ma06-ex2",
        title: "No vertical asymptote",
        type: "mc",
        instructions: `<p>Which function has a graph with <strong>no</strong> vertical asymptote?</p>`,
        choices: [F("3", "x − 7"), F("x", "x² + 9"), F("1", "x²"), F("2x", "x² − 1")],
        answer: 1,
        explain: "x² + 9 = 0 means x² = −9. No real number squared is negative, so the denominator is never zero and there is no vertical asymptote.",
        hints: [
          "Set each denominator equal to zero.",
          "Can a real number squared be negative?"
        ]
      },
      {
        id: "ma06-ex3",
        title: "Find the vertical asymptotes",
        type: "mc",
        instructions: `<p>Find the vertical asymptotes of g(x) = ${F("4", "x² + 2x − 15")}.</p>`,
        choices: ["x = 5 and x = −3", "x = −5 and x = 3", "x = 15", "y = 0"],
        answer: 1,
        explain: "x² + 2x − 15 = (x + 5)(x − 3). It is zero at x = −5 and x = 3. (y = 0 is the horizontal asymptote, not a vertical one.)",
        hints: [
          "Factor the denominator: two numbers that multiply to −15 and add to 2.",
          "Vertical asymptotes are written as x = …"
        ]
      },
      {
        id: "ma06-ex4",
        title: "Horizontal asymptote, same degree",
        type: "mc",
        instructions: `<p>Find the horizontal asymptote of f(x) = ${F("6x + 1", "3x − 4")}.</p>`,
        choices: ["y = 0", "y = 2", "y = 6", "x = 4/3"],
        answer: 1,
        explain: "The top and the bottom both have degree 1. The horizontal asymptote is the ratio of the leading coefficients: y = 6/3 = 2.",
        hints: [
          "Compare the highest powers of x in the top and the bottom.",
          "Same degree: divide the leading coefficients."
        ]
      },
      {
        id: "ma06-ex5",
        title: "No horizontal asymptote",
        type: "mc",
        instructions: `<p>Which function has a graph with <strong>no</strong> horizontal asymptote?</p>`,
        choices: [F("5x", "x² + 2"), F("x − 3", "2x + 1"), F("x² − 1", "x + 4"), F("7", "x − 1")],
        answer: 2,
        explain: "In (x² − 1)/(x + 4) the top has degree 2 and the bottom has degree 1. When the top has the higher degree, there is no horizontal asymptote.",
        hints: [
          "Write the degree of the top and of the bottom for each choice.",
          "Which one has a higher power on top?"
        ]
      },
      {
        id: "ma06-ex6",
        title: "Asymptotes of a shifted graph",
        type: "mc",
        instructions: `<p>Find the asymptotes of h(x) = ${F("1", "x + 3")} − 4.</p>`,
        choices: ["x = 3 and y = 4", "x = −3 and y = −4", "x = −3 and y = 0", "x = −4 and y = −3"],
        answer: 1,
        explain: "x + 3 = 0 gives the vertical asymptote x = −3. The graph of 1/(x + 3) is shifted down 4, so the horizontal asymptote y = 0 moves to y = −4.",
        hints: [
          "The denominator gives the vertical asymptote.",
          "The − 4 shifts the whole graph down 4 units."
        ]
      },
      {
        id: "ma06-ex7",
        title: "Intercepts",
        type: "mc",
        instructions: `<p>Find the intercepts of y = ${F("x − 6", "x + 2")}.</p>`,
        choices: ["x-intercept (6, 0), y-intercept (0, −3)", "x-intercept (−2, 0), y-intercept (0, 6)", "x-intercept (6, 0), no y-intercept", "x-intercept (0, −3), y-intercept (6, 0)"],
        answer: 0,
        explain: "x-intercept: the numerator x − 6 = 0, so (6, 0). y-intercept: put x = 0: (0 − 6)/(0 + 2) = −3, so (0, −3).",
        hints: [
          "A fraction is zero when its numerator is zero.",
          "For the y-intercept, put x = 0."
        ]
      },
      {
        id: "ma06-ex8",
        title: "A hole, not an asymptote",
        type: "mc",
        instructions: `<p>The graph of f(x) = ${F("(x + 4)(x − 2)", "x − 2")} is a straight line with one point missing. Which point is missing?</p>`,
        choices: ["(2, 0)", "(−4, 0)", "(2, 6)", "(0, 4)"],
        answer: 2,
        explain: "The factor (x − 2) cancels, so f(x) = x + 4 with x ≠ 2. The line y = x + 4 would pass through (2, 6), so that point is the hole.",
        hints: [
          "Cancel the common factor. What line is left?",
          "Put x = 2 into the simplified line to find the y-value of the hole."
        ]
      },
      {
        id: "ma06-ex9",
        title: "Directional approach",
        type: "mc",
        instructions: `<p>For f(x) = ${F("1", "x − 3")}, what happens as x → 3⁻ (x comes close to 3 from the left)?</p>
          ${G(function (x) { return 1 / (x - 3); }, [3], 0, "Graph of y = 1 over (x minus 3) with a dashed vertical asymptote at x = 3")}`,
        choices: ["y → +∞", "y → −∞", "y → 0", "y → 3"],
        answer: 1,
        explain: "Just left of 3, for example x = 2.99, the denominator is −0.01 (small and negative). 1 ÷ (−0.01) = −100. So y → −∞. On the graph, the left branch goes down along x = 3.",
        hints: [
          "Try a number slightly less than 3, like 2.99.",
          "Is x − 3 positive or negative there?"
        ]
      },
      {
        id: "ma06-ex10",
        title: "Domain and range",
        type: "mc",
        instructions: `<p>What are the domain and range of f(x) = ${F("3x", "x − 1")}?</p>`,
        choices: ["Domain x ≠ 1, range y ≠ 3", "Domain x ≠ 3, range y ≠ 1", "Domain x ≠ 1, range all real numbers", "Domain x ≠ 0, range y ≠ 3"],
        answer: 0,
        explain: "The vertical asymptote is x = 1, so x ≠ 1. The horizontal asymptote is y = 3/1 = 3. This graph (a shifted 1/x shape) never reaches y = 3, so y ≠ 3.",
        hints: [
          "Find the vertical asymptote for the domain.",
          "Find the horizontal asymptote for the range."
        ]
      }
    ]
  });
})();
