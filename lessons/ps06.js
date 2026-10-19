// AP Psychology, chapter 6 — Unit 1: Sensation. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps06", {
  intro: `
    <p>Everything you know about the world comes in through your senses. This chapter explains how your eyes, ears,
    skin, tongue, nose, and body senses take in energy from the world and change it into signals your brain can use.</p>
    <p>Sensation is a big part of Unit 1 on the AP exam. Expect questions about thresholds, the parts of the eye and ear,
    theories of color vision and pitch, and which sense is involved in an everyday situation.</p>
  `,
  lessons: [
    {
      id: "ps06-l1",
      title: "Sensation, perception, and thresholds",
      barrons: "Chapter 6, Sensation: Overview (page 49), and Chapter 7, Perception: Thresholds (page 61)",
      html: `
        <p><strong>Sensation</strong> is the process by which our sense organs detect energy from the environment (light, sound,
        pressure, chemicals). <strong>Perception</strong> is the process by which the brain organizes and interprets that information.
        For example, your ears detect sound waves (sensation); your brain recognizes that it is your friend's voice (perception).</p>
        <p><strong>Transduction</strong> is changing one form of energy into another. In the senses, it means changing outside energy
        into <strong>neural impulses</strong> (electrical signals in neurons). For example, the retina changes light into neural signals.</p>
        <h3>Thresholds</h3>
        <table>
          <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Absolute threshold</strong></td><td>the smallest amount of a stimulus a person can detect <strong>50% of the time</strong></td><td>the quietest sound you can hear half the time in a hearing test</td></tr>
          <tr><td><strong>Difference threshold</strong> (just-noticeable difference, JND)</td><td>the smallest <em>change</em> in a stimulus a person can notice 50% of the time</td><td>how much sugar you must add before tea tastes sweeter</td></tr>
          <tr><td><strong>Weber's law</strong></td><td>the difference threshold is a constant <strong>percentage</strong> of the original stimulus, not a fixed amount</td><td>adding 1 kg to a 2 kg bag is easy to notice; adding 1 kg to a 50 kg bag is not</td></tr>
        </table>
        <h3>Signal detection theory</h3>
        <p><strong>Signal detection theory</strong> says that whether we detect a weak stimulus depends not only on its strength, but also
        on our experience, expectations, motivation, and tiredness. For example, a new parent may wake up at a tiny sound from the baby
        but sleep through loud traffic. There are four results: a <strong>hit</strong> (signal there, detected), a <strong>miss</strong>,
        a <strong>false alarm</strong> (no signal, but you say yes), and a <strong>correct rejection</strong>.</p>
        <h3>Adaptation and habituation</h3>
        <p><strong>Sensory adaptation</strong> is a decrease in sensitivity to a stimulus that does not change. The sense receptors
        themselves fire less. For example, after a few minutes you no longer feel your watch on your wrist.</p>
        <p><strong>Habituation</strong> is a decrease in <em>response</em> (attention) to a stimulus after it is repeated many times.
        For example, you stop noticing the ticking clock in your classroom, but you can still hear it if you listen.</p>
        <div class="tip">Adaptation happens in the sense receptors (you cannot feel it anymore). Habituation happens in your attention
        (you can still sense it, but you stop reacting).</div>
      `
    },
    {
      id: "ps06-l2",
      title: "Vision: light and the eye",
      barrons: "Chapter 6, Sensation: Energy Senses (page 50)",
      html: `
        <p>The eye senses <strong>light</strong>, a form of electromagnetic energy. Two features of light matter:</p>
        <ul>
          <li><strong>Wavelength</strong> (distance from one wave peak to the next) gives <strong>hue</strong> (color). Short waves look blue-violet; long waves look red.</li>
          <li><strong>Amplitude</strong> (height of the wave) gives <strong>brightness</strong>. Taller waves look brighter.</li>
        </ul>
        <h3>The path of light</h3>
        <table>
          <tr><th>Part</th><th>Job</th></tr>
          <tr><td><strong>Cornea</strong></td><td>clear outer cover; bends light and protects the eye</td></tr>
          <tr><td><strong>Iris</strong></td><td>colored muscle that controls the size of the pupil</td></tr>
          <tr><td><strong>Pupil</strong></td><td>the opening that lets light in; it gets larger in the dark</td></tr>
          <tr><td><strong>Lens</strong></td><td>changes shape to focus light on the retina. This is called <strong>accommodation</strong>.</td></tr>
          <tr><td><strong>Retina</strong></td><td>the light-sensitive inner layer at the back of the eye where transduction happens</td></tr>
          <tr><td><strong>Rods</strong></td><td>receptors for black, white, and gray; work well in dim light and at the edges of vision</td></tr>
          <tr><td><strong>Cones</strong></td><td>receptors for color and fine detail; work in bright light; many in the fovea</td></tr>
          <tr><td><strong>Fovea</strong></td><td>the central point of the retina with the sharpest vision; full of cones</td></tr>
          <tr><td><strong>Bipolar cells</strong> → <strong>ganglion cells</strong></td><td>rods and cones signal bipolar cells, which signal ganglion cells; the ganglion cell axons form the optic nerve</td></tr>
          <tr><td><strong>Optic nerve</strong></td><td>carries signals from the eye to the thalamus, then to the visual cortex in the occipital lobe</td></tr>
          <tr><td><strong>Blind spot</strong></td><td>where the optic nerve leaves the eye; there are no rods or cones, so we cannot see there. The brain fills in the gap.</td></tr>
        </table>
        <h3>Focus problems</h3>
        <ul>
          <li><strong>Nearsightedness</strong> (myopia): close things are clear, far things are blurry. The image focuses <em>in front of</em> the retina.</li>
          <li><strong>Farsightedness</strong> (hyperopia): far things are clear, close things are blurry. The image focuses <em>behind</em> the retina.</li>
        </ul>
        <div class="tip">Order of light: <strong>cornea → pupil → lens → retina (rods/cones → bipolar → ganglion) → optic nerve</strong>.
        Night vision and seeing from the corner of your eye use rods.</div>
      `
    },
    {
      id: "ps06-l3",
      title: "Color vision and feature detectors",
      barrons: "Chapter 6, Sensation: Energy Senses (page 50)",
      html: `
        <h3>Two theories of color vision</h3>
        <table>
          <tr><th>Theory</th><th>Main idea</th><th>Where it works</th></tr>
          <tr><td><strong>Trichromatic</strong> (Young-Helmholtz) theory</td><td>the retina has three kinds of cones, most sensitive to <strong>red, green, and blue</strong>. All colors come from mixing their signals.</td><td>in the cones of the retina</td></tr>
          <tr><td><strong>Opponent-process theory</strong> (Hering)</td><td>color is processed in opposite pairs: <strong>red-green, blue-yellow, black-white</strong>. When one side of a pair is active, the other is blocked.</td><td>later, in ganglion cells, the thalamus, and the brain</td></tr>
        </table>
        <p>Both theories are correct for different steps. The opponent-process theory explains <strong>afterimages</strong>:
        if you stare at a green square for 30 seconds and then look at a white wall, you see a red square. The green part of the pair
        got tired, so the red part "rebounds".</p>
        <p><strong>Color blindness</strong> (color vision deficiency) usually happens when one type of cone is missing or does not work well.
        The most common type is red-green color blindness. It is much more common in males, because the genes are on the X chromosome.
        Most people with it still see many colors, not only gray.</p>
        <h3>Feature detectors</h3>
        <p><strong>Feature detectors</strong> are neurons in the visual cortex that respond to specific features, such as edges, lines,
        angles, and movement. <strong>David Hubel and Torsten Wiesel</strong> won a Nobel Prize for discovering them. Some brain areas
        respond mostly to faces. Information about color, motion, form, and depth is processed at the same time by different areas;
        this is called <strong>parallel processing</strong>.</p>
        <div class="tip">Afterimage questions → opponent-process. "Three kinds of cones" → trichromatic.</div>
      `
    },
    {
      id: "ps06-l4",
      title: "Hearing",
      barrons: "Chapter 6, Sensation: Energy Senses (page 50)",
      html: `
        <p><strong>Audition</strong> is the sense of hearing. Sound is a wave of pressure moving through air.</p>
        <ul>
          <li><strong>Frequency</strong> (number of waves per second, measured in hertz) gives <strong>pitch</strong>. High frequency = high pitch, like a whistle.</li>
          <li><strong>Amplitude</strong> (height of the wave) gives <strong>loudness</strong>, measured in decibels. Long exposure above about 85 decibels can damage hearing.</li>
        </ul>
        <h3>Parts of the ear</h3>
        <table>
          <tr><th>Part</th><th>What it contains and does</th></tr>
          <tr><td><strong>Outer ear</strong></td><td>the visible ear and the ear canal; collects sound and sends it to the <strong>eardrum</strong>, which vibrates</td></tr>
          <tr><td><strong>Middle ear</strong></td><td>three tiny bones (<strong>hammer, anvil, stirrup</strong>) that make the vibration stronger and pass it to the oval window</td></tr>
          <tr><td><strong>Inner ear</strong></td><td>the <strong>cochlea</strong>, a snail-shaped tube full of fluid. Vibrations move the fluid and bend the <strong>hair cells</strong> on the basilar membrane. This is where transduction happens. The <strong>auditory nerve</strong> takes the signal to the brain.</td></tr>
        </table>
        <h3>Theories of pitch</h3>
        <table>
          <tr><th>Theory</th><th>Main idea</th><th>Best for</th></tr>
          <tr><td><strong>Place theory</strong></td><td>different pitches make different <em>places</em> on the basilar membrane vibrate most</td><td>high pitches</td></tr>
          <tr><td><strong>Frequency</strong> (temporal) theory</td><td>the whole membrane vibrates at the same rate as the sound, and the nerve fires at that rate</td><td>low pitches</td></tr>
          <tr><td><strong>Volley principle</strong></td><td>groups of neurons take turns firing, so together they can match frequencies faster than one neuron can fire (this extends frequency theory)</td><td>low pitches above about 1,000 Hz (hertz, vibrations per second)</td></tr>
        </table>
        <h3>Hearing loss</h3>
        <ul>
          <li><strong>Conduction hearing loss</strong>: damage to the eardrum or middle-ear bones, so vibrations do not reach the cochlea. Hearing aids that make sound louder often help.</li>
          <li><strong>Sensorineural hearing loss</strong> (nerve deafness): damage to the hair cells or the auditory nerve, often from loud noise or aging. A <strong>cochlear implant</strong> can help by stimulating the auditory nerve directly.</li>
        </ul>
        <p><strong>Sound localization</strong>: we find where a sound comes from because it reaches the closer ear slightly
        <em>sooner</em> and slightly <em>louder</em>. A sound directly in front or behind reaches both ears equally, so it is harder to locate.</p>
        <div class="tip">Place = high pitch. Frequency (with the volley principle) = low pitch. Middle pitches = both theories together.</div>
      `
    },
    {
      id: "ps06-l5",
      title: "Touch, pain, taste, and smell",
      barrons: "Chapter 6, Sensation: Energy Senses (page 50) and Chemical Senses (page 54)",
      html: `
        <h3>Touch and pain</h3>
        <p>The skin senses four basic things: <strong>pressure, warmth, cold, and pain</strong>. Other feelings are mixtures, for example
        "wet" is cold plus pressure.</p>
        <p><strong>Gate-control theory</strong> (Melzack and Wall) says the spinal cord has a neural "gate" that can open to let pain
        signals reach the brain or close to block them. Signals from large, fast nerve fibers (for example rubbing a hurt elbow) and messages
        from the brain (such as distraction) can close the gate. That is why rubbing a bumped knee makes it hurt less.</p>
        <p><strong>Phantom limb sensation</strong>: after an amputation (removal of an arm or leg), many people still feel the missing limb,
        and sometimes pain in it. This shows that pain and touch are created in the brain, not only in the body.</p>
        <h3>Taste (gustation)</h3>
        <p><strong>Gustation</strong> is the sense of taste. Taste receptor cells sit in <strong>taste buds</strong>. There are five basic tastes:
        <strong>sweet, sour, salty, bitter, and umami</strong> (a savory, meaty taste, as in soy sauce or broth). Taste receptors are replaced
        about every one to two weeks.</p>
        <h3>Smell (olfaction)</h3>
        <p><strong>Olfaction</strong> is the sense of smell. Receptor cells high in the nose detect chemical molecules in the air.
        Smell is special: its signals go to the <strong>olfactory bulb</strong> and then <strong>directly</strong> to brain areas such as
        the amygdala and hippocampus, <strong>without going through the thalamus first</strong>. All other senses pass through the thalamus.
        This is one reason smells can bring back strong emotions and memories, for example the smell of a grandmother's cooking.</p>
        <div class="tip">Exam favorite: smell is the only sense that does not go to the thalamus first.</div>
      `
    },
    {
      id: "ps06-l6",
      title: "Body senses and sensory interaction",
      barrons: "Chapter 6, Sensation: Body Position Senses (page 55)",
      html: `
        <table>
          <tr><th>Sense</th><th>What it tells you</th><th>Where the receptors are</th><th>Example</th></tr>
          <tr><td><strong>Vestibular sense</strong></td><td>balance and the position and movement of your head</td><td>the <strong>semicircular canals</strong> and vestibular sacs in the inner ear</td><td>staying balanced on a bus that stops suddenly; feeling dizzy after spinning</td></tr>
          <tr><td><strong>Kinesthesis</strong></td><td>the position and movement of your own body parts</td><td>receptors in muscles, tendons, and joints</td><td>touching your nose with your eyes closed</td></tr>
        </table>
        <h3>Senses work together</h3>
        <p><strong>Sensory interaction</strong> is the way one sense can change another. Example: food tastes weak when you have a cold,
        because smell is a big part of flavor. Another example: it is easier to understand a speaker when you can see their lips move.</p>
        <p><strong>Embodied cognition</strong> is the idea that body feelings can affect our thinking and judgments; for example, holding a warm
        drink may make people judge others as warmer.</p>
        <p><strong>Synesthesia</strong> is a rare condition in which stimulating one sense also produces an experience in another sense.
        For example, a person may see the color blue every time they hear the note C, or see numbers as having colors.</p>
        <div class="tip">Vestibular = balance (inner ear). Kinesthesis = where your body parts are (muscles and joints).</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps06-ex1",
      title: "Noticing a change",
      type: "mc",
      instructions: `<p>Kofi is holding a box with 10 books. When one more book is added, he notices the box is heavier. When he holds
      a box with 40 books, he does not notice when one book is added, but he notices when four are added. Which principle explains this?</p>`,
      choices: [
        "Absolute threshold",
        "Sensory adaptation",
        "Weber's law",
        "Transduction"
      ],
      answer: 2,
      explain: "Weber's law says the just-noticeable difference is a constant percentage of the original stimulus: here about 10%, so 1 of 10 books and 4 of 40 books.",
      hints: [
        "He notices the change only when it is the same <em>proportion</em> of the total.",
        "Which law is about the difference threshold being a percentage?"
      ]
    },
    {
      id: "ps06-ex2",
      title: "The swimming pool",
      type: "mc",
      instructions: `<p>Lucía jumps into a pool and the water feels very cold. After ten minutes, the same water feels comfortable,
      even though its temperature has not changed. What explains this?</p>`,
      choices: [
        "Sensory adaptation",
        "Signal detection theory",
        "Accommodation",
        "Synesthesia"
      ],
      answer: 0,
      explain: "Her temperature receptors become less sensitive to a stimulus that does not change. That is sensory adaptation.",
      hints: [
        "The water did not change. Her receptors did.",
        "Which term means sensitivity decreases to an unchanging stimulus?"
      ]
    },
    {
      id: "ps06-ex3",
      title: "Seeing at night",
      type: "mc",
      instructions: `<p>Arjun is walking at night. He can see a faint star better when he looks a little to the side of it than when he
      looks straight at it. Why?</p>`,
      choices: [
        "The blind spot is at the edge of the retina.",
        "The fovea is full of rods, which do not work in the dark.",
        "The lens cannot change shape in the dark.",
        "Rods, which work well in dim light, are mostly outside the fovea."
      ],
      answer: 3,
      explain: "The fovea is full of cones, which need bright light. Rods are in the outer parts of the retina, so looking to the side uses the rods.",
      hints: [
        "Which receptors work in dim light?",
        "Where on the retina are those receptors found?"
      ]
    },
    {
      id: "ps06-ex4",
      title: "A red flag that turns green",
      type: "mc",
      instructions: `<p>Mei stares at a picture of a red flag for one minute. Then she looks at a white page and sees a green flag.
      Which theory best explains this?</p>`,
      choices: [
        "Trichromatic theory",
        "Opponent-process theory",
        "Place theory",
        "Gate-control theory"
      ],
      answer: 1,
      explain: "Opponent-process theory says color cells work in pairs like red-green. After the red side tires, the green side rebounds, which causes the afterimage.",
      hints: [
        "This is an afterimage.",
        "Which theory has colors in opposite pairs?"
      ]
    },
    {
      id: "ps06-ex5",
      title: "A low note",
      type: "mc",
      instructions: `<p>Nikolai listens to a very low note on a bass guitar. His auditory nerve fires at the same rate as the sound wave
      vibrates. Which theory of pitch best describes this?</p>`,
      choices: [
        "Place theory",
        "Volley principle",
        "Opponent-process theory",
        "Frequency theory"
      ],
      answer: 3,
      explain: "Frequency (temporal) theory says the nerve fires at the same rate as the sound frequency. It works best for low pitches.",
      hints: [
        "The nerve firing rate matches the sound.",
        "Which theory is named after the number of waves per second?"
      ]
    },
    {
      id: "ps06-ex6",
      title: "Concert damage",
      type: "mc",
      instructions: `<p>After years of working at loud concerts without ear protection, Femi has trouble hearing. A doctor finds that many
      hair cells in his cochlea are damaged. What type of hearing loss does Femi have?</p>`,
      choices: [
        "Sensorineural hearing loss",
        "Conduction hearing loss",
        "Sensory adaptation",
        "Kinesthetic loss"
      ],
      answer: 0,
      explain: "Damage to the hair cells or auditory nerve is sensorineural hearing loss. Conduction loss is damage to the eardrum or middle-ear bones.",
      hints: [
        "Where is the damage: the eardrum and bones, or the cochlea and nerve?",
        "Hair cells are receptor cells connected to neurons."
      ]
    },
    {
      id: "ps06-ex7",
      title: "Grandmother's kitchen",
      type: "mc",
      instructions: `<p>When Yusuf smells cardamom, he suddenly feels a strong memory of his grandmother's kitchen. Which fact best
      explains why smell is so closely linked to emotion and memory?</p>`,
      choices: [
        "Smell receptors are in the cochlea, next to the hearing receptors.",
        "Smell signals go to the thalamus before any other sense does.",
        "Smell skips the thalamus and goes straight to emotion and memory areas.",
        "Smell uses the same receptors on the tongue as taste does."
      ],
      answer: 2,
      explain: "Olfactory signals skip the thalamus and reach emotion and memory areas (the amygdala and hippocampus) quickly and directly.",
      hints: [
        "Smell is different from all the other senses in one way.",
        "Think about the brain's sensory \"switchboard\"."
      ]
    },
    {
      id: "ps06-ex8",
      title: "Rubbing it better",
      type: "mc",
      instructions: `<p>Ana bumps her elbow on a table and quickly rubs it. The pain feels less strong. Which theory best explains this?</p>`,
      choices: [
        "Trichromatic theory",
        "Gate-control theory",
        "Signal detection theory",
        "Weber's law"
      ],
      answer: 1,
      explain: "Gate-control theory says signals from rubbing (large nerve fibers) can close a \"gate\" in the spinal cord and block some pain signals.",
      hints: [
        "Rubbing sends other signals that compete with the pain.",
        "Which theory talks about a gate in the spinal cord?"
      ]
    },
    {
      id: "ps06-ex9",
      title: "Science practice: thresholds",
      type: "mc",
      instructions: `<p>In a hearing test, Ms. Rossi plays tones at different volumes. A student hears a tone at 10 decibels 20% of the time,
      at 15 decibels 50% of the time, and at 20 decibels 90% of the time. What is the student's absolute threshold for this tone?</p>`,
      choices: [
        "10 decibels",
        "20 decibels",
        "0 decibels",
        "15 decibels"
      ],
      answer: 3,
      explain: "The absolute threshold is the level a person detects 50% of the time. Here that is 15 decibels.",
      hints: [
        "The absolute threshold is not the level heard every time.",
        "Look for the volume detected half of the time."
      ]
    },
    {
      id: "ps06-ex10",
      title: "Balance",
      type: "mc",
      instructions: `<p>After spinning on a ride at a fair, Haruto feels dizzy and has trouble walking in a straight line. Which sense
      is most affected?</p>`,
      choices: [
        "Kinesthesis",
        "Olfaction (smell)",
        "Vestibular sense",
        "Gustation"
      ],
      answer: 2,
      explain: "The vestibular sense, from the semicircular canals in the inner ear, controls balance. Spinning moves the fluid in the canals, which causes dizziness.",
      hints: [
        "Dizziness and balance are the clues.",
        "This sense uses fluid-filled canals in the inner ear."
      ]
    }
  ]
});
