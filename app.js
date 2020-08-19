function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question(
    "What are variables used for in JavaScript Programs?",
    [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high - school algebra flashbacks",
      "None of the above",
    ],
    "Storing numbers"
  ),

  new Question(
    "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    ["Client - side", "Server - side", "Local", "Native"],
    "Client - side"
  ),

  new Question(
    "Which of the following are capabilities of functions in JavaScript?",
    [
      "Return a value",
      "Accept parameters and Return a value",
      "Accept parameters",
      "None of the above",
    ],
    "Accept parameters"
  ),

  new Question(
    "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    ["< SCRIPT >", "< BODY >", "< HEAD >", "< TITLE >"],
    "< SCRIPT >"
  ),

  new Question(
    "Which is the correct way to write a JavaScript array?",
    [
      "var txt = new Array(1: 'tim', 2: 'kim', 3: 'jim')",
      "var txt = new Array:1 = ('tim')2 = ('kim')3 = ('jim')",
      "var txt = new Array('tim', 'kim', 'jim')",
      "var txt = new Array = 'tim','kim', 'jim' ",
    ],
    " var txt = new Array('tim', 'kim', 'jim')"
  ),
];

var quiz = new Quiz(questions);
populate();

console.log(quiz.score);

var timeEl = document.querySelector(".time");
var secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft <= 0) {
      showScores();
      clearInterval(timerInterval);
    }
  }, 1000);
}
setTime();
