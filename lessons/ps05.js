// AP Psychology, chapter 5 — Unit 1: Sleep and consciousness. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps05", {
  intro: `
    <p>Every night you spend hours in a very different state of mind: sleep. In this chapter you learn what
    consciousness is, how your body clock decides when you feel tired, what happens in your brain during the
    stages of sleep, what goes wrong in sleep disorders, and why we may dream.</p>
    <p>On the AP exam, sleep questions often describe a person and ask which stage, brain wave, disorder, or
    theory fits. If you know the order of the sleep stages and the main dream theories, you can answer these
    questions quickly.</p>
  `,
  lessons: [
    {
      id: "ps05-l1",
      title: "Consciousness, dual processing, and attention",
      html: `
        <p><strong>Consciousness</strong> is our awareness of ourselves and of the world around us. Right now you are
        conscious of these words. Sleep, dreaming, and deep focus are different <strong>states of consciousness</strong>.
        Sleep is <em>not</em> the same as being unconscious: the brain stays very active.</p>
        <h3>Dual processing</h3>
        <p><strong>Dual processing</strong> is the idea that the mind works on two tracks at the same time:</p>
        <table>
          <tr><th>Track</th><th>What it is like</th><th>Example</th></tr>
          <tr><td><strong>Conscious</strong> (controlled) processing</td><td>slow, step by step, needs effort, we know we are doing it</td><td>solving a new math problem</td></tr>
          <tr><td><strong>Unconscious</strong> (automatic) processing</td><td>fast, happens without effort, we do not notice it</td><td>reading a word on a sign before you can stop yourself</td></tr>
        </table>
        <p>For example, an experienced driver can drive home "on autopilot" (automatic track) while planning dinner (conscious track).</p>
        <h3>Selective attention</h3>
        <p><strong>Selective attention</strong> means focusing our conscious awareness on only a small part of all the
        information around us. Your senses take in a huge amount of information, but you can only pay attention to a little of it.
        For example, while you read, you probably did not notice the feeling of your shoes on your feet, until now.</p>
        <div class="tip">Because attention is limited, doing two hard tasks at once (like texting while driving) makes
        people slower and causes more mistakes.</div>
      `
    },
    {
      id: "ps05-l2",
      title: "Circadian rhythm and the body clock",
      html: `
        <p>A <strong>circadian rhythm</strong> is the body's natural cycle of about 24 hours. It controls when we feel
        awake or sleepy, and it also changes body temperature and hormones during the day. For example, many teenagers feel
        wide awake late at night and very tired early in the morning.</p>
        <h3>How the body clock works</h3>
        <ul>
          <li>The <strong>suprachiasmatic nucleus (SCN)</strong> is a small group of neurons in the <strong>hypothalamus</strong>.
          It is the body's main clock.</li>
          <li>Light enters the eye. The retina sends a signal to the SCN.</li>
          <li>When it is light, the SCN tells the <strong>pineal gland</strong> to make <em>less</em> <strong>melatonin</strong>,
          a hormone that makes us sleepy.</li>
          <li>When it gets dark, the pineal gland makes <em>more</em> melatonin, so we feel sleepy.</li>
        </ul>
        <p>Bright screens at night act a little like daylight. They can delay melatonin and make it harder to fall asleep.</p>
        <h3>When the clock does not match the day</h3>
        <ul>
          <li><strong>Jet lag</strong>: after flying across several time zones, your body clock still follows the old time.
          You feel sleepy at noon and awake at midnight until the clock adjusts (often about one day per time zone).</li>
          <li><strong>Shift work</strong>: people who work at night, such as nurses or factory workers, must sleep in daylight.
          Their circadian rhythm is disrupted, and they often sleep less and feel tired.</li>
        </ul>
        <div class="tip">Remember the chain: <strong>light → retina → SCN (in the hypothalamus) → pineal gland → less melatonin</strong>.</div>
      `
    },
    {
      id: "ps05-l3",
      title: "The stages of sleep",
      html: `
        <p>Scientists study sleep with an <strong>EEG (electroencephalogram)</strong>, a machine that records the electrical
        activity of the brain through small sensors on the head. The EEG shows different <strong>brain waves</strong>.</p>
        <ul>
          <li><strong>Beta waves</strong>: fast, small waves when you are awake and alert.</li>
          <li><strong>Alpha waves</strong>: slower waves when you are awake but relaxed and drowsy, for example lying in bed with your eyes closed.</li>
        </ul>
        <p>Sleep has two main kinds: <strong>NREM (non-rapid eye movement) sleep</strong>, with three stages, and
        <strong>REM (rapid eye movement) sleep</strong>.</p>
        <table>
          <tr><th>Stage</th><th>What happens</th></tr>
          <tr><td><strong>NREM-1</strong> (N1)</td><td>very light sleep, a few minutes long. Breathing slows. People may have <strong>hypnagogic sensations</strong>, such as the feeling of falling, and the body may jerk.</td></tr>
          <tr><td><strong>NREM-2</strong> (N2)</td><td>deeper, relaxed sleep. The EEG shows <strong>sleep spindles</strong>: short bursts of fast brain waves. We spend the most total time in this stage.</td></tr>
          <tr><td><strong>NREM-3</strong> (N3)</td><td>deep sleep with large, slow <strong>delta waves</strong> (also called slow-wave sleep). It is very hard to wake a person up. Growth hormone is released here.</td></tr>
          <tr><td><strong>REM</strong></td><td>the eyes move quickly, the brain is very active (almost like being awake), and most vivid dreams happen. The large muscles are relaxed and almost paralyzed, so we do not act out dreams.</td></tr>
        </table>
        <p>REM sleep is also called <strong>paradoxical sleep</strong> (paradoxical means "it seems to contradict itself"):
        the brain is active, but the body is still.</p>
        <h3>The sleep cycle</h3>
        <p>One <strong>sleep cycle</strong> takes about <strong>90 minutes</strong>. A typical order is N1 → N2 → N3 → N2 → REM.
        We repeat the cycle 4 to 6 times each night. Early in the night we have more N3 (deep sleep). Toward morning,
        N3 becomes shorter and REM periods become longer.</p>
        <p><strong>REM rebound</strong> is the tendency to have more REM sleep than usual after a person was kept from REM sleep.
        For example, after several nights of poor sleep, Amara has very long, vivid dreams on the weekend.</p>
        <div class="tip">Brain waves from awake to deep sleep: <strong>beta → alpha → (N1) → spindles in N2 → delta in N3</strong>.
        Waves get slower and larger as sleep gets deeper.</div>
      `
    },
    {
      id: "ps05-l4",
      title: "Why we sleep, and sleep deprivation",
      html: `
        <p>Scientists have several ideas about why we sleep. They probably are all partly true.</p>
        <table>
          <tr><th>Theory</th><th>Main idea</th></tr>
          <tr><td><strong>Restoration</strong></td><td>sleep helps the body and brain repair tissue and clear out waste made during the day</td></tr>
          <tr><td><strong>Memory consolidation</strong></td><td>sleep helps store and strengthen memories of the day (consolidation means making memories stable)</td></tr>
          <tr><td><strong>Protection</strong> (evolutionary)</td><td>our ancestors were safer when they stayed still and hidden at night, when hunting was dangerous</td></tr>
          <tr><td><strong>Growth</strong></td><td>the pituitary gland releases growth hormone during deep sleep, which is important for children and teenagers</td></tr>
        </table>
        <h3>Sleep deprivation</h3>
        <p><strong>Sleep deprivation</strong> means not getting enough sleep. Teenagers need about 8 to 10 hours, but many get much less.
        Effects include:</p>
        <ul>
          <li>trouble paying attention, learning, and remembering,</li>
          <li>more irritability (getting angry easily) and a higher risk of depression,</li>
          <li>a weaker <strong>immune system</strong> (the body's defense against illness),</li>
          <li>weight gain, because sleep loss changes the hormones that control hunger,</li>
          <li>slower reaction time and more accidents, for example drowsy driving.</li>
        </ul>
        <div class="tip">"Sleep on it" is good study advice: sleeping after studying helps memory consolidation, so pulling an
        all-nighter before a test often hurts more than it helps.</div>
      `
    },
    {
      id: "ps05-l5",
      title: "Sleep disorders",
      html: `
        <table>
          <tr><th>Disorder</th><th>What happens</th><th>Example</th></tr>
          <tr><td><strong>Insomnia</strong></td><td>ongoing trouble falling asleep or staying asleep. It is the most common sleep disorder.</td><td>Diego lies awake for two hours most nights for months.</td></tr>
          <tr><td><strong>Narcolepsy</strong></td><td>sudden attacks of strong sleepiness during the day. The person may fall directly into REM sleep, sometimes with sudden muscle weakness.</td><td>Hana falls asleep in the middle of a conversation.</td></tr>
          <tr><td><strong>Sleep apnea</strong></td><td>breathing stops again and again during sleep. The person wakes briefly to breathe, often without remembering it, and feels tired all day. Loud snoring is common. A breathing machine (CPAP, continuous positive airway pressure) can help.</td><td>Mr. Okafor snores loudly, stops breathing, gasps, and is always tired.</td></tr>
          <tr><td><strong>REM sleep behavior disorder</strong></td><td>the muscles do <em>not</em> stay relaxed during REM, so the person acts out dreams by kicking, punching, or shouting.</td><td>A man dreams of playing soccer and kicks his wife in bed.</td></tr>
          <tr><td><strong>Somnambulism</strong> (sleepwalking)</td><td>walking or doing other actions while asleep. It happens in <strong>NREM-3</strong>, not REM, and is more common in children.</td><td>Leila walks to the kitchen at night and does not remember it.</td></tr>
        </table>
        <p><strong>Night terrors</strong> also happen in NREM-3, mostly in children: the child sits up and screams in fear but
        usually does not remember it in the morning. They are different from nightmares, which happen in REM sleep.</p>
        <div class="tip">Common exam trap: sleepwalking and night terrors happen in <strong>deep NREM-3</strong>, while acting out
        dreams (REM sleep behavior disorder) and nightmares happen in <strong>REM</strong>.</div>
      `
    },
    {
      id: "ps05-l6",
      title: "Why do we dream?",
      html: `
        <p>A <strong>dream</strong> is a series of images, feelings, and stories that the mind creates during sleep, most often in REM.
        Psychologists have several theories about why we dream.</p>
        <table>
          <tr><th>Theory</th><th>Main idea</th></tr>
          <tr><td><strong>Freud's wish-fulfillment</strong> theory</td><td><strong>Sigmund Freud</strong> said dreams show hidden wishes. The <strong>manifest content</strong> is the story you remember. The <strong>latent content</strong> is the hidden meaning under it. Most scientists today think there is little evidence for this theory.</td></tr>
          <tr><td><strong>Activation-synthesis</strong> theory</td><td>during REM, the brainstem sends out random neural activity. The cortex tries to make a story out of these random signals. (Hobson and McCarley)</td></tr>
          <tr><td><strong>Information-processing</strong> (memory consolidation) theory</td><td>dreams help us sort the events of the day and store important memories. People often dream about their worries and what they learned.</td></tr>
          <tr><td><strong>Neural development</strong> theory</td><td>REM sleep and dreams give the brain regular stimulation that helps build and keep neural pathways. This may explain why babies spend so much time in REM.</td></tr>
        </table>
        <p>Example: Wei dreams about running late for an exam he really has next week. Freud might say the latent content is
        a fear of failing. The information-processing theory would say Wei's brain is working through his worries about the exam.</p>
        <div class="tip">Key words: "hidden meaning" → Freud; "random brain signals" → activation-synthesis;
        "sorting the day's memories" → information processing; "babies, building pathways" → neural development.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps05-ex1",
      title: "The body clock",
      type: "mc",
      instructions: `<p>Rania flies from Cairo to Los Angeles, 10 time zones away. For several days she feels very sleepy in the
      afternoon and wide awake at 3 a.m. Which brain structure is most directly involved in this problem?</p>`,
      choices: [
        "The amygdala",
        "The suprachiasmatic nucleus",
        "The reticular activating system",
        "The somatosensory cortex"
      ],
      answer: 1,
      explain: "Rania has jet lag. The suprachiasmatic nucleus in the hypothalamus is the body's main clock, and it still follows Cairo time.",
      hints: [
        "This is a problem with the circadian rhythm.",
        "Which structure in the hypothalamus acts as the body's main clock?"
      ]
    },
    {
      id: "ps05-ex2",
      title: "Brain waves",
      type: "mc",
      instructions: `<p>A sleep researcher sees large, slow brain waves on the EEG of a sleeping volunteer. The volunteer is very
      hard to wake up. Which stage of sleep is the volunteer most likely in?</p>`,
      choices: [
        "NREM-1",
        "NREM-2",
        "REM sleep",
        "NREM-3"
      ],
      answer: 3,
      explain: "Large, slow delta waves and being very hard to wake up are signs of NREM-3, deep slow-wave sleep. REM has fast, active brain waves.",
      hints: [
        "Slower and larger waves mean deeper sleep.",
        "Which stage has delta waves?"
      ]
    },
    {
      id: "ps05-ex3",
      title: "After a hard week",
      type: "mc",
      instructions: `<p>During exam week, Tomás sleeps only 4 hours a night. On Saturday he sleeps 11 hours. A sleep lab shows that
      he spends much more time than usual in REM sleep. What explains this?</p>`,
      choices: [
        "REM rebound",
        "Sleep spindles",
        "Narcolepsy",
        "Hypnagogic sensations"
      ],
      answer: 0,
      explain: "After a person loses REM sleep, the body makes up for it with extra REM later. This is REM rebound.",
      hints: [
        "Tomás lost a lot of sleep, and his body is making up for one kind of sleep.",
        "The word means \"bouncing back\" to more REM."
      ]
    },
    {
      id: "ps05-ex4",
      title: "Acting out a dream",
      type: "mc",
      instructions: `<p>Mr. Haddad, 64, dreams that he is fighting a lion. In real life he punches and kicks in his bed and
      wakes his wife. Which sleep disorder best fits?</p>`,
      choices: [
        "Somnambulism (sleepwalking)",
        "Obstructive sleep apnea",
        "REM sleep behavior disorder",
        "Narcolepsy with cataplexy"
      ],
      answer: 2,
      explain: "Normally the muscles are almost paralyzed in REM. In REM sleep behavior disorder they are not, so people act out their dreams. Sleepwalking happens in NREM-3 and is not acting out a dream.",
      hints: [
        "He is acting out a dream. In which stage do most vivid dreams happen?",
        "Look for the disorder where the body is not still during REM."
      ]
    },
    {
      id: "ps05-ex5",
      title: "Tired all day",
      type: "mc",
      instructions: `<p>Sung-min snores very loudly. His roommate notices that he stops breathing for a few seconds, then gasps,
      many times each night. Sung-min does not remember waking up, but he feels exhausted every day. Which disorder is most likely?</p>`,
      choices: [
        "Narcolepsy",
        "Night terrors",
        "Insomnia",
        "Sleep apnea"
      ],
      answer: 3,
      explain: "In sleep apnea, breathing stops again and again during sleep. The short wake-ups break up deep sleep, so the person is tired all day.",
      hints: [
        "Focus on the breathing.",
        "Which disorder's name comes from a word meaning \"without breath\"?"
      ]
    },
    {
      id: "ps05-ex6",
      title: "Random signals",
      type: "mc",
      instructions: `<p>Dr. Mensah says: "Dreams have no hidden message. During REM sleep the brainstem fires random signals, and the
      cortex tries to build a story from them." Which theory is Dr. Mensah describing?</p>`,
      choices: [
        "Freud's wish-fulfillment theory",
        "Activation-synthesis theory",
        "Neural development theory",
        "The restoration theory of sleep"
      ],
      answer: 1,
      explain: "Activation-synthesis says random neural activation in REM is combined (synthesized) into a story by the cortex.",
      hints: [
        "First the brain is \"activated\" by random signals, then it puts them together.",
        "\"Putting together\" is another word for synthesis."
      ]
    },
    {
      id: "ps05-ex7",
      title: "Hidden meaning",
      type: "mc",
      instructions: `<p>Isabella dreams that her house is on fire. Her therapist, who follows Freud, says the fire is really about
      strong anger she feels toward her sister. In Freud's terms, the anger toward her sister is the dream's</p>`,
      choices: [
        "manifest content",
        "activation",
        "latent content",
        "circadian content"
      ],
      answer: 2,
      explain: "For Freud, the remembered story (the fire) is the manifest content, and the hidden meaning (anger) is the latent content.",
      hints: [
        "Freud split dreams into the story you remember and the hidden meaning.",
        "The fire is what she remembers. The anger is hidden."
      ]
    },
    {
      id: "ps05-ex8",
      title: "Two tracks",
      type: "mc",
      instructions: `<p>Priya is an experienced piano player. She plays a song she knows well without thinking about her fingers,
      while she thinks carefully about what to say in a speech later today. Which idea best explains this?</p>`,
      choices: [
        "Dual processing",
        "REM rebound",
        "Circadian rhythm",
        "Latent content"
      ],
      answer: 0,
      explain: "Dual processing means the mind works on an automatic track (playing the song) and a conscious track (planning the speech) at the same time.",
      hints: [
        "Two things happen at once: one automatic, one with effort.",
        "Which choice means the mind has two tracks?"
      ]
    },
    {
      id: "ps05-ex9",
      title: "Science practice: sleep and memory",
      type: "mc",
      instructions: `<p>A researcher teaches 60 students a list of words. Half the students are randomly assigned to sleep 8 hours
      that night. The other half stay awake all night in the lab. The next day, all students take a memory test. What is the
      <strong>independent variable</strong> in this study?</p>`,
      choices: [
        "The score on the memory test the next day",
        "The list of words",
        "The number of students",
        "Whether students slept or stayed awake"
      ],
      answer: 3,
      explain: "The independent variable is what the researcher changes between groups: sleep or no sleep. The memory test score is the dependent variable.",
      hints: [
        "The independent variable is the thing the researcher controls and changes.",
        "What is different between the two groups?"
      ]
    },
    {
      id: "ps05-ex10",
      title: "Science practice: reading a result",
      type: "mc",
      instructions: `<p>In a survey of 2,000 high school students, students who slept fewer hours on school nights reported more
      sad moods. Which conclusion is best supported?</p>`,
      choices: [
        "Lack of sleep causes depression in all teenagers.",
        "Sad moods cause teenagers to sleep less at night.",
        "Sleep and mood are related, but the survey cannot show cause.",
        "Sleep has no connection to mood in teenagers."
      ],
      answer: 2,
      explain: "A survey shows a correlation (a relationship), not cause and effect. Only an experiment with random assignment can show causation.",
      hints: [
        "Was this an experiment or a survey?",
        "Correlation does not prove causation."
      ]
    }
  ]
});
