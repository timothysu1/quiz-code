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
var scoreValue = document.querySelector(".score-value");


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



//click start button
startBtn.addEventListener("click", startGame);

highscoreRedirect.addEventListener("click", displayHighscore);

returnHome.addEventListener("click", displayHome);

clearScores.addEventListener("click", clearHighscore);

/* submitBtn.addEventListener("click", submitScore);
 */
//timer starts and question appears


function startGame() {
  var secondsLeft = 60;
  var timeinterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      displayEnd();
    }

  }, 1000);

  displayQ1();
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
    hideQuiz();
    clearInterval(timeinterval);
    if (secondsLeft < 0) {
      secondsLeft = 0;
      timerEl.textContent = secondsLeft;
    }
    scoreValue.textContent = secondsLeft;
    return (secondsLeft);

  }

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


  //
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
    displayEnd();
  }


  //submit score button

  function submitScore(event) {
    event.preventDefault();

    /* var userName = '';
    var points = ''; */

    if (userName === "") {
      displayHighscore();
    }else {
    var nameScore = {
      userScore: [document.querySelector("#userName").value.trim(),secondsLeft]
    };
    console.log(nameScore);
    localStorage.setItem("nameScoreStringify", JSON.stringify(nameScore));
    
    displayHighscore();
  }}
  submitBtn.addEventListener("click", submitScore);


}



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

  var lastScore = JSON.parse(localStorage.getItem("nameScoreStringify"));



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
/* function submitScore(event) {
  var userName = document.querySelector("#userName").value;
  var points = secondsLeft;
  console.log(points);
  event.preventDefault();
  displayHighscore();
} */

//clear highscore when button is pressed
function clearHighscore() {
  localStorage.clear();
}



function init() {
  quizEnd.style.display = "none";
  highscoreView.style.display = "none";
  hideQuiz();
  console.log(response1)
}
init();