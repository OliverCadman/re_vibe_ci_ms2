let questions;
let questionIndex;
let questionCount;
let userAnswer;
let correctAnswerSound;
let wrongAnswerSound;
let correctAnswersRemaining;
let livesRemaining;
let correctAnswerList = [];

let answerCountdown = document.getElementsByClassName("correct-answers")[0];

// Waits for DOM content to fully load before executing function
document.addEventListener("DOMContentLoaded", function () {
  loadGame();
});

// Initializes variables and toggles GUI elements
function loadGame() {
  questions = [];
  livesRemaining = 3;
  correctAnswersRemaining = 10;

  $(".game-selection-button-container").show();

  $(".lives-left-alert").hide();

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

  /* Loop through buttons and add click event listeners
  to invoke readyGame(), passing in gameType as argument */
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

  // Displays three 'user' fontAwesome icons representing lives left
  let livesLeftContainer = document.getElementById("lives-left-container");
  let livesLeft = "";
  for (i = 0; i < livesRemaining; i++) {
    livesLeft += `<span><i class="fas fa-user lives-left-icon"></i></span>`;
  }
  livesLeftContainer.innerHTML = livesLeft;
}

function readyGame(gameType) {
  $(".game-selection-button-container").hide();
  $(".speaker-icon").show();

  $("#game-mode-header").html(`${gameType.replace("-", " ")}`);
  $("#begin-training-btn")
    .prop("disabled", false)
    .css({ opacity: "1", width: "inherit", color: "#e7782d" })
    .text("Begin Training");

  /* Add click event listener to 'Begin Training' button,
  invoking countDown() and start of Interval Trainer or
  Chord Identifier */
  if (gameType === "interval-trainer") {
    $("#begin-training-btn")
      .off("click")
      .on("click", () => {
        $("#game-mode-header").hide();
        countDown(gameType);
      });
  } else if (gameType === "chord-identifier") {
    $("#begin-training-btn")
      .off("click")
      .on("click", () => {
        $("#game-mode-header").hide();
        countDown(gameType);
      });
  }
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

  // Counts down 3 seconds before starting game
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
      $(".countdown-wrapper").hide();
    }
  }, 1000);
}

// runIntervalGame() gathers 10 intervals to populate questions array
function runIntervalGame() {
  $(".speaker-icon").show();
  $("#lives-left-container").show();

  questions = [];
  questionCount = 10;
  questionIndex = 0;
  for (let question = 0; question < questionCount; question++) {
    let intervals = getInterval();
    questions[question] = intervals;
    console.log(question);
  }

  nextInterval(questionIndex);
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

function answerButtonClicked(e, currentInterval) {
  checkIntervalAnswer;
}

// runChordGame gathers 10 chords to populate questions array
function runChordGame() {
  $(".speaker-icon").show();
  $("#lives-left-container").show();

  questions = [];
  questionCount = 10;
  questionIndex = 0;

  for (let question = 0; question < questionCount; question++) {
    let chords = getChord();
    questions[question] = chords;
    console.log(chords.chord);
  }

  nextChord(questionIndex);
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

  /* Filters through intervalAnswerList and removes 
  correct answer from intervalAnserList, returning
  remaining answers */
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

// getChordAnswers takes current chord as argument
function getChordAnswers(currentChord) {
  let correctAnswerObject = currentChord;
  let correctChord = correctAnswerObject.chord;

  /* Filter through chordAnswerList and remove
  the answer which is equal to the interval played */
  chordAnswerList = chordAnswerList.filter((answer) => answer !== correctChord);

  // Remove 7 elements from new array
  chordAnswerList = chordAnswerList.splice(0, 5);

  // Add the correct chord back into the updated array
  chordAnswerList.push(correctChord);

  // Shuffle the updated array
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

/* Displays name and image of notation of interval
or chord when correct answer submitted */
function showImage(imageURL, name) {
  $(".speaker-icon").hide();
  $("#answer-container").empty();
  $(".hide-correct-answer-container")
    .removeClass("hide-correct-answer-container")
    .addClass("show-correct-answer-container");
  $(".correct-answer-wrapper").html(
    `<p class="notation-name">${name}</p>
    <img src=${imageURL}
    alt="Image of notation for correct answer"
    class="notation-image">`
  );
  $(".correct-answer-wrapper").addClass("show-correct-answer");
  animateCSS(".correct-answer-wrapper", "flipInY");
  setTimeout(() => {
    animateCSS(".correct-answer-wrapper", "flipOutY");
  }, 2400);
}

// Checks value of user input against interval played
function checkIntervalAnswer(e, questionIndex) {
  userAnswer = e.target.textContent;

  if (userAnswer === questions[questionIndex].interval) {
    correctAnswerSound = new Audio("assets/sounds/correct-answer.mp3");
    correctAnswerSound.play();
    showImage(questions[questionIndex].image, questions[questionIndex].name);
    correctAnswerList.push(questions[questionIndex]);
    correctAnswersRemaining--;
    answerCountdown.innerHTML = `Correct Answers Remaining: ${correctAnswersRemaining}`;
    questionIndex++;
    if (questionIndex < questionCount) {
      setTimeout(() => {
        nextInterval(questionIndex);
      }, 3000);
    }
    if (questionIndex === questionCount) {
      setTimeout(() => {
        $("#lives-left-container").empty();
        $(".correct-answer-wrapper").empty();
        gameComplete();
      }, 3000);
    }
  } else {
    wrongAnswerSound = new Audio("assets/sounds/wrong-answer.mp3");
    wrongAnswerSound.play();
    animateCSS(".speaker-icon", "wobble");
    livesRemaining--;
    $(".lives-left-icon")[0].remove();
    $(".lives-left-alert")
      .fadeIn(300)
      .html(
        livesRemaining === 1
          ? `${livesRemaining} life remaining!`
          : `${livesRemaining} lives remaining!`
      )
      .fadeOut(1750);
  }

  if (livesRemaining === 0) {
    gameOver();
  }
}

// Checks value of user input against chord played
function checkChordAnswer(e, questionIndex) {
  userAnswer = e.target.textContent;

  if (userAnswer === questions[questionIndex].chord) {
    let correctAnswer = new Audio("assets/sounds/correct-answer.mp3");
    correctAnswer.play();
    showImage(questions[questionIndex].image, questions[questionIndex].name);
    correctAnswerList.push(questions[questionIndex]);
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
        $("#lives-left-container").empty();
        $(".correct-answer-wrapper").empty();
        gameComplete();
      }, 3000);
    }
  } else {
    let wrongAnswer = new Audio("assets/sounds/wrong-answer.mp3");
    wrongAnswer.play();
    livesRemaining--;
    animateCSS(".speaker-icon", "wobble");
    $(".lives-left-icon")[0].remove();
    $(".lives-left-alert")
      .fadeIn(1000)
      .html(`${livesRemaining} lives remaining!`)
      .fadeOut(1000);
  }

  if (livesRemaining === 0) {
    gameOver();
  }
}

