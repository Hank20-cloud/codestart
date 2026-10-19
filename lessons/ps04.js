// AP Psychology, chapter 4 — Unit 1: The brain. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps04", {
  intro: `
    <p>The brain weighs only about 1.4 kilograms, but it controls everything you do, from breathing to solving math problems.
    In this chapter you learn the main parts of the brain and their jobs, how the two halves of the brain work together, how the brain
    can change, and how scientists study it.</p>
    <p>On the AP exam, many questions describe a person with an injury or a behavior and ask which brain part is involved. Others ask
    which tool a researcher should use. If you know what each part does, these questions become easy points.</p>
  `,
  lessons: [
    {
      id: "ps04-l1",
      title: "The brainstem and cerebellum",
      barrons: "Chapter 4, Biological Bases of Behavior: The Brain (page 27)",
      html: `
        <p>The oldest parts of the brain sit at the bottom, where the spinal cord enters the skull. They control basic life functions
        that happen without thinking.</p>
        <table>
          <tr><th>Part</th><th>Job</th><th>Example</th></tr>
          <tr><td><strong>Brainstem</strong></td><td>the oldest part; connects the spinal cord to the brain and controls automatic survival functions</td><td>you keep breathing while you sleep</td></tr>
          <tr><td><strong>Medulla</strong></td><td>the bottom of the brainstem; controls heartbeat and breathing</td><td>damage to the medulla can be fatal</td></tr>
          <tr><td><strong>Reticular activating system (RAS)</strong> (reticular formation)</td><td>a network of neurons through the brainstem; controls arousal, alertness, and attention</td><td>you wake up when someone says your name</td></tr>
          <tr><td><strong>Cerebellum</strong></td><td>"little brain" at the back; coordinates balance and smooth movement; with the basal ganglia, it helps us learn skills (procedural memory)</td><td>riding a bike without falling; alcohol affects it, so drunk people walk unsteadily</td></tr>
        </table>
        <div class="tip">Medulla = "must have it" for heartbeat and breathing. Cerebellum = balance and coordination (if it is damaged, a person moves like someone who is very drunk).</div>
      `
    },
    {
      id: "ps04-l2",
      title: "Thalamus, hypothalamus, and the limbic system",
      barrons: "Chapter 4, Biological Bases of Behavior: The Brain (page 27)",
      html: `
        <p>Above the brainstem are structures that relay senses and control emotions and drives.</p>
        <table>
          <tr><th>Part</th><th>Job</th><th>Example</th></tr>
          <tr><td><strong>Thalamus</strong></td><td>the sensory "switchboard": it receives information from all senses except smell and sends it to the right part of the cortex</td><td>sound from your ears goes through the thalamus to the hearing area</td></tr>
          <tr><td><strong>Hypothalamus</strong></td><td>controls hunger, thirst, body temperature, and sexual behavior; controls the pituitary gland, so it links the brain to the endocrine system</td><td>you feel thirsty after running on a hot day</td></tr>
          <tr><td><strong>Pituitary gland</strong></td><td>the "master gland," under the hypothalamus; releases hormones that control other glands</td><td>growth hormone during puberty</td></tr>
          <tr><td><strong>Amygdala</strong></td><td>two almond-shaped parts; involved in emotions, especially fear and aggression</td><td>your fear when a snake appears</td></tr>
          <tr><td><strong>Hippocampus</strong></td><td>helps form new explicit (conscious) memories of facts and events</td><td>remembering what you did last weekend</td></tr>
        </table>
        <p>The <strong>limbic system</strong> is a group of structures linked to emotions, memory, and drives. It includes the
        <strong>amygdala</strong>, the <strong>hippocampus</strong>, the <strong>hypothalamus</strong>, the <strong>thalamus</strong>, and the
        <strong>pituitary gland</strong> (this is the Myers textbook's list; some books use a shorter list).</p>
        <p>A famous patient, H.M., had his hippocampus removed to stop seizures. Afterward, he could not form new memories of facts and events,
        but he could still learn new motor skills.</p>
        <div class="tip">The hypothalamus controls basic drives: eating, drinking, body temperature, fighting or fleeing, and sexual behavior. The hippocampus is like a "campus" where new memories are made.</div>
      `
    },
    {
      id: "ps04-l3",
      title: "The cerebral cortex and its lobes",
      barrons: "Chapter 4, Biological Bases of Behavior: The Brain (page 27)",
      html: `
        <p>The <strong>cerebral cortex</strong> is the thin, wrinkled outer layer of the brain. It does the most complex thinking.
        It has four lobes (areas) in each hemisphere (half).</p>
        <table>
          <tr><th>Lobe</th><th>Place</th><th>Main jobs</th></tr>
          <tr><td><strong>Frontal lobe</strong></td><td>front, behind the forehead</td><td>planning, decisions, judgment, personality, and movement</td></tr>
          <tr><td><strong>Parietal lobe</strong></td><td>top, toward the back</td><td>touch and body position; spatial thinking</td></tr>
          <tr><td><strong>Occipital lobe</strong></td><td>back of the head</td><td>vision; contains the visual cortex</td></tr>
          <tr><td><strong>Temporal lobe</strong></td><td>sides, above the ears</td><td>hearing; contains the auditory cortex; language understanding</td></tr>
        </table>
        <h3>Important areas</h3>
        <ul>
          <li>The <strong>prefrontal cortex</strong> is the very front of the frontal lobe. It controls <strong>executive functions</strong>:
          planning, self-control, and judgment. It is one of the last brain areas to mature, in the mid-20s.</li>
          <li>The <strong>motor cortex</strong> is a strip at the back of the frontal lobe. It controls voluntary movement.</li>
          <li>The <strong>somatosensory cortex</strong> is a strip at the front of the parietal lobe, just behind the motor cortex.
          It receives touch, pain, and temperature from the body. Body parts that are very sensitive, like the lips and fingers,
          have larger areas.</li>
          <li><strong>Association areas</strong> are parts of the cortex that do not control movement or receive senses directly. They combine
          information for higher thinking, like remembering, speaking, and recognizing faces.</li>
        </ul>
        <p><strong>Contralateral control</strong>: each hemisphere controls the <em>opposite</em> side of the body. The left motor cortex moves
        the right hand.</p>
        <div class="tip">Motor = front (frontal lobe). Sensory = behind it (parietal lobe). Think: you "feel" behind you and "move" forward.</div>
      `
    },
    {
      id: "ps04-l4",
      title: "Language, the two hemispheres, and split brains",
      barrons: "Chapter 4, Biological Bases of Behavior: The Brain (page 27)",
      html: `
        <h3>Language areas</h3>
        <p>For most people, language is mainly in the left hemisphere.</p>
        <table>
          <tr><th>Area</th><th>Place</th><th>Damage causes</th></tr>
          <tr><td><strong>Broca's area</strong></td><td>left frontal lobe</td><td><strong>Broca's aphasia</strong>: a person understands speech but has great difficulty producing words. Speech is slow and broken.</td></tr>
          <tr><td><strong>Wernicke's area</strong></td><td>left temporal lobe</td><td><strong>Wernicke's aphasia</strong>: a person speaks fluently but the words make little sense, and has trouble understanding speech.</td></tr>
        </table>
        <p><strong>Aphasia</strong> means a problem with language caused by brain damage.</p>
        <h3>Hemispheric specialization</h3>
        <p><strong>Hemispheric specialization</strong> (lateralization) means each hemisphere is better at certain tasks.</p>
        <ul>
          <li><strong>Left hemisphere</strong>: language, speaking, reading, logic, details.</li>
          <li><strong>Right hemisphere</strong>: recognizing faces, spatial tasks, emotions in voices, the "big picture."</li>
        </ul>
        <p>But the hemispheres work together almost all the time. The idea of "left-brained" or "right-brained" people is a myth.</p>
        <h3>Split-brain research</h3>
        <p>The <strong>corpus callosum</strong> is a thick band of nerve fibers that connects the two hemispheres and lets them share information.
        To stop severe seizures, some patients had their corpus callosum cut. Roger Sperry and Michael Gazzaniga studied these
        <strong>split-brain</strong> patients.</p>
        <p>The left visual field (what you see on the left) goes to the right hemisphere, and the right visual field goes to the left hemisphere.
        If a split-brain patient sees a picture of a key only in the left visual field, the information goes to the right hemisphere.
        The patient cannot <em>say</em> "key" (speech is in the left hemisphere), but the left hand can pick up a key.</p>
        <div class="tip">Broca's = broken speech (production). Wernicke's = words are wrong (understanding).</div>
      `
    },
    {
      id: "ps04-l5",
      title: "Plasticity and tools for studying the brain",
      barrons: "Chapter 4, Biological Bases of Behavior: The Brain (page 27)",
      html: `
        <p><strong>Neuroplasticity</strong> (plasticity) is the brain's ability to change: to build new connections and, after damage, to let other
        areas take over some jobs. Plasticity is greatest in children. Example: a child who has a hemisphere removed because of seizures can often
        still learn to walk and speak.</p>
        <h3>Phineas Gage</h3>
        <p>In 1848, an iron rod went through the frontal lobe of a railroad worker named Phineas Gage. He survived, but his friends said his
        personality changed: he became impulsive and rude. This <strong>case study</strong> suggested that the frontal lobe is involved in personality
        and self-control.</p>
        <h3>Tools</h3>
        <table>
          <tr><th>Tool</th><th>What it shows</th><th>Structure or function?</th></tr>
          <tr><td><strong>Lesion</strong></td><td>studying people with brain damage, or (in animals) carefully destroying tissue, to see what changes</td><td>function of the damaged part</td></tr>
          <tr><td><strong>EEG (electroencephalogram)</strong></td><td>electrodes on the scalp record electrical activity (brain waves); very good timing; used in sleep research</td><td>function</td></tr>
          <tr><td><strong>CT (computed tomography) scan</strong></td><td>many X-ray pictures combined into slices of the brain</td><td>structure</td></tr>
          <tr><td><strong>MRI (magnetic resonance imaging)</strong></td><td>magnetic fields and radio waves make detailed pictures of soft tissue</td><td>structure</td></tr>
          <tr><td><strong>PET (positron emission tomography) scan</strong></td><td>a weak radioactive glucose (sugar) is injected; active areas use more glucose</td><td>function</td></tr>
          <tr><td><strong>fMRI (functional MRI)</strong></td><td>shows blood flow, and so brain activity, while a person does a task; also shows structure</td><td>function and structure</td></tr>
        </table>
        <div class="tip">If a question asks to see the brain <em>working</em> during a task, choose fMRI or PET. If it asks for a picture of a tumor or
        the size of a structure, choose MRI or CT. If it asks about sleep or fast timing, choose EEG.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps04-ex1",
      title: "Losing balance",
      type: "mc",
      instructions: `<p>After a bike accident, Tomás has trouble walking in a straight line and his movements are clumsy and shaky. His
      thinking and speech are normal. Which brain structure was most likely damaged?</p>`,
      choices: [
        "Hippocampus",
        "Cerebellum",
        "Thalamus",
        "Broca's area"
      ],
      answer: 1,
      explain: "The cerebellum coordinates balance and smooth movement. The hippocampus is for forming new memories.",
      hints: [
        "His problem is with balance and coordination.",
        "Which structure at the back of the brain is called the \"little brain\"?"
      ]
    },
    {
      id: "ps04-ex2",
      title: "Hungry and hot",
      type: "mc",
      instructions: `<p>In an animal study, researchers damage one small area of a rat's brain. Afterward, the rat cannot control its body
      temperature and its eating changes greatly. Which area was most likely damaged?</p>`,
      choices: [
        "Hypothalamus",
        "Occipital lobe",
        "Corpus callosum",
        "Medulla"
      ],
      answer: 0,
      explain: "The hypothalamus controls hunger, thirst, and body temperature. The medulla controls heartbeat and breathing.",
      hints: [
        "This structure controls basic drives and keeps the body in balance.",
        "Its name means \"below the thalamus.\""
      ]
    },
    {
      id: "ps04-ex3",
      title: "New memories",
      type: "mc",
      instructions: `<p>After surgery, Mrs. Nakamura remembers her childhood clearly, but she cannot remember the name of a nurse she met
      ten minutes ago. Which structure was most likely affected?</p>`,
      choices: [
        "Amygdala",
        "Reticular activating system",
        "Hippocampus",
        "Motor cortex"
      ],
      answer: 2,
      explain: "The hippocampus helps form new explicit memories. Old memories are stored in other parts of the cortex, so they remain.",
      hints: [
        "Her old memories are fine. Only new memories are a problem.",
        "Which limbic structure is important for forming new memories?"
      ]
    },
    {
      id: "ps04-ex4",
      title: "Vision loss",
      type: "mc",
      instructions: `<p>Kofi falls and hits the back of his head hard. His eyes are not injured, but he now has trouble seeing.
      Which lobe was most likely damaged?</p>`,
      choices: [
        "Frontal lobe",
        "Temporal lobe",
        "Parietal lobe",
        "Occipital lobe"
      ],
      answer: 3,
      explain: "The occipital lobe, at the back of the head, contains the visual cortex, which processes what we see.",
      hints: [
        "Notice where he hit his head.",
        "Which lobe is at the back of the head and handles vision?"
      ]
    },
    {
      id: "ps04-ex5",
      title: "Language problem",
      type: "mc",
      instructions: `<p>After a stroke, Mr. Rahman understands everything his family says. But when he tries to answer, he speaks very slowly
      and can only say a few words, like "Want... water... now." Which area was most likely damaged?</p>`,
      choices: [
        "Wernicke's area",
        "Broca's area",
        "Somatosensory cortex",
        "Cerebellum"
      ],
      answer: 1,
      explain: "Broca's area, in the left frontal lobe, is needed to produce speech. In Wernicke's aphasia, speech is fluent but makes little sense.",
      hints: [
        "His understanding is fine. His speaking is the problem.",
        "Which area helps produce speech?"
      ]
    },
    {
      id: "ps04-ex6",
      title: "Split-brain test",
      type: "mc",
      instructions: `<p>A split-brain patient looks at the center of a screen. The word "cup" flashes only in her left visual field. What will
      she most likely be able to do?</p>`,
      choices: [
        "Say the word \"cup\" out loud, but not pick up a cup",
        "Say the word and pick up a cup with either hand",
        "Pick up a cup with her left hand, but not say the word",
        "Nothing, because the information goes to neither hemisphere"
      ],
      answer: 2,
      explain: "The left visual field goes to the right hemisphere, which controls the left hand. Speech is mainly in the left hemisphere, and the cut corpus callosum stops the information from reaching it.",
      hints: [
        "The left visual field sends information to the right hemisphere.",
        "Which hand does the right hemisphere control, and where is speech?"
      ]
    },
    {
      id: "ps04-ex7",
      title: "Personality change",
      type: "mc",
      instructions: `<p>After a car accident, Ingrid, who was always calm and careful, becomes impulsive. She makes poor decisions and says rude
      things without thinking. Which area was most likely damaged?</p>`,
      choices: [
        "Prefrontal cortex",
        "Occipital lobe",
        "Medulla",
        "Thalamus"
      ],
      answer: 0,
      explain: "The prefrontal cortex controls planning, judgment, and self-control. Like Phineas Gage, damage there can change personality.",
      hints: [
        "Think of the case of Phineas Gage.",
        "Which area in the front of the brain controls judgment and self-control?"
      ]
    },
    {
      id: "ps04-ex8",
      title: "Recovering after injury",
      type: "mc",
      instructions: `<p>A 4-year-old girl has damage to the left hemisphere. At first she cannot speak, but over two years she learns to speak
      almost normally, because other brain areas take over. Which concept best explains this?</p>`,
      choices: [
        "Hemispheric specialization",
        "Contralateral control",
        "Aphasia",
        "Neuroplasticity"
      ],
      answer: 3,
      explain: "Neuroplasticity is the brain's ability to change and reorganize, so other areas can take over lost jobs. It is strongest in young children.",
      hints: [
        "Her brain changed to make up for the damage.",
        "Which word means the brain's ability to change and reorganize?"
      ]
    },
    {
      id: "ps04-ex9",
      title: "Choose the tool (Science Practice)",
      type: "mc",
      instructions: `<p>Dr. Mensah wants to see which brain areas become more active while people look at photos of their friends' faces. Which tool
      is the best choice?</p>`,
      choices: [
        "CT scan",
        "MRI",
        "fMRI",
        "Lesion study"
      ],
      answer: 2,
      explain: "fMRI shows brain activity through changes in blood flow while a person does a task. CT and MRI show structure only, not activity.",
      hints: [
        "She needs to see the brain working during a task, not only its shape.",
        "Which tool adds \"functional\" to a structural scan?"
      ]
    },
    {
      id: "ps04-ex10",
      title: "Touch sensitivity",
      type: "mc",
      instructions: `<p>A researcher gently touches different parts of a patient's body during surgery and records brain activity. The fingers and lips
      activate much larger brain areas than the back. Which part of the cortex is the researcher measuring?</p>`,
      choices: [
        "Primary motor cortex",
        "Somatosensory cortex",
        "Primary auditory cortex",
        "Visual cortex"
      ],
      answer: 1,
      explain: "The somatosensory cortex in the parietal lobe receives touch information. Sensitive body parts have larger areas. The motor cortex controls movement, not touch.",
      hints: [
        "The researcher is studying touch, not movement.",
        "This strip is in the parietal lobe, just behind the motor cortex."
      ]
    }
  ]
});
