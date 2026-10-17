// AP Psychology, chapter 19 — Exam skills: the exam format, multiple-choice strategies, and the AAQ and EBQ free-response questions.
// Topics follow the AP Psychology Course and Exam Description, Barron's AP Psychology Premium, and Myers' Psychology for the AP Course.
// The text is our own. Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps19", {
  intro: `
    <p>Knowing psychology is the first step. The second step is knowing how the AP exam asks about it. This chapter explains
    the format of the exam, strategies for multiple-choice questions, and how to write the two free-response answers:
    the <strong>AAQ</strong> (Article Analysis Question) and the <strong>EBQ</strong> (Evidence-Based Question).</p>
    <p>Both free-response questions are scored with a rubric (a list of points). Each point is for one specific thing, so
    students who know exactly what each part asks for can earn many points with short, clear answers.</p>
  `,
  lessons: [
    {
      id: "ps19-l1",
      title: "The AP Psychology exam format",
      html: `
        <div class="tip"><strong>Important:</strong> the College Board can change the exam. Always check the newest information on
        <strong>AP Central</strong> and in the <em>Course and Exam Description</em> (CED), and ask your teacher.</div>
        <p>Since 2025, the exam has two sections and takes about <strong>2 hours and 40 minutes</strong>. It is a
        <strong>fully digital</strong> exam: you take it on a computer in the College Board's <strong>Bluebook</strong> app, and your
        answers are sent automatically when the time ends.</p>
        <table>
          <tr><th>Section</th><th>What</th><th>Time</th><th>Part of score</th></tr>
          <tr><td>I. Multiple choice</td><td><strong>75 questions</strong>, each with 4 choices (A-D)</td><td>90 minutes</td><td>about 2/3 (66.7%)</td></tr>
          <tr><td>II. Free response</td><td><strong>AAQ</strong> (7 points) and <strong>EBQ</strong> (7 points)</td><td>70 minutes (about 25 for the AAQ, 45 for the EBQ)</td><td>about 1/3 (33.3%)</td></tr>
        </table>
        <p>The free-response times are only <strong>suggestions</strong>: about 25 minutes for the AAQ (the first 10 minutes to read the
        study) and about 45 minutes for the EBQ (the first 15 minutes to read the sources). You can move between the two questions.</p>
        <p>There is no penalty for wrong answers, so <strong>answer every multiple-choice question</strong>.
        You have a little more than 1 minute for each one.</p>
        <h3>The four science practices</h3>
        <ul>
          <li><strong>Concept application</strong>: use a term in a new scenario (most multiple-choice questions).</li>
          <li><strong>Research methods and design</strong>: methods, variables, ethics, sampling.</li>
          <li><strong>Data interpretation</strong>: read a table, graph, or statistic (about 10% of multiple-choice questions).</li>
          <li><strong>Argumentation</strong>: make a claim and support it with evidence (tested in the EBQ).</li>
        </ul>
      `
    },
    {
      id: "ps19-l2",
      title: "Multiple-choice strategies",
      html: `
        <p>AP multiple-choice questions rarely ask "What is the definition of X?". They usually describe a person in a situation
        and ask which concept fits best. This is <strong>application</strong>.</p>
        <h3>A step-by-step method</h3>
        <ol>
          <li><strong>Read the stem carefully.</strong> The stem is the question part. Underline key words, such as "best explains",
          "a behaviorist would say", "NOT", or "dependent variable".</li>
          <li><strong>Predict the answer</strong> before you look at the choices. If your prediction is in the list, it is probably right.</li>
          <li><strong>Eliminate</strong> (cross out) choices that are clearly wrong. Often two choices are easy to remove.</li>
          <li><strong>Watch for absolute words</strong> such as <em>always</em>, <em>never</em>, <em>all</em>, <em>proves</em>. Psychology
          rarely says something is true for everyone, so these choices are usually wrong.</li>
          <li><strong>Pick the best answer</strong>, not just a true statement. A choice can be true but not answer the question.</li>
        </ol>
        <h3>Data and graph questions</h3>
        <ul>
          <li>Read the title, the axis labels, and the units first.</li>
          <li>Find the variables: what was changed (independent) and what was measured (dependent)?</li>
          <li>Only conclude what the data show. A <strong>correlation</strong> does not show cause and effect. A small sample or a
          non-random sample limits <strong>generalization</strong>.</li>
        </ul>
        <div class="tip">If you are stuck, mark the question, choose your best guess, and move on. Come back at the end if you have time.</div>
      `
    },
    {
      id: "ps19-l3",
      title: "The Article Analysis Question (AAQ)",
      html: `
        <p>In the AAQ you read a short summary of one research study. It usually has an introduction, participants, method,
        and results and discussion. Then you answer short parts. Each part is its own small question, not one long essay.</p>
        <table>
          <tr><th>Part</th><th>What you do</th><th>Where to look</th></tr>
          <tr><td>Research method</td><td>name the method: experiment, correlational study, case study, survey, naturalistic observation, meta-analysis...</td><td>method section</td></tr>
          <tr><td>Operational definition</td><td>explain <strong>exactly how</strong> a variable was measured (for example, "stress was measured by a score on a 10-item questionnaire")</td><td>method section</td></tr>
          <tr><td>Statistics</td><td>interpret a result: a difference between means, a correlation, statistical significance</td><td>results</td></tr>
          <tr><td>Ethical guideline</td><td>identify one guideline shown in the study <strong>and describe how the researchers applied it</strong>: informed consent, debriefing, confidentiality, protection from harm, IRB (Institutional Review Board) approval</td><td>method section</td></tr>
          <tr><td>Generalizability</td><td>say if the results can apply to a larger population, and why, using the sample (size, age, culture, random or not)</td><td>participants</td></tr>
          <tr><td>Support for the hypothesis</td><td>explain how a finding supports or does not support the hypothesis, using data from the study (often worth 2 points)</td><td>results and introduction</td></tr>
        </table>
        <p>Some versions also ask you to apply a psychological concept from the course to the study.</p>
        <div class="tip">Always use details <strong>from the study</strong>. "The sample was 40 college students from one university,
        so the results may not generalize to older adults" earns a point. "The sample was too small" alone usually does not.</div>
      `
    },
    {
      id: "ps19-l4",
      title: "The Evidence-Based Question (EBQ)",
      html: `
        <p>In the EBQ you read <strong>three</strong> short research sources (labeled Source 1, Source 2, and Source 3) on one topic.
        You need to use only <strong>two</strong> of them. The question has <strong>three parts</strong>:</p>
        <ol>
          <li><strong>Part A: make a claim.</strong> A claim is one clear sentence that answers the question and can be supported by the sources.
          Example: "Regular exercise reduces symptoms of depression in teenagers."</li>
          <li><strong>Part B:</strong> (i) give <strong>evidence</strong> from one source and <strong>cite</strong> it. Evidence is a specific
          finding, such as a result or a number. (ii) <strong>Explain how the evidence supports the claim</strong>, using a psychological
          perspective, theory, concept, or research finding.</li>
          <li><strong>Part C:</strong> do the same again, with evidence from a <strong>different source</strong> and an explanation that
          uses a <strong>different concept</strong> from the one you used in Part B.</li>
        </ol>
        <p>You can cite a source in two ways: in parentheses, "...(Source 2).", or inside the sentence, "According to Source 2, ...".</p>
        <table>
          <tr><th>Weak reasoning</th><th>Strong reasoning</th></tr>
          <tr><td>"Source 2 supports my claim because it is about exercise."</td><td>"In Source 2, students who ran three times a week had lower depression scores. Exercise increases endorphins and other neurotransmitters linked to mood, which supports the claim that exercise reduces depression."</td></tr>
        </table>
        <div class="tip">Evidence must actually match your claim. If your claim is about teenagers, evidence from a study of older adults
        is weaker. Choose the two sources that fit your claim best.</div>
      `
    },
    {
      id: "ps19-l5",
      title: "Writing tips for free response",
      html: `
        <ul>
          <li><strong>No introduction or conclusion is needed.</strong> Answer each part directly.</li>
          <li><strong>Write in full sentences.</strong> A list of words or a drawing does not earn points.</li>
          <li><strong>Use terms correctly.</strong> Readers check that you understand the term, not only that you wrote it.</li>
          <li><strong>Apply to the scenario.</strong> Connect every term to a detail from the study or source.
          A correct definition with no connection usually earns nothing.</li>
          <li><strong>Label each part</strong> (A, B, C...) so the reader can find your answer.</li>
          <li><strong>Do not contradict yourself.</strong> If you write two different answers for one part, the reader may not give the point.</li>
          <li>Readers score your psychology, not your grammar or style. Short and clear is best.</li>
        </ul>
        <div class="tip">A simple pattern for every part: <em>term</em> + <em>what it means</em> + <em>how it appears in this study</em>.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps19-ex1",
      title: "Which response earns the point? (method)",
      type: "mc",
      instructions: `<p>A summary says: "Researchers randomly assigned 80 teenagers to play a calm game or a violent game for 30 minutes,
      then measured how much hot sauce each one put in a stranger's food." The question asks students to identify the research method.
      Which response would earn the point?</p>`,
      choices: ["\"This is a correlational study because game type and hot sauce amount are related.\"",
        "\"It is an experiment because the teens were randomly assigned to a game condition.\"",
        "\"This is a case study because it looks closely at teenagers.\"",
        "\"This is a survey because the teenagers answered questions about games.\""],
      answer: 1,
      explain: "Random assignment to conditions and manipulation of a variable mean the study is an experiment, and the answer connects the method to a study detail.",
      hints: ["Did the researchers manipulate something and use random assignment?", "The best answer names the method and gives the reason from the study."]
    },
    {
      id: "ps19-ex2",
      title: "Operational definition",
      type: "mc",
      instructions: `<p>A study tests whether sleep affects memory. The summary says participants slept either 4 or 8 hours, then studied
      a list of 30 words and wrote down as many as they could remember after 10 minutes. Which statement correctly identifies the
      operational definition of memory?</p>`,
      choices: ["Memory was the dependent variable that the researchers measured.",
        "Memory was measured by how many hours of sleep participants got.",
        "Memory was the number of words, out of 30, written down after 10 minutes.",
        "Memory is the ability to store and retrieve information over time."],
      answer: 2,
      explain: "An operational definition says exactly how a variable is measured in this study. Choice D is a general definition, not an operational one.",
      hints: ["An operational definition tells you exactly how something was measured.", "Look for the choice with a number and a procedure from this study."]
    },
    {
      id: "ps19-ex3",
      title: "Which evidence supports the claim?",
      type: "mc",
      instructions: `<p>A student writes the claim: "Social support reduces stress." Which piece of evidence best supports this claim?</p>`,
      choices: ["Source 1: Students who studied in groups got higher grades than students who studied alone.",
        "Source 2: Adults with more close friends had lower cortisol (a stress hormone) levels during a difficult task.",
        "Source 3: People who exercise daily report feeling happier.",
        "Source 2: Most participants in the study were between 25 and 40 years old."],
      answer: 1,
      explain: "This evidence links more social support (close friends) with lower stress (cortisol). The other choices are about grades, exercise, or the sample, not stress and support.",
      hints: ["The evidence must include both parts of the claim: social support and stress.", "Look for a finding about friends and a stress measure."]
    },
    {
      id: "ps19-ex4",
      title: "Generalizability",
      type: "mc",
      instructions: `<p>A study of 25 female volunteers from one private university in Japan finds that mindfulness training improved
      attention. Which response best explains whether the findings can be generalized?</p>`,
      choices: ["\"The findings can be generalized to everyone, because mindfulness always improves attention in people.\"",
        "\"The findings can be generalized to all students, because the researchers used a true experiment.\"",
        "\"The study is not ethical, so its findings cannot be generalized to anyone at all.\"",
        "\"The findings may not generalize to men or non-students, because all participants were female volunteers from one university.\""],
      answer: 3,
      explain: "Generalizability depends on the sample. This answer uses specific details of the sample (all female, volunteers, one university) to explain the limit.",
      hints: ["Generalization depends on who was in the sample.", "Avoid absolute words like \"always\" and \"everyone\"."]
    },
    {
      id: "ps19-ex5",
      title: "Ethical guideline",
      type: "mc",
      instructions: `<p>A summary says: "After the study, the researchers told participants the true purpose of the study, explained why
      they had been misled about the task, and answered their questions." Which ethical guideline does this describe?</p>`,
      choices: ["Debriefing", "Informed consent", "Confidentiality", "Random assignment"],
      answer: 0,
      explain: "Explaining the true purpose after the study, especially after deception, is debriefing. Informed consent happens before the study.",
      hints: ["When did this happen: before or after the study?", "This guideline happens at the end, and explains any deception."]
    },
    {
      id: "ps19-ex6",
      title: "Reading a result",
      type: "mc",
      instructions: `<p>A study finds a correlation of r = -0.62 between hours of screen time at night and hours of sleep in 300 teenagers.
      Which statement is a correct interpretation?</p>`,
      choices: ["Screen time at night causes teenagers to sleep less.",
        "Teenagers with more screen time at night tend to sleep fewer hours.",
        "There is almost no relationship between screen time and sleep.",
        "Teenagers with more screen time at night tend to sleep more hours."],
      answer: 1,
      explain: "A negative correlation means that as one variable goes up, the other tends to go down. A correlation does not prove cause, so choice A goes too far.",
      hints: ["A negative sign means the variables move in opposite directions.", "Be careful: a correlation alone cannot show cause and effect."]
    },
    {
      id: "ps19-ex7",
      title: "Using a concept",
      type: "mc",
      instructions: `<p>Claim: "Rewards can increase helpful behavior in children." Evidence: "In Source 1, children who got a sticker every time
      they shared toys shared twice as often after two weeks." Which explanation best uses a psychological concept to connect the evidence
      to the claim?</p>`,
      choices: ["\"Source 1 shows that the children who got stickers shared their toys more often.\"",
        "\"Source 1 supports the claim because it is a good study with many children in it.\"",
        "\"Stickers were positive reinforcement, so sharing increased, which supports the claim.\"",
        "\"The children were in the preoperational stage, so they could not share with others.\""],
      answer: 2,
      explain: "This explanation uses the correct concept (positive reinforcement) and connects it to both the evidence and the claim. Choice A only repeats the evidence.",
      hints: ["A full explanation needs a psychology term and a link to the evidence.", "Which operant conditioning term describes adding a reward to increase a behavior?"]
    },
    {
      id: "ps19-ex8",
      title: "Multiple-choice strategy",
      type: "mc",
      instructions: `<p>Javier reads a question and sees these four statements: (1) "Memories are always accurate"; (2) "Retrieval cues can help
      people recall information"; (3) "People never forget what they learn"; (4) "All memories are stored in the cerebellum".
      Which strategy helps him most to remove three statements quickly?</p>`,
      choices: ["Choose the longest answer", "Watch for absolute words such as always, never, and all",
        "Pick the answer that appeared most often on earlier questions", "Choose the first answer that sounds familiar"],
      answer: 1,
      explain: "Statements 1, 3, and 4 use absolute words (always, never, all), which are rarely true in psychology. This leaves statement 2.",
      hints: ["Look at the words that make a statement true for every case.", "Three of the statements have very strong, extreme words."]
    },
    {
      id: "ps19-ex9",
      title: "Hypothesis supported?",
      type: "mc",
      instructions: `<p>Hypothesis: "Students who take short breaks will solve more puzzles." Results: the break group solved a mean of 14 puzzles
      and the no-break group a mean of 9. The difference was statistically significant. Which response best explains if the hypothesis is supported?</p>`,
      choices: ["\"It is supported: the break group solved significantly more puzzles (mean 14 vs. 9).\"",
        "\"The hypothesis is supported because short breaks are always good for students.\"",
        "\"The hypothesis is not supported because 14 puzzles is not a large number.\"",
        "\"The hypothesis is proven true for all students in every school in the world.\""],
      answer: 0,
      explain: "A strong answer uses the actual data (the means and significance) to show the hypothesis is supported, without overclaiming.",
      hints: ["The best answer uses numbers from the results.", "Avoid answers that say \"proven\" or \"all\"."]
    },
    {
      id: "ps19-ex10",
      title: "Writing tip",
      type: "mc",
      instructions: `<p>Asked to explain how the evidence supports the claim, Amara writes only: "Cognitive dissonance: an uncomfortable feeling when
      thoughts and actions do not match." Why will her answer probably not earn the point?</p>`,
      choices: ["She did not write an introduction paragraph.",
        "She used the wrong term; cognitive dissonance is not a real psychology concept.",
        "She gave a correct definition but did not apply it to the evidence or claim.",
        "She did not write enough words to fill the page."],
      answer: 2,
      explain: "A definition alone does not earn the point. She must connect the term to the evidence in the source and to her claim.",
      hints: ["Her definition is correct. What is missing?", "Points come from applying the term to the scenario."]
    }
  ]
});
