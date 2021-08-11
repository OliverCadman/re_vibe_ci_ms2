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
  "Octave",
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
]

// Array of Intervals to use to produce tones
const intervalList = [
  // C Octave
  {
    interval: "Octave",
    name: "C Octave",
    frequency1: 261.63,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-c/c-octave.png",
  },
  // C Minor Second
  {
    interval: "Minor Second",
    name: "C Minor Second",
    frequency1: 261.63,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-c/c-minor-second.png",
  },
  // C Major Second
  {
    interval: "Major Second",
    name: "C Major Second",
    frequency1: 261.63,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-c/c-major-second.png",
  },
  // C Minor Third
  {
    interval: "Minor Third",
    name: "C Minor Third",
    frequency1: 261.63,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-c/c-minor-third.png",
  },
  // C Major Third
  {
    interval: "Major Third",
    name: "C Major Third",
    frequency1: 261.63,
    frequency2: 326.63,
    image: "assets/images/intervals/intervals-c/c-major-third.png",
  },
  // C Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "C Perfect Fourth",
    frequency1: 261.63,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-c/c-perfect-fourth.png",
  },
  // C Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "C Augmented Fourth",
    frequency1: 261.63,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-c/c-augmented-fourth.png",
  },
  // C Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "C Perfect Fifth",
    frequency1: 261.63,
    frequency2: 392,
    image: "assets/images/intervals/intervals-c/c-perfect-fifth.png",
  },
  // C Minor Sixth
  {
    interval: "Minor Sixth",
    name: "C Minor Sixth",
    frequency1: 261.63,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-c/c-minor-sixth.png",
  },
  // C Major Sixth
  {
    interval: "Major Sixth",
    name: "C Major Sixth",
    frequency1: 261.63,
    frequency2: 440,
    image: "assets/images/intervals/intervals-c/c-major-sixth.png",
  },
  // C Minor Seventh
  {
    interval: "Minor Seventh",
    name: "C Minor Seventh",
    frequency1: 261.63,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-c/c-minor-seventh.png",
  },
  // C Major Seventh
  {
    interval: "Major Seventh",
    name: "C Major Seventh",
    frequency1: 261.63,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-c/c-major-seventh.png",
  },
  // D Octave
  {
    interval: "Octave",
    name: "D Octave",
    frequency1: 293.66,
    frequency2: 587.33,
    image: "assets/images/intervals/intervals-d/d-octave.png",
  },
  // D Minor Second
  {
    interval: "Minor Second",
    name: "D Minor Second",
    frequency1: 293.66,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-d/d-minor-second.png",
  },
  // D Major Second
  {
    interval: "Major Second",
    name: "D Major Second",
    frequency1: 293.66,
    frequency2: 326.63,
    image: "assets/images/intervals/intervals-d/d-major-second.png",
  },
  // D Minor Third
  {
    interval: "Minor Third",
    name: "D Minor Third",
    frequency1: 293.66,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-d/d-minor-third.png",
  },
  // D Major Third
  {
    interval: "Major Third",
    name: "D Major Third",
    frequency1: 293.66,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-d/d-major-third.png",
  },
  // D Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "D Perfect Fourth",
    frequency1: 293.66,
    frequency2: 392,
    image: "assets/images/intervals/intervals-d/d-perfect-fourth.png",
  },
  // D Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "D Augmented Fourth",
    frequency1: 293.66,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-d/d-augmented-fourth.png",
  },
  // D Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "D Perfect Fifth",
    frequency1: 293.66,
    frequency2: 440,
    image: "assets/images/intervals/intervals-d/d-perfect-fifth.png",
  },
  // D Minor Sixth
  {
    interval: "Minor Sixth",
    name: "D Minor Sixth",
    frequency1: 293.66,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-d/d-minor-sixth.png",
  },
  // D Major Sixth
  {
    interval: "Major Sixth",
    name: "D Major Sixth",
    frequency1: 293.66,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-d/d-major-sixth.png",
  },
  // D Minor Seventh
  {
    interval: "Minor Seventh",
    name: "D Minor Seventh",
    frequency1: 293.66,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-d/d-minor-seventh.png",
  },
  // D Major Seventh
  {
    interval: "Major Seventh",
    name: "D Major Seventh",
    frequency1: 293.66,
    frequency2: 554.37,
    image: "assets/images/intervals/intervals-d/d-major-seventh.png",
  },
  // D Flat Octave
  {
    interval: "Octave",
    name: "Db Octave",
    frequency1: 277.18,
    frequency2: 544.37,
    image: "assets/images/intervals/intervals-d-flat/d-flat-octave.png",
  },
  // D Flat Minor Second
  {
    interval: "Minor Second",
    name: "Db Minor Second",
    frequency1: 277.18,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-second.png",
  },
  // D Flat Major Second
  {
    interval: "Major Second",
    name: "Db Major Second",
    frequency1: 277.18,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-second.png",
  },
  // D Flat Minor Third
  {
    interval: "Minor Third",
    name: "Db Minor Third",
    frequency1: 277.18,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-third.png",
  },
  // D Flat Major Third
  {
    interval: "Major Third",
    name: "Db Major Third",
    frequency1: 277.18,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-third.png",
  },
  // D Flat Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "Db Perfect Fourth",
    frequency1: 277.18,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-d-flat/d-flat-perfect-fourth.png",
  },
  // D Flat Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "Db Augmented Fourth",
    frequency1: 277.18,
    frequency2: 392,
    image: "assets/images/intervals/intervals-d-flat/d-flat-augmented-fourth.png",
  },
  // D Flat Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "Db Perfect Fifth",
    frequency1: 277.18,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-d-flat/d-flat-perfect-fifth.png",
  },
  // D Flat Minor Sixth
  {
    interval: "Minor Sixth",
    name: "Db Minor Sixth",
    frequency1: 277.18,
    frequency2: 440,
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-sixth.png",
  },
  // D Flat Major Sixth
  {
    interval: "Major Sixth",
    name: "Db Major Sixth",
    frequency1: 277.18,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-sixth.png",
  },
  // D Flat Minor Seventh
  {
    interval: "Minor Seventh",
    name: "Db Minor Seventh",
    frequency1: 277.18,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-d-flat/d-flat-minor-seventh.png",
  },
  // D Flat Major Seventh
  {
    interval: "Major Seventh",
    name: "Db Major Seventh",
    frequency1: 277.18,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-d-flat/d-flat-major-seventh.png",
  },
  // E Flat Octave
  {
    interval: "Octave",
    name: "Eb Octave",
    frequency1: 311.13,
    frequency2: 622.25,
    image: "assets/images/intervals/intervals-e-flat/e-flat-octave.png",
  },
  // E Flat Minor Second
  {
    interval: "Minor Second",
    name: "Eb Minor Second",
    frequency1: 311.13,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-e-flat/e-flat-minor-second.png",
  },
  // E Flat Major Second
  {
    interval: "Major Second",
    name: "Eb Major Second",
    frequency1: 311.13,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-second.png",
  },
  // E Flat Minor Third
  {
    interval: "Minor Third",
    name: "Eb Minor Third",
    frequency1: 311.13,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-e-flat/e-flat-octave.png",
  },
  // E Flat Major Third
  {
    interval: "Major Third",
    name: "Eb Major Third",
    frequency1: 311.13,
    frequency2: 392,
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-third.png",
  },
  // E Flat Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "Eb Perfect Fourth",
    frequency1: 311.13,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-e-flat/e-flat-perfect-fourth.png",
  },
  // E Flat Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "Eb Augmented Fourth",
    frequency1: 311.13,
    frequency2: 440,
    image: "assets/images/intervals/intervals-e-flat/e-flat-augmented-fourth.png",
  },
  // E Flat Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "Eb Perfect Fifth",
    frequency1: 311.13,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-e-flat/e-flat-perfect-fifth.png",
  },
  // E Flat Minor Sixth
  {
    interval: "Minor Sixth",
    name: "Eb Minor Sixth",
    frequency1: 311.13,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-e-flat/e-flat-minor-sixth.png",
  },
  // E Flat Major Sixth
  {
    interval: "Major Sixth",
    name: "Eb Major Sixth",
    frequency1: 311.13,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-sixth.png",
  },
  // E Flat Minor Seventh
  {
    interval: "Minor Seventh",
    name: "Eb Minor Seventh",
    frequency1: 311.13,
    frequency2: 554.37,
    image: "assets/images/intervals/intervals-e-flat/e-flat-minor-seventh.png",
  },
  // E Flat Major Seventh
  {
    interval: "Major Seventh",
    name: "Eb Major Seventh",
    frequency1: 311.13,
    frequency2: 587.33,
    image: "assets/images/intervals/intervals-e-flat/e-flat-major-seventh.png",
  },
  // E Octave
  {
    interval: "Octave",
    name: "E Octave",
    frequency1: 329.63,
    frequency2: 659.25,
    image: "assets/images/intervals/intervals-e/e-octave.png",
  },
  // E Minor Second
  {
    interval: "Minor Second",
    name: "E Minor Second",
    frequency1: 329.63,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-e/e-minor-second.png",
  },
  // E Major Second
  {
    interval: "Major Second",
    name: "E Major Second",
    frequency1: 329.63,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-e/e-major-second.png",
  },
  // E Minor Third
  {
    interval: "Minor Third",
    name: "E Minor Third",
    frequency1: 329.63,
    frequency2: 392,
    image: "assets/images/intervals/intervals-e/e-minor-third.png",
  },
  // E Major Third
  {
    interval: "Major Third",
    name: "E Major Third",
    frequency1: 329.63,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-e/e-major-third.png",
  },
  // E Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "E Perfect Fourth",
    frequency1: 329.63,
    frequency2: 440,
    image: "assets/images/intervals/intervals-e/e-perfect-fourth.png",
  },
  // E Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "E Augmented Fourth",
    frequency1: 329.63,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-e/e-augmented-fourth.png",
  },
  // E Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "E Perfect Fifth",
    frequency1: 329.63,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-e/e-perfect-fifth.png",
  },
  // E Minor Sixth
  {
    interval: "Minor Sixth",
    name: "E Minor Sixth",
    frequency1: 329.63,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-e/e-minor-sixth.png",
  },
  // E Major Sixth
  {
    interval: "Major Sixth",
    name: "E Major Sixth",
    frequency1: 329.63,
    frequency2: 554.37,
    image: "assets/images/intervals/intervals-e/e-major-sixth.png",
  },
  // E Minor Seventh
  {
    interval: "Minor Seventh",
    name: "E Minor Seventh",
    frequency1: 329.63,
    frequency2: 587.33,
    image: "assets/images/intervals/intervals-e/e-minor-seventh.png",
  },
  // E Major Seventh
  {
    interval: "Major Seventh",
    name: "E Major Seventh",
    frequency1: 329.63,
    frequency2: 622.25,
    image: "assets/images/intervals/intervals-e/e-major-seventh.png",
  },
  // F Octave
  {
    interval: "Octave",
    name: "F Octave",
    frequency1: 349.23,
    frequency2: 698.46,
    image: "assets/images/intervals/intervals-f/f-major-octave.png",
  },
  // F Minor Second
  {
    interval: "Minor Second",
    name: "F Minor Second",
    frequency1: 349.23,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-f/f-minor-second.png",
  },
  // F Major Second
  {
    interval: "Major Second",
    name: "F Major Second",
    frequency1: 349.23,
    frequency2: 392,
    image: "assets/images/intervals/intervals-f/f-major-second.png",
  },
  // F Minor Third
  {
    interval: "Minor Third",
    name: "F Minor Third",
    frequency1: 349.23,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-f/f-minor-third.png",
  },
  // F Major Third
  {
    interval: "Major Third",
    name: "F Major Third",
    frequency1: 349.23,
    frequency2: 440,
    image: "assets/images/intervals/intervals-f/f-major-third.png",
  },
  // F Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "F Perfect Fourth",
    frequency1: 349.23,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-f/f-perfect-fourth.png",
  },
  // F Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "F Augmented Fourth",
    frequency1: 349.23,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-f/f-augmented-fourth.png",
  },
  // F Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "F Perfect Fifth",
    frequency1: 349.23,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-f/f-perfect-fifth.png",
  },
  // F Minor Sixth
  {
    interval: "Minor Sixth",
    name: "F Minor Sixth",
    frequency1: 349.23,
    frequency2: 554.37,
    image: "assets/images/intervals/intervals-f/f-minor-sixth.png",
  },
  // F Major Sixth
  {
    interval: "Major Sixth",
    name: "F Major Sixth",
    frequency1: 349.23,
    frequency2: 587.33,
    image: "assets/images/intervals/intervals-f/f-major-sixth.png",
  },
  // F Minor Seventh
  {
    interval: "Minor Seventh",
    name: "F Minor Seventh",
    frequency1: 349.23,
    frequency2: 622.25,
    image: "assets/images/intervals/intervals-f/f-minor-seventh.png",
  },
  // F Major Seventh
  {
    interval: "Major Seventh",
    name: "F Major Seventh",
    frequency1: 349.23,
    frequency2: 659.25,
    image: "assets/images/intervals/intervals-f/f-major-seventh.png",
  },
  // F Sharp Octave
  {
    interval: "Octave",
    name: "F# Octave",
    frequency1: 369.99,
    frequency2: 739.99,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-octave.png",
  },
  // F Sharp Minor Second
  {
    interval: "Minor Second",
    name: "F# Minor Second",
    frequency1: 369.99,
    frequency2: 392,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-second.png",
  },
  // F Sharp Major Second
  {
    interval: "Major Second",
    name: "F# Major Second",
    frequency1: 369.99,
    frequency2: 415.30,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-second.png",
  },
  // F Sharp Minor Third
  {
    interval: "Minor Third",
    name: "F# Minor Third",
    frequency1: 369.99,
    frequency2: 440,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-third.png",
  },
  // F Sharp Major Third
  {
    interval: "Major Third",
    name: "F# Major Third",
    frequency1: 369.99,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-third.png",
  },
  // F Sharp Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "F# Perfect Fourth",
    frequency1: 369.99,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-perfect-fourth.png",
  },
  // F Sharp Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "F# Augmented Fourth",
    frequency1: 369.99,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-augmented-fourth.png",
  },
  // F Sharp Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "F# Perfect Fifth",
    frequency1: 369.99,
    frequency2: 554.37,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-perfect-fifth.png",
  },
  // F Sharp Minor Sixth
  {
    interval: "Minor Sixth",
    name: "F# Minor Sixth",
    frequency1: 369.99,
    frequency2: 587.33,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-sixth.png",
  },
  // F Sharp Major Sixth
  {
    interval: "Major Sixth",
    name: "F# Major Sixth",
    frequency1: 369.99,
    frequency2: 622.25,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-sixth.png",
  },
  // F Sharp Minor Seventh
  {
    interval: "Minor Seventh",
    name: "F# Minor Seventh",
    frequency1: 369.99,
    frequency2: 659.25,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-minor-seventh.png",
  },
  // F Sharp Major Seventh
  {
    interval: "Major Seventh",
    name: "F# Major Seventh",
    frequency1: 369.99,
    frequency2: 698.46,
    image: "assets/images/intervals/intervals-f-sharp/f-sharp-major-seventh.png",
  },
  // G Octave
  {
    interval: "Octave",
    name: "G Octave",
    frequency1: 196,
    frequency2: 392,
    image: "assets/images/intervals/intervals-g/g-octave.png",
  },
  // G Minor Second
  {
    interval: "Minor Second",
    name: "G Minor Second",
    frequency1: 196,
    frequency2: 207.65,
    image: "assets/images/intervals/intervals-g/g-minor-second.png",
  },
  // G Major Second
  {
    interval: "Major Second",
    name: "G Major Second",
    frequency1: 196,
    frequency2: 220,
    image: "assets/images/intervals/intervals-g/g-major-second.png",
  },
  // G Minor Third
  {
    interval: "Minor Third",
    name: "G Minor Third",
    frequency1: 196,
    frequency2: 233.08,
    image: "assets/images/intervals/intervals-g/g-minor-third.png",
  },
  // G Major Third
  {
    interval: "Major Third",
    name: "G Major Third",
    frequency1: 196,
    frequency2: 246.94,
    image: "assets/images/intervals/intervals-g/g-major-third.png",
  },
  // G Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "G Perfect Fourth",
    frequency1: 196,
    frequency2: 261.63,
    image: "assets/images/intervals/intervals-g/g-perfect-fourth.png",
  },
  // G Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "G Augmented Fourth",
    frequency1: 196,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-g/g-augmented-fourth.png",
  },
  // G Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "G Perfect Fifth",
    frequency1: 196,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-g/g-perfect-fifth.png",
  },
  // G Minor Sixth
  {
    interval: "Minor Sixth",
    name: "G Minor Sixth",
    frequency1: 196,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-g/g-minor-sixth.png",
  },
  // G Major Sixth
  {
    interval: "Major Sixth",
    name: "G Major Sixth",
    frequency1: 196,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-g/g-major-sixth.png",
  },
  // G Minor Seventh
  {
    interval: "Minor Seventh",
    name: "G Minor Seventh",
    frequency1: 196,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-g/g-minor-seventh.png",
  },
  // G Major Seventh
  {
    interval: "Major Seventh",
    name: "G Major Seventh",
    frequency1: 196,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-g/g-major-seventh.png",
  },
  // Ab Octave
  {
    interval: "Octave",
    name: "Ab Octave",
    frequency1: 207.65,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-a-flat/a-flat-octave.png",
  },
  // Ab Minor Second
  {
    interval: "Minor Second",
    name: "Ab Minor Second",
    frequency1: 207.65,
    frequency2: 220,
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-second.png",
  },
  // Ab Major Second
  {
    interval: "Major Second",
    name: "Ab Major Second",
    frequency1: 207.65,
    frequency2: 233.08,
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-second.png",
  },
  // Ab Minor Third
  {
    interval: "Minor Third",
    name: "Ab Minor Third",
    frequency1: 207.65,
    frequency2: 246.94,
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-third.png",
  },
  // Ab Major Third
  {
    interval: "Major Third",
    name: "Ab Major Third",
    frequency1: 207.65,
    frequency2: 261.63,
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-third.png",
  },
  // Ab Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "Ab Perfect Fourth",
    frequency1: 207.65,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-a-flat/a-flat-perfect-fourth.png",
  },
  // Ab Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "Ab Augmented Fourth",
    frequency1: 207.65,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-a-flat/a-flat-augmented-fourth.png",
  },
  // Ab Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "Ab Perfect Fifth",
    frequency1: 207.65,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-a-flat/a-flat-perfect-fifth.png",
  },
  // Ab Minor Sixth
  {
    interval: "Minor Sixth",
    name: "Ab Minor Sixth",
    frequency1: 207.65,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-sixth.png",
  },
  // Ab Major Sixth
  {
    interval: "Major Sixth",
    name: "Ab Major Sixth",
    frequency1: 207.65,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-sixth.png",
  },
  // Ab Minor Seventh
  {
    interval: "Minor Seventh",
    name: "Ab Minor Seventh",
    frequency1: 207.65,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-a-flat/a-flat-minor-seventh.png",
  },
  // Ab Major Seventh
  {
    interval: "Major Seventh",
    name: "Ab Major Seventh",
    frequency1: 207.65,
    frequency2: 392,
    image: "assets/images/intervals/intervals-a-flat/a-flat-major-seventh.png",
  },
  // A Octave
  {
    interval: "Octave",
    name: "A Octave",
    frequency1: 220,
    frequency2: 440,
    image: "assets/images/intervals/intervals-a/a-octave.png",
  },
  // A Minor Second
  {
    interval: "Minor Second",
    name: "A Minor Second",
    frequency1: 220,
    frequency2: 233.08,
    image: "assets/images/intervals/intervals-a/a-minor-second.png",
  },
  // A Major Second
  {
    interval: "Major Second",
    name: "A Major Second",
    frequency1: 220,
    frequency2: 246.94,
    image: "assets/images/intervals/intervals-a/a-major-second.png",
  },
  // A Minor Third
  {
    interval: "Minor Third",
    name: "A Minor Third",
    frequency1: 220,
    frequency2: 261.63,
    image: "assets/images/intervals/intervals-a/a-minor-third.png",
  },
  // A Major Third
  {
    interval: "Major Third",
    name: "A Major Third",
    frequency1: 220,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-a/a-major-third.png",
  },
  // A Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "A Perfect Fourth",
    frequency1: 220,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-a/a-perfect-fourth.png",
  },
  // A Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "A Augmented Fourth",
    frequency1: 220,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-a/a-augmented-fourth.png",
  },
  // A Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "A Perfect Fifth",
    frequency1: 220,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-a/a-perfect-fifth.png",
  },
  // A Minor Sixth
  {
    interval: "Minor Sixth",
    name: "A Minor Sixth",
    frequency1: 220,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-a/a-minor-sixth.png",
  },
  // A Major Sixth
  {
    interval: "Major Sixth",
    name: "A Major Sixth",
    frequency1: 220,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-a/a-major-sixth.png",
  },
  // A Minor Seventh
  {
    interval: "Minor Seventh",
    name: "A Minor Seventh",
    frequency1: 220,
    frequency2: 392,
    image: "assets/images/intervals/intervals-a/a-minor-seventh.png",
  },
  // A Major Seventh
  {
    interval: "Major Seventh",
    name: "A Major Seventh",
    frequency1: 220,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-a/a-major-seventh.png",
  },
  // B Flat Octave
  {
    interval: "Octave",
    name: "Bb Octave",
    frequency1: 233.08,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-b-flat/b-flat-octave.png",
  },
  // B Flat Minor Second
  {
    interval: "Minor Second",
    name: "Bb Minor Second",
    frequency1: 233.08,
    frequency2: 246.94,
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-second.png",
  },
  // B Flat Major Second
  {
    interval: "Major Second",
    name: "Bb Major Second",
    frequency1: 233.08,
    frequency2: 261.63,
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-second.png",
  },
  // B Flat Minor Third
  {
    interval: "Minor Third",
    name: "Bb Minor Third",
    frequency1: 233.08,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-third.png",
  },
  // B Flat Major Third
  {
    interval: "Major Third",
    name: "Bb Major Third",
    frequency1: 233.08,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-third.png",
  },
  // B Flat Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "Bb Perfect Fourth",
    frequency1: 233.08,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-b-flat/b-flat-perfect-fourth.png",
  },
  // B Flat Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "Bb Augmented Fourth",
    frequency1: 233.08,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-b-flat/b-flat-augmented-fourth.png",
  },
  // B Flat Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "Bb Perfect Fifth",
    frequency1: 233.08,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-b-flat/b-flat-perfect-fifth.png",
  },
  // B Flat Minor Sixth
  {
    interval: "Minor Sixth",
    name: "Bb Minor Sixth",
    frequency1: 233.08,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-sixth.png",
  },
  // B Flat Major Sixth
  {
    interval: "Major Sixth",
    name: "Bb Major Sixth",
    frequency1: 233.08,
    frequency2: 392,
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-sixth.png",
  },
  // B Flat Minor Seventh
  {
    interval: "Minor Seventh",
    name: "Bb Minor Seventh",
    frequency1: 233.08,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-b-flat/b-flat-minor-seventh.png",
  },
  // B Flat Major Seventh
  {
    interval: "Major Seventh",
    name: "Bb Major Seventh",
    frequency1: 233.08,
    frequency2: 440,
    image: "assets/images/intervals/intervals-b-flat/b-flat-major-seventh.png",
  },
  // B Octave
  {
    interval: "Octave",
    name: "B Octave",
    frequency1: 246.94,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-b/b-octave.png",
  },
  // B Minor Second
  {
    interval: "Minor Second",
    name: "B Minor Second",
    frequency1: 246.94,
    frequency2: 261.63,
    image: "assets/images/intervals/intervals-b/b-minor-second.png",
  },
  // B Major Second
  {
    interval: "Major Second",
    name: "B Major Second",
    frequency1: 246.94,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-b/b-major-second.png",
  },
  // B Minor Third
  {
    interval: "Minor Third",
    name: "B Minor Third",
    frequency1: 246.94,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-b/b-minor-third.png",
  },
  // B Major Third
  {
    interval: "Major Third",
    name: "B Major Third",
    frequency1: 246.94,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-b/b-major-third.png",
  },
  // B Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "B Perfect Fourth",
    frequency1: 246.94,
    frequency2: 329.63,
    image: "assets/images/intervals/intervals-b/b-perfect-fourth.png",
  },
  // B Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "B Augmented Fourth",
    frequency1: 246.94,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-b/b-augmented-fourth.png",
  },
  // B Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "B Perfect Fifth",
    frequency1: 246.94,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-b/b-perfect-fifth.png",
  },
  // B Minor Sixth
  {
    interval: "Minor Sixth",
    name: "B Minor Sixth",
    frequency1: 246.94,
    frequency2: 392,
    image: "assets/images/intervals/intervals-b/b-minor-sixth.png",
  },
  // B Major Sixth
  {
    interval: "Major Sixth",
    name: "B Major Sixth",
    frequency1: 246.94,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-b/b-major-sixth.png",
  },
  // B Minor Seventh
  {
    interval: "Minor Seventh",
    name: "B Minor Seventh",
    frequency1: 246.94,
    frequency2: 440,
    image: "assets/images/intervals/intervals-b/b-minor-seventh.png",
  },
  // B Major Seventh
  {
    interval: "Major Seventh",
    name: "B Major Seventh",
    frequency1: 246.94,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-b/b-major-seventh.png",
  },
];

