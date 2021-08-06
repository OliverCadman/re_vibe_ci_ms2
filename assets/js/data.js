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
  // D Octave
  {
    interval: "Octave",
    name: "D Octave",
    frequency1: 293.66,
    frequency2: 587.33,
    image: "assets/images/intervals/intervals-d/d-octave.png",
  },
  // C Minor Second
  {
    interval: "Minor Second",
    name: "C Minor Second",
    frequency1: 261.63,
    frequency2: 277.18,
    image: "assets/images/intervals/intervals-c/c-minor-second.png",
  },
  // D Minor Second
  {
    interval: "Minor Second",
    name: "D Minor Second",
    frequency1: 293.66,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-d/d-minor-second.png",
  },
  // C Major Second
  {
    interval: "Major Second",
    name: "C Major Second",
    frequency1: 261.63,
    frequency2: 293.66,
    image: "assets/images/intervals/intervals-c/c-major-second.png",
  },
  // D Major Second
  {
    interval: "Major Second",
    name: "D Major Second",
    frequency1: 293.66,
    frequency2: 326.63,
    image: "assets/images/intervals/intervals-d/d-major-second.png",
  },
  // C Minor Third
  {
    interval: "Minor Third",
    name: "C Minor Third",
    frequency1: 261.63,
    frequency2: 311.13,
    image: "assets/images/intervals/intervals-c/c-minor-third.png",
  },
  // D Minor Third
  {
    interval: "Minor Third",
    name: "D Minor Third",
    frequency1: 293.66,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-d/d-minor-third.png",
  },
  // C Major Third
  {
    interval: "Major Third",
    name: "C Major Third",
    frequency1: 261.63,
    frequency2: 326.63,
    image: "assets/images/intervals/intervals-c/c-major-third.png",
  },
  // D Major Third
  {
    interval: "Major Third",
    name: "D Major Third",
    frequency1: 293.66,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-d/d-major-third.png",
  },
  // C Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "C Perfect Fourth",
    frequency1: 261.63,
    frequency2: 349.23,
    image: "assets/images/intervals/intervals-c/c-perfect-fourth.png",
  },
  // D Perfect Fourth
  {
    interval: "Perfect Fourth",
    name: "D Perfect Fourth",
    frequency1: 293.66,
    frequency2: 392,
    image: "assets/images/intervals/intervals-d/d-perfect-fourth.png",
  },
  // C Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "C Augmented Fourth",
    frequency1: 261.63,
    frequency2: 369.99,
    image: "assets/images/intervals/intervals-c/c-augmented-fourth.png",
  },
  // D Augmented Fourth
  {
    interval: "Augmented Fourth",
    name: "D Augmented Fourth",
    frequency1: 293.66,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-d/d-augmented-fourth.png",
  },
  // C Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "C Perfect Fifth",
    frequency1: 261.63,
    frequency2: 392,
    image: "assets/images/intervals/intervals-c/c-perfect-fifth.png",
  },
  // D Perfect Fifth
  {
    interval: "Perfect Fifth",
    name: "D Perfect Fifth",
    frequency1: 293.66,
    frequency2: 440,
    image: "assets/images/intervals/intervals-d/d-perfect-fifth.png",
  },
  // C Minor Sixth
  {
    interval: "Minor Sixth",
    name: "C Minor Sixth",
    frequency1: 261.63,
    frequency2: 415.3,
    image: "assets/images/intervals/intervals-c/c-minor-sixth.png",
  },
  // D Minor Sixth
  {
    interval: "Minor Sixth",
    name: "D Minor Sixth",
    frequency1: 293.66,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-d/d-minor-sixth.png",
  },
  // C Major Sixth
  {
    interval: "Major Sixth",
    name: "C Major Sixth",
    frequency1: 261.63,
    frequency2: 440,
    image: "assets/images/intervals/intervals-c/c-major-sixth.png",
  },
  // D Major Sixth
  {
    interval: "Major Sixth",
    name: "D Major Sixth",
    frequency1: 293.66,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-d/d-major-sixth.png",
  },
  // C Minor Seventh
  {
    interval: "Minor Seventh",
    name: "C Minor Seventh",
    frequency1: 261.63,
    frequency2: 466.16,
    image: "assets/images/intervals/intervals-c/c-minor-seventh.png",
  },
  // D Minor Seventh
  {
    interval: "Minor Seventh",
    name: "D Minor Seventh",
    frequency1: 293.66,
    frequency2: 523.25,
    image: "assets/images/intervals/intervals-d/d-minor-seventh.png",
  },
  // C Major Seventh
  {
    interval: "Major Seventh",
    name: "C Major Seventh",
    frequency1: 261.63,
    frequency2: 493.88,
    image: "assets/images/intervals/intervals-c/c-major-seventh.png",
  },
  // D Major Seventh
  {
    interval: "Major Seventh",
    name: "D Major Seventh",
    frequency1: 293.66,
    frequency2: 554.37,
    image: "assets/images/intervals/intervals-d/d-major-seventh.png",
  },
];

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

