// AP Psychology, chapter 3 — Unit 1: Heredity, neurons, and drugs. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps03", {
  intro: `
    <p>Every thought, feeling, and action starts in the body. In this chapter you learn how genes and the environment work together,
    how the nervous system is organized, how nerve cells send messages, how hormones work, and how psychoactive drugs change these messages.</p>
    <p>Unit 1 is about the biological bases of behavior. AP questions often describe a person and ask which neurotransmitter, hormone,
    or part of the nervous system is involved, or how a drug works at the synapse. These are some of the most common questions on the exam.</p>
  `,
  lessons: [
    {
      id: "ps03-l1",
      title: "Nature, nurture, and genes",
      html: `
        <p>The <strong>nature-nurture issue</strong> asks how much behavior comes from <strong>nature</strong> (genes we inherit) and how much
        from <strong>nurture</strong> (environment and experience). Today psychologists agree that both always work together.</p>
        <ul>
          <li><strong>Genes</strong> are small parts of DNA (the chemical code in every cell) that we inherit from our parents. They help build
          the body and influence traits like height or temperament (the basic way a person reacts).</li>
          <li><strong>Heritability</strong> is the share of the <em>differences</em> between people in a group that comes from differences in
          their genes. It describes a group, not one person. If the heritability of height is about 0.8, it does not mean 80% of Olu's
          height comes from genes.</li>
          <li>Heritability depends on the environment. If everyone grows up in very similar conditions, more of the differences come from genes.</li>
        </ul>
        <h3>Twin and adoption studies</h3>
        <table>
          <tr><th>Study type</th><th>Idea</th></tr>
          <tr><td><strong>Twin studies</strong></td><td><strong>Identical twins</strong> (monozygotic) share almost all genes. <strong>Fraternal twins</strong> (dizygotic) share about half, like normal siblings. If identical twins are more alike in a trait, genes probably play a role.</td></tr>
          <tr><td>Twins raised apart</td><td>Identical twins who grew up in different homes share genes but not environment. Their similarities point to genes.</td></tr>
          <tr><td><strong>Adoption studies</strong></td><td>Adopted children share genes with their birth parents and environment with their adoptive parents. Researchers compare the child with both families.</td></tr>
        </table>
        <h3>Evolutionary psychology and epigenetics</h3>
        <p><strong>Evolutionary psychology</strong> studies how behavior and the mind were shaped by <strong>natural selection</strong>: traits that
        helped our ancestors survive and reproduce became more common. Example: a preference for sweet, fatty food helped people survive when food was rare.</p>
        <p><strong>Epigenetics</strong> ("above the genes") studies how the environment can turn genes on or off without changing the DNA itself.
        Example: severe stress in early childhood may change how stress-related genes are expressed later in life.</p>
        <div class="tip">"Identical twins raised apart are very similar" is evidence for nature. "Adopted children are like their adoptive parents"
        is evidence for nurture.</div>
      `
    },
    {
      id: "ps03-l2",
      title: "The nervous system",
      html: `
        <p>The nervous system is the body's fast communication network. It has two main parts.</p>
        <table>
          <tr><th>Part</th><th>What it includes</th><th>Job</th></tr>
          <tr><td><strong>Central nervous system (CNS)</strong></td><td>the brain and the spinal cord</td><td>makes decisions</td></tr>
          <tr><td><strong>Peripheral nervous system (PNS)</strong></td><td>all nerves outside the brain and spinal cord</td><td>carries messages between the CNS and the body</td></tr>
        </table>
        <p>The PNS has two parts:</p>
        <ul>
          <li>The <strong>somatic nervous system</strong> controls the skeletal muscles that you move on purpose, and carries messages from
          the senses. Example: lifting your hand to answer a question.</li>
          <li>The <strong>autonomic nervous system</strong> controls automatic body functions, like heart rate, breathing, and digestion.
          It has two parts:
            <ul>
              <li>The <strong>sympathetic nervous system</strong> <em>arouses</em> the body for action, the "fight-or-flight" response:
              faster heart, faster breathing, digestion slows down. Example: Elena's heart races when a car almost hits her.</li>
              <li>The <strong>parasympathetic nervous system</strong> <em>calms</em> the body and saves energy, "rest and digest": slower heart,
              digestion starts again. Example: 20 minutes later, Elena feels calm again.</li>
            </ul>
          </li>
        </ul>
        <h3>The reflex arc</h3>
        <p>A <strong>reflex</strong> is a fast, automatic response. In a <strong>reflex arc</strong>, a <strong>sensory neuron</strong>
        (carries messages from the body to the CNS) sends a signal to an <strong>interneuron</strong> in the spinal cord, which sends it directly
        to a <strong>motor neuron</strong> (carries messages from the CNS to the muscles). The brain is not needed for the first reaction.
        Example: you pull your hand away from a hot pan before you feel the pain.</p>
        <div class="tip">Sympathetic = stress ("sympathy" in a crisis). Parasympathetic = "parachute" that brings you down softly.</div>
      `
    },
    {
      id: "ps03-l3",
      title: "Neurons and the action potential",
      html: `
        <p>A <strong>neuron</strong> is a nerve cell, the basic unit of the nervous system.</p>
        <table>
          <tr><th>Part</th><th>Job</th></tr>
          <tr><td><strong>Dendrites</strong></td><td>branches that receive messages from other neurons</td></tr>
          <tr><td><strong>Cell body</strong> (soma)</td><td>contains the nucleus; keeps the cell alive</td></tr>
          <tr><td><strong>Axon</strong></td><td>a long fiber that carries the message away from the cell body</td></tr>
          <tr><td><strong>Myelin sheath</strong></td><td>a fatty layer around many axons; it makes messages travel much faster</td></tr>
          <tr><td><strong>Terminal buttons</strong> (axon terminals)</td><td>ends of the axon that release chemical messengers</td></tr>
        </table>
        <p><strong>Glial cells</strong> (glia) are cells that support neurons. They feed and protect them, make myelin, and clean up waste.
        In <strong>multiple sclerosis</strong>, myelin is damaged, so messages slow down and muscle control becomes weak.</p>
        <h3>How a neuron "fires"</h3>
        <ul>
          <li>At rest, the inside of the neuron has a negative charge compared with the outside. This is the <strong>resting potential</strong>.</li>
          <li>Messages from other neurons can be <strong>excitatory</strong> (push the neuron to fire) or <strong>inhibitory</strong> (stop it).</li>
          <li>If the excitatory signals reach the <strong>threshold</strong> (the minimum level needed), an <strong>action potential</strong> happens:
          positive ions (charged particles) rush into the axon, and an electrical signal moves down the axon.</li>
          <li>The <strong>all-or-none principle</strong>: a neuron either fires completely or does not fire at all. A stronger stimulus does not make
          a bigger action potential; it makes the neuron fire <em>more often</em>, and more neurons fire.</li>
          <li>The <strong>refractory period</strong> is a short rest after firing, when the neuron cannot fire again.</li>
        </ul>
        <div class="tip">Think of a toilet flush: you must push the handle hard enough (threshold), it flushes fully or not at all (all-or-none),
        and it must refill before the next flush (refractory period).</div>
      `
    },
    {
      id: "ps03-l4",
      title: "The synapse and neurotransmitters",
      html: `
        <p>Neurons do not touch. The tiny gap between the axon terminal of one neuron and the dendrite of the next is the <strong>synapse</strong>
        (or synaptic gap). When the action potential reaches the terminal, the neuron releases <strong>neurotransmitters</strong>, chemical
        messengers that cross the synapse and fit into <strong>receptor sites</strong> on the next neuron, like a key in a lock.</p>
        <p><strong>Reuptake</strong> is when the sending neuron takes back extra neurotransmitter from the synapse, to use it again.</p>
        <table>
          <tr><th>Neurotransmitter</th><th>Main jobs</th><th>Linked problems</th></tr>
          <tr><td><strong>Acetylcholine (ACh)</strong></td><td>muscle movement, learning, memory</td><td>low levels in Alzheimer's disease</td></tr>
          <tr><td><strong>Dopamine</strong></td><td>movement, reward, pleasure, motivation</td><td>too little: Parkinson's disease; too much: linked to schizophrenia</td></tr>
          <tr><td><strong>Serotonin</strong></td><td>mood, hunger, sleep</td><td>low levels linked to depression</td></tr>
          <tr><td><strong>Norepinephrine</strong></td><td>alertness and arousal</td><td>low levels linked to depressed mood</td></tr>
          <tr><td><strong>Glutamate</strong></td><td>the main <em>excitatory</em> neurotransmitter; memory</td><td>too much can overstimulate the brain (seizures, migraines)</td></tr>
          <tr><td><strong>GABA</strong> (gamma-aminobutyric acid)</td><td>the main <em>inhibitory</em> neurotransmitter; calms brain activity</td><td>low levels linked to seizures, tremors, anxiety, insomnia</td></tr>
          <tr><td><strong>Endorphins</strong></td><td>the body's natural painkillers; pleasure</td><td>released during hard exercise ("runner's high")</td></tr>
          <tr><td><strong>Substance P</strong></td><td>sends pain signals</td><td>endorphins block substance P</td></tr>
        </table>
        <h3>How drugs act at the synapse</h3>
        <ul>
          <li>An <strong>agonist</strong> increases the action of a neurotransmitter, for example by copying it and activating the receptor.
          Example: morphine copies endorphins.</li>
          <li>An <strong>antagonist</strong> blocks a neurotransmitter, often by sitting in the receptor without activating it.
          Example: curare (a poison) blocks acetylcholine receptors, so muscles cannot move.</li>
          <li>A <strong>reuptake inhibitor</strong> stops reuptake, so the neurotransmitter stays longer in the synapse.
          Example: SSRIs (selective serotonin reuptake inhibitors) are medicines for depression that keep serotonin in the synapse longer.</li>
        </ul>
        <div class="tip">Agonist = "agrees with" (helps) the neurotransmitter. Antagonist = "against" it.</div>
      `
    },
    {
      id: "ps03-l5",
      title: "The endocrine system",
      html: `
        <p>The <strong>endocrine system</strong> is the body's slower communication system. <strong>Glands</strong> release
        <strong>hormones</strong>, chemical messengers that travel in the blood. Hormones work slower than neurotransmitters, but their effects last longer.</p>
        <table>
          <tr><th>Gland or hormone</th><th>Job</th></tr>
          <tr><td><strong>Pituitary gland</strong></td><td>the "master gland" in the brain. It is controlled by the hypothalamus, and it tells other glands what to do. It releases growth hormone and oxytocin.</td></tr>
          <tr><td><strong>Adrenal glands</strong></td><td>on top of the kidneys; release <strong>adrenaline</strong> (epinephrine) and norepinephrine in stress, to support fight-or-flight</td></tr>
          <tr><td><strong>Oxytocin</strong></td><td>social bonding and trust; important in childbirth and breastfeeding</td></tr>
          <tr><td><strong>Melatonin</strong></td><td>released by the pineal gland when it gets dark; makes you sleepy</td></tr>
          <tr><td><strong>Leptin</strong></td><td>released by fat cells; tells the brain "you have enough energy," which reduces hunger</td></tr>
          <tr><td><strong>Ghrelin</strong></td><td>released by an empty stomach; tells the brain "I am hungry"</td></tr>
        </table>
        <p>Example: before a big race, Amara's adrenal glands release adrenaline. Her heart beats fast, and the feeling stays for some time after the race ends.</p>
        <div class="tip">Ghrelin makes your stomach "growl." Leptin makes you "leave" the table.</div>
      `
    },
    {
      id: "ps03-l6",
      title: "Psychoactive drugs",
      html: `
        <p>A <strong>psychoactive drug</strong> is a chemical that changes perception, mood, or thinking, usually by acting at the synapse.</p>
        <ul>
          <li><strong>Tolerance</strong>: with regular use, the brain adapts, so a person needs a bigger dose to get the same effect.</li>
          <li><strong>Withdrawal</strong>: unpleasant symptoms (for example shaking, headache, anxiety) when a person stops using the drug.</li>
          <li><strong>Addiction</strong>: strong craving and continued use of a drug even when it causes harm. The DSM-5-TR calls this a
          <strong>substance use disorder</strong>. Many drugs that cause addiction increase dopamine in the brain's reward pathways.</li>
        </ul>
        <table>
          <tr><th>Category</th><th>Effect</th><th>Examples</th></tr>
          <tr><td><strong>Depressants</strong></td><td>slow down (depress) brain and body activity; can reduce anxiety and judgment</td><td>alcohol, barbiturates, benzodiazepines (many increase GABA activity)</td></tr>
          <tr><td><strong>Stimulants</strong></td><td>speed up brain and body activity; more energy and alertness, then a "crash"</td><td>caffeine, nicotine, cocaine, amphetamines, methamphetamine</td></tr>
          <tr><td><strong>Hallucinogens</strong></td><td>change perception; people may see or hear things that are not there (hallucinations)</td><td>LSD, psilocybin ("magic mushrooms"); marijuana (THC) has mild hallucinogenic effects</td></tr>
          <tr><td><strong>Opioids</strong></td><td>reduce pain and cause pleasure by copying endorphins (agonists); high risk of addiction and of stopping breathing in an overdose</td><td>morphine, heroin, fentanyl, oxycodone</td></tr>
        </table>
        <div class="tip">Alcohol is a depressant, even if people seem more active at a party. It lowers judgment, so people act with fewer limits.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps03-ex1",
      title: "Twins raised apart",
      type: "mc",
      instructions: `<p>Two identical twins, Marco and Luca, were adopted by different families in different countries. When they meet at age 35,
      they find they have very similar personalities and the same fears. This finding is best used as evidence for the role of:</p>`,
      choices: [
        "nurture, because they grew up in different places",
        "epigenetics, because the environment changed their DNA",
        "nature, because they share genes but not environment",
        "regression toward the mean"
      ],
      answer: 2,
      explain: "Identical twins raised apart share genes but not their environment. Their similarities suggest a genetic (nature) influence.",
      hints: [
        "What do these twins share, and what do they not share?",
        "They had different environments but the same genes."
      ]
    },
    {
      id: "ps03-ex2",
      title: "Stressful moment",
      type: "mc",
      instructions: `<p>Yusuf hears a loud crash in the dark. His heart beats fast, his breathing speeds up, and his stomach stops digesting food.
      Which part of the nervous system is most active?</p>`,
      choices: [
        "Parasympathetic nervous system",
        "Somatic nervous system",
        "Central nervous system only",
        "Sympathetic nervous system"
      ],
      answer: 3,
      explain: "The sympathetic nervous system prepares the body for fight-or-flight by increasing heart rate and breathing and slowing digestion. The parasympathetic system would calm him down afterward.",
      hints: [
        "His body is getting ready for danger.",
        "Which part of the autonomic nervous system creates fight-or-flight?"
      ]
    },
    {
      id: "ps03-ex3",
      title: "All-or-none",
      type: "mc",
      instructions: `<p>Hana touches a cup of warm tea and then a cup of very hot tea. The very hot tea feels more intense, but each neuron's
      action potential has the same strength. How does her nervous system signal the stronger heat?</p>`,
      choices: [
        "Neurons fire more often, and more neurons fire.",
        "Each action potential becomes larger.",
        "The refractory period becomes longer.",
        "The myelin sheath becomes thicker."
      ],
      answer: 0,
      explain: "By the all-or-none principle, an action potential is always the same size. A stronger stimulus makes neurons fire more often and makes more neurons fire.",
      hints: [
        "An action potential cannot be bigger or smaller.",
        "Think about how often, and how many."
      ]
    },
    {
      id: "ps03-ex4",
      title: "Parts of the neuron",
      type: "mc",
      instructions: `<p>Dr. Ivanova studies a disease in which the fatty covering of axons is slowly destroyed. Patients have slower reactions
      and weaker muscle control. Which part of the neuron is damaged?</p>`,
      choices: [
        "Dendrites",
        "Myelin sheath",
        "Terminal buttons",
        "Receptor sites"
      ],
      answer: 1,
      explain: "The myelin sheath is a fatty layer around the axon that speeds up messages. When it is damaged, as in multiple sclerosis, messages slow down.",
      hints: [
        "The damaged part is a fatty covering.",
        "It normally makes messages travel faster down the axon."
      ]
    },
    {
      id: "ps03-ex5",
      title: "Shaking hands",
      type: "mc",
      instructions: `<p>Mr. Adeyemi, age 68, has shaking hands and moves more slowly every year. His doctor says neurons that produce one
      neurotransmitter are dying. Which neurotransmitter is most likely involved?</p>`,
      choices: [
        "Serotonin",
        "Endorphins",
        "Glutamate",
        "Dopamine"
      ],
      answer: 3,
      explain: "Parkinson's disease is linked to the loss of neurons that produce dopamine, which helps control movement.",
      hints: [
        "The symptoms are about movement.",
        "This disease is linked to too little of the neurotransmitter for movement and reward."
      ]
    },
    {
      id: "ps03-ex6",
      title: "How a medicine works",
      type: "mc",
      instructions: `<p>Sofia's doctor gives her a medicine for depression. It stops the sending neuron from taking back serotonin, so serotonin
      stays longer in the synapse. How does this medicine work?</p>`,
      choices: [
        "It is an antagonist for serotonin.",
        "It makes neurons reach the refractory period faster.",
        "It is a reuptake inhibitor.",
        "It acts like a hormone in the blood."
      ],
      answer: 2,
      explain: "A medicine that blocks reuptake is a reuptake inhibitor. SSRIs work this way. An antagonist would block serotonin's effect instead.",
      hints: [
        "The medicine stops the neuron from taking back its neurotransmitter.",
        "The name of this action has the word \"reuptake\" in it."
      ]
    },
    {
      id: "ps03-ex7",
      title: "Hunger signals",
      type: "mc",
      instructions: `<p>Ji-woo skipped lunch. By 4 p.m. her stomach is empty and she feels very hungry. Which hormone is most likely sending
      the hunger signal to her brain?</p>`,
      choices: [
        "Ghrelin",
        "Leptin",
        "Melatonin",
        "Oxytocin"
      ],
      answer: 0,
      explain: "An empty stomach releases ghrelin, which signals hunger. Leptin does the opposite: it comes from fat cells and reduces hunger.",
      hints: [
        "This hormone comes from an empty stomach.",
        "Leptin reduces hunger; you need the hormone that increases it."
      ]
    },
    {
      id: "ps03-ex8",
      title: "Drug categories",
      type: "mc",
      instructions: `<p>A man drinks a lot of energy drinks with caffeine. He feels alert and his heart beats fast, but a few hours later
      he feels very tired. Caffeine belongs to which category of drugs?</p>`,
      choices: [
        "Depressants",
        "Stimulants",
        "Hallucinogens",
        "Opioids"
      ],
      answer: 1,
      explain: "Stimulants speed up brain and body activity and are often followed by a crash. Caffeine is a stimulant, like nicotine and cocaine.",
      hints: [
        "His body speeds up after the drink.",
        "Which category increases alertness and energy?"
      ]
    },
    {
      id: "ps03-ex9",
      title: "Needing more",
      type: "mc",
      instructions: `<p>After using a pain medicine every day for a month, Carlos finds that his usual dose no longer works, and he needs a larger
      dose to get the same relief. Which concept best explains this?</p>`,
      choices: [
        "Withdrawal",
        "Reuptake",
        "Tolerance",
        "Heritability"
      ],
      answer: 2,
      explain: "Tolerance means the brain adapts to a drug, so a larger dose is needed for the same effect. Withdrawal is the set of symptoms when a person stops using it.",
      hints: [
        "Carlos has not stopped taking the medicine.",
        "The same dose has a smaller effect than before."
      ]
    },
    {
      id: "ps03-ex10",
      title: "Twin study result (Science Practice)",
      type: "mc",
      instructions: `<p>A study finds that when one identical twin has a certain anxiety disorder, the other twin has it 45% of the time. For fraternal
      twins, the rate is 15%. What is the best conclusion?</p>`,
      choices: [
        "The disorder is caused only by genes.",
        "Genes probably play a role, but environment matters too.",
        "The environment is the only cause of the disorder.",
        "Fraternal twins share more genes than identical twins."
      ],
      answer: 1,
      explain: "Identical twins share more genes and match more often, so genes probably play a role. But if genes were the only cause, identical twins would match close to 100% of the time.",
      hints: [
        "Compare 45% and 15%. Who shares more genes?",
        "If genes were everything, what would the rate for identical twins be?"
      ]
    }
  ]
});
