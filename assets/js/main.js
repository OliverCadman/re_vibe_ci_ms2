let questions;
let questionIndex;
let questionCount;
let interval1;
let interval2;
let chord;
let userAnswer;
let correctAnswer;
let correctAnswersRemaining = 10;
let livesRemaining = 3;

let answerCountdown = document.getElementsByClassName("correct-answers")[0];

// Waits for DOM content to fully load before executing function
document.addEventListener("DOMContentLoaded", () => {
  // Disable Begin Training button until either 'Interval Trainer' or 'Chord Identifier' are selected
  $("#begin-training-btn").prop("disabled", true);

  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", () => {
      if (button.getAttribute("id") === "interval-trainer-btn") {
        let gameType = button.getAttribute("data-type", "interval-trainer");
        readyGame(gameType);
      } else if (button.getAttribute("id") === "chord-identifier-btn") {
        let gameType = button.getAttribute("data-type", "chord-identifier");
        readyGame(gameType);
      }
    });
  }
});

function readyGame(gameType) {
  $("#begin-training-btn").prop("disabled", false);
  if (gameType === "interval-trainer") {
    $("#begin-training-btn").click(() => {
      
    });
  } else if (gameType === "chord-identifier") {
    $("#begin-training-btn").click(() => {
      countDown(gameType);
    });
  }
}

function runIntervalGame() {
  $(".speaker-icon").show();

  document
    .getElementById("correct-answers-remaining")
    .appendChild(answerCountdown);

  questions = [];
  questionCount = 10;
  questionIndex = 0;
  for (let question = 0; question < questionCount; question++) {
    let interval = getInterval();
    questions[question] = interval; // creates object array of 15 randomly generated intervals to be used in game
  }

  nextInterval(questionIndex);
}

function runChordGame() {
  questions = [];
  questionCount = 10;
  questionIndex = 0;

  for (let question = 0; question < questionCount; question ++) {
    let chord = getChord();
    questions[question] = chord;
  }

  nextChord(questionIndex);
}

// Initiates a countdown when user clicks 'Begin Training'
function countDown(gameType) {
  $("#begin-training-btn").remove();
  let counter = 3;

  // Display opaque overlay when user begins training
  $(".hide-overlay")
    .removeAttr("class", "hide-overlay")
    .attr("class", "opaque-overlay");

  // Hide speaker icon to allow room for countdown content
  $(".speaker-icon").hide();

  $(".countdown-wrapper").attr("id", "show-countdown"); // add CSS ID selector to div when function runs

  $("#countdown").html(
    `<p class="animate__animated animate__flipInX">${counter}</p>`
  );
  const countdown = setInterval(() => {
    counter--;
    $("#countdown").html(
      `<p class="animate__animated animate__flipInX">${counter}</p>`
    );
    if (counter === 0) {
      if (gameType === "interval-trainer") {
        runIntervalGame();
      } else if (gameType === "chord-identifier") {
        runChordGame();
      }
      clearInterval(countdown);
      $(".countdown-wrapper").attr("id", "hide-countdown"); // change CSS ID selector to include property 'display: none'
      $(".countdown-wrapper").empty();
    }
    
  }, 1000);
}

