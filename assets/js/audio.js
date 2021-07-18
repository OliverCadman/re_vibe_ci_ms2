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

const masterGainControl = audioContext.createGain(); // primaryGainControl provides control of audio volume
masterGainControl.gain.setValueAtTime(0.2, 0); // The first parameter sets the value of the gain.

// masterGainControl is connected to the final end point of audioContext. All subsequent audio nodes created will then be connected to the masterGainControl.
masterGainControl.connect(audioContext.destination);

const gameContainer = document.getElementById("game-container"); // Variable created to contain buttons, to test the functionality of the forEach loop

/* forEach method will loop over all elements in the 'tones' object array 
and create an oscillator for each note. The 'frequency' key is passed in
as a parameter and assigned to the frequency property of the oscillator variable */
tones.forEach(({ note, frequency }) => {
    const noteButton = document.createElement("button");
    noteButton.innerText = note;

  // Event listeners are for testing purposes only
    noteButton.addEventListener("click", () => {
    const noteOscillatorOne = audioContext.createOscillator(); // Create Oscillator for sine wave
    noteOscillatorOne.type = "sine";
    noteOscillatorOne.frequency.setValueAtTime(
        frequency,
        audioContext.currentTime
    );

    const noteOscillatorTwo = audioContext.createOscillator(); // Create Oscillator for square wave
    noteOscillatorTwo.type = "square";
    noteOscillatorTwo.frequency.setValueAtTime(
        frequency,
        audioContext.currentTime
    );

    const sawFilter = audioContext.createBiquadFilter(); // Create Low Pass Filter (for second oscillator)
    sawFilter.type = "lowpass";
    sawFilter.frequency.value = 300;


    // ADSR (Attack, Decay, Sustain, Release) Envelope to shape gain curve of the sound
    const attackTime = 0.1;
    const decayTime = 0.5;
    const sustainLevel = 0.6;
    const releaseTime = 0.8;
    const now = audioContext.currentTime;

    const envelope = audioContext.createGain(); // Creates gain node to use to build envelope curve
    envelope.gain.setValueAtTime(0, 0);
    
    // First parameter is the value that the gain will change to. Second parameter represents the time taken to reach the value from last instance of AudioContext ('now').
    envelope.gain.linearRampToValueAtTime(1, now + attackTime);
    envelope.gain.linearRampToValueAtTime(
        sustainLevel,
        now + attackTime + decayTime
    );
    envelope.gain.setValueAtTime(sustainLevel, 1 - releaseTime);
    envelope.gain.linearRampToValueAtTime(0, now + 1);

     
    // Hooks up the oscillators to audio processors, then to masterGainControl
     noteOscillatorOne.connect(envelope) 
     envelope.connect(masterGainControl);
     noteOscillatorOne.start();
     noteOscillatorOne.stop(audioContext.currentTime + 1);

     noteOscillatorTwo.connect(sawFilter)
     sawFilter.connect(envelope);
     envelope.connect(masterGainControl);
     noteOscillatorTwo.start();
     noteOscillatorTwo.stop(audioContext.currentTime + 1);
     
    
  });
  

  gameContainer.appendChild(noteButton);
});
