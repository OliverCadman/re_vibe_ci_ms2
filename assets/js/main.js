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
let correctAnswerList = [];

let answerCountdown = document.getElementsByClassName("correct-answers")[0];

// Waits for DOM content to fully load before executing function
document.addEventListener("DOMContentLoaded", function () {
  loadGame();
});

function loadGame() {
  questions = [];
  livesRemaining = 3;
  correctAnswersRemaining = 10;

  $(".game-selection-button-container").show();

  $(".speaker-icon").hide();

  $("#lives-left-container").hide();

  $("#begin-training-btn")
    .show()
    .css({ opacity: "0.5", width: "35%" })
    .text("Please Select Training Mode");

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
  let livesLeft = "";
  for (i = 0; i < livesRemaining; i++) {
    livesLeft += `<span><i class="fas fa-user lives-left-icon"></i></span>`;
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
  $(".game-selection-button-container").hide();
  $(".speaker-icon").show();

  $("#game-mode-header").html(`${gameType.replace("-", " ")}`);
  $("#begin-training-btn")
    .prop("disabled", false)
    .css({ opacity: "1", width: "inherit" })
    .text("Begin Training");
  if (gameType === "interval-trainer") {
    $("#begin-training-btn").click(() => {
      $("#game-mode-header").hide();
      countDown(gameType);
    });
  } else if (gameType === "chord-identifier") {
    $("#begin-training-btn").click(() => {
      $("#game-mode-header").hide();
      countDown(gameType);
    });
  }
}

// runIntervalGame() gathers 10 intervals to populate questions array
function runIntervalGame() {
  $(".speaker-icon").show();
  $("#lives-left-container").show();
  console.log("testing");

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
  $("#lives-left-container").show();

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
        console.log("hello");
        runIntervalGame();
      } else if (gameType === "chord-identifier") {
        runChordGame();
      }
      clearInterval(countdown);
      $(".countdown-wrapper").hide();
    }
  }, 1000);
}

function nextInterval(currentInterval) {
  $(".correct-answer-wrapper").empty().removeClass("show-correct-answer");

  $(".speaker-icon").show();

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

  /* Remove event listener every time nextInterval function
  invoked. Ensures that click event 'forgets' previous intervals
  that have been passed in, and avoids bug resulting in all 
  previous intervals in questions array being played
  (as well as the current interval) */
  $("#replay-question")
    .off("click")
    .on("click", () => {
      playInterval(questions[currentInterval]);
    });
}

function nextChord(currentChord) {
  $(".correct-answer-wrapper").empty().removeClass("show-correct-answer");
  $(".speaker-icon").show();
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

  $("#replay-question")
    .off("click")
    .on("click", () => {
      playChord(questions[currentChord]);
    });
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

function showImage(imageURL, name) {
  $(".speaker-icon").hide();
  $("#answer-container").empty();
  $(".correct-answer-wrapper").html(
    `<p class="notation-name">${name}</p>
    <img src=${imageURL} alt="Image of notation for correct answer" class="notation-image">`
  );
  $(".correct-answer-wrapper").addClass("show-correct-answer");
  animateCSS(".correct-answer-wrapper", "flipInY");
  setTimeout(() => {
    animateCSS(".correct-answer-wrapper", "flipOutY");
  }, 2400);
}

function checkIntervalAnswer(e, questionIndex) {

  userAnswer = e.target.textContent;

  if (userAnswer === questions[questionIndex].interval) {
    let correctAnswerSound = new Audio("assets/sounds/correct-answer.mp3");
    correctAnswerSound.play();
    showImage(questions[questionIndex].image, questions[questionIndex].name);
    correctAnswerList.push(questions[questionIndex]);
    console.log(correctAnswerList);
    correctAnswersRemaining--;
    answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
    questionIndex++;
    if (questionIndex < questionCount) {
      soundCollection = [];
      setTimeout(() => {
        nextInterval(questionIndex);
      }, 3000);
    }
    if (questionIndex === questionCount) {
      setTimeout(() => {
     
        gameComplete();
      }, 3000);
      $("#play-again-btn").click(() => {
        loadGame(questions);
        console.log("click");
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
    animateCSS(".speaker-icon", "wobble");
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
    showImage(questions[questionIndex].image, questions[questionIndex].name);
    correctAnswerList.push(questions[questionIndex]);
    console.log(correctAnswerList)
    correctAnswersRemaining--;
    answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
    questionIndex++;

    if (questionIndex < questionCount) {
      setTimeout(() => {
        nextChord(questionIndex);
      }, 3000);
    }
    if (questionIndex === questionCount) {
      setTimeout(() => {
        gameComplete();
      }, 3000)
    }
  } else {
    let wrongAnswer = new Audio("assets/sounds/wrong-answer.mp3");
    wrongAnswer.play();
    livesRemaining--;
    animateCSS(".speaker-icon", "wobble");
    $(".lives-left-icon")[0].remove();

    console.log(livesRemaining);
  }

  if (livesRemaining === 0) {
    let gameOverModal = $("#game-over-modal");
    gameOverModal.modal("show");
  }
}

function gameComplete() {
  $("#completed-game-modal").modal("show");
  $("#answer-container").empty();
  $("#correct-answers-remaining").empty();
  $("#play-again-btn").click(() => {
    location.reload();
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

// Generates a random number between 0 and 50;
function getRandomChordIndex() {
  let randomIndex = Math.ceil(Math.random() * 59);
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
