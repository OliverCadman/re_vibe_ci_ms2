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

// URL to source of Impulse Response, to be used to create convolution reverb.
const impulseURL = "../assets/impulse-response/impulse-response-2.wav";

// Web Audio API Synthesizer
function createTones(interval1, interval2) {
  let audioContext = window.AudioContext || window.webkitAudioContext;

  audioContext = new AudioContext();

  const masterGainControl = audioContext.createGain(); // primaryGainControl provides control of audio volume
  masterGainControl.gain.setValueAtTime(0.5, 0); // The first parameter sets the value of the gain.

  // masterGainControl is connected to the final end point of audioContext. All subsequent audio nodes created will then be connected to the masterGainControl.
  masterGainControl.connect(audioContext.destination);

  const noteOscillatorOne = audioContext.createOscillator(); // Create Oscillator for sine wave
  console.log(noteOscillatorOne);
  noteOscillatorOne.type = "sine";
  noteOscillatorOne.frequency.setValueAtTime(
    // Get value of 'frequency' key of 'tones' array and assign it to oscillator frequency
    interval1,
    audioContext.currentTime
  );
  const sineGain = audioContext.createGain();
  sineGain.gain.value = 1;

  const noteOscillatorTwo = audioContext.createOscillator(); // Create Oscillator for square wave
  noteOscillatorTwo.type = "sine";
  noteOscillatorTwo.frequency.setValueAtTime(
    interval2,
    audioContext.currentTime
  );

  const sawFilter = audioContext.createBiquadFilter(); // Create Low Pass Filter (for second oscillator)
  sawFilter.type = "lowpass";
  sawFilter.frequency.value = 50;

  // ADSR (Attack, Decay, Sustain, Release) Envelope to shape gain curve of the sound
  const attackTime = 0.03;
  const decayTime = 0.3;
  const sustainLevel = 0.1;
  const releaseTime = 1;
  const now = audioContext.currentTime;

  const envelope = audioContext.createGain(); // Creates gain node to use to build envelope curve
  envelope.gain.setValueAtTime(0, 0);

  // First parameter is the value that the gain will change to. Second parameter represents the time taken to reach the value from last instance of AudioContext ('now').
  envelope.gain.linearRampToValueAtTime(0.5, now + attackTime);
  envelope.gain.linearRampToValueAtTime(
    sustainLevel,
    now + attackTime + decayTime
  );
  envelope.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
  envelope.gain.linearRampToValueAtTime(0, now + 2);

  // Hooks up the oscillators to audio processors, then to masterGainControl
  noteOscillatorOne.connect(envelope);
  envelope.connect(sineGain);
  sineGain.connect(masterGainControl);
  noteOscillatorOne.start(now);
  noteOscillatorOne.stop(now + 2);

  noteOscillatorTwo.connect(envelope);
  envelope.connect(masterGainControl);
  noteOscillatorTwo.start(now + 1);
  noteOscillatorTwo.stop(now + 2);

  return audioContext;
}
