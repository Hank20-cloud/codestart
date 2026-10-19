// AP Psychology, chapter 14 — Unit 4: Personality. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps14", {
  intro: `
    <p><strong>Personality</strong> is a person's typical pattern of thinking, feeling, and acting. Psychologists have different
    theories about where personality comes from: hidden wishes in the unconscious mind, the need to grow, stable traits, or the
    way we learn from our surroundings. Each theory also has its own ways to measure personality.</p>
    <p>On the AP exam you must match a scenario to the right perspective, name defense mechanisms, know the Big Five traits, and
    judge personality tests by their reliability (consistency) and validity (whether they measure what they claim to measure).</p>
  `,
  lessons: [
    {
      id: "ps14-l1",
      title: "The psychodynamic perspective",
      barrons: "Chapter 14, Personality: Psychodynamic Theories of Personality (page 156)",
      html: `
        <p>The <strong>psychodynamic perspective</strong> says that personality is shaped by the <strong>unconscious</strong> mind: thoughts,
        wishes, and memories that we are not aware of but that still affect our behavior. It began with Sigmund <strong>Freud</strong>'s
        <strong>psychoanalytic theory</strong>.</p>
        <h3>Freud's three parts of personality</h3>
        <table>
          <tr><th>Part</th><th>What it does</th><th>Example: you see a cake in the kitchen that belongs to your sister</th></tr>
          <tr><td><strong>Id</strong></td><td>unconscious; wants pleasure now (the <em>pleasure principle</em>)</td><td>"Eat it now!"</td></tr>
          <tr><td><strong>Ego</strong></td><td>partly conscious and partly unconscious; finds realistic ways to satisfy the id (the <em>reality principle</em>)</td><td>"Ask her if you can have a piece later."</td></tr>
          <tr><td><strong>Superego</strong></td><td>the inner sense of right and wrong (conscience), learned from parents and society</td><td>"Taking it would be wrong."</td></tr>
        </table>
        <p>The ego tries to balance the id and the superego. When the conflict creates anxiety, the ego may use
        <strong>defense mechanisms</strong>: unconscious ways to protect us from anxiety by changing how we see reality.</p>
        <h3>Neo-Freudians</h3>
        <p><strong>Neo-Freudians</strong> accepted the unconscious but gave more weight to social relationships and the conscious mind.
        Alfred <strong>Adler</strong> wrote about the inferiority complex (feelings of being less than others); Karen <strong>Horney</strong>
        argued against Freud's views of women and stressed childhood anxiety; Carl <strong>Jung</strong> proposed a <em>collective unconscious</em>
        of shared images from human history.</p>
        <p>Today, psychologists agree that much mental activity happens outside awareness, but many of Freud's specific ideas are hard to test scientifically.</p>
        <div class="tip">Id = "I want." Superego = "I should." Ego = "Let's find a realistic way."</div>
      `
    },
    {
      id: "ps14-l2",
      title: "Defense mechanisms and projective tests",
      barrons: "Chapter 14, Personality: Psychodynamic Theories of Personality (page 156)",
      html: `
        <table>
          <tr><th>Defense mechanism</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Repression</strong></td><td>pushing painful thoughts or memories out of awareness (in Freud's view, the basic one)</td><td>An adult cannot remember a frightening event from childhood.</td></tr>
          <tr><td><strong>Denial</strong></td><td>refusing to accept a painful fact</td><td>A student with failing grades says, "I am doing fine in all my classes."</td></tr>
          <tr><td><strong>Displacement</strong></td><td>moving feelings from the real target to a safer target</td><td>Angry at his boss, Marco yells at his dog.</td></tr>
          <tr><td><strong>Projection</strong></td><td>seeing your own unacceptable feelings in other people</td><td>A person who wants to cheat says, "Everyone here is a cheater."</td></tr>
          <tr><td><strong>Rationalization</strong></td><td>giving a reasonable-sounding excuse instead of the real reason</td><td>"I did not get the job because I did not really want it."</td></tr>
          <tr><td><strong>Reaction formation</strong></td><td>acting the opposite of your true feelings</td><td>Jun is jealous of a classmate but praises her loudly to everyone.</td></tr>
          <tr><td><strong>Regression</strong></td><td>going back to behavior from an earlier age</td><td>A 6-year-old starts sucking his thumb again after a baby sister is born.</td></tr>
          <tr><td><strong>Sublimation</strong></td><td>turning unacceptable urges into socially valued activities</td><td>A person with strong anger trains hard as a boxer.</td></tr>
        </table>
        <p><strong>Note:</strong> today, most memory researchers think that true repression of painful memories is rare.
        People who live through a terrible event usually remember it <em>too well</em>, not too little.</p>
        <div class="tip">Displacement changes the <em>target</em> of a feeling. Projection gives your feeling to <em>someone else</em>. Reaction formation shows the <em>opposite</em> feeling.</div>
        <h3>Projective tests</h3>
        <p><strong>Projective tests</strong> show an unclear picture and ask the person to describe it. The idea is that people "project" their unconscious thoughts into their answers.</p>
        <ul>
          <li><strong>Rorschach inkblot test:</strong> the person says what they see in ten inkblots.</li>
          <li><strong>TAT (Thematic Apperception Test):</strong> the person tells a story about pictures of unclear scenes.</li>
        </ul>
        <p>These tests have <strong>low reliability</strong> (two scorers often score the same answers differently) and <strong>low validity</strong>
        (they do not predict behavior well). So the AP course treats them as weak tools.</p>
      `
    },
    {
      id: "ps14-l3",
      title: "The humanistic perspective",
      barrons: "Chapter 14, Personality: Humanistic Theories of Personality (page 158)",
      html: `
        <p>The <strong>humanistic perspective</strong> focuses on the healthy person's ability to grow and make free choices.
        It developed as a reaction against Freud (too negative) and behaviorism (too mechanical).</p>
        <h3>Abraham Maslow</h3>
        <p>Abraham <strong>Maslow</strong> proposed a <strong>hierarchy of needs</strong> (see the motivation chapter). At the top is
        <strong>self-actualization</strong>: reaching your full potential. Example: a retired doctor learns to paint and creates art
        that fulfills her. Maslow studied healthy, creative people, not patients.</p>
        <h3>Carl Rogers</h3>
        <p>Carl <strong>Rogers</strong> believed that people grow best in a climate with three conditions:</p>
        <ul>
          <li><strong>Genuineness:</strong> being open and honest about your feelings.</li>
          <li><strong>Acceptance</strong>, especially <strong>unconditional positive regard</strong>: accepting and valuing a person even when they fail or make mistakes.
          Example: a father tells his son, "I am disappointed in your choice, but I love you no matter what."</li>
          <li><strong>Empathy:</strong> understanding and sharing another person's feelings.</li>
        </ul>
        <p>The <strong>self-concept</strong> is all your thoughts and feelings about who you are. Rogers said that a positive self-concept helps us act and see the world positively.</p>
        <p><strong>Criticism:</strong> humanistic ideas are vague and hard to test, and they may ignore people's capacity for harm.</p>
        <div class="tip">"Unconditional" means "with no conditions": love is not earned by good grades or good behavior.</div>
      `
    },
    {
      id: "ps14-l4",
      title: "Trait theories and measuring traits",
      barrons: "Chapter 14, Personality: Trait Theories (page 158)",
      html: `
        <p>A <strong>trait</strong> is a stable pattern of behavior, thoughts, or feelings, for example being friendly or careful.
        <strong>Trait theories</strong> describe personality with traits instead of explaining hidden causes.</p>
        <p><strong>Factor analysis</strong> is a statistical method that finds groups of test items that people answer in similar ways.
        Researchers used it to reduce hundreds of trait words to a few basic dimensions.</p>
        <h3>The Big Five (five-factor model)</h3>
        <p>Remember them with <strong>OCEAN</strong>:</p>
        <table>
          <tr><th>Trait</th><th>High score means</th><th>Low score means</th></tr>
          <tr><td><strong>Openness</strong></td><td>curious, creative, likes new ideas</td><td>prefers routine and the familiar</td></tr>
          <tr><td><strong>Conscientiousness</strong></td><td>organized, careful, responsible</td><td>disorganized, careless</td></tr>
          <tr><td><strong>Extraversion</strong></td><td>outgoing, gets energy from people</td><td>quiet, reserved (introversion)</td></tr>
          <tr><td><strong>Agreeableness</strong></td><td>kind, helpful, trusting</td><td>critical, uncooperative</td></tr>
          <tr><td><strong>Neuroticism</strong> (emotional instability)</td><td>worries a lot, moods change often</td><td>calm, emotionally stable</td></tr>
        </table>
        <p>The Big Five appear in many cultures and are partly heritable (influenced by genes).</p>
        <h3>Self-report inventories</h3>
        <p>A <strong>personality inventory</strong> is a long questionnaire of true-false or agree-disagree items. The
        <strong>MMPI (Minnesota Multiphasic Personality Inventory)</strong> is the most researched one. It was first made to identify
        psychological disorders. These tests are more reliable and valid than projective tests, but people may answer to look good.</p>
        <h3>Stable across time, less across situations</h3>
        <p>Traits are fairly <strong>stable over time</strong>, especially after about age 30. But behavior in a <em>single</em> situation is hard to predict:
        a talkative student may be quiet at a funeral. Traits predict average behavior across many situations better than behavior in one moment.</p>
        <div class="tip">Factor analysis is the method; the Big Five is the result.</div>
      `
    },
    {
      id: "ps14-l5",
      title: "Social-cognitive perspective, self, and culture",
      barrons: "Chapter 14, Personality: Social Cognitive Theories (page 159)",
      html: `
        <p>The <strong>social-cognitive perspective</strong> says behavior comes from the interaction between our traits and thinking and our social situation.</p>
        <h3>Albert Bandura</h3>
        <ul>
          <li><strong>Reciprocal determinism:</strong> three factors influence each other: <em>behavior</em>, <em>personal/cognitive factors</em> (thoughts, traits), and the <em>environment</em>.
          Example: Li enjoys reading (personal), so she joins the book club (behavior); the club gives her new books and friends who read (environment), which makes her love reading even more.</li>
          <li><strong>Self-efficacy:</strong> your belief that you can succeed at a specific task. Example: Sofía believes she can learn to code, so she keeps trying when her program has errors.</li>
        </ul>
        <h3>Locus of control</h3>
        <p>Julian <strong>Rotter</strong> described <strong>locus of control</strong>:</p>
        <ul>
          <li><strong>Internal locus of control:</strong> "My own effort decides my results." Linked to better grades, health, and lower depression.</li>
          <li><strong>External locus of control:</strong> "Luck, fate, or powerful others decide my results."</li>
        </ul>
        <h3>The self</h3>
        <p><strong>Self-esteem</strong> is how much you value yourself (your sense of self-worth). Self-efficacy is about ability at a task;
        self-esteem is about your overall worth.</p>
        <h3>Culture</h3>
        <table>
          <tr><th>Individualist cultures</th><th>Collectivist cultures</th></tr>
          <tr><td>value personal goals, independence, and standing out</td><td>value group goals, family, harmony, and fitting in</td></tr>
          <tr><td>identity: "I am creative and ambitious."</td><td>identity: "I am a daughter, a sister, a member of my village."</td></tr>
        </table>
        <div class="tip">Self-efficacy = "I can do this task." Locus of control = "Who controls what happens to me?"</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps14-ex1",
      title: "Angry at the wrong person",
      type: "mc",
      instructions: `<p>Hamid's coach criticizes him in front of the team. Hamid says nothing to the coach. When he gets home, he slams the door and
      shouts at his little brother. Which defense mechanism best explains this?</p>`,
      choices: [
        "Projection",
        "Sublimation",
        "Displacement",
        "Regression"
      ],
      answer: 2,
      explain: "Hamid moves his anger from the real target (the coach) to a safer target (his brother). That is displacement.",
      hints: [
        "Who is Hamid really angry at, and who gets the anger?",
        "The feeling moves to a safer target."
      ]
    },
    {
      id: "ps14-ex2",
      title: "Opposite feelings",
      type: "mc",
      instructions: `<p>Valentina strongly dislikes her new stepfather but feels guilty about it. She is always extremely sweet to him and tells everyone
      how wonderful he is. Which defense mechanism best fits?</p>`,
      choices: [
        "Rationalization",
        "Reaction formation",
        "Denial",
        "Repression"
      ],
      answer: 1,
      explain: "Valentina acts in the opposite way to her true feelings. That is reaction formation.",
      hints: [
        "Compare her real feeling with how she acts.",
        "She shows the opposite of what she feels."
      ]
    },
    {
      id: "ps14-ex3",
      title: "A loving parent",
      type: "mc",
      instructions: `<p>When Chen fails his driving test, his mother says, "That is okay. I love you and I am proud of you, whatever happens."
      Which concept from Carl Rogers does she show?</p>`,
      choices: [
        "Self-actualization tendency",
        "Reciprocal determinism",
        "Superego",
        "Unconditional positive regard"
      ],
      answer: 3,
      explain: "She accepts and values Chen with no conditions, even after a failure. That is Rogers' unconditional positive regard.",
      hints: [
        "Does her love depend on Chen passing the test?",
        "Rogers called this acceptance with no conditions."
      ]
    },
    {
      id: "ps14-ex4",
      title: "A very organized student",
      type: "mc",
      instructions: `<p>Amina plans her homework every day, keeps her notes in perfect order, and is never late. On which Big Five trait would she most likely score high?</p>`,
      choices: [
        "Conscientiousness",
        "Openness to experience",
        "Agreeableness",
        "Extraversion"
      ],
      answer: 0,
      explain: "Being organized, careful, and responsible describes high conscientiousness.",
      hints: [
        "Think of the C in OCEAN.",
        "This trait is about being organized and responsible."
      ]
    },
    {
      id: "ps14-ex5",
      title: "Judging a test (Science Practice)",
      type: "mc",
      instructions: `<p>Two psychologists score the same person's Rorschach inkblot answers. One says the person is anxious; the other says the person is calm.
      This result shows that the test has a problem with:</p>`,
      choices: [
        "Self-efficacy",
        "Inter-rater reliability",
        "Random assignment",
        "Factor analysis of test items"
      ],
      answer: 1,
      explain: "When two scorers disagree about the same answers, the scoring is not consistent. That is low inter-rater reliability, a known weakness of projective tests.",
      hints: [
        "The problem is consistency between two scorers.",
        "Reliability means getting consistent results."
      ]
    },
    {
      id: "ps14-ex6",
      title: "Belief in success",
      type: "mc",
      instructions: `<p>Nadia believes she can give a good speech in English class, even though she is nervous. Because of this belief, she practices more and
      does not give up. Which concept best explains her belief?</p>`,
      choices: [
        "Self-esteem",
        "External locus of control",
        "Self-efficacy",
        "Sublimation"
      ],
      answer: 2,
      explain: "Self-efficacy is the belief that you can succeed at a specific task, here giving a speech. Self-esteem is a more general sense of self-worth.",
      hints: [
        "Her belief is about one specific task.",
        "Bandura's term for 'I can do this task.'"
      ]
    },
    {
      id: "ps14-ex7",
      title: "Three forces",
      type: "mc",
      instructions: `<p>Daniel is shy, so he avoids parties. Because he avoids parties, he has few chances to practice talking with new people, and his friends stop inviting him.
      This makes him even more shy. Which concept best explains this cycle?</p>`,
      choices: [
        "Reciprocal determinism",
        "Collective unconscious",
        "Reaction formation",
        "Unconditional positive regard"
      ],
      answer: 0,
      explain: "His personal trait, his behavior, and his environment all influence each other. Bandura called this reciprocal determinism.",
      hints: [
        "Notice how his trait, his actions, and his surroundings affect each other.",
        "This is Bandura's idea of factors influencing each other in both directions."
      ]
    },
    {
      id: "ps14-ex8",
      title: "Luck or effort",
      type: "mc",
      instructions: `<p>After a low exam score, Sipho says, "There is no point in studying. Whether I pass depends on which questions the teacher chooses."
      Which concept best describes Sipho's view?</p>`,
      choices: [
        "Internal locus of control",
        "High self-efficacy",
        "Self-actualization",
        "External locus of control"
      ],
      answer: 3,
      explain: "Sipho believes outside forces, not his own effort, decide his results. That is an external locus of control (Rotter).",
      hints: [
        "Does Sipho believe his effort makes a difference?",
        "He believes outside forces control his results."
      ]
    },
    {
      id: "ps14-ex9",
      title: "Finding traits (Science Practice)",
      type: "mc",
      instructions: `<p>A researcher gives 2,000 people a test with 300 trait words. A statistical method shows that answers to "talkative," "outgoing," and
      "loves parties" go together, while "worried" and "nervous" form a different group. Which method did the researcher use?</p>`,
      choices: [
        "A projective test",
        "Naturalistic observation",
        "Factor analysis",
        "A case study"
      ],
      answer: 2,
      explain: "Factor analysis finds clusters of items that people answer in similar ways. It is how researchers found the Big Five dimensions.",
      hints: [
        "The method finds groups of items that go together.",
        "This statistical method was used to find the Big Five."
      ]
    }
  ]
});
