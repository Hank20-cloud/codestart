// Programming basics, chapter 9 — Small programs (Pre-AP CSP topic 9, "Suggested progression", "The real goal").
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py09", {
  lessons: [
    {
      id: "py09-l1",
      title: "Start small: a grade calculator",
      html: `
        <p>Now you combine everything you learned. Do not try to build a huge application right away. Start with small programs.</p>
        <p><strong>Program 1 — Grade calculator</strong></p>
        <pre><code>score = int(input("Enter your score: "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print("Your grade is:", grade)</code></pre>
        <p>It uses: a variable, <code>input()</code>, an integer, <code>if</code> / <code>elif</code> / <code>else</code>, and output.</p>
        <p>Python checks the conditions from the top. It uses the <em>first</em> one that is True and skips the rest.
        So for 85, <code>score >= 90</code> is False, then <code>score >= 80</code> is True: the grade is B.</p>
      `
    },
    {
      id: "py09-l2",
      title: "A number guessing game",
      html: `
        <p><strong>Program 2 — Number guessing game</strong></p>
        <pre><code>secret = 7

guess = int(input("Guess the number: "))

while guess != secret:

    if guess &lt; secret:
        print("Too low")
    else:
        print("Too high")

    guess = int(input("Try again: "))

print("You got it!")</code></pre>
        <p>It uses: variables, <code>input()</code>, <code>while</code>, <code>if</code> / <code>else</code>, a Boolean comparison, and repetition.</p>
        <p>Example run (the player typed 3, 8, 7):</p>
        <pre><code>Guess the number: 3
Too low
Try again: 8
Too high
Try again: 7
You got it!</code></pre>
        <div class="tip">The last line inside the loop asks for a new guess. Without it, <code>guess</code> never changes,
        and the loop never stops.</div>
      `
    },
    {
      id: "py09-l3",
      title: "Calculate an average",
      html: `
        <p><strong>Program 3 — Calculate average</strong></p>
        <pre><code>scores = [80, 90, 75, 88, 95]

total = 0

for score in scores:
    total += score

average = total / len(scores)

print("Average:", average)</code></pre>
        <p>It uses: a list, variables, a <code>for</code> loop, an accumulator (<code>total</code>), and arithmetic.</p>
        <p><code>total += score</code> is a short way to write <code>total = total + score</code>.</p>
        <p>In this course you learned the topics in this order:</p>
        <ol>
          <li>Variables and data types</li>
          <li>if / else</li>
          <li>for loops</li>
          <li>while loops</li>
          <li>Functions</li>
          <li>Lists</li>
          <li>Boolean logic</li>
          <li>Debugging</li>
          <li>Small programs</li>
        </ol>
        <p>But they are not nine separate topics. In real programs they work together:</p>
        <pre><code>             Variables
                 │
        ┌────────┴────────┐
        ↓                 ↓
    Conditions          Loops
        │                 │
        └────────┬────────┘
                 ↓
             Functions
                 ↓
             Lists
                 ↓
          Small Programs
                 ↓
             Debugging</code></pre>
      `
    },
    {
      id: "py09-l4",
      title: "The real goal: explain a program",
      html: `
        <p>You are ready for real computer science work when you can look at a program like this one:</p>
        <pre><code>scores = [72, 85, 91, 64, 88]

total = 0

for score in scores:
    if score >= 70:
        total += score

print(total)</code></pre>
        <p>and explain it in your own words:</p>
        <div class="tip">"We have a list of scores. The loop goes through each score. If the score is at least 70, we add it to total. Finally, we print the total."</div>
        <p>Try to say what the program prints <em>before</em> you run it. Follow it step by step:</p>
        <table>
          <tr><th>score</th><th>score >= 70?</th><th>total after</th></tr>
          <tr><td>72</td><td>True</td><td>72</td></tr>
          <tr><td>85</td><td>True</td><td>157</td></tr>
          <tr><td>91</td><td>True</td><td>248</td></tr>
          <tr><td>64</td><td>False</td><td>248</td></tr>
          <tr><td>88</td><td>True</td><td>336</td></tr>
        </table>
        <p>You do not need to remember every Python feature. <strong>Understanding what a program does is much more important
        than remembering syntax.</strong></p>
        <p>The same ideas work in other languages too, like C# or JavaScript. The ideas come first. The language is second.</p>
      `
    }
  ],
  exercises: [
    {
      id: "py09-ex1",
      title: "Grade calculator",
      type: "py",
      instructions: `
        <p>Write the grade calculator. Ask for a score (a whole number) and store the letter in a variable called <code>grade</code>:</p>
        <table>
          <tr><th>Score</th><th>Grade</th></tr>
          <tr><td>90 or more</td><td>A</td></tr>
          <tr><td>80 to 89</td><td>B</td></tr>
          <tr><td>70 to 79</td><td>C</td></tr>
          <tr><td>60 to 69</td><td>D</td></tr>
          <tr><td>less than 60</td><td>F</td></tr>
        </table>
        <p>Then print it. Example (the user typed <em>85</em>):</p>
        <pre><code>Enter your score: 85
Your grade is: B</code></pre>
      `,
      starterCode: "score = int(input(\"Enter your score: \"))\n\n# Find the grade with if / elif / else\n\nprint(\"Your grade is:\", grade)\n",
      solution: "score = int(input(\"Enter your score: \"))\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\n\nprint(\"Your grade is:\", grade)\n",
      tests: [
        { inputs: ["85"], check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you create grade before the print?" },
        { inputs: ["85"], check: "R.get('grade') === 'B' && R.line('Your grade is: B')", message: "For 85, grade should be \"B\" and the program should print Your grade is: B" },
        { inputs: ["90"], check: "R.get('grade') === 'A'", message: "For 90, grade should be \"A\". 90 is included: use >=." },
        { inputs: ["60"], check: "R.get('grade') === 'D'", message: "For 60, grade should be \"D\"." },
        { inputs: ["59"], check: "R.get('grade') === 'F'", message: "For 59, grade should be \"F\". Use else for every score below 60." }
      ],
      hints: [
        "Start with the highest grade: <code>if score >= 90:</code>",
        "Use <code>elif</code> for the next grades: <code>elif score >= 80:</code> and so on. Inside each one, write <code>grade = \"...\"</code>.",
        "End with <code>else:</code> and <code>grade = \"F\"</code>. The print line at the bottom stays as it is."
      ]
    },
    {
      id: "py09-ex2",
      title: "Number guessing game",
      type: "py",
      instructions: `
        <p>The secret number is <code>7</code>. Finish the game:</p>
        <ul>
          <li>While the guess is not the secret, print <code>Too low</code> or <code>Too high</code>, and ask again with <code>Try again: </code></li>
          <li>When the guess is right, print <code>You got it!</code></li>
        </ul>
        <p>Example (the player typed 3, 8, 7):</p>
        <pre><code>Guess the number: 3
Too low
Try again: 8
Too high
Try again: 7
You got it!</code></pre>
      `,
      starterCode: "secret = 7\n\nguess = int(input(\"Guess the number: \"))\n\n# Write the while loop here\n\nprint(\"You got it!\")\n",
      solution: "secret = 7\n\nguess = int(input(\"Guess the number: \"))\n\nwhile guess != secret:\n\n    if guess < secret:\n        print(\"Too low\")\n    else:\n        print(\"Too high\")\n\n    guess = int(input(\"Try again: \"))\n\nprint(\"You got it!\")\n",
      tests: [
        { inputs: ["3", "8", "7"], check: "!R.error", message: "Your program has an error. Read the message in the Output box. If it asked for more input than expected, check your loop." },
        { inputs: ["3", "8", "7"], check: "R.prompts.length === 3", message: "For the guesses 3, 8, 7, the program should ask 3 times. Ask for a new guess at the end of the loop." },
        { inputs: ["3", "8", "7"], check: "R.out.indexOf('Too low') >= 0 && R.out.indexOf('Too low') < R.out.indexOf('Too high') && R.out.indexOf('Too high') < R.out.indexOf('You got it!')", message: "For 3, 8, 7, print Too low, then Too high, then You got it!" },
        { inputs: ["10", "1", "7"], check: "R.out.indexOf('Too high') >= 0 && R.out.indexOf('Too high') < R.out.indexOf('Too low') && R.out.indexOf('Too low') < R.out.indexOf('You got it!')", message: "For 10, 1, 7, print Too high, then Too low, then You got it!" },
        { inputs: ["7"], check: "!R.error && R.prompts.length === 1 && R.line('You got it!') && !R.has('Too')", message: "If the first guess is 7, print only You got it! and do not ask again." }
      ],
      hints: [
        "The loop runs while the guess is wrong: <code>while guess != secret:</code>",
        "Inside the loop, use <code>if guess &lt; secret:</code> to print Too low, and <code>else:</code> to print Too high.",
        "The last line inside the loop must ask again: <code>guess = int(input(\"Try again: \"))</code>. Keep it indented."
      ]
    },
    {
      id: "py09-ex3",
      title: "Calculate the average",
      type: "py",
      instructions: `
        <p>Write Program 3. Use a <code>for</code> loop and <code>total += score</code> to add up the list.
        Then calculate <code>average</code> with <code>len()</code> and print:</p>
        <pre><code>Average: 84.0</code></pre>
        <p>Also store the highest score in a variable called <code>highest</code> and print it. Python has a built-in function for this: <code>max(scores)</code>.</p>
        <pre><code>Highest: 98</code></pre>
      `,
      starterCode: "scores = [70, 98, 81, 87, 84]\n\ntotal = 0\n\n# Your code here\n",
      solution: "scores = [70, 98, 81, 87, 84]\n\ntotal = 0\n\nfor score in scores:\n    total += score\n\naverage = total / len(scores)\nhighest = max(scores)\n\nprint(\"Average:\", average)\nprint(\"Highest:\", highest)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('total') === 420", message: "total should be 420 at the end. Inside the loop, write total += score." },
        { check: "typeof R.get('average') === 'number' && Math.abs(R.get('average') - 84) < 0.001 && R.line('Average: 84.0')", message: "Calculate average = total / len(scores) and print: Average: 84.0" },
        { check: "R.get('highest') === 98 && R.line('Highest: 98')", message: "Store max(scores) in highest and print: Highest: 98" },
        { check: "/for\\s+\\w+\\s+in\\s+scores/.test(R.code) && /len\\(\\s*scores\\s*\\)/.test(R.code) && !/420|84\\.0/.test(R.code)", message: "Use a for loop over scores and len(scores). Do not type 420 or 84.0 in your code." }
      ],
      hints: [
        "Start the loop with <code>for score in scores:</code> and add each score to total inside it.",
        "After the loop: <code>average = total / len(scores)</code> and <code>highest = max(scores)</code>.",
        "Print with commas: <code>print(\"Average:\", average)</code>. Do the same for highest."
      ]
    },
    {
      id: "py09-ex4",
      title: "The real goal: predict the output",
      type: "py",
      instructions: `
        <p>Read this program carefully. <strong>Do not change it.</strong></p>
        <p>Before you run it, follow it step by step on paper (like the table in the lesson). What will it print?
        Write your answer as a number in <code>prediction</code> at the top. Then run it to see if you were right.</p>
        <p>Also say in your own words what the program does. Write it as a comment (a line that starts with <code>#</code>)
        with at least a few words.</p>
      `,
      starterCode: "prediction = None   # write the number you think it prints\n\n# My explanation:\n\nscores = [65, 90, 70, 55, 80]\n\ntotal = 0\n\nfor score in scores:\n    if score >= 70:\n        total += score\n\nprint(total)\n",
      solution: "prediction = 240   # write the number you think it prints\n\n# My explanation: the loop goes through each score and adds the scores that are at least 70 to total.\n\nscores = [65, 90, 70, 55, 80]\n\ntotal = 0\n\nfor score in scores:\n    if score >= 70:\n        total += score\n\nprint(total)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('total') === 240 && R.line('240') && /if\\s+score\\s*>=\\s*70\\s*:/.test(R.code) && /\\[\\s*65\\s*,\\s*90\\s*,\\s*70\\s*,\\s*55\\s*,\\s*80\\s*\\]/.test(R.code)", message: "Do not change the program. Only change the prediction and add your comment." },
        { check: "typeof R.get('prediction') === 'number'", message: "Write your prediction as a number, like prediction = 100 (no quotes)." },
        { check: "R.get('prediction') === 240", message: "Your prediction is not right yet. Which scores are at least 70? Is 70 included? Add only those." },
        { check: "/#\\s*My explanation:\\s*\\S+(\\s+\\S+){2,}/.test(R.code)", message: "Write your explanation on the # My explanation: line, with at least a few words." }
      ],
      hints: [
        "Go through the list one score at a time. For each one, ask: is it 70 or more?",
        "<code>>=</code> means 70 is included. 65 and 55 are skipped.",
        "Add the scores that pass: 90 + 70 + 80. Do not write <code>prediction = total</code>: do it in your head!"
      ]
    },
    {
      id: "py09-ex5",
      title: "Mini challenge: extend the program",
      type: "py",
      instructions: `
        <p>Make the program from the lesson better. Besides <code>total</code>, also count how many scores are at least 70,
        in a variable called <code>count</code>. Then calculate <code>average</code>: the average of only those scores.</p>
        <p>The program should print:</p>
        <pre><code>Total: 336
Count: 4
Average: 84.0</code></pre>
        <p>Let the program calculate everything. Do not type 336, 4, or 84 yourself.</p>
      `,
      starterCode: "scores = [72, 85, 91, 64, 88]\n\ntotal = 0\n\nfor score in scores:\n    if score >= 70:\n        total += score\n\nprint(\"Total:\", total)\n",
      solution: "scores = [72, 85, 91, 64, 88]\n\ntotal = 0\ncount = 0\n\nfor score in scores:\n    if score >= 70:\n        total += score\n        count += 1\n\naverage = total / count\n\nprint(\"Total:\", total)\nprint(\"Count:\", count)\nprint(\"Average:\", average)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box. Did you set count = 0 before the loop?" },
        { check: "R.get('total') === 336 && R.line('Total: 336')", message: "total should still be 336. Print: Total: 336" },
        { check: "R.get('count') === 4 && R.line('Count: 4')", message: "count should be 4. Start with count = 0 and add 1 inside the if." },
        { check: "typeof R.get('average') === 'number' && Math.abs(R.get('average') - 84) < 0.001 && R.line('Average: 84.0')", message: "average should be total / count = 84.0. Print: Average: 84.0" },
        { check: "!/336|84/.test(R.code.replace(/#.*$/gm, '')) && /count\\s*(\\+=\\s*1|=\\s*count\\s*\\+\\s*1)/.test(R.code)", message: "Let the program count with count += 1 inside the if, and do not type 336 or 84 in your code." }
      ],
      hints: [
        "Make a second accumulator before the loop: <code>count = 0</code>.",
        "Inside the <code>if</code>, under <code>total += score</code>, add 1 to count: <code>count += 1</code>.",
        "After the loop, write <code>average = total / count</code>. Then print the three lines."
      ]
    }
  ]
});
