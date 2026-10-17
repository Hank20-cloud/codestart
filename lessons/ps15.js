// AP Psychology, chapter 15 — Unit 4: Motivation and emotion. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps15", {
  intro: `
    <p><strong>Motivation</strong> is a need or desire that gives energy to behavior and directs it toward a goal. <strong>Emotion</strong>
    is a whole-body response that includes body arousal (such as a fast heartbeat), expressive behavior (such as a smile), and
    conscious experience (thoughts and feelings). This chapter explains why we act, why we eat, and where our feelings come from.</p>
    <p>On the AP exam you must tell the motivation theories apart, know the brain areas and hormones of hunger, and compare the
    theories of emotion (James-Lange, Cannon-Bard, Schachter-Singer). Many questions give a short scenario and ask which theory it shows.</p>
  `,
  lessons: [
    {
      id: "ps15-l1",
      title: "Theories of motivation",
      html: `
        <table>
          <tr><th>Theory</th><th>Main idea</th><th>Example</th></tr>
          <tr><td><strong>Instinct / evolutionary theory</strong></td><td>some behaviors are unlearned, fixed patterns found in a whole species, shaped by evolution</td><td>a baby bird opens its mouth when its parent arrives</td></tr>
          <tr><td><strong>Drive-reduction theory</strong></td><td>a physical <strong>need</strong> (lack of food or water) creates a <strong>drive</strong> (an aroused, tense state) that pushes us to reduce the need</td><td>you are thirsty, so you drink water</td></tr>
          <tr><td><strong>Arousal theory</strong></td><td>we are motivated to keep an <strong>optimal (best) level of arousal</strong>, not too low (bored) and not too high (stressed)</td><td>a bored student turns on music to feel more awake</td></tr>
          <tr><td><strong>Incentive theory</strong></td><td>outside rewards or punishments (<strong>incentives</strong>) pull us toward or away from behavior</td><td>you work extra hours for a bonus</td></tr>
        </table>
        <p>Drive-reduction theory is based on <strong>homeostasis</strong>: the body's tendency to keep a stable inner state, like a constant body temperature.</p>
        <h3>The Yerkes-Dodson law</h3>
        <p>The <strong>Yerkes-Dodson law</strong> says that performance is best at a <strong>moderate</strong> level of arousal. For <em>easy</em> tasks, higher arousal is best;
        for <em>hard</em> tasks, lower arousal is best. Example: a little nervousness helps Leila on her test, but panic makes her forget everything.</p>
        <p>Arousal theory also explains curiosity and <strong>sensation seeking</strong>: some people look for new, intense, and risky experiences, such as skydiving.
        People differ in how much stimulation they need.</p>
        <h3>Approach and avoidance conflicts</h3>
        <table>
          <tr><th>Conflict</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Approach-approach</strong></td><td>two good options; choose one</td><td>two great movies are showing at the same time</td></tr>
          <tr><td><strong>Avoidance-avoidance</strong></td><td>two bad options; must choose one</td><td>clean the bathroom or wash the dishes</td></tr>
          <tr><td><strong>Approach-avoidance</strong></td><td>one option with good and bad parts</td><td>a job with high pay but a very long commute</td></tr>
          <tr><td><strong>Multiple approach-avoidance</strong></td><td>several options, each with good and bad parts</td><td>choosing between colleges with different costs and strengths</td></tr>
        </table>
        <div class="tip">Drive-reduction = <em>pushed</em> from inside by a need. Incentive = <em>pulled</em> from outside by a reward.</div>
      `
    },
    {
      id: "ps15-l2",
      title: "Needs, self-determination, and rewards",
      html: `
        <h3>Maslow's hierarchy of needs</h3>
        <p>Abraham <strong>Maslow</strong> arranged needs in a pyramid. Lower needs must usually be met before higher needs become important.</p>
        <table>
          <tr><th>Level (bottom to top)</th><th>Examples</th></tr>
          <tr><td>1. <strong>Physiological needs</strong></td><td>food, water, sleep</td></tr>
          <tr><td>2. <strong>Safety needs</strong></td><td>a safe home, security</td></tr>
          <tr><td>3. <strong>Belongingness and love needs</strong></td><td>friends, family, acceptance</td></tr>
          <tr><td>4. <strong>Esteem needs</strong></td><td>respect, achievement</td></tr>
          <tr><td>5. <strong>Self-actualization</strong></td><td>reaching your full potential</td></tr>
        </table>
        <p>Maslow himself later added <strong>self-transcendence</strong> (meaning beyond yourself) at the top. Criticism: the order is not fixed; people sometimes
        risk safety for higher goals.</p>
        <h3>Self-determination theory</h3>
        <p><strong>Self-determination theory</strong> says we are motivated to meet three basic needs:</p>
        <ul>
          <li><strong>Competence:</strong> feeling able and effective.</li>
          <li><strong>Autonomy:</strong> feeling in control of your own choices.</li>
          <li><strong>Relatedness:</strong> feeling connected to other people.</li>
        </ul>
        <h3>Intrinsic and extrinsic motivation</h3>
        <ul>
          <li><strong>Intrinsic motivation:</strong> doing something because it is enjoyable or interesting for its own sake. Example: Ibrahim draws because he loves drawing.</li>
          <li><strong>Extrinsic motivation:</strong> doing something to get a reward or avoid a punishment. Example: Ibrahim draws a poster to earn extra credit.</li>
          <li><strong>Overjustification effect:</strong> giving an expected reward for something a person already enjoys can <em>reduce</em> their intrinsic motivation.
          Example: a child who loved reading is paid for each book, and stops reading when the payments stop.</li>
        </ul>
        <h3>The need to belong</h3>
        <p><strong>Affiliation need</strong> (the <strong>need to belong</strong>) is the need to build and keep close relationships. Being excluded or ignored
        (<strong>ostracism</strong>) is painful and activates some of the same brain areas as physical pain.</p>
        <div class="tip">Overjustification: rewarding something already fun can make it feel like work.</div>
      `
    },
    {
      id: "ps15-l3",
      title: "Hunger",
      html: `
        <p>Hunger is controlled by the brain, mainly the <strong>hypothalamus</strong>, using signals from the body.</p>
        <table>
          <tr><th>Brain area</th><th>Role</th></tr>
          <tr><td><strong>Lateral hypothalamus</strong> (side)</td><td>triggers hunger; if destroyed in animals, they stop eating</td></tr>
          <tr><td><strong>Ventromedial hypothalamus</strong> (lower middle)</td><td>signals fullness (satiety); if destroyed in animals, they overeat</td></tr>
          <tr><td><strong>Arcuate nucleus</strong></td><td>a center in the hypothalamus that receives appetite hormones and sends "eat more" or "eat less" signals</td></tr>
        </table>
        <h3>Hormones and body signals</h3>
        <table>
          <tr><th>Signal</th><th>Made by</th><th>Effect</th></tr>
          <tr><td><strong>Ghrelin</strong></td><td>empty stomach</td><td>increases hunger ("ghrelin growls")</td></tr>
          <tr><td><strong>Leptin</strong></td><td>fat cells</td><td>tells the brain there is enough fat; decreases hunger over the long term</td></tr>
          <tr><td><strong>Insulin</strong></td><td>pancreas</td><td>controls blood <strong>glucose</strong> (sugar) by helping cells take it in</td></tr>
          <tr><td><strong>Glucose</strong></td><td>from food</td><td>main fuel of the body; when it is low, we feel hungry</td></tr>
        </table>
        <h3>Set point and metabolism</h3>
        <p>The <strong>set point</strong> is the weight the body tries to keep, like a thermostat. When weight drops below it, hunger increases and
        the <strong>basal metabolic rate</strong> (the energy the body uses at rest) slows down. This is why diets often fail over time. Many researchers
        prefer the term <em>settling point</em>, because the level can change slowly.</p>
        <h3>Culture and learning</h3>
        <p>We are born liking sweet and salty tastes, but culture and experience shape the rest. Example: a child in Korea learns to love kimchi; a child in Mexico learns to love spicy chilies.
        Many people avoid new foods (<em>neophobia</em>) at first, but repeated exposure increases liking.</p>
        <p><strong>Eating disorders</strong>, such as anorexia nervosa and bulimia nervosa, are serious conditions; they are covered in the disorders chapter.</p>
        <div class="tip">Lateral = "Let's eat." Ventromedial = "Very full."</div>
      `
    },
    {
      id: "ps15-l4",
      title: "Theories of emotion",
      html: `
        <p>The theories disagree about the order of three things: the event, the body arousal, and the feeling.</p>
        <table>
          <tr><th>Theory</th><th>Main idea</th><th>Example: a dog barks at you</th></tr>
          <tr><td><strong>James-Lange theory</strong></td><td>we feel emotion <em>because</em> we notice our body's response; arousal comes first</td><td>I notice my heart pounding and my legs shaking, and noticing these body changes <em>is</em> my fear.</td></tr>
          <tr><td><strong>Cannon-Bard theory</strong></td><td>the body response and the feeling happen <em>at the same time</em>, independently</td><td>heart pounds and fear happens together</td></tr>
          <tr><td><strong>Schachter-Singer two-factor theory</strong></td><td>emotion = body arousal + a <strong>cognitive label</strong> (we explain the arousal using the situation)</td><td>"My heart is pounding and there is a dog, so this must be fear."</td></tr>
          <tr><td><strong>Lazarus cognitive appraisal</strong></td><td>we first <strong>appraise</strong> (judge) the event, often without effort; the appraisal decides the emotion</td><td>"This dog is dangerous" leads to fear; "this dog is friendly" does not</td></tr>
        </table>
        <h3>Emotion without awareness</h3>
        <p>Robert <strong>Zajonc</strong> argued that some emotions happen <em>before</em> any thinking. Joseph LeDoux described a <strong>low road</strong>: signals go from the eye
        through the thalamus straight to the <strong>amygdala</strong>, so we react with fear before the cortex understands the event. The <strong>high road</strong> goes through the cortex first.
        Example: you jump back from a stick on the path before you realize it is not a snake.</p>
        <p>Zajonc and LeDoux: some emotions skip thinking. Lazarus and Schachter: thinking (appraisal or labeling) is part of emotion. Both can be true for different emotions.</p>
        <div class="tip">Two-factor theory has two parts: arousal <em>and</em> a label. If arousal is the same, the label decides which emotion you feel.</div>
      `
    },
    {
      id: "ps15-l5",
      title: "Expressing emotion",
      html: `
        <h3>Universal facial expressions</h3>
        <p>Paul <strong>Ekman</strong> found that people in many cultures, even isolated ones, recognize the same basic facial expressions, such as
        happiness, sadness, anger, fear, surprise, and disgust. This suggests these expressions are partly inborn (universal).</p>
        <h3>Display rules</h3>
        <p><strong>Display rules</strong> are a culture's rules about when, where, and how much emotion people should show. Example: in some cultures,
        people hide anger in front of older family members; in others, showing strong emotion in public is accepted. Collectivist cultures often show less
        intense personal emotion in public than individualist cultures.</p>
        <h3>Facial-feedback effect</h3>
        <p>The <strong>facial-feedback effect</strong> is the tendency of facial muscle movements to cause or increase the matching feeling. Example: Rosa holds a pen
        in her teeth so she seems to smile, and cartoons seem a little funnier to her. Body posture can have a similar effect (behavior feedback).</p>
        <h3>Broaden-and-build</h3>
        <p>The <strong>broaden-and-build theory</strong> (Barbara Fredrickson) says that positive emotions <em>broaden</em> our thinking, making us more open and creative,
        and over time <em>build</em> skills, friendships, and resources.</p>
        <div class="tip">Facial expressions are mostly universal; display rules are cultural.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps15-ex1",
      title: "Paid to play",
      type: "mc",
      instructions: `<p>Elena loves playing the violin. Her parents start paying her 5 dollars for every hour she practices. Months later they stop paying,
      and Elena practices much less than before. Which concept best explains this?</p>`,
      choices: [
        "Drive-reduction theory",
        "Yerkes-Dodson law",
        "Overjustification effect",
        "Approach-avoidance conflict"
      ],
      answer: 2,
      explain: "An expected reward for an activity she already enjoyed lowered her intrinsic motivation. That is the overjustification effect.",
      hints: [
        "She enjoyed the activity before the reward started.",
        "The reward reduced her inner motivation."
      ]
    },
    {
      id: "ps15-ex2",
      title: "Just a little nervous",
      type: "mc",
      instructions: `<p>Before a hard chemistry exam, Arjun is very calm and almost sleepy, and he makes careless mistakes. On the next exam he is extremely anxious
      and forgets formulas. On the third exam he feels only a little nervous and gets his best score. Which concept best explains this pattern?</p>`,
      choices: [
        "Yerkes-Dodson law",
        "Incentive theory",
        "Set point",
        "Facial-feedback effect"
      ],
      answer: 0,
      explain: "The Yerkes-Dodson law says performance is best at a moderate level of arousal, and worse when arousal is too low or too high.",
      hints: [
        "Compare his arousal level with his score each time.",
        "Best performance came with medium arousal."
      ]
    },
    {
      id: "ps15-ex3",
      title: "A damaged brain area",
      type: "mc",
      instructions: `<p>In an animal study, researchers damage one area of a rat's hypothalamus. Afterward the rat eats much more than usual and becomes very heavy.
      Which area was most likely damaged?</p>`,
      choices: [
        "Lateral hypothalamus",
        "Amygdala",
        "Ventromedial hypothalamus",
        "Pituitary gland"
      ],
      answer: 2,
      explain: "The ventromedial hypothalamus signals fullness. Without it, the rat does not feel full and overeats. Damage to the lateral hypothalamus would make the rat stop eating.",
      hints: [
        "Which area normally tells the animal it is full?",
        "Remember: lateral = 'let's eat', ventromedial = 'very full'."
      ]
    },
    {
      id: "ps15-ex4",
      title: "An empty stomach",
      type: "mc",
      instructions: `<p>Kofi skipped breakfast. By 11 a.m. his stomach is empty and he feels strong hunger. Which hormone, released by the empty stomach, most directly increases his hunger?</p>`,
      choices: [
        "Leptin",
        "Insulin",
        "Cortisol",
        "Ghrelin"
      ],
      answer: 3,
      explain: "Ghrelin is released by an empty stomach and signals hunger to the brain. Leptin, from fat cells, reduces hunger.",
      hints: [
        "The hormone comes from the stomach.",
        "Its name sounds like a growling stomach."
      ]
    },
    {
      id: "ps15-ex5",
      title: "Racing heart, which emotion?",
      type: "mc",
      instructions: `<p>Hana drinks two cups of strong coffee and then meets a boy at a party. Her heart races because of the coffee, but she does not
      think about the coffee. She looks at the boy and decides, "I must really like him." Which theory of emotion best fits her experience?</p>`,
      choices: [
        "Cannon-Bard theory",
        "Schachter-Singer theory",
        "James-Lange theory",
        "Drive-reduction theory"
      ],
      answer: 1,
      explain: "Hana has arousal (from coffee) and gives it a cognitive label based on the situation (the boy). Arousal plus label is the two-factor theory.",
      hints: [
        "Where did her arousal really come from, and how does she explain it?",
        "This theory says emotion = arousal + a cognitive label."
      ]
    },
    {
      id: "ps15-ex6",
      title: "Jumping before thinking",
      type: "mc",
      instructions: `<p>While hiking, Mateo sees a curved shape on the path and jumps back before he knows it is only a stick. Which idea best explains how he reacted so fast?</p>`,
      choices: [
        "The low road to the amygdala, which allows emotion without conscious thought",
        "Lazarus cognitive appraisal, which requires judging the event first",
        "Display rules, which tell people when to show fear",
        "The overjustification effect, which reduces motivation"
      ],
      answer: 0,
      explain: "Zajonc and LeDoux showed that some fear responses travel quickly from the thalamus to the amygdala, before the cortex understands what was seen.",
      hints: [
        "He reacted before he had time to think.",
        "Which brain pathway skips the cortex?"
      ]
    },
    {
      id: "ps15-ex7",
      title: "Two good options",
      type: "mc",
      instructions: `<p>Zainab is offered two summer programs: a science camp she would love and a trip to visit her cousins abroad, which she also wants very much.
      They happen at the same time. What kind of conflict is this?</p>`,
      choices: [
        "Avoidance-avoidance conflict",
        "Approach-avoidance conflict",
        "Multiple approach-avoidance conflict",
        "Approach-approach conflict"
      ],
      answer: 3,
      explain: "She must choose between two attractive options. That is an approach-approach conflict.",
      hints: [
        "Are the options good or bad?",
        "Both options attract her."
      ]
    },
    {
      id: "ps15-ex8",
      title: "Smile study (Science Practice)",
      type: "mc",
      instructions: `<p>A researcher randomly assigns students to hold a pen in their teeth (which makes a smile) or between their lips (which prevents a smile).
      Then all students rate how funny the same cartoons are. What is the <strong>dependent variable</strong>?</p>`,
      choices: [
        "How the pen is held",
        "The funniness ratings of the cartoons",
        "The random assignment of students",
        "The type of cartoons shown"
      ],
      answer: 1,
      explain: "The dependent variable is what the researcher measures: the funniness ratings. The pen position is the independent variable. This design tests the facial-feedback effect.",
      hints: [
        "The dependent variable is what is measured.",
        "What do the students report at the end?"
      ]
    },
    {
      id: "ps15-ex9",
      title: "Hiding feelings",
      type: "mc",
      instructions: `<p>At a family dinner, Wei is disappointed with a gift from his grandmother. In his culture, it is very rude to show disappointment to an older relative,
      so he smiles and thanks her. Which concept best explains his behavior?</p>`,
      choices: [
        "Facial-feedback effect",
        "Universal facial expressions",
        "Display rules",
        "Cannon-Bard theory"
      ],
      answer: 2,
      explain: "Display rules are cultural rules about when and how to show emotions. Wei follows his culture's rule by hiding his disappointment.",
      hints: [
        "His culture tells him what emotion he may show.",
        "These are cultural rules about expressing emotion."
      ]
    },
    {
      id: "ps15-ex10",
      title: "Feeling in control",
      type: "mc",
      instructions: `<p>A teacher lets students choose their own project topic, gives them skills to succeed, and puts them in friendly teams. Students become much more motivated.
      Which theory best explains why these changes worked?</p>`,
      choices: [
        "Self-determination theory",
        "Instinct theory",
        "Drive-reduction theory",
        "James-Lange theory"
      ],
      answer: 0,
      explain: "The teacher met the three needs of self-determination theory: autonomy (choice), competence (skills), and relatedness (friendly teams).",
      hints: [
        "Look at the three changes: choice, skills, and friendly teams.",
        "Which theory names autonomy, competence, and relatedness?"
      ]
    }
  ]
});
