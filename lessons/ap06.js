// AP CSP, chapter 6 — Big Idea 4 (Computer Systems and Networks): the Internet, fault tolerance,
// scalability, and parallel and distributed computing. Follows the AP CSP Course and Exam Description.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap06", {
  intro: `
    <p>Every time you open a web page or send a message, your device talks to other computers.
    This chapter explains <strong>how</strong> that works: how data travels over the Internet,
    why the Internet keeps working when parts of it break, and how many computers can work together
    to finish a job faster.</p>
    <p>On the AP exam, Big Idea 4 is a small part of the questions, but the questions are often easy points
    if you know the words.</p>
  `,
  lessons: [
    {
      id: "ap06-l1",
      title: "How the Internet works",
      html: `
        <p>First, some words you need for the exam:</p>
        <table>
          <tr><th>Word</th><th>Meaning</th></tr>
          <tr><td><strong>computing device</strong></td><td>a machine that can run a program, for example a phone, a laptop, a server, or a router</td></tr>
          <tr><td><strong>computing system</strong></td><td>a group of computing devices and programs that work together for one purpose</td></tr>
          <tr><td><strong>computer network</strong></td><td>a group of computing devices that are connected and can send data to each other</td></tr>
          <tr><td><strong>path</strong></td><td>the list of connected devices that data goes through, from the sender to the receiver</td></tr>
          <tr><td><strong>routing</strong></td><td>the process of finding a path for the data</td></tr>
          <tr><td><strong>bandwidth</strong></td><td>the largest amount of data that can be sent in a fixed amount of time, usually measured in bits per second</td></tr>
        </table>
        <p>The <strong>Internet</strong> is a network of networks. Millions of small networks (at homes, schools, and companies)
        are connected together.</p>
        <h3>Protocols</h3>
        <p>A <strong>protocol</strong> is an agreed set of rules for how devices send and receive data.
        Because every device follows the same rules, a phone from one company can talk to a server from another company.</p>
        <ul>
          <li><strong>IP (Internet Protocol)</strong> gives every device an <strong>IP address</strong>, a unique number, like a home address for mail.
          Data is sent to an IP address.</li>
          <li><strong>TCP (Transmission Control Protocol)</strong> makes sure every packet arrives. It puts packets back in the right order
          and asks again for packets that are lost. TCP and IP are used together and are often written <strong>TCP/IP</strong>.</li>
          <li><strong>UDP (User Datagram Protocol)</strong> sends packets faster, but it does not check that they all arrive.
          It is used for live video calls and games, where speed matters more than a few lost packets.</li>
          <li><strong>HTTP (HyperText Transfer Protocol)</strong> is the protocol of the World Wide Web. Browsers use it to ask for web pages.</li>
        </ul>
        <h3>IPv4 and IPv6</h3>
        <p><strong>IPv4</strong> addresses use 32 bits. That gives about 4.3 billion different addresses (2<sup>32</sup>),
        and that is not enough for all the devices in the world. <strong>IPv6</strong> addresses use 128 bits,
        so there are 2<sup>128</sup> addresses: far more than we will ever need.</p>
        <h3>Packets</h3>
        <p>Data is not sent in one big piece. It is cut into small pieces called <strong>packets</strong>.
        Each packet has the data and <strong>metadata</strong> (data about the data), for example the IP address of the sender
        and of the receiver, and its number in the order.</p>
        <ul>
          <li>Packets of the same message can take <strong>different paths</strong>.</li>
          <li>So they can arrive <strong>out of order</strong>, and some can be lost.</li>
          <li>The receiving device uses the metadata to put the packets back together in the right order.</li>
        </ul>
        <div class="tip"><strong>The Internet is not the World Wide Web.</strong> The Internet is the network: the devices,
        cables, and protocols. The <strong>World Wide Web</strong> is a system of linked pages and files that <em>uses</em> the
        Internet, with the HTTP protocol. Email and online games also use the Internet, but they are not the Web.</div>
      `
    },
    {
      id: "ap06-l2",
      title: "Fault tolerance and redundancy",
      html: `
        <p>Parts of the Internet break all the time: a cable is cut, or a router stops working.
        But the Internet keeps working. Why?</p>
        <p>Because there is <strong>redundancy</strong>: there are extra connections, so there is more than one path
        between two devices. When one path breaks, the data uses another path.</p>
        <p>A system is <strong>fault tolerant</strong> when it can keep working even if some parts fail.
        Redundancy makes the Internet fault tolerant.</p>
        <p>Look at this network. Each letter is a device. Each line is a connection.</p>
        <pre><code>A ----- B ----- D
|       |       |
|       |       |
C ----- E ----- F</code></pre>
        <p><strong>Question:</strong> can A still send data to F if the connection A–B breaks?</p>
        <p><strong>Yes.</strong> The path A → C → E → F still works.</p>
        <p><strong>Question:</strong> what is the smallest number of connections that must break so that A and F cannot communicate?</p>
        <p>A has only two connections: A–B and A–C. If both break, A is alone. If only one connection breaks
        (any one), there is always another path. So the answer is <strong>2</strong>.</p>
        <div class="tip"><strong>How to answer these questions:</strong>
        <ol>
          <li>Try to break one connection. Can you still find a path? Try each connection.</li>
          <li>If one is never enough, try two. A quick place to look: the device with the fewest connections.</li>
          <li>A device with only <strong>one</strong> connection is a <em>single point of failure</em>: if that one connection breaks, the device is cut off.</li>
        </ol></div>
        <p>Redundancy is not free. Extra connections cost money and work. But they make the network more reliable.</p>
      `
    },
    {
      id: "ap06-l3",
      title: "Scalability and open protocols",
      html: `
        <p><strong>Scalability</strong> is the ability of a system to grow (for example, to serve many more users)
        without big changes and without slowing down too much.</p>
        <p>The Internet was designed to be scalable. In the beginning it connected a few computers.
        Today it connects billions of devices, and it still uses the same basic ideas.</p>
        <p>Two design choices made this possible:</p>
        <ul>
          <li><strong>Open protocols.</strong> The protocols of the Internet (like TCP/IP and HTTP) are <em>open</em>:
          anyone can read them and use them for free. No company owns them. So any company can make a device or a
          program that works with the Internet.</li>
          <li><strong>No central control of paths.</strong> Routers decide the path of each packet. No single computer
          has to know about all the others. A new network can join by connecting to any router.</li>
        </ul>
        <div class="tip">On the exam, if a question asks <em>why the Internet could grow so fast</em> or <em>why devices from
        different companies work together</em>, think: <strong>open, standard protocols</strong>.</div>
      `
    },
    {
      id: "ap06-l4",
      title: "Parallel and distributed computing",
      html: `
        <p>There are three ways to run a group of tasks:</p>
        <ul>
          <li><strong>Sequential computing:</strong> one processor does the tasks one after the other.</li>
          <li><strong>Parallel computing:</strong> a program is split into parts, and several processors work on the parts at the same time.</li>
          <li><strong>Distributed computing:</strong> many separate computers (often in different places) work together over a network.
          It is used for problems that are too big for one computer, because of time or storage.</li>
        </ul>
        <h3>How long does it take?</h3>
        <ul>
          <li><strong>Sequential time</strong> = the sum of the times of all the tasks.</li>
          <li><strong>Parallel time</strong> = the time until the <em>last</em> processor finishes. Processors that finish early must wait.</li>
          <li><strong>Speedup</strong> = sequential time ÷ parallel time. A speedup of 2 means "twice as fast".</li>
        </ul>
        <h3>Worked example</h3>
        <p>Three tasks take 30, 40, and 50 seconds. The tasks do not depend on each other.</p>
        <p><strong>Sequential:</strong> 30 + 40 + 50 = <strong>120 seconds</strong>.</p>
        <p><strong>Parallel with 2 processors:</strong> each task runs on one processor. We try the possible ways to split them:</p>
        <table>
          <tr><th>Processor 1</th><th>Processor 2</th><th>Time (the larger one)</th></tr>
          <tr><td>50</td><td>30 + 40 = 70</td><td>70</td></tr>
          <tr><td>50 + 30 = 80</td><td>40</td><td>80</td></tr>
          <tr><td>50 + 40 = 90</td><td>30</td><td>90</td></tr>
        </table>
        <p>The best split takes <strong>70 seconds</strong>. Speedup = 120 ÷ 70 ≈ <strong>1.7</strong>.</p>
        <div class="tip"><strong>Two important rules:</strong>
        <ul>
          <li>Parallel time can never be shorter than the <strong>slowest single task</strong>. Even with 100 processors,
          these tasks need at least 50 seconds, because one processor must run the 50-second task.</li>
          <li>If some part of a program must run sequentially (for example, one step needs the result of another),
          parallel time = the sequential part + the longest parallel part. Adding more processors does not make that part faster.</li>
        </ul></div>
      `
    }
  ],
  exercises: [
    {
      id: "ap06-ex1",
      title: "IP addresses",
      type: "mc",
      instructions: `<p>What is the main purpose of an IP address?</p>`,
      choices: [
        "To make sure all packets arrive in the right order",
        "To encrypt data so that other people cannot read it",
        "To give each device on the Internet a unique number, so data can be sent to it",
        "To store the web pages that a user visits"
      ],
      answer: 2,
      explain: "An IP address is like a home address for a device. Packets carry the IP address of the receiver so the network knows where to send them.",
      hints: [
        "IP stands for Internet Protocol. The word to think about is <em>address</em>.",
        "Putting packets in order is the job of TCP, not IP."
      ]
    },
    {
      id: "ap06-ex2",
      title: "Packets",
      type: "mc",
      instructions: `<p>A student sends a large photo to a friend over the Internet. Which statement is true?</p>`,
      choices: [
        "The photo is cut into packets. The packets can take different paths and arrive out of order, and then they are put back together.",
        "The photo is sent as one piece, on one fixed path that is reserved for it.",
        "All packets must take the same path, so they always arrive in order.",
        "If one packet is lost, the whole Internet stops until it is found."
      ],
      answer: 0,
      explain: "Data is sent as packets. Each packet is routed on its own, so packets can take different paths and arrive in any order. The receiver uses the metadata to rebuild the photo.",
      hints: [
        "Data on the Internet is not sent in one big piece.",
        "Each packet can be routed on its own. What does that mean for the order they arrive in?"
      ]
    },
    {
      id: "ap06-ex3",
      title: "The Internet and the Web",
      type: "mc",
      instructions: `<p>Which statement best describes the difference between the Internet and the World Wide Web?</p>`,
      choices: [
        "They are two names for the same thing.",
        "The World Wide Web is the network of devices, and the Internet is the pages on it.",
        "The Internet only works with web browsers.",
        "The Internet is the network of connected devices. The World Wide Web is a system of linked pages that uses the Internet with HTTP."
      ],
      answer: 3,
      explain: "The Internet is the network itself. The Web is one of the things that run on it, like email and online games also do.",
      hints: [
        "Email uses the Internet. Is email part of the World Wide Web?",
        "Which one is the network, and which one is the pages?"
      ]
    },
    {
      id: "ap06-ex4",
      title: "Why the Internet could grow",
      type: "mc",
      instructions: `<p>The Internet grew from a few computers to billions of devices made by many different companies.
      Which design choice helped the <strong>most</strong> with this?</p>`,
      choices: [
        "Every device must be made by the same company.",
        "The Internet uses open protocols that anyone can use for free.",
        "One central computer decides the path of every packet.",
        "Every device is connected directly to every other device."
      ],
      answer: 1,
      explain: "Open protocols let any company build devices and programs that work with the Internet. This makes the Internet scalable.",
      hints: [
        "One central computer for billions of devices would be very slow and a single point of failure.",
        "How can devices from different companies understand each other?"
      ]
    },
    {
      id: "ap06-ex5",
      title: "Breaking connections",
      type: "mc",
      instructions: `
        <p>In this network, each letter is a device and each line is a connection.</p>
        <pre><code>P ----- Q ----- R
|       |       |
|       |       |
S ----- T ----- U
        |
        |
        V</code></pre>
        <p>What is the <strong>smallest</strong> number of connections that must break so that devices
        <strong>P</strong> and <strong>R</strong> can no longer communicate?</p>
      `,
      choices: ["<code>1</code>", "<code>2</code>", "<code>3</code>", "<code>4</code>"],
      answer: 1,
      explain: "If any one connection breaks, there is still another path from P to R. If P–Q and P–S both break, P is cut off. So the answer is 2.",
      hints: [
        "Try to break one connection, for example P–Q. Can you still find a path from P to R?",
        "P has only two connections. What happens if both of them break?"
      ]
    },
    {
      id: "ap06-ex6",
      title: "Single point of failure",
      type: "mc",
      instructions: `
        <p>Look at the same network again.</p>
        <pre><code>P ----- Q ----- R
|       |       |
|       |       |
S ----- T ----- U
        |
        |
        V</code></pre>
        <p>Which change would make the network <strong>more fault tolerant</strong> for device V?</p>
      `,
      choices: [
        "Remove the connection Q–T.",
        "Remove the connection T–V and connect V to P.",
        "Give V a faster connection to T.",
        "Add a connection between V and U."
      ],
      answer: 3,
      explain: "V has only one connection (T–V), so it is a single point of failure. A second connection, like V–U, gives V a redundant path.",
      hints: [
        "How many connections does V have now? What happens if that one breaks?",
        "Fault tolerance comes from redundancy: more than one path."
      ]
    },
    {
      id: "ap06-ex7",
      title: "Parallel time",
      type: "mc",
      instructions: `
        <p>A program has four tasks that do not depend on each other. They take
        <strong>20, 25, 45, and 10</strong> seconds. The computer has <strong>2 processors</strong>, and each task
        runs on one processor.</p>
        <p>What is the <strong>shortest</strong> time to finish all four tasks in parallel?</p>
      `,
      choices: ["45 seconds", "50 seconds", "55 seconds", "100 seconds"],
      answer: 2,
      explain: "The total is 100 seconds. No group of tasks adds up to exactly 50, so the best split is 45 + 10 = 55 and 20 + 25 = 45. The slower processor needs 55 seconds.",
      hints: [
        "Split the tasks into two groups. The parallel time is the time of the slower group.",
        "Can you find a group of tasks that adds up to exactly 50? If not, what is the closest larger number?"
      ]
    },
    {
      id: "ap06-ex8",
      title: "Speedup",
      type: "mc",
      instructions: `
        <p>A job takes <strong>120 seconds</strong> when it runs sequentially. With parallel computing, the same job
        takes <strong>40 seconds</strong>. What is the speedup?</p>
      `,
      choices: ["<code>3</code>", "<code>80</code>", "<code>160</code>", "<code>1/3</code>"],
      answer: 0,
      explain: "Speedup = sequential time ÷ parallel time = 120 ÷ 40 = 3. The parallel version is 3 times as fast.",
      hints: [
        "Speedup is a division, not a subtraction.",
        "Divide the sequential time by the parallel time."
      ]
    }
  ]
});
