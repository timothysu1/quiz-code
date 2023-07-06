var startBtn = document.querySelector(".start-btn");
var submitBtn = document.querySelector(".submit-btn");
var timerEl = document.querySelector(".timer");
var startScreen = document.querySelector(".start-screen");
var quizQame = document.querySelector(".quiz-game");
var quizEnd = document.querySelector(".quiz-end");
var highscoreView = document.querySelector(".highscore-view");
var highscoreRedirect = document.querySelector(".highscore-redirect");
var returnHome = document.querySelector(".return-home");
var clearScores = document.querySelector(".clear-scores");
var q1 = document.querySelector(".q1")
var q2 = document.querySelector(".q2")
var q3 = document.querySelector(".q3")
var q4 = document.querySelector(".q4")
var q5 = document.querySelector(".q5")

//click start button
startBtn.addEventListener("click", displayQ1);

highscoreRedirect.addEventListener("click", displayHighscore);

returnHome.addEventListener("click", displayHome);

clearScores.addEventListener("click", clearHighscore);

//timer starts and question appears

/* function startGame (event){
  if (event.target.matches("button")){
    
  }
} */

//startscreen disapears and first question appears
function displayHome() {
  highscoreView.style.display = "none";
  startScreen.style.display = "flex";
}

function displayHighscore() {
  startScreen.style.display = "none";
  /* quizQame.style.display = "none"; */
  quizEnd.style.display = "none";
  highscoreView.style.display = "flex";
  hideQuiz();
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
function displayEnd() {
  quizEnd.style.display = "flex";
  hideQuiz()
}

function hideQuiz() {
  q1.style.display = "none";
  q2.style.display = "none";
  q3.style.display = "none";
  q4.style.display = "none";
  q5.style.display = "none";
}
//When question is answered correctly

//Another question is shown

//When a question is answered incorrectly

//time is removed from timer (~10sec)

//Game ends when all questions are answered or timer reaches 0

//When game ends a prompt to save user's initial and highscore appears


//clear highscore when button is pressed
function clearHighscore() {

}



function init() {
  /* quizQame.style.display = "none"; */
  quizEnd.style.display = "none";
  highscoreView.style.display = "none";
  hideQuiz();
}
init();