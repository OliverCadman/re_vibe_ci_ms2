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

  // envelopeOne assigned to noteOscillatorOne
  const envelopeOne = audioContext.createGain(); // Creates gain node to use to build envelope curve
  envelopeOne.gain.setValueAtTime(0, 0);

  // First parameter is the value that the gain will change to. Second parameter represents the time taken to reach the value from last instance of AudioContext ('now').
  envelopeOne.gain.linearRampToValueAtTime(0.5, now + attackTime);
  envelopeOne.gain.linearRampToValueAtTime(
    sustainLevel,
    now + attackTime + decayTime
  );
  envelopeOne.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
  envelopeOne.gain.linearRampToValueAtTime(0, now + 1.4);

  // envelopeTwo assigned to noteOscillatorTwo
  const envelopeTwo = audioContext.createGain();
  
   envelopeTwo.gain.linearRampToValueAtTime(0.5, now + attackTime);
   envelopeTwo.gain.linearRampToValueAtTime(
     sustainLevel,
     now + attackTime + decayTime
   );
   envelopeTwo.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
   envelopeTwo.gain.linearRampToValueAtTime(0, now + 2);
  

  // Hooks up the oscillators to audio processors, then to masterGainControl
  noteOscillatorOne.connect(envelopeOne);
  envelopeOne.connect(masterGainControl);
  noteOscillatorOne.start(now);
  noteOscillatorOne.stop(now + 1.4);

  noteOscillatorTwo.connect(envelopeTwo);
  envelopeTwo.connect(masterGainControl);
  noteOscillatorTwo.start(now + 1);
  noteOscillatorTwo.stop(now + 2);

  return audioContext;
}
