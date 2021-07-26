let interval1;

let interval2;

let userAnswer;

let correctAnswer;

let correctAnswersRemaining = 15;

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
    frequency2: 369.99,
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

  $('#begin-training-btn').remove();
  

}

function getAnswers() {
  let newAnswerArray = shuffleAnswers(answerList); // Invoke shuffleAnswers function passing in answerList array as parameter;
  
    if (correctAnswersRemaining <= 15 && correctAnswersRemaining >= 10) {
      newAnswerArray = newAnswerArray.splice(0, 9);
     
    
    } else if (correctAnswersRemaining <= 9 && correctAnswersRemaining >= 5) {
      newAnswerArray = newAnswerArray.splice(0, 8);
    
    } else if (correctAnswersRemaining <= 4 && correctAnswersRemaining >= 2) {
      newAnswerArray = newAnswerArray.splice(0, 6);
     
    } else if (correctAnswersRemaining <= 1) {
    
      newAnswerArray = newAnswerArray.splice(0, 3);
    }
  


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

  let randomInterval = intervalList[getRandomIndex]; // getRandomIndex used to access random index of intervalList array

  console.log(randomInterval);

 
  return randomInterval;
  
}

function playInterval() {
  let generatedInterval = getInterval(); // Invoking getInterval to get random interval

  // Accessing frequency properties of random interval
  let firstNote = generatedInterval.frequency1;

  let secondNote = generatedInterval.frequency2;

  // Invoking createTones function to play two frequencies
  createTones(firstNote, secondNote);

  return generatedInterval;


}
