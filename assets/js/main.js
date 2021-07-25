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

const intervals = [
  {
    cOctave: {
      frequency1: 261.63,
      frequency2: 523.25,
    },

    cMinorSecond: {
      frequency1: 261.63,
      frequency2: 277.18,
    },

    cMajorSecond: {
      frequency1: 261.63,
      frequency2: 293.66,
    },

    cMinorThird: {
      frequency1: 261.63,
      frequency2: 311.13,
    },

    cMajorThird: {
      frequency1: 261.63,
      frequency2: 326.63,
    },

    cPerfectFourth: {
      frequency1: 261.63,
      frequency2: 349.23,
    },

    cAugmentedFourth: {
      frequency1: 261.63,
      frequency2: 369.99,
    },

    cPerfectFifth: {
      frequency1: 261.63,
      frequency2: 392,
    },

    cMinorSixth: {
      frequency1: 261.63,
      frequency2: 415.3,
    },

    cMajorSixth: {
      frequency1: 261.63,
      frequency2: 440,
    },

    cMinorSeventh: {
      frequency1: 261.63,
      frequency2: 466.16,
    },

    cMajorSeventh: {
      frequency1: 261.63,
      frequency2: 493.88,
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  let runGameButton = document.getElementById('begin-training-btn');
  runGameButton.addEventListener('click', () => {
    runGame();
  })
})

