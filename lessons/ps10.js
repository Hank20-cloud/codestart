// AP Psychology, chapter 10 — Unit 2: Intelligence and testing (theories of intelligence, IQ tests,
// test construction, reliability, validity, bias, nature and nurture, and mindset).
// Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps10", {
  intro: `
    <p>What is intelligence, and can we measure it? Psychologists disagree. Some say intelligence is one general
    ability. Others say there are many different kinds. This chapter explains the main theories, how intelligence
    tests were built, and how psychologists decide if a test is good and fair.</p>
    <p>On the AP exam, you must know the theories and researchers, the IQ formula, the normal curve, and the
    difference between reliability and validity. Reliability and validity also appear in research questions in
    every unit, so they are worth learning well.</p>
  `,
  lessons: [
    {
      id: "ps10-l1",
      title: "Theories of intelligence",
      html: `
        <p><strong>Intelligence</strong> is the ability to learn from experience, solve problems, and adapt to new situations.</p>
        <h3>One general ability or many?</h3>
        <table>
          <tr><th>Theory</th><th>Researcher</th><th>Main idea</th></tr>
          <tr><td><strong>General intelligence (g)</strong></td><td>Charles <strong>Spearman</strong></td><td>one general ability underlies all mental tasks. People who do well on one kind of test often do well on others. Spearman used <strong>factor analysis</strong>, a statistical method that finds groups of scores that go together.</td></tr>
          <tr><td><strong>Multiple intelligences</strong></td><td>Howard <strong>Gardner</strong></td><td>there are about 8 separate intelligences, such as linguistic (words), logical-mathematical, musical, spatial, bodily-kinesthetic (movement), interpersonal (understanding others), intrapersonal (understanding yourself), and naturalist (nature).</td></tr>
          <tr><td><strong>Triarchic theory</strong></td><td>Robert <strong>Sternberg</strong></td><td>three kinds: <strong>analytical</strong> (school problem solving), <strong>creative</strong> (new ideas, new situations), and <strong>practical</strong> (everyday tasks, "street smarts").</td></tr>
        </table>
        <p>Example: Yuki gets high grades in every subject. This supports the idea of g. Her brother Kenji is an average
        student but a brilliant dancer. Gardner would say Kenji has high bodily-kinesthetic intelligence.</p>
        <p>Gardner's theory is popular in schools, but critics say there is little research evidence for separate
        intelligences, and that abilities like music may be talents, not intelligences.</p>
        <h3>Emotional intelligence</h3>
        <p><strong>Emotional intelligence</strong> is the ability to notice, understand, manage, and use emotions, both your
        own and other people's. Example: Leila notices her friend is upset before the friend says anything, and she
        calms down quickly when she is angry.</p>
        <h3>Fluid and crystallized intelligence</h3>
        <ul>
          <li><strong>Fluid intelligence:</strong> the ability to think quickly and solve new problems. It tends to
          decrease slowly in later adulthood. Example: solving a new logic puzzle.</li>
          <li><strong>Crystallized intelligence:</strong> knowledge and skills built up over life, like vocabulary. It tends
          to stay the same or increase with age. Example: a grandfather who knows many words and facts.</li>
        </ul>
        <div class="tip">Fluid "flows" to new problems. Crystallized is "solid" knowledge you have collected.</div>
      `
    },
    {
      id: "ps10-l2",
      title: "The history of intelligence tests",
      html: `
        <h3>Binet and mental age</h3>
        <p>In France in the early 1900s, Alfred <strong>Binet</strong> made a test to find children who needed extra help in
        school. He used the idea of <strong>mental age</strong>: the level of performance that is typical for children of a
        certain age. Example: a 7-year-old who does as well as a typical 9-year-old has a mental age of 9.</p>
        <p>Binet did not think his test measured a fixed, inborn ability. He wanted it to help children.</p>
        <h3>Stanford-Binet and the IQ formula</h3>
        <p>Lewis Terman at Stanford University changed Binet's test for American students. It became the
        <strong>Stanford-Binet</strong> test. It used the <strong>intelligence quotient (IQ)</strong>:</p>
        <p><strong>IQ = (mental age / chronological age) x 100</strong></p>
        <p>Chronological age is your real age in years. Example: a 10-year-old with a mental age of 12 has an IQ of
        (12 / 10) x 100 = 120. A 10-year-old with a mental age of 10 has an IQ of 100.</p>
        <p>This formula does not work well for adults. A 40-year-old does not have a higher "mental age" than a 20-year-old.</p>
        <h3>Wechsler tests and deviation IQ</h3>
        <p>David <strong>Wechsler</strong> made the most widely used tests today: the <strong>WAIS</strong> (Wechsler Adult
        Intelligence Scale) and the <strong>WISC</strong> (Wechsler Intelligence Scale for Children). They give an overall
        score and also separate scores for areas like verbal comprehension, working memory, and processing speed.</p>
        <p>Modern tests use a <strong>deviation IQ</strong>: your score is compared to the scores of other people your age.
        It shows how far above or below the average you are.</p>
        <div class="tip">Practice the IQ formula: mental age 6, chronological age 8. (6 / 8) x 100 = 75.</div>
      `
    },
    {
      id: "ps10-l3",
      title: "Building a good test",
      html: `
        <h3>Standardization and norms</h3>
        <p><strong>Standardization</strong> means giving a test in the same way to everyone, and comparing scores to a
        large, representative group that took the test before (the <strong>standardization sample</strong>).
        The scores of this group are the <strong>norms</strong>. Example: your score means more when you know how other
        students your age scored.</p>
        <p>Intelligence scores form a <strong>normal curve</strong> (a bell-shaped curve). The mean (average) is
        <strong>100</strong> and the standard deviation (the usual distance from the mean) is <strong>15</strong>.</p>
        <table>
          <tr><th>IQ range</th><th>Percent of people (about)</th></tr>
          <tr><td>85 to 115 (within 1 standard deviation)</td><td>68%</td></tr>
          <tr><td>70 to 130 (within 2 standard deviations)</td><td>95%</td></tr>
          <tr><td>55 to 145 (within 3 standard deviations)</td><td>99.7%</td></tr>
        </table>
        <p>The <strong>Flynn effect</strong> is the rise in average intelligence test scores over the 20th century in many
        countries. James Flynn found it. Because of it, tests must be re-standardized (given new norms) from time to time.
        Better nutrition, more education, and more complex environments may explain it.</p>
        <h3>Achievement and aptitude tests</h3>
        <ul>
          <li><strong>Achievement test:</strong> measures what you have already learned. Example: a final exam in chemistry.</li>
          <li><strong>Aptitude test:</strong> predicts how well you will learn or perform in the future. Example: a test
          that predicts success in college.</li>
        </ul>
        <h3>Reliability</h3>
        <p><strong>Reliability</strong> means the test gives <strong>consistent</strong> results.</p>
        <ul>
          <li><strong>Test-retest reliability:</strong> the same person gets a similar score when taking the test again later.</li>
          <li><strong>Split-half reliability:</strong> scores on one half of the test (for example, odd questions) match scores on the other half (even questions).</li>
        </ul>
        <h3>Validity</h3>
        <p><strong>Validity</strong> means the test <strong>measures what it says it measures</strong>, or predicts what it should predict.</p>
        <ul>
          <li><strong>Construct validity:</strong> the test really measures the idea (construct) it is meant to measure.
          Example: a creativity test should measure creativity, not just vocabulary.</li>
          <li><strong>Predictive validity:</strong> scores predict a future behavior. Example: a driving aptitude test
          predicts who will drive safely.</li>
        </ul>
        <div class="tip">A bathroom scale that is always 5 kilograms too heavy is <strong>reliable</strong> (same result every
        time) but <strong>not valid</strong> (wrong result). A test can be reliable without being valid, but it cannot be
        valid without being reliable.</div>
      `
    },
    {
      id: "ps10-l4",
      title: "Fairness: test bias and stereotype threat",
      html: `
        <p>A test has <strong>bias</strong> (test bias) if it predicts unfairly for one group, or if some questions need
        knowledge from one culture. Example: a question about a sport that is common in one country but unknown in another
        measures culture, not intelligence. Such a test has <strong>cultural bias</strong>.</p>
        <p>Psychologists also ask whether a test predicts equally well for all groups. If it predicts future school success
        equally well for every group, it is not biased in the scientific sense, even if group averages are different.</p>
        <h3>Stereotype threat</h3>
        <p>A <strong>stereotype</strong> is a general belief about a group of people. <strong>Stereotype threat</strong> is the
        worry that you will confirm a negative stereotype about your group. This worry can lower your test performance.</p>
        <p>Example: before a math test, girls are told "boys usually do better on this test." The girls score lower than girls
        who were not told this. When the test is described as fair to everyone, the difference gets smaller.</p>
        <div class="tip">Stereotype threat is a situation effect, not an ability difference. Changing the situation can reduce it.</div>
      `
    },
    {
      id: "ps10-l5",
      title: "Nature, nurture, and the range of intelligence",
      html: `
        <h3>Heredity and environment</h3>
        <p>Psychologists study intelligence with <strong>twin studies</strong> and <strong>adoption studies</strong>.</p>
        <ul>
          <li><strong>Identical twins</strong> (same genes) have more similar intelligence scores than fraternal twins, even
          when raised apart. This shows genes matter.</li>
          <li><strong>Adopted children's</strong> scores are more like their <strong>biological</strong> parents' scores than their
          adoptive parents' scores, and this becomes stronger as they grow older. This also shows genes matter.</li>
          <li>But children moved from very poor environments to good ones often gain in scores. This shows environment matters.</li>
        </ul>
        <p><strong>Heritability</strong> is the part of the <em>differences</em> among people in a <em>group</em> that can be
        explained by genes. It is <strong>not</strong> about one person. "Intelligence is about 50% heritable" does not mean
        that half of Ana's intelligence comes from her genes. It also does not mean that differences between groups are caused by genes.</p>
        <p>Environment effects include nutrition, schooling, poverty, early stimulation, and stress. When the environment is
        very similar for everyone, heritability goes up, because the remaining differences come mostly from genes.</p>
        <h3>The extremes</h3>
        <ul>
          <li><strong>Intellectual disability</strong> (called <em>intellectual developmental disorder</em> in the DSM-5-TR): a condition with
          limited intellectual functioning (often an IQ score of about 70 or below) and difficulty with everyday adaptive skills
          (like self-care and social skills), beginning during the developmental period (childhood and adolescence). Down syndrome is one cause.</li>
          <li><strong>Giftedness:</strong> very high intellectual ability, often defined as an IQ score of about 130 or above.
          Lewis Terman studied gifted children for many years and found they were usually healthy and successful.</li>
        </ul>
        <h3>Growth mindset and fixed mindset</h3>
        <p>Carol <strong>Dweck</strong> studied beliefs about ability.</p>
        <ul>
          <li><strong>Fixed mindset:</strong> the belief that intelligence cannot change. Example: "I am just bad at math."</li>
          <li><strong>Growth mindset:</strong> the belief that intelligence can grow with effort and good strategies.
          Example: "I cannot solve this yet, but practice will help."</li>
        </ul>
        <p>Students with a growth mindset tend to try harder after failure and learn more.</p>
        <div class="tip">On the exam, any sentence like "heritability tells us how much of one person's IQ comes from genes"
        is wrong. Heritability is about variation in groups.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps10-ex1",
      title: "Theories of intelligence",
      type: "mc",
      instructions: `<p>Rafael cannot remember formulas well in school, but he can fix any engine, find cheap deals, and solve
      problems at his family's shop. Which theory best describes his strength?</p>`,
      choices: [
        "Spearman's general intelligence (g)",
        "Sternberg's practical intelligence",
        "Fluid intelligence",
        "Emotional intelligence"
      ],
      answer: 1,
      explain: "Sternberg's practical intelligence is the ability to handle everyday, real-world problems. Spearman's g would predict similar performance in school and outside school.",
      hints: [
        "Rafael is good at everyday, real-life problems.",
        "Sternberg described three kinds of intelligence. One of them is like \"street smarts\"."
      ]
    },
    {
      id: "ps10-ex2",
      title: "The IQ formula",
      type: "mc",
      instructions: `<p>Using the original IQ formula, what is the IQ of an 8-year-old child whose mental age is 10?</p>`,
      choices: [
        "80",
        "100",
        "110",
        "125"
      ],
      answer: 3,
      explain: "IQ = (mental age / chronological age) x 100 = (10 / 8) x 100 = 125.",
      hints: [
        "Divide mental age by chronological age, then multiply by 100.",
        "10 divided by 8 is 1.25."
      ]
    },
    {
      id: "ps10-ex3",
      title: "Fluid and crystallized intelligence",
      type: "mc",
      instructions: `<p>Mrs. Nakamura is 75 years old. She is slower than her grandson at a new video game, but she beats him
      easily at a vocabulary game. Which statement best explains this?</p>`,
      choices: [
        "Her crystallized intelligence has stayed strong, while her fluid intelligence has declined.",
        "Her fluid intelligence has grown, while her crystallized intelligence has declined.",
        "She has a fixed mindset about video games, so she gives up.",
        "She is showing the Flynn effect, because test scores rise over time."
      ],
      answer: 0,
      explain: "Crystallized intelligence (built-up knowledge like vocabulary) stays strong or grows with age. Fluid intelligence (fast thinking on new problems) tends to decline in older adults.",
      hints: [
        "One game needs new, fast problem solving. The other needs knowledge she has collected.",
        "Which kind of intelligence is like solid, stored knowledge?"
      ]
    },
    {
      id: "ps10-ex4",
      title: "Reliability",
      type: "mc",
      instructions: `<p>Zainab takes a personality test on Monday and gets one result. She takes the same test on Friday and gets
      a very different result. Nothing important changed in her life during the week. What is the main problem with this test?</p>`,
      choices: [
        "It has low predictive validity.",
        "It is an aptitude test.",
        "It has low test-retest reliability.",
        "It shows stereotype threat."
      ],
      answer: 2,
      explain: "A test with good test-retest reliability gives similar scores when the same person takes it again. Very different scores show low reliability.",
      hints: [
        "The problem is that the results are not consistent.",
        "Which term means getting the same result when you take the test again?"
      ]
    },
    {
      id: "ps10-ex5",
      title: "Validity",
      type: "mc",
      instructions: `<p>A company gives a test to new workers. Workers with high scores later become the best salespeople, and
      workers with low scores do poorly. What does this show about the test?</p>`,
      choices: [
        "It has high split-half reliability.",
        "It has high predictive validity.",
        "It is biased.",
        "It is an achievement test."
      ],
      answer: 1,
      explain: "Predictive validity means test scores correctly predict a future behavior, here sales success.",
      hints: [
        "The test scores matched what happened later.",
        "Which kind of validity is about predicting the future?"
      ]
    },
    {
      id: "ps10-ex6",
      title: "Stereotype threat",
      type: "mc",
      instructions: `<p>Before a hard math test, one group of students is reminded of a negative stereotype about their group's
      math ability. Another similar group is not reminded. The first group scores lower. Which concept best explains this?</p>`,
      choices: [
        "Stereotype threat",
        "Heritability",
        "The Flynn effect",
        "Test-retest reliability"
      ],
      answer: 0,
      explain: "Stereotype threat is worry about confirming a negative stereotype about your group. The worry itself can lower performance.",
      hints: [
        "The only difference between the groups was a reminder about a stereotype.",
        "Which concept is about worry over confirming a belief about your group?"
      ]
    },
    {
      id: "ps10-ex7",
      title: "Heritability",
      type: "mc",
      instructions: `<p>A news article says: "Studies show intelligence is about 50% heritable." Which statement is the most
      accurate interpretation?</p>`,
      choices: [
        "Half of each person's intelligence comes from genes and half from the environment.",
        "Differences in intelligence between two countries are 50% caused by genes.",
        "Environment has no effect on intelligence.",
        "In the group studied, about half of the differences in scores are linked to genes."
      ],
      answer: 3,
      explain: "Heritability describes how much of the variation within a group is linked to genes. It says nothing about one person, and it does not explain differences between groups.",
      hints: [
        "Heritability is never about a single person.",
        "It describes differences among people within one group."
      ]
    },
    {
      id: "ps10-ex8",
      title: "Growth mindset",
      type: "mc",
      instructions: `<p>After a low grade on a chemistry test, Tomás says, "I just need better study methods and more practice.
      My brain can get better at this." Which idea does Tomás show?</p>`,
      choices: [
        "A fixed mindset",
        "Crystallized intelligence",
        "A growth mindset",
        "Emotional intelligence"
      ],
      answer: 2,
      explain: "Carol Dweck's growth mindset is the belief that abilities can improve with effort and strategy. A fixed mindset would say \"I am just bad at chemistry.\"",
      hints: [
        "Does Tomás believe his ability can change?",
        "Carol Dweck named two mindsets. One of them believes in improvement."
      ]
    },
    {
      id: "ps10-ex9",
      title: "Science practice: the normal curve",
      type: "mc",
      instructions: `<p>A modern intelligence test has a mean of 100 and a standard deviation of 15. About what percent of people
      score between 85 and 115?</p>`,
      choices: [
        "34%",
        "50%",
        "68%",
        "95%"
      ],
      answer: 2,
      explain: "85 to 115 is within one standard deviation above and below the mean. In a normal curve, about 68% of scores fall there.",
      hints: [
        "85 is one standard deviation below 100, and 115 is one standard deviation above.",
        "About 95% fall within two standard deviations, so this answer is smaller."
      ]
    },
    {
      id: "ps10-ex10",
      title: "Science practice: research method",
      type: "mc",
      instructions: `<p>A researcher compares the intelligence scores of identical twins who were raised in different homes
      with the scores of fraternal twins raised in the same home. What is the main purpose of this design?</p>`,
      choices: [
        "To test the split-half reliability of the intelligence test",
        "To separate the effects of genes and environment",
        "To measure stereotype threat",
        "To create new norms for the test"
      ],
      answer: 1,
      explain: "Twin studies compare people with more or fewer shared genes and more or less shared environment, so researchers can estimate the effects of nature and nurture.",
      hints: [
        "Identical twins share all their genes. Fraternal twins share about half.",
        "This design is about nature and nurture."
      ]
    }
  ]
});
