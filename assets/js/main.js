let questions;
let questionIndex;
let questionCount;
let interval1;
let interval2;
let chord;
let userAnswer;
let correctAnswer;
let correctAnswersRemaining;
let livesRemaining;

let answerCountdown = document.getElementsByClassName("correct-answers")[0];

// Waits for DOM content to fully load before executing function
document.addEventListener("DOMContentLoaded", function () {
  loadGame();
});

function loadGame() {
  questions = [];
  console.log(questions);
  livesRemaining = 3;
  correctAnswersRemaining = 10;

  $("#begin-training-btn").show();

  /* Disable Begin Training button until either
   'Interval Trainer' or 'Chord Identifier' are selected */
  $("#begin-training-btn").prop("disabled", true);

  const buttons = document.getElementsByTagName("button");

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

  let livesLeftContainer = document.getElementById("lives-left-container");
  console.log(livesLeftContainer);
  let livesLeft = "";
  for (i = 0; i < livesRemaining; i++) {
    livesLeft += `<span><i class="fas fa-user lives-left-icon"></i></span>`;
    console.log(livesLeft);
  }
  livesLeftContainer.innerHTML = livesLeft;
}

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    console.log(element);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

function readyGame(gameType) {
  $("#begin-training-btn").prop("disabled", false);
  if (gameType === "interval-trainer") {
    $("#begin-training-btn").click(() => {
      countDown(gameType);
    });
  } else if (gameType === "chord-identifier") {
    $("#begin-training-btn").click(() => {
      countDown(gameType);
    });
  }
}

// runIntervalGame() gathers 10 intervals to populate questions array
function runIntervalGame() {
  $(".speaker-icon").show();

  questions = [];
  questionCount = 10;
  questionIndex = 0;
  for (let question = 0; question < questionCount; question++) {
    let interval = getInterval();
    questions[question] = interval;
  }

  nextInterval(questionIndex);
}

// runChordGame gathers 10 chords to populate questions array
function runChordGame() {
  $(".speaker-icon").show();

  questions = [];
  questionCount = 10;
  questionIndex = 0;

  for (let question = 0; question < questionCount; question++) {
    let chord = getChord();
    questions[question] = chord;
  }

  nextChord(questionIndex);
}

// Initiates a countdown when user clicks 'Begin Training'
function countDown(gameType) {
  $("#begin-training-btn").hide();
  let counter = 3;

  $(".countdown-wrapper").show();
  // Display opaque overlay when user begins training
  $(".hide-overlay")
    .removeAttr("class", "hide-overlay")
    .attr("class", "opaque-overlay");

  // Hide speaker icon to allow room for countdown content
  $(".speaker-icon").hide();

  // add CSS ID selector to div when function runs
  $(".countdown-wrapper").attr("id", "show-countdown");

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
      $(".countdown-wrapper").attr("id", "hide-countdown");
      $(".countdown-wrapper").hide();
    }
  }, 1000);
}

function nextInterval(currentInterval) {
  console.log(questions);
  answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;

  let answerOptions = getIntervalAnswers(questions[currentInterval]);

  let answerContainer = document.getElementById("answer-container");

  let answerButtons = "";

  // clears answer buttons ready for next question
  $(answerButtons).empty();

  // loops over answerOptions variable and creates button upon each iteration
  for (i = 0; i < answerOptions.length; i++) {
    answerButtons += `<button class="btn btn-light answer-btn"
     data-type="submit">${answerOptions[i]}</button>`;
  }

  answerContainer.innerHTML = answerButtons;

  let answerButton = document.getElementsByTagName("button");

  /* Loop through answer buttons and add click event
   listeners to grab values of click to check answer */
  for (button of answerButton) {
    if (button.getAttribute("data-type") === "submit") {
      button.addEventListener("click", (e) => {
        checkIntervalAnswer(e, currentInterval);
      });
    }
  }

  // Invokes playInterval function, passing in index of questions object array
  playInterval(questions[currentInterval]);

  $("#replay-interval").click(() => {
    replayInterval(currentInterval);
  });
}

function nextChord(currentChord) {
  answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
  /* Initialize question index and pass it
  into questions object array to access relative index */
  let answerOptions = getChordAnswers(questions[currentChord]);

  let answerContainer = document.getElementById("answer-container");

  let answerButtons = "";
  $(answerButtons).empty();

  // loops over answerOptions variable and creates button upon each iteration
  for (i = 0; i < answerOptions.length; i++) {
    answerButtons += `<button class="btn btn-light answer-btn"
    data-type="submit">${answerOptions[i]}</button>`;
    console.log(answerButtons);
  }

  answerContainer.innerHTML = answerButtons;

  let answerButton = document.getElementsByTagName("button");

  /* Loop through answer buttons and add click event
   listeners to grab values of click to check answer */
  for (button of answerButton) {
    if (button.getAttribute("data-type") === "submit") {
      button.addEventListener("click", (e) => {
        checkChordAnswer(e, currentChord);
      });
    }
  }

  // Invokes playChord function, passing in index of questions object array
  playChord(questions[currentChord]);
}

// getIntervalAnswers takes the current question index as argument
function getIntervalAnswers(currentInterval) {
  let correctAnswerObject = currentInterval;
  let correctInterval = correctAnswerObject.interval;

  /* Filter through intervalAnswerList and remove
  the answer which is equal to the interval played */
  intervalAnswerList = intervalAnswerList.filter(
    (answer) => answer !== correctInterval
  );

  // Remove 7 elements from the new array
  intervalAnswerList = intervalAnswerList.splice(0, 5);

  // Add the correct interval back into updated/shortened array
  intervalAnswerList.push(correctInterval);

  // Shuffle the updated array
  let newAnswerArray = shuffleAnswers(intervalAnswerList);

  return newAnswerArray;
}

