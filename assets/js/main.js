let questions;
let questionIndex;
let questionCount;
let interval1;
let interval2;
let userAnswer;
let correctAnswer;
let correctAnswersRemaining = 15;
let livesRemaining = 3;

let answerCountdown = document.createElement("p");

answerCountdown.innerHTML = `Correct Answers Remaining: ${
  correctAnswer ? correctAnswersRemaining - 1 : correctAnswersRemaining
}`;

document
  .getElementById("correct-answers-remaining")
  .appendChild(answerCountdown);

// Waits for DOM content to fully load before executing function
document.addEventListener("DOMContentLoaded", () => {
  let runGameButton = document.getElementById("begin-training-btn");
  runGameButton.addEventListener("click", () => {
    runGame();
  });
});

function runGame() {
  $("#begin-training-btn").remove();
  questions = [];
  questionCount = 15;
  questionIndex = 0;
  for (let question = 0; question < questionCount; question++) {
    let interval = getInterval();
    questions[question] = interval; // creates object array of 15 randomly generated intervals to be used in game
  }

  nextQuestion(questionIndex);
}

function nextQuestion(currentInterval) {
  // Initialize question index and pass it into questions object array to access relative index
  let answerOptions = getAnswers(questions[currentInterval]); // invokes getAnswers() function to grab values of answerList array and assign it to variable

  console.log(answerOptions);
  let answerContainer = document.getElementById("answer-container");

  let answerButtons = "";
  $(answerButtons).empty(); // clears list of answer options for previous interval played, when user inputs next question.

  // loops over answerOptions variable and creates button upon each iteration
  for (i = 0; i < answerOptions.length; i++) {
    answerButtons += `<button class="btn btn-light" data-type="submit">${answerOptions[i]}</button>`;
  }

  answerContainer.innerHTML = answerButtons; // Adds buttons from for loop to answerContainer div

  let answerButton = document.getElementsByTagName("button");

  // Loop through answer buttons and add click event listeners to grab values of click to check answer
  for (button of answerButton) {
    if (button.getAttribute("data-type") === "submit") {
      button.addEventListener("click", (e) => {
        checkAnswer(e, currentInterval); // Pass in currentInterval, which corresponds to incrementing question index
      });
    }
  }

  playInterval(questions[currentInterval]); // Invokes playInterval function, passing in index of questions object array
}

function getAnswers(interval) {
  let correctAnswerObject = interval; // invoke getInterval() function to get interval object that's being played
  let correctInterval = correctAnswerObject.interval; // pull interval name out of correctAnswerObject;

  let newAnswerArray = shuffleAnswers(answerList); // Invoke shuffleAnswers function passing in new answerList array as parameter;

  return newAnswerArray;
}

/* shuffleArray will randomly shuffle the elements of the answerList array, using the Fisher-Yates shuffle algorithm.
Code referenced from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffleAnswers(array) {
  let currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function checkAnswer(e, questionIndex) {
  let userInput = e.target.textContent;
   console.log(questionIndex)

  if (userInput === questions[questionIndex].interval) {
    correctAnswersRemaining--;
    questionIndex++; // Increment question index when correct answer submitted
    if (questionIndex < questionCount) {
      nextQuestion(questionIndex); // Pass in new questionIndex as parameter for next invocation of nextQuestion function
    }
  } else {
    livesRemaining--
    $(".lives-left-icon")[0].remove(); // removes one fontawesome 'user' icon if user inputs incorrect answer
    console.log(livesRemaining)
  }

  if(livesRemaining === 0) {
    
  }
    return correctAnswer;
}

function getInterval() {
  let randomIndex = getRandomIndex();
  let randomInterval = intervalList[randomIndex]; // getRandomIndex used to access random index of intervalList array;

  return randomInterval;
}

function getRandomIndex() {
  let randomIndex = Math.ceil(Math.random() * 12 - 1); // Generates a random number between 0 and 12;

  return randomIndex;
}

function playInterval(interval) {
  // Accessing frequency properties of random interval
  let firstNote = interval.frequency1;

  let secondNote = interval.frequency2;

  // Invoking createTones function to play two frequencies
  createTones(firstNote, secondNote);
}
