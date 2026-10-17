// AP Psychology, chapter 8 — Unit 2: Thinking and problem solving. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps08", {
  intro: `
    <p>How do you decide what to eat, how to solve a puzzle, or whether a news story is true? This chapter is about
    <strong>cognition</strong>: the mental activities of thinking, knowing, remembering, and communicating. You will learn how we
    organize ideas, how we solve problems, the mental shortcuts we use, and the common mistakes these shortcuts cause.</p>
    <p>On the AP exam, this topic is full of scenario questions: a person makes a decision, and you must name the heuristic or bias.
    The terms are similar to each other, so learn the small differences carefully.</p>
  `,
  lessons: [
    {
      id: "ps08-l1",
      title: "Concepts, prototypes, and schemas",
      html: `
        <p>A <strong>concept</strong> is a mental grouping of similar objects, events, ideas, or people. For example, "fruit" is a concept that
        includes apples, mangoes, and bananas. Concepts make thinking faster: we do not need a new idea for every single apple.</p>
        <p>A <strong>prototype</strong> is the best or most typical example of a concept. For many people, a robin or sparrow is the prototype of
        "bird". We decide if something belongs to a concept by comparing it with the prototype, so a penguin takes longer to classify as a bird.</p>
        <p>A <strong>schema</strong> is a larger mental framework that organizes our knowledge and expectations about something. For example,
        your schema for "going to a restaurant" includes waiting for a table, ordering, eating, and paying.</p>
        <h3>Changing schemas</h3>
        <p><strong>Jean Piaget</strong> described two ways we use schemas (you will see these again in the development chapter):</p>
        <table>
          <tr><th>Process</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Assimilation</strong></td><td>fitting new information into an existing schema</td><td>a small child sees a zebra and calls it a "horse"</td></tr>
          <tr><td><strong>Accommodation</strong></td><td>changing a schema, or making a new one, to fit new information</td><td>the child learns that a zebra is a different animal, with stripes, and makes a new concept</td></tr>
        </table>
        <div class="tip">Assimilation: the information changes to fit the schema. Accommodation: the schema changes to fit the information.</div>
      `
    },
    {
      id: "ps08-l2",
      title: "Solving problems: algorithms, heuristics, and insight",
      html: `
        <table>
          <tr><th>Strategy</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Algorithm</strong></td><td>a step-by-step procedure that always gives the correct answer, but can be slow</td><td>trying every possible 3-number code on a lock until it opens</td></tr>
          <tr><td><strong>Heuristic</strong></td><td>a simple mental shortcut that is fast but can lead to mistakes</td><td>looking for lost keys first in the places you usually leave them</td></tr>
          <tr><td><strong>Insight</strong></td><td>a sudden understanding of the solution, an "aha!" moment, often after a break</td><td>the answer to a riddle suddenly comes to you in the shower</td></tr>
        </table>
        <h3>Two common heuristics</h3>
        <ul>
          <li><strong>Representativeness heuristic</strong>: judging how likely something is by how well it matches our prototype or stereotype,
          ignoring other important information (like how common it is). Example: you meet a quiet man who loves books and guess he is a librarian
          rather than a salesperson, even though there are many more salespeople.</li>
          <li><strong>Availability heuristic</strong>: judging how likely something is by how easily examples come to mind. Vivid or recent events
          seem more common. Example: after seeing news about a plane crash, Sofia thinks flying is more dangerous than driving, even though
          driving is much more dangerous.</li>
        </ul>
        <p><strong>Amos Tversky and Daniel Kahneman</strong> are the researchers best known for studying these heuristics.</p>
        <div class="tip">Representativeness = "it <em>looks like</em> the typical case". Availability = "I can <em>easily remember</em> examples".</div>
      `
    },
    {
      id: "ps08-l3",
      title: "Obstacles to problem solving",
      html: `
        <table>
          <tr><th>Obstacle</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Mental set</strong></td><td>the tendency to use a method that worked in the past, even when a new method would be better</td><td>a student keeps solving every equation the long way she learned last year, even when a shortcut is clearly faster</td></tr>
          <tr><td><strong>Functional fixedness</strong></td><td>the tendency to think of an object only in its usual function (use)</td><td>not thinking of using a coin as a screwdriver when you have no screwdriver</td></tr>
          <tr><td><strong>Confirmation bias</strong></td><td>the tendency to search for and remember information that supports what we already believe, and to ignore information that goes against it</td><td>a fan reads only articles that praise his favorite team</td></tr>
          <tr><td><strong>Belief perseverance</strong></td><td>holding on to a belief even after the evidence for it has been shown to be false</td><td>Ali still believes a study about a diet, even after learning that the study was faked</td></tr>
        </table>
        <div class="tip">Mental set is about a <em>method</em> or approach. Functional fixedness is about the use of an <em>object</em>.
        Confirmation bias is about <em>looking for</em> evidence. Belief perseverance is about <em>keeping</em> a belief after it was proven wrong.</div>
      `
    },
    {
      id: "ps08-l4",
      title: "Errors in decisions and judgments",
      html: `
        <table>
          <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Framing</strong></td><td>the way a question or choice is worded changes our decision</td><td>people prefer meat that is "80% lean" to meat that is "20% fat", although they are the same</td></tr>
          <tr><td><strong>Priming</strong></td><td>the activation, often without awareness, of certain ideas, which then affects later thinking and behavior</td><td>after seeing the word "yellow", a person is faster to recognize the word "banana"</td></tr>
          <tr><td><strong>Gambler's fallacy</strong></td><td>the false belief that past random events change the chances of future random events</td><td>after five coin flips land on heads, a person thinks tails is "due"; the chance is still 50%</td></tr>
          <tr><td><strong>Sunk-cost fallacy</strong></td><td>continuing to put time or money into something because you have already invested in it, even when it is a bad choice</td><td>staying to watch a boring movie to the end because you paid for the ticket</td></tr>
          <tr><td><strong>Overconfidence</strong></td><td>being more sure that our knowledge and judgments are correct than we should be</td><td>a student is sure he will finish a project in one night, but it takes a week</td></tr>
        </table>
        <div class="tip">A "fallacy" is a mistaken belief. Gambler's fallacy = random chance. Sunk-cost fallacy = "I already paid, so I must continue".</div>
      `
    },
    {
      id: "ps08-l5",
      title: "Executive functions and creativity",
      html: `
        <p><strong>Executive functions</strong> are the mental skills we use to plan, focus attention, control impulses, switch between tasks,
        and reach goals. They depend mostly on the <strong>prefrontal cortex</strong> in the frontal lobe, which keeps developing until the mid-20s.
        Example: Amina makes a study plan, puts her phone away, and stops herself from watching videos until her work is done.</p>
        <h3>Creativity</h3>
        <p><strong>Creativity</strong> is the ability to produce new and valuable ideas.</p>
        <table>
          <tr><th>Type of thinking</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Convergent thinking</strong></td><td>narrowing down many possibilities to find the one best, correct answer</td><td>answering a multiple-choice test question</td></tr>
          <tr><td><strong>Divergent thinking</strong></td><td>expanding the number of possible answers; thinking in many different directions</td><td>listing as many uses for a brick as you can</td></tr>
        </table>
        <p>Psychologist <strong>Robert Sternberg</strong> and his colleagues describe five <strong>components of creativity</strong>:</p>
        <ul>
          <li><strong>Expertise</strong>: well-developed knowledge in an area.</li>
          <li><strong>Imaginative thinking skills</strong>: the ability to see things in new ways and find patterns.</li>
          <li><strong>A venturesome personality</strong>: willingness to take risks, accept uncertainty, and keep going after failure.</li>
          <li><strong>Intrinsic motivation</strong>: being driven by interest and enjoyment, not by rewards or pressure from outside.</li>
          <li><strong>A creative environment</strong>: people and places that support, encourage, and challenge new ideas.</li>
        </ul>
        <div class="tip">Divergent thinking is the type most linked to creativity. Convergent thinking = one right answer.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps08-ex1",
      title: "The typical bird",
      type: "mc",
      instructions: `<p>When Nadia is asked to picture a bird, she imagines a small sparrow. She takes longer to agree that an ostrich is a bird.
      Which concept best explains this?</p>`,
      choices: [
        "Algorithm",
        "Mental set",
        "Prototype",
        "Divergent thinking"
      ],
      answer: 2,
      explain: "A prototype is the most typical example of a concept. An ostrich is far from Nadia's prototype, so it takes longer to classify.",
      hints: [
        "The sparrow is her \"best example\" of a bird.",
        "Which term means the most typical member of a concept?"
      ]
    },
    {
      id: "ps08-ex2",
      title: "Scared of sharks",
      type: "mc",
      instructions: `<p>After watching several news stories about shark attacks, Liam refuses to swim at the beach. He believes shark attacks are
      very common, though they are actually extremely rare. Which concept best explains his judgment?</p>`,
      choices: [
        "Representativeness heuristic",
        "Availability heuristic",
        "Functional fixedness",
        "Sunk-cost fallacy"
      ],
      answer: 1,
      explain: "Liam judges the risk by how easily vivid examples come to mind. That is the availability heuristic.",
      hints: [
        "The news stories are vivid and recent in his memory.",
        "Which heuristic is about examples that easily come to mind?"
      ]
    },
    {
      id: "ps08-ex3",
      title: "Matching the stereotype",
      type: "mc",
      instructions: `<p>Esther meets a tall, strong young man at a party and quickly decides he must be a professional basketball player,
      even though very few people are professional basketball players. Which concept best explains her guess?</p>`,
      choices: [
        "Representativeness heuristic",
        "Availability heuristic",
        "Belief perseverance",
        "Priming"
      ],
      answer: 0,
      explain: "Esther judges by how well he matches her prototype of a basketball player and ignores how rare that job is. That is the representativeness heuristic.",
      hints: [
        "She compares him to her idea of a typical basketball player.",
        "Which heuristic is about \"looking like\" the typical case?"
      ]
    },
    {
      id: "ps08-ex4",
      title: "No hammer",
      type: "mc",
      instructions: `<p>Tariq needs to push a nail into the wall to hang a picture, but he has no hammer. He does not think of using the heavy
      shoe next to him. Which obstacle to problem solving is this?</p>`,
      choices: [
        "Confirmation bias",
        "Mental set",
        "Overconfidence",
        "Functional fixedness"
      ],
      answer: 3,
      explain: "Tariq thinks of the shoe only in its usual function (wearing it), so he does not see it as a tool. That is functional fixedness.",
      hints: [
        "The problem is how he thinks about an object.",
        "He sees the shoe only for its usual use."
      ]
    },
    {
      id: "ps08-ex5",
      title: "Only the good news",
      type: "mc",
      instructions: `<p>Valentina believes a certain phone brand is the best. She reads only reviews that praise it and skips the negative ones.
      Which concept best describes her behavior?</p>`,
      choices: [
        "Belief perseverance",
        "Framing",
        "Confirmation bias",
        "Insight"
      ],
      answer: 2,
      explain: "She searches for information that supports her belief and avoids information against it. That is confirmation bias. Belief perseverance would be keeping the belief after it was proven false.",
      hints: [
        "She is <em>looking for</em> information that agrees with her.",
        "Which bias is about seeking evidence that confirms a belief?"
      ]
    },
    {
      id: "ps08-ex6",
      title: "Red is due",
      type: "mc",
      instructions: `<p>At a carnival game, a wheel has landed on black seven times in a row. Jamal bets on red because he is sure red is
      "due" to come up next. Each spin is random. Which error is Jamal making?</p>`,
      choices: [
        "Sunk-cost fallacy",
        "Gambler's fallacy",
        "Overconfidence",
        "Mental set"
      ],
      answer: 1,
      explain: "Jamal believes past random results change the chances of the next random result. That is the gambler's fallacy.",
      hints: [
        "Each spin is independent of the spins before.",
        "The name of this fallacy relates to betting."
      ]
    },
    {
      id: "ps08-ex7",
      title: "Survival or death",
      type: "mc",
      instructions: `<p>Doctors are told a surgery has a "90% survival rate". Another group is told the same surgery has a "10% death rate".
      Many more doctors in the first group recommend the surgery. Which concept explains the difference?</p>`,
      choices: [
        "Framing",
        "Priming",
        "Algorithm",
        "Convergent thinking"
      ],
      answer: 0,
      explain: "The facts are the same; only the wording differs. When the way information is presented changes decisions, that is framing.",
      hints: [
        "Are the two numbers really different?",
        "The effect comes from how the choice is worded."
      ]
    },
    {
      id: "ps08-ex8",
      title: "Uses for a paper clip",
      type: "mc",
      instructions: `<p>In an art class, Ms. Kowalski asks students to list as many different uses for a paper clip as they can in five minutes.
      Mi-rae lists 30 uses. Which skill is this task measuring?</p>`,
      choices: [
        "Convergent thinking",
        "Algorithms",
        "Executive functions",
        "Divergent thinking"
      ],
      answer: 3,
      explain: "Finding many possible answers to an open question is divergent thinking, which is closely linked to creativity.",
      hints: [
        "There is no single correct answer here.",
        "Is the thinking spreading out or narrowing down?"
      ]
    },
    {
      id: "ps08-ex9",
      title: "Science practice: practice and problem solving",
      type: "mc",
      instructions: `<p>A researcher gives two groups of students a set of math puzzles. Group A first solves five puzzles that all use the same
      long method. Group B solves no practice puzzles. Then both groups get a puzzle that has a very easy shortcut. Group A uses the long method
      much more often. Which conclusion is best supported?</p>`,
      choices: [
        "Group A students are less intelligent than Group B students.",
        "The practice created a mental set, so Group A missed the shortcut.",
        "The shortcut was too hard for most students to see.",
        "Group B students used an algorithm instead of a heuristic."
      ],
      answer: 1,
      explain: "The only planned difference was the practice puzzles. Using the old method when a better one is available is mental set.",
      hints: [
        "What was the only difference between the groups?",
        "The practice made them keep using the same approach."
      ]
    },
    {
      id: "ps08-ex10",
      title: "Science practice: the dependent variable",
      type: "mc",
      instructions: `<p>In a study, students are randomly assigned to read either a list of words about old age or a list of neutral words.
      The researcher then measures how long it takes each student to walk down a hallway. What is the <strong>dependent variable</strong>?</p>`,
      choices: [
        "The type of word list",
        "Random assignment",
        "Walking time in the hallway",
        "The age of the students"
      ],
      answer: 2,
      explain: "The dependent variable is what the researcher measures: walking time. The word list is the independent variable, used to test priming.",
      hints: [
        "The dependent variable is the result that is measured.",
        "What does the researcher record after the students read?"
      ]
    }
  ]
});
