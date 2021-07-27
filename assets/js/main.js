let interval1;

let interval2;

let userAnswer;

let correctAnswer;

let correctAnswersRemaining = 14;

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
    interval: "Octave",
    frequency1: 261.63,
    frequency2: 523.25,
  },
  {
    interval: "Minor Second",
    frequency1: 261.63,
    frequency2: 277.18,
  },
  {
    interval: "Major Second",
    frequency1: 261.63,
    frequency2: 293.66,
  },
  {
    interval: "Minor Third",
    frequency1: 261.63,
    frequency2: 311.13,
  },
  {
    interval: "Major Third",
    frequency1: 261.63,
    frequency2: 326.63,
  },
  {
    interval: "Perfect Fourth",
    frequency1: 261.63,
    frequency2: 349.23,
  },
  {
    interval: "Augmented Fourth",
    frequency1: 261.63,
    frequency2: 369.99,
  },
  {
    interval: "Perfect Fifth",
    frequency1: 261.63,
    frequency2: 392,
  },
  {
    interval: "Minor Sixth",
    frequency1: 261.63,
    frequency2: 415.3,
  },
  {
    interval: "Major Sixth",
    frequency1: 261.63,
    frequency2: 440,
  },
  {
    interval: "Minor Seventh",
    frequency1: 261.63,
    frequency2: 466.16,
  },
  {
    interval: "Major Seventh",
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
  // $("#begin-training-btn").remove();

  getInterval(); // invoke getInterval 

  let answerOptions = getAnswers(); // invokes getAnswers() function to grab values of answerList array and assign it to variable

  console.log(answerOptions);
  let answerContainer = document.getElementById("answer-container");

  let answerButtons = "";

  // loops over answerOptions variable and creates button upon each iteration
  for (i = 0; i < answerOptions.length; i++) {
    answerButtons += `<button>${answerOptions[i]}</button>`;
  }

  answerContainer.innerHTML = answerButtons; // Adds buttons from for loop to answerContainer div
}

function nextQuestion() {

}

function getAnswers() {
  let correctAnswerObject = getInterval(); // invoke getInterval() function to get interval object that's being played
  let correctInterval = correctAnswerObject.interval; // pull interval name out of correctAnswerObject

  console.log(correctInterval);

    if (correctAnswersRemaining <= 15 && correctAnswersRemaining >= 10) {
      answerList = answerList.splice(0, 2);
      !answerList.includes(correctInterval) // if answerList array doesn't contain correct interval, push it into the array
        ? answerList.push(correctInterval)
        : null;
    } else if (correctAnswersRemaining <= 9 && correctAnswersRemaining >= 5) {
      answerList = answerList.splice(0, 3);
      !answerList.includes(correctInterval)
        ? answerList.push(correctInterval)
        : null;
    } else if (correctAnswersRemaining <= 4 && correctAnswersRemaining >= 2) {
      answerList = answerList.splice(0, 6);
      !answerList.includes(correctInterval)
        ? answerList.push(correctInterval)
        : null;
    } else if (correctAnswersRemaining <= 1) {
      answerList = answerList.splice(0, 3);
      !answerList.includes(correctInterval) 
        ? answerList.push(correctInterval)
        : null;
    }
  

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

function checkAnswer() {}

function getInterval() {
  let getRandomIndex = Math.ceil(Math.random() * 12 - 1); // Generates a random number between 0 and 12

  let randomInterval = intervalList[getRandomIndex]; // getRandomIndex used to access random index of intervalList array;

  playInterval(randomInterval);

  return randomInterval;
}

function playInterval(interval) {
// Accessing frequency properties of random interval
  let firstNote = interval.frequency1;

  let secondNote = interval.frequency2;

  // Invoking createTones function to play two frequencies
  createTones(firstNote, secondNote);
}
