// AP Psychology, chapter 7 — Unit 2: Perception. Topics follow the AP Psychology Course and Exam Description,
// Barron's AP Psychology Premium, and Myers' Psychology for the AP Course. The text is our own.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ps07", {
  intro: `
    <p>Your senses collect raw information, but your brain decides what it means. This chapter is about perception: how the
    brain organizes and interprets what you sense, how expectations change what you see, how you judge distance, and why
    illusions fool you.</p>
    <p>Perception opens Unit 2 (Cognition) on the AP exam. Many questions show a short scenario and ask you to name the depth cue,
    Gestalt principle, constancy, or type of processing. Learning the exact names of these terms is the key to these questions.</p>
  `,
  lessons: [
    {
      id: "ps07-l1",
      title: "Bottom-up and top-down processing",
      html: `
        <table>
          <tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Bottom-up processing</strong></td><td>perception that starts with the raw sensory information and builds up to a whole</td><td>looking at a strange object piece by piece: "it has four legs, a flat top... it is a kind of table"</td></tr>
          <tr><td><strong>Top-down processing</strong></td><td>perception guided by what we already know, expect, and want</td><td>reading a messy handwritten note easily because you know the words that make sense</td></tr>
        </table>
        <p>A <strong>schema</strong> is a mental framework, or set of ideas, that organizes what we know about something. For example,
        your schema for "classroom" includes desks, a board, and a teacher. Schemas drive top-down processing.</p>
        <p><strong>Perceptual set</strong> is a mental readiness to perceive one thing and not another, based on expectations.
        For example, if you are told a blurry photo shows a monster in a lake, you are more likely to "see" a monster in it.</p>
        <h3>Context, emotion, and culture</h3>
        <ul>
          <li><strong>Context effects</strong>: the same stimulus can be seen differently in different situations. The symbol "13" looks like
          the letter B among letters (A 13 C) and like a number among numbers (12 13 14).</li>
          <li><strong>Emotion and motivation</strong>: a hill looks steeper to a person who is tired or carrying a heavy bag.</li>
          <li><strong>Culture</strong>: people from different cultures learn different schemas, so they may interpret the same image differently.</li>
        </ul>
        <div class="tip">If expectations, past experience, or context change what someone sees, the answer is usually
        <strong>top-down processing</strong> or <strong>perceptual set</strong>.</div>
      `
    },
    {
      id: "ps07-l2",
      title: "Attention and what we miss",
      html: `
        <p><strong>Selective attention</strong> is focusing awareness on only one part of the information around us.</p>
        <p>The <strong>cocktail party effect</strong> is the ability to focus on one voice among many voices, while still noticing
        important words, such as your own name, from another conversation. For example, Kenji is talking with a friend in a noisy cafeteria,
        but he turns his head when someone across the room says "Kenji".</p>
        <p>Because attention is limited, we miss many things:</p>
        <ul>
          <li><strong>Inattentional blindness</strong>: failing to see an object that is clearly visible because our attention is on something else.
          In a famous study, many people counting basketball passes in a video did not notice a person in a gorilla costume walking through the game.</li>
          <li><strong>Change blindness</strong>: failing to notice a change in the environment. For example, a person giving directions does not notice
          that the stranger they are talking to has been replaced by a different person.</li>
        </ul>
        <div class="tip">Inattentional blindness = missing something that is <em>there</em>. Change blindness = missing that something
        <em>changed</em>.</div>
      `
    },
    {
      id: "ps07-l3",
      title: "Gestalt principles",
      html: `
        <p><strong>Gestalt</strong> is a German word meaning "an organized whole". Gestalt psychologists showed that we tend to see
        whole patterns, not separate pieces: <em>the whole is different from the sum of its parts</em>.</p>
        <table>
          <tr><th>Principle</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Figure-ground</strong></td><td>we separate what we see into a main object (figure) and its background (ground)</td><td>a picture that can look like a vase or like two faces, depending on which part you see as the figure</td></tr>
          <tr><td><strong>Proximity</strong></td><td>things that are close together are seen as a group</td><td>six dots in pairs look like three groups of two</td></tr>
          <tr><td><strong>Similarity</strong></td><td>things that look alike are seen as a group</td><td>in a crowd at a stadium, people in the same team shirts look like one group</td></tr>
          <tr><td><strong>Closure</strong></td><td>we fill in gaps to see a complete object</td><td>a circle drawn with small gaps still looks like a circle</td></tr>
          <tr><td><strong>Continuity</strong></td><td>we see smooth, continuous lines and patterns instead of sudden breaks</td><td>two crossing lines look like an X, not like four short lines meeting</td></tr>
        </table>
        <div class="tip">Close together → proximity. Look alike → similarity. Gap filled in → closure. Smooth line → continuity.</div>
      `
    },
    {
      id: "ps07-l4",
      title: "Depth perception",
      html: `
        <p><strong>Depth perception</strong> is the ability to see objects in three dimensions and judge distance. Even though the retina is flat,
        we see the world in 3D.</p>
        <p>The <strong>visual cliff</strong> experiment by <strong>Eleanor Gibson and Richard Walk</strong> used a glass table that looked like it
        had a sudden drop. Most crawling babies would not crawl over the "drop", even when their mothers called them. This suggests depth
        perception appears early, and may be partly inborn.</p>
        <h3>Binocular cues (need both eyes)</h3>
        <ul>
          <li><strong>Retinal disparity</strong>: each eye sees a slightly different image. The brain compares them; a bigger difference means the
          object is closer. Hold a finger near your nose and close one eye, then the other: the finger "jumps".</li>
          <li><strong>Convergence</strong>: the eyes turn inward to look at a close object. The more the eye muscles strain, the closer the object.</li>
        </ul>
        <h3>Monocular cues (work with one eye)</h3>
        <table>
          <tr><th>Cue</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Relative size</strong></td><td>if two objects are similar in size, the one that looks smaller is farther away</td><td>a far-away car looks tiny</td></tr>
          <tr><td><strong>Interposition</strong> (overlap)</td><td>an object that blocks part of another object is closer</td><td>a tree in front of a house</td></tr>
          <tr><td><strong>Relative clarity</strong></td><td>hazy, blurry objects seem farther away than sharp, clear ones</td><td>mountains far away look pale and unclear</td></tr>
          <tr><td><strong>Texture gradient</strong></td><td>texture looks rough and detailed up close and smooth and fine far away</td><td>stones on a path look large near you and like fine gravel far away</td></tr>
          <tr><td><strong>Linear perspective</strong></td><td>parallel lines seem to come together in the distance</td><td>railroad tracks seem to meet at the horizon</td></tr>
          <tr><td><strong>Light and shadow</strong></td><td>shading gives an object depth and shape</td><td>a shaded drawing of a ball looks round</td></tr>
          <tr><td><strong>Relative motion</strong> (motion parallax)</td><td>when you move, close objects seem to move past fast and far objects slowly</td><td>from a train window, nearby poles rush by while far hills move slowly</td></tr>
          <tr><td><strong>Relative height</strong></td><td>objects higher in our field of view seem farther away</td><td>in a painting, people near the top look farther away</td></tr>
        </table>
        <div class="tip">Ask: "Does it need two eyes?" If yes, it is binocular (retinal disparity or convergence). Artists use only monocular cues,
        because a painting is flat.</div>
      `
    },
    {
      id: "ps07-l5",
      title: "Constancy, motion, and illusions",
      html: `
        <h3>Perceptual constancy</h3>
        <p><strong>Perceptual constancy</strong> is seeing objects as unchanging, even when the image on the retina changes.</p>
        <ul>
          <li><strong>Size constancy</strong>: a friend walking away does not seem to shrink, even though her image on your retina gets smaller.</li>
          <li><strong>Shape constancy</strong>: a door looks rectangular as it opens, even though its image becomes a trapezoid.</li>
          <li><strong>Color and lightness constancy</strong>: a red apple still looks red and a white shirt still looks white in dim light or under
          yellow lamps, because the brain compares it with the things around it.</li>
        </ul>
        <h3>Apparent motion</h3>
        <ul>
          <li><strong>Phi phenomenon</strong>: when two lights next to each other blink on and off quickly one after another, we see one light
          moving back and forth. Example: the "moving" arrow on a sign made of light bulbs.</li>
          <li><strong>Stroboscopic movement</strong>: a quick series of slightly different still pictures looks like continuous motion.
          This is how movies and flipbooks work.</li>
        </ul>
        <h3>Illusions</h3>
        <p>An <strong>illusion</strong> is a perception that does not match reality. Illusions show how our perceptual rules usually help us
        but sometimes mislead us.</p>
        <ul>
          <li><strong>Müller-Lyer illusion</strong>: two lines of the same length look different when one has arrow ends pointing out and the
          other has arrow ends pointing in. Research suggests people who grow up in "carpentered" environments with many rectangular buildings
          and corners are more affected by it. This shows that <strong>culture</strong> and experience shape perception.</li>
          <li><strong>Ponzo illusion</strong>: two equal lines placed between converging lines (like railroad tracks) look different. The line
          higher up, "farther away", looks longer, because the brain uses linear perspective and size constancy.</li>
        </ul>
        <div class="tip">Phi phenomenon = blinking lights. Stroboscopic movement = a fast series of still images (movies).</div>
      `
    }
  ],
  exercises: [
    {
      id: "ps07-ex1",
      title: "Seeing what you expect",
      type: "mc",
      instructions: `<p>Before a trip to a lake, Ingrid's friends tell her many stories about a giant fish that lives there. At the lake she
      sees a floating log and is sure it is the giant fish. Which concept best explains this?</p>`,
      choices: [
        "Bottom-up processing",
        "Perceptual set",
        "Change blindness",
        "Retinal disparity"
      ],
      answer: 1,
      explain: "Her expectations prepared her to see a fish. A mental readiness to see something based on expectations is a perceptual set, a kind of top-down processing.",
      hints: [
        "Her expectations changed what she saw.",
        "Which term means being \"ready\" to see something?"
      ]
    },
    {
      id: "ps07-ex2",
      title: "Your name in the noise",
      type: "mc",
      instructions: `<p>At a crowded wedding, Rahul is talking with his cousin and ignores all the other conversations. Suddenly he hears
      his own name from across the room and turns around. What is this called?</p>`,
      choices: [
        "Inattentional blindness",
        "The phi phenomenon",
        "The cocktail party effect",
        "Shape constancy"
      ],
      answer: 2,
      explain: "The cocktail party effect is focusing on one voice while still noticing important words, like your name, from other conversations.",
      hints: [
        "He is using selective attention in a noisy social event.",
        "The name of this effect comes from a kind of party."
      ]
    },
    {
      id: "ps07-ex3",
      title: "The missed bicycle",
      type: "mc",
      instructions: `<p>Zainab is looking at her phone while she crosses a school parking lot. A classmate rides a bright orange bicycle right
      past her, but later she says she did not see any bicycle. Which concept best explains this?</p>`,
      choices: [
        "Inattentional blindness",
        "Change blindness",
        "Gestalt principle of closure",
        "Size constancy"
      ],
      answer: 0,
      explain: "She did not see a clearly visible object because her attention was on her phone. Change blindness is about missing a change, which is not what happened here.",
      hints: [
        "Nothing changed. Something was there and she did not see it.",
        "Her attention was somewhere else."
      ]
    },
    {
      id: "ps07-ex4",
      title: "Gestalt grouping",
      type: "mc",
      instructions: `<p>A logo shows a panda made of black shapes, but the outline of the panda's body has large gaps. People still see a
      complete panda. Which Gestalt principle is at work?</p>`,
      choices: [
        "Proximity",
        "Similarity",
        "Continuity",
        "Closure"
      ],
      answer: 3,
      explain: "Closure is the tendency to fill in gaps so that we see a complete, whole object.",
      hints: [
        "The brain fills in the missing parts.",
        "Which word means \"closing\" the gaps?"
      ]
    },
    {
      id: "ps07-ex5",
      title: "Train window",
      type: "mc",
      instructions: `<p>Looking out of a train window, Mateo sees the fence posts near the track rush past quickly, while a farmhouse far away
      seems to move slowly. Which depth cue is this?</p>`,
      choices: [
        "Convergence",
        "Relative motion",
        "Linear perspective",
        "Interposition"
      ],
      answer: 1,
      explain: "Relative motion (motion parallax): when we move, close objects seem to move faster than far objects.",
      hints: [
        "Mateo is moving, and objects at different distances seem to move at different speeds.",
        "This monocular cue is about motion."
      ]
    },
    {
      id: "ps07-ex6",
      title: "Two eyes",
      type: "mc",
      instructions: `<p>Chloe has lost the sight in one eye. Which depth cue can she <strong>no longer</strong> use?</p>`,
      choices: [
        "Texture gradient",
        "Relative size",
        "Retinal disparity",
        "Light and shadow"
      ],
      answer: 2,
      explain: "Retinal disparity compares the two slightly different images from the two eyes, so it is a binocular cue. The others are monocular.",
      hints: [
        "Which cue needs both eyes?",
        "It compares the images on the two retinas."
      ]
    },
    {
      id: "ps07-ex7",
      title: "The door",
      type: "mc",
      instructions: `<p>As Mr. Nakamura opens his classroom door, the image of the door on his retina changes from a rectangle to a narrow
      trapezoid. He still sees the door as a rectangle. Which concept explains this?</p>`,
      choices: [
        "Shape constancy",
        "Size constancy",
        "The phi phenomenon",
        "Figure-ground"
      ],
      answer: 0,
      explain: "Shape constancy means we see an object as keeping the same shape, even when its image on the retina changes.",
      hints: [
        "The retinal image changes, but his perception does not.",
        "What changes in the image here: the size or the shape?"
      ]
    },
    {
      id: "ps07-ex8",
      title: "Flipbook",
      type: "mc",
      instructions: `<p>Aiyana draws a stick figure on 40 pages, each a little different. When she flips the pages fast, the figure seems
      to dance. Which concept best explains this?</p>`,
      choices: [
        "Relative clarity",
        "Stroboscopic movement",
        "Perceptual constancy",
        "Sensory adaptation"
      ],
      answer: 1,
      explain: "Stroboscopic movement is the perception of continuous motion from a fast series of slightly different still images, as in movies and flipbooks.",
      hints: [
        "These are still pictures shown quickly one after another.",
        "This is how movies work."
      ]
    },
    {
      id: "ps07-ex9",
      title: "Science practice: the visual cliff",
      type: "mc",
      instructions: `<p>In the visual cliff study, researchers placed crawling infants on a glass table. One side looked shallow and the other
      side looked like a deep drop. Most infants refused to crawl onto the "deep" side. What is the most reasonable conclusion?</p>`,
      choices: [
        "Infants cannot see until they are one year old.",
        "Depth perception is learned only through language.",
        "Infants prefer glass surfaces to other surfaces.",
        "By the time they can crawl, most infants can perceive depth."
      ],
      answer: 3,
      explain: "The infants avoided the deep side, so they could perceive depth. Because they had already been crawling for a while, the study cannot fully separate inborn ability from early learning.",
      hints: [
        "What did the infants' behavior show about what they could see?",
        "They avoided the side that looked deep."
      ]
    },
    {
      id: "ps07-ex10",
      title: "Science practice: culture and illusions",
      type: "mc",
      instructions: `<p>A researcher shows the Müller-Lyer illusion to people from a city with many rectangular buildings and to people from a
      rural area with mostly round houses. The city group is fooled by the illusion more often. Which variable did the researcher compare?</p>`,
      choices: [
        "The length of the lines",
        "The age of the people",
        "Where the people grew up",
        "The color of the lines"
      ],
      answer: 2,
      explain: "The two groups differ in their environment (rectangular city buildings vs. round rural houses). This suggests experience and culture influence perception.",
      hints: [
        "What is different between the two groups?",
        "Think about buildings and corners."
      ]
    }
  ]
});
