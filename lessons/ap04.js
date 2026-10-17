// AP CSP, chapter 4 — Big Idea 3 (Algorithms and Programming): REPEAT loops, lists (index starts at 1),
// list traversal, and linear and binary search. Pseudocode follows the AP Exam Reference Sheet.
// Lesson and exercise html is written by the course author (trusted content).
addChapterContent("ap04", {
  intro: `
    <p>In this chapter you learn how AP pseudocode <strong>repeats</strong> code and how it stores many values in a <strong>list</strong>.</p>
    <p>You know loops and lists from Python. But be careful: AP pseudocode has two big differences.
    <code>REPEAT UNTIL</code> works the opposite way of <code>while</code>, and lists start at index <strong>1</strong>, not 0.
    The exam often tests exactly these two traps.</p>
  `,
  lessons: [
    {
      id: "ap04-l1",
      title: "REPEAT n TIMES and REPEAT UNTIL",
      html: `
        <p><code>REPEAT n TIMES</code> runs the code inside the braces <code>{ }</code> exactly n times:</p>
        <pre><code>REPEAT 3 TIMES
{
   DISPLAY("Hi")
}</code></pre>
        <p>Output: <code>Hi Hi Hi</code></p>
        <p><code>REPEAT UNTIL (condition)</code> runs the code again and again <strong>until</strong> the condition becomes <strong>true</strong>.
        Then it stops:</p>
        <pre><code>count ← 1
REPEAT UNTIL (count &gt; 3)
{
   DISPLAY(count)
   count ← count + 1
}</code></pre>
        <p>Output: <code>1 2 3</code>. When count is 4, <code>count &gt; 3</code> is true, so the loop stops.</p>
        <div class="tip"><strong>The big trap:</strong> Python's <code>while</code> runs <em>while</em> the condition is true.
        AP's <code>REPEAT UNTIL</code> runs <em>while</em> the condition is <strong>false</strong>.
        To write REPEAT UNTIL in Python, turn the condition around (use the opposite condition, or <code>not</code>).</div>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th></tr>
          <tr><td><code>REPEAT 5 TIMES</code></td><td><code>for i in range(5):</code></td></tr>
          <tr><td><code>REPEAT UNTIL (count &gt; 3)</code></td><td><code>while count &lt;= 3:</code></td></tr>
          <tr><td><code>REPEAT UNTIL (x = 0)</code></td><td><code>while x != 0:</code></td></tr>
        </table>
        <p>Like in Python, the condition is checked <strong>before</strong> each round. If the condition is already true
        at the start, the code inside never runs.</p>
        <p>If the condition never becomes true, the loop never stops. This is an <strong>infinite loop</strong>:</p>
        <pre><code>x ← 1
REPEAT UNTIL (x = 10)
{
   x ← x + 2
}</code></pre>
        <p>x is 1, 3, 5, 7, 9, 11, ... It is never exactly 10, so the loop runs forever.</p>
      `
    },
    {
      id: "ap04-l2",
      title: "Lists start at index 1",
      html: `
        <p>A <strong>list</strong> stores many values in order. Each value is an <strong>element</strong>.
        The position of an element is its <strong>index</strong>.</p>
        <pre><code>colors ← ["red", "green", "blue"]</code></pre>
        <table>
          <tr><th>Index in AP pseudocode</th><td>1</td><td>2</td><td>3</td></tr>
          <tr><th>Index in Python</th><td>0</td><td>1</td><td>2</td></tr>
          <tr><th>Element</th><td>"red"</td><td>"green"</td><td>"blue"</td></tr>
        </table>
        <div class="tip"><strong>Most important rule:</strong> in AP pseudocode the <strong>first</strong> element is <code>aList[1]</code>.
        So <code>colors[1]</code> is <code>"red"</code>, and <code>colors[3]</code> is <code>"blue"</code>.
        Using an index smaller than 1 or bigger than the length of the list is an <strong>error</strong>, and the program stops.</div>
        <p>The list operations from the reference sheet:</p>
        <table>
          <tr><th>AP pseudocode</th><th>What it does</th><th>Python</th></tr>
          <tr><td><code>x ← aList[i]</code></td><td>gets the element at index i</td><td><code>x = a_list[i - 1]</code></td></tr>
          <tr><td><code>aList[i] ← x</code></td><td>replaces the element at index i</td><td><code>a_list[i - 1] = x</code></td></tr>
          <tr><td><code>APPEND(aList, value)</code></td><td>adds value at the end</td><td><code>a_list.append(value)</code></td></tr>
          <tr><td><code>INSERT(aList, i, value)</code></td><td>puts value at index i. Elements from index i move one place to the right.</td><td><code>a_list.insert(i - 1, value)</code></td></tr>
          <tr><td><code>REMOVE(aList, i)</code></td><td>removes the element at index i. Later elements move one place to the left.</td><td><code>a_list.pop(i - 1)</code></td></tr>
          <tr><td><code>LENGTH(aList)</code></td><td>the number of elements</td><td><code>len(a_list)</code></td></tr>
        </table>
        <p>Example:</p>
        <table>
          <tr><th>Statement</th><th>nums after the statement</th></tr>
          <tr><td><code>nums ← [10, 20, 30]</code></td><td><code>[10, 20, 30]</code></td></tr>
          <tr><td><code>INSERT(nums, 2, 15)</code></td><td><code>[10, 15, 20, 30]</code></td></tr>
          <tr><td><code>APPEND(nums, 40)</code></td><td><code>[10, 15, 20, 30, 40]</code></td></tr>
          <tr><td><code>REMOVE(nums, 1)</code></td><td><code>[15, 20, 30, 40]</code></td></tr>
          <tr><td><code>DISPLAY(LENGTH(nums))</code></td><td>no change. It shows <code>4</code>.</td></tr>
        </table>
        <p><code>aList ← bList</code> puts a <strong>copy</strong> of bList into aList.
        <code>aList ← []</code> makes an empty list.</p>
      `
    },
    {
      id: "ap04-l3",
      title: "FOR EACH and list traversal",
      html: `
        <p>Going through all the elements of a list, one by one, is called a <strong>traversal</strong>.
        <code>FOR EACH item IN aList</code> does this. Each round, <code>item</code> gets the next element:</p>
        <pre><code>FOR EACH item IN aList
{
   DISPLAY(item)
}</code></pre>
        <table>
          <tr><th>AP pseudocode</th><th>Python</th></tr>
          <tr><td><code>FOR EACH item IN aList</code></td><td><code>for item in a_list:</code></td></tr>
        </table>
        <p>You can also traverse with an index. Here the index starts at 1 and ends at <code>LENGTH(aList)</code>:</p>
        <pre><code>i ← 1
REPEAT UNTIL (i &gt; LENGTH(aList))
{
   DISPLAY(aList[i])
   i ← i + 1
}</code></pre>
        <p>Four traversal algorithms are very common on the exam:</p>
        <p><strong>Sum and average:</strong></p>
        <pre><code>sum ← 0
FOR EACH n IN nums
{
   sum ← sum + n
}
average ← sum / LENGTH(nums)</code></pre>
        <p><strong>Maximum</strong> (the biggest value). Start with the <em>first element</em>, not with 0,
        because all the numbers could be negative:</p>
        <pre><code>max ← nums[1]
FOR EACH n IN nums
{
   IF (n &gt; max)
   {
      max ← n
   }
}</code></pre>
        <p>For the <strong>minimum</strong> (the smallest value), use <code>&lt;</code> instead of <code>&gt;</code>.</p>
        <p><strong>Count</strong> the elements that match a condition:</p>
        <pre><code>count ← 0
FOR EACH n IN nums
{
   IF (n MOD 2 = 0)
   {
      count ← count + 1
   }
}</code></pre>
      `
    },
    {
      id: "ap04-l4",
      title: "Linear search and binary search",
      html: `
        <p>To <strong>search</strong> means to find out if a value is in a list, and where.</p>
        <p><strong>Linear search</strong> (also called sequential search) checks the elements one by one, from the first to the last.
        It works on <em>any</em> list, sorted or not. For a list with 1,000 elements, it may need 1,000 checks.</p>
        <p><strong>Binary search</strong> is much faster, but the list <strong>must be sorted</strong> (in order, for example from small to big).
        It works like this:</p>
        <ol>
          <li>Look at the element in the middle.</li>
          <li>If it is the value you want, stop.</li>
          <li>If the value you want is smaller, throw away the right half. If it is bigger, throw away the left half.</li>
          <li>Repeat with the half that is left.</li>
        </ol>
        <p>Each step throws away <strong>half</strong> of the list. So the number of steps grows very slowly:</p>
        <table>
          <tr><th>Elements in the sorted list</th><th>Linear search: at most</th><th>Binary search: at most about</th></tr>
          <tr><td>8</td><td>8 checks</td><td>4 checks</td></tr>
          <tr><td>1,000</td><td>1,000 checks</td><td>10 checks</td></tr>
          <tr><td>1,000,000</td><td>1,000,000 checks</td><td>20 checks</td></tr>
        </table>
        <div class="tip"><strong>Quick rule:</strong> how many times can you cut the number in half until 1 is left
        (drop any half that is left over)? Add 1. That is the most checks binary search needs.
        Example: 8 → 4 → 2 → 1 is 3 cuts, so at most 3 + 1 = 4 checks. In math, the number of cuts is about log<sub>2</sub> n.
        Doubling the list adds only <strong>one</strong> more step.</div>
        <p>If the list is not sorted, binary search can give a wrong answer. Then you must use linear search,
        or sort the list first.</p>
      `
    }
  ],
  exercises: [
    {
      id: "ap04-ex1",
      title: "REPEAT UNTIL",
      type: "mc",
      instructions: `
        <p>What is displayed?</p>
        <pre><code>x ← 10
REPEAT UNTIL (x &lt; 4)
{
   x ← x - 3
}
DISPLAY(x)</code></pre>
      `,
      choices: ["<code>4</code>", "<code>1</code>", "<code>7</code>", "<code>-2</code>"],
      answer: 1,
      explain: "x goes 10, 7, 4, 1. At 4, x &lt; 4 is still false, so the loop runs again and x becomes 1. Now 1 &lt; 4 is true, so the loop stops.",
      hints: [
        "The loop stops when the condition becomes true. Check the condition before each round.",
        "Is 4 &lt; 4 true or false?"
      ]
    },
    {
      id: "ap04-ex2",
      title: "First element",
      type: "mc",
      instructions: `
        <p>What is displayed?</p>
        <pre><code>pets ← ["cat", "dog", "fish", "bird"]
DISPLAY(pets[2])</code></pre>
      `,
      choices: ["<code>cat</code>", "<code>dog</code>", "<code>fish</code>", "An error, because index 2 is out of range"],
      answer: 1,
      explain: "In AP pseudocode, the first index is 1. pets[1] is cat, so pets[2] is dog.",
      hints: [
        "AP lists do not start at 0. Where do they start?",
        "pets[1] is \"cat\". What comes next?"
      ]
    },
    {
      id: "ap04-ex3",
      title: "INSERT and REMOVE",
      type: "mc",
      instructions: `
        <p>What does <code>nums</code> contain after this code runs?</p>
        <pre><code>nums ← [5, 8, 2]
INSERT(nums, 1, 7)
REMOVE(nums, 3)
APPEND(nums, 4)</code></pre>
      `,
      choices: [
        "<code>[5, 7, 2, 4]</code>",
        "<code>[7, 5, 8, 4]</code>",
        "<code>[7, 8, 2, 4]</code>",
        "<code>[7, 5, 2, 4]</code>"
      ],
      answer: 3,
      explain: "INSERT at index 1 gives [7, 5, 8, 2]. REMOVE index 3 takes away 8: [7, 5, 2]. APPEND adds 4 at the end: [7, 5, 2, 4].",
      hints: [
        "Write the list again after each line.",
        "After the INSERT, the list is [7, 5, 8, 2]. Which element is at index 3 now? (Count from 1.)"
      ]
    },
    {
      id: "ap04-ex4",
      title: "Out of range",
      type: "mc",
      instructions: `
        <p>A list <code>scores</code> has 5 elements. Which statement causes an <strong>error</strong>?</p>
      `,
      choices: [
        "<code>DISPLAY(scores[1])</code>",
        "<code>DISPLAY(scores[LENGTH(scores)])</code>",
        "<code>DISPLAY(scores[0])</code>",
        "<code>DISPLAY(scores[5])</code>"
      ],
      answer: 2,
      explain: "AP list indexes go from 1 to LENGTH(scores), here 1 to 5. Index 0 is not a valid index, so it is an error.",
      hints: [
        "What are the valid indexes for a list with 5 elements in AP pseudocode?",
        "LENGTH(scores) is 5, and index 5 is the last element. Which index is not allowed?"
      ]
    },
    {
      id: "ap04-ex5",
      title: "Trace a traversal",
      type: "mc",
      instructions: `
        <p>What is displayed?</p>
        <pre><code>nums ← [3, 8, 1, 6]
result ← 0
FOR EACH n IN nums
{
   IF (n &gt; 2)
   {
      result ← result + n
   }
}
DISPLAY(result)</code></pre>
      `,
      choices: ["<code>18</code>", "<code>3</code>", "<code>17</code>", "<code>14</code>"],
      answer: 2,
      explain: "Only 3, 8, and 6 are bigger than 2. 3 + 8 + 6 = 17. The 1 is skipped.",
      hints: [
        "Go through the list one element at a time. Is each element bigger than 2?",
        "Add only the elements that pass the IF."
      ]
    },
    {
      id: "ap04-ex6",
      title: "Binary search",
      type: "mc",
      instructions: `
        <p>Which statement about binary search is true?</p>
      `,
      choices: [
        "Binary search only works correctly on a sorted list.",
        "Binary search works on any list, sorted or not.",
        "Binary search always checks every element of the list.",
        "Binary search is always slower than linear search."
      ],
      answer: 0,
      explain: "Binary search throws away half of the list each step. This only works when the list is in order.",
      hints: [
        "Binary search looks at the middle and throws away one half. How does it know which half to throw away?",
        "It can only decide \"smaller\" or \"bigger\" if the list is in order."
      ]
    },
    {
      id: "ap04-ex7",
      title: "From REPEAT UNTIL to while",
      type: "py",
      instructions: `
        <p>Write this AP pseudocode as a Python program:</p>
        <pre><code>n ← 1
REPEAT UNTIL (n &gt; 100)
{
   n ← n * 2
}
DISPLAY(n)</code></pre>
        <p>The output should be <code>128</code>. Use a <code>while</code> loop and keep the variable name <code>n</code>.</p>
        <p>Remember: <code>while</code> needs the <strong>opposite</strong> condition.</p>
      `,
      starterCode: "n = 1\n# Write the REPEAT UNTIL loop as a while loop\n\nprint(n)\n",
      solution: "n = 1\nwhile n <= 100:\n    n = n * 2\nprint(n)\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "/while/.test(R.code)", message: "Use a while loop." },
        { check: "R.get('n') === 128", message: "At the end, n should be 128. The loop should run while n is not bigger than 100: while n <= 100:" },
        { check: "R.line('128')", message: "Print n after the loop, not inside it." }
      ],
      hints: [
        "REPEAT UNTIL (n &gt; 100) stops when n &gt; 100. So the loop must run while n is NOT bigger than 100.",
        "The opposite of <code>n &gt; 100</code> is <code>n &lt;= 100</code>.",
        "<code>while n &lt;= 100:</code> and inside it, with 4 spaces: <code>n = n * 2</code>"
      ]
    },
    {
      id: "ap04-ex8",
      title: "Find the maximum",
      type: "py",
      instructions: `
        <p>Write a function <code>find_max(numbers)</code> that <strong>returns</strong> the biggest number in the list.
        Do not use Python's <code>max()</code>. Use a loop, like the algorithm in the lesson.</p>
        <p>Example: <code>find_max([4, 9, 2])</code> returns <code>9</code>. <code>find_max([-5, -2, -8])</code> returns <code>-2</code>.</p>
      `,
      starterCode: "def find_max(numbers):\n    biggest = 0\n    # Go through the list and keep the biggest number\n    return biggest\n\nprint(find_max([4, 9, 2]))\n",
      solution: "def find_max(numbers):\n    biggest = numbers[0]\n    for n in numbers:\n        if n > biggest:\n            biggest = n\n    return biggest\n\nprint(find_max([4, 9, 2]))\n",
      tests: [
        { check: "!R.error", message: "Your program has an error. Read the message in the Output box." },
        { check: "R.call('find_max', [4, 9, 2]) === 9 && R.call('find_max', [1, 2, 3, 10]) === 10", message: "find_max([4, 9, 2]) should return 9. Go through the list and keep the biggest number you have seen." },
        { check: "R.call('find_max', [7]) === 7 && R.call('find_max', [10, 3, 5]) === 10", message: "find_max([10, 3, 5]) should return 10. Does your loop look at the first element too?" },
        { check: "R.call('find_max', [-5, -2, -8]) === -2", message: "find_max([-5, -2, -8]) should return -2. Start biggest with the first element, numbers[0], not with 0." },
        { check: "!/\\bmax\\s*\\(/.test(R.code)", message: "Do not use max(). Write the loop yourself." }
      ],
      hints: [
        "Use <code>for n in numbers:</code> and an <code>if</code> that compares n with biggest.",
        "When <code>n &gt; biggest</code>, set <code>biggest = n</code>.",
        "If all numbers are negative, starting at 0 gives the wrong answer. Start with <code>biggest = numbers[0]</code> (in Python the first index is 0)."
      ]
    }
  ]
});
