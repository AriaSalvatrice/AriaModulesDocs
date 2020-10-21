<template lang="pug">
#module-text

  ModuleIllustration#psychopump(src="/modules/psychopump/psychopump.png")

  ModuleMainSection(title="Psychopump" illustration="psychopump" align="right")
    ModuleSubSection(subtitle="Send your beats straight to Hades" align="right")
      ModuleBox(align="right")
        :markdown-it
          The big idea of **Psychopump** is simple: send it gates to any of its 8 channels, and it outputs the corresponding CV preset.

      ModuleBox(align="center")
        :markdown-it
          Why you would want to use it is more complex: it doesn't pair well with everything.

          It was initially created to conserve CPU when using [PSI OP](https://library.vcvrack.com/FehlerFabrik-Suite/PSIOP), a fun FM drum module capable of a wide range of sounds, and like many oscillators, too CPU-hungry to use one instance per drum sound.

          But Psychopump is not just about saving CPU, it can do much more.

    ModuleSubSection(subtitle="Getting started" align="center")
      ModuleBox(align="center")
        :markdown-it
          Let's make a little patch first. You will need a module that can produce gates, such as a clock or just some [Pokies](/modules/remote-controllers), and a module that can produce a variety of sounds when you send it gates and modulation. Can't think of any? Try out [Hora Hi-Hat](https://library.vcvrack.com/Hora-treasureFree/HiHat).

      ModuleBox(jack="out" to="psychopump" :x="30/1500" :y="142/760" align="right")
        :markdown-it
          On a freshly initialized module, patch in a gate to the **Gate 1** input.

      ModuleBox(jack="in" to="psychopump" :x="79/1500" :y="674/760" align="right")
        :markdown-it
          Patch the **Gate 1** output to the gate/trigger input of your sound-producing module.

      ModuleBox(jack="in" to="psychopump" :x="461/1500" :y="674/760" align="right")
        :markdown-it
          Patch the first **CV** output to a modulation input of your sound-producing module.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/psychopump/knob.png").float-left
        :markdown-it
          Turn the knob that intersects the **Gate 1** input and the first **CV** output.

          You'll know you've found the right knob if the **LCD** says "Gate 1 Knob 1" when you operate it.

      ModuleBox(align="right")
        :markdown-it
          Send gates to the **Gate 1** input: you'll see they are forwarded to the **Gate 1** output, while the first **CV** output sends a snapshot of its value at the time it received a gate.

      ModuleBox(jack="out" to="psychopump" :x="30/1500" :y="202/760" align="right")
        :markdown-it
          Now, patch in a second gate to the **Gate 2** input, program its corresponding first knob differently, and listen what happens when you send gates to it.

      ModuleBox(align="center")
        ModuleImageInsert(src="/modules/psychopump/randomoffset.png").float-left
        :markdown-it
          Increase the random offset of the columns with the first **CV** output. It's normal it won't do anything yet.

        ModuleImageInsert(src="/modules/psychopump/plusminus.png").float-left
        :markdown-it
          Click the **+ (Plus)** and **- (Minus)** buttons next to the knobs you have previously operated: the random offset is now applied on each gate received.

      ModuleBox(align="center")
        :markdown-it
          That's it, that's the core of what Psychopump does for you. It's not meant too make a previously impossible workflow possible, it's meant to make it convenient, inspiring to program, and easy to perform.

      Protip(align="center")
        :markdown-it
          Because Charon requires a payment of one obol to cross the river Styx, you will find such a coin factory-inserted in your module.

          While the coin receptacle is not user-serviceable, a popular third-party mod for **Psychopump** you will find documented on the Internet entails enlarging the coin receptacle with a rotary tool, such that you can deposit a stack of six mon, allowing your CV and gates to cross the Sanzu river and reach Buddhist hell instead.

          Before considering modding, please understand that any mod applied to any **Aria Salvatrice Signature Series** module voids its warranty, making it no longer eligible to have its bugs reported on Github.

    hr

    ModuleSubSection(subtitle="Gates processing" align="right")
      ModuleBox(align="right")
        :markdown-it
          Let's look in greater detail at the controls at the left of the device.

      ModuleBox(jack="out" to="psychopump" :x="30/1500" :y="142/760" align="right")
        :markdown-it
          The 8 **Gate** inputs accept gates or triggers. In default **Monophonic** operation, when a gate is received, it makes the corresponding channel active.

          In case of simultaneous gates, the lowest inputs have the highest priority.

      ModuleBox(jack="in" to="psychopump" :x="79/1500" :y="674/760" align="right")
        :markdown-it
          The two **Gate** outputs pass through the received gates, depending how they're routed.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/psychopump/gatelabel.png").float-left
        :markdown-it
          By clicking the Label button, you can name the corresponding gate.
        ModuleImageInsert(src="/modules/psychopump/lcdlabel.png").float-left
        :markdown-it
          When you operate knobs, the names show up on the LCD.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/psychopump/mutesolo.png").float-left
        :markdown-it
          Those four buttons control whether the gates are output. The **Mute** and **Solo** button work the same way they do on a mixer, while the **1** and **2** buttons let you choose where to route the gate.

          Even if a gate is not routed to an output, receiving it will still make the channel active.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/psychopump/length.png").float-left
        :markdown-it
          The **Length** knob allows you to change the duration of the received input. You can turn a long gate into a short trigger, or the other way around. By keeping the knob all the way to the left, gates are passed as-is without change.

          No matter how long you make the gates, they will still retrigger properly, by insterting one millisecond of silence when retriggered.

      Protip(align="center")
        :markdown-it
          If your beats are hot enough, instead of paddling, you might start to perceive Charon as pole dancing.

    hr

    ModuleSubSection(subtitle="Sample & Hold" align="right")
      ModuleBox(jack="out" to="psychopump" :x="237/1500" :y="320/760" align="right")
        :markdown-it
          Each channel has a pair of **Sample & Hold** inputs. The value is sampled when a trigger is received on that channel.

          If no cable is patched in an input, it tries to read the inputs above it until a cable is found.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/psychopump/plusminussh.png").float-left
        :markdown-it
          A **Random Offset** from 0V up to the value of the **Random Offset** knob can be added or subtracted from the **Sample & Hold** inputs by enabling the corresponding **+ (Plus)** and **- (Minus)** button. When both are enabled, if effectively doubles the range of the randomness.

          Random offsets can be used to create crazy modulations, but they also work great when they're subdued, for example by applying subtle variations to drum hits to give them a more analog character and reduce the machine gun effect.

    hr

    ModuleSubSection(subtitle="CV section")
      ModuleBox
        :markdown-it
          Each channel has 8 programmable knobs, with optional **Random Offsets** working the same as described just above.

      ModuleBox(jack="in" to="psychopump" :x="874/1500" :y="674/760")
        :markdown-it
          In default **Monophonic** operation, the value of each knob in the active channel is sent to its corresponding **CV** output when a gate is received.

          If you move the knobs after receiving a gate, it won't be reflected in the outputs before another gate is received.

      ModuleBox
        ModuleImageInsert(src="/modules/psychopump/polarity.png").float-right
        :markdown-it
          Knobs can be either **Unipolar** (0V ~ 10V) or **Bipolar** (-5V ~ 5V) depending on the position of the rocker switch at the top of the column. By default they're **Unipolar**.

      ModuleBox
        ModuleImageInsert(src="/modules/psychopump/fortuna.png").float-right
        :markdown-it
          You can give the **Rota Fortunae** a spin to randomize the 8 knobs to its right. It's much more useful to randomize a single channel than the entire device.

          If you don't like the results, you can **Undo** them.

      ModuleBox
        ModuleImageInsert(src="/modules/psychopump/outputlabel.png").float-right
        :markdown-it
          By clicking the Label button, you can name the corresponding output.
        ModuleImageInsert(src="/modules/psychopump/lcdlabel.png").float-right
        :markdown-it
          When you operate knobs, the names show up on the LCD.

    hr

    ModuleSubSection(subtitle="Pitch")
      ModuleBox(jack="out" to="psychopump" :x="1147/1500" :y="142/760")
        :markdown-it
          Each channel's **V/Oct** input works like the **Sample & Hold** by default, but optional features make it uniquely suited for pitch signals.

      ModuleBox(jack="out" to="psychopump" :x="1259/1500" :y="261/760")
        ModuleImageInsert(src="/modules/psychopump/quantize.png").float-left
        :markdown-it
          When the **Quantize** button is enabled, the pitch for that channel gets quantized to the scale received in the [Poly External Scale](/modules/poly-external-scale) input, which can be set by modules such as [QQQQ](/modules/qqqq).

          If there's no **Poly External Scale** patched, the signal is quantized to the chromatic scale instead - that is, to the closest semitone.

    hr

    Protip(align="right")
      :markdown-it
        To save CPU and simplify timing operations, **Psychopump** operates only once per millisecond.

        Nonetheless, it has been proven to produce dope bangers up to 666 BPM.


    ModuleSubSection(subtitle="Polyphony" align="center")
      ModuleBox(align="center")
        ModuleImageInsert(src="/modules/psychopump/polyphony.png").float-left
        :markdown-it
          There are three **Polyphony Modes** you can select by pressing this button: **Monophonic**, **3 Channel Rotation**, and **Full Polyphony**.

      ModuleBox(align="center")
        :markdown-it
          By default, the device is in **Monophonic** mode, which is the easiest one to program. It works well with modules such as  [PSI OP](https://library.vcvrack.com/FehlerFabrik-Suite/PSIOP), as the constant retriggering has an interesting sonic character, and also with monophonic modules capable of sustaining the previous decaying voice, such as [Mutable Instruments Rings](https://mutable-instruments.net/modules/rings/), available as [Resonator](https://library.vcvrack.com/AudibleInstruments/Rings) in VCV's library.

          In **3 Channel Rotation** mode, the 3 most recently triggered channels are output, allowing you to have multiple voices at once, without reserving 8 voices. It's good for polyphonic modules that consume CPU time even when a voice is idle, such as [Palette](https://library.vcvrack.com/Atelier/AtelierPalette).

          With **Full Polyphony**, all the channels are output all the time, in order. There's as many channels as the last **Gate** input connected.

    hr

    ModuleSubSection(subtitle="Delay" align="center")
      ModuleBox(align="center")
        ModuleImageInsert(src="/modules/psychopump/delay.png").float-left
        :markdown-it
          You can optionally enable a **5ms Gate Delay**. As the name implies, it only delays the gates, not the CV.

          In general, in a virtual modular synth, it doesn't really matter if the gates are received a few samples before the modulation arrives: it's so fast, you won't hear any glitch. But in some cases, modules snapshot their value on trigger, and in that case, it's crucial the gate arrives no sooner than the CV.

          If you process **Psychopump**'s CV output before it reaches its destination, it will add at least one sample of delay, causing such a desync. Enabling the **5ms Gate Delay** ensures the gate will always arrive second.

          You can't configure the duration. If it's too long or too short for you, just patch the delay of your choice. It's just meant as a quick fix button if you notice something's wrong.




</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Psychopump - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