function nextInterval(currentInterval) {
  answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
  // Initialize question index and pass it into questions object array to access relative index
  let answerOptions = getAnswers(questions[currentInterval]); // invokes getAnswers() function to grab values of answerList array and assign it to variable

  let answerContainer = document.getElementById("answer-container");

  let answerButtons = "";
  $(answerButtons).empty(); // clears list of answer options for previous interval played, when user inputs next question.

  // loops over answerOptions variable and creates button upon each iteration
  for (i = 0; i < answerOptions.length; i++) {
    answerButtons += `<button class="btn btn-light answer-btn" data-type="submit">${answerOptions[i]}</button>`;
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

  $("#replay-interval").click(() => {
    replayInterval(currentInterval);
  });
}

function nextChord(currentChord) {
  answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
  // Initialize question index and pass it into questions object array to access relative index
  let answerOptions = getChordAnswers(questions[currentChord]); // invokes getAnswers() function to grab values of answerList array and assign it to variable

  let answerContainer = document.getElementById("answer-container");

  let answerButtons = "";
  $(answerButtons).empty(); // clears list of answer options for previous interval played, when user inputs next question.

  // loops over answerOptions variable and creates button upon each iteration
  for (i = 0; i < answerOptions.length; i++) {
    answerButtons += `<button class="btn btn-light answer-btn" data-type="submit">${answerOptions[i]}</button>`;
  }

  answerContainer.innerHTML = answerButtons; // Adds buttons from for loop to answerContainer div

  let answerButton = document.getElementsByTagName("button");

  // Loop through answer buttons and add click event listeners to grab values of click to check answer
  for (button of answerButton) {
    if (button.getAttribute("data-type") === "submit") {
      button.addEventListener("click", (e) => {
        checkAnswer(e, currentChord); // Pass in currentInterval, which corresponds to incrementing question index
      });
    }
  }

  playChord(questions[currentChord]); // Invokes playInterval function, passing in index of questions object array
}

function getAnswers(interval) {
  let correctAnswerObject = interval; // invoke getInterval() function to get interval object that's being played
  let correctInterval = correctAnswerObject.interval; // pull interval name out of correctAnswerObject;

  // Filter through answerList and remove the answer which is equal to the interval played
  answerList = answerList.filter((answer) => answer !== correctInterval);

  // Remove 7 elements from the new array
  answerList = answerList.splice(0, 5);

  // Add the correct interval back into updated/shortened array
  answerList.push(correctInterval);

  console.log(answerList);
  // Shuffle the updated array
  let newAnswerArray = shuffleAnswers(answerList);

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

function replayInterval(currentInterval) {
  playInterval(questions[currentInterval]);
}

function checkAnswer(e, questionIndex) {
  userAnswer = e.target.textContent;
  console.log(questionIndex);

  if (userAnswer === questions[questionIndex].interval) {
    let correctAnswer = new Audio("assets/sounds/correct-answer.mp3"); // Assign variable to correct-answer.mp3;
    correctAnswer.play(); // Play sound when correct answer is submitted
    correctAnswersRemaining--;
    answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
    questionIndex++; // Increment question index when correct answer submitted
    if (questionIndex < questionCount) {
      // setTimeout delays invocation of nextQuestion function to allow for correctAnswer audio to play
      setTimeout(() => {
        nextInterval(questionIndex); // Pass in new questionIndex as parameter for next invocation of nextQuestion function
        replayInterval(questionIndex);
      }, 1000);
    }
    if (questionIndex === questionCount) {
      $("#completed-game-modal").modal("show"); // Display modal when user submits all correct answers
      if (livesRemaining > 1) {
        $("#completed-game-message").html(
          `Congratulations! You completed the game with ${livesRemaining} lives remaining!`
        );
      } else {
        $("#completed-game-message").html(
          `Congratulations! You completed the game with ${livesRemaining} life remaining!`
        );
      }
    }
  } else {
    let wrongAnswer = new Audio("assets/sounds/wrong-answer.mp3");
    wrongAnswer.play(); // Play sound when incorrect answer is submitted
    livesRemaining--;
    $(".lives-left-icon")[0].remove(); // removes one fontawesome 'user' icon if user inputs incorrect answer

    console.log(livesRemaining);
  }

  if (livesRemaining === 0) {
    let gameOverModal = $("#game-over-modal");
    gameOverModal.modal("show");
  }
  return correctAnswer;
}

function getInterval() {
  let randomIndex = getRandomIntervalIndex();
  let randomInterval = intervalList[randomIndex]; // getRandomIndex used to access random index of intervalList array;

  return randomInterval;
}

function getRandomIntervalIndex() {
  let randomIndex = Math.ceil(Math.random() * 12 - 1); // Generates a random number between 0 and 12;

  return randomIndex;
}


function getRandomChordIndex() {
  let randomIndex = Math.ceil(Math.random() * 61 - 1);
  console.log(randomIndex)
  return randomIndex
}

function getChord() {
  let randomIndex = getRandomChordIndex();
  let randomChord = chordList[randomIndex];

  return randomChord;
}


function playInterval(interval) {
  // Accessing frequency properties of random interval
  let firstNote = interval.frequency1;

  let secondNote = interval.frequency2;

  // Invoking createTones function to play two frequencies
  createInterval(firstNote, secondNote);
}


