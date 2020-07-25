<template lang="pug">
#module-text

  ModuleIllustration#qqqq(src="/modules/qqqq/qqqq.png")
  ModuleIllustration#quack(src="/modules/qqqq/quack.png")
  ModuleIllustration#q(src="/modules/qqqq/q.png")
  ModuleIllustration#quale(src="/modules/qqqq/quale.png")
  ModuleIllustration#formfactors(src="/modules/qqqq/formfactors.png")

  ModuleMainSection(title="Quatherina’s Quality Quad Quantizer" illustration="qqqq")
    ModuleSubSection(subtitle="Presented by Quatherina the Quantum Duck")
      ModuleBox
        :markdown-it
          **Quatherina the Quantum Duck** is best known for her aventures in the **Quartz Quasar**, in the **Quaint Quarry**, in the **Quarrelsome Quahaug Quagmire**, in the **Quarantined Quaestor Quadripoint**, and in **Canada** (the canonicity of that last adventure being a point of debate amongst **Quatherina**'s fans that I wish to remain neutral about).

          To finance her adventuring lifestyle, she has graciously accepted payment (in the form of an undisclosed tonnage of **Quaker Oats**) to lend her name and likeness in endorsement of my synthesizer modules.

      ModuleBox
        :markdown-it
          **Quatherina the Quantum Duck presents Quatherina's Quality Quad Quantizer** is a quantizer: it coerces any input signal into the closest pitch of the scale, and outputs it as a V/Oct signal.

          It only works with Twelve-tone Equal Temperament, the usual Western tuning system.

          It provides four separate quantizer lines, each with a built-in scaler and offsetter to change the range of the signal, the ability to transpose the signal, and Sample & Hold.

          You can save scales and chords in 16 slots.

      ModuleBox(align="center")
        :markdown-it
          Why do you even need a quantizer? For aleatoric music, of course!

          They're a wonderful companion to sources of randomness such as the [Turing Machine](https://library.vcvrack.com/StellareModular/TuringMachine).



  ModuleMainSection(title="Quatherina’s Quality Quad Quantizer" illustration="formfactors" displaytitle="none")
    ModuleSubSection(subtitle="Form Factors" align="right")
      ModuleBox(align="right")
        :markdown-it
          There are three different form factors available of the same underlying module:

          - **Quatherina's Quality Quad Quantizer** (or **QQQQ**): The full 20hp version, featuring piano buttons, a helpful LCD, 4 polyphonic quantizer columns, 16 scenes memory, and a high definition portrait of Quatherina.
          - **Quack**: This smaller 7hp version only includes piano buttons, scale/key knobs, and a single polyphonic quantizer column from **QQQQ**.
          - **Q<**: 3hp. External input. Tiny.

      ModuleBox(align="right")
        :markdown-it
          Those modules are all expanders of each other: the left one sends the scale to the right one, which forwards it to its own right. So if you only require two quantizer lines and no sequencer, you can use **Quack** on the left and **Q<** on the right, to use only half the size of **QQQQ**.
        ModuleImageInsert(src="/modules/qqqq/expander.png").float-left
        :markdown-it
          The expander LEDs at the bottom show you whether the modules are forwarding the scale in expander mode. If expander behavior is not desired, leave a gap between instances.

      ModuleBox(align="center")
        :markdown-it
          In this documentation, we're focusing on **QQQQ**: once you understand the big one, you'll easily understand how to operate the smaller ones.

  ModuleMainSection(title="Quatherina’s Quality Quad Quantizer" illustration="qqqq" displaytitle="none")
    ModuleSubSection(subtitle="Setting the scale")
      ModuleBox
        :markdown-it
          The scale of the device can be set from multiple sources, and **the last source to make a change always has the last word what's the scale**.
      ModuleBox
        :markdown-it
          The possible sources of change are:

          - Pressing the Piano keys
          - Turning the Scale/Key knobs
          - Receiving a scale from the device immediately to the left
          - Receiving a scale from the external input
          - Changing the scene
          - Importing a chord progression or portable sequence with the keyboard button
      ModuleBox
        :markdown-it
          All the quantizer columns on a module follow the same scale. And while in this documentation I call them scales for simplicity, **QQQQ** also works with chords (albeit, without knowledge of their intended voicing), and can be a fantasatic arpeggiator and improvisation assistant.
      ModuleBox
        ModuleImageInsert(src="/modules/qqqq/piano.png").float-right
        :markdown-it
          The **Piano keys** always show you the current scale.

          Keys lit in yellow are part of the scale, while unlit keys are disallowed. You can click on the keys to change which notes are allowed.

          When you click the **visualize** button of a quantizer line, the notes currently playing on that line are lit pink (with a small dot in the center for accessibility).
      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/qqqq/lcd.png").float-left
        :markdown-it
          In the **LCD Area** at the top of the device, the **Key** and **Scale** knobs select a scale from a small list of presets, and the key of that scale.

          The available scales were curated for ease of use and instant satisfaction rather than for comprehensiveness, avoiding duplication in the form of scales that can be expressed as a mode of another scale. For the convenience of dialing a scale, an exception to that rule is made for Natural Minor and Pentatonic Minor, as they are common in popular music.

      ModuleBox(align="right")
        :markdown-it
          The following scales, along with my qualified opinion about them, are available:

          - **Chromatic** - All the notes, all the time! It's a great deal if you like every note.
          - **Major** - The white keys of the piano! I'm not really sure why we need anything else, but hey, your call if you want something daring and spicy.
          - **Natural Minor** - It is the exact same thing as the major scale, but it has a different "tonic" making it more suitable for being sad. Yup, just a scam to sell you the same stuff as something new.
          - **Melodic Minor** - You can use it to write melodies! Before this scale was invented, music had no melodies.
          - **Harmonic Minor** - The fancy, high-culture, bourgeois minor scale, used by refined individuals. That shit slaps.
          - **Pentatonic Major** - It's the guitar scale! And it has only 5 notes! Yet guitars have 6 strings. How does it even work? Theory peeps must have felt really stupid after they came up with that one.
          - **Pentatonic Minor** - Same hustle as with natural minor: it's the exact same notes as major, but their order shuffled around a bit, repackaged with an edgy sad brand.
          - **Whole Tone** - This one has structure! It is for fans of symmetry and kaleidoscopes and fractals and putting a fibonacci spiral overlay on a renaissance painting.
          - **Blues Major** - It's for when you got the blues, but aren't that sad about it.
          - **Blues Minor** - That one is for special occasions.
          - **Dominant Diminished** - That bad boy makes Honked up Hot Jazz .
          - **Bebop Major** - This one has a "blue note", like those albums with the cool fonts on the cover.
          - **Bebop Minor** - This one is for fans of animé. You're welcome.
          - **Double Harmonic** - It's so harmonic, cultures from all over the world claim this one as theirs. Maybe some day France will come up with a triple harmonic one.
          - **Eight Tone Spanish** - When I tried to find more useful info about it, I found a forum post from 2003, where a poster said indignantly that scales "[are] not a democracy, but a hierarchy".
          - **Hirajōshi** - It's all you need to rip a sick shamisen solo. Anything more is for poseur kids.
          - **In Sen** - That one was originally used for Japanese wind chimes. Instantly become the most original dark ambient modular artist around by feeding it to [Rings and Clouds](https://vcvrack.com/AudibleInstruments) for 3 hours.

      ModuleBox(jack="out" to="qqqq" :x="266/600" :y="172/760" align="right")
        :markdown-it
          The **Poly External Scale** input and output encodes a scale as a 12-channel polyphonic cable, where enabled notes have a continuous signal above 0.1V, and disabled notes, 0V.

          [Poly External Scales](/modules/poly-external-scale) are supported by my other modules, such as **Arcane** and **Darius**. Try out hacking this data bus with my [splitters and mergers](/modules/splitmerge)!

          **QQQQ** sends 8V for enabled semitones, except for the key, which is 10V, but only if that key is currently lit on the piano display.

          Providing the key/tonic is for future expansion and patching tricks: currently, no module makes use of this information.

          After patching in an unchanging **External Scale**, if you edit the settings from another sources (e.g., turning the scale knob), you can unplug and replug the **External Scale** jack to reload it.

    ModuleSubSection(subtitle="Quantizer columns")
      ModuleBox
        :markdown-it
          There's four of them, and the signal flows through them from top to bottom.

          Between input and output, you'll find the sort of small utilities I found myself using very often with quantizers.
      ModuleBox(jack="out" to="qqqq" :x="148/600" :y="255/760")
        :markdown-it
          **CV Input**: Each input jack is forwarded to the jack to its right if it's unplugged. Useful to process the same signal in different ways. It is not forwarded across expanders. Inputs are polyphonic.
      ModuleBox
        ModuleImageInsert(src="/modules/qqqq/percent.png").float-right
        :markdown-it
          **% Scale**: Attenuates, inverts, or amplifies the input, from -100% to 300%.
      ModuleBox
        ModuleImageInsert(src="/modules/qqqq/offset.png").float-right
        :markdown-it
          **Offset**: Adds or removes a fixed voltage to the input, from -10V to 10V.

      Protip
        :markdown-it
          I have received unjust criticism from organic humans, whom I feel safe assuming have a (rather pitiful) hearing range capping at about 20 kHz, for offering to offset the signal by a voltage sufficient to play notes in the 13th octave.

          I believe transhuman augmentation will allow me to enjoy 45 kHz music with my uplifted dogs, within my lifetime. And so should you.

      ModuleBox
        :markdown-it
          **Transpose**: Transposes the signal according to one of the three rules, set by the transpose mode button under the knob.
        ModuleImageInsert(src="/modules/qqqq/transpose.png").float-right
        :markdown-it
          **Transpose mode button**: Selects one of the three transposition rules for the knob directly above it. Each transposition rule results in output that remains in harmony. The rules are:

          - **Unlit** - _Octaves Mode_: Quantizes the signal first, then transposes it up or down by full octaves.
          - **Yellow** - _Semitones Mode_: Transposes the signal up or down by a few semitones first, then quantizes it.
          - **Pink with dot** - _Scale degrees Mode_: Quantizes the signal first, then transposes the signal by a specific amount of scale degrees.

      ModuleBox(jack="out" to="qqqq" :x="148/600" :y="550/760")
        :markdown-it
          **Sample & Hold / Track & Hold input**: When plugged in, instead of operating continuously, the quantizer will Sample & Hold or Track & Hold the signal. When you're quantizing a noisy source of modulation, it's useful to send it the same gate you'd send to the envelope that will play the note in question.

          The **Sample & Hold / Track & Hold input** is not polyphonic: a monophonic gate can drive a polyphonic column. And remember, signals move from top to bottom through the columns: the Sample & Hold only happens after processing everything above it.

        ModuleImageInsert(src="/modules/qqqq/sh.png").float-right
        :markdown-it
          **Sample & Hold / Track & Hold toggle**: Swaps between the two modes for the input directly below it. Unlit is Sample & Hold, lit is Track & Hold.

          What's the difference? Both **Sample & Hold** and **Track & Hold** allow you to only update the input voltage when a trigger or gate is received. **Sample & Hold** updates its memory when the trigger or gate is received, then waits for the next trigger or gate before updating again. **Track & Hold** continuously updates its memory while the gate is active instead.

      ModuleBox
        ModuleImageInsert(src="/modules/qqqq/visualize.png").float-right
        :markdown-it
          **Visualize**: Shows the quantized output on the piano display.
      ModuleBox(jack="in" to="qqqq" :x="148/600" :y="668/760")
        :markdown-it
          **Output**: The quantized signal! Polyphony is defined by the **CV Input**. It's polyphonic, and you can have multiple channels active.

      Protip(align="right")
        :markdown-it
           Did you know that there are a few people out there who do not use Quantizers, and instead choose to spend years to learn something called "Music Theory"?

           Those people do all their music by reading books and thinking really hard about maths! It's true - check out your local library for more information.

    ModuleSubSection(subtitle="Scene Memory")
      ModuleBox
        ModuleImageInsert(src="/modules/qqqq/scene.png").float-right
        :markdown-it
          The 16 **Scene Slot** buttons allow you to save 16 different scales. Navigating to a **Scene Slot** loads that scale, and changes to the scale from any source are saved to the currently selected scene.

          You can right-click on those buttons to copy and paste scales. Mapping the scene slots via MIDI doesn't work well with every mapping module, but you can use the **Scene Input** jack below instead.

          The scenes only save the scales: the positions of the knobs are not saved with them. If you want that behavior, using [8FACE](https://library.vcvrack.com/Stoermelder-P1/EightFace) with **Quack** is the recommended method.


      ModuleBox(jack="out" to="qqqq" :x="497/600" :y="314/760")
        :markdown-it
          **Scene input**: Navigates the scenes via CV. Useful with a step sequencer! Accepts 0V~10V (each scene is 0.625V). When plugged in, the **Scene Slot** buttons can't be operated manually anymore.
        //- :markdown-it
        //-   **Scene input**: Navigates the scenes via CV. When plugged in, the **Scene Slot** buttons can't be operated manually anymore.

        //-   There are two different modes, selected from the right-click menu. Pick the one that's the easiest for your particular use case:

        //-   - **Select Scenes with 0V~10V** (default): Each scene is 0.625V. Useful with a step sequencer!
        //-   - **Advance Scenes with trigs**: Each trigger or gate advances one scene, then it goes back to the first. It skips any empty scene at the end, but not empty scenes that are followed by non-empty ones.


    ModuleSubSection(subtitle="Keyboard I/O" align="right")
      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/qqqq/keyboard.png").float-right
        :markdown-it
          With the **Keyboard** button, you can write down or paste chords from the clipboard, and have them transformed to **QQQQ** scenes! You can also use it to copy and paste scales as portable sequences.
      ModuleBox(align="right")
        :markdown-it
          The three following modes are available:

          - **Lead sheet notation**: Chord symbols, separated with spaces, commas, or hyphens. It's rather liberal in what it accepts, but kinda chokes on slash chords and crazy jazz combos. Still, it should get you close. For example, this is a valid input: `G am B, E/G# Bb - A,Fsus2  Csus2 D(add9)`
          - **Roman numeral notation**: Roman numerals, separated with spaces, commas, or hyphens. The tonic will be set to the current position of the **Key** knob. To denote minor chords, rather than use lowercase, you need an explicit `m` after the numeral: `III im7 VIsus4` rather than `III i7 VIsus4`. It's a lot more fiddly than lead sheet notation and will only recognize rather basic progressions.
          - **Portable Sequence**: Simultaneous notes from a [Portable Sequence](https://github.com/squinkylabs/SquinkyVCV/blob/master/docs/clipboard-format.md) are interpreted as a scale. You can also export them as such. Note that when exporting and re-importing a portable sequence, empty scene slots will be skipped. How to make this feature useful is left as an exercise to **Portable Sequences** implementers.
      ModuleBox(align="right")
        :markdown-it
          Text input is always imported starting from the first scene. And remember: **QQQQ** only thinks in scales, not in chords. After you import a chord progression, **QQQQ** doesn't care about the voicing of the chord. It's all folded back to a single octave.
      ModuleBox(align="right")
        :markdown-it
          Under the hood, **QQQQ** makes use of [Tonal.js](https://github.com/tonaljs/tonal)' knowledge of chords. Yup, this module runs javascript! Same [QuickJS](https://bellard.org/quickjs/) engine as [VCV Prototype](https://vcvrack.com/Prototype). Of course, the number crunching is efficient C++, javascript usage is limited to what it does best - fuzzy text parsing.

  ModuleMainSection(title="Quack" illustration="quack")
    ModuleSubSection(subtitle="Smaller 7hp version")
      ModuleBox
        :markdown-it
          **Quack** offers only a single quantizer line, and no LCD. Visualization is always enabled on **Quack**.

      ModuleBox(jack="out" to="quack" :x="107.5/210" :y="184/760")
        :markdown-it
          Due to space contraints, the **Poly External Scale** input and output are not labeled.

  ModuleMainSection(title="Q<" illustration="q" align="right")
    ModuleSubSection(subtitle="Tiny 3hp version" align="right")
      ModuleBox(align="right")
        :markdown-it
          **Q<** has no built-in way to set the scale, nor any helpful reference what the knobs do: it's meant to be used primarily as an expander for **Quack**, so that the labels line up.

      ModuleBox(jack="out" to="q" :x="21/90" :y="172/760" align="right")
        :markdown-it
          You can also use it with a **Poly External Scale** input.

  ModuleMainSection(title="Quale" illustration="quale")
    ModuleSubSection(subtitle="Chord ➔ Scale, Scale ➔ Chord")
      ModuleBox
        :markdown-it
          **Quatherina the Quantum Duck** doesn't experience the existence of multiple octaves, and quavers at those who purport to. She makes no distinction between chords and scales. It's all voltage to her.

          With some qualms, she humors your fancies, offering **Quale**: a little 3hp module to convert **Poly External Scales** to **Chords**, and the other way around.

      ModuleBox(jack="out" to="quale" :x="22/90" :y="231/760")
        :markdown-it
          When you patch the **Poly External Scale Input**, it's expressed on the **Chord Output** as a polyphonic chord on the fourth octave (0V to 0.91667V).

      ModuleBox(jack="out" to="quale" :x="22/90" :y="491/760")
        :markdown-it
          When you patch in a polyphonic V/Oct signal on the **Chord Input**, it's folded to a single octave and expressed on the **Poly External Scale Output** in the **Poly External Scale** format compatible with the rest of my collection.

      ModuleBox
        :markdown-it
          **Quale** can be used as an expander with the entire **QQQQ** family.

          When **Quale** is placed to the left of **QQQQ**, its **Scale Output** is forwarded to **QQQQ**.

          When **Quale** is placed to the right of **QQQQ**, the scale from **QQQQ** is expressed as a chord on **Quale**'s **Chord Output**.

      Protip
        :markdown-it
           Quatherina has recently taken to calling people who claim to subjectively experience the existence of multiple octaves Q-Zombies.

  ModuleMainSection(title="Quatherina’s Quality Quad Quantizer" illustration="formfactors" displaytitle="none")
    ModuleSubSection(subtitle="Performance")
      ModuleBox
        :markdown-it
          While there are smaller and simpler quantizers than **QQQQ** available in the VCV library, you will find that **QQQQ** is nonetheless faster than many options with fewer features, thanks to its aggressive sub-sampling and culling of unused outputs:

          - **Sub-sampling**: For almost every single use case, there is no reason for a quantizer to operate at audio rates (which most VCV modules do). Every 32 samples is plenty - that's still faster than once per millisecond at 44,100Hz, making artifacts inaudible.
          - **Culling**: When the output of a column is unplugged and its visualization disabled, the column in question does not process input, and thus consumes almost no CPU. Unnecessary calculations are also skipped when Sample & Hold is used.







</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Quatherina’s Quality Quad Quantizer - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
