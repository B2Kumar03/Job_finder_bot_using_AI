// script.js

const questions = [
    // Reasoning (5 Questions)
    {
      question: "Which shape is the odd one out?",
      options: ["Circle", "Square", "Triangle", "Rectangle"],
      correct: "Circle",
    },
    {
      question: "Fill in the blank: 2, 4, 6, ___, 10",
      options: ["7", "8", "9", "11"],
      correct: "8",
    },
    {
      question: "Identify the next letter in the series: A, C, E, ___",
      options: ["F", "G", "H", "I"],
      correct: "G",
    },
    {
      question: "Which number does not belong in the series? 2, 3, 5, 8, 13",
      options: ["2", "3", "8", "13"],
      correct: "8",
    },
    {
      question: "Identify the correct logic: All apples are fruits. Some fruits are sweet.",
      options: [
        "All apples are sweet",
        "Some apples are sweet",
        "All sweet things are apples",
        "No conclusion can be drawn",
      ],
      correct: "No conclusion can be drawn",
    },
  
    // Mathematics (35 Questions)
    {
      question: "What is the cardinality of the set {1, 2, 3, 4, 5}?",
      options: ["3", "4", "5", "6"],
      correct: "5",
    },
    {
      question: "The probability of flipping a coin and getting heads is:",
      options: ["1", "1/2", "1/4", "0"],
      correct: "1/2",
    },
    {
      question: "Solve: If x + 3 = 7, what is x?",
      options: ["2", "3", "4", "5"],
      correct: "4",
    },
    {
      question: "What is the intersection of {1, 2, 3} and {3, 4, 5}?",
      options: ["{3}", "{1, 2}", "{4, 5}", "∅"],
      correct: "{3}",
    },
    {
      question: "Which of the following is an arithmetic progression?",
      options: ["2, 4, 6, 8", "1, 2, 4, 8", "3, 6, 12", "5, 10, 15, 31"],
      correct: "2, 4, 6, 8",
    },
    {
      question: "Find the derivative of x² with respect to x.",
      options: ["2x", "x", "x²", "2x²"],
      correct: "2x",
    },
    {
      question: "Find the determinant of the matrix [[1, 2], [3, 4]].",
      options: ["-2", "1", "2", "4"],
      correct: "-2",
    },
    {
      question: "What is the equation of a circle with center (0, 0) and radius 5?",
      options: ["x² + y² = 25", "x² + y² = 5", "x + y = 5", "x² + y² = 10"],
      correct: "x² + y² = 25",
    },
    {
      question: "The value of sin(90°) is:",
      options: ["0", "1", "1/2", "-1"],
      correct: "1",
    },
    // 25 more mathematics questions here based on set theory, probability, algebra, etc.
  
    // Computer Science (35 Questions)
    {
      question: "Which of the following is an operating system?",
      options: ["Windows", "Google", "Python", "MySQL"],
      correct: "Windows",
    },
    {
      question: "Which scheduling algorithm selects the process with the shortest burst time first?",
      options: [
        "Round Robin",
        "Shortest Job Next (SJN)",
        "First Come First Serve",
        "Priority Scheduling",
      ],
      correct: "Shortest Job Next (SJN)",
    },
    {
      question: "Which data structure uses FIFO (First In, First Out)?",
      options: ["Stack", "Queue", "Array", "Tree"],
      correct: "Queue",
    },
    {
      question: "Which of the following is a binary tree?",
      options: ["Heap", "Hash Table", "Graph", "Array"],
      correct: "Heap",
    },
    {
      question: "Which data structure is best for searching data quickly?",
      options: ["Array", "Linked List", "Hash Table", "Stack"],
      correct: "Hash Table",
    },
    {
      question: "What is the role of a compiler?",
      options: [
        "To execute code line by line",
        "To translate high-level code to machine code",
        "To optimize the database",
        "To manage files on the system",
      ],
      correct: "To translate high-level code to machine code",
    },
    {
      question: "What does CPU stand for?",
      options: [
        "Central Programming Unit",
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Process Utility",
      ],
      correct: "Central Processing Unit",
    },
    {
      question: "In a relational database, a column is also known as a:",
      options: ["Field", "Tuple", "Row", "Key"],
      correct: "Field",
    },
    {
      question: "Which of these is not a fundamental logic gate?",
      options: ["AND", "OR", "NOT", "XOR"],
      correct: "XOR",
    },
    // 25 more computer science questions here based on OS, DS, digital fundamentals, etc.
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion(index) {
    const questionContainer = document.getElementById("questions");
    const question = questions[index];
    questionContainer.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      ${question.options.map((opt, i) => `
        <label>
          <input type="radio" name="answer" value="${opt}"> ${opt}
        </label><br>
      `).join("")}
    `;
  }
  
  function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected && selected.value === questions[currentQuestion].correct) score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      alert("You have reached the end of the quiz. Submit your answers!");
    }
  }
  
  function prevQuestion() {
    if (currentQuestion > 0) currentQuestion--;
    showQuestion(currentQuestion);
  }
  
  function submitQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = score;
  }
  
  function startTimer(duration) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
      document.getElementById("time").textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      if (--timer < 0) {
        alert("Time's up!");
        submitQuiz();
      }
    }, 1000);
  }
  
  // Initialize Quiz
  showQuestion(0);
  startTimer(60 * 60);
  