console.log(intervalList.length)



/* Object array of chords - Major, Minor, Dominant 7th, Major 7th and Minor 7th
to be iterated over and used in Chord Identifier game */
const chordList = [
  // C Major
  {
    chord: "Major",
    name: "C Major Triad",
    frequency1: 130.81,
    frequency2: 261.63,
    frequency3: 326.63,
    frequency4: 392,
    image: "assets/images/chords/major-triads/c-major-triad.png",
  },
  // Db Major
  {
    chord: "Major",
    name: "Db Major Triad",
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    image: "assets/images/chords/major-triads/d-flat-major-triad.png",
  },
  // D Major
  {
    chord: "Major",
    name: "D Major Triad",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    image: "assets/images/chords/major-triads/d-major-triad.png",
  },
  // Eb Major
  {
    chord: "Major",
    name: "Eb Major Triad",
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    image: "assets/images/chords/major-triads/e-flat-major-triad.png",
  },
  // F Major
  {
    chord: "Major",
    name: "F Major Triad",
    frequency1: 349.23,
    frequency2: 440,
    frequency3: 523.25,
    image: "assets/images/chords/major-triads/f-major-triad.png",
  },
  {
    // G Major
    chord: "Major",
    name: "G Major Triad",
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    image: "assets/images/chords/major-triads/g-major-triad.png",
  },
  {
    // Ab Major
    chord: "Major",
    name: "Ab Major Triad",
    frequency1: 233.08,
    frequency2: 261.63,
    frequency3: 311.13,
    image: "assets/images/chords/major-triads/a-flat-major-triad.png",
  },
  // Bb Major
  {
    chord: "Major",
    name: "Bb Major Triad",
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    image: "assets/images/chords/major-triads/b-flat-major-triad.png",
  },
  // B Major
  {
    chord: "Major",
    name: "B Major Triad",
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    image: "assets/images/chords/major-triads/b-major-triad.png",
  },
  // A Major
  {
    chord: "Major",
    name: "A Major Triad",
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    image: "assets/images/chords/major-triads/a-major-triad.png",
  },
  // D Major
  {
    chord: "Major",
    name: "D Major Triad",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    image: "assets/images/chords/major-triads/d-major-triad.png",
  },
  // F Sharp Major
  {
    chord: "Major",
    name: "F# Major Triad",
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 311.13,
    image: "assets/images/chords/major-triads/f-sharp-major-triad.png",
  },
  // C Minor
  {
    chord: "Minor",
    name: "C Minor Triad",
    frequency1: 261.63,
    frequency2: 311.13,
    frequency3: 392,
    image: "assets/images/chords/minor-triads/c-minor-triad.png",
  },
  // C# Minor
  {
    chord: "Minor",
    name: "C# Minor Triad",
    frequency1: 277.18,
    frequency2: 329.63,
    frequency3: 415.3,
    image: "assets/images/chords/minor-triads/c-sharp-minor-triad.png",
  },
  // D Minor
  {
    chord: "Minor",
    name: "D Minor Triad",
    frequency1: 293.66,
    frequency2: 349.23,
    frequency3: 440,
    image: "assets/images/chords/minor-triads/d-minor-triad.png",
  },
  // Eb Minor
  {
    chord: "Minor",
    name: "Eb Minor Triad",
    frequency1: 311.13,
    frequency2: 369.99,
    frequency3: 466.16,
    image: "assets/images/chords/minor-triads/e-flat-minor-triad.png",
  },
  // E Minor
  {
    chord: "Minor",
    name: "E Minor Triad",
    frequency1: 329.63,
    frequency2: 392.0,
    frequency3: 493.88,
    image: "assets/images/chords/minor-triads/e-minor-triad.png",
  },
  // F Minor
  {
    chord: "Minor",
    name: "F Minor Triad",
    frequency1: 349.23,
    frequency2: 415.3,
    frequency3: 523.25,
    image: "assets/images/chords/minor-triads/f-minor-triad.png",
  },
  // F# Minor
  {
    chord: "Minor",
    name: "F# Minor Triad",
    frequency1: 369.99,
    frequency2: 440,
    frequency3: 554.37,
    image: "assets/images/chords/minor-triads/f-sharp-minor-triad.png",
  },
  // G Minor
  {
    chord: "Minor",
    name: "G Minor Triad",
    frequency1: 196,
    frequency2: 233.08,
    frequency3: 293.66,
    image: "assets/images/chords/minor-triads/g-minor-triad.png",
  },
  // Ab Minor
  {
    chord: "Minor",
    name: "Ab Minor Triad",
    frequency1: 207.65,
    frequency2: 246.94,
    frequency3: 311.13,
    image: "assets/images/chords/minor-triads/a-flat-minor-triad.png",
  },
  // A Minor
  {
    chord: "Minor",
    name: "A Minor Triad",
    frequency1: 220,
    frequency2: 261.63,
    frequency3: 329.63,
    image: "assets/images/chords/minor-triads/a-minor-triad.png",
  },
  // Bb Minor
  {
    chord: "Minor",
    name: "Bb Minor Triad",
    frequency1: 233.08,
    frequency2: 277.18,
    frequency3: 349.23,
    image: "assets/images/chords/minor-triads/b-flat-minor-triad.png",
  },
  // B Minor
  {
    chord: "Minor",
    name: "B Minor Triad",
    frequency1: 246.94,
    frequency2: 293.66,
    frequency3: 369.99,
    image: "assets/images/chords/minor-triads/b-minor-triad.png",
  },
  // C Dominant 7
  {
    chord: "Dominant 7",
    name: "C Dominant 7",
    frequency1: 261.63,
    frequency2: 329.63,
    frequency3: 392,
    frequency4: 466.16,
    image: "assets/images/chords/dominant-sevenths/c-dominant-7.png",
  },
  // Db Dominant 7
  {
    chord: "Dominant 7",
    name: "Db Dominant 7",
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    frequency4: 493.88,
    image: "assets/images/chords/dominant-sevenths/d-flat-dominant-7.png",
  },
  // D Dominant 7
  {
    chord: "Dominant 7",
    name: "D Dominant 7",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    frequency4: 523.25,
    image: "assets/images/chords/dominant-sevenths/d-dominant-7.png",
  },
  // Eb Dominant 7
  {
    chord: "Dominant 7",
    name: "Eb Dominant 7",
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    frequency4: 554.37,
    image: "assets/images/chords/dominant-sevenths/e-flat-dominant-7.png",
  },
  // E Dominant 7
  {
    chord: "Dominant 7",
    name: "E Dominant 7",
    frequency1: 329.63,
    frequency2: 415.3,
    frequency3: 493.88,
    frequency4: 587.33,
    image: "assets/images/chords/dominant-sevenths/e-dominant-7.png",
  },
  // F Dominant 7
  {
    chord: "Dominant 7",
    name: "F Dominant 7",
    frequency1: 174.61,
    frequency2: 220,
    frequency3: 261.63,
    frequency4: 311.13,
    image: "assets/images/chords/dominant-sevenths/f-dominant-7.png",
  },
  // F# Dominant 7
  {
    chord: "Dominant 7",
    name: "F# Dominant 7",
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 277.18,
    frequency4: 329.63,
    image: "assets/images/chords/dominant-sevenths/f-sharp-dominant-7.png",
  },
  // G Dominant 7
  {
    chord: "Dominant 7",
    name: "G Dominant 7",
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    frequency4: 349.23,
    image: "assets/images/chords/dominant-sevenths/g-dominant-7.png",
  },
  // Ab Dominant 7
  {
    chord: "Dominant 7",
    name: "Ab Dominant 7",
    frequency1: 207.65,
    frequency2: 261.63,
    frequency3: 311.13,
    frequency4: 369.99,
    image: "assets/images/chords/dominant-sevenths/a-flat-dominant-7.png",
  },
  // A Dominant 7
  {
    chord: "Dominant 7",
    name: "A Dominant 7",
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    frequency4: 392,
    image: "assets/images/chords/dominant-sevenths/a-dominant-7.png",
  },
  // Bb Dominant 7
  {
    chord: "Dominant 7",
    name: "Bb Dominant 7",
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    frequency4: 415.3,
    image: "assets/images/chords/dominant-sevenths/b-flat-dominant-7.png",
  },
  // B Dominant 7
  {
    chord: "Dominant 7",
    name: "B Dominant 7",
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    frequency4: 440,
    image: "assets/images/chords/dominant-sevenths/b-dominant-7.png",
  },
  // C Minor 7
  {
    chord: "Minor 7",
    name: "C Minor 7",
    frequency1: 261.63,
    frequency2: 311.13,
    frequency3: 392,
    frequency4: 466.16,
    image: "assets/images/chords/minor-sevenths/c-minor-7.png",
  },
  // C# Minor 7
  {
    chord: "Minor 7",
    name: "C# Minor 7",
    frequency1: 277.18,
    frequency2: 329.63,
    frequency3: 415.3,
    frequency4: 493.88,
    image: "assets/images/chords/minor-sevenths/c-sharp-minor-7.png",
  },
  // D Minor 7
  {
    chord: "Minor 7",
    name: "D Minor 7",
    frequency1: 293.66,
    frequency2: 349.23,
    frequency3: 440,
    frequency4: 523.25,
    image: "assets/images/chords/minor-sevenths/d-minor-7.png",
  },
  // Eb Minor 7
  {
    chord: "Minor 7",
    name: "Eb Minor 7",
    frequency1: 311.13,
    frequency2: 369.99,
    frequency3: 466.16,
    frequency4: 554.37,
    image: "assets/images/chords/minor-sevenths/e-flat-minor-7.png",
  },
  // E Minor 7
  {
    chord: "Minor 7",
    name: "E Minor 7",
    frequency1: 329.63,
    frequency2: 392.0,
    frequency3: 493.88,
    frequency4: 587.33,
    image: "assets/images/chords/minor-sevenths/e-minor-7.png",
  },
  // F Minor 7
  {
    chord: "Minor 7",
    name: "F Minor 7",
    frequency1: 174.61,
    frequency2: 207.65,
    frequency3: 261.63,
    frequency4: 311.13,
    image: "assets/images/chords/minor-sevenths/f-minor-7.png",
  },
  // F# Minor 7
  {
    chord: "Minor 7",
    name: "F# Minor 7",
    frequency1: 185,
    frequency2: 220,
    frequency3: 277.18,
    frequency4: 329.63,
    image: "assets/images/chords/minor-sevenths/f-sharp-minor-7.png",
  },
  // G Minor 7
  {
    chord: "Minor 7",
    name: "G Minor 7",
    frequency1: 196.0,
    frequency2: 233.08,
    frequency3: 293.66,
    frequency4: 349.23,
    image: "assets/images/chords/minor-sevenths/g-minor-7.png",
  },
  // Ab Minor 7
  {
    chord: "Minor 7",
    name: "Ab Minor 7",
    frequency1: 207.65,
    frequency2: 246.94,
    frequency3: 311.13,
    frequency4: 369.99,
    image: "assets/images/chords/minor-sevenths/a-flat-minor-7.png",
  },
  // A Minor 7
  {
    chord: "Minor 7",
    name: "A Minor 7",
    frequency1: 220,
    frequency2: 261.63,
    frequency3: 329.63,
    frequency4: 392,
    image: "assets/images/chords/minor-sevenths/a-minor-7.png",
  },
  // Bb Minor 7
  {
    chord: "Minor 7",
    name: "Bb Minor 7",
    frequency1: 233.08,
    frequency2: 277.18,
    frequency3: 349.23,
    frequency4: 415.3,
    image: "assets/images/chords/minor-sevenths/b-flat-minor-7.png",
  },
  // B Minor 7
  {
    chord: "Minor 7",
    name: "B Minor 7",
    frequency1: 246.94,
    frequency2: 293.66,
    frequency3: 369.99,
    frequency4: 440,
    image: "assets/images/chords/minor-sevenths/b-minor-7.png",
  },
  // C Major 7
  {
    chord: "Major 7",
    name: "C Major 7",
    frequency1: 261.63,
    frequency2: 329.63,
    frequency3: 392,
    frequency4: 493.88,
    image: "assets/images/chords/major-sevenths/c-major-7.png",
  },
  // Db Major 7
  {
    chord: "Major 7",
    name: "Db Major 7",
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    frequency4: 523.25,
    image: "assets/images/chords/major-sevenths/d-flat-major-7.png",
  },
  // D Major 7
  {
    chord: "Major 7",
    name: "D Major 7",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    frequency4: 554.37,
    image: "assets/images/chords/major-sevenths/d-major-7.png",
  },
  // Eb Major 7
  {
    chord: "Major 7",
    name: "Eb Major 7",
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    frequency4: 587.33,
    image: "assets/images/chords/major-sevenths/e-flat-major-7.png",
  },
  // E Major 7
  {
    chord: "Major 7",
    name: "E Major 7",
    frequency1: 329.63,
    frequency2: 415.3,
    frequency3: 493.88,
    frequency4: 622.25,
    image: "assets/images/chords/major-sevenths/e-major-7.png",
  },
  // F Major 7
  {
    chord: "Major 7",
    name: "F Major 7",
    frequency1: 174.61,
    frequency2: 220,
    frequency3: 261.63,
    frequency4: 329.63,
    image: "assets/images/chords/major-sevenths/f-major-7.png",
  },
  // F# Major 7
  {
    chord: "Major 7",
    name: "F# Major 7",
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 277.18,
    frequency4: 329.23,
    image: "assets/images/chords/major-sevenths/f-sharp-major-7.png",
  },
  // G Major 7
  {
    chord: "Major 7",
    name: "G Major 7",
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    frequency4: 369.99,
    image: "assets/images/chords/major-sevenths/g-major-7.png",
  },
  // Ab Major 7
  {
    chord: "Major 7",
    name: "Ab Major 7",
    frequency1: 207.65,
    frequency2: 261.63,
    frequency3: 311.13,
    frequency4: 392,
    image: "assets/images/chords/major-sevenths/a-flat-major-7.png",
  },
  // A Major 7
  {
    chord: "Major 7",
    name: "A Major 7",
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    frequency4: 415.3,
    image: "assets/images/chords/major-sevenths/a-major-7.png",
  },
  // Bb major 7
  {
    chord: "Major 7",
    name: "Bb Major 7",
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    frequency4: 440,
    image: "assets/images/chords/major-sevenths/b-flat-major-7.png",
  },
  // B Major 7
  {
    chord: "Major 7",
    name: "B Major 7",
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    frequency4: 466.16,
    image: "assets/images/chords/major-sevenths/b-major-7.png",
  },
];

