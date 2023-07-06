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

var quizQuestion = {
  "question1":["A","B","C","D",1],
  "question2":["A","B","C","D",3],
  "question3":["A","B","C","D",0],
  "question4":["A","B","C","D",2],
  "question5":["A","B","C","D",1],
}

//click start button
startBtn.addEventListener("click", displayQuiz);

highscoreRedirect.addEventListener("click", displayHighscore);

returnHome.addEventListener("click", displayHome);

clearScores.addEventListener("click", clearHighscore)

//timer starts and question appears

/* function startGame (event){
  if (event.target.matches("button")){
    
  }
} */

//startscreen disapears and first question appears
function displayHome(){
  startScreen.style.display = "flex";
  highscoreView.style.display = "none";
}

function displayQuiz() {
  startScreen.style.display = "none";
  quizQame.style.display = "flex";
}

function displayHighscore() {
  startScreen.style.display = "none";
  quizQame.style.display = "none";
  quizEnd.style.display = "none";
  highscoreView.style.display = "flex";
}
//When question is answered correctly

//Another question is shown

//When a question is answered incorrectly

//time is removed from timer (~10sec)

//Game ends when all questions are answered or timer reaches 0

//When game ends a prompt to save user's initial and highscore appears


//clear highscore when button is pressed
function clearHighscore(){

}



function init() {
  quizQame.style.display = "none";
  quizEnd.style.display = "none";
  highscoreView.style.display = "none";
}
init();