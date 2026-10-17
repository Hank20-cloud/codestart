// Chapter 8 — Functions
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch08", {
  lessons: [
    {
      id: "ch08-l1",
      title: "What is a function?",
      html: `
        <p>A <strong>function</strong> is a piece of code with a name. You write it once, and then you can
        run it as many times as you want, just by using its name.</p>
        <p>You already used a function: <code>console.log</code>. Now you will make your own.</p>
        <pre><code>function sayHello() {
  console.log("Hello!");
  console.log("Nice to see you.");
}</code></pre>
        <p>This <strong>defines</strong> the function. It does not run it yet. To run it, you
        <strong>call</strong> it: write its name and round brackets.</p>
        <pre><code>sayHello();
sayHello();</code></pre>
        <p>Now the two lines are printed twice.</p>
        <div class="tip">Don't forget the <code>( )</code> when you call a function. <code>sayHello</code>
        without brackets does nothing.</div>
      `
    },
    {
      id: "ch08-l2",
      title: "Parameters: giving a function information",
      html: `
        <p>A function can get information when you call it. The names in the brackets of the definition are
        called <strong>parameters</strong>. They work like variables inside the function.</p>
        <pre><code>function greet(name) {
  console.log("Hi, " + name + "!");
}

greet("Ana");    // Hi, Ana!
greet("Omar");   // Hi, Omar!</code></pre>
        <p>When you call <code>greet("Ana")</code>, the parameter <code>name</code> gets the value
        <code>"Ana"</code>. The value you give is called an <strong>argument</strong>.</p>
        <p>A function can have several parameters, split by commas:</p>
        <pre><code>function showScore(player, points) {
  console.log(player + " has " + points + " points");
}

showScore("Mia", 12);   // Mia has 12 points</code></pre>
      `
    },
    {
      id: "ch08-l3",
      title: "Return values",
      html: `
        <p>Sometimes you want a function to <strong>give back</strong> an answer instead of printing it.
        Use <code>return</code>:</p>
        <pre><code>function double(x) {
  return x * 2;
}

let result = double(6);
console.log(result);          // 12
console.log(double(10) + 1);  // 21</code></pre>
        <p>The call <code>double(6)</code> is replaced by the answer, 12. You can put that answer in a
        variable, print it, or use it in more math.</p>
        <p><code>return</code> also <strong>ends</strong> the function. Code after <code>return</code> does not run.</p>
        <div class="tip"><strong>Print or return?</strong> <code>console.log</code> only shows a value on the
        screen. <code>return</code> hands the value back to the code that called the function, so the program
        can keep using it.</div>
      `
    },
    {
      id: "ch08-l4",
      title: "Using a function many times",
      html: `
        <p>Functions are great when you need the same work again and again. You can call a function inside a loop:</p>
        <pre><code>function square(n) {
  return n * n;
}

for (let i = 1; i &lt;= 3; i++) {
  console.log(i + " squared is " + square(i));
}</code></pre>
        <p>Output:</p>
        <pre><code>1 squared is 1
2 squared is 4
3 squared is 9</code></pre>
        <p>A function can also use <code>if</code> inside it:</p>
        <pre><code>function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}</code></pre>
        <p>If there is a mistake, you fix it in one place, and every call gets the fix.</p>
      `
    }
  ],
  exercises: [
    {
      id: "ch08-ex1",
      title: "Your first function",
      type: "js",
      instructions: `
        <p>Make a function called <code>cheer</code>. When it is called, it prints <strong>Go team!</strong></p>
        <p>Then call it <strong>three times</strong>, so the output is:</p>
        <pre><code>Go team!
Go team!
Go team!</code></pre>
      `,
      starterCode: "// Define the function cheer here\n\n\n// Call it three times here\n",
      solution: "// Define the function cheer here\nfunction cheer() {\n  console.log(\"Go team!\");\n}\n\n// Call it three times here\ncheer();\ncheer();\ncheer();\n",
      tests: [
        { check: "typeof cheer === 'function'", message: "I can't find a function called cheer. Start with: function cheer() { ... }" },
        { check: "(function () { var before = CS.logs.length; cheer(); var added = CS.logs.slice(before); CS.logs.length = before; return added.length === 1 && added[0].trim() === 'Go team!'; })()", message: "When cheer() is called, it should print \"Go team!\" one time." },
        { check: "CS.logs.map(function (l) { return l.trim(); }).join('|') === 'Go team!|Go team!|Go team!'", message: "The output should be \"Go team!\" exactly three times. Call the function three times." }
      ],
      hints: [
        "A function definition looks like <code>function name() { ... }</code>.",
        "Put <code>console.log(\"Go team!\");</code> inside the curly brackets.",
        "To call it, write <code>cheer();</code> on its own line, after the definition. Do that three times."
      ]
    },
    {
      id: "ch08-ex2",
      title: "A function with a parameter",
      type: "js",
      instructions: `
        <p>Make a function called <code>welcome</code> with one parameter, <code>name</code>.
        It prints <strong>Welcome, </strong> followed by the name and <strong>!</strong></p>
        <p>For example, <code>welcome("Ana")</code> prints <code>Welcome, Ana!</code></p>
        <p>Then call it two times: once with <code>"Ana"</code> and once with <code>"Ben"</code>.</p>
      `,
      starterCode: "",
      solution: "function welcome(name) {\n  console.log(\"Welcome, \" + name + \"!\");\n}\n\nwelcome(\"Ana\");\nwelcome(\"Ben\");\n",
      tests: [
        { check: "typeof welcome === 'function'", message: "I can't find a function called welcome." },
        { check: "CS.logged('Welcome, Ana!') && CS.logged('Welcome, Ben!')", message: "I expected \"Welcome, Ana!\" and \"Welcome, Ben!\" in the output. Did you call the function with both names?" },
        { check: "(function () { var before = CS.logs.length; welcome('Zoe'); var added = CS.logs.slice(before); CS.logs.length = before; return added.length === 1 && added[0].trim() === 'Welcome, Zoe!'; })()", message: "When I call welcome(\"Zoe\"), it should print \"Welcome, Zoe!\". Use the parameter name inside the function." }
      ],
      hints: [
        "Put the parameter in the brackets: <code>function welcome(name) { ... }</code>.",
        "Inside, join the text and the parameter: <code>\"Welcome, \" + name + \"!\"</code>.",
        "Print that inside the function. Then call it with <code>welcome(\"Ana\");</code> and one more line for Ben."
      ]
    },
    {
      id: "ch08-ex3",
      title: "Return a sum",
      type: "js",
      instructions: `
        <p>Make a function called <code>add</code> with two parameters, <code>a</code> and <code>b</code>.
        It must <strong>return</strong> (not print) the two numbers added together.</p>
        <p>The code at the bottom uses your function. When it is right, it prints <code>12</code> and <code>100</code>.</p>
      `,
      starterCode: "// Write the function add here\n\n\nconsole.log(add(5, 7));\nconsole.log(add(60, 40));\n",
      solution: "// Write the function add here\nfunction add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(5, 7));\nconsole.log(add(60, 40));\n",
      tests: [
        { check: "typeof add === 'function'", message: "I can't find a function called add." },
        { check: "add(2, 3) === 5 && add(10, -4) === 6 && add(0, 0) === 0", message: "add should give back the sum of its two numbers. For example add(2, 3) should be 5. Did you use return?" },
        { check: "CS.logged('12') && CS.logged('100')", message: "The output should show 12 and 100. Keep the two console.log lines at the bottom." }
      ],
      hints: [
        "A function with two parameters: <code>function add(a, b) { ... }</code>.",
        "Use <code>return</code> to give the answer back. Printing is not enough here.",
        "The only line inside the function is <code>return ...;</code> with the two parameters added together."
      ]
    },
    {
      id: "ch08-ex4",
      title: "Pass or fail",
      type: "js",
      instructions: `
        <p>Make a function called <code>result</code> with one parameter, <code>points</code>.</p>
        <ul>
          <li>If <code>points</code> is 50 or more, it returns the text <strong>pass</strong></li>
          <li>Otherwise, it returns <strong>fail</strong></li>
        </ul>
        <p>Then print the result for 80 points and for 30 points.</p>
      `,
      starterCode: "function result(points) {\n  // Your code here\n}\n\n",
      solution: "function result(points) {\n  if (points >= 50) {\n    return \"pass\";\n  } else {\n    return \"fail\";\n  }\n}\n\nconsole.log(result(80));\nconsole.log(result(30));\n",
      tests: [
        { check: "typeof result === 'function' && result(80) === 'pass' && result(99) === 'pass'", message: "result(80) should return \"pass\". Use return, not console.log, inside the function." },
        { check: "typeof result === 'function' && result(30) === 'fail' && result(0) === 'fail'", message: "result(30) should return \"fail\". Did you add the else part?" },
        { check: "typeof result === 'function' && result(50) === 'pass' && result(49) === 'fail'", message: "Check the edge: 50 points is a pass, 49 points is a fail." },
        { check: "CS.logged('pass') && CS.logged('fail')", message: "Print the result for 80 points and for 30 points with console.log(result(...))." }
      ],
      hints: [
        "Inside the function, use <code>if (points &gt;= 50) { ... } else { ... }</code>.",
        "In each part, use <code>return \"pass\";</code> or <code>return \"fail\";</code>.",
        "After the function, print with <code>console.log(result(80));</code> and do the same for 30."
      ]
    },
    {
      id: "ch08-ex5",
      title: "Mini challenge: temperature converter",
      type: "js",
      instructions: `
        <p>Make a function called <code>toFahrenheit</code> with one parameter, <code>celsius</code>.
        It returns the temperature in Fahrenheit. The formula is:</p>
        <pre><code>fahrenheit = celsius * 9 / 5 + 32</code></pre>
        <p>Then use a <code>for</code> loop to print a table for 0, 10, 20, 30 and 40 degrees Celsius, like this:</p>
        <pre><code>0 C = 32 F
10 C = 50 F
20 C = 68 F
30 C = 86 F
40 C = 104 F</code></pre>
      `,
      starterCode: "// 1. Write the function toFahrenheit\n\n\n// 2. Print the table with a loop\n",
      solution: "// 1. Write the function toFahrenheit\nfunction toFahrenheit(celsius) {\n  return celsius * 9 / 5 + 32;\n}\n\n// 2. Print the table with a loop\nfor (let c = 0; c <= 40; c += 10) {\n  console.log(c + \" C = \" + toFahrenheit(c) + \" F\");\n}\n",
      tests: [
        { check: "typeof toFahrenheit === 'function'", message: "I can't find a function called toFahrenheit." },
        { check: "toFahrenheit(0) === 32 && toFahrenheit(100) === 212 && toFahrenheit(-40) === -40", message: "toFahrenheit should return the result of the formula. For example toFahrenheit(100) should be 212. Did you use return?" },
        { check: "/\\b(for|while)\\s*\\(/.test(CS.code)", message: "Use a loop to print the table." },
        { check: "CS.logs.map(function (l) { return l.trim(); }).join('|') === '0 C = 32 F|10 C = 50 F|20 C = 68 F|30 C = 86 F|40 C = 104 F'", message: "The table should have 5 lines, from \"0 C = 32 F\" to \"40 C = 104 F\". Check the spaces and the loop step." }
      ],
      hints: [
        "The function needs only one line inside: <code>return</code> and the formula, with <code>celsius</code> in it.",
        "For the loop, start at 0, stop after 40, and count by 10 with <code>c += 10</code>.",
        "Inside the loop, print <code>c + \" C = \" + toFahrenheit(c) + \" F\"</code>."
      ]
    }
  ]
});
