/*jshint esversion: 8 */

// Function uses ToneJS library to create sounds for Interval Trainer mode
function createInterval(frequency1, frequency2) {
  const synth = new Tone.Synth();

  synth.oscillator.type = "sine4";
  synth.triggerAttackRelease(frequency1, "8n");
  synth.triggerAttackRelease(frequency2, "8n", "+1");

  const filter = new Tone.Filter();

  filter.set({
    frequency: 800,
    type: "lowpass",
    rolloff: -24,
  });

  synth.chain(filter, Tone.Destination);

  let playButtons = "#begin-training-btn" || ".play-again-btn";

  document.querySelector(playButtons).addEventListener("click", async () => {
    await Tone.start();
  });

  if (Tone.context.state === "suspended") {
    Tone.context.state = "running";
  } else {
    Tone.context.state = "running";
  }
}

// Function uses ToneJS library to create sounds for Chord Identifier mode
function createChord(frequency1, frequency2, frequency3, frequency4) {
  const envelope = new Tone.AmplitudeEnvelope({
    attack: 0.8,
    decay: 0.2,
    sustain: 1.0,
    release: 0.8,
  });

  const gain = new Tone.Gain(0.5);

  const synth = new Tone.PolySynth(Tone.Synth).connect(envelope);

  synth.set({
    waveform: "sine",
  });
  synth.triggerAttackRelease(
    [frequency1, frequency2, frequency3, frequency4],
    1
  );

  synth.chain(gain, Tone.Destination);

  let playButtons = "#begin-training-btn" || ".play-again-btn";

  if (Tone.context.state === "suspended") {
    Tone.context.state = "running";
  } else {
    Tone.context.state = "running";
  }

  document.querySelector(playButtons).addEventListener("click", async () => {
    await Tone.start();
  });
}
