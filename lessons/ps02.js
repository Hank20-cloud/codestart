// AP Psychology, chapter 2 — Unit 0: Statistics and ethics. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps02", {
  intro: `
    <p>After a study, researchers have a lot of numbers. <strong>Statistics</strong> are tools to describe these numbers and to decide
    if a result is real or only luck. Researchers also must follow rules of <strong>ethics</strong> (what is right and fair), so that
    people and animals in studies are protected.</p>
    <p>On the AP exam you must read a described result (for example "the correlation was -0.8" or "p &lt; .05") and say what it
    means. You must also name the ethical rule that a study follows or breaks. These skills appear in multiple-choice questions and in
    both free-response questions.</p>
  `,
  lessons: [
    {
      id: "ps02-l1",
      title: "Measures of central tendency",
      html: `
        <p><strong>Descriptive statistics</strong> describe a set of data. A <strong>measure of central tendency</strong> is one number
        that shows the "middle" or typical score.</p>
        <p>Example: Five friends read books this year: 2, 3, 3, 4, 18.</p>
        <table>
          <tr><th>Measure</th><th>How to find it</th><th>In the example</th></tr>
          <tr><td><strong>Mean</strong></td><td>add all scores and divide by the number of scores (the average)</td><td>30 / 5 = 6</td></tr>
          <tr><td><strong>Median</strong></td><td>the middle score when the scores are in order</td><td>3</td></tr>
          <tr><td><strong>Mode</strong></td><td>the score that appears most often</td><td>3</td></tr>
        </table>
        <p>An <strong>outlier</strong> is a score that is very far from the others, like the 18 above. Outliers pull the mean toward them.
        The median is not affected much. So when there are outliers, the median gives a better picture of the typical score.</p>
        <h3>Skewed distributions</h3>
        <p>A <strong>distribution</strong> is the pattern of all the scores. It is <strong>skewed</strong> when the scores are not balanced
        and form a long "tail" on one side.</p>
        <ul>
          <li><strong>Positive skew</strong> (skewed right): most scores are low, and a few very high scores make a tail to the right.
          Example: income in a town with a few very rich people. The mean is higher than the median.</li>
          <li><strong>Negative skew</strong> (skewed left): most scores are high, and a few very low scores make a tail to the left.
          Example: an easy test where most students score 90 or more. The mean is lower than the median.</li>
        </ul>
        <div class="tip">The skew is named after the tail, not after the big hump. The mean always moves toward the tail.</div>
      `
    },
    {
      id: "ps02-l2",
      title: "Variation and the normal curve",
      html: `
        <p>A <strong>measure of variation</strong> shows how spread out the scores are.</p>
        <ul>
          <li>The <strong>range</strong> is the highest score minus the lowest score. In 2, 3, 3, 4, 18 the range is 18 - 2 = 16.
          One outlier can make the range very big.</li>
          <li>The <strong>standard deviation</strong> shows how far, on average, scores are from the mean. A small standard deviation means
          the scores are close together. A large one means they are spread out. Example: two classes both have a mean of 75, but in
          Class A almost everyone scored 70 to 80 (small standard deviation), and in Class B scores go from 40 to 100 (large standard deviation).</li>
        </ul>
        <h3>The normal curve</h3>
        <p>The <strong>normal curve</strong> (also called the bell curve) is a symmetrical, bell-shaped distribution. Most scores are near the
        middle, and few are at the ends. In a normal curve, the mean, median, and mode are the same. Many traits, like height and IQ scores,
        are close to normal.</p>
        <table>
          <tr><th>Distance from the mean</th><th>Percent of scores</th></tr>
          <tr><td>within 1 standard deviation (above and below)</td><td>about 68%</td></tr>
          <tr><td>within 2 standard deviations</td><td>about 95%</td></tr>
          <tr><td>within 3 standard deviations</td><td>about 99.7%</td></tr>
        </table>
        <p>A <strong>percentile</strong> shows the percent of scores that are at or below a score. If Ravi is in the 84th percentile, he scored
        as well as or better than 84% of people. A score 1 standard deviation above the mean is at about the 84th percentile
        (50% below the mean + 34% between the mean and +1).</p>
        <p>Example: IQ tests have a mean of 100 and a standard deviation of 15. About 68% of people score between 85 and 115, and about 95%
        score between 70 and 130.</p>
        <div class="tip">Learn 68-95-99.7. Half of 68 is 34, half of 95 is 47.5. Many AP questions need only these numbers.</div>
      `
    },
    {
      id: "ps02-l3",
      title: "Correlation and regression toward the mean",
      html: `
        <p>The <strong>correlation coefficient</strong> (written <em>r</em>) is a number from -1.00 to +1.00 that shows how strongly two
        variables are related.</p>
        <ul>
          <li>The <strong>sign</strong> shows the <strong>direction</strong>. A <strong>positive correlation</strong> (+) means both variables
          go up together: more study time, higher grades. A <strong>negative correlation</strong> (-) means one goes up while the other goes down:
          more hours on a phone at night, fewer hours of sleep.</li>
          <li>The <strong>number</strong> shows the <strong>strength</strong>. The closer to 1 (or -1), the stronger. Near 0 means no relationship.
          So -0.80 is <em>stronger</em> than +0.40.</li>
        </ul>
        <p>A <strong>scatterplot</strong> is a graph with one dot for each person. If the dots form a tight line going up, the correlation is strongly
        positive. If they go down, it is negative. If they are spread like a cloud, it is near zero.</p>
        <p>An <strong>illusory correlation</strong> is a relationship that people believe exists, but does not. Example: Nadia believes that more babies
        are born when there is a full moon, because she remembers the busy full-moon nights and forgets the busy normal nights.</p>
        <p><strong>Regression toward the mean</strong> means that very unusual scores are usually followed by scores closer to the average.
        Example: a basketball player has his best game ever, then plays a more normal game the next week. This is not a "curse"; it is
        just chance balancing out.</p>
        <div class="tip">Do not confuse strength with direction. A negative correlation is not "weak" or "bad." And remember: any
        correlation, even +0.99, does not prove cause.</div>
      `
    },
    {
      id: "ps02-l4",
      title: "Is the result real? Significance and effect size",
      html: `
        <p><strong>Inferential statistics</strong> help researchers decide whether a result from a sample is true for the population,
        or whether it happened only by chance.</p>
        <ul>
          <li><strong>Statistical significance</strong> means the result is very unlikely to be caused by chance. Psychologists usually use
          <strong>p &lt; .05</strong>: there is less than a 5% probability of getting a result this big if the IV really had no effect.</li>
          <li><strong>Effect size</strong> shows how <em>big</em> a difference or relationship is. A result can be significant but very small.
          Example: a large study finds a new app raises test scores by 1 point out of 100. It may be significant, but the effect size is tiny.</li>
          <li><strong>Sample size</strong> matters. Results from big samples are more reliable than results from small ones, and averages from
          many cases change less than averages from a few cases.</li>
          <li><strong>Generalization</strong>: we can apply the results only to the kind of people who were in the sample. A study with only
          college students in one country may not apply to children or to other cultures.</li>
        </ul>
        <div class="tip">When a question asks if a study can be generalized, check how big the sample was and whether it was chosen by random
        sampling from the population.</div>
      `
    },
    {
      id: "ps02-l5",
      title: "Research ethics with people",
      html: `
        <p>The <strong>APA (American Psychological Association)</strong> has rules called an ethics code. Before a study begins, an
        <strong>IRB (institutional review board)</strong>, a group at a university or hospital, reads the plan and must approve it.</p>
        <table>
          <tr><th>Rule</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Informed consent</strong></td><td>people learn what the study involves and agree to take part, before it starts</td><td>adults sign a form that explains the tasks and risks</td></tr>
          <tr><td><strong>Assent</strong> (for minors)</td><td>children under 18 agree themselves, and a parent or guardian gives consent</td><td>a 12-year-old says yes, and her father signs the form</td></tr>
          <tr><td><strong>Protection from harm</strong></td><td>no lasting physical or psychological harm; risks must be as small as possible</td><td>a study may cause mild stress, but not real fear or injury</td></tr>
          <tr><td><strong>Confidentiality</strong></td><td>information about each person is kept private; results are shared without names</td><td>the report says "Participant 14," not "Ana Silva"</td></tr>
          <tr><td><strong>Right to withdraw</strong></td><td>people may stop at any time without a penalty</td><td>a student leaves halfway and still gets her class credit</td></tr>
          <tr><td><strong>Deception</strong></td><td>hiding the true purpose; allowed only when needed and when it causes no harm</td><td>saying a study is about "taste" when it is about mood</td></tr>
          <tr><td><strong>Debriefing</strong></td><td>after the study, explaining the true purpose and any deception</td><td>at the end, the researcher explains the study was about mood</td></tr>
        </table>
        <p>Some famous older studies, like Milgram's obedience studies and Zimbardo's prison study, caused stress that ethics rules
        today would probably not allow. These studies helped create the stricter rules.</p>
        <div class="tip">If a study uses deception, the answer that "fixes" it is almost always debriefing.</div>
      `
    },
    {
      id: "ps02-l6",
      title: "Research ethics with animals",
      html: `
        <p>Psychologists sometimes study animals, for example to learn how the brain works or how learning happens, when the same
        study would be impossible or wrong with humans.</p>
        <ul>
          <li>Animals must be treated <strong>humanely</strong> (with care), with good housing, food, and medical care.</li>
          <li>Pain and stress must be as small as possible, and there must be a good scientific reason for the study.</li>
          <li>A committee at the institution must review and approve animal studies.</li>
        </ul>
        <p>People still debate animal research. Supporters say it led to treatments that help both humans and animals. Critics ask
        whether it is right to cause any harm to animals for human benefit.</p>
        <div class="tip">Animals cannot give informed consent, so the protection comes from the review committee and the care rules.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps02-ex1",
      title: "Best measure with an outlier",
      type: "mc",
      instructions: `<p>Seven workers in a small shop earn these weekly amounts in dollars: 500, 520, 540, 550, 560, 580, and 5,000 (the owner).
      Which number best shows the typical weekly pay?</p>`,
      choices: [
        "The mean, because it uses every score",
        "The range, because it shows the spread",
        "The median, because the outlier does not pull it",
        "The standard deviation, because it is the most exact"
      ],
      answer: 2,
      explain: "The owner's 5,000 is an outlier that pulls the mean far up. The median (550) stays near the typical worker's pay.",
      hints: [
        "One score is very different from the others.",
        "Which measure of central tendency is not pulled by an outlier?"
      ]
    },
    {
      id: "ps02-ex2",
      title: "Skew",
      type: "mc",
      instructions: `<p>A teacher gives a very easy quiz. Most students score between 9 and 10 out of 10, but three students score 2, 3, and 3.
      How is this distribution best described?</p>`,
      choices: [
        "Negatively skewed, with the mean lower than the median",
        "Positively skewed, with the mean higher than the median",
        "A normal curve, with the mean equal to the median",
        "Negatively skewed, with the mean higher than the median"
      ],
      answer: 0,
      explain: "The few low scores make a tail on the left, so the distribution is negatively skewed. The mean moves toward the tail, so it is lower than the median.",
      hints: [
        "Where is the tail: at the low end or at the high end?",
        "The skew is named for the tail, and the mean moves toward the tail."
      ]
    },
    {
      id: "ps02-ex3",
      title: "Normal curve (Science Practice)",
      type: "mc",
      instructions: `<p>Scores on a memory test form a normal curve with a mean of 50 and a standard deviation of 10. About what percent of people
      score between 40 and 60?</p>`,
      choices: [
        "34%",
        "50%",
        "95%",
        "68%"
      ],
      answer: 3,
      explain: "40 and 60 are 1 standard deviation below and above the mean. About 68% of scores are within 1 standard deviation of the mean.",
      hints: [
        "How many standard deviations from the mean are 40 and 60?",
        "Use the 68-95-99.7 rule for 1 standard deviation."
      ]
    },
    {
      id: "ps02-ex4",
      title: "Strongest correlation",
      type: "mc",
      instructions: `<p>Four studies report these correlation coefficients. Which shows the strongest relationship between two variables?</p>`,
      choices: [
        "+0.45",
        "-0.82",
        "+0.10",
        "-0.30"
      ],
      answer: 1,
      explain: "Strength depends on how close the number is to 1, not on the sign. 0.82 is closest to 1, so -0.82 is the strongest.",
      hints: [
        "Ignore the plus or minus sign when you judge strength.",
        "Which number is closest to 1.00?"
      ]
    },
    {
      id: "ps02-ex5",
      title: "Lucky shirt",
      type: "mc",
      instructions: `<p>Joon-ho believes his team wins more often when he wears his blue shirt. He remembers the wins in that shirt but
      forgets the losses. When his friend counts all the games, there is no relationship at all. Which concept best explains Joon-ho's belief?</p>`,
      choices: [
        "Regression toward the mean",
        "Statistical significance",
        "Illusory correlation",
        "Negative correlation"
      ],
      answer: 2,
      explain: "An illusory correlation is a relationship we believe in that does not really exist, often because we remember the cases that fit.",
      hints: [
        "The real data show no relationship.",
        "Which term means a relationship that only seems to exist?"
      ]
    },
    {
      id: "ps02-ex6",
      title: "After a great score",
      type: "mc",
      instructions: `<p>Fatima usually scores about 70 on her chemistry quizzes. One week she scores 98, her best ever. On the next quiz
      she scores 74. Which concept best explains this drop?</p>`,
      choices: [
        "Regression toward the mean",
        "Illusory correlation",
        "Hindsight bias",
        "Positive skew"
      ],
      answer: 0,
      explain: "An unusually high score is usually followed by a score closer to the person's average. Nothing went wrong; the 98 was the unusual score.",
      hints: [
        "The 98 was very far from her usual score.",
        "Unusual scores tend to move back toward the average."
      ]
    },
    {
      id: "ps02-ex7",
      title: "Read the result (Science Practice)",
      type: "mc",
      instructions: `<p>In an experiment, students who used flash cards scored higher than students who reread their notes. The researchers
      report p &lt; .01. What does this result mean?</p>`,
      choices: [
        "The flash cards raised scores by at least 1%.",
        "The result can be generalized to every student in the world.",
        "The difference is large and very important in real life.",
        "The difference is very unlikely to be caused by chance alone."
      ],
      answer: 3,
      explain: "A small p-value means the result is statistically significant: it is unlikely to be only chance. It does not tell how big the effect is; that is effect size.",
      hints: [
        "A p-value is about probability and chance.",
        "Significance is not the same as effect size or generalization."
      ]
    },
    {
      id: "ps02-ex8",
      title: "Children in a study",
      type: "mc",
      instructions: `<p>A researcher wants to study how 10-year-olds solve puzzles. The parents have signed consent forms. What else should the
      researcher get before the study begins?</p>`,
      choices: [
        "Debriefing from the children",
        "Assent from the children",
        "A promise from the children never to withdraw",
        "Permission to share the children's names in the report"
      ],
      answer: 1,
      explain: "Minors cannot give full informed consent, so parents give consent and the children give assent (their own agreement). Children still keep the right to withdraw.",
      hints: [
        "The children themselves should also agree.",
        "There is a special word for a minor's agreement to take part."
      ]
    },
    {
      id: "ps02-ex9",
      title: "Hidden purpose",
      type: "mc",
      instructions: `<p>Dr. Moreau tells participants they are testing a new video game. In fact, she is studying whether losing a game
      makes people less helpful. The IRB allows this. What must she do at the end of the study?</p>`,
      choices: [
        "Get informed consent",
        "Keep the true purpose secret forever",
        "Debrief the participants",
        "Use random assignment"
      ],
      answer: 2,
      explain: "When a study uses deception, the researcher must debrief participants afterward: explain the real purpose and why deception was used.",
      hints: [
        "The participants were not told the truth about the study.",
        "What is the step where the researcher explains everything after the study?"
      ]
    },
    {
      id: "ps02-ex10",
      title: "Private information",
      type: "mc",
      instructions: `<p>In a survey about stress, a researcher posts the answers of each student online, with their names, so other teachers can
      help them. Which ethical rule did she break?</p>`,
      choices: [
        "Debriefing",
        "Assent",
        "Right to withdraw",
        "Confidentiality"
      ],
      answer: 3,
      explain: "Confidentiality means information about participants must be kept private. Posting answers with names breaks this rule, even with a good reason.",
      hints: [
        "The problem is about who can see the students' answers.",
        "Which rule keeps participants' information private?"
      ]
    }
  ]
});
