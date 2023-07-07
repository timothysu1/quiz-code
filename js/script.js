var startBtn = document.querySelector(".start-btn");
var submitBtn = document.querySelector(".submit-btn");
var returnHome = document.querySelector(".return-home");
var clearScores = document.querySelector(".clear-scores");

var timerEl = document.querySelector(".timer-remaining");
var startScreen = document.querySelector(".start-screen");
var quizQame = document.querySelector(".quiz-game");
var quizEnd = document.querySelector(".quiz-end");
var highscoreView = document.querySelector(".highscore-view");
var highscoreRedirect = document.querySelector(".highscore-redirect");
var highscorePrevious = document.querySelector(".highscore-previous");
var scoreValue = document.querySelector(".score-value");
var userName = document.querySelector("#userName");

var q1 = document.querySelector(".q1")
var q2 = document.querySelector(".q2")
var q3 = document.querySelector(".q3")
var q4 = document.querySelector(".q4")
var q5 = document.querySelector(".q5")

var response1 = document.querySelectorAll(".response1")
var response2 = document.querySelectorAll(".response2")
var response3 = document.querySelectorAll(".response3")
var response4 = document.querySelectorAll(".response4")
var response5 = document.querySelectorAll(".response5")

var nameScore = {};
var lastScore = {};
var secondsLeft;
var isWin = false;
var timeinterval;

//click start button
startBtn.addEventListener("click", startGame);

highscoreRedirect.addEventListener("click", displayHighscore);

returnHome.addEventListener("click", displayHome);

clearScores.addEventListener("click", clearHighscore);

//timer starts and question appears

function startGame(){
  secondsLeft = 60
  isWin = false;
  startTimer();
  displayQ1()
}

function startTimer() {
  timeinterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timeinterval);
     seccondsLeft = 0;
     timerEl.textContent = secondsLeft;
     gameEnd();
    if(isWin){
      clearInterval(timeinterval);
    }
    }

  }, 1000);
}
function displayQ1() {
  startScreen.style.display = "none";
  q1.style.display = "flex";
}

function displayQ2() {
  q1.style.display = "none";
  q2.style.display = "flex";
}
function displayQ3() {
  q2.style.display = "none";
  q3.style.display = "flex";
}
function displayQ4() {
  q3.style.display = "none";
  q4.style.display = "flex";
}
function displayQ5() {
  q4.style.display = "none";
  q5.style.display = "flex";
}

//Game ends when all questions are answered or timer reaches 0

function gameEnd() {
  clearInterval(timeinterval);
  quizEnd.style.display = "flex";
  isWin = true;
  hideQuiz();
  if (secondsLeft < 0) {
    secondsLeft = 0;
    timerEl.textContent = secondsLeft;
  }
  scoreValue.textContent = secondsLeft;
  return (secondsLeft);

}

//When question is answered correctly

response1.forEach(function (elem) {
  elem.addEventListener("click", answerQ1)
});

response2.forEach(function (elem) {
  elem.addEventListener("click", answerQ2)
});

response3.forEach(function (elem) {
  elem.addEventListener("click", answerQ3)
});

response4.forEach(function (elem) {
  elem.addEventListener("click", answerQ4)
});

response5.forEach(function (elem) {
  elem.addEventListener("click", answerQ5)
});


//Another question is shown
//When a question is answered incorrectly
//time is removed from timer (~10sec)

function answerQ1(event) {
  if (event.target.className == "response1 wrong") {
    secondsLeft -= 15;
    timerEl.textContent = secondsLeft;
  }
  displayQ2();
}

function answerQ2(event) {
  if (event.target.className == "response2 wrong") {
    secondsLeft -= 15;
    timerEl.textContent = secondsLeft;
  }
  displayQ3();
}

function answerQ3(event) {
  if (event.target.className == "response3 wrong") {
    secondsLeft -= 15;
    timerEl.textContent = secondsLeft;
  }
  displayQ4();
}
function answerQ4(event) {
  if (event.target.className == "response4 wrong") {
    secondsLeft -= 15;
    timerEl.textContent = secondsLeft;
  }
  displayQ5();
}
function answerQ5(event) {
  if (event.target.className == "response5 wrong") {
    secondsLeft -= 15;
    timerEl.textContent = secondsLeft;
  }
  gameEnd();
}

//When game ends a prompt to save user's initial and highscore appears
function submitScore(event) {
  event.preventDefault();
  if (userName === "") {
    return;
  } else {
    var nameScore = {
      [document.querySelector("#userName").value.trim()]: secondsLeft
    };
    lastScore = JSON.parse(localStorage.getItem("nameScoreStringify"));

    var newScore = {
      ...nameScore,
      ...lastScore
    };

    console.log(newScore);


    localStorage.setItem("nameScoreStringify", JSON.stringify(newScore));

    displayHighscore();
  }
}
submitBtn.addEventListener("click", submitScore);

//startscreen disapears and first question appears
function displayHome() {
  secondsLeft = 60;
  timerEl.textContent = secondsLeft;
  highscoreView.style.display = "none";
  startScreen.style.display = "flex";
}

function displayHighscore() {
  startScreen.style.display = "none";
  quizEnd.style.display = "none";
  highscoreView.style.display = "flex";
  hideQuiz();
  renderHighscores();
}

function renderHighscores() {
  highscorePrevious.innerHTML = "";
  lastScore = JSON.parse(localStorage.getItem("nameScoreStringify"));
  for (i = 0; i < Object.keys(lastScore).length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(Object.keys(lastScore)[i] + ": " + Object.values(lastScore)[i])
    li.appendChild(text);
    highscorePrevious.appendChild(li);
  }
}
function hideQuiz() {
  q1.style.display = "none";
  q2.style.display = "none";
  q3.style.display = "none";
  q4.style.display = "none";
  q5.style.display = "none";
}

//clear highscore when button is pressed
function clearHighscore() {
  localStorage.clear();
  displayHighscore();
}

function init() {
  quizEnd.style.display = "none";
  highscoreView.style.display = "none";
  hideQuiz();
}
init();