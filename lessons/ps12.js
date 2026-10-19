// AP Psychology, chapter 12 — Unit 3: Learning (classical conditioning, operant conditioning, schedules of
// reinforcement, cognitive learning, and observational learning).
// Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps12", {
  intro: `
    <p><strong>Learning</strong> is a lasting change in behavior or knowledge that comes from experience. We learn by
    linking events together (classical conditioning), by the results of our actions (operant conditioning), by thinking,
    and by watching other people (observational learning).</p>
    <p>Learning is one of the most tested topics on the AP exam. You will often get a short story and must name the
    neutral stimulus, the conditioned response, or the type of reinforcement or punishment. Practice reading each
    scenario carefully, step by step.</p>
  `,
  lessons: [
    {
      id: "ps12-l1",
      title: "Classical conditioning",
      barrons: "Chapter 12, Learning: Classical Conditioning (page 122)",
      html: `
        <p><strong>Classical conditioning</strong> is learning to link two stimuli, so that one stimulus starts to cause a
        response that the other one caused. Ivan <strong>Pavlov</strong>, a Russian scientist, discovered it while studying
        digestion in dogs. The dogs began to drool (salivate) before the food arrived, when they heard the sounds that came before the food.</p>
        <h3>The parts</h3>
        <table>
          <tr><th>Term</th><th>Meaning</th><th>Pavlov's dog</th></tr>
          <tr><td><strong>Neutral stimulus (NS)</strong></td><td>a stimulus that causes no response at first</td><td>a tone, before learning</td></tr>
          <tr><td><strong>Unconditioned stimulus (UCS)</strong></td><td>a stimulus that causes a response naturally, without learning</td><td>food</td></tr>
          <tr><td><strong>Unconditioned response (UCR)</strong></td><td>the natural, unlearned response to the UCS</td><td>drooling at food</td></tr>
          <tr><td><strong>Conditioned stimulus (CS)</strong></td><td>the former NS, which now causes a response after being paired with the UCS</td><td>the tone, after learning</td></tr>
          <tr><td><strong>Conditioned response (CR)</strong></td><td>the learned response to the CS</td><td>drooling at the tone</td></tr>
        </table>
        <p>Everyday example: in Sara's apartment, the old fridge always clicks just before a very loud bang from the pipes. The bang
        makes her jump without any learning. After a few weeks, she jumps when she hears the click. The loud bang is the UCS, jumping at
        the bang is the UCR, the click is the CS, and jumping at the click is the CR.</p>
        <h3>Processes</h3>
        <ul>
          <li><strong>Acquisition:</strong> the first stage, when the NS and UCS are paired and the link is learned. The NS works best just <em>before</em> the UCS.</li>
          <li><strong>Extinction:</strong> the CR becomes weaker when the CS is presented again and again <em>without</em> the UCS.</li>
          <li><strong>Spontaneous recovery:</strong> after extinction and a rest period, the CR suddenly returns in a weaker form.</li>
          <li><strong>Generalization:</strong> responding to stimuli that are similar to the CS. Example: the dog also drools at a slightly different tone.</li>
          <li><strong>Discrimination:</strong> learning to tell the difference between the CS and other stimuli, and responding only to the CS.</li>
          <li><strong>Higher-order conditioning</strong> (second-order conditioning): a CS is paired with a new NS, and the new NS also becomes a CS. Example: a light comes before the tone, and the dog starts drooling at the light.</li>
        </ul>
        <div class="tip">To label a scenario, first find the natural reflex (UCS to UCR). The UCR and the CR are usually the same
        behavior. The difference is what causes it: the UCS (natural) or the CS (learned).</div>
      `
    },
    {
      id: "ps12-l2",
      title: "Classical conditioning in humans and biology",
      barrons: "Chapter 12, Learning: Classical Conditioning (page 122)",
      html: `
        <h3>Watson and Little Albert</h3>
        <p>John B. <strong>Watson</strong>, a founder of behaviorism, said psychology should study only observable behavior.
        With Rosalie Rayner, he studied a baby called "Little Albert". Albert was not afraid of a white rat at first (NS).
        Each time Albert touched the rat, the researchers made a loud, frightening noise (UCS), which made him cry (UCR). After
        several pairings, Albert cried when he saw the rat (CS and CR). He also became afraid of other furry things, like a rabbit
        (generalization). Today this study is seen as unethical, because it caused fear and the fear was never removed.</p>
        <h3>Taste aversion and biological preparedness</h3>
        <p>John <strong>Garcia</strong> found that rats who ate a food and later became sick avoided that food, even when the
        sickness came hours later. This is a <strong>conditioned taste aversion</strong>. Example: Rohan ate fish soup and got the
        stomach flu that night. Now he feels sick when he smells fish soup, even though the soup did not cause the flu.</p>
        <p>Garcia found that rats easily linked taste with sickness, but not a light or sound with sickness. This shows
        <strong>biological preparedness</strong>: animals are born ready to learn some links that help survival more easily than others.
        It also showed that conditioning can happen after one pairing and with a long delay.</p>
        <h3>Counterconditioning</h3>
        <p><strong>Counterconditioning</strong> replaces an unwanted conditioned response with a new, wanted response. Example:
        a child afraid of dogs gets a favorite treat while a calm dog is slowly brought closer. Over time, the dog is linked with
        a pleasant feeling instead of fear. Therapists use this idea in exposure therapies.</p>
        <div class="tip">Taste aversion is an important exception: one pairing can be enough, and the UCS can come hours after the CS.</div>
      `
    },
    {
      id: "ps12-l3",
      title: "Operant conditioning: reinforcement and punishment",
      barrons: "Chapter 12, Learning: Operant Conditioning (page 125)",
      html: `
        <p><strong>Operant conditioning</strong> is learning in which behavior becomes more or less likely because of its
        <strong>consequences</strong> (what happens after the behavior).</p>
        <p>Edward <strong>Thorndike</strong> put cats in puzzle boxes. Over time, they escaped faster. His <strong>law of effect</strong>
        says that behaviors followed by good results become more likely, and behaviors followed by bad results become less likely.</p>
        <p>B. F. <strong>Skinner</strong> built on this. He used an <strong>operant chamber</strong> (a "Skinner box"), a box with a
        bar or key that an animal presses to get food, while the responses are recorded.</p>
        <h3>The four consequences</h3>
        <p><strong>Reinforcement</strong> always <strong>increases</strong> a behavior. <strong>Punishment</strong> always
        <strong>decreases</strong> a behavior. <strong>Positive</strong> means something is <strong>added</strong>.
        <strong>Negative</strong> means something is <strong>taken away</strong>.</p>
        <table>
          <tr><th></th><th>Add something (positive)</th><th>Take something away (negative)</th></tr>
          <tr><th>Increase behavior (reinforcement)</th><td><strong>Positive reinforcement:</strong> add something pleasant. Example: Emma gets praise for cleaning her room, so she cleans more.</td><td><strong>Negative reinforcement:</strong> remove something unpleasant. Example: Jamal fastens his seatbelt to stop the annoying beeping, so he fastens it faster next time.</td></tr>
          <tr><th>Decrease behavior (punishment)</th><td><strong>Positive punishment:</strong> add something unpleasant. Example: a student gets extra chores for lying.</td><td><strong>Negative punishment:</strong> remove something pleasant. Example: a teen loses phone time for coming home late.</td></tr>
        </table>
        <p>Punishment can stop a behavior quickly, but it can also cause fear and aggression, and it does not teach the right behavior.
        Reinforcing the wanted behavior usually works better.</p>
        <h3>Types of reinforcers</h3>
        <ul>
          <li><strong>Primary reinforcer:</strong> naturally satisfying, meets a biological need. Examples: food, water, warmth.</li>
          <li><strong>Secondary (conditioned) reinforcer:</strong> gains its power by being linked with primary reinforcers. Examples: money, good grades, stickers.</li>
        </ul>
        <h3>Shaping</h3>
        <p><strong>Shaping</strong> teaches a complex behavior by reinforcing <strong>successive approximations</strong>: small
        steps that come closer and closer to the goal. Example: to teach a dog to roll over, a trainer first rewards lying down,
        then lying on its side, then rolling halfway, and finally a full roll.</p>
        <div class="tip">"Negative reinforcement" is not punishment. It still increases behavior, by removing something bad.
        Ask two questions: Is the behavior going up or down? Is something added or taken away?</div>
      `
    },
    {
      id: "ps12-l4",
      title: "Schedules of reinforcement and limits of conditioning",
      barrons: "Chapter 12, Learning: Operant Conditioning (page 125)",
      html: `
        <p>A <strong>schedule of reinforcement</strong> is the rule for when a behavior is reinforced.</p>
        <ul>
          <li><strong>Continuous reinforcement:</strong> reinforce every correct response. Learning is fastest, but extinction is also fast when rewards stop.</li>
          <li><strong>Partial (intermittent) reinforcement:</strong> reinforce only some responses. Learning is slower, but the behavior lasts much longer.
          This is the <strong>partial-reinforcement extinction effect</strong>.</li>
        </ul>
        <table>
          <tr><th>Schedule</th><th>Rule</th><th>Example</th></tr>
          <tr><td><strong>Fixed-ratio</strong></td><td>reward after a set <em>number</em> of responses</td><td>a coffee shop gives a free drink after every 10 drinks bought</td></tr>
          <tr><td><strong>Variable-ratio</strong></td><td>reward after an unpredictable number of responses</td><td>slot machines; a fisher catches a fish after a random number of casts</td></tr>
          <tr><td><strong>Fixed-interval</strong></td><td>reward for the first response after a set <em>time</em></td><td>checking the mailbox more often as the usual delivery time gets close</td></tr>
          <tr><td><strong>Variable-interval</strong></td><td>reward for the first response after an unpredictable time</td><td>checking for new messages from a friend who writes at random times; pop quizzes</td></tr>
        </table>
        <p>Ratio schedules give higher response rates than interval schedules, because more responses bring more rewards.
        <strong>Variable-ratio</strong> gives the highest rate and is the hardest to extinguish. Fixed-interval often gives a
        "scallop" pattern: few responses just after a reward, and many just before the next one is due.</p>
        <h3>Biological limits</h3>
        <p><strong>Instinctive drift</strong> is the tendency of an animal to go back to its natural, instinctive behavior, even
        after training. Example: raccoons trained to drop coins into a box began rubbing the coins together, as they do with food,
        instead of dropping them.</p>
        <h3>Learned helplessness</h3>
        <p>Martin <strong>Seligman</strong> found that dogs who could not escape shocks later stopped trying to escape, even when
        escape became possible. <strong>Learned helplessness</strong> is giving up and becoming passive after repeated
        uncontrollable bad events. Example: after failing many math tests no matter how hard she studied, Ana stops studying
        even when she gets a good tutor. It is linked to depression.</p>
        <div class="tip">Ratio = number of responses. Interval = time. Fixed = predictable. Variable = unpredictable.</div>
      `
    },
    {
      id: "ps12-l5",
      title: "Cognitive and observational learning",
      barrons: "Chapter 12, Learning: Cognitive Learning (page 129)",
      html: `
        <h3>Cognitive learning</h3>
        <p><strong>Cognitive learning</strong> is learning that involves thinking and mental processes, not only links between
        stimuli and responses.</p>
        <ul>
          <li><strong>Latent learning:</strong> learning that happens without reward but is not shown until there is a reason to
          show it. Edward <strong>Tolman</strong> let rats explore a maze with no food. When food was later added, these rats
          quickly found the fastest route. They had formed a <strong>cognitive map</strong>, a mental picture of the layout.
          Example: you ride the bus to school every day as a passenger; when you first ride your bike, you already know the way.</li>
          <li><strong>Insight learning:</strong> a sudden understanding of how to solve a problem, the "aha!" moment.
          Wolfgang <strong>Köhler</strong> saw chimpanzees suddenly stack boxes or join sticks to reach bananas, after a period of no progress.</li>
        </ul>
        <h3>Observational learning</h3>
        <p><strong>Observational learning</strong> (social learning) is learning by watching others. Albert <strong>Bandura</strong>
        led the famous <strong>Bobo doll</strong> experiment. Children who watched an adult hit and kick an inflatable doll were
        much more likely to hit the doll themselves than children who did not see this.</p>
        <ul>
          <li><strong>Modeling:</strong> watching and copying a specific behavior of another person (the model). Example: a younger sister copies how her sister holds a violin.</li>
          <li><strong>Vicarious reinforcement:</strong> we are more likely to copy a behavior when we see the model being rewarded.
          <strong>Vicarious punishment</strong>: we are less likely to copy it when we see the model punished. Example: Tariq sees a classmate get praise for asking a question, so he asks questions too.</li>
          <li><strong>Prosocial behavior</strong> (helpful behavior) and <strong>antisocial behavior</strong> (harmful behavior) can both be learned this way.</li>
        </ul>
        <p><strong>Mirror neurons</strong> are neurons in the frontal lobe that may fire both when we do an action and when we watch
        someone else do it. Some researchers think they help explain imitation and empathy, but their exact role is still being studied.</p>
        <h3>Classical and operant conditioning compared</h3>
        <table>
          <tr><th></th><th>Classical conditioning</th><th>Operant conditioning</th></tr>
          <tr><td>What is learned</td><td>a link between two <strong>stimuli</strong></td><td>a link between a <strong>behavior</strong> and its <strong>consequence</strong></td></tr>
          <tr><td>Type of behavior</td><td>automatic, involuntary responses (drooling, fear)</td><td>voluntary actions (studying, pressing a bar)</td></tr>
          <tr><td>Order of events</td><td>the stimulus comes <em>before</em> the response</td><td>the consequence comes <em>after</em> the behavior</td></tr>
          <tr><td>Key researchers</td><td>Pavlov, Watson, Garcia</td><td>Thorndike, Skinner</td></tr>
        </table>
        <div class="tip">Classical: the learner is passive, and things happen <em>to</em> them. Operant: the learner acts, and the
        action <em>brings</em> a result.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps12-ex1",
      title: "Classical conditioning parts",
      type: "mc",
      instructions: `<p>Every time Elena's cat hears the can opener, food comes right after. Now the cat runs to the kitchen and
      meows as soon as it hears the can opener. In this example, what is the sound of the can opener?</p>`,
      choices: [
        "The unconditioned stimulus",
        "The conditioned stimulus",
        "The unconditioned response",
        "The conditioned response"
      ],
      answer: 1,
      explain: "The sound was neutral at first. After being paired with food (the UCS), it now causes a learned response, so it is the conditioned stimulus.",
      hints: [
        "Did the can opener sound make the cat run to the kitchen before any learning?",
        "A stimulus that gains its power through learning is called..."
      ]
    },
    {
      id: "ps12-ex2",
      title: "Extinction and spontaneous recovery",
      type: "mc",
      instructions: `<p>Ji-woo used to feel nervous at the sound of the school bell, because it meant a hard test. During the
      summer she worked at a school where the bell rang all day with no tests, and the nervous feeling went away. Then she had
      two weeks of vacation and heard no bells at all. On the first day of the new school year, she suddenly feels a little nervous at the bell again. What is this?</p>`,
      choices: [
        "Acquisition",
        "Generalization",
        "Spontaneous recovery",
        "Higher-order conditioning"
      ],
      answer: 2,
      explain: "The response was extinguished during the summer. After a rest, a weaker conditioned response came back on its own: spontaneous recovery.",
      hints: [
        "The nervous feeling had disappeared, and then it came back.",
        "This comes after extinction and a pause."
      ]
    },
    {
      id: "ps12-ex3",
      title: "Taste aversion",
      type: "mc",
      instructions: `<p>Omar ate a new kind of curry at a party. Many hours later, he got a stomach virus and threw up. Now he
      feels sick when he smells that curry, even though he knows the curry did not make him ill. Which concept best explains this?</p>`,
      choices: [
        "Conditioned taste aversion",
        "Learned helplessness",
        "Instinctive drift",
        "Latent learning"
      ],
      answer: 0,
      explain: "Garcia showed that people and animals can link a taste with sickness after just one pairing, even with a long delay. This is a conditioned taste aversion.",
      hints: [
        "A taste was paired with sickness only once, with hours in between.",
        "John Garcia studied this with rats."
      ]
    },
    {
      id: "ps12-ex4",
      title: "Negative reinforcement",
      type: "mc",
      instructions: `<p>Valentina has a headache. She takes a pain reliever, and the headache goes away. Next time she has a
      headache, she takes the pain reliever sooner. Which concept best explains the increase in her behavior?</p>`,
      choices: [
        "Positive reinforcement",
        "Positive punishment",
        "Negative punishment",
        "Negative reinforcement"
      ],
      answer: 3,
      explain: "Her behavior increased because something unpleasant (the headache) was taken away. That is negative reinforcement, not punishment.",
      hints: [
        "Is the behavior increasing or decreasing? Is something added or taken away?",
        "The behavior increases, and something unpleasant is removed."
      ]
    },
    {
      id: "ps12-ex5",
      title: "Negative punishment",
      type: "mc",
      instructions: `<p>Every time 6-year-old Ethan hits his brother, his parents take away 10 minutes of his video game time.
      Ethan hits his brother less often. What is this?</p>`,
      choices: [
        "Negative reinforcement",
        "Negative punishment",
        "Positive punishment",
        "Extinction"
      ],
      answer: 1,
      explain: "Something pleasant (game time) is taken away, and the behavior decreases. That is negative punishment.",
      hints: [
        "The hitting decreases, so it is a kind of punishment.",
        "Was something added, or was something taken away?"
      ]
    },
    {
      id: "ps12-ex6",
      title: "Schedules of reinforcement",
      type: "mc",
      instructions: `<p>Kai plays a phone game that gives a prize box after a random number of games. Sometimes it is after 2
      games, sometimes after 15. Kai plays very often and finds it hard to stop. Which schedule is the game using?</p>`,
      choices: [
        "Fixed-ratio",
        "Fixed-interval",
        "Variable-ratio",
        "Variable-interval"
      ],
      answer: 2,
      explain: "The reward depends on an unpredictable number of responses (games played): variable-ratio. This schedule gives high rates and is very resistant to extinction.",
      hints: [
        "The prize depends on the number of games, not on time.",
        "The number changes and is unpredictable."
      ]
    },
    {
      id: "ps12-ex7",
      title: "Shaping",
      type: "mc",
      instructions: `<p>A speech therapist helps a child say "spaghetti." First she praises the child for "spa," then for
      "spa-get," and finally only for the full word. Which concept best describes this method?</p>`,
      choices: [
        "Shaping",
        "Higher-order conditioning",
        "Counterconditioning",
        "Insight learning"
      ],
      answer: 0,
      explain: "Shaping reinforces small steps that come closer and closer to the goal behavior. These steps are successive approximations.",
      hints: [
        "The therapist rewards steps that get closer to the goal.",
        "Skinner used this method to teach animals complex behaviors."
      ]
    },
    {
      id: "ps12-ex8",
      title: "Cognitive and observational learning",
      type: "mc",
      instructions: `<p>Fatima watches her older cousin get money and praise from relatives for helping clean up after a family
      dinner. At the next dinner, Fatima starts cleaning up too, without being asked. Which concept best explains this?</p>`,
      choices: [
        "Latent learning",
        "Vicarious reinforcement",
        "Instinctive drift",
        "Biological preparedness"
      ],
      answer: 1,
      explain: "Fatima saw her cousin, the model, being rewarded, so she copied the behavior. This is vicarious reinforcement, part of Bandura's observational learning.",
      hints: [
        "Fatima was not rewarded herself before she acted.",
        "She saw someone else get rewarded."
      ]
    },
    {
      id: "ps12-ex9",
      title: "Science practice: Bandura's study",
      type: "mc",
      instructions: `<p>In a study like Bandura's, one group of children watches an adult hit a Bobo doll. A second group watches
      an adult play quietly. Then each child plays alone in a room with the doll, and researchers count the number of hits.
      What is the dependent variable?</p>`,
      choices: [
        "The kind of adult behavior the children watched",
        "The age of the children",
        "The number of times each child hits the doll",
        "The Bobo doll itself"
      ],
      answer: 2,
      explain: "The dependent variable is what researchers measure: the number of hits. The kind of model the children watched is the independent variable.",
      hints: [
        "The dependent variable is the result that is measured.",
        "What did the researchers count?"
      ]
    },
    {
      id: "ps12-ex10",
      title: "Science practice: Tolman's rats",
      type: "mc",
      instructions: `<p>Group A rats got food at the end of a maze every day. Group B rats explored the maze with no food for 10
      days. On day 11, Group B started to get food, and on day 12 they ran the maze as fast as Group A. What is the best conclusion?</p>`,
      choices: [
        "Learning only happens when a behavior is reinforced right away.",
        "Group B learned the maze through classical conditioning.",
        "Group B showed learned helplessness until food appeared.",
        "Group B learned without reward and showed it later (latent learning)."
      ],
      answer: 3,
      explain: "Group B improved very quickly once food was added, which shows they had already learned a cognitive map. This is Tolman's latent learning, and it shows learning can happen without reinforcement.",
      hints: [
        "Group B got fast in only one day after food was added.",
        "Tolman said the rats had a mental map of the maze all along."
      ]
    }
  ]
});
