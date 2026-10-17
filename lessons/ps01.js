// AP Psychology, chapter 1 — Unit 0: Research methods. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps01", {
  intro: `
    <p><strong>Psychology</strong> is the science of behavior (what people and animals do) and mental processes
    (what they think and feel). In this chapter you learn how psychologists ask questions and how they test their
    ideas with research, so that they do not have to trust guesses or common sense.</p>
    <p>Research methods are part of every unit on the AP exam. Many multiple-choice questions describe a study and ask
    you to name the method, the variables, or what the result really shows. One free-response question, the EBQ
    (evidence-based question), asks you to read real studies. So the words in this chapter are used all year.</p>
  `,
  lessons: [
    {
      id: "ps01-l1",
      title: "Psychology as a science, and its perspectives",
      html: `
        <p>Psychology uses the <strong>scientific method</strong>: people make an idea, test it with careful observation,
        and change the idea if the data do not support it. A scientist has a <strong>scientific attitude</strong>:
        curious, skeptical (asks "how do you know?"), and humble (ready to be wrong).</p>
        <h3>Perspectives</h3>
        <p>A <strong>perspective</strong> is a way of looking at behavior. Each perspective asks a different question.
        Imagine Daniel is very afraid of dogs. Each perspective explains this differently:</p>
        <table>
          <tr><th>Perspective</th><th>Main idea</th><th>Explanation of Daniel's fear</th></tr>
          <tr><td><strong>Biological</strong></td><td>the brain, nerves, hormones, and genes cause behavior</td><td>his amygdala (a fear center in the brain) reacts very strongly</td></tr>
          <tr><td><strong>Evolutionary</strong></td><td>behaviors that helped our ancestors survive and have children were passed on (natural selection)</td><td>fear of dangerous animals helped early humans stay alive</td></tr>
          <tr><td><strong>Cognitive</strong></td><td>thinking, memory, and beliefs guide behavior</td><td>he believes "all dogs bite"</td></tr>
          <tr><td><strong>Behavioral</strong></td><td>we learn behavior from rewards, punishments, and experience you can observe</td><td>a dog bit him when he was five, so he learned to fear dogs</td></tr>
          <tr><td><strong>Psychodynamic</strong></td><td>unconscious thoughts (thoughts we are not aware of) and childhood experiences shape behavior; it comes from Sigmund Freud</td><td>a hidden childhood conflict shows up as a fear of dogs</td></tr>
          <tr><td><strong>Humanistic</strong></td><td>people are good and want to grow and reach their potential; Carl Rogers and Abraham Maslow</td><td>he needs to feel safe and accepted before he can grow past the fear</td></tr>
          <tr><td><strong>Sociocultural</strong></td><td>culture, family, and other people shape behavior</td><td>in his community, dogs are seen as dirty and dangerous</td></tr>
        </table>
        <p>The <strong>biopsychosocial approach</strong> combines three levels: <em>biological</em> (genes, brain),
        <em>psychological</em> (thoughts, feelings, learning), and <em>social-cultural</em> (family, culture). Most
        psychologists today use this approach, because behavior almost always has many causes.</p>
        <div class="tip">On the AP exam, look for key words. "Genes" or "brain" means biological. "Survival" means evolutionary.
        "Thoughts" or "beliefs" means cognitive. "Rewards" or "learned" means behavioral. "Unconscious" means psychodynamic.
        "Growth" or "free will" means humanistic. "Culture" means sociocultural.</div>
      `
    },
    {
      id: "ps01-l2",
      title: "Why we need science: hindsight bias and overconfidence",
      html: `
        <p>Common sense often seems right, but it can fool us. Two errors show why we need careful research.</p>
        <ul>
          <li><strong>Hindsight bias</strong> is the feeling, after we learn a result, that we "knew it all along."
          Example: after her team loses, Aiko says, "I knew they would lose," but before the game she said they would win.</li>
          <li><strong>Overconfidence</strong> means we think we know more, or are more correct, than we really are.
          Example: Mateo is sure he will finish his essay in one hour. It takes him three hours.</li>
        </ul>
        <p>Because of these errors, psychologists do not trust "it is obvious." They test ideas with data.</p>
        <h3>Theory and hypothesis</h3>
        <ul>
          <li>A <strong>theory</strong> is a big explanation that organizes many observations. Example: "Lack of sleep
          hurts memory."</li>
          <li>A <strong>hypothesis</strong> is a testable prediction that comes from a theory. Example: "Students who sleep
          4 hours will remember fewer words than students who sleep 8 hours."</li>
          <li>A hypothesis must be <strong>falsifiable</strong>: it must be possible to show that it is wrong.
          "Invisible spirits change our mood, but no test can detect them" is not falsifiable, so it is not science.</li>
          <li>An <strong>operational definition</strong> is an exact description of how a variable will be measured.
          "Memory" could be defined as "the number of words out of 20 that a person writes down after 10 minutes."
          With operational definitions, other researchers can do the study again in the same way.</li>
        </ul>
        <div class="tip">If a free-response question asks for an operational definition, give a number or an action you can count,
        for example "the number of minutes spent on a phone," not just "phone use."</div>
      `
    },
    {
      id: "ps01-l3",
      title: "Experiments",
      html: `
        <p>An <strong>experiment</strong> is the only method that can show <strong>cause and effect</strong>. The researcher
        changes one thing and measures what happens, while keeping everything else the same.</p>
        <p>Example study: Dr. Okafor wants to know if music helps people study. Half the students study with music,
        half study in silence, and then everyone takes the same test.</p>
        <table>
          <tr><th>Term</th><th>Meaning</th><th>In the example</th></tr>
          <tr><td><strong>Independent variable (IV)</strong></td><td>the factor the researcher changes (manipulates)</td><td>music or silence</td></tr>
          <tr><td><strong>Dependent variable (DV)</strong></td><td>the factor that is measured; it may "depend" on the IV</td><td>the test score</td></tr>
          <tr><td><strong>Experimental group</strong></td><td>the group that gets the treatment</td><td>students who study with music</td></tr>
          <tr><td><strong>Control group</strong></td><td>the group that does not get the treatment; used for comparison</td><td>students who study in silence</td></tr>
          <tr><td><strong>Confounding variable</strong></td><td>another factor, not the IV, that could change the DV and spoil the result</td><td>if the music group studied in the morning and the silent group at night</td></tr>
        </table>
        <h3>Random assignment and random sampling</h3>
        <p>These two words sound similar but are very different.</p>
        <ul>
          <li><strong>Random sampling</strong> is how you choose the people for the study. Every person in the
          <strong>population</strong> (the whole group you want to learn about) has an equal chance to be in the
          <strong>sample</strong> (the people you actually study). This makes the sample <strong>representative</strong>,
          so you can <strong>generalize</strong> (apply the results) to the population.</li>
          <li><strong>Random assignment</strong> is how you put the chosen people into groups, for example by flipping a coin.
          This makes the groups similar at the start, so it controls confounding variables. Only experiments use random assignment.</li>
        </ul>
        <div class="tip">Sampling = who is <em>in</em> the study (helps generalize). Assignment = which <em>group</em> they go to
        (helps show cause and effect).</div>
      `
    },
    {
      id: "ps01-l4",
      title: "Bias in experiments: placebos and blind studies",
      html: `
        <p>What people expect can change the result of a study. Researchers use several tools to stop this.</p>
        <ul>
          <li>A <strong>placebo</strong> is a fake treatment, like a sugar pill, that has no real effect. The
          <strong>placebo effect</strong> happens when people improve only because they <em>believe</em> they got a real
          treatment. Example: Priya takes a sugar pill for a headache, believes it is medicine, and feels better.</li>
          <li><strong>Participant bias</strong> (also called participant expectations): people act differently because they know
          they are in a study or guess what the researcher wants.</li>
          <li><strong>Experimenter bias</strong>: the researcher's expectations change how they treat people or how they read the results,
          often without meaning to.</li>
        </ul>
        <table>
          <tr><th>Design</th><th>Who does not know which group each person is in?</th><th>Controls</th></tr>
          <tr><td><strong>Single-blind study</strong></td><td>the participants</td><td>participant bias and the placebo effect</td></tr>
          <tr><td><strong>Double-blind study</strong></td><td>the participants <em>and</em> the researchers who work with them</td><td>participant bias and experimenter bias</td></tr>
        </table>
        <p>Other problems: <strong>social desirability bias</strong> (people give answers that make them look good) and
        the <strong>Hawthorne effect</strong> (people change their behavior because they know they are watched).</p>
        <div class="tip">If a question says "the researcher who handed out the pills did not know which pills were real," the answer is
        double-blind, and it controls experimenter bias.</div>
      `
    },
    {
      id: "ps01-l5",
      title: "Non-experimental methods",
      html: `
        <p>Not every question can be tested with an experiment. It would be wrong, for example, to make children grow up
        poor to see the effect. Then researchers use other methods. These methods <strong>describe</strong> or
        <strong>predict</strong>, but they cannot prove cause and effect.</p>
        <h3>Correlational studies</h3>
        <p>A <strong>correlational study</strong> measures two variables to see if they are related. Researchers do not change
        anything. Example: students who sleep more tend to have higher grades.</p>
        <p><strong>Correlation does not mean causation.</strong> Maybe sleep raises grades. Maybe good grades reduce worry and help
        sleep. Or a <strong>third variable</strong>, like a calm home, causes both.</p>
        <h3>Descriptive methods</h3>
        <table>
          <tr><th>Method</th><th>What it is</th><th>Strength</th><th>Weakness</th></tr>
          <tr><td><strong>Case study</strong></td><td>a deep study of one person or a small group</td><td>rich detail; good for rare cases</td><td>cannot generalize to everyone</td></tr>
          <tr><td><strong>Naturalistic observation</strong></td><td>watching behavior in its normal setting without changing anything</td><td>real, natural behavior</td><td>no control; cannot show cause</td></tr>
          <tr><td><strong>Survey</strong></td><td>asking many people questions in a questionnaire or interview</td><td>fast; many people</td><td>wording effects and social desirability bias</td></tr>
        </table>
        <p>The <strong>wording effect</strong> means small changes in a question change the answers. "Should the city help
        people in need?" gets more "yes" answers than "Should the city spend more on welfare?"</p>
        <h3>Studying change over time</h3>
        <ul>
          <li><strong>Longitudinal study</strong>: the same people are studied again and again over many years.
          Strong, but slow and expensive, and some people drop out.</li>
          <li><strong>Cross-sectional study</strong>: people of different ages are studied at one time. Fast, but differences may come
          from the generation they grew up in, not from age.</li>
        </ul>
        <div class="tip">Ask yourself: did the researcher change a variable and use random assignment? If yes, it is an experiment.
        If no, it is not, and you cannot say "causes."</div>
      `
    },
    {
      id: "ps01-l6",
      title: "Data, replication, and peer review",
      html: `
        <ul>
          <li><strong>Quantitative data</strong> are numbers, for example a score from 1 to 10 or a reaction time in seconds.</li>
          <li><strong>Qualitative data</strong> are words and descriptions, for example the stories people tell in an interview.
          They give depth but are harder to compare.</li>
          <li>A <strong>meta-analysis</strong> is a study of many studies. The researcher combines the results of many earlier studies on
          one question to find the overall answer. Example: combining 80 studies about exercise and mood.</li>
          <li><strong>Replication</strong> means doing a study again, often with new participants or in a new place, to see if the
          result is the same. A result that replicates is more trustworthy.</li>
          <li><strong>Peer review</strong> means other experts read and check a study before a journal publishes it. They look for
          mistakes in the method and the conclusions.</li>
        </ul>
        <div class="tip">Operational definitions make replication possible: others must know exactly what you measured.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps01-ex1",
      title: "Perspectives",
      type: "mc",
      instructions: `<p>Lucía gets angry easily. A psychologist explains that Lucía learned this because, as a child, she got what she wanted
      every time she shouted. Which perspective is the psychologist using?</p>`,
      choices: [
        "Psychodynamic",
        "Behavioral",
        "Humanistic",
        "Evolutionary"
      ],
      answer: 1,
      explain: "The behavioral perspective explains behavior through learning from rewards. Shouting was rewarded, so it was learned. The psychodynamic view would point to unconscious conflicts instead.",
      hints: [
        "The explanation is about something that happened again and again and was rewarded.",
        "Which perspective focuses on learning from rewards and punishments?"
      ]
    },
    {
      id: "ps01-ex2",
      title: "Knew it all along",
      type: "mc",
      instructions: `<p>Before an election, Kwame was not sure who would win. After the results came out, he told his friends,
      "It was obvious. Anyone could see that she would win." Which concept best explains this?</p>`,
      choices: [
        "Overconfidence",
        "Social desirability bias",
        "Hindsight bias",
        "The placebo effect"
      ],
      answer: 2,
      explain: "Hindsight bias is the feeling, after learning an outcome, that we knew it all along. Overconfidence is about being too sure before the result is known.",
      hints: [
        "Notice when Kwame feels sure: before or after he knew the result?",
        "The concept means \"I knew it all along.\""
      ]
    },
    {
      id: "ps01-ex3",
      title: "Find the variables (Science Practice)",
      type: "mc",
      instructions: `<p>Dr. Haddad gives one group of students a sweet drink and another group plain water. Thirty minutes later,
      she counts how many math problems each student solves correctly in 10 minutes. What is the dependent variable?</p>`,
      choices: [
        "The type of drink",
        "The 30 minutes of waiting",
        "The group that drinks water",
        "The number of problems solved"
      ],
      answer: 3,
      explain: "The dependent variable is what the researcher measures. The type of drink is the independent variable, and the water group is the control group.",
      hints: [
        "The dependent variable is measured, not changed.",
        "What does Dr. Haddad count at the end?"
      ]
    },
    {
      id: "ps01-ex4",
      title: "Assignment or sampling",
      type: "mc",
      instructions: `<p>A researcher chooses 200 students from her school. She then flips a coin for each student to decide whether
      the student will use a new study app or the old one. Why does she flip the coin?</p>`,
      choices: [
        "To make the two groups similar at the start, so differences come from the app",
        "To make sure the sample represents all students in the country",
        "To keep the participants from knowing which app they use",
        "To get an operational definition of studying"
      ],
      answer: 0,
      explain: "Flipping a coin to place people into groups is random assignment. It makes the groups similar and controls confounding variables. Representing a population is the job of random sampling.",
      hints: [
        "The coin decides which group each student goes to, not who is in the study.",
        "Random assignment controls confounding variables."
      ]
    },
    {
      id: "ps01-ex5",
      title: "Blind studies",
      type: "mc",
      instructions: `<p>In a study of a new sleep pill, neither the participants nor the nurses who give out the pills know who gets
      the real pill and who gets a sugar pill. What is the main purpose of this design?</p>`,
      choices: [
        "To allow random sampling of the population",
        "To turn the study into a detailed case study",
        "To reduce both participant and researcher bias",
        "To make the results qualitative, not numbers"
      ],
      answer: 2,
      explain: "This is a double-blind study. Because nobody who works with the participants knows the groups, neither their expectations nor the participants' expectations can change the results.",
      hints: [
        "Two kinds of people do not know the groups here.",
        "This is a double-blind design. What two biases does it stop?"
      ]
    },
    {
      id: "ps01-ex6",
      title: "Correlation and cause (Science Practice)",
      type: "mc",
      instructions: `<p>A study finds that teenagers who eat breakfast every day have higher grades than teenagers who skip breakfast.
      The researchers only asked students about their habits and looked at their grades. What can they conclude?</p>`,
      choices: [
        "Eating breakfast causes higher grades, so all students should eat it.",
        "Breakfast and grades are related, but this does not show cause.",
        "Higher grades cause students to eat breakfast more often.",
        "The result is a placebo effect, because students expected it."
      ],
      answer: 1,
      explain: "The researchers did not change any variable, so this is a correlational study. A third variable, such as a well-organized family, could cause both breakfast and good grades.",
      hints: [
        "Did the researchers change anything, or only measure?",
        "Correlation does not mean causation."
      ]
    },
    {
      id: "ps01-ex7",
      title: "Choose the method",
      type: "mc",
      instructions: `<p>Dr. Lindqvist wants to know how children play when no adult is in charge. She sits quietly at a public playground
      for many weeks and writes down what the children do, without talking to them. Which method is she using?</p>`,
      choices: [
        "Field experiment",
        "Cross-sectional survey",
        "Case study",
        "Naturalistic observation"
      ],
      answer: 3,
      explain: "She watches behavior in its normal setting and changes nothing. That is naturalistic observation. A case study would study one child in depth.",
      hints: [
        "She does not ask questions and does not change anything.",
        "Where does the watching happen: in a lab or in a natural setting?"
      ]
    },
    {
      id: "ps01-ex8",
      title: "Survey problems",
      type: "mc",
      instructions: `<p>A school survey asks, "Do you always do your homework, like a responsible student?" Almost every student answers "yes,"
      but teachers say many students often miss homework. What problem best explains the result?</p>`,
      choices: [
        "Social desirability bias",
        "Hindsight bias (the I-knew-it-all-along effect)",
        "Random assignment",
        "Replication"
      ],
      answer: 0,
      explain: "Students gave the answer that makes them look good. The wording of the question also pushes them toward \"yes.\"",
      hints: [
        "Students want to look like good students.",
        "Which bias is about giving answers that make you look good?"
      ]
    },
    {
      id: "ps01-ex9",
      title: "Change over time",
      type: "mc",
      instructions: `<p>Researchers want to know how memory changes with age. They test the memory of one group of 20-year-olds, one group
      of 50-year-olds, and one group of 80-year-olds, all in the same month. Which design is this?</p>`,
      choices: [
        "Longitudinal study",
        "Meta-analysis",
        "Cross-sectional study",
        "Double-blind experiment"
      ],
      answer: 2,
      explain: "A cross-sectional study compares people of different ages at one point in time. A longitudinal study would follow the same people for 60 years.",
      hints: [
        "Are these the same people tested many times, or different people tested once?",
        "Different age groups, one time: which design is that?"
      ]
    },
    {
      id: "ps01-ex10",
      title: "Combining studies",
      type: "mc",
      instructions: `<p>Dr. Tanaka finds 65 published studies about whether video games affect attention. She uses statistics to combine
      all their results into one overall answer. What is she doing?</p>`,
      choices: [
        "Replication",
        "Peer review",
        "Naturalistic observation",
        "Meta-analysis"
      ],
      answer: 3,
      explain: "A meta-analysis combines the results of many earlier studies. Replication would mean doing one study again herself.",
      hints: [
        "She does not collect new data from people.",
        "Which term means \"a study of many studies\"?"
      ]
    }
  ]
});
