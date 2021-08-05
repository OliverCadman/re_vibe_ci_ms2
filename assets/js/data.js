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
  {
    interval: "Octave",
    frequency1: 261.63,
    frequency2: 523.25
  },
  {
    interval: "Octave",
    frequency1: 293.66,
    frequency2: 587.33
  },
  {
    interval: "Minor Second",
    frequency1: 261.63,
    frequency2: 277.18
  },
  {
    interval: "Minor Second",
    frequency1: 293.66,
    frequency2: 311.13
  },
  {
    interval: "Major Second",
    frequency1: 261.63,
    frequency2: 293.66
  },
  {
    interval: "Major Second",
    frequency1: 293.66,
    frequency2: 326.63
  },
  {
    interval: "Minor Third",
    frequency1: 261.63,
    frequency2: 311.13
  },
  {
    interval: "Minor Third",
    frequency1: 293.66,
    frequency2: 349.23
  },
  {
    interval: "Major Third",
    frequency1: 261.63,
    frequency2: 326.63
  },
  {
    interval: "Major Third",
    frequency1: 293.66,
    frequency2: 369.99
  },
  {
    interval: "Perfect Fourth",
    frequency1: 261.63,
    frequency2: 349.23
  },
  {
    interval: "Perfect Fourth",
    frequency1: 293.66,
    frequency2: 392
  },
  {
    interval: "Augmented Fourth",
    frequency1: 261.63,
    frequency2: 369.99
  },
  {
    interval: "Augmented Fourth",
    frequency1: 293.66,
    frequency2: 415.3
  },
  {
    interval: "Perfect Fifth",
    frequency1: 261.63,
    frequency2: 392
  },
  {
    interval: "Perfect Fifth",
    frequency1: 293.66,
    frequency2: 440
  },
  {
    interval: "Minor Sixth",
    frequency1: 261.63,
    frequency2: 415.3
  },
  {
    interval: "Minor Sixth",
    frequency1: 293.66,
    frequency2: 466.16
  },
  {
    interval: "Major Sixth",
    frequency1: 261.63,
    frequency2: 440
  },
  {
    interval: "Major Sixth",
    frequency1: 293.66,
    frequency2: 493.88
  },
  {
    interval: "Minor Seventh",
    frequency1: 261.63,
    frequency2: 466.16
  },
  {
    interval: "Minor Seventh",
    frequency1: 293.66,
    frequency2: 523.25
  },
  {
    interval: "Major Seventh",
    frequency1: 261.63,
    frequency2: 493.88
  },
  {
    interval: "Major Seventh",
    frequency1: 293.66,
    frequency2: 554.37
  }
];

