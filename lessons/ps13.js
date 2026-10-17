// AP Psychology, chapter 13 — Unit 4: Social psychology. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps13", {
  intro: `
    <p><strong>Social psychology</strong> is the study of how people think about, influence, and relate to other people.
    It asks questions like: Why do we blame some people for their problems? Why do people follow a group even when the
    group is wrong? Why does nobody help when many people are watching?</p>
    <p>Social psychology is a large part of Unit 4 on the AP exam. Many questions describe a short everyday situation and
    ask you to name the concept, for example the fundamental attribution error, cognitive dissonance, or the bystander effect.
    Learn each term with a clear example, and you will recognize it quickly on the test.</p>
  `,
  lessons: [
    {
      id: "ps13-l1",
      title: "Attribution: explaining behavior",
      html: `
        <p><strong>Attribution theory</strong> says that people try to explain the causes of behavior. We usually choose one of two kinds of cause:</p>
        <table>
          <tr><th>Attribution</th><th>Meaning</th><th>Example: Kenji is late to class</th></tr>
          <tr><td><strong>Dispositional</strong> (internal)</td><td>the cause is the person: their personality, ability, or effort</td><td>"Kenji is lazy."</td></tr>
          <tr><td><strong>Situational</strong> (external)</td><td>the cause is the situation around the person</td><td>"The bus was late."</td></tr>
        </table>
        <h3>Errors in attribution</h3>
        <ul>
          <li><strong>Fundamental attribution error:</strong> when we explain <em>other people's</em> behavior, we give too much weight to
          their personality and too little to the situation. Example: a driver cuts in front of you, and you think "What a rude person,"
          not "Maybe he is driving to the hospital." This error is stronger in individualist cultures.</li>
          <li><strong>Actor-observer bias:</strong> when we are the actor, we explain our own behavior with the situation; when we observe others,
          we explain theirs with personality. Example: "I failed because the test was unfair, but Ana failed because she did not study."</li>
          <li><strong>Self-serving bias:</strong> we take credit for our successes (dispositional) and blame the situation for our failures.
          Example: "I won because I am skilled; I lost because the referee was bad."</li>
        </ul>
        <h3>Related ideas</h3>
        <ul>
          <li><strong>Explanatory style</strong> is a person's usual way of explaining events. An <strong>optimistic</strong> style explains bad events
          as temporary and caused by the situation. A <strong>pessimistic</strong> style explains bad events as permanent, personal, and affecting
          everything ("I am bad at everything, and it will never change").</li>
          <li><strong>Locus of control</strong> is a person's belief about who controls their life. With an <strong>internal</strong> locus, people believe their own
          actions decide what happens. With an <strong>external</strong> locus, they believe luck or other people decide. (More in the personality chapter.)</li>
          <li><strong>Just-world phenomenon:</strong> the belief that the world is fair, so people get what they deserve. It can lead us to
          blame victims. Example: "If she lost her job, she must have done something wrong."</li>
        </ul>
        <div class="tip">Fundamental attribution error is about judging <em>others</em>. Self-serving bias is about judging <em>yourself</em> (good results = me, bad results = not me).</div>
      `
    },
    {
      id: "ps13-l2",
      title: "Attitudes and persuasion",
      html: `
        <p>An <strong>attitude</strong> is a feeling or opinion about a person, object, or idea, which often guides how we act.
        Attitudes affect actions, but actions also change attitudes.</p>
        <h3>Cognitive dissonance</h3>
        <p><strong>Cognitive dissonance theory</strong> (Leon <strong>Festinger</strong>) says that we feel uncomfortable tension when our actions and our beliefs
        do not match, or when two beliefs do not match. To reduce this tension, we often change our <em>beliefs</em> to fit our actions.
        Example: Priya believes she is honest but copies a homework answer. She then tells herself, "Homework is not important, so it does not count."</p>
        <h3>Two routes to persuasion</h3>
        <table>
          <tr><th>Route</th><th>How it works</th><th>Example</th></tr>
          <tr><td><strong>Central route</strong></td><td>people think carefully about facts and strong arguments; the change lasts longer</td><td>a phone ad that compares battery life, price, and test results</td></tr>
          <tr><td><strong>Peripheral route</strong></td><td>people react to surface cues, like a famous or attractive speaker, music, or emotion</td><td>a phone ad with a popular singer and no facts</td></tr>
        </table>
        <h3>Asking strategies</h3>
        <ul>
          <li><strong>Foot-in-the-door phenomenon:</strong> people who first agree to a small request are more likely to agree to a larger one later.
          Example: a neighbor asks you to sign a petition, and next week asks you to volunteer for a whole day.</li>
          <li><strong>Door-in-the-face phenomenon:</strong> after people refuse a very large request, they are more likely to agree to a smaller one.
          Example: "Can you lend me 100 dollars?" "No." "Then can you lend me 10?" "Okay."</li>
          <li><strong>Mere exposure effect:</strong> the more often we see something, the more we tend to like it. Example: a song you did not like at first
          becomes a favorite after you hear it many times on the radio.</li>
        </ul>
        <div class="tip">Foot-in-the-door: small first, then big. Door-in-the-face: big first (refused), then small.</div>
      `
    },
    {
      id: "ps13-l3",
      title: "Conformity, obedience, and groups",
      html: `
        <h3>Conformity</h3>
        <p><strong>Conformity</strong> means changing your behavior or beliefs to match a group. Solomon <strong>Asch</strong> showed participants lines and asked
        which line matched a sample line. The other "participants" were actors who gave a clearly wrong answer on purpose. About one third of the time,
        real participants went along with the wrong answer. Conformity increased when the group was unanimous (everyone agreed) and when people answered in public.</p>
        <table>
          <tr><th>Type of social influence</th><th>Why we conform</th><th>Example</th></tr>
          <tr><td><strong>Normative social influence</strong></td><td>to be liked and accepted, and to avoid rejection</td><td>Omar wears a jacket he does not like because all his friends wear it.</td></tr>
          <tr><td><strong>Informational social influence</strong></td><td>because we believe the group knows the right answer</td><td>At a new school, Mei follows other students to the lunch room because they know where it is.</td></tr>
        </table>
        <h3>Obedience</h3>
        <p><strong>Obedience</strong> means following the orders of an authority figure. Stanley <strong>Milgram</strong> told participants to give
        electric shocks (not real, but they believed they were real) to a "learner" each time he made a mistake. About 65 percent obeyed up to the
        highest level. Obedience was highest when the authority was close and seemed legitimate (official), and when the victim was far away.
        The study raised serious ethical questions about stress to participants.</p>
        <h3>Behavior in groups</h3>
        <ul>
          <li><strong>Social facilitation:</strong> people do <em>simple or well-practiced</em> tasks better when others watch, but do hard or new tasks worse.
          Example: a skilled runner runs faster in front of a crowd.</li>
          <li><strong>Social loafing:</strong> people put in less effort when they work in a group and their own work is not measured. Example: one student lets the others do the group project.</li>
          <li><strong>Deindividuation:</strong> people lose self-awareness and self-control in groups where they feel anonymous (nobody knows who they are). Example: fans in masks damage property after a game.</li>
          <li><strong>Group polarization:</strong> discussion with like-minded people makes the group's views more extreme. Example: a group that slightly dislikes a rule leaves the meeting strongly against it.</li>
          <li><strong>Groupthink:</strong> the wish for harmony in a decision-making group is so strong that members do not consider other options or criticize the plan. Example: no one on a team says the plan is risky, and the plan fails.</li>
          <li><strong>Bystander effect:</strong> a person is less likely to help in an emergency when other people are present. A main cause is <strong>diffusion of responsibility</strong>: each person feels less responsible because others could help.</li>
        </ul>
        <h3>Zimbardo's prison study</h3>
        <p>Philip <strong>Zimbardo</strong> (1971) gave college students the roles of guards or prisoners in a fake prison. Some guards became cruel, and the study was stopped after six days.
        It is often used to show the power of <strong>roles</strong> and situations. But it has strong <strong>criticisms</strong>: the sample was very small, Zimbardo was both
        researcher and "prison boss," guards may have been told how to act, and the results have not been replicated (repeated with the same results). Treat it as a weak study.</p>
        <div class="tip">Social facilitation and social loafing are opposites: being watched helps on easy tasks; hiding in a group lowers effort.</div>
      `
    },
    {
      id: "ps13-l4",
      title: "Stereotypes, prejudice, and conflict",
      html: `
        <table>
          <tr><th>Term</th><th>Part</th><th>Meaning</th></tr>
          <tr><td><strong>Stereotype</strong></td><td>thought (belief)</td><td>a general belief about a group, often too simple and sometimes wrong ("all teenagers are lazy")</td></tr>
          <tr><td><strong>Prejudice</strong></td><td>feeling (attitude)</td><td>an unfair, usually negative attitude toward a group and its members</td></tr>
          <tr><td><strong>Discrimination</strong></td><td>action</td><td>unfair behavior toward people because of their group, such as refusing to hire them</td></tr>
        </table>
        <ul>
          <li><strong>Implicit bias:</strong> an automatic attitude or stereotype that a person is not aware of. It can be measured with reaction-time tests.</li>
          <li><strong>In-group bias:</strong> we favor our own group (the <strong>in-group</strong>, "us") over other groups (the <strong>out-group</strong>, "them"). Example: fans think their team's players are nicer people.</li>
          <li><strong>Out-group homogeneity:</strong> we see members of other groups as all alike ("they are all the same"), but see our own group as varied.</li>
          <li><strong>Scapegoat theory:</strong> when things go wrong, people may blame a group to have a target for their anger. Example: blaming immigrants during an economic crisis.</li>
          <li><strong>Confirmation bias</strong> keeps prejudice alive: we notice and remember examples that fit our stereotype and ignore examples that do not.</li>
        </ul>
        <h3>Reducing conflict</h3>
        <ul>
          <li><strong>Contact hypothesis:</strong> friendly contact between equal-status groups can reduce prejudice.</li>
          <li><strong>Superordinate goals:</strong> shared goals that groups can reach only by working together. In Muzafer <strong>Sherif's Robbers Cave</strong> study, boys at a summer camp were split into two groups that became hostile during competitions. Hostility dropped when the groups had to cooperate, for example to fix the camp's water supply.</li>
        </ul>
        <p>A <strong>social trap</strong> is a situation where each person chooses what is best for themselves, but when everyone does it, everyone loses.
        Example: every family waters its lawn during a drought, and the town runs out of water.</p>
        <div class="tip">Remember the order: stereotype (think) leads to prejudice (feel) leads to discrimination (do).</div>
      `
    },
    {
      id: "ps13-l5",
      title: "Aggression, helping, and attraction",
      html: `
        <h3>Aggression</h3>
        <p><strong>Aggression</strong> is any physical or verbal behavior meant to hurt someone. The <strong>frustration-aggression principle</strong>
        says that frustration (being blocked from a goal) creates anger, which can lead to aggression. Example: after waiting an hour in traffic, Luis shouts at his brother.
        Heat, pain, and crowding can increase it.</p>
        <h3>Prosocial behavior</h3>
        <p><strong>Prosocial behavior</strong> is positive, helpful behavior. <strong>Altruism</strong> is helping others with no expected reward, even at a cost to yourself.</p>
        <ul>
          <li><strong>Social exchange theory:</strong> we help when the benefits (rewards) are greater than the costs. Example: you help a friend move because you want her help later.</li>
          <li><strong>Reciprocity norm:</strong> the expectation that we should help those who helped us. Example: a neighbor brings you food, so you water her plants.</li>
          <li><strong>Social responsibility norm:</strong> the expectation that we should help people who need help and cannot pay us back, such as small children.</li>
        </ul>
        <h3>Attraction</h3>
        <ul>
          <li><strong>Proximity:</strong> being physically near someone. We often become friends with people who live or sit close to us (partly because of the mere exposure effect).</li>
          <li><strong>Similarity:</strong> we like people who share our interests, attitudes, and background.</li>
          <li><strong>Physical attractiveness:</strong> first impressions are strongly affected by looks.</li>
        </ul>
        <table>
          <tr><th>Type of love</th><th>Meaning</th></tr>
          <tr><td><strong>Passionate love</strong></td><td>strong, exciting feelings and physical attraction, often at the start of a relationship</td></tr>
          <tr><td><strong>Companionate love</strong></td><td>deep, calm affection and friendship that often grows in long relationships</td></tr>
        </table>
        <div class="tip">Social exchange theory = "What do I get?" Reciprocity = "You helped me, so I help you."</div>
      `
    },
    {
      id: "ps13-l6",
      title: "Expectations and comparison",
      html: `
        <ul>
          <li><strong>Self-fulfilling prophecy:</strong> a belief that leads to its own fulfillment. Our expectations change our behavior, and this makes the expectation come true.
          Example: a teacher believes Amara is gifted, gives her more attention, and Amara's grades rise.</li>
          <li><strong>Social comparison:</strong> we judge our own abilities and opinions by comparing ourselves with others. Example: Diego feels he is a good singer until he joins a choir of very strong singers.</li>
          <li><strong>Relative deprivation:</strong> the feeling of being worse off than the people we compare ourselves with. Example: a worker with a good salary feels poor after her coworker gets a bigger raise.</li>
        </ul>
        <div class="tip">Relative deprivation is about how you feel compared with others, not how much you really have.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps13-ex1",
      title: "Judging a stranger",
      type: "mc",
      instructions: `<p>A waiter forgets Fatima's order. Fatima thinks, "He is careless and does not care about his job." She does not notice that
      the restaurant is very full and he is the only waiter. Which concept best explains Fatima's judgment?</p>`,
      choices: [
        "Self-serving bias in attribution",
        "Fundamental attribution error",
        "Just-world phenomenon",
        "Mere exposure effect"
      ],
      answer: 1,
      explain: "Fatima explains another person's behavior with his personality and ignores the situation. That is the fundamental attribution error. Self-serving bias is about explaining your own results.",
      hints: [
        "Is Fatima judging herself or someone else?",
        "She blames his personality and ignores the busy situation."
      ]
    },
    {
      id: "ps13-ex2",
      title: "A changed opinion",
      type: "mc",
      instructions: `<p>Tomás believes that fast food is unhealthy. Every day he eats lunch at a fast-food restaurant with his friends. After a few weeks
      he says, "Fast food is not so bad, really." Which concept best explains the change in his belief?</p>`,
      choices: [
        "Group polarization",
        "Peripheral route persuasion",
        "Door-in-the-face phenomenon",
        "Cognitive dissonance"
      ],
      answer: 3,
      explain: "His action (eating fast food) did not match his belief, which created tension. He reduced the tension by changing his belief, as Festinger's cognitive dissonance theory predicts.",
      hints: [
        "His behavior and his belief did not match at first.",
        "Which theory says we change our beliefs to fit our actions?"
      ]
    },
    {
      id: "ps13-ex3",
      title: "Asking for money",
      type: "mc",
      instructions: `<p>A charity worker asks Yuki to give 500 dollars. Yuki says no. The worker then asks, "Could you give 20 dollars instead?" Yuki agrees.
      Which strategy did the worker use?</p>`,
      choices: [
        "Door-in-the-face phenomenon",
        "Foot-in-the-door phenomenon",
        "Central route persuasion",
        "Reciprocity norm"
      ],
      answer: 0,
      explain: "The worker made a very large request first, which Yuki refused, then a smaller one. That is door-in-the-face. Foot-in-the-door starts with a small request.",
      hints: [
        "Was the first request big or small?",
        "A big request is refused, then a smaller request is accepted."
      ]
    },
    {
      id: "ps13-ex4",
      title: "Following the class",
      type: "mc",
      instructions: `<p>On a quiz show at school, Aisha is sure the answer is "B." All her teammates say "C," and she does not want them to think she is strange,
      so she also says "C," although she still believes "B" is correct. Which concept best explains her behavior?</p>`,
      choices: [
        "Informational social influence",
        "Obedience",
        "Normative social influence",
        "Social facilitation"
      ],
      answer: 2,
      explain: "Aisha goes along with the group to be accepted, not because she believes they are right. That is normative social influence. With informational influence she would believe the group knows better.",
      hints: [
        "Does Aisha think the group is right?",
        "She conforms to be accepted by the group."
      ]
    },
    {
      id: "ps13-ex5",
      title: "Nobody calls for help",
      type: "mc",
      instructions: `<p>A man falls down on a busy train platform. About 40 people see him, but for several minutes no one calls for help.
      Each person later says, "I thought someone else would do it." Which concept best explains this?</p>`,
      choices: [
        "Deindividuation",
        "Diffusion of responsibility",
        "Group polarization",
        "The just-world phenomenon"
      ],
      answer: 1,
      explain: "With many people present, each person felt less personal responsibility to help. Diffusion of responsibility is a main cause of the bystander effect.",
      hints: [
        "Each person expected another person to act.",
        "Responsibility was spread over many people."
      ]
    },
    {
      id: "ps13-ex6",
      title: "Working together",
      type: "mc",
      instructions: `<p>Two clubs at a school dislike each other. The principal tells them that the school trip will happen only if both clubs together raise
      enough money. After working together, the clubs become friendly. Which concept best explains this result?</p>`,
      choices: [
        "Scapegoat theory",
        "Out-group homogeneity",
        "Social trap",
        "Superordinate goals"
      ],
      answer: 3,
      explain: "A shared goal that needs both groups to cooperate reduced their conflict, as Sherif found in the Robbers Cave study.",
      hints: [
        "Think of Sherif's Robbers Cave study.",
        "The groups can reach the goal only by working together."
      ]
    },
    {
      id: "ps13-ex7",
      title: "Easy and hard tasks",
      type: "mc",
      instructions: `<p>Kwame has played the piano for ten years. He plays a song he knows very well better than ever when his family watches.
      His sister, who started piano last week, makes more mistakes when the family watches. Which concept explains both results?</p>`,
      choices: [
        "Social loafing",
        "Social facilitation",
        "Self-fulfilling prophecy",
        "Group polarization"
      ],
      answer: 1,
      explain: "Social facilitation means an audience improves performance on easy or well-learned tasks and hurts performance on hard or new tasks.",
      hints: [
        "An audience is present in both cases.",
        "Being watched helps on well-practiced tasks and hurts on new ones."
      ]
    },
    {
      id: "ps13-ex8",
      title: "Milgram's results (Science Practice)",
      type: "mc",
      instructions: `<p>In versions of Milgram's study, the researcher changed how close the "learner" was to the participant. When the learner was in another room,
      many more participants obeyed than when they had to touch the learner's hand. In this comparison, what is the <strong>independent variable</strong>?</p>`,
      choices: [
        "The percentage of participants who obeyed",
        "The level of shock the participants gave",
        "How close the learner was to the participant",
        "The participants' personality traits"
      ],
      answer: 2,
      explain: "The independent variable is the factor the researcher changes on purpose: the distance to the learner. The rate of obedience is the dependent variable that was measured.",
      hints: [
        "The independent variable is what the researcher changes.",
        "The amount of obedience was measured, so it is the dependent variable."
      ]
    },
    {
      id: "ps13-ex9",
      title: "Blaming the victim",
      type: "mc",
      instructions: `<p>When Ravi hears that a family lost their home in a flood, he says, "They probably did not plan well. Good people do not end up in that situation."
      Which concept best explains Ravi's thinking?</p>`,
      choices: [
        "Actor-observer bias",
        "Relative deprivation",
        "In-group bias",
        "Just-world phenomenon"
      ],
      answer: 3,
      explain: "Ravi believes the world is fair, so people get what they deserve. This just-world thinking leads him to blame the victims.",
      hints: [
        "Ravi believes that bad things happen only to people who deserve them.",
        "Which concept says people think the world is fair?"
      ]
    },
    {
      id: "ps13-ex10",
      title: "Reading the Zimbardo study (Science Practice)",
      type: "mc",
      instructions: `<p>A student says, "Zimbardo's prison study proves that anyone will become cruel in a position of power." Which statement is the best
      scientific response?</p>`,
      choices: [
        "The conclusion is too strong, because the study had a small sample, possible researcher influence, and has not been replicated.",
        "The conclusion is correct, because the study was a well-controlled experiment with random assignment to many conditions.",
        "The conclusion is correct, because a case study can prove cause and effect for all people.",
        "The conclusion is wrong, because the study showed that roles have no effect on behavior."
      ],
      answer: 0,
      explain: "The study is widely criticized: few participants, Zimbardo played a role himself, guards may have been guided, and results have not been replicated. So it cannot prove a claim about everyone.",
      hints: [
        "Think about the criticisms of the study.",
        "Can one small study with possible bias prove something about all people?"
      ]
    }
  ]
});
