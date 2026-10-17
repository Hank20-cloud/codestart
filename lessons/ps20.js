// AP Psychology, chapter 20 — Exam practice: mixed AP-style multiple-choice questions from all units (Units 0-5).
// Topics follow the AP Psychology Course and Exam Description, Barron's AP Psychology Premium, and Myers' Psychology for the AP Course.
// The text is our own. Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps20", {
  intro: `
    <p>This chapter is practice for the AP exam. It has 15 questions in the style of the real multiple-choice section.
    They mix all the units, from research methods (Unit 0) to disorders and treatment (Unit 5).</p>
    <p>Every question describes a scenario. Some questions ask you to read a study or a result, like the data questions on the
    real exam. Try to answer each one in about one minute.</p>
  `,
  lessons: [
    {
      id: "ps20-l1",
      title: "How to use this chapter",
      html: `
        <p>Use these questions like a small practice test.</p>
        <ul>
          <li><strong>Time yourself.</strong> On the real exam you have 90 minutes for 75 questions, so a little more than 1 minute each.</li>
          <li><strong>Answer first, then check.</strong> Do not open the hints until you have chosen an answer. Testing yourself is
          <strong>retrieval practice</strong>, one of the best ways to remember.</li>
          <li><strong>Read every explanation</strong>, even when you are right. You may have been right for the wrong reason.</li>
          <li><strong>Find your weak units.</strong> Write down which unit each wrong answer comes from, then go back to that chapter.</li>
          <li><strong>Space your practice.</strong> Do a few questions on different days instead of all of them the night before.
          This is the <strong>spacing effect</strong>.</li>
        </ul>
        <table>
          <tr><th>Questions</th><th>Unit</th></tr>
          <tr><td>1-3</td><td>Unit 0: research methods and statistics</td></tr>
          <tr><td>4-6</td><td>Unit 1: biological bases of behavior</td></tr>
          <tr><td>7-9</td><td>Unit 2: cognition</td></tr>
          <tr><td>10-11</td><td>Unit 3: development and learning</td></tr>
          <tr><td>12-13</td><td>Unit 4: social psychology and personality</td></tr>
          <tr><td>14-15</td><td>Unit 5: mental and physical health</td></tr>
        </table>
        <div class="tip">For each question, first decide which unit it belongs to. That quickly reduces the list of possible answers.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps20-ex1",
      title: "Science Practice: confounding variable",
      type: "mc",
      instructions: `<p>Dr. Okafor tests whether music helps people study. The music group studies in a bright, quiet library in the morning.
      The no-music group studies in a noisy cafeteria in the evening. The music group scores higher on a test. What is the biggest problem
      with this study?</p>`,
      choices: ["The study has no dependent variable.",
        "Room and time of day are confounding variables.",
        "The study uses a correlational method.",
        "The study has no independent variable that the researcher changes."],
      answer: 1,
      explain: "The groups differ in more than music (room, noise, time of day), so these confounding variables could explain the higher scores.",
      hints: ["Are the two groups the same in every way except music?", "Other differences between groups that could cause the result have a special name."]
    },
    {
      id: "ps20-ex2",
      title: "Science Practice: reading the data",
      type: "mc",
      instructions: `<p>Five students reported hours of sleep before a test: 6, 7, 7, 8, and 12. Which statement about these data is correct?</p>`,
      choices: ["The mode is 8, because 8 is the middle score.",
        "The median is 8, because 8 is the most common score.",
        "The mean is higher than the median because of the score of 12.",
        "The range is 5, from the lowest to the highest score."],
      answer: 2,
      explain: "The mean is 40 / 5 = 8, and the median is 7. The outlier 12 pulls the mean up above the median. The mode is 7 and the range is 6.",
      hints: ["Calculate the mean (add and divide by 5) and find the middle score.", "An extreme high score affects the mean more than the median."]
    },
    {
      id: "ps20-ex3",
      title: "Science Practice: what can be concluded?",
      type: "mc",
      instructions: `<p>A survey of 2,000 adults finds a correlation of r = +0.45 between the number of hours people volunteer and their life
      satisfaction scores. Which conclusion is best supported?</p>`,
      choices: ["Volunteering causes people to be more satisfied with life.",
        "Being satisfied with life causes people to volunteer.",
        "There is no relationship between volunteering and life satisfaction.",
        "People who volunteer more tend to report higher life satisfaction."],
      answer: 3,
      explain: "A positive correlation shows that the two variables tend to rise together. A survey cannot show which variable causes the other.",
      hints: ["Is this an experiment or a correlational study?", "Correlation shows a relationship, not cause and effect."]
    },
    {
      id: "ps20-ex4",
      title: "Brain damage",
      type: "mc",
      instructions: `<p>After a stroke, Mr. Haddad understands everything people say to him, but he struggles to produce words. His speech is
      slow and broken. Which brain area was most likely damaged?</p>`,
      choices: ["Broca's area", "Wernicke's area", "Hippocampus", "Occipital lobe"],
      answer: 0,
      explain: "Broca's area, in the left frontal lobe, controls speech production. Damage to Wernicke's area harms understanding of language.",
      hints: ["He understands language, but cannot produce it well.", "This area is in the left frontal lobe and is linked to making speech."]
    },
    {
      id: "ps20-ex5",
      title: "A neuron fires",
      type: "mc",
      instructions: `<p>A neuron receives many signals from other neurons. When the combined stimulation goes above a certain level, the neuron
      fires with full strength. If the stimulation stays below that level, it does not fire at all. Which principle does this describe?</p>`,
      choices: ["Reuptake", "Refractory period", "Plasticity", "All-or-none principle"],
      answer: 3,
      explain: "A neuron either fires completely or not at all, once the threshold is reached. This is the all-or-none principle.",
      hints: ["The neuron does not fire \"a little\".", "The name describes two options: everything or nothing."]
    },
    {
      id: "ps20-ex6",
      title: "Getting used to a smell",
      type: "mc",
      instructions: `<p>When Yuki enters her grandmother's kitchen, she notices a strong smell of garlic. After twenty minutes, she no longer
      notices it, even though the smell has not changed. Which concept best explains this?</p>`,
      choices: ["Sensory adaptation", "Absolute threshold", "Selective attention", "Transduction"],
      answer: 0,
      explain: "Sensory adaptation is reduced sensitivity to a stimulus that does not change. Her receptors respond less over time.",
      hints: ["The smell is the same, but her response to it got weaker.", "Sensory receptors \"adapt\" to constant stimulation."]
    },
    {
      id: "ps20-ex7",
      title: "A study plan",
      type: "mc",
      instructions: `<p>Chen and Ravi both study 6 hours for a test. Chen studies for 1 hour each day for 6 days. Ravi studies 6 hours the
      night before. A week later, Chen remembers much more. Which concept best explains this?</p>`,
      choices: ["Serial position effect", "Proactive interference", "Spacing effect", "Mood-congruent memory"],
      answer: 2,
      explain: "Spreading study over time (distributed practice) gives better long-term memory than cramming. This is the spacing effect.",
      hints: ["The total time is the same. What is different?", "Chen spread out his study sessions."]
    },
    {
      id: "ps20-ex8",
      title: "Judging by examples",
      type: "mc",
      instructions: `<p>After seeing many news stories about shark attacks, Gabriela believes that sharks are a bigger danger to swimmers than
      drowning, although drowning is far more common. Which concept best explains her judgment?</p>`,
      choices: ["Confirmation bias", "Availability heuristic", "Functional fixedness", "Mental set"],
      answer: 1,
      explain: "She judges how likely something is by how easily examples come to mind. Vivid news stories make shark attacks easy to remember.",
      hints: ["Her judgment depends on which examples are easy to remember.", "This heuristic is about what is \"available\" in memory."]
    },
    {
      id: "ps20-ex9",
      title: "Test quality",
      type: "mc",
      instructions: `<p>A company creates a new test of reading skill. Students take it twice, two weeks apart, and get almost the same scores
      each time. What does this show about the test?</p>`,
      choices: ["It has high validity.", "It is standardized.", "It has high reliability.", "It shows the Flynn effect."],
      answer: 2,
      explain: "Getting consistent scores when the test is taken again (test-retest) shows reliability. Validity means the test measures what it says it measures.",
      hints: ["The key word is \"same scores each time\".", "Consistency is one quality; accuracy is another."]
    },
    {
      id: "ps20-ex10",
      title: "Hidden toy",
      type: "mc",
      instructions: `<p>Baby Aisha, 4 months old, stops looking for a toy as soon as her father covers it with a blanket. At 10 months, she lifts
      the blanket to find the toy. According to Piaget, what has Aisha developed?</p>`,
      choices: ["Conservation", "Object permanence", "Egocentrism", "Stranger anxiety"],
      answer: 1,
      explain: "Object permanence is understanding that objects still exist when we cannot see them. It develops during Piaget's sensorimotor stage.",
      hints: ["She now knows the toy is still there under the blanket.", "This concept is about objects being \"permanent\"."]
    },
    {
      id: "ps20-ex11",
      title: "Taking something away",
      type: "mc",
      instructions: `<p>Every time Lukas cleans his room without being asked, his parents tell him that he does not have to do the dishes that evening.
      Lukas now cleans his room more often. Which concept best explains this?</p>`,
      choices: ["Positive reinforcement", "Positive punishment", "Negative punishment", "Negative reinforcement"],
      answer: 3,
      explain: "Removing an unpleasant task (dishes) increases the behavior (cleaning). Removing something to increase a behavior is negative reinforcement.",
      hints: ["Is something added or removed? Does the behavior increase or decrease?", "Removing something unpleasant to increase behavior is reinforcement, not punishment."]
    },
    {
      id: "ps20-ex12",
      title: "Blaming the person",
      type: "mc",
      instructions: `<p>A driver cuts in front of Nikhil on the highway. Nikhil thinks, "What a rude, careless person." He does not consider that
      the driver might be rushing to a hospital. Which concept best explains Nikhil's thought?</p>`,
      choices: ["Fundamental attribution error", "Self-serving bias in attribution", "Just-world phenomenon", "Mere exposure effect"],
      answer: 0,
      explain: "Nikhil explains another person's behavior by personality and ignores the situation. This is the fundamental attribution error.",
      hints: ["He explains the driver's behavior by who the driver is, not by the situation.", "This error is called \"fundamental\"."]
    },
    {
      id: "ps20-ex13",
      title: "Personality traits",
      type: "mc",
      instructions: `<p>On a Big Five personality test, Zara scores very high on a trait. She is organized, always on time, makes careful plans,
      and finishes her work before deadlines. Which trait is it?</p>`,
      choices: ["Openness to experience", "Conscientiousness", "Extraversion", "Agreeableness"],
      answer: 1,
      explain: "Conscientiousness is the Big Five trait for being organized, careful, responsible, and disciplined.",
      hints: ["Her behaviors are about being organized and responsible.", "This trait's name is related to the word \"conscience\"."]
    },
    {
      id: "ps20-ex14",
      title: "Stress over time",
      type: "mc",
      instructions: `<p>After months of extreme stress at work, Ibrahim's body seems to "run out" of resources. He is exhausted and catches
      colds again and again. According to Hans Selye, which stage is Ibrahim in?</p>`,
      choices: ["Alarm reaction", "Resistance", "Exhaustion", "Fight-or-flight response"],
      answer: 2,
      explain: "In Selye's general adaptation syndrome (GAS), long-term stress leads to the exhaustion stage, when the body's resources are low and illness is more likely.",
      hints: ["Selye's model has three stages. This is the last one.", "His body has used up its resources."]
    },
    {
      id: "ps20-ex15",
      title: "Matching a treatment",
      type: "mc",
      instructions: `<p>Esperanza has a strong fear of flying. Her therapist uses a headset that shows the inside of an airplane, then takeoff,
      then turbulence, while Esperanza practices staying calm. Which type of therapy is this?</p>`,
      choices: ["Psychodynamic therapy", "Virtual reality exposure therapy", "Aversive conditioning", "Person-centered (client-centered) therapy"],
      answer: 1,
      explain: "Showing the feared situation step by step with a virtual reality headset is virtual reality exposure therapy, a behavior therapy.",
      hints: ["She is exposed to the feared situation, but not a real one.", "The headset creates a \"virtual\" situation."]
    }
  ]
});