function getChordAnswers(currentChord) {
  let correctAnswerObject = currentChord;
  let correctChord = correctAnswerObject.chord;

  chordAnswerList = chordAnswerList.filter((answer) => answer !== correctChord);

  chordAnswerList = chordAnswerList.splice(0, 5);

  chordAnswerList.push(correctChord);

  let newAnswerArray = shuffleAnswers(chordAnswerList);

  return newAnswerArray;
}

/* shuffleArray will randomly shuffle the elements
of the intervalAnswerList array, using the Fisher-Yates shuffle algorithm.
Code referenced from
https://stackoverflow.com/questions/2450954
/how-to-randomize-shuffle-a-javascript-array */
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

function checkIntervalAnswer(e, questionIndex) {
  userAnswer = e.target.textContent;
  console.log(questionIndex);

  if (userAnswer === questions[questionIndex].interval) {
    let correctAnswerSound = new Audio("assets/sounds/correct-answer.mp3");
    correctAnswerSound.play();
    correctAnswersRemaining--;
    answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
    questionIndex++;
    if (questionIndex < questionCount) {
      setTimeout(() => {
        nextInterval(questionIndex);
        replayInterval(questionIndex);
      }, 1000);
    }
    if (questionIndex === questionCount) {
      questions.splice(0, questions.length);
      console.log(questions);
      $("#completed-game-modal").modal("show");
      $("#answer-container").empty();
      $("#correct-answers-remaining").empty();
      $("#play-again-btn").click(() => {
        loadGame(questions);
        $("#completed-game-modal").modal("hide");
      });
      if (livesRemaining > 1) {
        $("#completed-game-message").html(
          `Congratulations! You completed the game with
           ${livesRemaining} lives remaining!`
        );
      } else {
        $("#completed-game-message").html(
          `Congratulations! You completed the game with
           ${livesRemaining} life remaining!`
        );
      }
    }
  } else {
    let wrongAnswerSound = new Audio("assets/sounds/wrong-answer.mp3");
    wrongAnswerSound.play();
    livesRemaining--;
    $(".lives-left-icon")[0].remove();

    console.log(livesRemaining);
  }

  if (livesRemaining === 0) {
    let gameOverModal = $("#game-over-modal");
    gameOverModal.modal("show");
  }
}

function checkChordAnswer(e, questionIndex) {
  userAnswer = e.target.textContent;

  if (userAnswer === questions[questionIndex].chord) {
    let correctAnswer = new Audio("assets/sounds/correct-answer.mp3");
    correctAnswer.play();
    correctAnswersRemaining--;
    answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
    questionIndex++;

    if (questionIndex < questionCount) {
      setTimeout(() => {
        nextChord(questionIndex);
      }, 1000);
    }
    if (questionIndex === questionCount) {
      $("#completed-game-modal").modal("show");
      $("#answer-container").empty();
      $("#correct-answers-remaining").empty();
      $("#play-again-btn").click(() => {
        loadGame();
        $("#completed-game-modal").modal("hide");
      });
      if (livesRemaining > 1) {
        $("#completed-game-message").html(
          `Congratulations! You completed the game with
           ${livesRemaining} lives remaining!`
        );
      } else {
        $("#completed-game-message").html(
          `Congratulations! You completed the game with
           ${livesRemaining} life remaining!`
        );
      }
    }
  } else {
    let wrongAnswer = new Audio("assets/sounds/wrong-answer.mp3");
    wrongAnswer.play();
    livesRemaining--;
    $(".lives-left-icon")[0].remove();

    console.log(livesRemaining);
  }

  if (livesRemaining === 0) {
    let gameOverModal = $("#game-over-modal");
    gameOverModal.modal("show");
  }
}

/* access an index of the intervalList array using number generated
in getRandomIntervalIndex function */
function getInterval() {
  let randomIndex = getRandomIntervalIndex();
  let randomInterval = intervalList[randomIndex];

  return randomInterval;
}

// Generates a random number between 0 and 12;
function getRandomIntervalIndex() {
  let randomIndex = Math.ceil(Math.random() * 12 - 1);

  return randomIndex;
}

// Generates a random number between 0 and 60;
function getRandomChordIndex() {
  let randomIndex = Math.ceil(Math.random() * 61 - 1);
  console.log(randomIndex);
  return randomIndex;
}

function getChord() {
  let randomIndex = getRandomChordIndex();
  let randomChord = chordList[randomIndex];

  return randomChord;
}

// Accessing frequency properties of random interval
function playInterval(interval) {
  let firstNote = interval.frequency1;

  let secondNote = interval.frequency2;

  // Animate speaker icon when interval plays
  animateCSS(".speaker-icon", "heartBeat");
  let animateSpeakerIcon = setInterval(() => {
    animateCSS(".speaker-icon", "heartBeat");
    clearInterval(animateSpeakerIcon);
  }, 1000);

  // Invoking createInterval function to play two frequencies
  createInterval(firstNote, secondNote);
}

// Accessing frequency properties of random chord
function playChord(chord) {
  let firstNote = chord.frequency1;
  let secondNote = chord.frequency2;
  let thirdNote = chord.frequency3;
  let fourthNote = chord.frequency4;

  // Animate speaker icon when interval plays
  animateCSS(".speaker-icon", "heartBeat");
 

  // Invoking createChord function to play random chord
  createChord(firstNote, secondNote, thirdNote, fourthNote);
}
