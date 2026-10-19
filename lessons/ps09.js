// AP Psychology, chapter 9 — Unit 2: Memory (types of memory, memory models, encoding, retrieval, forgetting,
// memory construction, and the brain). Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps09", {
  intro: `
    <p>Memory is how we keep information over time and use it later. Psychologists study three steps:
    <strong>encoding</strong> (getting information in), <strong>storage</strong> (keeping it), and
    <strong>retrieval</strong> (getting it back out). They also study why we forget, and why some memories are wrong.</p>
    <p>Memory is a large part of Unit 2 (Cognition) on the AP exam. Many questions describe a student who forgets
    something or remembers it wrongly, and ask you which memory concept explains it. This chapter also helps you
    study better, because it explains which study methods really work.</p>
  `,
  lessons: [
    {
      id: "ps09-l1",
      title: "Types of memory",
      barrons: "Chapter 9, Memory: Long-Term Memory (page 80)",
      html: `
        <p>Psychologists divide long-term memory into two big groups.</p>
        <h3>Explicit memory</h3>
        <p><strong>Explicit memory</strong> (also called declarative memory) is memory of facts and experiences that you
        can consciously remember and say in words. It has two kinds:</p>
        <ul>
          <li><strong>Episodic memory:</strong> memory of personal events that happened at a certain time and place.
          Example: you remember your tenth birthday party at the beach.</li>
          <li><strong>Semantic memory:</strong> memory of general facts and knowledge. Example: you know that Paris is
          the capital of France, but you do not remember when you learned it.</li>
        </ul>
        <h3>Implicit memory</h3>
        <p><strong>Implicit memory</strong> (also called nondeclarative memory) is memory that affects you without
        conscious effort. You often cannot explain it in words.</p>
        <ul>
          <li><strong>Procedural memory:</strong> memory of skills and how to do things. Example: riding a bike or
          typing on a keyboard without thinking about each key.</li>
          <li><strong>Priming:</strong> when seeing one thing, often without noticing, makes a related idea come to mind
          more easily. Example: after you see the word "yellow", you recognize the word "banana" a little faster.</li>
        </ul>
        <h3>Prospective memory</h3>
        <p><strong>Prospective memory</strong> is remembering to do something in the future. Example: remembering to
        take your medicine after dinner, or to give a note to your teacher tomorrow.</p>
        <table>
          <tr><th>Type</th><th>Group</th><th>Example</th></tr>
          <tr><td>Episodic</td><td>Explicit</td><td>your first day at a new school</td></tr>
          <tr><td>Semantic</td><td>Explicit</td><td>the meaning of the word "photosynthesis"</td></tr>
          <tr><td>Procedural</td><td>Implicit</td><td>tying your shoes</td></tr>
          <tr><td>Priming</td><td>Implicit</td><td>after you see a poster of a beach, you are more likely to complete "S _ N D" as "SAND", without noticing why</td></tr>
        </table>
        <div class="tip">Quick test: if you can say "I remember that...", it is explicit. If you just "know how" or it
        happens without awareness, it is implicit.</div>
      `
    },
    {
      id: "ps09-l2",
      title: "Models of memory",
      barrons: "Chapter 9, Memory: Three-Box/Information-Processing Model (page 79) to Levels of Processing Model (page 81)",
      html: `
        <h3>The multi-store model</h3>
        <p>Richard <strong>Atkinson</strong> and Richard <strong>Shiffrin</strong> described the
        <strong>multi-store model</strong> (also called the three-stage model). Information moves through three stores:</p>
        <ul>
          <li><strong>Sensory memory:</strong> a very short copy of what the senses take in. It lasts less than a few seconds.
            <ul>
              <li><strong>Iconic memory</strong> is visual sensory memory. It lasts less than one second. Example: you
              can still "see" the light of a sparkler for a moment after it moves.</li>
              <li><strong>Echoic memory</strong> is auditory (hearing) sensory memory. It lasts about 3 to 4 seconds.
              Example: a friend asks "What did I just say?" and you can still "hear" the last words.</li>
            </ul>
          </li>
          <li><strong>Short-term memory (STM):</strong> the information you pay <strong>attention</strong> to moves here.
          It holds only about <strong>7 items, plus or minus 2</strong> (George Miller), and newer research says closer
          to 4 chunks. Without rehearsal (repeating), most of it is lost within about 10 to 30 seconds.</li>
          <li><strong>Long-term memory (LTM):</strong> a lasting store with almost no limit on how much it can hold.
          Rehearsal and deeper processing move information here.</li>
        </ul>
        <h3>The working memory model</h3>
        <p>Alan <strong>Baddeley</strong> said short-term memory is not just a box. It is an active workspace called
        <strong>working memory</strong>, where you hold and use information at the same time. It has parts:</p>
        <table>
          <tr><th>Part</th><th>What it does</th><th>Example</th></tr>
          <tr><td><strong>Central executive</strong></td><td>directs attention and controls the other parts</td><td>deciding which part of a math problem to solve first</td></tr>
          <tr><td><strong>Phonological loop</strong></td><td>holds sounds and words for a short time</td><td>repeating a phone number in your head</td></tr>
          <tr><td><strong>Visuospatial sketchpad</strong></td><td>holds images and locations</td><td>picturing the way from your house to school</td></tr>
        </table>
        <h3>Long-term potentiation</h3>
        <p><strong>Long-term potentiation (LTP)</strong> is the strengthening of connections between neurons
        (nerve cells) when they fire together again and again. After LTP, a signal crosses the synapse more easily.
        Many psychologists think LTP is the biological basis of learning and memory.</p>
        <div class="tip">Remember the path: senses, then attention moves information to short-term memory, then
        rehearsal and encoding move it to long-term memory.</div>
      `
    },
    {
      id: "ps09-l3",
      title: "Encoding: getting information in",
      barrons: "Chapter 9, Memory: Encoding Memories (page 81)",
      html: `
        <h3>Automatic and effortful processing</h3>
        <p><strong>Automatic processing</strong> is encoding that happens without effort or attention. Example: you know
        what you ate for breakfast, even though you never tried to remember it. Space, time, and how often things happen
        are often encoded automatically.</p>
        <p><strong>Effortful processing</strong> needs attention and work. Example: studying new vocabulary words for a test.</p>
        <h3>Levels of processing</h3>
        <p>Fergus Craik and Robert Lockhart said that the <strong>depth</strong> of processing matters.</p>
        <ul>
          <li><strong>Shallow processing</strong> encodes only the surface: how a word looks (structural) or sounds (phonemic).</li>
          <li><strong>Deep processing</strong> encodes the <strong>meaning</strong> (semantic). It leads to the best memory.</li>
        </ul>
        <p>Example: if you only notice that "justice" has 7 letters, you will forget it. If you think of a fair judge,
        you will remember it.</p>
        <h3>Strategies that help encoding</h3>
        <table>
          <tr><th>Strategy</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Chunking</strong></td><td>grouping items into larger meaningful units</td><td>remembering 1-9-4-5-2-0-2-4 as 1945 and 2024</td></tr>
          <tr><td><strong>Mnemonics</strong></td><td>memory aids that use images, words, or rhymes</td><td>"Roy G. Biv" for the colors of the rainbow</td></tr>
          <tr><td><strong>Method of loci</strong></td><td>a mnemonic: imagine each item in a place along a familiar route</td><td>you picture each shopping item in a different room of your home</td></tr>
          <tr><td><strong>Categories and hierarchies</strong></td><td>organizing information from general groups to specific items</td><td>an outline of your biology notes: animals, then mammals, then dogs</td></tr>
          <tr><td><strong>Self-reference effect</strong></td><td>information connected to yourself is remembered better</td><td>you remember "generous" because you think of a time you shared your lunch</td></tr>
        </table>
        <h3>The spacing effect and the testing effect</h3>
        <p>The <strong>spacing effect</strong> means that study spread out over time (distributed practice) gives better
        long-term memory than the same amount of study all at once (massed practice, or "cramming").</p>
        <p>The <strong>testing effect</strong> (also called <strong>retrieval practice</strong>) means that trying to
        remember information, for example with practice quizzes or flashcards, makes memory stronger than just reading it again.</p>
        <div class="tip">The best study plan: short sessions over several days (spacing), quiz yourself (testing),
        and connect ideas to your own life (deep processing and self-reference).</div>
      `
    },
    {
      id: "ps09-l4",
      title: "Retrieval: getting information out",
      barrons: "Chapter 9, Memory: Retrieval (page 83)",
      html: `
        <h3>Three ways to measure memory</h3>
        <ul>
          <li><strong>Recall:</strong> getting information out with no clues. Example: a fill-in-the-blank or essay question.</li>
          <li><strong>Recognition:</strong> choosing the right information from options. Example: a multiple-choice question.
          Recognition is usually easier than recall.</li>
          <li><strong>Relearning:</strong> learning something again that you learned before. It goes faster the second time,
          which shows some memory stayed. Example: re-learning a language you spoke as a child.</li>
        </ul>
        <h3>The serial position effect</h3>
        <p>The <strong>serial position effect</strong> is the tendency to remember the first and last items in a list
        better than the middle items.</p>
        <ul>
          <li><strong>Primacy effect:</strong> the first items are remembered well because they were rehearsed more and
          moved to long-term memory.</li>
          <li><strong>Recency effect:</strong> the last items are remembered well because they are still in short-term memory
          (if you recall right away).</li>
        </ul>
        <h3>Retrieval cues</h3>
        <p>A <strong>retrieval cue</strong> is anything that helps you find a memory.</p>
        <table>
          <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Context-dependent memory</strong></td><td>memory is better in the same place or setting where you learned it</td><td>you remember an idea better when you take the test in the classroom where you learned it</td></tr>
          <tr><td><strong>State-dependent memory</strong></td><td>memory is better when your body or mind is in the same state as during learning</td><td>something learned while very tired is easier to remember when tired again</td></tr>
          <tr><td><strong>Mood-congruent memory</strong></td><td>your current mood helps you remember events with the same mood</td><td>when you feel sad, you remember other sad times more easily</td></tr>
        </table>
        <div class="tip">Context = the outside place. State = your inside condition. Mood-congruent = your feelings match
        the memories you recall.</div>
      `
    },
    {
      id: "ps09-l5",
      title: "Forgetting and memory problems",
      barrons: "Chapter 9, Memory: Forgetting (page 83)",
      html: `
        <h3>The forgetting curve</h3>
        <p>Hermann <strong>Ebbinghaus</strong> learned lists of nonsense syllables (like "DAX" and "WUP") and tested himself.
        His <strong>forgetting curve</strong> shows that we forget most new information quickly at first, and then
        forgetting slows down and levels off.</p>
        <h3>Why we forget</h3>
        <ul>
          <li><strong>Encoding failure:</strong> the information never entered long-term memory. Example: you have seen a
          coin thousands of times but cannot draw its details, because you never paid attention to them.</li>
          <li><strong>Proactive interference:</strong> old information blocks new information. ("Pro" = forward.)
          Example: you keep typing your old password after you changed it.</li>
          <li><strong>Retroactive interference:</strong> new information blocks old information. ("Retro" = backward.)
          Example: after learning Spanish, you have trouble remembering the French words you learned last year.</li>
          <li><strong>Motivated forgetting:</strong> forgetting things because they are painful or unpleasant.
          Sigmund Freud called the unconscious form <strong>repression</strong>. Today, many researchers doubt that
          repression is common, because people often remember painful events very well.</li>
        </ul>
        <h3>Amnesia and other memory loss</h3>
        <table>
          <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Retrograde amnesia</strong></td><td>loss of memories from <em>before</em> an injury</td><td>after a car accident, a man cannot remember the week before it</td></tr>
          <tr><td><strong>Anterograde amnesia</strong></td><td>inability to form <em>new</em> memories after an injury</td><td>a woman meets her nurse every day but never remembers her</td></tr>
          <tr><td><strong>Infantile amnesia</strong></td><td>most adults cannot remember events from before about age 3 or 4</td><td>you have no memory of your first birthday</td></tr>
          <tr><td><strong>Alzheimer's disease</strong></td><td>a brain disease, mostly in older adults, that slowly destroys memory and thinking; it damages neurons, including those that use the neurotransmitter acetylcholine</td><td>a grandmother first forgets recent events, and later forgets family members' names</td></tr>
        </table>
        <div class="tip">Retro<strong>grade</strong> = lose the past. Antero<strong>grade</strong> = cannot make new memories.
        For interference, ask "which memory is lost?" If the new one is lost, it is proactive. If the old one is lost, it is retroactive.</div>
      `
    },
    {
      id: "ps09-l6",
      title: "Memory construction and the brain",
      barrons: "Chapter 9, Memory: Storing Memories (page 82) and Constructive Memory (page 83)",
      html: `
        <h3>Memories are rebuilt, not replayed</h3>
        <p>A memory is not like a video. Each time you retrieve it, you rebuild it, and it can change. This is called
        <strong>memory construction</strong> (or reconstruction).</p>
        <ul>
          <li><strong>Misinformation effect:</strong> wrong information after an event changes the memory of the event.
          Elizabeth <strong>Loftus</strong> showed people a video of a car crash. People asked how fast the cars were going
          when they "smashed" gave higher speeds than people asked about cars that "hit". Some even remembered broken glass that was not there.</li>
          <li><strong>Source amnesia</strong> (source misattribution): you remember the information but forget where it
          came from. Example: you believe you read a fact in a science book, but you really heard it in a movie.</li>
          <li><strong>Imagination inflation:</strong> imagining an event again and again makes people more sure that it really happened.</li>
          <li><strong>False memories:</strong> memories of events that never happened, which feel real to the person.</li>
        </ul>
        <p>Because of these effects, <strong>eyewitness</strong> reports are often less reliable than people think.
        A very confident witness can still be wrong. Leading questions from police or lawyers can change a memory.</p>
        <h3>Memory in the brain</h3>
        <table>
          <tr><th>Brain area</th><th>Main role in memory</th></tr>
          <tr><td><strong>Hippocampus</strong></td><td>forms new explicit memories (facts and events) and helps move them into long-term storage</td></tr>
          <tr><td><strong>Cerebellum</strong></td><td>implicit memories, such as classically conditioned responses and timing of movements</td></tr>
          <tr><td><strong>Basal ganglia</strong></td><td>implicit procedural memories for skills and habits</td></tr>
          <tr><td><strong>Amygdala</strong></td><td>emotional memories; stress hormones make emotional events stick more strongly</td></tr>
        </table>
        <p>A <strong>flashbulb memory</strong> is a clear, detailed-feeling memory of an emotional or shocking event.
        Example: Aiko remembers exactly where she was when she heard big news. People feel very sure about flashbulb
        memories, but research shows they also change over time.</p>
        <div class="tip">A patient with hippocampus damage may not remember learning a new skill (explicit), but can
        still get better at the skill (implicit), because the cerebellum and basal ganglia still work.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps09-ex1",
      title: "Types of memory",
      type: "mc",
      instructions: `<p>Mateo has not played the piano for years. When he sits down at a piano, his fingers play an old song
      without him thinking about the notes. Which type of memory best explains this?</p>`,
      choices: [
        "Episodic memory",
        "Semantic memory",
        "Procedural memory",
        "Prospective memory"
      ],
      answer: 2,
      explain: "Procedural memory is implicit memory for skills, like playing an instrument. Episodic and semantic memory are explicit memories that you consciously remember.",
      hints: [
        "Mateo is not remembering a fact or an event. He is doing a skill.",
        "Which memory type is about knowing how to do something?"
      ]
    },
    {
      id: "ps09-ex2",
      title: "Working memory",
      type: "mc",
      instructions: `<p>Priya's friend tells her a new phone number. Priya has no paper, so she repeats the numbers to herself
      silently until she can save them. Which part of the working memory model is Priya mostly using?</p>`,
      choices: [
        "The phonological loop",
        "The visuospatial sketchpad",
        "Iconic memory",
        "Long-term potentiation"
      ],
      answer: 0,
      explain: "The phonological loop holds sounds and words for a short time, and silent repeating keeps them there. The visuospatial sketchpad holds images and places, not sounds.",
      hints: [
        "Priya is holding sounds and words, not pictures.",
        "Which part of working memory works like an inner voice?"
      ]
    },
    {
      id: "ps09-ex3",
      title: "Study methods",
      type: "mc",
      instructions: `<p>Kwame and Sofia both study for 3 hours for a history test. Kwame studies for 3 hours the night before.
      Sofia studies for 30 minutes each day for 6 days. Sofia remembers more a month later. Which concept best explains this?</p>`,
      choices: [
        "The serial position effect",
        "Proactive interference",
        "Mood-congruent memory",
        "The spacing effect"
      ],
      answer: 3,
      explain: "The spacing effect says that study spread over time gives better long-term memory than cramming the same amount of study into one session.",
      hints: [
        "Both students studied for the same total time. What was different?",
        "Look for the concept about spreading study over several days."
      ]
    },
    {
      id: "ps09-ex4",
      title: "Levels of processing",
      type: "mc",
      instructions: `<p>A teacher gives two groups the same list of words. Group A counts the vowels in each word. Group B
      thinks of a sentence about their own life for each word. Later, Group B remembers many more words. Which idea best
      explains the result?</p>`,
      choices: [
        "Shallow processing, such as counting vowels, gives the strongest memories.",
        "Deep processing, such as linking words to yourself, gives stronger memories.",
        "Group B used the method of loci, which works for any list.",
        "Group A had anterograde amnesia during the task."
      ],
      answer: 1,
      explain: "Group B processed the meaning and connected words to themselves (deep processing and the self-reference effect). Counting vowels is shallow processing of how the word looks.",
      hints: [
        "Counting vowels only looks at the surface of a word.",
        "Which group thought about what the words mean?"
      ]
    },
    {
      id: "ps09-ex5",
      title: "Interference",
      type: "mc",
      instructions: `<p>Last year, Hana's locker combination was 12-30-8. This year it is 25-4-17. When she goes to her new
      locker, she keeps trying 12-30-8. Which concept best explains this?</p>`,
      choices: [
        "Retroactive interference",
        "Encoding failure",
        "Proactive interference",
        "Source amnesia"
      ],
      answer: 2,
      explain: "In proactive interference, an old memory blocks a new one. Retroactive interference would be the new combination blocking the old one.",
      hints: [
        "Which memory is causing the problem: the old one or the new one?",
        "The old information is moving forward in time and blocking the new information."
      ]
    },
    {
      id: "ps09-ex6",
      title: "Retrieval cues",
      type: "mc",
      instructions: `<p>Diego walks into the kitchen and forgets why he came. He goes back to his bedroom, where he had the
      idea, and he suddenly remembers that he wanted a glass of water. Which concept best explains this?</p>`,
      choices: [
        "State-dependent memory",
        "Context-dependent memory",
        "Mood-congruent memory",
        "Infantile amnesia"
      ],
      answer: 1,
      explain: "Returning to the place where the memory was formed gives context cues that help retrieval. State-dependent memory is about an inner state, like being tired, not a place.",
      hints: [
        "What changed when Diego went back to the bedroom?",
        "The outside setting worked as a retrieval cue."
      ]
    },
    {
      id: "ps09-ex7",
      title: "Memory construction",
      type: "mc",
      instructions: `<p>After a minor traffic accident, a police officer asks Amara, "Did you see the driver run the red light?"
      Amara did not notice the light. A week later, she clearly "remembers" seeing the driver go through a red light.
      Which concept best explains this?</p>`,
      choices: [
        "Proactive interference",
        "Encoding failure",
        "State-dependent memory",
        "The misinformation effect"
      ],
      answer: 3,
      explain: "The officer's leading question gave misleading information after the event, and it changed Amara's memory. This is the misinformation effect that Loftus studied.",
      hints: [
        "The new detail came from the question, not from the event.",
        "Elizabeth Loftus studied how information after an event changes memory."
      ]
    },
    {
      id: "ps09-ex8",
      title: "Amnesia and the brain",
      type: "mc",
      instructions: `<p>After surgery that damaged his hippocampus, Mr. Okafor remembers his childhood and his job well. But he
      cannot remember the people he met yesterday. Each day, though, he gets faster at a new puzzle game, even though he
      says he has never played it. Which statement best explains his case?</p>`,
      choices: [
        "He has anterograde amnesia for explicit memories, but his implicit memory still works.",
        "He has retrograde amnesia, so he lost all memories from before the surgery.",
        "He has infantile amnesia, so he cannot form new memories.",
        "His amygdala is damaged, so he cannot form any procedural memories."
      ],
      answer: 0,
      explain: "He cannot form new explicit memories (anterograde amnesia, linked to the hippocampus), but his skill improves because implicit procedural memory uses other areas like the cerebellum and basal ganglia.",
      hints: [
        "His old memories are fine. The problem is with new memories.",
        "Getting better at a game without remembering it shows that one kind of memory still works."
      ]
    },
    {
      id: "ps09-ex9",
      title: "Science practice: the serial position effect",
      type: "mc",
      instructions: `<p>A researcher reads a list of 15 words to students and asks them to write all the words they can
      remember right away. She makes a graph of how often each word was recalled, by its position in the list. Which
      result would she most likely find?</p>`,
      choices: [
        "Words in the middle of the list are recalled best.",
        "All positions are recalled equally well.",
        "Words at the beginning and at the end of the list are recalled best.",
        "Only the words at the beginning are recalled, and none of the words at the end."
      ],
      answer: 2,
      explain: "With immediate recall, the serial position effect gives a U-shaped curve: a primacy effect for the first words and a recency effect for the last words.",
      hints: [
        "Think about primacy and recency.",
        "The graph has a U shape."
      ]
    },
    {
      id: "ps09-ex10",
      title: "Science practice: identify the variable",
      type: "mc",
      instructions: `<p>Lucas wants to test the testing effect. He randomly assigns students to two groups. Both groups read the
      same article. Group 1 then reads it again. Group 2 takes a practice quiz about it. One week later, both groups take
      the same final test. What is the independent variable in this experiment?</p>`,
      choices: [
        "The score on the final test",
        "Rereading the article or taking a practice quiz",
        "The article that both groups read",
        "The one-week delay between reading and the final test"
      ],
      answer: 1,
      explain: "The independent variable is what the researcher changes between groups: rereading or taking a quiz. The final test score is the dependent variable, and the article and delay are kept the same (controlled).",
      hints: [
        "The independent variable is the thing that is different between the two groups.",
        "The final test score is what Lucas measures, so it is the dependent variable."
      ]
    }
  ]
});
