let interval1;

let interval2;

let userAnswer;

let correctAnswer;

let correctAnswersRemaining = 20;

let livesRemaining = 3;

let answerList = [
  "Minor Second",
  "Major Second",
  "Minor Third",
  "Major Third",
  "Perfect Fourth",
  "Augmented Fourth",
  "Perfect Fifth",
  "Minor Sixth",
  "Major Sixth",
  "Minor Seventh",
  "Major Seventh",
  "Octave",
];

const intervalList = [
  {
    interval: "octave",
    frequency1: 261.63,
    frequency2: 523.25,
  },
  {
    interval: "minor second",
    frequency1: 261.63,
    frequency2: 277.18,
  },
  {
    interval: "major second",
    frequency1: 261.63,
    frequency2: 293.66,
  },
  {
    interval: "minor third",
    frequency1: 261.63,
    frequency2: 311.13,
  },
  {
    interval: "major third",
    frequency1: 261.63,
    frequency2: 326.63,
  },
  {
    interval: "perfect fourth",
    frequency1: 261.63,
    frequency2: 349.23,
  },
  {
    interval: "augmented fourth",
    frequency1: 261.63,
    frequency2: 523.25,
  },
  {
    interval: "perfect fifth",
    frequency1: 261.63,
    frequency2: 392,
  },
  {
    interval: "minor sixth",
    frequency1: 261.63,
    frequency2: 415.3,
  },
  {
    interval: "major sixth",
    frequency1: 261.63,
    frequency2: 440,
  },
  {
    interval: "minor seventh",
    frequency1: 261.63,
    frequency2: 466.16,
  },
  {
    interval: "major seventh",
    frequency1: 261.63,
    frequency2: 493.88,
  },
];

// Waits for DOM content to fully load before executing function
document.addEventListener("DOMContentLoaded", () => {
  let runGameButton = document.getElementById("begin-training-btn");
  runGameButton.addEventListener("click", () => {
    runGame();
  });
});

function runGame() {
 

    let interval = getInterval();
    console.log(interval)
}

function checkAnswer() {

}

function getInterval() {
    let getRandomIndex = Math.ceil(Math.random() * 12 - 1); // Generates a random number between 1 and 12, to get random index of intervals object array

    let randomInterval = intervalList[getRandomIndex];

    return randomInterval;
};

function playInterval() {
  let generatedInterval = getInterval();

  let firstNote = generatedInterval.frequency1;

  let secondNote = generatedInterval.frequency2;

  console.log(generatedInterval)

  createTones(firstNote, secondNote)
};



