// AP Psychology, chapter 16 — Unit 5: Health and positive psychology. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps16", {
  intro: `
    <p>This chapter is about how the mind and the body affect each other. <strong>Health psychology</strong> studies how
    thoughts, feelings, and behavior influence physical health. <strong>Positive psychology</strong> studies what helps people
    do well: happiness, strengths, and resilience. Together they explain why stress can make us sick, and what protects us.</p>
    <p>On the AP exam, expect scenarios about types of stressors, the stages of the General Adaptation Syndrome, coping
    strategies, and happiness research. You must also connect stress to the nervous system and hormones you learned in Unit 1.</p>
  `,
  lessons: [
    {
      id: "ps16-l1",
      title: "Stress and stressors",
      barrons: "Chapter 16, Health Psychology: Stress (page 179)",
      html: `
        <p><strong>Stress</strong> is the process by which we notice and respond to events that we judge as threatening or challenging.
        A <strong>stressor</strong> is the event that causes stress. How we <em>appraise</em> (judge) the event matters: a test can feel like a
        challenge to one student and a threat to another.</p>
        <table>
          <tr><th>Type of stressor</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Catastrophes</strong></td><td>large, unexpected disasters that affect many people</td><td>an earthquake, a war, a flood</td></tr>
          <tr><td><strong>Significant life changes</strong></td><td>big personal changes, good or bad</td><td>moving to a new country, a death in the family, starting college</td></tr>
          <tr><td><strong>Daily hassles</strong></td><td>small, everyday annoyances that add up</td><td>traffic, a slow internet connection, losing your keys</td></tr>
        </table>
        <h3>Good stress and bad stress</h3>
        <ul>
          <li><strong>Eustress</strong> is positive stress that motivates and challenges us. Example: excitement before a sports final.</li>
          <li><strong>Distress</strong> is negative stress that harms us, especially when it is strong or lasts a long time.</li>
        </ul>
        <div class="tip">Daily hassles may sound small, but over time they can harm health as much as big events.</div>
      `
    },
    {
      id: "ps16-l2",
      title: "The body's stress response",
      barrons: "Chapter 16, Health Psychology: Stress (page 179)",
      html: `
        <h3>Fight-or-flight</h3>
        <p>Walter Cannon described the <strong>fight-or-flight response</strong>: the <strong>sympathetic nervous system</strong> quickly prepares the body to fight or run away.
        The heart beats faster, breathing speeds up, and the adrenal glands release adrenaline (epinephrine).</p>
        <p>A slower system releases <strong>cortisol</strong>, a stress hormone from the adrenal glands. Cortisol gives the body extra energy, but high cortisol for a long time harms health.</p>
        <h3>General Adaptation Syndrome (GAS)</h3>
        <p>Hans <strong>Selye</strong> described the body's response to long stress in three stages:</p>
        <table>
          <tr><th>Stage</th><th>What happens</th><th>Example: a family loses its income</th></tr>
          <tr><td>1. <strong>Alarm</strong></td><td>sudden activation of the sympathetic nervous system; the body is shocked</td><td>the first days: shock, fast heartbeat, no sleep</td></tr>
          <tr><td>2. <strong>Resistance</strong></td><td>the body stays highly aroused and uses its resources to cope</td><td>weeks of working hard and searching for jobs</td></tr>
          <tr><td>3. <strong>Exhaustion</strong></td><td>resources run out; the person is more open to illness</td><td>months later, the parents often get sick and feel worn out</td></tr>
        </table>
        <h3>Tend-and-befriend</h3>
        <p>Shelley <strong>Taylor</strong> described the <strong>tend-and-befriend response</strong>: under stress, people (especially women) may care for others (<em>tend</em>)
        and seek support from others (<em>befriend</em>). Example: after a storm, Grace gathers her children and calls her neighbors to help each other.</p>
        <h3>Stress and illness</h3>
        <ul>
          <li><strong>Stress and the immune system:</strong> long-term stress weakens the immune system, the body's defense against disease. Stressed people catch colds more often and heal more slowly.
          The field that studies this is <strong>psychoneuroimmunology</strong>.</li>
          <li><strong>Heart disease:</strong> people with a <strong>Type A</strong> personality (competitive, impatient, hard-driving, easily angered) have a higher risk of heart disease. Anger and hostility are the most harmful parts.
          <strong>Type B</strong> people are more relaxed. People with a <strong>Type D</strong> ("distressed") personality, who feel much negative emotion and hide it from others, also have a higher risk.</li>
        </ul>
        <div class="tip">GAS order: Alarm, Resistance, Exhaustion ("A-R-E").</div>
      `
    },
    {
      id: "ps16-l3",
      title: "Coping with stress",
      barrons: "Chapter 16, Health Psychology: Stress (page 179)",
      html: `
        <p><strong>Coping</strong> means reducing stress with emotional, mental, or behavioral methods.</p>
        <table>
          <tr><th>Coping style</th><th>Meaning</th><th>Example: a big exam next week</th></tr>
          <tr><td><strong>Problem-focused coping</strong></td><td>dealing directly with the stressor or changing the situation</td><td>making a study plan and asking the teacher for help</td></tr>
          <tr><td><strong>Emotion-focused coping</strong></td><td>managing your emotional reaction when you cannot change the stressor</td><td>talking with a friend or listening to calm music to relax</td></tr>
        </table>
        <p>Problem-focused coping works best when we can control the situation. Emotion-focused coping helps when we cannot (for example, after a death in the family),
        but it is harmful if it means avoiding a problem we could solve.</p>
        <h3>What protects us</h3>
        <ul>
          <li><strong>Perceived control:</strong> believing that you have some control over events reduces stress. People who feel no control may develop <em>learned helplessness</em>.</li>
          <li><strong>Social support:</strong> feeling loved and supported by friends and family. It lowers blood pressure and stress hormones, and people with close relationships live longer.</li>
          <li><strong>Aerobic exercise:</strong> long, steady exercise that increases heart and lung fitness, such as running, swimming, or biking. It reduces stress, depression, and anxiety.</li>
          <li><strong>Mindfulness meditation:</strong> paying attention to the present moment without judging it, for example calmly noticing your breathing. It can reduce stress and improve attention.</li>
          <li><strong>Optimism:</strong> expecting good things. Optimists tend to cope better and stay healthier.</li>
        </ul>
        <h3>Adverse childhood experiences</h3>
        <p><strong>ACEs (adverse childhood experiences)</strong> are stressful or traumatic events before age 18, such as abuse, neglect, or violence in the home.
        The more ACEs a person has, the higher their risk of later health problems, such as heart disease, depression, and substance use. Support from caring adults can lower this risk.</p>
        <div class="tip">Ask: "Can the person change the stressor?" Yes means problem-focused coping is the better choice.</div>
      `
    },
    {
      id: "ps16-l4",
      title: "Positive psychology and well-being",
      barrons: "Chapter 16, Health Psychology: Positive Psychology (page 181)",
      html: `
        <p><strong>Positive psychology</strong> is the scientific study of human strengths and what helps people and communities flourish (do well).
        Martin <strong>Seligman</strong> is its main founder. He asked psychologists to study not only problems but also strengths.</p>
        <ul>
          <li><strong>Subjective well-being:</strong> how happy and satisfied people feel with their own life. It is measured by self-report ("How satisfied are you with your life?").</li>
          <li><strong>Positive emotions</strong> such as joy, hope, and gratitude broaden our thinking and build resources (broaden-and-build theory).</li>
          <li><strong>Gratitude:</strong> feeling and showing thanks. People who write down things they are thankful for often report more happiness.</li>
          <li><strong>Character strengths and virtues:</strong> positive traits found across cultures, such as wisdom, courage, kindness, fairness, self-control, and hope.</li>
          <li><strong>Resilience:</strong> the ability to recover and adapt well after stress or hard times. Example: after her family's shop burns down, Layla stays hopeful and helps rebuild.</li>
          <li><strong>Post-traumatic growth:</strong> positive psychological change after a very hard experience, such as a deeper appreciation of life or closer relationships.</li>
        </ul>
        <div class="tip">Resilience = bouncing back to normal. Post-traumatic growth = coming out of a crisis better than before in some ways.</div>
      `
    },
    {
      id: "ps16-l5",
      title: "What affects happiness",
      barrons: "Chapter 16, Health Psychology: Positive Psychology (page 181)",
      html: `
        <h3>Two comparison effects</h3>
        <ul>
          <li><strong>Adaptation-level phenomenon:</strong> we get used to a new situation, and it becomes our new "normal." Good and bad changes feel strong at first but fade.
          Example: Nikolai is thrilled with his new phone, but after two months it feels ordinary.</li>
          <li><strong>Relative deprivation:</strong> feeling worse off than the people we compare ourselves with. Example: Sara is happy with her grade until she learns her friends all scored higher.</li>
        </ul>
        <h3>Happiness factors</h3>
        <table>
          <tr><th>Linked to more happiness</th><th>Weakly linked or not linked</th></tr>
          <tr><td>close, supportive relationships</td><td>age</td></tr>
          <tr><td>meaningful work and goals, being in "flow"</td><td>gender</td></tr>
          <tr><td>good sleep and exercise</td><td>physical attractiveness</td></tr>
          <tr><td>gratitude, optimism, and a sense of meaning, including faith communities for many people</td><td>more money, once basic needs are met</td></tr>
        </table>
        <p>Money increases happiness when it helps people escape poverty, but after basic needs are met, more money adds much less.
        Happiness is also partly heritable (influenced by genes), so people have different typical levels.</p>
        <div class="tip">The adaptation-level phenomenon explains why winning a prize or buying something new does not make people happy for long.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps16-ex1",
      title: "Small problems add up",
      type: "mc",
      instructions: `<p>Every day, Nour misses her bus, her phone battery dies, and her little brothers are noisy while she studies. After a month she feels tired and irritable.
      Which type of stressor best describes her situation?</p>`,
      choices: [
        "Catastrophes",
        "Significant life changes",
        "Daily hassles",
        "Eustress"
      ],
      answer: 2,
      explain: "Small, everyday annoyances that add up over time are daily hassles.",
      hints: [
        "Are these events large or small?",
        "These are small, everyday problems."
      ]
    },
    {
      id: "ps16-ex2",
      title: "Worn out",
      type: "mc",
      instructions: `<p>For a year, Rafael has worked two jobs while caring for his sick father. At first he coped well, but now he feels drained and gets sick often.
      According to Selye, which stage of the General Adaptation Syndrome is Rafael in now?</p>`,
      choices: [
        "Alarm",
        "Exhaustion",
        "Resistance",
        "Fight-or-flight"
      ],
      answer: 1,
      explain: "After a long period of resistance, his body's resources are used up, and he is more open to illness. That is the exhaustion stage.",
      hints: [
        "He coped well at first, which was an earlier stage.",
        "In the last stage, resources run out and illness becomes more likely."
      ]
    },
    {
      id: "ps16-ex3",
      title: "Making a plan",
      type: "mc",
      instructions: `<p>Isabela is stressed because her group project is behind schedule. She calls a meeting, divides the tasks, and sets deadlines.
      Which kind of coping is she using?</p>`,
      choices: [
        "Emotion-focused coping",
        "Tend-and-befriend",
        "Learned helplessness",
        "Problem-focused coping"
      ],
      answer: 3,
      explain: "Isabela deals directly with the cause of the stress by changing the situation. That is problem-focused coping.",
      hints: [
        "Is she changing the situation or only her feelings?",
        "She attacks the problem directly."
      ]
    },
    {
      id: "ps16-ex4",
      title: "A dangerous personality",
      type: "mc",
      instructions: `<p>Viktor is very competitive, always in a hurry, and gets angry quickly when others are slow. According to health psychology, Viktor has a higher risk of:</p>`,
      choices: [
        "Heart disease, because he shows Type A behavior",
        "Heart disease, because he shows Type B behavior",
        "Post-traumatic growth, because he is competitive",
        "Higher subjective well-being, because he is hard-driving"
      ],
      answer: 0,
      explain: "Viktor fits the Type A pattern. Type A people, especially those with much anger and hostility, have a higher risk of heart disease.",
      hints: [
        "Competitive, impatient, and easily angry describes one personality type.",
        "Which type is linked to heart disease, A or B?"
      ]
    },
    {
      id: "ps16-ex5",
      title: "Calling friends",
      type: "mc",
      instructions: `<p>When a fire forces families out of their apartment building, Mariam gathers the children together, makes sure they are fed, and calls her friends
      to organize help. Which stress response does she show?</p>`,
      choices: [
        "General Adaptation Syndrome",
        "Fight-or-flight",
        "Tend-and-befriend",
        "Adaptation-level phenomenon"
      ],
      answer: 2,
      explain: "She cares for others (tend) and seeks support from others (befriend). Shelley Taylor called this the tend-and-befriend response.",
      hints: [
        "She does not fight or run away.",
        "She takes care of others and connects with friends."
      ]
    },
    {
      id: "ps16-ex6",
      title: "A bigger salary",
      type: "mc",
      instructions: `<p>Akira gets a big raise and feels very happy. A year later, his happiness is back to the same level as before the raise.
      Which concept best explains this?</p>`,
      choices: [
        "Relative deprivation",
        "Adaptation-level phenomenon",
        "Post-traumatic growth",
        "Eustress"
      ],
      answer: 1,
      explain: "Akira got used to his higher salary, and it became his new normal. That is the adaptation-level phenomenon.",
      hints: [
        "He compares his life now with his own past, not with other people.",
        "People get used to new situations over time."
      ]
    },
    {
      id: "ps16-ex7",
      title: "Stronger after a crisis",
      type: "mc",
      instructions: `<p>After surviving a serious illness, Thandiwe says she now values each day, feels closer to her family, and has chosen a career helping patients.
      Which concept best describes her change?</p>`,
      choices: [
        "Resilience",
        "Subjective well-being",
        "Problem-focused coping",
        "Post-traumatic growth"
      ],
      answer: 3,
      explain: "She did not only recover; she changed positively because of the hard experience. That is post-traumatic growth. Resilience means recovering to normal.",
      hints: [
        "Did she return to normal, or is she better than before in some ways?",
        "This concept is positive change after a trauma."
      ]
    },
    {
      id: "ps16-ex8",
      title: "Exercise and mood (Science Practice)",
      type: "mc",
      instructions: `<p>Researchers randomly assign 200 mildly depressed adults to either 30 minutes of aerobic exercise three times a week or a waiting-list group.
      After 12 weeks, the exercise group reports much lower depression. What can researchers conclude?</p>`,
      choices: [
        "Only a correlation exists, because the study is a survey.",
        "Aerobic exercise caused the lower depression in this sample.",
        "Depression causes people to stop exercising.",
        "The results cannot be used because the groups were chosen by the participants."
      ],
      answer: 1,
      explain: "Because participants were randomly assigned to conditions, this is an experiment, so researchers can conclude that exercise caused the difference.",
      hints: [
        "Look at how participants were placed into groups.",
        "Random assignment allows a cause-and-effect conclusion."
      ]
    },
    {
      id: "ps16-ex9",
      title: "Stress and colds (Science Practice)",
      type: "mc",
      instructions: `<p>A study measures students' stress levels and counts how many colds they get in a year. Students with higher stress get more colds.
      Which statement is the best interpretation?</p>`,
      choices: [
        "A positive correlation; stress may weaken the immune system.",
        "A negative correlation; stress protects people against colds.",
        "The study proves that stress causes colds in all people.",
        "There is no relationship between stress and colds."
      ],
      answer: 0,
      explain: "Both variables increase together, which is a positive correlation. It fits the idea that stress weakens immunity, but a correlation alone does not prove cause.",
      hints: [
        "Both numbers go up together.",
        "Is this an experiment, or are variables only measured?"
      ]
    }
  ]
});
