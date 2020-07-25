<template lang="pug">
#module-text

  ModuleIllustration#splitmerge(src="/modules/splitmerge/splitmerge.png")

  ModuleMainSection(title="Split & Merge Collection" illustration="splitmerge")
    ModuleSubSection(subtitle="Chop chop")
      ModuleBox
        :markdown-it
          What I started as a project too simple to mess up, meant to help me learn about C++ and VCV Rack module development, has grown to become a core aspect of my patching style, thanks to a unique feature: **Sorting polyphonic cables**.

      Protip
        :markdown-it
          The word "Splirge" seems to have been coined by the late Håkan Müller as part of a [Reason Rack Extension](https://www.reasonstudios.com/shop/rack-extension/mxsplirger-cv-flexible-split-merge/), it's a cool word. The rest of the names were crafted by a consortium of expert linguists and personal branding gurus.

  ModuleMainSection(title="Splort" illustration="splitmerge" align="right")
    ModuleSubSection(subtitle="16-channel splitter" align="right")
      ModuleBox(jack="out" to="splitmerge" :x="52/570" :y="95/760" align="right")
        :markdown-it
          **Splort** splits a polyphonic cable into up to 16 output channels. Channels that are connected light up their corresponding jack pink.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/splitmerge/sort.png").float-left
        :markdown-it
          The **Sort** button is disabled by default. When enabled, channels are continuously sorted by voltage, from lowest to highest.

          Don't limit yourself to feeding them CV, send them audio and listen what happens! You can even sort oscillators, but watch out for DC offset.

      ModuleBox(jack="in" to="splitmerge" :x="93/570" :y="620/760" align="right")
        :markdown-it
          The **Link** feature allows you to share the sort order across multiple **Splort** and **Smerge** instances. You can daisy chain them together: inputs are forwarded to outputs.

          Internally, the **Link** is a polyphonic cable, where each channel is set to 0V if the channel isn't connected, or to a multiple of 0.1V to specify its order: the first channel in sort order is 0.1V, the 12th one is 1.2V, etc.

          The receiving modules don't expect those specific values, just for them to be in the correct order. Try out a polyphonic sample and hold on the Link cable!


  ModuleMainSection(title="Smerge" illustration="splitmerge" align="right")
    ModuleSubSection(subtitle="16-channel merger" align="right")
      ModuleBox(jack="in" to="splitmerge" :x="202/570" :y="95/760" align="right")
        :markdown-it
          **Smerge** merges up to 16 input channels into a polyphonic cable.

      ModuleBox(jack="out" to="splitmerge" :x="160/570" :y="620/760" align="right")
        :markdown-it
          The **Link** section works the same as in **Splort**.


  ModuleMainSection(title="Spleet" illustration="splitmerge")
    ModuleSubSection(subtitle="Dual 4-channel / Single 8 channel splitter")
      ModuleBox(jack="out" to="splitmerge" :x="322/570" :y="95/760")
        :markdown-it
          **Spleet** splits one polyphonic cable into up to 8 output channels, or two polyphonic cables into up to 4 channels each.

      ModuleBox(jack="out" to="splitmerge" :x="322/570" :y="372/760")
        ModuleImageInsert(src="/modules/splitmerge/spleet.png").float-left
        :markdown-it
          If the second input is plugged in, the LED turns off and **Spleet** operates in **Dual 4-channel mode** instead of **Single 8-channel mode**.

      ModuleBox
        ModuleImageInsert(src="/modules/splitmerge/sort2.png").float-right
        :markdown-it
          The **Sort** button affects both banks.

      Protip
        :markdown-it
          How to easily remember which of the 3hp modules does what?

          It's simple! You can't. Learning their names is supposed to be difficult.


  ModuleMainSection(title="Swerge" illustration="splitmerge")
    ModuleSubSection(subtitle="Dual 4-channel / Single 8 channel merger")
      ModuleBox(jack="out" to="splitmerge" :x="412/570" :y="573/760")
        :markdown-it
          **Swerge** merges 8 input channels into a polyphonic cable, or two banks of 4 input channels into a polyphonic cable each.

      ModuleBox(jack="out" to="splitmerge" :x="412/570" :y="296/760")
        ModuleImageInsert(src="/modules/splitmerge/swerge.png").float-left
        :markdown-it
          If the first output is plugged in, the LED turns off and **Swerge** operates in **Dual 4-channel mode** instead of **Single 8-channel mode**.

      ModuleBox
        ModuleImageInsert(src="/modules/splitmerge/sort2.png").float-right
        :markdown-it
          The **Sort** button affects both banks.


  ModuleMainSection(title="Splirge" illustration="splitmerge")
    ModuleSubSection(subtitle="4-channel splitter & merger")
      ModuleBox(jack="out" to="splitmerge" :x="502/570" :y="95/760")
        :markdown-it
          At the top of **Splirge** is a 4-channel merger.

      ModuleBox(jack="out" to="splitmerge" :x="502/570" :y="405/760")
        :markdown-it
          At the bottom of **Splirge** is a 4-channel splitter.
        ModuleImageInsert(src="/modules/splitmerge/splirge.png").float-left
        :markdown-it
          If the **Split** input isn't connected, then the output of the **Merger** above is automatically forwarded to the **Splitter**, which is useful to use **Splirge** as a sorter. Once a cable is connected, the LED turns off.

      ModuleBox
        ModuleImageInsert(src="/modules/splitmerge/sort2.png").float-right
        :markdown-it
          The **Sort** button affects both the **Splitter** and the **Merger**.

</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Split & Merge Collection - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
