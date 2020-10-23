<template lang="pug">
#module-text

  ModuleIllustration#all(src="/modules/remote-controllers/all.png")

  ModuleMainSection(title="Remote Controllers" illustration="all")
    ModuleSubSection(subtitle="Pokies, Grabby, Rotatoes")
      ModuleBox
        :markdown-it
          A trio of 3hp lightweight performance controllers, perfect to simplify complex MIDI controller setups.

      ModuleBox
        ModuleImageInsert(src="/modules/remote-controllers/rectangle.png").float-right
        :markdown-it
          While you can play those controllers with your mouse, they are meant to be remote controlled by another module. That's why they have this little rectangle on their background, to make it easy to tell whether they're automated via MIDI.

      ModuleBox
        :markdown-it
          Some suggestions of modules that were tested to control perfectly those **pokies**, **grabbies** and **rotatoes**:

          - [MIDI-Map](https://library.vcvrack.com/Core/MIDI-Map)
          - [23volts Multimap](https://library.vcvrack.com/23volts/MultimapK)
          - [stoermelder µMAP](https://library.vcvrack.com/Stoermelder-P1/CVMapMicro)
          - [stoermelder ReMOVE Lite](https://library.vcvrack.com/Stoermelder-P1/ReMoveLite)

      ModuleBox
        :markdown-it
          For performance, all of them operate only once every 32 samples, which is accurate to the millisecond: fast enough for most intended use cases, but it does not sync up triggers perfectly.

      hr

  ModuleMainSection(title="Pokies" illustration="all" align="right")
    ModuleSubSection(subtitle="Thingies to poke at" align="right")
      ModuleBox(jack="in" to="all" :x="22/270" :y="243/760" align="right")
        :markdown-it
          Every **pokie** sends its value to its corresponding jack. By default, it's the usual gate value: pressed is 10 V, not pressed is 0 V.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/remote-controllers/pokie-right-click.png").float-left
        :markdown-it
          By right-clicking on empty space on the module (for example, the title or signature), you can configure the range of the **pokies**. The **Minimum** is the value it sends when it's not pressed, and the **Maximum** when it's pressed.

          Of course, it's safe to make the **Minimum** higher than the **Maximum**, for example to invert a button's status.

          You can also set the **pokie** to be a latching **toggle** rather than use the default **momentary** operation.

      ModuleBox(jack="out" to="all" :x="22/270" :y="95/760" align="right")
        :markdown-it
          When you send a **Global Trig**, it's the same as if all four **pokies** were poked at simultaneously.

          It will convert gates it receives to short triggers instead.

      Protip(align="right")
        :markdown-it
          There are at least four different colors of automation rectangle indicators in the entire library! Can you discover them all and bind them to pokies?

          Be careful, some shades are very similar but still different!



  ModuleMainSection(title="Rotatoes" illustration="all")
    ModuleSubSection(subtitle="Thingies what you squeeze and turn")
      ModuleBox(jack="in" to="all" :x="202/270" :y="243/760")
        :markdown-it
          Every **rotato** sends its value to its corresponding jack. By default, it's unipolar: fully to the left is 0 V, fully to the right is 10 V.

      ModuleBox
        ModuleImageInsert(src="/modules/remote-controllers/rotato-right-click.png").float-right
        :markdown-it
          By right-clicking on empty space on the module (for example, the title or signature), you can configure the range of the **rotato**. The **Minimum** is the value it sends when it's all the way to the left, and the **Maximum** when it's all the way to the right.

          As with **pokies**, it's safe to make a **rotato**'s **Minimum** higher than its **Maximum**.


      ModuleBox(jack="out" to="all" :x="202/270" :y="95/760")
        :markdown-it
          When you send a **Poly External Scale** to this input, the outputs of the the **rotatoes** will be quantized to V/Oct pitches!

          You can disable this behavior per-**rotato** from the right-click menu.

          The [Poly External Scale](/modules/poly-external-scale) format is supported by many modules of my collection. You can use **[QQQQ](/modules/qqqq)** to create then.


      Protip
        :markdown-it
          When you think about it, a **rotato** is pretty much just a **pokie** in a state of quantum superposition between being poked at and being not poked at.


  ModuleMainSection(title="Grabby" illustration="all" align="right")
    ModuleSubSection(subtitle="Bouncy thingie" align="right")
      ModuleBox(jack="in" to="all" :x="112/270" :y="615/760" align="right")
        :markdown-it
          The **grabby** is big and does, with steadfast aplomb, what you think it does.

      ModuleBox(align="right")
        :markdown-it
          By right-clicking on empty space, exciting things will happen. You certainly must have figured out a pattern to this stuff by now.

      Protip(align="right")
        :markdown-it
          When you think about it, a **grabby** is pretty much just a **rotato** except it looks all messed up.



</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Remote Controllers - Aria Salvatrice’s Synthesizer Modules'
  }
}
</script>
