// Chapter 2 — HTML structure
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch02", {
  lessons: [
    {
      id: "ch02-l1",
      title: "Headings and paragraphs",
      html: `
        <p>HTML has six sizes of headings, from <code>&lt;h1&gt;</code> (the biggest) to
        <code>&lt;h6&gt;</code> (the smallest).</p>
        <pre><code>&lt;h1&gt;My Blog&lt;/h1&gt;
&lt;h2&gt;My first trip&lt;/h2&gt;
&lt;h3&gt;Day 1&lt;/h3&gt;</code></pre>
        <p>Use <code>&lt;h1&gt;</code> once, for the main title of the page. Use <code>&lt;h2&gt;</code> for
        sections, and <code>&lt;h3&gt;</code> for smaller parts inside a section. Think of a book: the book
        title, then chapter titles, then smaller titles.</p>
        <p>Normal text goes in paragraphs with <code>&lt;p&gt;</code>. Each paragraph starts on a new line,
        with a small space above and below it.</p>
        <div class="tip"><strong>Tip:</strong> Pick a heading for its <em>meaning</em>, not its size.
        In the next chapter you will learn how to change the size with CSS.</div>
      `
    },
    {
      id: "ch02-l2",
      title: "Lists",
      html: `
        <p>HTML has two kinds of lists.</p>
        <p>A <strong>bulleted list</strong> uses <code>&lt;ul&gt;</code> ("unordered list"). Use it when the
        order does not matter, like a shopping list:</p>
        <pre><code>&lt;ul&gt;
  &lt;li&gt;Milk&lt;/li&gt;
  &lt;li&gt;Bread&lt;/li&gt;
  &lt;li&gt;Apples&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        <p>A <strong>numbered list</strong> uses <code>&lt;ol&gt;</code> ("ordered list"). Use it when the
        order matters, like the steps of a recipe:</p>
        <pre><code>&lt;ol&gt;
  &lt;li&gt;Boil water.&lt;/li&gt;
  &lt;li&gt;Add the pasta.&lt;/li&gt;
  &lt;li&gt;Wait 10 minutes.&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        <p>In both lists, each item is an <code>&lt;li&gt;</code> ("list item"). The browser adds the
        bullets or the numbers for you.</p>
        <div class="tip"><strong>Tip:</strong> The spaces before <code>&lt;li&gt;</code> are not needed.
        They just make the code easier to read.</div>
      `
    },
    {
      id: "ch02-l3",
      title: "Links and attributes",
      html: `
        <p>A <strong>link</strong> lets you click to go to another page. It uses the <code>&lt;a&gt;</code> tag:</p>
        <pre><code>&lt;a href="https://www.wikipedia.org"&gt;Go to Wikipedia&lt;/a&gt;</code></pre>
        <p>The part <code>href="..."</code> is an <strong>attribute</strong>. An attribute gives extra
        information to a tag. It is written inside the opening tag, as <code>name="value"</code>.</p>
        <ul>
          <li><code>href</code> is the address the link goes to.</li>
          <li>The text between <code>&lt;a&gt;</code> and <code>&lt;/a&gt;</code> is what the user sees and clicks.</li>
        </ul>
        <p>You can also make text stand out:</p>
        <pre><code>&lt;p&gt;This is &lt;strong&gt;very important&lt;/strong&gt; and this is &lt;em&gt;a little special&lt;/em&gt;.&lt;/p&gt;</code></pre>
        <p><code>&lt;strong&gt;</code> shows text in <strong>bold</strong>. <code>&lt;em&gt;</code> ("emphasis")
        shows text in <em>italics</em>. You can put them inside a paragraph.</p>
      `
    },
    {
      id: "ch02-l4",
      title: "Images",
      html: `
        <p>To show a picture, use the <code>&lt;img&gt;</code> tag:</p>
        <pre><code>&lt;img src="https://picsum.photos/300/200" alt="A random photo"&gt;</code></pre>
        <ul>
          <li><code>src</code> ("source") is the address of the picture.</li>
          <li><code>alt</code> is a short text that describes the picture. It is shown if the picture
          cannot load, and it is read out loud for people who cannot see the screen.</li>
        </ul>
        <p><code>&lt;img&gt;</code> is special: it has <strong>no closing tag</strong>. There is no text
        inside an image, so there is nothing to close.</p>
        <div class="tip"><strong>Tip:</strong> Always write an <code>alt</code> text. Describe what is in the
        picture, for example <code>alt="My dog playing in the snow"</code>.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch02-ex1",
      title: "Headings in order",
      type: "html",
      instructions: `
        <p>Make a small page about a sport or a game you like. It needs:</p>
        <ul>
          <li>one <code>&lt;h1&gt;</code> with the main title</li>
          <li>at least two <code>&lt;h2&gt;</code> section titles</li>
          <li>at least one paragraph (<code>&lt;p&gt;</code>) under each <code>&lt;h2&gt;</code></li>
        </ul>
      `,
      starterCode: "<h1>Basketball</h1>\n\n",
      solution: "<h1>Basketball</h1>\n<h2>The rules</h2>\n<p>Two teams try to throw the ball in the basket.</p>\n<h2>My favorite team</h2>\n<p>I like the Phoenix Suns.</p>",
      tests: [
        { check: "CS.qa('h1').length === 1 && CS.text('h1') !== ''", message: "Your page needs exactly one <h1> with a title in it." },
        { check: "CS.qa('h2').filter(function (h) { return h.textContent.trim() !== ''; }).length >= 2", message: "Add at least two <h2> section titles, each with some text." },
        { check: "CS.qa('h2').every(function (h) { var n = h.nextElementSibling; return n && n.tagName === 'P' && n.textContent.trim() !== ''; })", message: "Put a paragraph (<p> with some text) right under each <h2>." }
      ],
      hints: [
        "An <code>&lt;h2&gt;</code> works just like an <code>&lt;h1&gt;</code>, but it is a little smaller.",
        "The order is: title, then section title, then text, then the next section title, then text.",
        "Pattern: <code>&lt;h2&gt;Section title&lt;/h2&gt;</code> and on the next line <code>&lt;p&gt;Some text.&lt;/p&gt;</code>. Do this two times."
      ]
    },
    {
      id: "ch02-ex2",
      title: "A shopping list and a recipe",
      type: "html",
      instructions: `
        <p>Under each heading, add a list:</p>
        <ul>
          <li>Under <strong>Shopping list</strong>: a bulleted list (<code>&lt;ul&gt;</code>) with at least 3 items.</li>
          <li>Under <strong>Steps</strong>: a numbered list (<code>&lt;ol&gt;</code>) with at least 3 items.</li>
        </ul>
      `,
      starterCode: "<h2>Shopping list</h2>\n\n<h2>Steps</h2>\n\n",
      solution: "<h2>Shopping list</h2>\n<ul>\n  <li>Bread</li>\n  <li>Cheese</li>\n  <li>Butter</li>\n</ul>\n<h2>Steps</h2>\n<ol>\n  <li>Put cheese on the bread.</li>\n  <li>Put butter in the pan.</li>\n  <li>Cook for 3 minutes on each side.</li>\n</ol>",
      tests: [
        { check: "CS.q('ul') !== null", message: "I can't find a bulleted list. Use <ul> and </ul>." },
        { check: "CS.qa('ul > li').length >= 3", message: "Your bulleted list needs at least 3 items. Each item is an <li>." },
        { check: "CS.q('ol') !== null", message: "I can't find a numbered list. Use <ol> and </ol>." },
        { check: "CS.qa('ol > li').length >= 3", message: "Your numbered list needs at least 3 items. Each item is an <li>." },
        { check: "CS.qa('li').every(function (li) { return li.textContent.trim() !== ''; })", message: "One of your list items is empty. Write some text inside every <li>." }
      ],
      hints: [
        "<code>&lt;ul&gt;</code> makes bullets. <code>&lt;ol&gt;</code> makes numbers.",
        "Each item goes inside its own <code>&lt;li&gt;</code> ... <code>&lt;/li&gt;</code>, and all the items go between the list's opening and closing tags.",
        "Pattern: <code>&lt;ul&gt;</code>, then three lines like <code>&lt;li&gt;Bread&lt;/li&gt;</code>, then <code>&lt;/ul&gt;</code>. Do the same with <code>&lt;ol&gt;</code>."
      ]
    },
    {
      id: "ch02-ex3",
      title: "Make a link",
      type: "html",
      instructions: `
        <p>Add a link under the paragraph. The link must:</p>
        <ul>
          <li>go to <strong>https://www.wikipedia.org</strong></li>
          <li>show the text <strong>Visit Wikipedia</strong></li>
        </ul>
        <p>Also make the word <strong>free</strong> in the paragraph bold with <code>&lt;strong&gt;</code>.</p>
      `,
      starterCode: "<p>Wikipedia is a free online encyclopedia.</p>\n",
      solution: "<p>Wikipedia is a <strong>free</strong> online encyclopedia.</p>\n<a href=\"https://www.wikipedia.org\">Visit Wikipedia</a>",
      tests: [
        { check: "CS.q('a') !== null", message: "I can't find a link. A link uses the <a> tag." },
        { check: "/^https?:\\/\\/(www\\.)?wikipedia\\.org\\/?$/i.test(CS.q('a').getAttribute('href').trim())", message: "Your link does not go to https://www.wikipedia.org. Check the href attribute." },
        { check: "CS.text('a') === 'Visit Wikipedia'", message: "The link text should be exactly \"Visit Wikipedia\"." },
        { check: "CS.qa('strong').some(function (s) { return s.textContent.trim().toLowerCase() === 'free'; })", message: "Make the word \"free\" bold by putting it inside <strong> and </strong>." }
      ],
      hints: [
        "A link uses the <code>&lt;a&gt;</code> tag with an <code>href</code> attribute.",
        "The address goes inside the quotes of <code>href=\"...\"</code>. The text you click goes between <code>&lt;a ...&gt;</code> and <code>&lt;/a&gt;</code>.",
        "Pattern: <code>&lt;a href=\"address\"&gt;text&lt;/a&gt;</code>. For bold: <code>a &lt;strong&gt;word&lt;/strong&gt; here</code>."
      ]
    },
    {
      id: "ch02-ex4",
      title: "Add an image",
      type: "html",
      instructions: `
        <p>Add an image under the heading. You can use this address for the picture:
        <code>https://picsum.photos/300/200</code> (it gives a random photo).</p>
        <p>Your image needs a <code>src</code> and an <code>alt</code> text that describes it.</p>
        <p>If the picture does not appear, that is OK. The check looks at your code, not the photo.</p>
      `,
      starterCode: "<h1>My photo</h1>\n",
      solution: "<h1>My photo</h1>\n<img src=\"https://picsum.photos/300/200\" alt=\"A random photo\">",
      tests: [
        { check: "CS.q('img') !== null", message: "I can't find an image. Use the <img> tag." },
        { check: "(CS.q('img').getAttribute('src') || '').trim() !== ''", message: "Your image needs a src attribute with the address of the picture." },
        { check: "(CS.q('img').getAttribute('alt') || '').trim() !== ''", message: "Your image needs an alt attribute with a short description." }
      ],
      hints: [
        "An image uses the <code>&lt;img&gt;</code> tag. It has no closing tag.",
        "It needs two attributes: <code>src</code> for the address and <code>alt</code> for the description.",
        "Pattern: <code>&lt;img src=\"address\" alt=\"what is in the picture\"&gt;</code>"
      ]
    },
    {
      id: "ch02-ex5",
      title: "Mini challenge: my favorite things",
      type: "html",
      instructions: `
        <p>Build a small page about your favorite things. Use what you learned in this chapter:</p>
        <ul>
          <li>one <code>&lt;h1&gt;</code> title</li>
          <li>a paragraph with at least one word in <code>&lt;strong&gt;</code> or <code>&lt;em&gt;</code></li>
          <li>a list (<code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>) with at least 3 items</li>
          <li>an image with <code>src</code> and <code>alt</code></li>
          <li>a link with an <code>href</code> and some text</li>
        </ul>
      `,
      starterCode: "<h1>My favorite things</h1>\n<p>Here are some things I love.</p>\n",
      solution: "<h1>My favorite things</h1>\n<p>Here are some things I <strong>really</strong> love.</p>\n<ul>\n  <li>Music</li>\n  <li>Tacos</li>\n  <li>My cat</li>\n</ul>\n<img src=\"https://picsum.photos/300/200\" alt=\"A nice photo\">\n<p>My favorite site: <a href=\"https://www.nasa.gov\">NASA</a></p>",
      tests: [
        { check: "CS.qa('h1').length === 1 && CS.text('h1') !== ''", message: "Your page needs one <h1> title." },
        { check: "CS.qa('p strong, p em').some(function (e) { return e.textContent.trim() !== ''; })", message: "Inside a paragraph, make at least one word bold (<strong>) or italic (<em>)." },
        { check: "CS.qa('ul > li, ol > li').filter(function (li) { return li.textContent.trim() !== ''; }).length >= 3", message: "Add a list (<ul> or <ol>) with at least 3 items." },
        { check: "CS.qa('img').some(function (i) { return (i.getAttribute('src') || '').trim() !== '' && (i.getAttribute('alt') || '').trim() !== ''; })", message: "Add an image with both a src and an alt attribute." },
        { check: "CS.qa('a').some(function (a) { return (a.getAttribute('href') || '').trim() !== '' && a.textContent.trim() !== ''; })", message: "Add a link with an href attribute and some text to click." }
      ],
      hints: [
        "Do one thing at a time. Press <strong>Check my answer</strong> after each step to see what is still missing.",
        "To make a word bold inside the paragraph, wrap it like this: <code>&lt;strong&gt;word&lt;/strong&gt;</code>.",
        "You need these tags: <code>&lt;ul&gt;</code> with <code>&lt;li&gt;</code> items, <code>&lt;img src=\"...\" alt=\"...\"&gt;</code>, and <code>&lt;a href=\"...\"&gt;...&lt;/a&gt;</code>."
      ]
    }
  ]
});