// Runs when user answers all questions correctly
function gameComplete() {
  $("#completed-game-modal").modal("show");

  $("#answer-container").empty();

  $("#correct-answers-remaining").empty();

  /* Maps over array of correct answers and displays
name and image of chord in modal */
  correctAnswerList.map((answer) => {
    let answerDisplay = document.getElementsByClassName(
      "display-correct-answers"
    )[0];
    answerDisplay.innerHTML += `
    <div class="correct-answer">
    <p>${answer.name}</p>
    <figure><img class="notation-image"
    src=${answer.image}
    alt="Image of notation for correct answer"></figure>
    </div>`;

    return answerDisplay;
  });

  if (livesRemaining > 1) {
    $("#congratulations-message").html(
      `Well done. You completed the game with
           ${livesRemaining} lives remaining!`
    );
  } else {
    $("#congratulations-message").html(
      `Well done. Congratulations! You completed the game with
           ${livesRemaining} life remaining!`
    );
  }

  $(".play-again-btn").click(() => {
    location.reload();
    $("#completed-game-modal").modal("hide");
  });
}

// Runs when user loses all three lives
function gameOver() {
  $("#answer-container").empty();

  $("#correct-answers-remaining").empty();

  $("#game-over-modal").modal("show");

  /* Maps over array of correct answers and displays
  name and image of chord in modal */
  correctAnswerList.map((answer) => {
    let answerDisplay = document.getElementsByClassName(
      "display-correct-answers"
    )[1];
    answerDisplay.innerHTML += `
    <div class="correct-answer">
    <p>${answer.name}</p>
    <figure><img class="notation-image"
    src=${answer.image}
    alt="Image of notation for correct answer"></figure>
    </div>`;

    return answerDisplay;
  });

  $(".play-again-btn").click(() => {
    location.reload();
    $("#game-over-modal").modal("hide");
  });
}

// Uses random number to access index of intervalList array
function getInterval() {
  let randomIndex = getRandomIntervalIndex();
  let randomInterval = intervalList[randomIndex];

  return randomInterval;
}

function resetGlobalVariables() {
 questions = [];
 questionIndex = 0;
 questionCount = 10;
 correctAnswersRemaining = 10;
 livesRemaining = 3;
 userAnswer = null;
 correctAnswerSound = null;
 wrongAnswerSound = null;
}

// Generates a random number between 0 and 144;
function getRandomIntervalIndex() {
  let randomIndex = Math.ceil(Math.random() * 143);

  return randomIndex;
}

// Generates a random number between 0 and 59;
function getRandomChordIndex() {
  let randomIndex = Math.ceil(Math.random() * 59);
  return randomIndex;
}

// Uses random number to access index of chordList array
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

/* Function to add and remove animateCSS classes to
animate speaker icon when sound is played, and when wrong
answer is submitted. Referenced from animateCSS Docs:
https://animate.style/ */
const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
