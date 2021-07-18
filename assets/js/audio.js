/** JavaScript code to create the tones that will be used to play the intervals and chords.
 *  Using the Web Audio API library to build the synthesizer that will play the tones.
 */

// Assign constant variable to an object array containing a single octave containing 13 notes, with their relative frequencies.

const tones = [
  { note: "C4", frequency: 261.63 },
  { note: "C#4", frequency: 277.18 },
  { note: "D4", frequency: 293.66 },
  { note: "D#4", frequency: 311.13 },
  { note: "E4", frequency: 329.63 },
  { note: "F4", frequency: 349.23 },
  { note: "F#4", frequency: 369.99 },
  { note: "G4", frequency: 392 },
  { note: "G#4", frequency: 415.3 },
  { note: "A4", frequency: 440 },
  { note: "A#4", frequency: 466.16 },
  { note: "B4", frequency: 493.88 },
  { note: "C5", frequency: 523.25 },
];

// Web Audio API Synthesizer

let audioContext = new AudioContext(); 

// buffer variable creates one 'mono' channel

const buffer = audioContext.createBuffer( 
  1,
  audioContext.sampleRate * 1, // creates one second of audio data 
  audioContext.sampleRate
);

