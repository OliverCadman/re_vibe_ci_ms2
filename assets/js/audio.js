function createTones(frequency1, frequency2) {
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

  const reverb = new Tone.Reverb({
    decay: 3,
    wet: 0.8,
    preDelay: 0.1,
  });

  synth.chain(reverb, filter, Tone.Destination);

  Tone.start();
}
