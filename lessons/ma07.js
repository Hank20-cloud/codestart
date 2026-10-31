// Math 11 Pre-Calculus, chapter 7 — Section 2.7: Applications of Rational Equations (number, work, and distance
// problems). Topics follow the class textbook (Chapter 2, Rational Functions, Crescent Beach Publishing). The text,
// examples, and questions are our own. Lesson and exercise html is written by the course author (trusted content).
(function () {
  // A stacked fraction: numerator over denominator (style .frac in css/style.css).
  function F(n, d) { return '<span class="frac"><span>' + n + "</span><span>" + d + "</span></span>"; }

  addChapterContent("ma07", {
    intro: `
      <p>This chapter uses rational equations to solve word problems: unknown numbers, work done together, and
      travel with different speeds. The algebra is the same as in Section 2.5. The new skill is writing the equation
      from the words. Textbook: Section 2.7 (pages 115–122).</p>
      <div class="key-box">
        <h3>Key concepts</h3>
        <ol>
          <li>Read the problem many times. Know what you must find and what you are given.</li>
          <li>Let x be the unknown. Write everything else in terms of x.</li>
          <li>If possible, make a table or a diagram.</li>
          <li>Write an equation, then solve it.</li>
          <li>Check the answer in the <strong>words</strong> of the problem. Reject answers that make no sense (a negative time or speed).</li>
        </ol>
        <h3>Key formulas</h3>
        <ul>
          <li>Reciprocal of x: ${F("1", "x")}</li>
          <li>Work rate: if a job takes t hours, the rate is ${F("1", "t")} of the job per hour</li>
          <li>Working together: ${F("1", "a")} + ${F("1", "b")} = ${F("1", "T")} (T = time together); a drain that empties is subtracted</li>
          <li>Distance = speed × time, so time = ${F("distance", "speed")}</li>
          <li>Boat with current c: speed downstream = x + c, upstream = x − c</li>
          <li>Average speed = ${F("total distance", "total time")} (not the average of the two speeds)</li>
        </ul>
      </div>
    `,
    lessons: [
      {
        id: "ma07-l1",
        title: "Number problems",
        html: `
          <p>The <strong>reciprocal</strong> of a number x is ${F("1", "x")}. "Twice the reciprocal" is ${F("2", "x")}.</p>
          <h3>Worked example</h3>
          <p>The sum of a number and three times its reciprocal is 4. Find the number.</p>
          <p>Let x = the number (x ≠ 0). Equation: x + ${F("3", "x")} = 4.</p>
          <p>Multiply by x: x² + 3 = 4x &nbsp;→&nbsp; x² − 4x + 3 = 0 &nbsp;→&nbsp; (x − 1)(x − 3) = 0 &nbsp;→&nbsp; x = 1 or x = 3.</p>
          <p>Check: 1 + 3 = 4 ✓ and 3 + 1 = 4 ✓. The number can be 1 or 3.</p>
          <h3>Consecutive integers</h3>
          <table>
            <tr><th>Words</th><th>In terms of x</th></tr>
            <tr><td>two consecutive integers</td><td>x and x + 1</td></tr>
            <tr><td>two consecutive even (or odd) integers</td><td>x and x + 2</td></tr>
          </table>
          <p>Example: two consecutive even integers have reciprocals that add to ${F("5", "12")}.
          ${F("1", "x")} + ${F("1", "x + 2")} = ${F("5", "12")}. Multiply by 12x(x + 2): 12(x + 2) + 12x = 5x(x + 2), so
          5x² − 14x − 24 = 0 and (x − 4)(5x + 6) = 0. The integer answer is x = 4, so the numbers are <strong>4 and 6</strong>.</p>
          <div class="tip">If the problem says "integer", reject answers that are fractions, like x = −${F("6", "5")} above.</div>
        `
      },
      {
        id: "ma07-l2",
        title: "Work problems",
        html: `
          <p>If a person can do a job in 6 hours, in one hour they do ${F("1", "6")} of the job. This is their <strong>rate</strong>.
          When people work together, their rates add.</p>
          <h3>Worked example: two painters</h3>
          <p>Mia can paint a fence in 3 hours. Leo needs 6 hours. How long does it take if they work together?</p>
          <p>${F("1", "3")} + ${F("1", "6")} = ${F("1", "T")}. Multiply by 6T: 2T + T = 6, so T = <strong>2 hours</strong>.</p>
          <h3>Worked example: unknown times</h3>
          <p>A large pump fills a tank 3 hours faster than a small pump. Together they fill it in 2 hours. Find each time.</p>
          <table>
            <tr><th></th><th>Small pump</th><th>Large pump</th><th>Together</th></tr>
            <tr><th>Time (hours)</th><td>x</td><td>x − 3</td><td>2</td></tr>
            <tr><th>Rate (per hour)</th><td>${F("1", "x")}</td><td>${F("1", "x − 3")}</td><td>${F("1", "2")}</td></tr>
          </table>
          <p>${F("1", "x")} + ${F("1", "x − 3")} = ${F("1", "2")}. Multiply by 2x(x − 3): 2(x − 3) + 2x = x(x − 3), so x² − 7x + 6 = 0
          and (x − 1)(x − 6) = 0.</p>
          <p>x = 1 gives a large-pump time of −2 hours, which is impossible. So the small pump takes <strong>6 hours</strong> and the large pump <strong>3 hours</strong>.</p>
          <h3>A drain works against you</h3>
          <p>A tap fills a tub in 10 min and a drain empties it in 15 min. With both open: ${F("1", "10")} − ${F("1", "15")} = ${F("1", "T")}, so T = 30 min.</p>
          <div class="tip">Use the same unit of time everywhere. 80 minutes = ${F("4", "3")} hours, so the rate together is ${F("3", "4")} per hour.</div>
        `
      },
      {
        id: "ma07-l3",
        title: "Distance, speed, and time problems",
        html: `
          <p>Use d = s · t, so t = ${F("d", "s")}. A table with distance, speed, and time helps a lot.</p>
          <h3>Worked example: a boat and a current</h3>
          <p>A boat goes 30 km downstream in the same time it goes 20 km upstream. The current is 4 km/h. Find the speed of the boat in still water.</p>
          <table>
            <tr><th></th><th>Distance (km)</th><th>Speed (km/h)</th><th>Time (h)</th></tr>
            <tr><th>Downstream</th><td>30</td><td>x + 4</td><td>${F("30", "x + 4")}</td></tr>
            <tr><th>Upstream</th><td>20</td><td>x − 4</td><td>${F("20", "x − 4")}</td></tr>
          </table>
          <p>The times are equal: ${F("30", "x + 4")} = ${F("20", "x − 4")}. Cross-multiply: 30x − 120 = 20x + 80, so 10x = 200 and x = <strong>20 km/h</strong>.</p>
          <h3>Worked example: average speed</h3>
          <p>You drive to a town at 90 km/h and come back on the same road at 60 km/h. What is the average speed for the whole trip?</p>
          <p>Let d be the one-way distance. Total time = ${F("d", "90")} + ${F("d", "60")}. With average speed x: ${F("d", "90")} + ${F("d", "60")} = ${F("2d", "x")}.</p>
          <p>Divide by d and multiply by 180x: 2x + 3x = 360, so x = <strong>72 km/h</strong>, not 75 km/h.</p>
          <div class="tip">The average speed is lower than 75 because you spend <strong>more time</strong> at the slow speed.</div>
        `
      }
    ],
    exercises: [
      {
        id: "ma07-ex1",
        title: "A number and its reciprocal",
        type: "mc",
        instructions: `<p>The sum of a number and its reciprocal is ${F("17", "4")}. Find the number.</p>`,
        choices: ["4 only", "4 or " + F("1", "4"), F("17", "8"), "−4 or −" + F("1", "4")],
        answer: 1,
        explain: "x + 1/x = 17/4. Multiply by 4x: 4x² + 4 = 17x, so 4x² − 17x + 4 = 0 and (4x − 1)(x − 4) = 0. x = 4 or x = 1/4. Both work: 4 + 1/4 = 17/4.",
        hints: [
          "Write x + 1/x = 17/4 and multiply by 4x.",
          "Factor 4x² − 17x + 4. There are two answers."
        ]
      },
      {
        id: "ma07-ex2",
        title: "Write the equation",
        type: "mc",
        instructions: `<p>"Two consecutive odd integers have reciprocals that add to ${F("12", "35")}." Which equation fits?</p>`,
        choices: [
          F("1", "x") + " + " + F("1", "x + 1") + " = " + F("12", "35"),
          F("1", "x") + " + " + F("1", "x + 2") + " = " + F("12", "35"),
          "x + (x + 2) = " + F("35", "12"),
          F("2", "x") + " = " + F("12", "35")
        ],
        answer: 1,
        explain: "Consecutive odd integers differ by 2, so they are x and x + 2. Their reciprocals are 1/x and 1/(x + 2). (The answer is 5 and 7: 1/5 + 1/7 = 12/35.)",
        hints: [
          "Odd numbers like 5, 7, 9 are 2 apart.",
          "The reciprocal of x + 2 is 1/(x + 2)."
        ]
      },
      {
        id: "ma07-ex3",
        title: "Working together",
        type: "mc",
        instructions: `<p>Ana can wash the family car in 30 minutes. Her brother needs 45 minutes. How long does it take if they wash it together?</p>`,
        choices: ["15 minutes", "18 minutes", "37.5 minutes", "75 minutes"],
        answer: 1,
        explain: "1/30 + 1/45 = 1/T. Multiply by 90T: 3T + 2T = 90, so T = 18 minutes. Working together must be faster than either person alone.",
        hints: [
          "Add the rates: 1/30 + 1/45.",
          "The LCD of 30 and 45 is 90."
        ]
      },
      {
        id: "ma07-ex4",
        title: "Find the third worker",
        type: "mc",
        instructions: `<p>One worker does a job in 12 hours and a second worker in 6 hours. With a third worker, the three finish in 3 hours. How long would the third worker need alone?</p>`,
        choices: ["4 hours", "6 hours", "12 hours", "3 hours"],
        answer: 2,
        explain: "1/12 + 1/6 + 1/x = 1/3. Multiply by 12x: x + 2x + 12 = 4x, so x = 12 hours. Check: 1/12 + 2/12 + 1/12 = 4/12 = 1/3. ✓",
        hints: [
          "The three rates add to the rate together, 1/3.",
          "Multiply every term by 12x."
        ]
      },
      {
        id: "ma07-ex5",
        title: "Taps and a drain",
        type: "mc",
        instructions: `<p>A cold tap fills a tub in 4 minutes and a hot tap in 6 minutes. The drain empties a full tub in 3 minutes. With both taps on and the drain open, how long does it take to fill the tub?</p>`,
        choices: ["12 minutes", "2.4 minutes", "4 minutes", "It never fills"],
        answer: 0,
        explain: "1/4 + 1/6 − 1/3 = 1/T. With LCD 12: 3/12 + 2/12 − 4/12 = 1/12. So T = 12 minutes.",
        hints: [
          "The drain removes water, so subtract its rate.",
          "Use the LCD 12 for 1/4, 1/6, and 1/3."
        ]
      },
      {
        id: "ma07-ex6",
        title: "One is faster than the other",
        type: "mc",
        instructions: `<p>Kai takes 5 hours longer than Lin to build a model. Together they need 6 hours. How long does Lin need alone?</p>`,
        choices: ["5 hours", "10 hours", "15 hours", "−3 hours"],
        answer: 1,
        explain: "1/x + 1/(x + 5) = 1/6. Multiply by 6x(x + 5): 6(x + 5) + 6x = x(x + 5), so x² − 7x − 30 = 0 and (x − 10)(x + 3) = 0. Reject −3 (a time cannot be negative). Lin needs 10 hours, Kai 15 hours.",
        hints: [
          "Let x = Lin's time. Then Kai's time is x + 5.",
          "You get a quadratic. One answer is negative. Reject it."
        ]
      },
      {
        id: "ma07-ex7",
        title: "A boat against the current",
        type: "mc",
        instructions: `<p>A boat travels 45 km downstream in the same time it travels 27 km upstream. The current is 3 km/h. What is the speed of the boat in still water?</p>`,
        choices: ["9 km/h", "12 km/h", "15 km/h", "18 km/h"],
        answer: 1,
        explain: "45/(x + 3) = 27/(x − 3). Cross-multiply: 45x − 135 = 27x + 81, so 18x = 216 and x = 12 km/h. Check: 45/15 = 3 h and 27/9 = 3 h. ✓",
        hints: [
          "Downstream speed x + 3, upstream speed x − 3.",
          "Time = distance ÷ speed. The two times are equal."
        ]
      },
      {
        id: "ma07-ex8",
        title: "Average speed for a round trip",
        type: "mc",
        instructions: `<p>A cyclist rides to the lake at 20 km/h and returns on the same road at 30 km/h. What is the average speed for the round trip?</p>`,
        choices: ["25 km/h", "24 km/h", "26 km/h", "50 km/h"],
        answer: 1,
        explain: "d/20 + d/30 = 2d/x. Divide by d and multiply by 60x: 3x + 2x = 120, so x = 24 km/h. It is less than 25 because more time is spent at 20 km/h.",
        hints: [
          "Average speed = total distance ÷ total time, not (20 + 30) ÷ 2.",
          "Let d be the one-way distance. It cancels."
        ]
      },
      {
        id: "ma07-ex9",
        title: "Same distance, different start",
        type: "mc",
        instructions: `<p>Two friends run 6 km. Sam runs 2 km/h faster than Ali and finishes 15 minutes (${F("1", "4")} hour) earlier. How fast does Ali run?</p>`,
        choices: ["8 km/h", "12 km/h", "10 km/h", "6 km/h"],
        answer: 3,
        explain: "Ali's time − Sam's time = 1/4: 6/x − 6/(x + 2) = 1/4. Multiply by 4x(x + 2): 24(x + 2) − 24x = x(x + 2), so x² + 2x − 48 = 0 and (x − 6)(x + 8) = 0. Reject −8. Ali runs 6 km/h and Sam 8 km/h. Check: 6/6 = 1 h and 6/8 = 0.75 h, a difference of 0.25 h. ✓",
        hints: [
          "The slower runner (Ali) takes more time.",
          "Change 15 minutes to hours before you write the equation."
        ]
      },
      {
        id: "ma07-ex10",
        title: "Round trip on a river",
        type: "mc",
        instructions: `<p>The current of a river is 2 km/h. A boat goes 24 km upstream and 24 km back in a total of 5 hours. What is the speed of the boat in still water?</p>`,
        choices: ["8 km/h", "10 km/h", "12 km/h", "6 km/h"],
        answer: 1,
        explain: "24/(x − 2) + 24/(x + 2) = 5. Multiply by (x − 2)(x + 2): 24(x + 2) + 24(x − 2) = 5(x² − 4), so 5x² − 48x − 20 = 0 and (x − 10)(5x + 2) = 0. Reject the negative answer. x = 10 km/h. Check: 24/8 + 24/12 = 3 + 2 = 5 hours. ✓",
        hints: [
          "Upstream speed x − 2, downstream speed x + 2.",
          "The two times add to 3 hours."
        ]
      }
    ]
  });
})();
