// Chapter 1 — What is a web page?
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch01", {
  lessons: [
    {
      id: "ch01-l1",
      title: "What happens when you open a web page",
      html: `
        <p>Every web page you visit is just a <strong>text file</strong>. Your browser (Chrome, Edge, Safari)
        reads that file and turns it into the page you see.</p>
        <p>The file is written in a language called <strong>HTML</strong> (HyperText Markup Language).
        HTML tells the browser <em>what</em> is on the page: a title, some text, a picture, a button.</p>
        <p>Later you will learn two more languages:</p>
        <ul>
          <li><strong>CSS</strong> — how things <em>look</em> (colors, sizes, positions).</li>
          <li><strong>JavaScript</strong> — what things <em>do</em> (react to clicks, keep a score, run a game).</li>
        </ul>
        <p>By the end of this course you will use all three to build your own web app.</p>
      `
    },
    {
      id: "ch01-l2",
      title: "Your first HTML tag",
      html: `
        <p>HTML uses <strong>tags</strong>. A tag is a word inside angle brackets, like <code>&lt;h1&gt;</code>.</p>
        <p>Most tags come in pairs: an <em>opening</em> tag and a <em>closing</em> tag. The closing tag has a
        slash <code>/</code>. The text between them is what the browser shows.</p>
        <pre><code>&lt;h1&gt;Hello, world!&lt;/h1&gt;</code></pre>
        <p><code>&lt;h1&gt;</code> means "heading 1", the biggest title on the page.</p>
        <p>Another common tag is <code>&lt;p&gt;</code>, for a paragraph of normal text:</p>
        <pre><code>&lt;p&gt;This is my first web page.&lt;/p&gt;</code></pre>
      `
    },
    {
      id: "ch01-l3",
      title: "Putting tags together",
      html: `
        <p>A page can have many tags, one after another. The browser shows them from top to bottom.</p>
        <pre><code>&lt;h1&gt;My Page&lt;/h1&gt;
&lt;p&gt;Hi! My name is Sam.&lt;/p&gt;
&lt;p&gt;I like soccer and music.&lt;/p&gt;</code></pre>
        <p>Common mistakes to watch for:</p>
        <ul>
          <li>Forgetting the closing tag: <code>&lt;p&gt;Hello</code></li>
          <li>Forgetting the slash: <code>&lt;p&gt;Hello&lt;p&gt;</code></li>
          <li>Spelling a tag wrong: <code>&lt;pp&gt;Hello&lt;/pp&gt;</code></li>
        </ul>
        <div class="tip"><strong>How exercises work:</strong> type your code in the box. Your page appears below
        the box as you type. Press <strong>Check my answer</strong> when you think it is right. If you are stuck,
        press <strong>Hint</strong>.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch01-ex1",
      title: "Write a heading",
      type: "html",
      instructions: `
        <p>Write an <code>&lt;h1&gt;</code> heading that says exactly: <strong>Hello, world!</strong></p>
      `,
      starterCode: "",
      solution: "<h1>Hello, world!</h1>",
      tests: [
        { check: "CS.q('h1') !== null", message: "I can't find an <h1> heading on your page." },
        { check: "CS.text('h1') === 'Hello, world!'", message: "Your heading is there, but the text is not exactly \"Hello, world!\". Check the comma and the !" }
      ],
      hints: [
        "A heading needs an opening tag <code>&lt;h1&gt;</code> and a closing tag <code>&lt;/h1&gt;</code>.",
        "Put the text between the two tags.",
        "The pattern is: <code>&lt;h1&gt;your text here&lt;/h1&gt;</code>"
      ]
    },
    {
      id: "ch01-ex2",
      title: "Add a paragraph",
      type: "html",
      instructions: `
        <p>The page already has a heading. Under it, add a paragraph (<code>&lt;p&gt;</code>) that tells us
        something about you. Write at least 3 words.</p>
      `,
      starterCode: "<h1>About me</h1>\n",
      solution: "<h1>About me</h1>\n<p>I like video games and pizza.</p>",
      tests: [
        { check: "CS.text('h1') === 'About me'", message: "Keep the heading <h1>About me</h1> at the top." },
        { check: "CS.q('p') !== null", message: "I can't find a paragraph. Use <p> and </p>." },
        { check: "CS.text('p').split(/\\s+/).filter(Boolean).length >= 3", message: "Your paragraph is too short. Write at least 3 words." }
      ],
      hints: [
        "A paragraph uses the tag <code>&lt;p&gt;</code>.",
        "Put it on a new line under the heading.",
        "Example: <code>&lt;p&gt;I like ...&lt;/p&gt;</code>"
      ]
    },
    {
      id: "ch01-ex3",
      title: "Fix the broken tags",
      type: "html",
      instructions: `
        <p>This page has <strong>three mistakes</strong>. Fix them so the page has:</p>
        <ul>
          <li>one heading that says <strong>My Favorite Food</strong></li>
          <li>two paragraphs: <strong>Pizza is the best.</strong> and <strong>I eat it every Friday.</strong></li>
        </ul>
      `,
      starterCode: "<h1>My Favorite Food</h1\n<p>Pizza is the best.<p>\n<pp>I eat it every Friday.</pp>\n",
      solution: "<h1>My Favorite Food</h1>\n<p>Pizza is the best.</p>\n<p>I eat it every Friday.</p>",
      tests: [
        { check: "CS.qa('h1').length === 1 && CS.text('h1') === 'My Favorite Food'", message: "The heading is still broken. Look closely at the end of the first line." },
        { check: "CS.qa('p').length === 2", message: "There should be exactly two paragraphs (<p> ... </p>)." },
        { check: "CS.qa('p')[0].textContent.trim() === 'Pizza is the best.'", message: "The first paragraph should say exactly \"Pizza is the best.\" Is its closing tag right?" },
        { check: "CS.qa('p')[1].textContent.trim() === 'I eat it every Friday.'", message: "The second paragraph should say exactly \"I eat it every Friday.\" Check the tag name." },
        { check: "CS.qa('pp').length === 0", message: "There is no tag called <pp>. Use <p>." }
      ],
      hints: [
        "Look at the end of line 1. Is anything missing after <code>&lt;/h1</code>?",
        "A closing tag needs a slash: <code>&lt;/p&gt;</code>, not <code>&lt;p&gt;</code>.",
        "Line 3 uses <code>&lt;pp&gt;</code>. That is not a real tag. Change it to <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code>."
      ]
    }
  ]
});
