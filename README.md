# Code Quiz
This webpage serves as quiz game that the user can play. The user will have a minute to answer a series of questions before the game ends. They can then log their scores and view them even if they refresh the browser.


![](./assets/Code%20Quiz%20(1).gif)

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git](https://git-scm.com/)
## Deployed Link

* [See Live Site](https://timothysu1.github.io/quiz-code/)

## Usage

The user will be brought to a starting screen when clicking the application URL. To start the game, the user must press the start game button. The user will then be presented with a series of questions that they must answer before the timer runs out. If the user selects an incorrect answer, then they will have time deducted from the timer. Once all of the questions are answerd, the user will be shown a score which is equal to their remaining time. They will also be prompted to submit their initials to log their score. They can view the score of previous attempts via the "View Highscore" button in the top left. They can also clear their scores if they wish.

## Learning Points 
* How to store information on the user's local storage
* Interacting with the HTML DOM with Java Script
* Creating and utilizing objects
* Using methods on objects
* Using event listners to detect change on the webpage


## Important Code

```js
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
```

This function is what takes the locally stored scores and displays them.


## Author Info

### Timothy Su

* [LinkedIn](https://www.linkedin.com/in/timothysu1/)
* [Github](https://github.com/timothysu1)


## Credits
Adding event listners to multiple elements:
https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line

## License

Please refer to license in the repo. 