/* Object array of chords - Major, Minor, Dominant 7th, Major 7th and Minor 7th
to be iterated over and used in Chord Identifier game */
const chordList = [
  // C Major
  {
    chord: "Major",
    frequency1: 130.81,
    frequency2: 261.63,
    frequency3: 326.63,
    frequency4: 392,
  },
  // Db Major
  {
    chord: "Major",
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
  },
  // D Major
  {
    chord: "Major",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
  },
  // Eb Major
  {
    chord: "Major",
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
  },
  // F Major
  {
    chord: "Major",
    frequency1: 349.23,
    frequency2: 440,
    frequency3: 523.25,
  },
  {
    // G Major
    chord: "Major",
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
  },
  {
    // Ab Major
    chord: "Major",
    frequency1: 233.08,
    frequency2: 261.63,
    frequency3: 311.13,
  },
  // Bb Major
  {
    chord: "Major",
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
  },
  // B Major
  {
    chord: "Major",
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
  },
  // A Major
  {
    chord: "Major",
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
  },
  // D Major
  {
    chord: "Major",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
  },
  // F Sharp Major
  {
    chord: "Major",
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 311.13,
  },
  // C Minor
  {
    chord: "Minor",
    frequency1: 261.63,
    frequency2: 311.13,
    frequency3: 392,
  },
  // C# Minor
  {
    chord: "Minor",
    frequency1: 277.18,
    frequency2: 329.63,
    frequency3: 415.3,
  },
  // D Minor
  {
    chord: "Minor",
    frequency1: 293.66,
    frequency2: 349.23,
    frequency3: 440,
  },
  // Eb Minor
  {
    chord: "Minor",
    frequency1: 311.13,
    frequency2: 369.99,
    frequency3: 415.3,
  },
  // E Minor
  {
    chord: "Minor",
    frequency1: 329.63,
    frequency2: 392.0,
    frequency3: 493.88,
  },
  // F Minor
  {
    chord: "Minor",
    frequency1: 349.23,
    frequency2: 415.3,
    frequency3: 523.25,
  },
  // F# Minor
  {
    chord: "Minor",
    frequency1: 369.99,
    frequency2: 440,
    frequency3: 554.37,
  },
  // G Minor
  {
    chord: "Minor",
    frequency1: 196,
    frequency2: 233.08,
    frequency3: 293.66,
  },
  // Ab Minor
  {
    chord: "Minor",
    frequency1: 207.65,
    frequency2: 246.94,
    frequency3: 311.13,
  },
  // A Minor
  {
    chord: "Minor",
    frequency1: 220,
    frequency2: 261.63,
    frequency3: 329.63,
  },
  // Bb Minor
  {
    chord: "Minor",
    frequency1: 233.08,
    frequency2: 277.18,
    frequency3: 349.23,
  },
  // B Minor
  {
    chord: "Minor",
    frequency1: 246.94,
    frequency2: 293.66,
    frequency3: 369.99,
  },
  // C Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 261.63,
    frequency2: 329.63,
    frequency3: 392,
    frequency4: 466.16,
  },
  // Db Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    frequency4: 493.88,
  },
  // D Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    frequency4: 523.25,
  },
  // Eb Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    frequency4: 554.37,
  },
  // E Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 329.63,
    frequency2: 415.3,
    frequency3: 493.88,
    frequency4: 587.33,
  },
  // F Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 174.61,
    frequency2: 220,
    frequency3: 261.63,
    frequency4: 311.13,
  },
  // F# Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 277.18,
    frequency4: 329.63,
  },
  // G Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    frequency4: 349.23,
  },
  // Ab Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 207.65,
    frequency2: 261.63,
    frequency3: 311.13,
    frequency4: 369.99,
  },
  // A Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    frequency4: 392,
  },
  // Bb Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    frequency4: 415.3,
  },
  // B Dominant 7
  {
    chord: "Dominant 7",
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    frequency4: 440,
  },
  // C Minor 7
  {
    chord: "Minor 7",
    frequency1: 261.63,
    frequency2: 311.13,
    frequency3: 392,
    frequency4: 466.16,
  },
  // C# Minor 7
  {
    chord: "Minor 7",
    frequency1: 277.18,
    frequency2: 329.63,
    frequency3: 415.3,
    frequency4: 493.88,
  },
  // D Minor 7
  {
    chord: "Minor 7",
    frequency1: 293.66,
    frequency2: 349.23,
    frequency3: 440,
    frequency4: 523.25,
  },
  // Eb Minor 7
  {
    chord: "Minor 7",
    frequency1: 311.13,
    frequency2: 369.99,
    frequency3: 466.16,
    frequency4: 554.37,
  },
  // E Minor 7
  {
    chord: "Minor 7",
    frequency1: 329.63,
    frequency2: 392.0,
    frequency3: 493.88,
    frequency4: 587.33,
  },
  // F Minor 7
  {
    chord: "Minor 7",
    frequency1: 174.61,
    frequency2: 207.65,
    frequency3: 261.63,
    frequency4: 311.13,
  },
  // F# Minor 7
  {
    chord: "Minor 7",
    frequency1: 185,
    frequency2: 220,
    frequency3: 277.18,
    frequency4: 329.63,
  },
  // G Minor 7
  {
    chord: "Minor 7",
    frequency1: 196.0,
    frequency2: 233.08,
    frequency3: 293.66,
    frequency4: 349.23,
  },
  // Ab Minor 7
  {
    chord: "Minor 7",
    frequency1: 207.65,
    frequency2: 246.94,
    frequency3: 311.13,
    frequency4: 369.99,
  },
  // A Minor 7
  {
    chord: "Minor 7",
    frequency1: 220,
    frequency2: 261.63,
    frequency3: 329.63,
    frequency4: 392,
  },
  // Bb Minor 7
  {
    chord: "Minor 7",
    frequency1: 233.08,
    frequency2: 277.18,
    frequency3: 349.23,
    frequency4: 415.3,
  },
  // B Minor 7
  {
    chord: "Minor 7",
    frequency1: 246.94,
    frequency2: 293.66,
    frequency3: 369.99,
    frequency4: 440,
  },
  // C Major 7
  {
    chord: "Major 7",
    frequency1: 261.63,
    frequency2: 329.63,
    frequency3: 392,
    frequency4: 493.88,
  },
  // Db Major 7
  {
    chord: "Major 7",
    frequency1: 277.18,
    frequency2: 349.23,
    frequency3: 415.3,
    frequency4: 523.25,
  },
  // D Major 7
  {
    chord: "Major 7",
    frequency1: 293.66,
    frequency2: 369.99,
    frequency3: 440,
    frequency4: 554.37,
  },
  // Eb Major 7
  {
    chord: "Major 7",
    frequency1: 311.13,
    frequency2: 392,
    frequency3: 466.16,
    frequency4: 587.33,
  },
  // E Major 7
  {
    chord: "Major 7",
    frequency1: 329.63,
    frequency2: 415.3,
    frequency3: 493.88,
    frequency4: 622.25,
  },
  // F Major 7
  {
    chord: "Major 7",
    frequency1: 174.61,
    frequency2: 220,
    frequency3: 261.63,
    frequency4: 329.63,
  },
  // F# Major 7
  {
    chord: "Major 7",
    frequency1: 185,
    frequency2: 233.08,
    frequency3: 277.18,
    frequency4: 329.23,
  },
  // G Major 7
  {
    chord: "Major 7",
    frequency1: 196,
    frequency2: 246.94,
    frequency3: 293.66,
    frequency4: 369.99,
  },
  // Ab Major 7
  {
    chord: "Major 7",
    frequency1: 207.65,
    frequency2: 261.63,
    frequency3: 311.13,
    frequency4: 392,
  },
  // A Major 7
  {
    chord: "Major 7",
    frequency1: 220,
    frequency2: 277.18,
    frequency3: 329.63,
    frequency4: 415.3,
  },
  // Bb major 7
  {
    chord: "Major 7",
    frequency1: 233.08,
    frequency2: 293.66,
    frequency3: 349.23,
    frequency4: 440,
  },
  // B Major 7
  {
    chord: "Major 7",
    frequency1: 246.94,
    frequency2: 311.13,
    frequency3: 369.99,
    frequency4: 466.16,
  },
];
