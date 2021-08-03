/** JavaScript code to create the tones that will be used to play the intervals and chords.
 *  Using the Web Audio API library to build the synthesizer that will play the tones.
 */

// Assign constant variable to an object array containing a single octave containing 13 notes, with their relative frequencies.

// URL to source of Impulse Response, to be used to create convolution reverb.
const impulseURL = "../assets/impulse-response/impulse-response-2.wav";

// Web Audio API Synthesizer
function createTones(interval1, interval2) {
  let audioContext = window.AudioContext || window.webkitAudioContext;

  audioContext = new AudioContext();

  const masterGainControl = audioContext.createGain(); // primaryGainControl provides control of audio volume
  masterGainControl.gain.setValueAtTime(0.3, 0); // The first parameter sets the value of the gain.

  // masterGainControl is connected to the final end point of audioContext. All subsequent audio nodes created will then be connected to the masterGainControl.
  masterGainControl.connect(audioContext.destination);

  const noteOscillatorOne = audioContext.createOscillator(); // Create Oscillator for sine wave
  noteOscillatorOne.type = "sine";
  noteOscillatorOne.frequency.setValueAtTime(
    // Get value of 'frequency' key of 'tones' array and assign it to oscillator frequency
    interval1,
    audioContext.currentTime
  );

  const noteOscillatorOneSquare = audioContext.createOscillator(); // Create Oscillator for sine wave
  noteOscillatorOneSquare.type = "square";
  noteOscillatorOneSquare.frequency.setValueAtTime(
    // Get value of 'frequency' key of 'tones' array and assign it to oscillator frequency
    interval1,
    audioContext.currentTime
  );
  

  const noteOscillatorTwo = audioContext.createOscillator(); // Create Oscillator for square wave
  noteOscillatorTwo.type = "sine";
  noteOscillatorTwo.frequency.setValueAtTime(
    interval2,
    audioContext.currentTime
  );

  const noteOscillatorTwoSquare = audioContext.createOscillator(); // Create Oscillator for square wave
  noteOscillatorTwoSquare.type = "square";
  noteOscillatorTwoSquare.frequency.setValueAtTime(
    interval2,
    audioContext.currentTime
  );

  const squareFilter = audioContext.createBiquadFilter(); // Create Low Pass Filter (for second oscillator)
  squareFilter.type = "lowpass";
  squareFilter.frequency.value = 200;

  // ADSR (Attack, Decay, Sustain, Release) Envelope to shape gain curve of the sound
  const attackTime = 0.01;
  const decayTime = 0.8;
  const sustainLevel = 0.1;
  const releaseTime = 1;

  // Specify when first note and second note are played
  const now = audioContext.currentTime;
  const next = audioContext.currentTime + 1;

  const compressor = audioContext.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-50, now)
  compressor.knee.setValueAtTime(40, now)
  compressor.ratio.setValueAtTime(12, now)
  compressor.attack.setValueAtTime(0, now)
  compressor.release.setValueAtTime(0.25, now)

  // envelopeOne assigned to noteOscillatorOne
  const envelopeOne = audioContext.createGain(); // Creates gain node to use to build envelope curve
  envelopeOne.gain.setValueAtTime(0, 0);

  // First parameter is the value that the gain will change to. Second parameter represents the time taken to reach the value from last instance of AudioContext ('now').
  envelopeOne.gain.linearRampToValueAtTime(1, now + attackTime);
  envelopeOne.gain.linearRampToValueAtTime(
    sustainLevel,
    now + attackTime + decayTime
  );
  envelopeOne.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
  envelopeOne.gain.linearRampToValueAtTime(0, now + 1.5);

  const envelopeOneSquare = audioContext.createGain();
  envelopeOneSquare.gain.setValueAtTime(0, 0);
  envelopeOneSquare.gain.linearRampToValueAtTime(1, now + attackTime);
  envelopeOneSquare.gain.linearRampToValueAtTime(
    sustainLevel,
    now + attackTime + decayTime
  );
  envelopeOneSquare.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
  envelopeOneSquare.gain.linearRampToValueAtTime(0, now + 1.5);

  // envelopeTwo assigned to noteOscillatorTwo
  const envelopeTwo = audioContext.createGain();
    envelopeTwo.gain.setValueAtTime(0,0)
   envelopeTwo.gain.linearRampToValueAtTime(0.5, next + attackTime);
   envelopeTwo.gain.linearRampToValueAtTime(
     sustainLevel,
     next + attackTime + decayTime
   );
   envelopeTwo.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
   envelopeTwo.gain.linearRampToValueAtTime(0, next + 1.5);

  const envelopeTwoSquare = audioContext.createGain();
    envelopeTwoSquare.gain.setValueAtTime(0,0)
   envelopeTwoSquare.gain.linearRampToValueAtTime(0.5, next + attackTime);
   envelopeTwoSquare.gain.linearRampToValueAtTime(
     sustainLevel,
     next + attackTime + decayTime
   );
   envelopeTwoSquare.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
   envelopeTwoSquare.gain.linearRampToValueAtTime(0, next + 1.5);
  

  // Hooks up the oscillators to audio processors, then to masterGainControl
  noteOscillatorOne.connect(compressor);
  compressor.connect(envelopeOne)
  envelopeOne.connect(masterGainControl);
  noteOscillatorOne.start(now);
  noteOscillatorOne.stop(now + 1.5);

  noteOscillatorOneSquare.connect(envelopeOneSquare);
  envelopeOneSquare.connect(squareFilter);
  squareFilter.connect(masterGainControl);
  noteOscillatorOneSquare.start(now);
  noteOscillatorOneSquare.stop(now + 1.5);

  noteOscillatorTwo.connect(envelopeTwo);
  envelopeTwo.connect(masterGainControl);
  noteOscillatorTwo.start(next);
  noteOscillatorTwo.stop(next + 1.5);

  noteOscillatorTwoSquare.connect(envelopeTwoSquare);
  envelopeTwoSquare.connect(squareFilter);
  squareFilter.connect(masterGainControl)
  noteOscillatorTwoSquare.start(next);
  noteOscillatorTwoSquare.stop(next + 1.5);

  return audioContext;
}
