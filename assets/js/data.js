// Array of Answers to iterate over and create buttons displaying answer options

let intervalAnswerList = [
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
  "Octave"
];

let chordAnswerList = [
  "Major",
  "Minor",
  "Dominant 7",
  "Major 7",
  "Minor 7",
  "Diminished 7",
  "add2",
  "sus4"
];

// Array of Intervals to use to produce tones
const intervalList = [
  // C Octave
  {
    frequency1: 261.63,
    frequency2: 523.25,
    interval: "Octave",
    image: "assets/images/intervals/intervals-c/c-octave.png",
    name: "C Octave"
  },
  // C Minor Second
  {
    frequency1: 261.63,
    frequency2: 277.18,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-c/c-minor-second.png",
    name: "C Minor Second"
  },
  // C Major Second
  {
    frequency1: 261.63,
    frequency2: 293.66,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-c/c-major-second.png",
    name: "C Major Second"
  },
  // C Minor Third
  {
    frequency1: 261.63,
    frequency2: 311.13,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-c/c-minor-third.png",
    name: "C Minor Third"
  },
  // C Major Third
  {
    frequency1: 261.63,
    frequency2: 326.63,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-c/c-major-third.png",
    name: "C Major Third"
  },
  // C Perfect Fourth
  {
    frequency1: 261.63,
    frequency2: 349.23,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-c/c-perfect-fourth.png",
    name: "C Perfect Fourth"
  },
  // C Augmented Fourth
  {
    frequency1: 261.63,
    frequency2: 369.99,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-c/c-augmented-fourth.png",
    name: "C Augmented Fourth"
  },
  // C Perfect Fifth
  {
    frequency1: 261.63,
    frequency2: 392,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-c/c-perfect-fifth.png",
    name: "C Perfect Fifth"
  },
  // C Minor Sixth
  {
    frequency1: 261.63,
    frequency2: 415.3,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-c/c-minor-sixth.png",
    name: "C Minor Sixth"
  },
  // C Major Sixth
  {
    frequency1: 261.63,
    frequency2: 440,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-c/c-major-sixth.png",
    name: "C Major Sixth"
  },
  // C Minor Seventh
  {
    frequency1: 261.63,
    frequency2: 466.16,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-c/c-minor-seventh.png",
    name: "C Minor Seventh"
  },
  // C Major Seventh
  {
    frequency1: 261.63,
    frequency2: 493.88,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-c/c-major-seventh.png",
    name: "C Major Seventh"
  },
  // D Octave
  {
    frequency1: 293.66,
    frequency2: 587.33,
    interval: "Octave",
    image: "assets/images/intervals/intervals-d/d-octave.png",
    name: "D Octave"
  },
  // D Minor Second
  {
    frequency1: 293.66,
    frequency2: 311.13,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-d/d-minor-second.png",
    name: "D Minor Second"
  },
  // D Major Second
  {
    frequency1: 293.66,
    frequency2: 326.63,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-d/d-major-second.png",
    name: "D Major Second"
  },
  // D Minor Third
  {
    frequency1: 293.66,
    frequency2: 349.23,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-d/d-minor-third.png",
    name: "D Minor Third"
  },
  // D Major Third
  {
    frequency1: 293.66,
    frequency2: 369.99,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-d/d-major-third.png",
    name: "D Major Third"
  },
  // D Perfect Fourth
  {
    frequency1: 293.66,
    frequency2: 392,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-d/d-perfect-fourth.png",
    name: "D Perfect Fourth"
  },
  // D Augmented Fourth
  {
    frequency1: 293.66,
    frequency2: 415.3,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-d/d-augmented-fourth.png",
    name: "D Augmented Fourth"
  },
  // D Perfect Fifth
  {
    frequency1: 293.66,
    frequency2: 440,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-d/d-perfect-fifth.png",
    name: "D Perfect Fifth"
  },
  // D Minor Sixth
  {
    frequency1: 293.66,
    frequency2: 466.16,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-d/d-minor-sixth.png",
    name: "D Minor Sixth"
  },
  // D Major Sixth
  {
    frequency1: 293.66,
    frequency2: 493.88,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-d/d-major-sixth.png",
    name: "D Major Sixth"
  },
  // D Minor Seventh
  {
    frequency1: 293.66,
    frequency2: 523.25,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-d/d-minor-seventh.png",
    name: "D Minor Seventh"
  },
  // D Major Seventh
  {
    frequency1: 293.66,
    frequency2: 554.37,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-d/d-major-seventh.png",
    name: "D Major Seventh"
  },
  // D Flat Octave
  {
    frequency1: 277.18,
    frequency2: 544.37,
    interval: "Octave",
    image: "assets/images/intervals/intervals-d-flat/d-flat-octave.png",
    name: "Db Octave"
  },
  // D Flat Minor Second
  {
    frequency1: 277.18,
    frequency2: 293.66,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-second.png",
    name: "Db Minor Second"
  },
  // D Flat Major Second
  {
    frequency1: 277.18,
    frequency2: 311.13,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-second.png",
    name: "Db Major Second"
  },
  // D Flat Minor Third
  {
    frequency1: 277.18,
    frequency2: 329.63,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-third.png",
    name: "Db Minor Third"
  },
  // D Flat Major Third
  {
    frequency1: 277.18,
    frequency2: 349.23,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-third.png",
    name: "Db Major Third"
  },
  // D Flat Perfect Fourth
  {
    frequency1: 277.18,
    frequency2: 369.99,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-d-flat/d-flat-perfect-fourth.png",
    name: "Db Perfect Fourth"
  },
  // D Flat Augmented Fourth
  {
    frequency1: 277.18,
    frequency2: 392,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-d-flat/d-flat-augmented-fourth.png",
    name: "Db Augmented Fourth"
  },
  // D Flat Perfect Fifth
  {
    frequency1: 277.18,
    frequency2: 415.3,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-d-flat/d-flat-perfect-fifth.png",
    name: "Db Perfect Fifth"
  },
  // D Flat Minor Sixth
  {
    frequency1: 277.18,
    frequency2: 440,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-sixth.png",
    name: "Db Minor Sixth"
  },
  // D Flat Major Sixth
  {
    frequency1: 277.18,
    frequency2: 466.16,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-sixth.png",
    name: "Db Major Sixth"
  },
  // D Flat Minor Seventh
  {
    frequency1: 277.18,
    frequency2: 493.88,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-seventh.png",
    name: "Db Minor Seventh"
  },
  // D Flat Major Seventh
  {
    frequency1: 277.18,
    frequency2: 523.25,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-seventh.png",
    name: "Db Major Seventh"
  },
  // E Flat Octave
  {
    frequency1: 311.13,
    frequency2: 622.25,
    interval: "Octave",
    image: "assets/images/intervals/intervals-e-flat/e-flat-octave.png",
    name: "Eb Octave"
  },
  // E Flat Minor Second
  {
    frequency1: 311.13,
    frequency2: 329.63,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-e-flat/e-flat-minor-second.png",
    name: "Eb Minor Second"
  },
  // E Flat Major Second
  {
    frequency1: 311.13,
    frequency2: 349.23,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-second.png",
    name: "Eb Major Second"
  },
  // E Flat Minor Third
  {
    frequency1: 311.13,
    frequency2: 369.99,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-e-flat/e-flat-octave.png",
    name: "Eb Minor Third"
  },
  // E Flat Major Third
  {
    frequency1: 311.13,
    frequency2: 392,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-third.png",
    name: "Eb Major Third"
  },
  // E Flat Perfect Fourth
  {
    frequency1: 311.13,
    frequency2: 415.3,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-e-flat/e-flat-perfect-fourth.png",
    name: "Eb Perfect Fourth"
  },
  // E Flat Augmented Fourth
  {
    frequency1: 311.13,
    frequency2: 440,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-e-flat/e-flat-augmented-fourth.png",
    name: "Eb Augmented Fourth"
  },
  // E Flat Perfect Fifth
  {
    frequency1: 311.13,
    frequency2: 466.16,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-e-flat/e-flat-perfect-fifth.png",
    name: "Eb Perfect Fifth"
  },
  // E Flat Minor Sixth
  {
    frequency1: 311.13,
    frequency2: 493.88,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-e-flat/e-flat-minor-sixth.png",
    name: "Eb Minor Sixth"
  },
  // E Flat Major Sixth
  {
    frequency1: 311.13,
    frequency2: 523.25,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-sixth.png",
    name: "Eb Major Sixth"
  },
  // E Flat Minor Seventh
  {
    frequency1: 311.13,
    frequency2: 554.37,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-e-flat/e-flat-minor-seventh.png",
    name: "Eb Minor Seventh"
  },
  // E Flat Major Seventh
  {
    frequency1: 311.13,
    frequency2: 587.33,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-seventh.png",
    name: "Eb Major Seventh"
  },
  // E Octave
  {
    frequency1: 329.63,
    frequency2: 659.25,
    interval: "Octave",
    image: "assets/images/intervals/intervals-e/e-octave.png",
    name: "E Octave"
  },
  // E Minor Second
  {
    frequency1: 329.63,
    frequency2: 349.23,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-e/e-minor-second.png",
    name: "E Minor Second"
  },
  // E Major Second
  {
    frequency1: 329.63,
    frequency2: 369.99,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-e/e-major-second.png",
    name: "E Major Second"
  },
  // E Minor Third
  {
    frequency1: 329.63,
    frequency2: 392,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-e/e-minor-third.png",
    name: "E Minor Third"
  },
  // E Major Third
  {
    frequency1: 329.63,
    frequency2: 415.3,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-e/e-major-third.png",
    name: "E Major Third"
  },
  // E Perfect Fourth
  {
    frequency1: 329.63,
    frequency2: 440,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-e/e-perfect-fourth.png",
    name: "E Perfect Fourth"
  },
  // E Augmented Fourth
  {
    frequency1: 329.63,
    frequency2: 466.16,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-e/e-augmented-fourth.png",
    name: "E Augmented Fourth"
  },
  // E Perfect Fifth
  {
    frequency1: 329.63,
    frequency2: 493.88,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-e/e-perfect-fifth.png",
    name: "E Perfect Fifth"
  },
  {
    frequency1: 329.63,
    frequency2: 523.25,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-e/e-minor-sixth.png",
    name: "E Minor Sixth"
  },
  // E Major Sixth
  {
    frequency1: 329.63,
    frequency2: 554.37,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-e/e-major-sixth.png",
    name: "E Major Sixth"
  },
  // E Minor Seventh
  {
    frequency1: 329.63,
    frequency2: 587.33,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-e/e-minor-seventh.png",
    name: "E Minor Seventh"
  },
  // E Major Seventh
  {
    frequency1: 329.63,
    frequency2: 622.25,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-e/e-major-seventh.png",
    name: "E Major Seventh"
  },
  // F Octave
  {
    frequency1: 349.23,
    frequency2: 698.46,
    interval: "Octave",
    image: "assets/images/intervals/intervals-f/f-major-octave.png",
    name: "F Octave"
  },
  // F Minor Second
  {
    frequency1: 349.23,
    frequency2: 369.99,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-f/f-minor-second.png",
    name: "F Minor Second"
  },
  // F Major Second
  {
    frequency1: 349.23,
    frequency2: 392,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-f/f-major-second.png",
    name: "F Major Second"
  },
  // F Minor Third
  {
    frequency1: 349.23,
    frequency2: 415.3,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-f/f-minor-third.png",
    name: "F Minor Third"
  },
  // F Major Third
  {
    frequency1: 349.23,
    frequency2: 440,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-f/f-major-third.png",
    name: "F Major Third"
  },
  // F Perfect Fourth
  {
    frequency1: 349.23,
    frequency2: 466.16,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-f/f-perfect-fourth.png",
    name: "F Perfect Fourth"
  },
  // F Augmented Fourth
  {
    frequency1: 349.23,
    frequency2: 493.88,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-f/f-augmented-fourth.png",
    name: "F Augmented Fourth"
  },
  // F Perfect Fifth
  {
    frequency1: 349.23,
    frequency2: 523.25,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-f/f-perfect-fifth.png",
    name: "F Perfect Fifth"
  },
  // F Minor Sixth
  {
    frequency1: 349.23,
    frequency2: 554.37,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-f/f-minor-sixth.png",
    name: "F Minor Sixth"
  },
  // F Major Sixth
  {
    frequency1: 349.23,
    frequency2: 587.33,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-f/f-major-sixth.png",
    name: "F Major Sixth"
  },
  // F Minor Seventh
  {
    frequency1: 349.23,
    frequency2: 622.25,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-f/f-minor-seventh.png",
    name: "F Minor Seventh"
  },
  // F Major Seventh
  {
    frequency1: 349.23,
    frequency2: 659.25,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-f/f-major-seventh.png",
    name: "F Major Seventh"
  },
  // F Sharp Octave
  {
    frequency1: 369.99,
    frequency2: 739.99,
    interval: "Octave",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-octave.png",
    name: "F# Octave"
  },
  // F Sharp Minor Second
  {
    frequency1: 369.99,
    frequency2: 392,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-second.png",
    name: "F# Minor Second"
  },
  // F Sharp Major Second
  {
    frequency1: 369.99,
    frequency2: 415.30,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-second.png",
    name: "F# Major Second"
  },
  // F Sharp Minor Third
  {
    frequency1: 369.99,
    frequency2: 440,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-third.png",
    name: "F# Minor Third"
  },
  // F Sharp Major Third
  {
    frequency1: 369.99,
    frequency2: 466.16,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-third.png",
    name: "F# Major Third"
  },
  // F Sharp Perfect Fourth
  {
    frequency1: 369.99,
    frequency2: 493.88,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-perfect-fourth.png",
    name: "F# Perfect Fourth"
  },
  // F Sharp Augmented Fourth
  {
    frequency1: 369.99,
    frequency2: 523.25,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-augmented-fourth.png",
    name: "F# Augmented Fourth"
  },
  // F Sharp Perfect Fifth
  {
    frequency1: 369.99,
    frequency2: 554.37,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-perfect-fifth.png",
    name: "F# Perfect Fifth"
  },
  // F Sharp Minor Sixth
  {
    frequency1: 369.99,
    frequency2: 587.33,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-sixth.png",
    name: "F# Minor Sixth"
  },
  // F Sharp Major Sixth
  {
    frequency1: 369.99,
    frequency2: 622.25,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-sixth.png",
    name: "F# Major Sixth"
  },
  // F Sharp Minor Seventh
  {
    frequency1: 369.99,
    frequency2: 659.25,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-seventh.png",
    name: "F# Minor Seventh"
  },
  // F Sharp Major Seventh
  {
    frequency1: 369.99,
    frequency2: 698.46,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-seventh.png",
    name: "F# Major Seventh"
  },
  // G Octave
  {
    frequency1: 196,
    frequency2: 392,
    interval: "Octave",
    image: "assets/images/intervals/intervals-g/g-octave.png",
    name: "G Octave"
  },
  // G Minor Second
  {
    frequency1: 196,
    frequency2: 207.65,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-g/g-minor-second.png",
    name: "G Minor Second"
  },
  // G Major Second
  {
    frequency1: 196,
    frequency2: 220,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-g/g-major-second.png",
    name: "G Major Second"
  },
  // G Minor Third
  {
    frequency1: 196,
    frequency2: 233.08,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-g/g-minor-third.png",
    name: "G Minor Third"
  },
  // G Major Third
  {
    frequency1: 196,
    frequency2: 246.94,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-g/g-major-third.png",
    name: "G Major Third"
  },
  // G Perfect Fourth
  {
    frequency1: 196,
    frequency2: 261.63,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-g/g-perfect-fourth.png",
    name: "G Perfect Fourth"
  },
  // G Augmented Fourth
  {
    frequency1: 196,
    frequency2: 277.18,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-g/g-augmented-fourth.png",
    name: "G Augmented Fourth"
  },
  // G Perfect Fifth
  {
    frequency1: 196,
    frequency2: 293.66,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-g/g-perfect-fifth.png",
    name: "G Perfect Fifth"
  },
  // G Minor Sixth
  {
    frequency1: 196,
    frequency2: 311.13,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-g/g-minor-sixth.png",
    name: "G Minor Sixth"
  },
  // G Major Sixth
  {
    frequency1: 196,
    frequency2: 329.63,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-g/g-major-sixth.png",
    name: "G Major Sixth"
  },
  // G Minor Seventh
  {
    frequency1: 196,
    frequency2: 349.23,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-g/g-minor-seventh.png",
    name: "G Minor Seventh"
  },
  // G Major Seventh
  {
    frequency1: 196,
    frequency2: 369.99,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-g/g-major-seventh.png",
    name: "G Major Seventh"
  },
  // Ab Octave
  {
    frequency1: 207.65,
    frequency2: 415.3,
    interval: "Octave",
    image: "assets/images/intervals/intervals-a-flat/a-flat-octave.png",
    name: "Ab Octave"
  },
  // Ab Minor Second
  {
    frequency1: 207.65,
    frequency2: 220,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-second.png",
    name: "Ab Minor Second"
  },
  // Ab Major Second
  {
    frequency1: 207.65,
    frequency2: 233.08,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-second.png",
    name: "Ab Major Second"
  },
  // Ab Minor Third
  {
    frequency1: 207.65,
    frequency2: 246.94,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-third.png",
    name: "Ab Minor Third"
  },
  // Ab Major Third
  {
    frequency1: 207.65,
    frequency2: 261.63,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-third.png",
    name: "Ab Major Third"
  },
  // Ab Perfect Fourth
  {
    frequency1: 207.65,
    frequency2: 277.18,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-a-flat/a-flat-perfect-fourth.png",
    name: "Ab Perfect Fourth"
  },
  // Ab Augmented Fourth
  {
    frequency1: 207.65,
    frequency2: 293.66,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-a-flat/a-flat-augmented-fourth.png",
    name: "Ab Augmented Fourth"
  },
  // Ab Perfect Fifth
  {
    frequency1: 207.65,
    frequency2: 311.13,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-a-flat/a-flat-perfect-fifth.png",
    name: "Ab Perfect Fifth"
  },
  // Ab Minor Sixth
  {
    frequency1: 207.65,
    frequency2: 329.63,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-sixth.png",
    name: "Ab Minor Sixth"
  },
  // Ab Major Sixth
  {
    frequency1: 207.65,
    frequency2: 349.23,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-sixth.png",
    name: "Ab Major Sixth"
  },
  // Ab Minor Seventh
  {
    frequency1: 207.65,
    frequency2: 369.99,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-seventh.png",
    name: "Ab Minor Seventh"
  },
  // Ab Major Seventh
  {
    frequency1: 207.65,
    frequency2: 392,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-seventh.png",
    name: "Ab Major Seventh"
  },
  // A Octave
  {
    frequency1: 220,
    frequency2: 440,
    interval: "Octave",
    image: "assets/images/intervals/intervals-a/a-octave.png",
    name: "A Octave"
  },
  // A Minor Second
  {
    frequency1: 220,
    frequency2: 233.08,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-a/a-minor-second.png",
    name: "A Minor Second"
  },
  // A Major Second
  {
    frequency1: 220,
    frequency2: 246.94,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-a/a-major-second.png",
    name: "A Major Second"
  },
  // A Minor Third
  {
    frequency1: 220,
    frequency2: 261.63,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-a/a-minor-third.png",
    name: "A Minor Third"
  },
  // A Major Third
  {
    frequency1: 220,
    frequency2: 277.18,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-a/a-major-third.png",
    name: "A Major Third"
  },
  // A Perfect Fourth
  {
    frequency1: 220,
    frequency2: 293.66,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-a/a-perfect-fourth.png",
    name: "A Perfect Fourth"
  },
  // A Augmented Fourth
  {
    frequency1: 220,
    frequency2: 311.13,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-a/a-augmented-fourth.png",
    name: "A Augmented Fourth"
  },
  // A Perfect Fifth
  {
    frequency1: 220,
    frequency2: 329.63,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-a/a-perfect-fifth.png",
    name: "A Perfect Fifth"
  },
  // A Minor Sixth
  {
    frequency1: 220,
    frequency2: 349.23,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-a/a-minor-sixth.png",
    name: "A Minor Sixth"
  },
  // A Major Sixth
  {
    frequency1: 220,
    frequency2: 369.99,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-a/a-major-sixth.png",
    name: "A Major Sixth"
  },
  // A Minor Seventh
  {
    frequency1: 220,
    frequency2: 392,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-a/a-minor-seventh.png",
    name: "A Minor Seventh"
  },
  // A Major Seventh
  {
    frequency1: 220,
    frequency2: 415.3,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-a/a-major-seventh.png",
    name: "A Major Seventh"
  },
  // B Flat Octave
  {
    frequency1: 233.08,
    frequency2: 466.16,
    interval: "Octave",
    image: "assets/images/intervals/intervals-b-flat/b-flat-octave.png",
    name: "Bb Octave"
  },
  // B Flat Minor Second
  {
    frequency1: 233.08,
    frequency2: 246.94,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-second.png",
    name: "Bb Minor Second"
  },
  // B Flat Major Second
  {
    frequency1: 233.08,
    frequency2: 261.63,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-second.png",
    name: "Bb Major Second"
  },
  // B Flat Minor Third
  {
    frequency1: 233.08,
    frequency2: 277.18,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-third.png",
    name: "Bb Minor Third"
  },
  // B Flat Major Third
  {
    frequency1: 233.08,
    frequency2: 293.66,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-third.png",
    name: "Bb Major Third"
  },
  // B Flat Perfect Fourth
  {
    frequency1: 233.08,
    frequency2: 311.13,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-b-flat/b-flat-perfect-fourth.png",
    name: "Bb Perfect Fourth"
  },
  // B Flat Augmented Fourth
  {
    frequency1: 233.08,
    frequency2: 329.63,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-b-flat/b-flat-augmented-fourth.png",
    name: "Bb Augmented Fourth"
  },
  // B Flat Perfect Fifth
  {
    frequency1: 233.08,
    frequency2: 349.23,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-b-flat/b-flat-perfect-fifth.png",
    name: "Bb Perfect Fifth"
  },
  // B Flat Minor Sixth
  {
    frequency1: 233.08,
    frequency2: 369.99,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-sixth.png",
    name: "Bb Minor Sixth"
  },
  // B Flat Major Sixth
  {
    frequency1: 233.08,
    frequency2: 392,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-sixth.png",
    name: "Bb Major Sixth"
  },
  // B Flat Minor Seventh
  {
    frequency1: 233.08,
    frequency2: 415.3,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-seventh.png",
    name: "Bb Minor Seventh"
  },
  // B Flat Major Seventh
  {
    frequency1: 233.08,
    frequency2: 440,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-seventh.png",
    name: "Bb Major Seventh"
  },
  // B Octave
  {
    frequency1: 246.94,
    frequency2: 493.88,
    interval: "Octave",
    image: "assets/images/intervals/intervals-b/b-octave.png",
    name: "B Octave"
  },
  // B Minor Second
  {
    frequency1: 246.94,
    frequency2: 261.63,
    interval: "Minor Second",
    image: "assets/images/intervals/intervals-b/b-minor-second.png",
    name: "B Minor Second"
  },
  // B Major Second
  {
    frequency1: 246.94,
    frequency2: 277.18,
    interval: "Major Second",
    image: "assets/images/intervals/intervals-b/b-major-second.png",
    name: "B Major Second"
  },
  // B Minor Third
  {
    frequency1: 246.94,
    frequency2: 293.66,
    interval: "Minor Third",
    image: "assets/images/intervals/intervals-b/b-minor-third.png",
    name: "B Minor Third"
  },
  // B Major Third
  {
    frequency1: 246.94,
    frequency2: 311.13,
    interval: "Major Third",
    image: "assets/images/intervals/intervals-b/b-major-third.png",
    name: "B Major Third"
  },
  // B Perfect Fourth
  {
    frequency1: 246.94,
    frequency2: 329.63,
    interval: "Perfect Fourth",
    image: "assets/images/intervals/intervals-b/b-perfect-fourth.png",
    name: "B Perfect Fourth"
  },
  // B Augmented Fourth
  {
    frequency1: 246.94,
    frequency2: 349.23,
    interval: "Augmented Fourth",
    image: "assets/images/intervals/intervals-b/b-augmented-fourth.png",
    name: "B Augmented Fourth"
  },
  // B Perfect Fifth
  {
    frequency1: 246.94,
    frequency2: 369.99,
    interval: "Perfect Fifth",
    image: "assets/images/intervals/intervals-b/b-perfect-fifth.png",
    name: "B Perfect Fifth"
  },
  // B Minor Sixth
  {
    frequency1: 246.94,
    frequency2: 392,
    interval: "Minor Sixth",
    image: "assets/images/intervals/intervals-b/b-minor-sixth.png",
    name: "B Minor Sixth"
  },
  // B Major Sixth
  {
    frequency1: 246.94,
    frequency2: 415.3,
    interval: "Major Sixth",
    image: "assets/images/intervals/intervals-b/b-major-sixth.png",
    name: "B Major Sixth"
  },
  // B Minor Seventh
  {
    frequency1: 246.94,
    frequency2: 440,
    interval: "Minor Seventh",
    image: "assets/images/intervals/intervals-b/b-minor-seventh.png",
    name: "B Minor Seventh"
  },
  // B Major Seventh
  {
    frequency1: 246.94,
    frequency2: 466.16,
    interval: "Major Seventh",
    image: "assets/images/intervals/intervals-b/b-major-seventh.png",
    name: "B Major Seventh"
  },
];

