// Chapter 4 — Layout
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ch04", {
  lessons: [
    {
      id: "ch04-l1",
      title: "Boxes in a row with flexbox",
      html: `
        <p>Normally, boxes like <code>&lt;div&gt;</code> and <code>&lt;p&gt;</code> stack from top to bottom.
        But many pages put boxes <strong>side by side</strong>: a menu, a row of photos, a row of cards.</p>
        <p>The easy way to do this is <strong>flexbox</strong>. You put the boxes inside a parent box,
        and give the <em>parent</em> <code>display: flex</code>:</p>
        <pre><code>&lt;style&gt;
  .row {
    display: flex;
  }
&lt;/style&gt;
&lt;div class="row"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
&lt;/div&gt;</code></pre>
        <p>Now "One", "Two" and "Three" are in one row.</p>
        <p>The parent is called the <strong>flex container</strong>. The boxes inside it are the
        <strong>flex items</strong>.</p>
        <div class="tip"><strong>Remember:</strong> <code>display: flex</code> goes on the <em>parent</em>,
        not on the boxes you want to move.</div>
      `
    },
    {
      id: "ch04-l2",
      title: "Spacing and lining up",
      html: `
        <p>Three properties on the flex container control where the items go:</p>
        <ul>
          <li><code>justify-content</code> — where the items go along the row (left to right).</li>
          <li><code>align-items</code> — where the items go up and down.</li>
          <li><code>gap</code> — the space between the items.</li>
        </ul>
        <pre><code>.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}</code></pre>
        <p>Useful values for <code>justify-content</code>:</p>
        <ul>
          <li><code>flex-start</code> — all items on the left (this is the normal value)</li>
          <li><code>center</code> — all items in the middle</li>
          <li><code>flex-end</code> — all items on the right</li>
          <li><code>space-between</code> — first item on the left, last on the right, equal space between</li>
        </ul>
        <p>Useful values for <code>align-items</code>: <code>flex-start</code> (top), <code>center</code>
        (middle) and <code>flex-end</code> (bottom).</p>
        <div class="tip"><strong>Tip:</strong> Use <code>gap</code> for space between items. It is easier
        than adding a margin to every item.</div>
      `
    },
    {
      id: "ch04-l3",
      title: "Wrapping and images that fit",
      html: `
        <p>What if there are too many items for one row? Normally flexbox squeezes them all into one line.
        With <code>flex-wrap: wrap</code>, items that do not fit move to the next line:</p>
        <pre><code>.row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}</code></pre>
        <p>This is very important on a phone, where the screen is narrow.</p>
        <p>Big images can also be a problem on a phone. A photo that is 1000px wide is wider than the screen.
        This rule fixes it:</p>
        <pre><code>img {
  max-width: 100%;
}</code></pre>
        <p><code>max-width: 100%</code> means "never be wider than the box you are in". The image gets smaller
        when there is not enough space, and keeps its normal size when there is.</p>
      `
    },
    {
      id: "ch04-l4",
      title: "A first look at media queries",
      html: `
        <p>Sometimes you want a different style on a small screen. A <strong>media query</strong> is a CSS
        rule that only works when the screen has a certain size:</p>
        <pre><code>.row {
  display: flex;
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}</code></pre>
        <p>On a wide screen, the items are in a row. When the screen is <strong>600px wide or less</strong>,
        the rule inside <code>@media</code> is used too. <code>flex-direction: column</code> puts the items
        on top of each other again.</p>
        <p>A page that changes to fit any screen is called <strong>responsive</strong>.</p>
        <div class="tip"><strong>Try it:</strong> In most browsers you can make the window narrow, or press
        F12 and use the phone button, to see how a page looks on a phone. You do not need media queries for
        the exercises in this chapter. <code>flex-wrap</code> and <code>max-width: 100%</code> already do a lot.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ch04-ex1",
      title: "Put the boxes in a row",
      type: "html",
      instructions: `
        <p>The three colored boxes are on top of each other. Use flexbox to put them
        <strong>side by side</strong> in one row.</p>
      `,
      starterCode: "<style>\n  .box {\n    width: 100px;\n    height: 100px;\n    background-color: tomato;\n    border: 2px solid black;\n  }\n</style>\n<div class=\"row\">\n  <div class=\"box\">1</div>\n  <div class=\"box\">2</div>\n  <div class=\"box\">3</div>\n</div>\n",
      solution: "<style>\n  .row {\n    display: flex;\n  }\n  .box {\n    width: 100px;\n    height: 100px;\n    background-color: tomato;\n    border: 2px solid black;\n  }\n</style>\n<div class=\"row\">\n  <div class=\"box\">1</div>\n  <div class=\"box\">2</div>\n  <div class=\"box\">3</div>\n</div>",
      tests: [
        { check: "CS.qa('.row > .box').length === 3", message: "Keep the three boxes inside the <div class=\"row\">." },
        { check: "CS.css('.row', 'display') === 'flex'", message: "The row is not a flex container yet. Which box needs display: flex?" },
        { check: "(function (b) { return b[0].getBoundingClientRect().top === b[2].getBoundingClientRect().top; })(CS.qa('.box'))", message: "The boxes are not in one row yet." }
      ],
      hints: [
        "<code>display: flex</code> goes on the <em>parent</em> of the boxes.",
        "The parent of the boxes is the element with the class <code>row</code>.",
        "Add a new rule: <code>.row { ... }</code> with one property inside it."
      ]
    },
    {
      id: "ch04-ex2",
      title: "Center the buttons",
      type: "html",
      instructions: `
        <p>The menu is already a flex container. Change the <code>.menu</code> rule so that:</p>
        <ul>
          <li>the links are in the <strong>middle</strong> of the row (<code>justify-content</code>)</li>
          <li>there is <strong>15px</strong> of space between the links (<code>gap</code>)</li>
        </ul>
      `,
      starterCode: "<style>\n  .menu {\n    display: flex;\n    background-color: #333;\n    padding: 10px;\n  }\n  .menu a {\n    color: white;\n  }\n</style>\n<nav class=\"menu\">\n  <a href=\"#\">Home</a>\n  <a href=\"#\">Games</a>\n  <a href=\"#\">About</a>\n</nav>\n",
      solution: "<style>\n  .menu {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    background-color: #333;\n    padding: 10px;\n  }\n  .menu a {\n    color: white;\n  }\n</style>\n<nav class=\"menu\">\n  <a href=\"#\">Home</a>\n  <a href=\"#\">Games</a>\n  <a href=\"#\">About</a>\n</nav>",
      tests: [
        { check: "CS.css('.menu', 'display') === 'flex' && CS.qa('.menu > a').length === 3", message: "Keep display: flex on .menu and keep the three links inside it." },
        { check: "CS.css('.menu', 'justify-content') === 'center'", message: "The links are not in the middle yet. Use justify-content." },
        { check: "CS.css('.menu', 'column-gap') === '15px'", message: "There is not 15px of space between the links yet. Use gap." }
      ],
      hints: [
        "Both new lines go inside the <code>.menu { }</code> rule.",
        "To put items in the middle of the row, <code>justify-content</code> needs the value <code>center</code>.",
        "The space line looks like this: <code>gap: ...px;</code>"
      ]
    },
    {
      id: "ch04-ex3",
      title: "Line up big and small",
      type: "html",
      instructions: `
        <p>The three boxes have different heights. Change the <code>.row</code> rule so that:</p>
        <ul>
          <li>the boxes are lined up in the <strong>middle</strong>, up and down (<code>align-items</code>)</li>
          <li>the first box is on the left, the last box is on the right, and the space between them is equal
          (<code>justify-content</code>)</li>
        </ul>
      `,
      starterCode: "<style>\n  .row {\n    display: flex;\n    height: 200px;\n    border: 2px dashed gray;\n  }\n  .small { height: 50px; width: 80px; background-color: gold; }\n  .medium { height: 100px; width: 80px; background-color: orange; }\n  .big { height: 150px; width: 80px; background-color: crimson; }\n</style>\n<div class=\"row\">\n  <div class=\"small\"></div>\n  <div class=\"big\"></div>\n  <div class=\"medium\"></div>\n</div>\n",
      solution: "<style>\n  .row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 200px;\n    border: 2px dashed gray;\n  }\n  .small { height: 50px; width: 80px; background-color: gold; }\n  .medium { height: 100px; width: 80px; background-color: orange; }\n  .big { height: 150px; width: 80px; background-color: crimson; }\n</style>\n<div class=\"row\">\n  <div class=\"small\"></div>\n  <div class=\"big\"></div>\n  <div class=\"medium\"></div>\n</div>",
      tests: [
        { check: "CS.css('.row', 'display') === 'flex' && CS.qa('.row > div').length === 3", message: "Keep display: flex on .row and keep the three boxes inside it." },
        { check: "CS.css('.row', 'align-items') === 'center'", message: "The boxes are not lined up in the middle yet. Use align-items." },
        { check: "CS.css('.row', 'justify-content') === 'space-between'", message: "The boxes should be spread out: first on the left, last on the right. Look at the justify-content values in the lesson." }
      ],
      hints: [
        "<code>align-items</code> is for up and down. <code>justify-content</code> is for left to right.",
        "For up and down, use the value <code>center</code>.",
        "For left to right, the value you need has two words with a dash. It starts with <code>space-</code>."
      ]
    },
    {
      id: "ch04-ex4",
      title: "Fit on a phone",
      type: "html",
      instructions: `
        <p>This page is too wide for a phone. Fix two things:</p>
        <ul>
          <li>The photo row must <strong>wrap</strong> to a new line when there is not enough space.</li>
          <li>Every image must never be wider than its box (<code>max-width</code>).</li>
        </ul>
      `,
      starterCode: "<style>\n  .photos {\n    display: flex;\n    gap: 10px;\n  }\n  .photos div {\n    width: 300px;\n    border: 1px solid gray;\n  }\n</style>\n<h1>My trip</h1>\n<div class=\"photos\">\n  <div><img src=\"https://picsum.photos/id/10/400/300\" alt=\"A forest\"></div>\n  <div><img src=\"https://picsum.photos/id/15/400/300\" alt=\"A river\"></div>\n  <div><img src=\"https://picsum.photos/id/29/400/300\" alt=\"Mountains\"></div>\n  <div><img src=\"https://picsum.photos/id/42/400/300\" alt=\"A cafe\"></div>\n</div>\n",
      solution: "<style>\n  .photos {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .photos div {\n    width: 300px;\n    border: 1px solid gray;\n  }\n  img {\n    max-width: 100%;\n  }\n</style>\n<h1>My trip</h1>\n<div class=\"photos\">\n  <div><img src=\"https://picsum.photos/id/10/400/300\" alt=\"A forest\"></div>\n  <div><img src=\"https://picsum.photos/id/15/400/300\" alt=\"A river\"></div>\n  <div><img src=\"https://picsum.photos/id/29/400/300\" alt=\"Mountains\"></div>\n  <div><img src=\"https://picsum.photos/id/42/400/300\" alt=\"A cafe\"></div>\n</div>",
      tests: [
        { check: "CS.css('.photos', 'display') === 'flex' && CS.qa('.photos img').length === 4", message: "Keep display: flex on .photos and keep the four images." },
        { check: "CS.css('.photos', 'flex-wrap') === 'wrap'", message: "The photo row does not wrap yet. Use flex-wrap on .photos." },
        { check: "CS.qa('img').every(function (i) { return getComputedStyle(i).maxWidth === '100%'; })", message: "The images can still be wider than their box. Give every img a max-width of 100%." }
      ],
      hints: [
        "You need to add one line to <code>.photos</code> and one new rule for the images.",
        "The property for wrapping is <code>flex-wrap</code>. Its value is <code>wrap</code>.",
        "For the images, add a rule with the selector <code>img</code> and the property <code>max-width</code> with a value in %."
      ]
    },
    {
      id: "ch04-ex5",
      title: "Mini challenge: a row of cards",
      type: "html",
      instructions: `
        <p>Make a row of cards that also works on a phone. The page has three cards inside <code>.cards</code>.</p>
        <p>For <code>.cards</code>:</p>
        <ul>
          <li>make it a flex container</li>
          <li>let the cards wrap to a new line</li>
          <li>add a gap between the cards (any size more than 0)</li>
        </ul>
        <p>For each <code>.card</code>:</p>
        <ul>
          <li>give it a width of <strong>200px</strong></li>
          <li>give it some padding and a border</li>
        </ul>
      `,
      starterCode: "<style>\n\n</style>\n<h1>My top 3 games</h1>\n<div class=\"cards\">\n  <div class=\"card\">\n    <h3>Minecraft</h3>\n    <p>Build anything you want.</p>\n  </div>\n  <div class=\"card\">\n    <h3>Mario Kart</h3>\n    <p>Fast races with friends.</p>\n  </div>\n  <div class=\"card\">\n    <h3>Tetris</h3>\n    <p>Simple, but hard to stop.</p>\n  </div>\n</div>\n",
      solution: "<style>\n  .cards {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n  }\n  .card {\n    width: 200px;\n    padding: 15px;\n    border: 2px solid teal;\n    background-color: #e0f7f7;\n  }\n</style>\n<h1>My top 3 games</h1>\n<div class=\"cards\">\n  <div class=\"card\">\n    <h3>Minecraft</h3>\n    <p>Build anything you want.</p>\n  </div>\n  <div class=\"card\">\n    <h3>Mario Kart</h3>\n    <p>Fast races with friends.</p>\n  </div>\n  <div class=\"card\">\n    <h3>Tetris</h3>\n    <p>Simple, but hard to stop.</p>\n  </div>\n</div>",
      tests: [
        { check: "CS.qa('.cards > .card').length === 3", message: "Keep the three cards inside <div class=\"cards\">." },
        { check: "CS.css('.cards', 'display') === 'flex' && CS.css('.cards', 'flex-wrap') === 'wrap'", message: ".cards must be a flex container that wraps. You need two properties for this." },
        { check: "parseFloat(CS.css('.cards', 'column-gap')) > 0", message: "Add a gap between the cards." },
        { check: "CS.qa('.card').every(function (c) { return getComputedStyle(c).width === '200px'; })", message: "Every card should be 200px wide." },
        { check: "CS.qa('.card').every(function (c) { var s = getComputedStyle(c); return parseFloat(s.paddingTop) > 0 && parseFloat(s.borderTopWidth) > 0 && s.borderTopStyle !== 'none'; })", message: "Give every card some padding and a border." }
      ],
      hints: [
        "You need two rules: <code>.cards { }</code> for the container and <code>.card { }</code> for each card.",
        "In <code>.cards</code> use <code>display</code>, <code>flex-wrap</code> and <code>gap</code>. Look back at the lesson about wrapping.",
        "In <code>.card</code> use <code>width</code>, <code>padding</code> and <code>border</code>. A border needs three values, like <code>2px solid gray</code>."
      ]
    }
  ]
});
