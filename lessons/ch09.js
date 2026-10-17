// Chapter 9 — Lists and objects
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch09", {
  lessons: [
    {
      id: "ch09-l1",
      title: "Arrays: a list of values",
      html: `
        <p>So far, one variable held one value. But often you have a <strong>list</strong>: your friends,
        your scores, the songs in a playlist.</p>
        <p>In JavaScript a list is called an <strong>array</strong>. You write it with square brackets
        <code>[ ]</code> and put commas between the items:</p>
        <pre><code>let friends = ["Ana", "Ben", "Cleo"];
let scores = [10, 25, 7];</code></pre>
        <p>Each item has a number called its <strong>index</strong>. The index starts at <strong>0</strong>, not 1.</p>
        <pre><code>console.log(friends[0]);  // Ana
console.log(friends[1]);  // Ben
console.log(friends[2]);  // Cleo</code></pre>
        <p><code>.length</code> tells you how many items the array has:</p>
        <pre><code>console.log(friends.length);  // 3</code></pre>
        <div class="tip">The last item is always at index <code>length - 1</code>. Here that is
        <code>friends[2]</code>.</div>
      `
    },
    {
      id: "ch09-l2",
      title: "Adding and changing items",
      html: `
        <p>Use <code>.push()</code> to add a new item at the <strong>end</strong> of an array:</p>
        <pre><code>let friends = ["Ana", "Ben"];
friends.push("Cleo");
console.log(friends);         // ["Ana","Ben","Cleo"]
console.log(friends.length);  // 3</code></pre>
        <p>You can also change one item. Use its index and <code>=</code>:</p>
        <pre><code>friends[0] = "Alex";
console.log(friends);  // ["Alex","Ben","Cleo"]</code></pre>
        <p>An array can start empty and grow later:</p>
        <pre><code>let todo = [];
todo.push("Homework");
todo.push("Clean my room");</code></pre>
      `
    },
    {
      id: "ch09-l3",
      title: "Looping over an array",
      html: `
        <p>To do something with <em>every</em> item, use a <code>for</code> loop. The variable
        <code>i</code> goes 0, 1, 2, ... and stops before <code>length</code>:</p>
        <pre><code>let friends = ["Ana", "Ben", "Cleo"];
for (let i = 0; i &lt; friends.length; i++) {
  console.log("Hi, " + friends[i]);
}</code></pre>
        <p>This prints:</p>
        <pre><code>Hi, Ana
Hi, Ben
Hi, Cleo</code></pre>
        <p>Because the loop uses <code>friends.length</code>, it still works if the array gets more items.</p>
        <p>You can also add up the numbers in an array:</p>
        <pre><code>let scores = [10, 25, 7];
let total = 0;
for (let i = 0; i &lt; scores.length; i++) {
  total = total + scores[i];
}
console.log(total);  // 42</code></pre>
      `
    },
    {
      id: "ch09-l4",
      title: "Objects: things with properties",
      html: `
        <p>An <strong>object</strong> keeps several facts about <em>one</em> thing together. You write it with
        curly brackets <code>{ }</code>. Each fact is a <strong>property</strong>: a name, a colon, and a value.</p>
        <pre><code>let pet = {
  name: "Rex",
  type: "dog",
  age: 3
};</code></pre>
        <p>Read a property with a dot. This is called <strong>dot access</strong>:</p>
        <pre><code>console.log(pet.name);  // Rex
pet.age = 4;            // change a property
console.log(pet.age);   // 4</code></pre>
        <p>Arrays and objects work well together. An <strong>array of objects</strong> is a list of things:</p>
        <pre><code>let pets = [
  { name: "Rex", age: 3 },
  { name: "Mimi", age: 5 }
];
for (let i = 0; i &lt; pets.length; i++) {
  console.log(pets[i].name + " is " + pets[i].age);
}</code></pre>
        <div class="tip"><code>pets[i]</code> is one object. <code>pets[i].name</code> is the name of that object.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch09-ex1",
      title: "Your first array",
      type: "js",
      instructions: `
        <p>Create an array called <code>colors</code> with exactly <strong>3</strong> colors in it (as text).</p>
        <p>Then use <code>console.log</code> to print the <strong>first</strong> color in the array.</p>
      `,
      starterCode: "// Create your array here\n",
      solution: "let colors = [\"red\", \"green\", \"blue\"];\nconsole.log(colors[0]);",
      tests: [
        { check: "Array.isArray(colors)", message: "I can't find an array called colors. Use let colors = [ ... ];" },
        { check: "colors.length === 3", message: "Your array should have exactly 3 items." },
        { check: "colors.every(function (c) { return typeof c === 'string'; })", message: "Each color should be text in quotes, like \"red\"." },
        { check: "CS.logged(colors[0])", message: "Print the first color. Remember: the first index is 0." }
      ],
      hints: [
        "An array uses square brackets <code>[ ]</code> with commas between the items.",
        "Text needs quotes: <code>let colors = [\"red\", ...];</code>",
        "The first item is <code>colors[0]</code>. Put it inside <code>console.log( )</code>."
      ]
    },
    {
      id: "ch09-ex2",
      title: "Push a new pet",
      type: "js",
      instructions: `
        <p>The array <code>pets</code> has two items. Use <code>.push()</code> to add <strong>"fish"</strong>
        at the end.</p>
        <p>Then print how many items the array has now (use <code>.length</code>).</p>
      `,
      starterCode: "let pets = [\"cat\", \"dog\"];\n",
      solution: "let pets = [\"cat\", \"dog\"];\npets.push(\"fish\");\nconsole.log(pets.length);",
      tests: [
        { check: "pets.length === 3 && pets[2] === 'fish'", message: "pets should have 3 items, and the last one should be \"fish\"." },
        { check: "pets[0] === 'cat' && pets[1] === 'dog'", message: "Keep \"cat\" and \"dog\" at the start of the array." },
        { check: "/\\.push\\s*\\(/.test(CS.code)", message: "Use .push( ) to add the new item." },
        { check: "CS.logged('3')", message: "Print the length of the array. It should be 3." }
      ],
      hints: [
        "<code>.push()</code> goes after the array name, with a dot.",
        "Write <code>pets.push(\"fish\");</code> under the first line.",
        "The number of items is <code>pets.length</code>. Print it with <code>console.log( )</code>."
      ]
    },
    {
      id: "ch09-ex3",
      title: "Print every score",
      type: "js",
      instructions: `
        <p>Use a <code>for</code> loop to print every number in the <code>scores</code> array, one per line.</p>
        <p>Your loop must use <code>scores.length</code>, so it works for any number of scores.</p>
      `,
      starterCode: "let scores = [12, 7, 30, 5];\n\n// Write your loop here\n",
      solution: "let scores = [12, 7, 30, 5];\n\nfor (let i = 0; i < scores.length; i++) {\n  console.log(scores[i]);\n}",
      tests: [
        { check: "CS.logged('12') && CS.logged('7') && CS.logged('30') && CS.logged('5')", message: "Print all 4 scores: 12, 7, 30 and 5." },
        { check: "CS.runWith({ scores: [1, 2] }).join('|') === '1|2'", message: "Your loop should print exactly the items in the array. Use scores.length and scores[i]." },
        { check: "CS.runWith({ scores: [4, 8, 15, 16, 23, 42] }).length === 6", message: "With 6 scores your code should print 6 lines. Does the loop stop at scores.length?" }
      ],
      hints: [
        "A loop starts like <code>for (let i = 0; ...; i++)</code>.",
        "The loop should keep going while <code>i &lt; scores.length</code>.",
        "Inside the loop, print one item: <code>console.log(scores[i]);</code>"
      ]
    },
    {
      id: "ch09-ex4",
      title: "Make a player object",
      type: "js",
      instructions: `
        <p>Create an object called <code>player</code> with these properties:</p>
        <ul>
          <li><code>name</code> — any name, as text</li>
          <li><code>score</code> — a number</li>
        </ul>
        <p>Then print the player's name using dot access.</p>
      `,
      starterCode: "// Create the player object here\n",
      solution: "let player = {\n  name: \"Sam\",\n  score: 100\n};\nconsole.log(player.name);",
      tests: [
        { check: "typeof player === 'object' && player !== null", message: "I can't find an object called player. Use let player = { ... };" },
        { check: "typeof player.name === 'string' && player.name.length > 0", message: "player needs a name property with some text, like name: \"Sam\"." },
        { check: "typeof player.score === 'number'", message: "player needs a score property that is a number (no quotes)." },
        { check: "CS.logged(player.name)", message: "Print the player's name. Use player.name." }
      ],
      hints: [
        "An object uses curly brackets <code>{ }</code>.",
        "Each property is <code>name: value</code>, with commas between properties.",
        "Example shape: <code>let player = { name: \"...\", score: ... };</code> Then print <code>player.name</code>."
      ]
    },
    {
      id: "ch09-ex5",
      title: "A list of books",
      type: "js",
      instructions: `
        <p>The array <code>books</code> holds objects. Each book has a <code>title</code> and <code>pages</code>.</p>
        <p>Use a loop to print the <strong>title</strong> of every book, one per line.</p>
      `,
      starterCode: "let books = [\n  { title: \"Wonder\", pages: 310 },\n  { title: \"Holes\", pages: 233 },\n  { title: \"Dune\", pages: 412 }\n];\n\n// Print every title\n",
      solution: "let books = [\n  { title: \"Wonder\", pages: 310 },\n  { title: \"Holes\", pages: 233 },\n  { title: \"Dune\", pages: 412 }\n];\n\nfor (let i = 0; i < books.length; i++) {\n  console.log(books[i].title);\n}",
      tests: [
        { check: "CS.logged('Wonder') && CS.logged('Holes') && CS.logged('Dune')", message: "Print the title of all 3 books." },
        { check: "!CS.logs.some(function (l) { return l.indexOf('{') >= 0; })", message: "Print only the title, not the whole object." },
        { check: "CS.logs.length === 3", message: "Print exactly 3 lines: one title per book." },
        { check: "/\\bfor\\b|forEach/.test(CS.code)", message: "Use a loop to go through the books, so it works for any list." }
      ],
      hints: [
        "Use the same kind of <code>for</code> loop as before, with <code>books.length</code>.",
        "<code>books[i]</code> is one book object.",
        "To get the title of one book, add <code>.title</code> after <code>books[i]</code>."
      ]
    }
  ]
});
