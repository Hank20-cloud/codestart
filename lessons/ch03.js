// Chapter 3 — CSS styling
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch03", {
  lessons: [
    {
      id: "ch03-l1",
      title: "Your first CSS rule",
      html: `
        <p>HTML says <em>what</em> is on the page. <strong>CSS</strong> (Cascading Style Sheets) says how it
        <em>looks</em>.</p>
        <p>You can put CSS inside a <code>&lt;style&gt;</code> tag at the top of your page:</p>
        <pre><code>&lt;style&gt;
  h1 {
    color: blue;
  }
&lt;/style&gt;
&lt;h1&gt;Hello!&lt;/h1&gt;</code></pre>
        <p>This is a CSS <strong>rule</strong>. It has three parts:</p>
        <ul>
          <li>The <strong>selector</strong> (<code>h1</code>) says which elements to change.</li>
          <li>The <strong>property</strong> (<code>color</code>) says what to change.</li>
          <li>The <strong>value</strong> (<code>blue</code>) says how to change it.</li>
        </ul>
        <p>The property and value are inside curly brackets <code>{ }</code>. Put a colon <code>:</code>
        between them and a semicolon <code>;</code> at the end.</p>
        <div class="tip"><strong>Tip:</strong> If your CSS does nothing, check for a missing <code>{</code>,
        <code>}</code>, <code>:</code> or <code>;</code>. One small mistake can break the rule.</div>
      `
    },
    {
      id: "ch03-l2",
      title: "Colors and text",
      html: `
        <p>Here are some properties you will use a lot:</p>
        <pre><code>p {
  color: white;               /* text color */
  background-color: black;    /* color behind the text */
  font-size: 20px;            /* text size */
  font-family: Arial, sans-serif;  /* the font */
  text-align: center;         /* left, center or right */
}</code></pre>
        <p>Colors can be names like <code>red</code>, <code>teal</code> or <code>orange</code>.
        You can also use a code like <code>#ff0000</code> (that is red). The code has 6 characters: two for red,
        two for green and two for blue.</p>
        <p><code>px</code> means "pixels", the tiny dots on your screen. Normal text is about 16px.</p>
        <p>For <code>font-family</code>, you can list more than one font. If the computer does not have the
        first one, it tries the next one.</p>
        <div class="tip"><strong>Tip:</strong> Text between <code>/*</code> and <code>*/</code> is a
        <strong>comment</strong>. The browser ignores it. It is a note for people.</div>
      `
    },
    {
      id: "ch03-l3",
      title: "Classes and ids",
      html: `
        <p>A selector like <code>p</code> changes <em>every</em> paragraph. What if you want to change only some?</p>
        <p>Give elements a <strong>class</strong>. In CSS, a class selector starts with a dot <code>.</code></p>
        <pre><code>&lt;style&gt;
  .warning {
    color: red;
  }
&lt;/style&gt;
&lt;p class="warning"&gt;Do not touch!&lt;/p&gt;
&lt;p&gt;This one stays normal.&lt;/p&gt;
&lt;p class="warning"&gt;Hot surface!&lt;/p&gt;</code></pre>
        <p>Many elements can share the same class.</p>
        <p>An <strong>id</strong> is a name for <em>one</em> element. In CSS, an id selector starts with
        <code>#</code></p>
        <pre><code>&lt;style&gt;
  #main-title {
    font-size: 40px;
  }
&lt;/style&gt;
&lt;h1 id="main-title"&gt;Welcome&lt;/h1&gt;</code></pre>
        <div class="tip"><strong>Remember:</strong> dot <code>.</code> for a class, hash <code>#</code> for
        an id. In the HTML you write the name without the dot or the hash.</div>
      `
    },
    {
      id: "ch03-l4",
      title: "The box model",
      html: `
        <p>The browser sees every element as a <strong>box</strong>. Each box has four layers, from inside to outside:</p>
        <ol>
          <li><strong>content</strong> — the text or picture</li>
          <li><strong>padding</strong> — space inside the box, around the content</li>
          <li><strong>border</strong> — a line around the padding</li>
          <li><strong>margin</strong> — space outside the box, between it and other boxes</li>
        </ol>
        <pre><code>.box {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}</code></pre>
        <p><code>border</code> takes three values: the thickness, the style (<code>solid</code>,
        <code>dashed</code>, <code>dotted</code>) and the color.</p>
        <p><code>width</code> sets how wide the content is. Without a width, a box like a paragraph is as wide as the page.</p>
        <div class="tip"><strong>Tip:</strong> Padding is inside the border, margin is outside. If you give a box
        a background color, the padding gets the color too, but the margin does not.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch03-ex1",
      title: "Color the heading",
      type: "html",
      instructions: `
        <p>Add a <code>&lt;style&gt;</code> tag with a CSS rule that makes the <code>&lt;h1&gt;</code>:</p>
        <ul>
          <li>text color <strong>red</strong></li>
          <li>text centered (<code>text-align</code>)</li>
        </ul>
      `,
      starterCode: "<style>\n\n</style>\n<h1>Big news!</h1>\n<p>Today we learn CSS.</p>\n",
      solution: "<style>\n  h1 {\n    color: red;\n    text-align: center;\n  }\n</style>\n<h1>Big news!</h1>\n<p>Today we learn CSS.</p>",
      tests: [
        { check: "CS.text('h1') === 'Big news!'", message: "Keep the heading <h1>Big news!</h1> on the page." },
        { check: "CS.css('h1', 'color') === CS.colorOf('red')", message: "The heading is not red yet. Use the color property." },
        { check: "CS.css('h1', 'text-align') === 'center'", message: "The heading is not centered yet. Use the text-align property." }
      ],
      hints: [
        "Inside <code>&lt;style&gt;</code>, start a rule with the selector <code>h1</code> and curly brackets <code>{ }</code>.",
        "You need two lines inside the brackets: one for <code>color</code> and one for <code>text-align</code>.",
        "Pattern: <code>h1 { property: value; property: value; }</code>"
      ]
    },
    {
      id: "ch03-ex2",
      title: "Style the text",
      type: "html",
      instructions: `
        <p>Make every paragraph (<code>p</code>) look like this:</p>
        <ul>
          <li>font size <strong>20px</strong></li>
          <li>font <strong>Arial</strong> (you can add <code>sans-serif</code> after it)</li>
          <li>a <strong>yellow</strong> background color</li>
        </ul>
      `,
      starterCode: "<style>\n\n</style>\n<p>Roses are red.</p>\n<p>Violets are blue.</p>\n",
      solution: "<style>\n  p {\n    font-size: 20px;\n    font-family: Arial, sans-serif;\n    background-color: yellow;\n  }\n</style>\n<p>Roses are red.</p>\n<p>Violets are blue.</p>",
      tests: [
        { check: "CS.qa('p').length >= 2", message: "Keep both paragraphs on the page." },
        { check: "CS.qa('p').every(function (p) { return getComputedStyle(p).fontSize === '20px'; })", message: "The paragraphs are not 20px yet. Use font-size." },
        { check: "CS.qa('p').every(function (p) { return /^[\"']?arial/i.test(getComputedStyle(p).fontFamily.trim()); })", message: "The paragraphs do not use Arial yet. Use font-family." },
        { check: "CS.qa('p').every(function (p) { return getComputedStyle(p).backgroundColor === CS.colorOf('yellow'); })", message: "The paragraphs do not have a yellow background yet. Use background-color." }
      ],
      hints: [
        "Use the selector <code>p</code> so the rule changes every paragraph.",
        "The three properties are <code>font-size</code>, <code>font-family</code> and <code>background-color</code>.",
        "Example of one line: <code>font-size: 20px;</code>. Write the other two the same way."
      ]
    },
    {
      id: "ch03-ex3",
      title: "Classes and an id",
      type: "html",
      instructions: `
        <p>The page has a title and three paragraphs. Change only the CSS (inside <code>&lt;style&gt;</code>):</p>
        <ul>
          <li>The element with id <strong>title</strong> must have the text color <strong>blue</strong>.</li>
          <li>The paragraphs with the class <strong>good</strong> must have the text color <strong>green</strong>.</li>
          <li>The other paragraph must stay black.</li>
        </ul>
      `,
      starterCode: "<style>\n\n</style>\n<h1 id=\"title\">My week</h1>\n<p class=\"good\">Monday: I got a good grade.</p>\n<p>Tuesday: It rained all day.</p>\n<p class=\"good\">Wednesday: Pizza for lunch.</p>\n",
      solution: "<style>\n  #title {\n    color: blue;\n  }\n  .good {\n    color: green;\n  }\n</style>\n<h1 id=\"title\">My week</h1>\n<p class=\"good\">Monday: I got a good grade.</p>\n<p>Tuesday: It rained all day.</p>\n<p class=\"good\">Wednesday: Pizza for lunch.</p>",
      tests: [
        { check: "CS.q('#title') !== null && CS.qa('p.good').length === 2 && CS.qa('p:not(.good)').length === 1", message: "Do not change the HTML. Keep the id \"title\" and the class \"good\" where they are." },
        { check: "CS.css('#title', 'color') === CS.colorOf('blue')", message: "The title is not blue yet. Use an id selector: a # and the id name." },
        { check: "CS.qa('p.good').every(function (p) { return getComputedStyle(p).color === CS.colorOf('green'); })", message: "The paragraphs with class \"good\" are not green yet. Use a class selector: a . and the class name." },
        { check: "CS.css('p:not(.good)', 'color') === CS.colorOf('black')", message: "The Tuesday paragraph should stay black. Change only the paragraphs with the class \"good\"." }
      ],
      hints: [
        "You need two rules: one for the id and one for the class.",
        "An id selector starts with <code>#</code>. A class selector starts with <code>.</code>",
        "Pattern: <code>#idname { color: ...; }</code> and <code>.classname { color: ...; }</code>"
      ]
    },
    {
      id: "ch03-ex4",
      title: "Build a box",
      type: "html",
      instructions: `
        <p>Style the element with the class <strong>box</strong> so it has:</p>
        <ul>
          <li>a width of <strong>200px</strong></li>
          <li><strong>15px</strong> of padding</li>
          <li>a <strong>solid</strong> border that is <strong>3px</strong> thick (any color)</li>
          <li><strong>20px</strong> of margin</li>
        </ul>
      `,
      starterCode: "<style>\n  .box {\n    background-color: lightblue;\n  }\n</style>\n<div class=\"box\">I am a box.</div>\n",
      solution: "<style>\n  .box {\n    background-color: lightblue;\n    width: 200px;\n    padding: 15px;\n    border: 3px solid navy;\n    margin: 20px;\n  }\n</style>\n<div class=\"box\">I am a box.</div>",
      tests: [
        { check: "CS.q('.box') !== null", message: "Keep the <div class=\"box\"> on the page." },
        { check: "CS.css('.box', 'width') === '200px'", message: "The box is not 200px wide yet. Use the width property." },
        { check: "['top', 'right', 'bottom', 'left'].every(function (s) { return CS.css('.box', 'padding-' + s) === '15px'; })", message: "The box needs 15px of padding on every side. Use the padding property." },
        { check: "['top', 'right', 'bottom', 'left'].every(function (s) { return CS.css('.box', 'border-' + s + '-width') === '3px' && CS.css('.box', 'border-' + s + '-style') === 'solid'; })", message: "The box needs a solid border that is 3px thick. Example: border: 3px solid black;" },
        { check: "['top', 'right', 'bottom', 'left'].every(function (s) { return CS.css('.box', 'margin-' + s) === '20px'; })", message: "The box needs 20px of margin on every side. Use the margin property." }
      ],
      hints: [
        "Add four new lines inside the <code>.box { }</code> rule, one for each property.",
        "The properties are <code>width</code>, <code>padding</code>, <code>border</code> and <code>margin</code>. Do not forget <code>px</code> after the numbers.",
        "The border line needs three values in this order: thickness, style, color. For example <code>border: 1px dashed red;</code>"
      ]
    },
    {
      id: "ch03-ex5",
      title: "Mini challenge: a profile card",
      type: "html",
      instructions: `
        <p>Make the <code>.card</code> look like a real profile card:</p>
        <ul>
          <li>a background color that is <strong>not white</strong> and not transparent (pick any color)</li>
          <li>some padding (more than 0)</li>
          <li>a border (any thickness more than 0, any style except <code>none</code>)</li>
          <li>centered text</li>
        </ul>
        <p>Also make the element with id <strong>name</strong> bigger than <strong>24px</strong>.</p>
      `,
      starterCode: "<style>\n\n</style>\n<div class=\"card\">\n  <h2 id=\"name\">Alex Rivera</h2>\n  <p>Grade 10. Likes robots and skateboarding.</p>\n</div>\n",
      solution: "<style>\n  .card {\n    width: 250px;\n    background-color: lavender;\n    padding: 20px;\n    border: 2px solid purple;\n    text-align: center;\n  }\n  #name {\n    font-size: 30px;\n    color: purple;\n  }\n</style>\n<div class=\"card\">\n  <h2 id=\"name\">Alex Rivera</h2>\n  <p>Grade 10. Likes robots and skateboarding.</p>\n</div>",
      tests: [
        { check: "CS.q('.card') !== null && CS.q('#name') !== null", message: "Keep the card and the name on the page. Do not change the class or the id." },
        { check: "(function (c) { return c !== CS.colorOf('white') && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent'; })(CS.css('.card', 'background-color'))", message: "Give the card a background color that is not white." },
        { check: "parseFloat(CS.css('.card', 'padding-top')) > 0", message: "Give the card some padding, so the text does not touch the edge." },
        { check: "parseFloat(CS.css('.card', 'border-top-width')) > 0 && CS.css('.card', 'border-top-style') !== 'none'", message: "Give the card a border. Example: border: 2px solid gray;" },
        { check: "CS.css('.card', 'text-align') === 'center' && parseFloat(CS.css('#name', 'font-size')) > 24", message: "Center the text in the card, and make #name bigger than 24px with font-size." }
      ],
      hints: [
        "You need two rules: one for <code>.card</code> and one for <code>#name</code>.",
        "In <code>.card</code> use <code>background-color</code>, <code>padding</code>, <code>border</code> and <code>text-align</code>.",
        "In <code>#name</code> use <code>font-size</code> with a number bigger than 24, followed by <code>px</code>."
      ]
    }
  ]
});
