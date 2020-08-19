// Variables
var startBtn = document.querySelector("#start"); //start button

const quizContainer = document.getElementById("quiz");
const questionsContainer = document.getElementById("questions");
const answersContainer = document.getElementById("answers");
const resultsContainer = document.getElementById("results");
const counter = document.getElementById("countdown");
const startEl = document.getElementById("start");

// create our questions
var questions = [
  {
    question:
      "What are variables used for in JavaScript Programs??\n(a) Storing numbers, dates, or other values\n(b) Varying randomly\n(c) Causing high-school algebra flashbacks\n(d) None of the above",
    answer: "a",
  },
  {
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.?\n(a) Client-side\n(b) Server-side\n(c) Local\n(d) Native",
    answer: "a",
  },
  {
    question:
      "Which of the following are capabilities of functions in JavaScript??\n(a) Return a value\n(b) Accept parameters and Return a value\n(c) Accept parameters\n(d) None of the above",
    answer: "c",
  },
  {
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.\n(a) <SCRIPT>\n(b) <BODY>\n(c) <HEAD>\n(d) <TITLE>",
    answer: "a",
  },
  {
    question:
      "Which is the correct way to write a JavaScript array?\n(a) var txt = new Array(1:'tim',2:'kim',3:'jim')\n(b) var txt = new Array:1=('tim')2=('kim')3=('jim')\n(c) var txt = new Array('tim','kim','jim')\n(d) var txt = new Array='tim','kim','jim'",
    answer: "c",
  },
];

var score = 0;
for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].question);
  if (response == questions[i].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("WRONG!");
  }
}
alert("you got " + score + "/" + questions.length);

// Functions
function buildQuiz() {}
const output = [];

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
}

// Countdown
// var myCountdown = $("#countdown").progressBarTimer({
//   autostart: true,
//   timeLimit: 120,
// });
// myCountdown.start();

// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");

// on start, ask questions
startEl.addEventListener("click", startBtn);

// on submit, show results
submitButton.addEventListener("click", showResults);

window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
  document.querySelector("#resultsContainer").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

$("#answersElement").Survey({ model: survey });
