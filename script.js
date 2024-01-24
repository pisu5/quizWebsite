
const questions = [
  {
    question: "What is Java?",
    answers: [
      { text: "A scripting language", correct: false },
      { text: "A programming language", correct: true },
      { text: "A database management system", correct: false },
      { text: "An operating system", correct: false },
    ],
  },
  {
    question: "What does OOP stand for?",
    answers: [
      { text: "Object-Oriented Programming", correct: true },
      { text: "Online Operating Platform", correct: false },
      { text: "Open Office Protocol", correct: false },
      { text: "Optimized Object Processing", correct: false },
    ],
  },
  {
    question: "What is a class in Java?",
    answers: [
      { text: "A data type", correct: false },
      { text: "A function", correct: false },
      { text: "A blueprint for objects", correct: true },
      { text: "A loop construct", correct: false },
    ],
  },
  {
    question: "What is an interface in Java?",
    answers: [
      { text: "A class that cannot be instantiated", correct: true },
      { text: "A built-in data type", correct: false },
      { text: "A Java keyword", correct: false },
      { text: "A file handling mechanism", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'this' keyword in Java?",
    answers: [
      { text: "To create a new instance of a class", correct: false },
      { text: "To refer to the current object instance", correct: true },
      { text: "To define a constructor", correct: false },
      { text: "To declare a static method", correct: false },
    ],
  },
  {
    question: "Which keyword is used for inheritance in Java?",
    answers: [
      { text: "extends", correct: true },
      { text: "implements", correct: false },
      { text: "inherit", correct: false },
      { text: "derive", correct: false },
    ],
  },
  {
    question: "What is polymorphism in OOP?",
    answers: [
      { text: "A programming paradigm", correct: false },
      {
        text: "The ability of a single function to perform different tasks",
        correct: true,
      },
      { text: "A database concept", correct: false },
      { text: "A type of loop", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'super' keyword in Java?",
    answers: [
      { text: "To call the superclass constructor", correct: true },
      { text: "To create an instance of a subclass", correct: false },
      { text: "To reference the current object", correct: false },
      { text: "To declare a static variable", correct: false },
    ],
  },
  {
    question: "What is encapsulation in OOP?",
    answers: [
      { text: "The ability to hide implementation details", correct: true },
      { text: "A type of loop", correct: false },
      { text: "A design pattern", correct: false },
      { text: "A programming language", correct: false },
    ],
  },
  {
    question: "What is an abstract class in Java?",
    answers: [
      { text: "A class that cannot be instantiated", correct: true },
      { text: "A class with only abstract methods", correct: false },
      { text: "A class with no methods", correct: false },
      { text: "A class that is not part of any package", correct: false },
    ],
  },
  {
    question: "What is the difference between '==' and 'equals()' in Java?",
    answers: [
      { text: "They are the same", correct: false },
      {
        text: "'==' compares object references, 'equals()' compares content",
        correct: true,
      },
      {
        text: "'==' compares content, 'equals()' compares object references",
        correct: false,
      },
      { text: "There is no difference", correct: false },
    ],
  },
  {
    question: "What is a constructor in Java?",
    answers: [
      { text: "A method used to initialize an object", correct: true },
      { text: "A variable with a constant value", correct: false },
      { text: "A loop construct", correct: false },
      { text: "A reserved keyword", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'static' keyword in Java?",
    answers: [
      { text: "To define a constant variable", correct: false },
      {
        text: "To declare a method that belongs to the class, not the instance",
        correct: true,
      },
      { text: "To create an instance of a class", correct: false },
      { text: "To call the superclass constructor", correct: false },
    ],
  },
  {
    question: "What is method overloading in Java?",
    answers: [
      {
        text: "The ability of a class to inherit from multiple classes",
        correct: false,
      },
      {
        text: "The ability to define multiple methods with the same name in the same class",
        correct: true,
      },
      {
        text: "The ability to override a method in a subclass",
        correct: false,
      },
      {
        text: "The process of hiding the implementation details of a class",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the 'final' keyword in Java?",
    answers: [
      { text: "To declare a constant variable", correct: true },
      { text: "To indicate the end of a program", correct: false },
      { text: "To prevent a class from being extended", correct: false },
      { text: "To mark a method as deprecated", correct: false },
    ],
  },
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  let person = prompt("Please enter your name", "");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  // Clear existing answer buttons
  answerButtons.innerHTML = "";

  // Create buttons for each answer
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer.correct) {
    score++;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  let result = "Congratulations:${person}You made a ${score}";
  
  
  const scoreDisplayy = document.getElementById("quiz-score");
  const resultC = document.getElementById("result-container");
  let printr = document.getElementById("score");
  printr.innerHTML = result;
  scoreDisplayy.textContent = score;
  const qc = document.getElementById("quiz-container");
  qc.classList.add("resultHidden");
  resultC.classList.remove("resultHidden");
 
  // Optionally, reset the game or navigate to another page
}
// Call startGame() when the page loads
document.addEventListener("DOMContentLoaded", startGame);
