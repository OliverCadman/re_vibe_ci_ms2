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

  // const reverb = new Tone.Reverb({
  //   decay: 3,
  //   wet: 0.8,
  //   preDelay: 0.1,
  // });

  synth.chain(filter, Tone.Destination);

  Tone.start();
}

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

  synth.chain(gain, filter, Tone.Destination);

  Tone.start();
}
