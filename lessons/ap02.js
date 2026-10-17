// AP CSP, chapter 2 — Big Idea 2 (Data): bits and binary numbers, data compression,
// extracting information from data, and using programs with data.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap02", {
  intro: `
    <p>Computers store everything as numbers: text, photos, music, and videos.
    And these numbers are stored with only two symbols: <code>0</code> and <code>1</code>.</p>
    <p>In this chapter you learn how this works, how files are made smaller, and how people
    use large amounts of data to learn new things.</p>
  `,
  lessons: [
    {
      id: "ap02-l1",
      title: "Bits and binary numbers",
      html: `
        <p>A <strong>bit</strong> (short for <em>binary digit</em>) is the smallest piece of data. It is either <code>0</code> or <code>1</code>.
        A <strong>byte</strong> is a group of <strong>8 bits</strong>, for example <code>01001011</code>.</p>
        <p>We normally count in <strong>decimal</strong> (base 10). Each place is worth 10 times the place on its right: 1, 10, 100, ...
        Computers count in <strong>binary</strong> (base 2). Each place is worth 2 times the place on its right:</p>
        <table>
          <tr><th>Place value</th><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr>
          <tr><th>Bit</th><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
        </table>
        <p><strong>Binary to decimal:</strong> add the place values where the bit is 1.
        Above: <code>1101</code> = 8 + 4 + 1 = <code>13</code>.</p>
        <p><strong>Decimal to binary:</strong> start at the biggest place value that fits, and take it away. Repeat.
        Example for 22: 16 fits (22 − 16 = 6), 8 does not fit, 4 fits (6 − 4 = 2), 2 fits (2 − 2 = 0), 1 is not needed.
        So 22 = <code>10110</code>.</p>
        <p><strong>How many values?</strong> With <em>n</em> bits you can make <strong>2<sup>n</sup></strong> different patterns.
        3 bits give 2 × 2 × 2 = 8 patterns: <code>000</code> to <code>111</code>, which is 0 to 7.
        8 bits give 2<sup>8</sup> = 256 patterns, so one byte can store 0 to 255.</p>
        <div class="tip">Each extra bit <strong>doubles</strong> the number of values. 4 bits: 16 values. 5 bits: 32 values.</div>
        <p>In many programming languages, a number is stored with a fixed number of bits. This can cause two kinds of problems:</p>
        <ul>
          <li><strong>Overflow error:</strong> the number is too big for the bits. With 4 bits, the biggest number is 15. 15 + 1 does not fit.
          (In AP pseudocode and in Python, whole numbers have no fixed size, so they do not overflow.
          An exam question about overflow always tells you how many bits there are.)</li>
          <li><strong>Rounding error:</strong> some decimal numbers cannot be stored exactly, so the computer stores a number very close to it.
          For example, in many languages <code>0.1 + 0.2</code> gives <code>0.30000000000000004</code>.</li>
        </ul>
        <p><strong>Analog and digital:</strong> analog data changes smoothly, like a sound wave or the light in a scene.
        To store it, a computer measures it many times per second. This is called <strong>sampling</strong>.
        The digital copy is very close to the real thing, but it is not exactly the same.</p>
      `
    },
    {
      id: "ap02-l5",
      title: "Number systems: decimal, binary, and hexadecimal",
      html: `
        <div class="tip"><strong>Is this on the exam?</strong> The College Board course description asks you to work with
        <strong>binary</strong> and <strong>decimal</strong> numbers. <strong>Hexadecimal</strong> is extra.
        Some review books include it, and programmers use it a lot, so it is good to know.</div>
        <p>A <strong>number system</strong> is a way to write numbers. The <strong>base</strong> tells you how many different digits
        the system has, and how much each place is worth.</p>
        <table>
          <tr><th>Number system</th><th>Base</th><th>Digits</th><th>Place values (from the right)</th></tr>
          <tr><td><strong>Decimal</strong></td><td>10</td><td>0 1 2 3 4 5 6 7 8 9</td><td>1, 10, 100, 1000, ...</td></tr>
          <tr><td><strong>Binary</strong></td><td>2</td><td>0 1</td><td>1, 2, 4, 8, 16, ...</td></tr>
          <tr><td><strong>Hexadecimal</strong> (hex)</td><td>16</td><td>0 1 2 3 4 5 6 7 8 9 A B C D E F</td><td>1, 16, 256, 4096, ...</td></tr>
        </table>
        <p>Hexadecimal needs 16 digits, but we only have 10 number symbols. So it uses letters for the values 10 to 15:</p>
        <table>
          <tr><th>Hex digit</th><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr>
          <tr><th>Value</th><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
        </table>
        <h3>Hex to decimal</h3>
        <p>Multiply each digit by its place value, then add. Example for <code>2B</code>:
        2 × 16 = 32, and B = 11, so 11 × 1 = 11. 32 + 11 = <code>43</code>.</p>
        <p>Be careful: <code>1A</code> in hex is <strong>not</strong> 110. It is 1 × 16 + 10 = <code>26</code>.</p>
        <h3>Decimal to hex</h3>
        <p>Divide by 16. The whole number result is the left digit, and the rest (the remainder) is the right digit.
        Example for 75: 75 ÷ 16 = 4, with a remainder of 11 (because 4 × 16 = 64, and 75 − 64 = 11).
        11 is <code>B</code>, so 75 = <code>4B</code>. This works for numbers up to 255.</p>
        <h3>Hex and binary</h3>
        <p>One hex digit is always exactly <strong>4 bits</strong>, because 4 bits give 2<sup>4</sup> = 16 patterns.
        So you can change each hex digit into 4 bits, one digit at a time:</p>
        <pre><code>hex      9       C
binary   1001    1100
So 9C in hex = 10011100 in binary.</code></pre>
        <p>The other way works too: cut the binary number into groups of 4 bits, starting from the right,
        and change each group into one hex digit. <code>0101 1111</code> is 5 and F, so it is <code>5F</code>.</p>
        <h3>Why do programmers use hex?</h3>
        <p>Hex is a <strong>shorter way to write binary</strong>. One byte (8 bits) is always just 2 hex digits.
        <code>11111111</code> is easier to read as <code>FF</code>.</p>
        <p>You see hex in <strong>web colors</strong>. In CSS (Cascading Style Sheets, the language for the style of web pages),
        <code>#FF0000</code> is red. The three pairs are the amount of red, green, and blue, each from 00 (none) to FF (255, the most).
        So <code>#FF0000</code> means: full red, no green, no blue.</p>
      `
    },
    {
      id: "ap02-l2",
      title: "Data compression",
      html: `
        <p><strong>Data compression</strong> makes a file use fewer bits. Smaller files need less storage space and
        travel faster over the Internet. There are two kinds:</p>
        <table>
          <tr><th>Kind</th><th>What it does</th><th>Can you get the original back?</th></tr>
          <tr><td><strong>Lossless</strong></td><td>finds patterns and writes them in a shorter way</td><td><strong>Yes</strong>, exactly, bit for bit</td></tr>
          <tr><td><strong>Lossy</strong></td><td>throws away details that people will probably not notice</td><td><strong>No</strong>, only something close to it</td></tr>
        </table>
        <p>A simple lossless idea: the text <code>AAAAAABBB</code> can be written as <code>6A3B</code>.
        From <code>6A3B</code> you can rebuild the exact text.</p>
        <p>Lossy compression usually makes files <strong>much smaller</strong> than lossless compression.
        Photos (JPEG), music (MP3), and video often use lossy compression.</p>
        <div class="tip"><strong>Which one to use?</strong>
        Use <strong>lossless</strong> when every bit matters: text, program code, bank records, medical scans.
        Use <strong>lossy</strong> when the smallest size matters most and a small loss of quality is OK: photos on a website, streaming video.</div>
      `
    },
    {
      id: "ap02-l3",
      title: "Getting information from data",
      html: `
        <p><strong>Data</strong> are raw values, for example a list of numbers. <strong>Information</strong> is what we learn from the data,
        for example "most students sleep less on school nights".</p>
        <p><strong>Metadata</strong> is <em>data about data</em>. For a photo, the picture itself is the data.
        The date, the place, the camera, and the file size are metadata. Metadata helps you find and organize data.
        Changing or deleting metadata does not change the main data.</p>
        <p>Before you use data, you often must <strong>clean</strong> it. Cleaning means making the data uniform
        (all in the same form) without changing its meaning. Example: a survey has the answers
        <code>"USA"</code>, <code>"U.S.A."</code>, and <code>"United States"</code>. You change them all to the same text.
        You also fix or remove wrong or missing values.</p>
        <p>Be careful with what you learn from data:</p>
        <ul>
          <li><strong>Bias in data:</strong> if the data does not include all groups of people, the result can be unfair.
          A survey done only at a gym says little about all people in a city. Collecting <em>more</em> of the same data does not remove the bias.</li>
          <li><strong>Correlation is not causation:</strong> two things can rise together without one causing the other.
          Ice cream sales and sunburns both rise in summer. Ice cream does not cause sunburns. The hot, sunny weather causes both.</li>
        </ul>
        <p><strong>Big data</strong> means data sets that are too big for one computer to process quickly.
        To work with them, programs must be <strong>scalable</strong> (they still work well when the data grows),
        and they often use <strong>parallel processing</strong>: many computers work on parts of the data at the same time.</p>
      `
    },
    {
      id: "ap02-l4",
      title: "Programs that work with data",
      html: `
        <p>Programs help people find patterns in data that are too large to read by hand. Common steps are:</p>
        <table>
          <tr><th>Step</th><th>Meaning</th><th>Example</th></tr>
          <tr><td><strong>Filter</strong></td><td>keep only the data you need</td><td>only students in grade 10</td></tr>
          <tr><td><strong>Transform</strong></td><td>change every value in the same way</td><td>change all temperatures from °F to °C</td></tr>
          <tr><td><strong>Combine</strong></td><td>join data from different places</td><td>join a list of names with a list of test scores</td></tr>
          <tr><td><strong>Visualize</strong></td><td>show the data as a picture</td><td>a bar chart or a map</td></tr>
        </table>
        <p>Filtering in AP pseudocode, with a list of temperatures (you learn about lists in a later chapter):</p>
        <pre><code>hotDays ← 0
FOR EACH temp IN temps
{
   IF (temp &gt; 30)
   {
      hotDays ← hotDays + 1
   }
}
DISPLAY(hotDays)</code></pre>
        <p>The same in Python:</p>
        <pre><code>hot_days = 0
for temp in temps:
    if temp &gt; 30:
        hot_days = hot_days + 1
print(hot_days)</code></pre>
        <p>Tools like <strong>spreadsheets</strong> can do these steps too: sort, filter, and make charts.</p>
        <div class="tip">A chart can show a pattern quickly. But it only shows the data you gave it.
        If the data is biased or not cleaned, the chart is wrong too.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ap02-ex1",
      title: "Binary to decimal",
      type: "mc",
      instructions: `<p>What is the binary number <code>10110</code> in decimal?</p>`,
      choices: ["<code>11</code>", "<code>20</code>", "<code>22</code>", "<code>10110</code>"],
      answer: 2,
      explain: "The place values are 16, 8, 4, 2, 1. The 1 bits are at 16, 4, and 2. 16 + 4 + 2 = 22.",
      hints: [
        "Write the place values above the bits from the right: 1, 2, 4, 8, 16.",
        "Add only the place values where the bit is 1."
      ]
    },
    {
      id: "ap02-ex2",
      title: "Decimal to binary",
      type: "mc",
      instructions: `<p>Which binary number is the same as the decimal number <code>9</code>?</p>`,
      choices: ["<code>1001</code>", "<code>0110</code>", "<code>1010</code>", "<code>1100</code>"],
      answer: 0,
      explain: "9 = 8 + 1. The 8 place and the 1 place are 1, the others are 0: 1001.",
      hints: [
        "The place values for 4 bits are 8, 4, 2, 1.",
        "Which place values add up to 9?"
      ]
    },
    {
      id: "ap02-ex3",
      title: "How many values?",
      type: "mc",
      instructions: `<p>A program uses <strong>5 bits</strong> to store a number. How many different values can it store?</p>`,
      choices: ["<code>5</code>", "<code>10</code>", "<code>25</code>", "<code>32</code>"],
      answer: 3,
      explain: "n bits can make 2<sup>n</sup> patterns. 2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32.",
      hints: [
        "Each extra bit doubles the number of values.",
        "1 bit: 2 values. 2 bits: 4 values. 3 bits: 8 values. Keep going."
      ]
    },
    {
      id: "ap02-ex4",
      title: "Too big for the bits",
      type: "mc",
      instructions: `
        <p>A game stores the score with only <strong>4 bits</strong>. The score is <code>15</code> and the player gets one more point.
        What kind of problem happens?</p>
      `,
      choices: ["A rounding error", "An overflow error", "A syntax error", "Lossy compression"],
      answer: 1,
      explain: "4 bits can store only 0 to 15 (16 values). 16 needs a fifth bit, so it does not fit. That is an overflow error.",
      hints: [
        "What is the biggest number 4 bits can store? <code>1111</code> = 8 + 4 + 2 + 1.",
        "When a number is too big for the space it has, the error has a special name."
      ]
    },
    {
      id: "ap02-ex9",
      title: "Hex to decimal",
      type: "mc",
      instructions: `<p>What is the hexadecimal number <code>1A</code> in decimal?</p>`,
      choices: ["<code>110</code>", "<code>11</code>", "<code>16</code>", "<code>26</code>"],
      answer: 3,
      explain: "The left digit is worth 16 and the right digit is worth 1. A = 10. So 1 × 16 + 10 × 1 = 26.",
      hints: [
        "In hex, the place values from the right are 1 and 16.",
        "In hexadecimal, A is <strong>one</strong> digit, with the value 10. Do not read 1A as the three digits 1, 1, 0.",
        "Calculate 1 × 16 + 10."
      ]
    },
    {
      id: "ap02-ex10",
      title: "Decimal to hex",
      type: "mc",
      instructions: `<p>Which hexadecimal number is the same as the decimal number <code>200</code>?</p>`,
      choices: ["<code>C8</code>", "<code>8C</code>", "<code>128</code>", "<code>B8</code>"],
      answer: 0,
      explain: "200 ÷ 16 = 12 with a remainder of 8 (12 × 16 = 192, and 200 − 192 = 8). 12 is C, so 200 = C8.",
      hints: [
        "Divide 200 by 16. The whole number result is the left digit.",
        "12 × 16 = 192. What is left over? And which letter has the value 12?"
      ]
    },
    {
      id: "ap02-ex11",
      title: "Hex to binary",
      type: "mc",
      instructions: `<p>Which binary number is the same as the hexadecimal number <code>3E</code>?
      (The space in each answer is only there to make it easier to read.)</p>`,
      choices: ["<code>0011 1101</code>", "<code>1110 0011</code>", "<code>0011 1110</code>", "<code>0011 1111</code>"],
      answer: 2,
      explain: "Change each hex digit into 4 bits. 3 = 0011 and E (14) = 1110. Keep the same order: 0011 1110.",
      hints: [
        "One hex digit is always 4 bits. Change each digit on its own.",
        "3 is 0011. E has the value 14. Which 4 bits make 8 + 4 + 2?"
      ]
    },
    {
      id: "ap02-ex5",
      title: "Lossless or lossy?",
      type: "mc",
      instructions: `
        <p>A hospital sends medical scans to a doctor over the Internet. The files must be smaller,
        but the doctor must see <strong>every detail exactly</strong>. Which choice is best?</p>
      `,
      choices: [
        "Lossy compression, because it makes the files the smallest",
        "Lossy compression, because the doctor will not notice the missing details",
        "Lossless compression, because the original file can be rebuilt exactly",
        "No compression is possible for pictures"
      ],
      answer: 2,
      explain: "Lossless compression makes the file smaller and still lets you get back the exact original. Lossy compression throws details away, and they cannot come back.",
      hints: [
        "Which kind of compression lets you get the original back bit for bit?",
        "Lossy is smaller, but is size the most important thing here?"
      ]
    },
    {
      id: "ap02-ex6",
      title: "Metadata",
      type: "mc",
      instructions: `<p>Lucas takes a photo with his phone. Which of these is <strong>metadata</strong> of the photo?</p>`,
      choices: [
        "The colors of the pixels in the photo",
        "The date and the place where the photo was taken",
        "The people who can be seen in the photo",
        "The sky in the background of the photo"
      ],
      answer: 1,
      explain: "Metadata is data about the data. The date and place describe the photo, but they are not part of the picture itself.",
      hints: [
        "Metadata is \"data about data\".",
        "Which choice describes the photo, but is not something you see in the picture?"
      ]
    },
    {
      id: "ap02-ex7",
      title: "Correlation",
      type: "mc",
      instructions: `
        <p>A study finds that cities with more libraries also have more crime.
        What is the <strong>best</strong> conclusion?</p>
      `,
      choices: [
        "Libraries cause crime, so cities should close libraries",
        "Crime causes cities to build more libraries",
        "The data must be wrong, because this cannot be true",
        "The two are related, but this does not show that one causes the other. Big cities may simply have more of both."
      ],
      answer: 3,
      explain: "Correlation is not causation. A third thing, the number of people in the city, can make both numbers bigger.",
      hints: [
        "Remember the example with ice cream and sunburns.",
        "Is there a third thing that could make both libraries and crime go up?"
      ]
    },
    {
      id: "ap02-ex8",
      title: "Count the hot days",
      type: "py",
      instructions: `
        <p>The list <code>temps</code> has the temperatures (in °C) of one week.
        Write a program that counts how many days were <strong>hotter than 30</strong> (more than 30, not equal).</p>
        <p>Store the count in a variable called <code>hot_days</code> and print it. The output should be <code>3</code>.</p>
      `,
      starterCode: "temps = [28, 31, 35, 30, 22, 33, 29]\n\n# Count the days hotter than 30\n",
      solution: "temps = [28, 31, 35, 30, 22, 33, 29]\nhot_days = 0\nfor temp in temps:\n    if temp > 30:\n        hot_days = hot_days + 1\nprint(hot_days)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.get('hot_days') !== undefined", message: "Make a variable called hot_days. Start it at 0." },
        { check: "R.get('hot_days') === 3", message: "hot_days should be 3 (31, 35, and 33). Is 30 counted? It should not be: use > and not >=." },
        { check: "/for\\s+\\w+\\s+in\\s+temps/.test(R.code)", message: "Use a for loop over the list: for temp in temps:" },
        { check: "R.line('3')", message: "Print hot_days at the end." }
      ],
      hints: [
        "Start with <code>hot_days = 0</code>. Then go through the list with <code>for temp in temps:</code>",
        "Inside the loop, use <code>if temp &gt; 30:</code> and add 1 to hot_days.",
        "Look at the Python example in the lesson \"Programs that work with data\"."
      ]
    }
  ]
});
