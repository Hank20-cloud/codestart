// Programming basics, chapter 6 — Lists (Pre-AP CSP topic 6).
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("py06", {
  lessons: [
    {
      id: "py06-l1",
      title: "Many values in one variable",
      html: `
        <p>Programs often need to store many pieces of information that belong together.
        For example, the scores of five tests. You could make five variables:</p>
        <pre><code>score1 = 80
score2 = 90
score3 = 75
score4 = 88
score5 = 95</code></pre>
        <p>This is a lot of typing, and it gets worse with 100 scores. A better way is a <strong>list</strong>:</p>
        <pre><code>scores = [80, 90, 75, 88, 95]</code></pre>
        <p>A list is one variable that holds many values. You write the values inside square brackets
        <code>[ ]</code>, with commas between them.</p>
        <p>A <code>for</code> loop can go through the whole list, one item at a time:</p>
        <pre><code>for score in scores:
    print(score)</code></pre>
        <p>Output:</p>
        <pre><code>80
90
75
88
95</code></pre>
        <p>A list can also hold text: <code>names = ["Lisa", "Marco", "Ana"]</code>.</p>
      `
    },
    {
      id: "py06-l2",
      title: "Index: counting starts at 0",
      html: `
        <p>Each item in a list has a position number. This number is called the <strong>index</strong>.
        You use it in square brackets to get one item:</p>
        <pre><code>scores = [80, 90, 75, 88, 95]
print(scores[0])</code></pre>
        <p>Output:</p>
        <pre><code>80</code></pre>
        <p><strong>Important:</strong> Python starts counting at 0, not at 1.</p>
        <pre><code>scores = [80, 90, 75, 88, 95]
          ↑   ↑   ↑   ↑   ↑
index     0   1   2   3   4</code></pre>
        <p>So <code>scores[1]</code> is <code>90</code>, the <em>second</em> item. The last item here is <code>scores[4]</code>.</p>
        <p>Python also has a short way to get the last item: <code>scores[-1]</code>.</p>
        <div class="tip">If you use an index that is not in the list, like <code>scores[5]</code>, the program
        stops with an <code>IndexError</code>. A list with 5 items has the indexes 0 to 4.</div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p><strong>Careful, this is a common exam trap!</strong> AP lists start at index <strong>1</strong>, not 0. In AP, <code>scores[1]</code> is <code>80</code>, the <em>first</em> item. In Python, the first item is <code>scores[0]</code>.</p>
        <pre><code>scores ← [80, 90, 75, 88, 95]
DISPLAY(scores[1])

AP index       1   2   3   4   5
Python index   0   1   2   3   4</code></pre></div>
      `
    },
    {
      id: "py06-l3",
      title: "append and len",
      html: `
        <p>You can add an item to the end of a list with <code>append()</code>:</p>
        <pre><code>scores = [80, 90, 75, 88, 95]
scores.append(100)
print(scores)      # [80, 90, 75, 88, 95, 100]</code></pre>
        <p>You can start with an <strong>empty list</strong> and fill it later:</p>
        <pre><code>names = []
names.append("Lisa")
names.append("Marco")
print(names)       # ['Lisa', 'Marco']</code></pre>
        <p><code>len()</code> tells you how many items are in a list:</p>
        <pre><code>print(len(scores))  # 6</code></pre>
        <p><code>in</code> checks if a value is in a list. It gives <code>True</code> or <code>False</code>:</p>
        <pre><code>print("Lisa" in names)   # True
print("Ana" in names)    # False</code></pre>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP uses <code>APPEND(list, value)</code> to add at the end and <code>LENGTH(list)</code> for the number of items. <code>INSERT(list, i, value)</code> puts a value at index i. <code>REMOVE(list, i)</code> removes the item at index i. Remember: AP indexes start at 1.</p>
        <pre><code>scores ← [80, 90, 75, 88, 95]
APPEND(scores, 100)
DISPLAY(LENGTH(scores))
INSERT(scores, 1, 60)
REMOVE(scores, 2)</code></pre></div>
      `
    },
    {
      id: "py06-l4",
      title: "A useful example: the average",
      html: `
        <p>Now we combine lists, a <code>for</code> loop, and <code>len()</code> to calculate an average:</p>
        <pre><code>scores = [80, 90, 75, 88, 95]

total = 0

for score in scores:
    total = total + score

average = total / len(scores)

print(average)     # 85.6</code></pre>
        <p>How it works:</p>
        <ul>
          <li><code>total</code> starts at 0.</li>
          <li>The loop adds each score to <code>total</code>: 0 → 80 → 170 → 245 → 333 → 428.</li>
          <li>The average is the total divided by the number of scores: <code>428 / 5 = 85.6</code>.</li>
        </ul>
        <p>A variable like <code>total</code> that collects a result step by step is called an <strong>accumulator</strong>.</p>
        <div class="tip">In CodeStart you may see <code>85.59999999999999</code> instead of <code>85.6</code>. Computers store some decimal numbers with a very tiny error. It is the same number for us. You can use <code>round(average, 1)</code> to show 85.6.</div>
        <div class="tip"><code>total = total + score</code> can also be written as <code>total += score</code>. Both do the same thing.</div>
        <div class="ap-box"><strong>In AP pseudocode</strong>
        <p>AP goes through a list with <code>FOR EACH item IN list</code>. It works like Python <code>for score in scores</code>.</p>
        <pre><code>total ← 0
FOR EACH score IN scores
{
   total ← total + score
}
DISPLAY(total / LENGTH(scores))</code></pre></div>
        <p>This program uses variables, a list, a <code>for</code> loop, a built-in function (<code>len</code>), and math.
        This is when programming starts to become interesting!</p>
      `
    }
  ],
  exercises: [
    {
      id: "py06-ex1",
      title: "My favorite foods",
      type: "py",
      instructions: `
        <p>Make a list called <code>foods</code> with at least <strong>3</strong> foods you like (text).</p>
        <p>Then use a <code>for</code> loop to print each food on its own line. Example:</p>
        <pre><code>pizza
rice
apples</code></pre>
      `,
      starterCode: "foods = []\n\n# Print each food with a for loop\n",
      solution: "foods = [\"pizza\", \"rice\", \"apples\"]\n\nfor food in foods:\n    print(food)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "Array.isArray(R.get('foods')) && R.get('foods').length >= 3", message: "foods should be a list with at least 3 items, like [\"pizza\", \"rice\", \"apples\"]." },
        { check: "R.get('foods').every(function (f) { return typeof f === 'string'; })", message: "Each food is text, so put each one inside quotes." },
        { check: "R.get('foods').every(function (f) { return R.line(f); })", message: "Print every food in the list, each on its own line." },
        { check: "/for\\s+\\w+\\s+in\\s+foods/.test(R.code)", message: "Use a for loop to go through the list: for food in foods:" }
      ],
      hints: [
        "Put the foods inside the square brackets, with commas between them.",
        "Text needs quotes: <code>[\"pizza\", \"rice\", \"apples\"]</code>.",
        "Write <code>for food in foods:</code> and on the next line, indented, print the food."
      ]
    },
    {
      id: "py06-ex2",
      title: "First and last",
      type: "py",
      instructions: `
        <p>The program should print the <strong>first</strong> score and the <strong>last</strong> score of the list:</p>
        <pre><code>First: 80
Last: 95</code></pre>
        <p>But it prints the wrong scores. Fix the index numbers. Remember where Python starts counting!</p>
      `,
      starterCode: "scores = [80, 90, 75, 88, 95]\n\nprint(\"First:\", scores[1])\nprint(\"Last:\", scores[5])\n",
      solution: "scores = [80, 90, 75, 88, 95]\n\nprint(\"First:\", scores[0])\nprint(\"Last:\", scores[4])\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. An IndexError means the index is not in the list. The list has 5 items: which indexes does it have?" },
        { check: "R.line('First: 80')", message: "The first line should be First: 80. The first item is at index 0." },
        { check: "R.line('Last: 95')", message: "The second line should be Last: 95. With 5 items, the last index is 4 (or -1)." },
        { check: "/scores\\[\\s*0\\s*\\]/.test(R.code) && /scores\\[\\s*(4|-1|len\\(scores\\)\\s*-\\s*1)\\s*\\]/.test(R.code)", message: "Get the scores from the list with an index, like scores[0], instead of typing the numbers." }
      ],
      hints: [
        "Press Run and read the error. Which line has the problem?",
        "The list has 5 items. Their indexes are 0, 1, 2, 3, 4.",
        "The first item is <code>scores[0]</code>. The last index is one less than the number of items."
      ]
    },
    {
      id: "py06-ex3",
      title: "Shopping list",
      type: "py",
      instructions: `
        <p>Start with an empty list called <code>items</code>. Ask the user for <strong>3</strong> things to buy,
        and <code>append</code> each one to the list. Then print the list and how many items it has.</p>
        <p>Example (the user typed <em>milk</em>, <em>bread</em>, <em>eggs</em>):</p>
        <pre><code>Add an item: milk
Add an item: bread
Add an item: eggs
['milk', 'bread', 'eggs']
You have 3 items</code></pre>
      `,
      starterCode: "items = []\n\nitem = input(\"Add an item: \")\n\nprint(items)\n",
      solution: "items = []\n\nfor i in range(3):\n    item = input(\"Add an item: \")\n    items.append(item)\n\nprint(items)\nprint(\"You have\", len(items), \"items\")\n",
      tests: [
        { inputs: ["milk", "bread", "eggs"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["milk", "bread", "eggs"], check: "R.prompts.length === 3", message: "Ask for exactly 3 items with input()." },
        { inputs: ["milk", "bread", "eggs"], check: "Array.isArray(R.get('items')) && R.get('items').join(',') === 'milk,bread,eggs'", message: "After the 3 answers, items should be ['milk', 'bread', 'eggs']. Use items.append(item) after each input()." },
        { inputs: ["rice", "tea", "apples"], check: "Array.isArray(R.get('items')) && R.get('items').join(',') === 'rice,tea,apples'", message: "The list should hold what the user typed. Use the variable, not fixed words." },
        { inputs: ["rice", "tea", "apples"], check: "R.has('3') && /len\\(\\s*items\\s*\\)/.test(R.code)", message: "Print how many items there are. Use len(items)." }
      ],
      hints: [
        "You need <code>input()</code> 3 times. A <code>for i in range(3):</code> loop can do it.",
        "After each <code>input()</code>, add the answer to the list: <code>items.append(item)</code>.",
        "At the end, print the list, then <code>print(\"You have\", len(items), \"items\")</code>."
      ]
    },
    {
      id: "py06-ex4",
      title: "Average of the scores",
      type: "py",
      instructions: `
        <p>Calculate the average of the list <code>scores</code>:</p>
        <ol>
          <li>Use a <code>for</code> loop to add every score to <code>total</code>.</li>
          <li>Divide <code>total</code> by <code>len(scores)</code> and store it in <code>average</code>.</li>
          <li>Print it like this:</li>
        </ol>
        <pre><code>Average: 85.6</code></pre>
        <p>(If you see <code>85.59999999999999</code>, that is fine too. It is the same number with a tiny computer rounding error.)</p>
        <p>Do not type the total yourself. Let the loop calculate it, so the program still works if the list changes.</p>
      `,
      starterCode: "scores = [80, 90, 75, 88, 95]\n\ntotal = 0\n\n# Add each score to total here\n\n# Calculate and print the average here\n",
      solution: "scores = [80, 90, 75, 88, 95]\n\ntotal = 0\n\nfor score in scores:\n    total = total + score\n\naverage = total / len(scores)\n\nprint(\"Average:\", average)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('total') === 428", message: "total should be 428 at the end. Inside the loop, write total = total + score." },
        { check: "typeof R.get('average') === 'number' && Math.abs(R.get('average') - 85.6) < 0.001", message: "average should be 85.6. Divide total by len(scores)." },
        { check: "R.has('Average:') && (R.has('85.6') || R.has('85.59'))", message: "Print the result like this: print(\"Average:\", average)" },
        { check: "/for\\s+\\w+\\s+in\\s+scores/.test(R.code) && /len\\(\\s*scores\\s*\\)/.test(R.code) && !/428|85\\.6/.test(R.code)", message: "Use a for loop over scores and len(scores). Do not type 428 or 85.6 in your code." }
      ],
      hints: [
        "Start the loop with <code>for score in scores:</code>.",
        "Inside the loop (indented), write <code>total = total + score</code>.",
        "After the loop (not indented), write <code>average = total / len(scores)</code>, then print it."
      ]
    },
    {
      id: "py06-ex5",
      title: "Mini challenge: your own scores",
      type: "py",
      instructions: `
        <p>Ask the user how many scores they have. Then ask for each score (as a number) and
        <code>append</code> it to a list called <code>scores</code>. At the end, calculate and print the average.</p>
        <p>Example (the user typed <em>3</em>, then <em>80</em>, <em>90</em>, <em>70</em>):</p>
        <pre><code>How many scores? 3
Score: 80
Score: 90
Score: 70
Average: 80.0</code></pre>
      `,
      starterCode: "scores = []\n\ncount = int(input(\"How many scores? \"))\n\n# Ask for each score and append it to the list\n\n# Calculate and print the average\n",
      solution: "scores = []\n\ncount = int(input(\"How many scores? \"))\n\nfor i in range(count):\n    score = int(input(\"Score: \"))\n    scores.append(score)\n\ntotal = 0\nfor score in scores:\n    total = total + score\n\naverage = total / len(scores)\nprint(\"Average:\", average)\n",
      tests: [
        { inputs: ["3", "80", "90", "70"], check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { inputs: ["3", "80", "90", "70"], check: "R.prompts.length === 4", message: "When the user types 3, ask for exactly 3 scores (4 input() calls in total). Use for i in range(count):" },
        { inputs: ["3", "80", "90", "70"], check: "Array.isArray(R.get('scores')) && R.get('scores').join(',') === '80,90,70'", message: "scores should be [80, 90, 70]. Use int(input(...)) and scores.append(...)." },
        { inputs: ["3", "80", "90", "70"], check: "R.lines.some(function (l) { return l.indexOf('Average:') >= 0 && l.indexOf('80') >= 0; })", message: "For 80, 90 and 70, print Average: 80.0" },
        { inputs: ["2", "50", "75"], check: "!R.error && R.lines.some(function (l) { return l.indexOf('Average:') >= 0 && l.indexOf('62.5') >= 0; }) && R.get('scores').length === 2", message: "For 2 scores, 50 and 75, the average is 62.5. Use count and len(scores), not fixed numbers." }
      ],
      hints: [
        "Use <code>for i in range(count):</code> to ask <code>count</code> times.",
        "Inside the loop: <code>score = int(input(\"Score: \"))</code>, then <code>scores.append(score)</code>.",
        "After the loop, add up the list with a second loop (like the last exercise) and divide by <code>len(scores)</code>."
      ]
    }
  ]
});
