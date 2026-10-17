// AP Psychology, chapter 11 — Unit 3: Development across the lifespan (research designs, physical development,
// Piaget and Vygotsky, language, attachment, parenting, Erikson, and gender).
// Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps11", {
  intro: `
    <p>Developmental psychology studies how people change, and how they stay the same, from conception (the start of
    pregnancy) to old age. It looks at the body, thinking, language, relationships, and identity.</p>
    <p>Development is a big part of Unit 3 on the AP exam. You must know the stages of Piaget and Erikson, the attachment
    styles, the parenting styles, and how researchers study change over time. Many questions describe a child or an
    adult and ask which stage or concept fits.</p>
  `,
  lessons: [
    {
      id: "ps11-l1",
      title: "Studying development",
      html: `
        <h3>Research designs</h3>
        <table>
          <tr><th>Design</th><th>How it works</th><th>Strength and weakness</th></tr>
          <tr><td><strong>Cross-sectional study</strong></td><td>compares people of <em>different ages</em> at the <em>same time</em>. Example: test 20-, 40-, and 60-year-olds this year.</td><td>fast and cheap, but groups grew up in different times (a <strong>cohort effect</strong>), which can explain the differences</td></tr>
          <tr><td><strong>Longitudinal study</strong></td><td>studies the <em>same people</em> again and again over <em>many years</em>. Example: test the same children at ages 5, 10, and 15.</td><td>shows real change in people, but it is slow, costly, and some people drop out</td></tr>
        </table>
        <h3>Three big questions</h3>
        <ul>
          <li><strong>Nature and nurture:</strong> how much do genes (nature) and experience (nurture) shape development?
          Today, psychologists say both work together.</li>
          <li><strong>Continuity and stages:</strong> is development slow and steady (<strong>continuity</strong>), like a
          ramp, or does it happen in separate steps (<strong>stages</strong>), like stairs? Piaget and Erikson are stage theorists.</li>
          <li><strong>Stability and change:</strong> do our traits stay the same over life (<strong>stability</strong>), or do
          we change (<strong>change</strong>)? Temperament is quite stable, but people also grow and change, especially in adolescence.</li>
        </ul>
        <div class="tip">Cross-sectional = different people, one time. Longitudinal = same people, long time.</div>
      `
    },
    {
      id: "ps11-l2",
      title: "Physical development from before birth to old age",
      html: `
        <h3>Prenatal development</h3>
        <p><strong>Prenatal</strong> means before birth. There are three stages:</p>
        <table>
          <tr><th>Stage</th><th>Time</th><th>What happens</th></tr>
          <tr><td><strong>Zygote</strong></td><td>conception to about 2 weeks</td><td>the fertilized egg divides quickly and attaches to the wall of the uterus</td></tr>
          <tr><td><strong>Embryo</strong></td><td>about 2 weeks to 8 weeks</td><td>the main organs and body parts begin to form</td></tr>
          <tr><td><strong>Fetus</strong></td><td>about 9 weeks to birth</td><td>the body grows and the organs develop until they can work</td></tr>
        </table>
        <p><strong>Teratogens</strong> are harmful substances, like alcohol, nicotine, some drugs, and some viruses, that can
        reach the embryo or fetus and cause harm. <strong>Fetal alcohol syndrome (FAS)</strong> is caused by alcohol during
        pregnancy. It can cause a small head, unusual facial features, and lifelong problems with learning and behavior.</p>
        <h3>Newborns and infants</h3>
        <p>Newborns have <strong>reflexes</strong> (automatic, unlearned responses) that help them survive:</p>
        <ul>
          <li><strong>Rooting reflex:</strong> touch a baby's cheek, and the baby turns its head and opens its mouth toward the touch (to find food).</li>
          <li><strong>Sucking reflex:</strong> the baby sucks on anything put in its mouth.</li>
          <li><strong>Grasping reflex:</strong> the baby closes its hand tightly around a finger placed in its palm.</li>
        </ul>
        <p><strong>Habituation</strong> is a decrease in response to a stimulus that is shown again and again. Researchers use it
        to study what babies know: a baby looks at a new picture for a long time, then looks less as it becomes familiar. If
        the baby looks longer at a changed picture, the baby can tell the difference.</p>
        <p><strong>Maturation</strong> is biological growth that follows a genetic plan and is mostly not changed by experience.
        Motor development (sitting, crawling, walking) follows the same order in almost all babies, though the timing differs.</p>
        <p>A <strong>critical period</strong> is a time early in life when certain experiences must happen for normal development.
        A <strong>sensitive period</strong> is a time when learning is easiest, but it can still happen later.</p>
        <h3>Adolescence</h3>
        <p><strong>Puberty</strong> is the time of sexual maturation, when a person becomes able to reproduce.</p>
        <ul>
          <li><strong>Primary sex characteristics:</strong> the organs needed for reproduction, such as the ovaries, testes, and uterus.</li>
          <li><strong>Secondary sex characteristics:</strong> other traits that are not needed for reproduction, such as breasts and wider hips in females, and a deeper voice and facial hair in males.</li>
        </ul>
        <p>In the teenage brain, the emotional <strong>limbic system</strong> develops early, but the <strong>frontal lobe</strong>
        (especially the prefrontal cortex, which controls planning and self-control) develops <strong>last</strong>, into the
        mid-20s. This helps explain why teens may take more risks.</p>
        <h3>Aging</h3>
        <p>In later adulthood, the senses, muscle strength, and reaction time decline. Women experience menopause (the end of
        menstruation). Processing speed and fluid intelligence slowly decline, and recall becomes harder than recognition.
        But vocabulary and knowledge often stay strong, and exercise and mental activity help the brain stay healthy.</p>
        <div class="tip">Remember the order Z-E-F: zygote, embryo, fetus.</div>
      `
    },
    {
      id: "ps11-l3",
      title: "Cognitive development: Piaget and Vygotsky",
      html: `
        <h3>Piaget's ideas</h3>
        <p>Jean <strong>Piaget</strong> said children are active thinkers who build their understanding of the world.</p>
        <ul>
          <li><strong>Schema:</strong> a mental idea or framework about something. Example: a child's schema of "dog" is a furry animal with four legs.</li>
          <li><strong>Assimilation:</strong> fitting new experiences into an existing schema. Example: the child sees a cat and calls it "dog".</li>
          <li><strong>Accommodation:</strong> changing a schema to fit new information. Example: the child learns that cats and dogs are different and makes a new "cat" schema.</li>
        </ul>
        <h3>Piaget's four stages</h3>
        <table>
          <tr><th>Stage</th><th>Age (about)</th><th>Key features</th></tr>
          <tr><td><strong>Sensorimotor</strong></td><td>birth to 2</td><td>learns through senses and actions. Develops <strong>object permanence</strong>: knowing that objects still exist when out of sight. Example: a baby looks for a toy hidden under a blanket.</td></tr>
          <tr><td><strong>Preoperational</strong></td><td>2 to 7</td><td>uses words and pretend play, but not logic. <strong>Egocentrism</strong>: cannot see things from another person's point of view (a child covers her own eyes and thinks you cannot see her). No <strong>conservation</strong>: does not understand that amount stays the same when shape changes (thinks a tall thin glass has more juice than a short wide glass with the same amount).</td></tr>
          <tr><td><strong>Concrete operational</strong></td><td>7 to 11</td><td>thinks logically about real, concrete things. Understands conservation and simple math operations.</td></tr>
          <tr><td><strong>Formal operational</strong></td><td>12 and up</td><td>thinks about abstract ideas and hypotheses, such as justice or "what if" problems.</td></tr>
        </table>
        <p>Today, researchers think children develop some abilities, like object permanence, earlier than Piaget said, and
        that development is more continuous than his stages suggest.</p>
        <h3>Theory of mind</h3>
        <p><strong>Theory of mind</strong> is understanding that other people have their own thoughts, beliefs, and feelings,
        which can be different from yours. Most children develop it around age 4 or 5. Example: a child understands that a
        friend who did not see a toy being moved will look for it in the old place.</p>
        <h3>Vygotsky</h3>
        <p>Lev <strong>Vygotsky</strong> said children learn through social interaction with adults and more skilled peers.</p>
        <ul>
          <li><strong>Zone of proximal development (ZPD):</strong> the space between what a child can do alone and what the child can do with help.</li>
          <li><strong>Scaffolding:</strong> the support a helper gives, which is slowly removed as the child learns. Example: a father holds the bicycle at first, then lets go when his daughter can balance.</li>
        </ul>
        <div class="tip">Piaget: the child learns by exploring alone. Vygotsky: the child learns with help from others.</div>
      `
    },
    {
      id: "ps11-l4",
      title: "Language development",
      html: `
        <h3>Building blocks of language</h3>
        <ul>
          <li><strong>Phoneme:</strong> the smallest unit of sound. Example: the sounds c, a, and t in "cat".</li>
          <li><strong>Morpheme:</strong> the smallest unit of meaning. Example: "cats" has two morphemes: "cat" and "-s" (more than one).</li>
          <li><strong>Grammar:</strong> the rules of a language. It includes <strong>syntax</strong> (the order of words) and
          <strong>semantics</strong> (how meaning comes from words and parts of words).</li>
        </ul>
        <h3>Stages of language</h3>
        <table>
          <tr><th>Stage</th><th>Age (about)</th><th>Example</th></tr>
          <tr><td><strong>Babbling</strong></td><td>4 months</td><td>"ba-ba-ba", "da-da". At first babies make sounds from all languages; later they keep only the sounds of their home language.</td></tr>
          <tr><td><strong>One-word stage</strong></td><td>about 1 year</td><td>"Milk!" can mean "I want milk."</td></tr>
          <tr><td><strong>Two-word stage</strong></td><td>about 18 to 24 months</td><td><strong>Telegraphic speech</strong>: short phrases with only the key words, like a telegram. "Go park." "Mommy shoe."</td></tr>
          <tr><td>Full sentences</td><td>after 2 years</td><td>longer sentences and more grammar rules</td></tr>
        </table>
        <h3>How children learn language</h3>
        <p>Noam <strong>Chomsky</strong> said humans are born with a <strong>language acquisition device</strong>, an inborn
        ability to learn language. He used the term <strong>universal grammar</strong> for basic rules shared by all languages.
        Evidence: children all over the world learn language quickly, in the same order, and make similar mistakes (such as "I
        goed" for "I went"), which shows they apply rules they were not taught.</p>
        <p>Others, like B. F. Skinner, said language is learned through imitation and reinforcement. Most psychologists today say
        both nature and experience matter.</p>
        <p>There is a <strong>critical period</strong> (or sensitive period) for language. Children who do not hear language in
        early childhood have great difficulty learning it later. People who learn a second language after childhood usually speak it with an accent.</p>
        <div class="tip">Phoneme = sound. Morpheme = meaning. "Telegraphic" = only the important words.</div>
      `
    },
    {
      id: "ps11-l5",
      title: "Attachment, temperament, and parenting",
      html: `
        <p><strong>Attachment</strong> is a strong emotional bond between a child and a caregiver.</p>
        <h3>Harlow's monkeys</h3>
        <p>Harry <strong>Harlow</strong> raised baby monkeys with two artificial "mothers": one made of wire that gave milk, and
        one covered with soft cloth that gave no milk. The babies spent most of their time with the cloth mother, especially
        when afraid. This showed the importance of <strong>contact comfort</strong> (soft, warm touch), not only food, for attachment.</p>
        <h3>Imprinting</h3>
        <p>Konrad <strong>Lorenz</strong> studied <strong>imprinting</strong>: some animals, like baby geese, form a strong bond
        with the first moving object they see after hatching during a critical period. His goslings followed him everywhere.
        Human babies do not imprint in this way.</p>
        <h3>Ainsworth's strange situation</h3>
        <p>Mary <strong>Ainsworth</strong> created the <strong>strange situation</strong> test. A child plays in a new room, the
        caregiver leaves, a stranger comes in, and then the caregiver returns. Researchers watch how the child reacts.</p>
        <table>
          <tr><th>Attachment style</th><th>Child's behavior</th></tr>
          <tr><td><strong>Secure</strong></td><td>explores the room, is upset when the caregiver leaves, and is quickly comforted when the caregiver returns</td></tr>
          <tr><td><strong>Insecure-avoidant</strong></td><td>shows little distress when the caregiver leaves and ignores or avoids the caregiver on return</td></tr>
          <tr><td><strong>Insecure-anxious</strong> (ambivalent or resistant)</td><td>clings to the caregiver, is very upset when the caregiver leaves, and is hard to comfort on return; may seek comfort and push away at the same time</td></tr>
          <tr><td><strong>Disorganized</strong></td><td>confused or contradictory behavior, for example approaching the caregiver and then freezing; often linked to frightening or unpredictable care</td></tr>
        </table>
        <p>Sensitive, responsive caregivers tend to have securely attached children.</p>
        <h3>Temperament</h3>
        <p><strong>Temperament</strong> is a person's typical emotional style and reactivity, present from birth. Some babies are
        "easy" (calm and cheerful), some are "difficult" (irritable and intense), and some are "slow to warm up" (shy with new
        things). Temperament is partly genetic and quite stable over life.</p>
        <h3>Parenting styles</h3>
        <p>Diana Baumrind described parenting styles. Psychologists later added a fourth.</p>
        <table>
          <tr><th>Style</th><th>Rules and demands</th><th>Warmth</th><th>Example</th></tr>
          <tr><td><strong>Authoritarian</strong></td><td>high, strict</td><td>low</td><td>"Do it because I said so."</td></tr>
          <tr><td><strong>Authoritative</strong></td><td>high, but explained</td><td>high</td><td>"Bedtime is 10, because you need sleep for school. Let's talk if there is a problem."</td></tr>
          <tr><td><strong>Permissive</strong></td><td>low, few rules</td><td>high</td><td>"Stay up as late as you want."</td></tr>
          <tr><td><strong>Neglectful</strong> (uninvolved)</td><td>low</td><td>low</td><td>the parent pays little attention to the child at all</td></tr>
        </table>
        <p>Children of authoritative parents tend to have the highest self-esteem, self-control, and social skills. This is a
        correlation, so other factors (like the child's own temperament) may also play a role.</p>
        <div class="tip">Authorita<strong>tive</strong> has rules and warmth (both). Authorita<strong>rian</strong> has rules only.</div>
      `
    },
    {
      id: "ps11-l6",
      title: "Erikson's stages and gender development",
      html: `
        <h3>Erikson's psychosocial stages</h3>
        <p>Erik <strong>Erikson</strong> said each stage of life has a <strong>psychosocial crisis</strong>, a main challenge
        to solve. Solving it well helps the next stages.</p>
        <table>
          <tr><th>Age (about)</th><th>Crisis</th><th>Main question</th></tr>
          <tr><td>Infancy (0 to 1)</td><td><strong>Trust vs. mistrust</strong></td><td>Can I trust the world and my caregivers?</td></tr>
          <tr><td>Toddler (1 to 3)</td><td><strong>Autonomy vs. shame and doubt</strong></td><td>Can I do things by myself?</td></tr>
          <tr><td>Preschool (3 to 6)</td><td><strong>Initiative vs. guilt</strong></td><td>Can I start activities and make plans?</td></tr>
          <tr><td>Elementary school (6 to puberty)</td><td><strong>Competence (industry) vs. inferiority</strong></td><td>Am I good at things?</td></tr>
          <tr><td>Adolescence (teens)</td><td><strong>Identity vs. role confusion</strong></td><td>Who am I?</td></tr>
          <tr><td>Young adulthood (20s to early 40s)</td><td><strong>Intimacy vs. isolation</strong></td><td>Can I form close, loving relationships?</td></tr>
          <tr><td>Middle adulthood (40s to 60s)</td><td><strong>Generativity vs. stagnation</strong></td><td>Am I helping the next generation through work or family?</td></tr>
          <tr><td>Late adulthood (late 60s and up)</td><td><strong>Integrity vs. despair</strong></td><td>Was my life meaningful?</td></tr>
        </table>
        <h3>Identity in adolescence</h3>
        <p>In <strong>identity vs. role confusion</strong>, teens try different roles, friends, styles, and beliefs to find out
        who they are. Example: Noor joins the debate team, then the robotics club, and thinks about her religion and future career.
        A teen who does not form an identity may feel confused about who they are.</p>
        <p><strong>Emerging adulthood</strong> is a period from about 18 to the mid-20s in many modern cultures. Young people are
        no longer teens but are not yet fully independent. They may still live with parents, study, and explore jobs and relationships.</p>
        <h3>Sex and gender</h3>
        <ul>
          <li><strong>Sex</strong> refers to biological characteristics, such as chromosomes, hormones, and body parts.</li>
          <li><strong>Gender</strong> refers to the social and cultural characteristics a culture links with being male or female.</li>
          <li><strong>Gender roles</strong> are a culture's expectations about how males and females should behave. Example: in some cultures, people expect only women to cook.</li>
          <li><strong>Gender identity</strong> is a person's inner sense of their own gender. It may or may not match the sex assigned at birth.</li>
        </ul>
        <h3>How gender is learned</h3>
        <ul>
          <li><strong>Social learning theory:</strong> children learn gender behaviors by watching and copying others, and by
          being rewarded or punished. Example: a boy copies his older brother and is praised for being "tough".</li>
          <li><strong>Gender schema theory:</strong> children build mental frameworks (schemas) about what is "for boys" and
          "for girls", and then use these schemas to organize their behavior. Example: a girl decides that trucks are "boy toys" and chooses not to play with them.</li>
        </ul>
        <div class="tip">On the exam, a teen who asks "Who am I?" is in Erikson's identity vs. role confusion stage.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps11-ex1",
      title: "Piaget's stages",
      type: "mc",
      instructions: `<p>Aarav, age 4, watches his mother pour juice from a short, wide glass into a tall, thin glass. He says
      the tall glass now has more juice. Which concept best explains his thinking?</p>`,
      choices: [
        "Lack of object permanence in the sensorimotor stage",
        "Formal operational thinking",
        "Lack of conservation in the preoperational stage",
        "Accommodation"
      ],
      answer: 2,
      explain: "Conservation is understanding that the amount stays the same when the shape changes. Preoperational children (about 2 to 7) do not yet have it.",
      hints: [
        "The amount of juice did not change, only the shape of the glass.",
        "Piaget's preoperational children are missing this understanding."
      ]
    },
    {
      id: "ps11-ex2",
      title: "Schemas",
      type: "mc",
      instructions: `<p>Little Mia calls every man with a beard "Grandpa." Later, she learns that only one bearded man is her
      grandfather, and she starts calling the others "man." What process does her change show?</p>`,
      choices: [
        "Assimilation",
        "Accommodation",
        "Habituation",
        "Imprinting"
      ],
      answer: 1,
      explain: "Accommodation is changing a schema to fit new information. Calling every bearded man \"Grandpa\" was assimilation; changing that idea is accommodation.",
      hints: [
        "Mia changed her mental idea, she did not just fit new people into the old one.",
        "Piaget had two terms. One means fitting in, the other means changing the schema."
      ]
    },
    {
      id: "ps11-ex3",
      title: "Vygotsky",
      type: "mc",
      instructions: `<p>Chen cannot solve long division alone. With his tutor asking guiding questions, he can. The tutor slowly
      gives less help as Chen improves. Which concepts best describe this?</p>`,
      choices: [
        "Egocentrism and conservation",
        "Theory of mind and object permanence",
        "Zone of proximal development and scaffolding",
        "Assimilation and maturation"
      ],
      answer: 2,
      explain: "Long division is in Chen's zone of proximal development: he can do it with help. The tutor's changing support is scaffolding, both ideas from Vygotsky.",
      hints: [
        "This is about learning with help from a more skilled person.",
        "Think of Vygotsky, not Piaget."
      ]
    },
    {
      id: "ps11-ex4",
      title: "Attachment",
      type: "mc",
      instructions: `<p>In the strange situation, 1-year-old Lucía plays happily, cries when her father leaves, and quickly calms
      down and goes back to playing when he returns. Which attachment style does she show?</p>`,
      choices: [
        "Secure attachment",
        "Insecure-avoidant attachment",
        "Insecure-anxious attachment",
        "Disorganized attachment"
      ],
      answer: 0,
      explain: "A securely attached child is upset when the caregiver leaves but is quickly comforted on return. An anxious child would be very hard to calm.",
      hints: [
        "She is upset, but she is comforted easily.",
        "This is the healthiest pattern Ainsworth described."
      ]
    },
    {
      id: "ps11-ex5",
      title: "Parenting styles",
      type: "mc",
      instructions: `<p>Mr. and Mrs. Adeyemi have clear rules about homework and phone time. They explain the reasons for the
      rules, listen to their son's opinions, and show a lot of love. Which parenting style is this?</p>`,
      choices: [
        "Authoritarian",
        "Permissive",
        "Neglectful",
        "Authoritative"
      ],
      answer: 3,
      explain: "Authoritative parents have high demands and high warmth, and they explain their rules. Authoritarian parents have strict rules but little warmth or discussion.",
      hints: [
        "These parents have both rules and warmth.",
        "Be careful: two style names look very similar."
      ]
    },
    {
      id: "ps11-ex6",
      title: "Erikson",
      type: "mc",
      instructions: `<p>Isabella, age 16, changes her style of clothes often, joins different clubs, and spends a lot of time
      thinking about her values and what career she wants. According to Erikson, which stage is she in?</p>`,
      choices: [
        "Intimacy vs. isolation",
        "Identity vs. role confusion",
        "Competence vs. inferiority",
        "Generativity vs. stagnation"
      ],
      answer: 1,
      explain: "In adolescence, Erikson's crisis is identity vs. role confusion. Teens try different roles to answer \"Who am I?\" Intimacy vs. isolation comes in young adulthood.",
      hints: [
        "She is a teenager trying to find out who she is.",
        "The main question of this stage is \"Who am I?\""
      ]
    },
    {
      id: "ps11-ex7",
      title: "Language development",
      type: "mc",
      instructions: `<p>Two-year-old Kofi says, "Daddy go car" when he means "Daddy is going to the car." What kind of speech is this?</p>`,
      choices: [
        "Babbling",
        "One-word stage speech",
        "Telegraphic speech",
        "Universal grammar"
      ],
      answer: 2,
      explain: "Telegraphic speech uses only the key words, like a telegram, and is typical of the two-word stage. It leaves out small words like \"is\" and \"to\".",
      hints: [
        "Kofi uses only the most important words.",
        "The name of this speech comes from old short messages that cost money per word."
      ]
    },
    {
      id: "ps11-ex8",
      title: "Gender development",
      type: "mc",
      instructions: `<p>Five-year-old Hiroshi tells his friend, "Pink is a girl color, so I won't use the pink crayon." He uses
      his ideas about what is "for boys" and "for girls" to decide what to do. Which theory best explains this?</p>`,
      choices: [
        "Gender schema theory",
        "Attachment theory",
        "Imprinting",
        "Chomsky's language acquisition device"
      ],
      answer: 0,
      explain: "Gender schema theory says children form mental frameworks about gender and use them to guide behavior. Social learning theory would focus on copying others and rewards.",
      hints: [
        "Hiroshi is using a mental framework about gender.",
        "Piaget used the word \"schema\" for a mental framework."
      ]
    },
    {
      id: "ps11-ex9",
      title: "Science practice: research design",
      type: "mc",
      instructions: `<p>A researcher wants to know how memory changes with age. In 2026, she tests one group of 20-year-olds,
      one group of 50-year-olds, and one group of 80-year-olds. Which research design is she using, and what is one
      problem with it?</p>`,
      choices: [
        "Longitudinal; some people may drop out of the study over the years",
        "Case study; the results describe only one person in great depth",
        "Experiment; she randomly assigned the people to different ages",
        "Cross-sectional; the groups grew up in different times (cohort effects)"
      ],
      answer: 3,
      explain: "Testing different age groups at one time is a cross-sectional study. The groups grew up in different times, with different schools and technology, so a cohort effect may explain the differences.",
      hints: [
        "She tests different people at the same time.",
        "People who were born 60 years apart had very different childhoods."
      ]
    },
    {
      id: "ps11-ex10",
      title: "Science practice: Harlow's study",
      type: "mc",
      instructions: `<p>In Harlow's study, baby monkeys could choose a wire mother that gave milk or a cloth mother that gave no
      milk. The monkeys spent most of their time with the cloth mother. What is the best conclusion?</p>`,
      choices: [
        "Monkeys need milk more than comfort.",
        "Contact comfort matters for attachment, not only food.",
        "Monkeys imprint on the first moving object they see after birth.",
        "Attachment depends only on genes."
      ],
      answer: 1,
      explain: "The monkeys preferred the soft mother even though she gave no food. This shows that contact comfort is a key part of attachment.",
      hints: [
        "The cloth mother did not give food, but the monkeys still chose her.",
        "What did the cloth mother give that the wire mother did not?"
      ]
    }
  ]
});
