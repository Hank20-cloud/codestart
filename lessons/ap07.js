// AP CSP, chapter 7 — Big Idea 5 (Impact of Computing): effects of computing, the digital divide,
// bias, crowdsourcing, legal and ethical concerns, and safe computing. Follows the AP CSP Course and Exam Description.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap07", {
  intro: `
    <p>Computers change how people live, learn, and work. Some changes are good, some are bad, and some
    were never planned. Big Idea 5 is about these effects, and about how to keep yourself and your data safe.</p>
    <p>This is the largest Big Idea on the AP exam after programming. Many questions describe a real situation
    and ask you which effect, risk, or protection fits it.</p>
  `,
  lessons: [
    {
      id: "ap07-l1",
      title: "Good effects, bad effects, and the digital divide",
      html: `
        <p>A <strong>computing innovation</strong> is a new program, device, or idea that uses computing, for example
        a social media app, a self-driving car, or an online map.</p>
        <p>Every computing innovation can have <strong>beneficial</strong> (good) effects and <strong>harmful</strong> (bad) effects.
        Often the same innovation has both. The effect can also depend on the person who uses it.</p>
        <table>
          <tr><th>Innovation</th><th>Beneficial effect</th><th>Harmful effect</th></tr>
          <tr><td>Social media</td><td>people stay in contact with family far away</td><td>false information can spread to millions of people very quickly</td></tr>
          <tr><td>Online maps</td><td>people find the fastest route</td><td>the app collects data about where you go</td></tr>
          <tr><td>Video streaming</td><td>free lessons for students everywhere</td><td>people may spend too much time in front of screens</td></tr>
        </table>
        <h3>Unintended effects</h3>
        <p>An <strong>unintended effect</strong> is an effect that the creators did not plan. For example, an app made to share
        exercise routes showed the locations of secret military bases, because soldiers used it while running.</p>
        <p>Information can be shared <strong>very fast</strong> and with very many people. So one small problem can grow very big
        before anyone notices it.</p>
        <h3>The digital divide</h3>
        <p>The <strong>digital divide</strong> is the difference between people who have access to computers and the Internet,
        and people who do not. Access can be different because of:</p>
        <ul>
          <li><strong>where</strong> people live (cities often have fast Internet; some rural areas do not),</li>
          <li><strong>money</strong> (devices and Internet plans cost money),</li>
          <li><strong>knowledge</strong> (some people never learned to use computers),</li>
          <li>and between <strong>countries</strong>, or because of government rules.</li>
        </ul>
        <p>The digital divide is a problem because more and more things (school, jobs, banks, health services) need the Internet.
        People without access can fall further behind. Governments, schools, and companies try to reduce it, for example
        with free Wi-Fi in libraries or cheap laptops for students.</p>
      `
    },
    {
      id: "ap07-l2",
      title: "Computing bias and crowdsourcing",
      html: `
        <h3>Computing bias</h3>
        <p><strong>Bias</strong> means treating some people or groups unfairly. Computers do not have opinions, but programs
        can still be biased, because people write them and people choose the data.</p>
        <ul>
          <li><strong>Biased training data:</strong> many programs learn from examples (this is called <em>machine learning</em>).
          If a face recognition program learns mostly from photos of light-skinned people, it works worse for dark-skinned people.</li>
          <li><strong>Algorithms reflect their creators:</strong> a hiring program that learns from old hiring decisions copies the
          unfair choices that people made in the past.</li>
        </ul>
        <div class="tip">To reduce bias: use data from many different kinds of people, test the program with different groups,
        and have a diverse team (people with different backgrounds) build and review it.</div>
        <h3>Crowdsourcing and citizen science</h3>
        <p><strong>Crowdsourcing</strong> means getting help, ideas, data, or money from a large group of people, usually over the Internet.
        Examples: online encyclopedias written by volunteers, apps where drivers report traffic, and websites where many people give
        small amounts of money for a project.</p>
        <p><strong>Citizen science</strong> is scientific research where ordinary people (not only scientists) help collect or study data.
        For example, people count birds in their garden and send the results to scientists, or volunteers look at space photos to find new planets.</p>
        <p>Both are possible because of the Internet: it makes it easy to share data and to work together with many people.</p>
      `
    },
    {
      id: "ap07-l3",
      title: "Legal and ethical concerns",
      html: `
        <p><strong>Intellectual property</strong> is something a person creates with their mind: a song, a photo, a program, a book.
        The law protects it.</p>
        <ul>
          <li><strong>Copyright</strong> is a law that protects the creator. Only the creator decides who can copy, share, or change the work.
          A work is protected by copyright as soon as it is created, even without a © sign.</li>
          <li>Because digital files are very easy to copy and share, it is easy to break copyright without thinking about it.</li>
        </ul>
        <p>Some creators want others to use their work. They have ways to say so:</p>
        <table>
          <tr><th>Word</th><th>Meaning</th></tr>
          <tr><td><strong>Creative Commons</strong></td><td>a free public license (a written permission). The creator chooses the rules, for example "you can share this if you name me".</td></tr>
          <tr><td><strong>Open source</strong></td><td>a program whose source code anyone can read, use, and change.</td></tr>
          <tr><td><strong>Open access</strong></td><td>research articles that anyone can read online for free, without paying.</td></tr>
        </table>
        <p><strong>Plagiarism</strong> means using someone else's work and saying (or letting people think) that it is your own.
        It is not honest, even when the work is free to use. Always say where the material comes from.</p>
        <div class="tip">For the Create performance task, you may use code from other people or from AI tools, but you must
        say clearly which code is not yours and where it comes from.</div>
        <h3>Legal is not always ethical</h3>
        <p>Something can be <em>legal</em> (allowed by the law) and still not <em>ethical</em> (right and fair).
        For example, an app may legally sell the data of its users, because the users agreed to a very long text that nobody reads.
        Programmers should think about the people their programs affect.</p>
      `
    },
    {
      id: "ap07-l4",
      title: "Privacy and personal data",
      html: `
        <p><strong>PII (personally identifiable information)</strong> is information that can be used to find out who a person is.
        Examples: name, home address, phone number, birthday, ID number, email address, photo of your face, and the
        location of your phone.</p>
        <p>Apps and websites collect a lot of data about you, often more than you think:</p>
        <ul>
          <li>what you search for, click on, and buy,</li>
          <li>where you are (GPS location),</li>
          <li>who your friends are, and what you post.</li>
        </ul>
        <p>Companies use this data to show you ads or to improve their services. But it can also be a risk:</p>
        <ul>
          <li>Pieces of data that seem harmless can be <strong>combined</strong> to find out who you are and where you live.</li>
          <li>Data on the Internet is very hard to delete. Once it is shared, it can stay there forever.</li>
          <li>Data can be stolen, sold, or used for things you never agreed to.</li>
        </ul>
        <div class="tip">Protect your privacy: check the privacy settings of your apps, share less PII, and think before you post.</div>
      `
    },
    {
      id: "ap07-l5",
      title: "Safe computing",
      html: `
        <h3>Authentication</h3>
        <p><strong>Authentication</strong> means checking that a user is really who they say they are.</p>
        <ul>
          <li>A strong <strong>password</strong> is long, is not a real word, and mixes letters, numbers, and symbols.
          Use a different password for each account.</li>
          <li><strong>Multifactor authentication (MFA)</strong> asks for two or more different kinds of proof:
            <ul>
              <li>something you <strong>know</strong> (a password or PIN),</li>
              <li>something you <strong>have</strong> (your phone, which gets a code),</li>
              <li>something you <strong>are</strong> (your fingerprint or face).</li>
            </ul>
          Even if a criminal steals your password, they still cannot log in without the second factor.</li>
        </ul>
        <h3>Encryption</h3>
        <p><strong>Encryption</strong> changes data into a secret form that people cannot read without a <strong>key</strong>.
        <strong>Decryption</strong> changes it back.</p>
        <table>
          <tr><th>Type</th><th>How it works</th></tr>
          <tr><td><strong>Symmetric encryption</strong></td><td>the <em>same</em> key is used to encrypt and to decrypt. Both people must already have the secret key.</td></tr>
          <tr><td><strong>Public key encryption</strong></td><td>uses <em>two</em> keys. The <strong>public key</strong> is shared with everyone and is used to encrypt.
          Only the matching <strong>private key</strong>, which the owner keeps secret, can decrypt.</td></tr>
        </table>
        <p>With public key encryption, anyone can send you a secret message, but only you can read it.</p>
        <p>A <strong>certificate authority (CA)</strong> is a trusted organization that gives out digital certificates.
        A certificate proves that a website really belongs to who it says it is (that the public key belongs to the real bank, not a fake one).
        Your browser checks it when you see the lock symbol and <code>https</code> in the address.</p>
        <h3>Dangers</h3>
        <table>
          <tr><th>Word</th><th>Meaning</th></tr>
          <tr><td><strong>malware</strong></td><td>any software made to damage a computer or to get access to it without permission</td></tr>
          <tr><td><strong>computer virus</strong></td><td>malware that attaches to another program and copies itself when that program runs</td></tr>
          <tr><td><strong>phishing</strong></td><td>a trick to make you give personal information, for example a fake email "from your bank" with a link to a fake login page</td></tr>
          <tr><td><strong>keylogging</strong></td><td>a program that secretly records every key you press, to steal passwords</td></tr>
          <tr><td><strong>rogue access point</strong></td><td>a wireless network (Wi-Fi) set up without permission, often by a criminal, to read the data of people who connect to it</td></tr>
        </table>
        <div class="tip">Keep your software updated, do not open unknown attachments or links, check the sender of emails,
        and be careful with free public Wi-Fi.</div>
      `
    }
  ],
  exercises: [
    {
      id: "ap07-ex1",
      title: "Unintended effects",
      type: "mc",
      instructions: `<p>A fitness app lets users share their running routes on a public map. Later, people notice that the map
      shows where some users live, because their runs always start at their home. Which term best describes this?</p>`,
      choices: [
        "The digital divide",
        "An unintended harmful effect",
        "Crowdsourcing",
        "Symmetric encryption"
      ],
      answer: 1,
      explain: "The creators wanted people to share routes. They did not plan to show where users live. That is an unintended harmful effect.",
      hints: [
        "Did the creators of the app want to show where users live?",
        "Look for the choice that means \"a bad effect that nobody planned\"."
      ]
    },
    {
      id: "ap07-ex2",
      title: "The digital divide",
      type: "mc",
      instructions: `<p>A school asks all students to do their homework online. Which situation is an example of the digital divide?</p>`,
      choices: [
        "Some students type faster than others.",
        "Some students prefer to read on paper.",
        "Some students do not have a computer or Internet access at home.",
        "The school website has a bug in the homework page."
      ],
      answer: 2,
      explain: "The digital divide is the difference between people who have access to computers and the Internet and people who do not.",
      hints: [
        "The digital divide is about <em>access</em>.",
        "Which choice describes students who cannot get online at all?"
      ]
    },
    {
      id: "ap07-ex3",
      title: "Computing bias",
      type: "mc",
      instructions: `<p>A company builds a program that decides who gets a job interview. The program learned from the company's
      hiring decisions of the last 20 years, when the company hired mostly men. What is the most likely problem?</p>`,
      choices: [
        "The program will choose fewer women, because it copies the bias in the old data.",
        "The program will be fair, because computers do not have opinions.",
        "The program will be too slow to be useful.",
        "The program will choose people at random."
      ],
      answer: 0,
      explain: "A program that learns from biased data copies that bias. The old decisions favored men, so the program will too.",
      hints: [
        "A program learns from the examples it is given.",
        "If the examples are unfair, what will the program learn?"
      ]
    },
    {
      id: "ap07-ex4",
      title: "Citizen science",
      type: "mc",
      instructions: `<p>Which is the best example of <strong>citizen science</strong>?</p>`,
      choices: [
        "A scientist runs a computer simulation in her lab.",
        "A company sells a weather app.",
        "A government saves birth records in a database.",
        "Thousands of volunteers use an app to report the birds they see, and scientists study the data."
      ],
      answer: 3,
      explain: "In citizen science, ordinary people help collect or study data for scientific research.",
      hints: [
        "Citizen science needs ordinary people, not only scientists.",
        "Which choice has many volunteers helping with research?"
      ]
    },
    {
      id: "ap07-ex5",
      title: "Creative Commons",
      type: "mc",
      instructions: `<p>A student finds a photo with a Creative Commons license that says: "You can share and change this photo
      if you name the creator." What should the student do to use it in a school project?</p>`,
      choices: [
        "Nothing. All photos on the Internet are free to use.",
        "Use the photo and name the creator, as the license asks.",
        "The student cannot use the photo at all, because it has copyright.",
        "Use the photo and say that the student took it."
      ],
      answer: 1,
      explain: "A Creative Commons license gives permission with rules. Here the rule is to name the creator. Saying it is your own photo would be plagiarism.",
      hints: [
        "A Creative Commons license is a permission with some rules.",
        "What does this license ask you to do?"
      ]
    },
    {
      id: "ap07-ex6",
      title: "Multifactor authentication",
      type: "mc",
      instructions: `<p>Which of these is an example of <strong>multifactor authentication</strong>?</p>`,
      choices: [
        "Typing a password two times",
        "Using a very long password",
        "Typing a password and then a code that is sent to your phone",
        "Answering two security questions"
      ],
      answer: 2,
      explain: "Multifactor authentication uses different kinds of proof. The password is something you know, and the phone is something you have.",
      hints: [
        "The factors must be different <em>kinds</em>: something you know, something you have, something you are.",
        "A password and security questions are both \"something you know\"."
      ]
    },
    {
      id: "ap07-ex7",
      title: "Public key encryption",
      type: "mc",
      instructions: `<p>Lena wants to send Omar a secret message using public key encryption. Which key should Lena use to
      encrypt the message?</p>`,
      choices: [
        "Lena's private key",
        "Lena's public key",
        "Omar's private key",
        "Omar's public key"
      ],
      answer: 3,
      explain: "Lena encrypts with Omar's public key, which everyone may know. Only Omar's private key can decrypt it, and only Omar has it.",
      hints: [
        "Only Omar should be able to read the message.",
        "Lena cannot know Omar's private key. Which of Omar's keys is shared with everyone?"
      ]
    },
    {
      id: "ap07-ex8",
      title: "Phishing",
      type: "mc",
      instructions: `<p>Sam gets an email that looks like it is from his bank. It says: "Your account is locked. Click this link
      and type your password to open it." The link goes to a website that looks like the bank but is not. What is this?</p>`,
      choices: [
        "Phishing",
        "Keylogging",
        "A rogue access point",
        "A certificate authority"
      ],
      answer: 0,
      explain: "Phishing tricks people into giving personal information, often with a fake email and a fake website.",
      hints: [
        "The criminal does not install a program. They <em>trick</em> Sam into typing his password.",
        "Which word means a fake message that asks for personal information?"
      ]
    }
  ]
});