console.log(intervalList.length)



/* Object array of chords - Major, Minor, Dominant 7th, Major 7th and Minor 7th
to be iterated over and used in Chord Identifier game */
const chordList = [
  // C Major
  {
    frequency1: 130.81,
    frequency2: 261.63,
    frequency3: 326.63,
    frequency4: 392,
    chord: "Major",
    image: "assets/images/chords/major-triads/c-major-triad.png",
    name: "C Major Triad"
  },
  // Db Major
  {
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    chord: "Major",
    image: "assets/images/chords/major-triads/d-flat-major-triad.png",
    name: "Db Major Triad"
  },
  // D Major
  {
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    chord: "Major",
    image: "assets/images/chords/major-triads/d-major-triad.png",
    name: "D Major Triad"
  },
  // Eb Major
  {
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    chord: "Major",
    image: "assets/images/chords/major-triads/e-flat-major-triad.png",
    name: "Eb Major Triad"
  },
  // F Major
  {
    frequency1: 349.23,
    frequency2: 440,
    frequency3: 523.25,
    chord: "Major",
    image: "assets/images/chords/major-triads/f-major-triad.png",
    name: "F Major Triad"
  },
  {
    // G Major
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    chord: "Major",
    image: "assets/images/chords/major-triads/g-major-triad.png",
    name: "G Major Triad"
  },
  {
    // Ab Major
    frequency1: 233.08,
    frequency2: 261.63,
    frequency3: 311.13,
    chord: "Major",
    image: "assets/images/chords/major-triads/a-flat-major-triad.png",
    name: "Ab Major Triad"
  },
  // Bb Major
  {
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    chord: "Major",
    image: "assets/images/chords/major-triads/b-flat-major-triad.png",
    name: "Bb Major Triad"
  },
  // B Major
  {
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    chord: "Major",
    image: "assets/images/chords/major-triads/b-major-triad.png",
    name: "B Major Triad"
  },
  // A Major
  {
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    chord: "Major",
    image: "assets/images/chords/major-triads/a-major-triad.png",
    name: "A Major Triad"
  },
  // D Major
  {
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    chord: "Major",
    image: "assets/images/chords/major-triads/d-major-triad.png",
    name: "D Major Triad"
  },
  // F Sharp Major
  {
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 311.13,
    chord: "Major",
    image: "assets/images/chords/major-triads/f-sharp-major-triad.png",
    name: "F# Major Triad"
  },
  // C Minor
  {
    frequency1: 261.63,
    frequency2: 311.13,
    frequency3: 392,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/c-minor-triad.png",
    name: "C Minor Triad"
  },
  // C# Minor
  {
    frequency1: 277.18,
    frequency2: 329.63,
    frequency3: 415.3,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/c-sharp-minor-triad.png",
    name: "C# Minor Triad"
  },
  // D Minor
  {
    frequency1: 293.66,
    frequency2: 349.23,
    frequency3: 440,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/d-minor-triad.png",
    name: "D Minor Triad"
  },
  // Eb Minor
  {
    frequency1: 311.13,
    frequency2: 369.99,
    frequency3: 466.16,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/e-flat-minor-triad.png",
    name: "Eb Minor Triad"
  },
  // E Minor
  {
    frequency1: 329.63,
    frequency2: 392.0,
    frequency3: 493.88,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/e-minor-triad.png",
    name: "E Minor Triad"
  },
  // F Minor
  {
    frequency1: 349.23,
    frequency2: 415.3,
    frequency3: 523.25,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/f-minor-triad.png",
    name: "F Minor Triad"
  },
  // F# Minor
  {
    frequency1: 369.99,
    frequency2: 440,
    frequency3: 554.37,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/f-sharp-minor-triad.png",
    name: "F# Minor Triad"
  },
  // G Minor
  {
    frequency1: 196,
    frequency2: 233.08,
    frequency3: 293.66,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/g-minor-triad.png",
    name: "G Minor Triad"
  },
  // Ab Minor
  {
    frequency1: 207.65,
    frequency2: 246.94,
    frequency3: 311.13,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/a-flat-minor-triad.png",
    name: "Ab Minor Triad"
  },
  // A Minor
  {
    frequency1: 220,
    frequency2: 261.63,
    frequency3: 329.63,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/a-minor-triad.png",
    name: "A Minor Triad"
  },
  // Bb Minor
  {
    frequency1: 233.08,
    frequency2: 277.18,
    frequency3: 349.23,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/b-flat-minor-triad.png",
    name: "Bb Minor Triad"
  },
  // B Minor
  {
    frequency1: 246.94,
    frequency2: 293.66,
    frequency3: 369.99,
    chord: "Minor",
    image: "assets/images/chords/minor-triads/b-minor-triad.png",
    name: "B Minor Triad"
  },
  // C Dominant 7
  {
    frequency1: 261.63,
    frequency2: 329.63,
    frequency3: 392,
    frequency4: 466.16,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/c-dominant-7.png",
    name: "C Dominant 7"
  },
  // Db Dominant 7
  {
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    frequency4: 493.88,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/d-flat-dominant-7.png",
    name: "Db Dominant 7"
  },
  // D Dominant 7
  {
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    frequency4: 523.25,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/d-dominant-7.png",
    name: "D Dominant 7"
  },
  // Eb Dominant 7
  {
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    frequency4: 554.37,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/e-flat-dominant-7.png",
    name: "Eb Dominant 7"
  },
  // E Dominant 7
  {
    frequency1: 329.63,
    frequency2: 415.3,
    frequency3: 493.88,
    frequency4: 587.33,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/e-dominant-7.png",
    name: "E Dominant 7"
  },
  // F Dominant 7
  {
    frequency1: 174.61,
    frequency2: 220,
    frequency3: 261.63,
    frequency4: 311.13,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/f-dominant-7.png",
    name: "F Dominant 7"
  },
  // F# Dominant 7
  {
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 277.18,
    frequency4: 329.63,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/f-sharp-dominant-7.png",
    name: "F# Dominant 7"
  },
  // G Dominant 7
  {
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    frequency4: 349.23,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/g-dominant-7.png",
    name: "G Dominant 7"
  },
  // Ab Dominant 7
  {
    frequency1: 207.65,
    frequency2: 261.63,
    frequency3: 311.13,
    frequency4: 369.99,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/a-flat-dominant-7.png",
    name: "Ab Dominant 7"
  },
  // A Dominant 7
  {
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    frequency4: 392,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/a-dominant-7.png",
    name: "A Dominant 7"
  },
  // Bb Dominant 7
  {
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    frequency4: 415.3,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/b-flat-dominant-7.png",
    name: "Bb Dominant 7"
  },
  // B Dominant 7
  {
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    frequency4: 440,
    chord: "Dominant 7",
    image: "assets/images/chords/dominant-sevenths/b-dominant-7.png",
    name: "B Dominant 7"
  },
  // C Minor 7
  {
    frequency1: 261.63,
    frequency2: 311.13,
    frequency3: 392,
    frequency4: 466.16,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/c-minor-7.png",
    name: "C Minor 7"
  },
  // C# Minor 7
  {
    frequency1: 277.18,
    frequency2: 329.63,
    frequency3: 415.3,
    frequency4: 493.88,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/c-sharp-minor-7.png",
    name: "C# Minor 7"
  },
  // D Minor 7
  {
    frequency1: 293.66,
    frequency2: 349.23,
    frequency3: 440,
    frequency4: 523.25,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/d-minor-7.png",
    name: "D Minor 7"
  },
  // Eb Minor 7
  {
    frequency1: 311.13,
    frequency2: 369.99,
    frequency3: 466.16,
    frequency4: 554.37,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/e-flat-minor-7.png",
    name: "Eb Minor 7"
  },
  // E Minor 7
  {
    frequency1: 329.63,
    frequency2: 392.0,
    frequency3: 493.88,
    frequency4: 587.33,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/e-minor-7.png",
    name: "E Minor 7"
  },
  // F Minor 7
  {
    frequency1: 174.61,
    frequency2: 207.65,
    frequency3: 261.63,
    frequency4: 311.13,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/f-minor-7.png",
    name: "F Minor 7"
  },
  // F# Minor 7
  {
    frequency1: 185,
    frequency2: 220,
    frequency3: 277.18,
    frequency4: 329.63,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/f-sharp-minor-7.png",
    name: "F# Minor 7"
  },
  // G Minor 7
  {
    frequency1: 196.0,
    frequency2: 233.08,
    frequency3: 293.66,
    frequency4: 349.23,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/g-minor-7.png",
    name: "G Minor 7"
  },
  // Ab Minor 7
  {
    frequency1: 207.65,
    frequency2: 246.94,
    frequency3: 311.13,
    frequency4: 369.99,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/a-flat-minor-7.png",
    name: "Ab Minor 7"
  },
  // A Minor 7
  {
    frequency1: 220,
    frequency2: 261.63,
    frequency3: 329.63,
    frequency4: 392,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/a-minor-7.png",
    name: "A Minor 7"
  },
  // Bb Minor 7
  {
    frequency1: 233.08,
    frequency2: 277.18,
    frequency3: 349.23,
    frequency4: 415.3,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/b-flat-minor-7.png",
    name: "Bb Minor 7"
  },
  // B Minor 7
  {
    frequency1: 246.94,
    frequency2: 293.66,
    frequency3: 369.99,
    frequency4: 440,
    chord: "Minor 7",
    image: "assets/images/chords/minor-sevenths/b-minor-7.png",
    name: "B Minor 7"
  },
  // C Major 7
  {
    frequency1: 261.63,
    frequency2: 329.63,
    frequency3: 392,
    frequency4: 493.88,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/c-major-7.png",
    name: "C Major 7"
  },
  // Db Major 7
  {
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    frequency4: 523.25,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/d-flat-major-7.png",
    name: "Db Major 7"
  },
  // D Major 7
  {
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    frequency4: 554.37,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/d-major-7.png",
    name: "D Major 7"
  },
  // Eb Major 7
  {
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    frequency4: 587.33,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/e-flat-major-7.png",
    name: "Eb Major 7"
  },
  // E Major 7
  {
    frequency1: 329.63,
    frequency2: 415.3,
    frequency3: 493.88,
    frequency4: 622.25,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/e-major-7.png",
    name: "E Major 7"
  },
  // F Major 7
  {
    frequency1: 174.61,
    frequency2: 220,
    frequency3: 261.63,
    frequency4: 329.63,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/f-major-7.png",
    name: "F Major 7"
  },
  // F# Major 7
  {
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 277.18,
    frequency4: 329.23,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/f-sharp-major-7.png",
    name: "F# Major 7"
  },
  // G Major 7
  {
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    frequency4: 369.99,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/g-major-7.png",
    name: "G Major 7"
  },
  // Ab Major 7
  {
    frequency1: 207.65,
    frequency2: 261.63,
    frequency3: 311.13,
    frequency4: 392,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/a-flat-major-7.png",
    name: "Ab Major 7"
  },
  // A Major 7
  {
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    frequency4: 415.3,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/a-major-7.png",
    name: "A Major 7"
  },
  // Bb major 7
  {
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    frequency4: 440,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/b-flat-major-7.png",
    name: "Bb Major 7"
  },
  // B Major 7
  {
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    frequency4: 466.16,
    chord: "Major 7",
    image: "assets/images/chords/major-sevenths/b-major-7.png",
    name: "B Major 7"
  },
];

