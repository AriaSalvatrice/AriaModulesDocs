<template lang="pug">
#module-text

  ModuleIllustration#arcane(src="/modules/arcane/arcane.png")
  ModuleIllustration#atout(src="/modules/arcane/atout.png")
  ModuleIllustration#aleister(src="/modules/arcane/aleister.png")
  ModuleIllustration#cards(src="/modules/arcane/cards.jpg")

  ModuleMainSection(title="Arcane" illustration="arcane" align="center")
    ModuleSubSection(subtitle="Getting started" align="center")
      ModuleBox(align="center")
        :markdown-it
          I hope luck is on your side. Every day, you will share together the fortune I shall grant you. It is your task to interpret what my augury means to you.

      ModuleBox(align="right")
        :markdown-it
          Modules in the **Arcane** series are comprised almost only of output jacks, sending today's fortune as CV. **Those values are the same for every Arcane user**, and nobody can predict or influence them.

      ModuleBox(jack="in" to="arcane" :x="617/720" :y="426/760")
        :markdown-it
          To get started immediately, use the topmost **1/16** output to drive the clock input of a CV step sequencer such as [SEQ-3](https://library.vcvrack.com/Fundamental/SEQ3).

      hr

      ModuleBox(align="right" jack="out" to="arcane" :x="475/720" :y="107/760")
        :markdown-it
          Then, send that sequencer's output to Arcane's quantizer input.
      ModuleBox(jack="in" to="arcane" :x="664/720" :y="107/760")
        :markdown-it
          Send the quantizer output to an oscillator, and listen what happens.
      ModuleBox
        :markdown-it
          Next, try another of the jacks below as the clock input!

    hr

    ModuleSubSection(subtitle="Oracles" align="right")
      ModuleBox(align="right")
        :markdown-it
          Every day, I will draw the following cards, and impart the following knowledge:

          - **_Arcane Majeur_**: a major arcana of the Tarot of Marseilles.
          - **_Bâtons_** (Wands), **_Coupes_** (Cups), **_Deniers_** (Coins), **_Épées_** (Swords): a different 16 step binary pattern for each suit of the Tarot.
          - **Scale pattern**: The notes of a music scale comprised of 5, 6, 7, or 8 notes, often scales common in popular Western music, and sometimes less common ones. Which note is the root of the scale isn't specified, only which notes are part of the scale.
          - **8 note pattern**: Every note from the selected scale, sorted in a random order. If the scale has fewer than 8 notes, up to 3 different notes will be repeated at the end, an octave higher.
          - **BPM**: Integer ranging from 60 to 180 BPM, with values between 90 and 150 twice as likely.
          - My **sincerest wish** of luck, love, health, and prosperity.
      Protip(align="center")
        :markdown-it
          I pronounce a new oracle every single day at exactly 12:00 AM UTC without fail.

          Without exception, all of my oracles are correct.

    hr

    ModuleSubSection(subtitle="Inputs and Outputs")
      ModuleBox
        :markdown-it
          How to interpret my fortune is up to you and your friends. You can make use of a single output jack of the module, or all of them. You can craft an ephemeral song that will no longer exist tomorrow. You can create an unchanging patch that will grace you with a new song every day. There are no rules but the ones you choose to follow.

          All I can do is reveal some mundane obscura to get you started scrying the will of the jacks.

      ModuleBox(jack="out" to="arcane" :x="475/720" :y="107/760")
        :markdown-it
          **Quantizer**: A pair of polyphonic ports quantizing input to the nearest scale note.
          Try to combine it with the [Split and Merge series](#split-and-merge-splort-smerge-spleet-swerge-and-splirge), the ability to sort by voltage might prove useful.
      ModuleBox(jack="in" to="arcane" :x="475/720" :y="154/760")
        :markdown-it
          **Melody**: Polyphonic ports sending every note of the scale on the fourth octave (0V~0.9166667V), in the order of the 8 note pattern. It sends as many notes as there are in the scale (between 5 and 8).
      ModuleBox(jack="in" to="arcane" :x="570/720" :y="154/760")
        :markdown-it
          **Padded**: Like **Melody**, sends the entire 8 note pattern, with any repeated note being one octave higher than normal.
          If you combine them with [ML modules sequential switch 8 to 1](https://library.vcvrack.com/ML_modules/SeqSwitch), they can become a melody.
      ModuleBox(jack="in" to="arcane" :x="664/720" :y="154/760")
        :markdown-it
          **Poly External Scale**: Sends the scale in the **Poly External Scale** format my other modules use. Try it with **Qqqq** or **Darius**!
      ModuleBox(jack="in" to="arcane" :x="475/720" :y="319/760")
        :markdown-it
          **_Arcane Majeur_**: The number of the arcana, divided by 10.
          Thus, _The Fool_ is 0V, _The Magician_ is 0.1V, and so on up to 2.1V for _The World_. Following the conventions of the Tarot of Marseilles, the 8th arcana is _Justice_, and the 11th is _Strength_, unlike the ordering popularized by the Rider-Waite-Smith deck, which swaps those two arcana around.
          You can multiply this signal by 4.76 with an offsetter such as [Bogaudio's](https://library.vcvrack.com/Bogaudio/Bogaudio-Offset) to obtain a 0V~9.99V signal, if you wish.
      ModuleBox(jack="out" to="arcane" :x="522/720" :y="319/760")
        :markdown-it
          **Reset** and **Run**: They control all the outputs below them. Operate them manually using the button, or synchronize multiple devices by sending them a trigger from a single source, for example the [Little Utils Button](https://library.vcvrack.com/LittleUtils/Button).
      ModuleBox(jack="in" to="arcane" :x="664/720" :y="319/760")
        :markdown-it
          **BPM**: Follows the [VCV Standard](https://vcvrack.com/manual/VoltageStandards#pitch-and-frequencies) for clocks and LFOs where 0V stands for 120BPM.
          You can send that signal to a compatible clock module such as [Impromptu Modular's Clocked](https:/library.vcvrack.com/ImpromptuModular/Clocked) if you require a clock (for example, for swing, or other time signatures than 4/4).
      ModuleBox(jack="in" to="arcane" :x="664/720" :y="426/760")
        :markdown-it
          **Gate/Ramp** on the **32nd note**, **16th note**, **8th note**, **4th note**, **Bar**: This row of outputs sends, either a gate synchronized to the BPM at the corresponding interval in 4/4 time, or a 0V-10V ramp corresponding to that phase.
        ModuleImageInsert(src="/modules/arcane/rockerswitch.png").float-left
        :markdown-it
          The position of the **Gate/Ramp** switch decides whether a gate or ramp will be sent.

          While **Arcane** can serve as a master clock, the ramp can be used to drive the [ZZC Clock](https://library.vcvrack.com/ZZC/Clock), if you'd prefer to use it.
      ModuleBox(jack="in" to="arcane" :x="522/720" :y="532/760")
        :markdown-it
          **_Bâtons_**, **_Coupes_**, **_Deniers_**, **_Épées_**: The four patterns, sent as gates on each 32nd note, 16th note, 8th note, 4th note, or bar.
          Don't limit yourself to drums, you can use them in many different ways! Want to visualize the patterns, or to use them as something different than a rhythm? Try out the **Aleister** expander.
      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/arcane/pw.png").float-left
        :markdown-it(plugins=['markdown-it-attrs'])
          **Pulse Width**: The knob at the bottom selects how long the gates are, proportionally to their note length. It affects every gate output. Need more granular control over pulse widths? An external clock or a pulse generator such as [Submarine's](https://library.vcvrack.com/SubmarineFree/PG-112) will help.
      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/arcane/lcd.png").float-left
        :markdown-it
          The module's **LCD** will show you the date of the fortune, the BPM, the name of the arcana, and the notes of the scale. However, it cannot unambiguously name the scale, since your fortune doesn't stipulate on which note the scale starts.

          The **LCD** will also tell you whether today I am wishing you luck, love, health, or prosperity (displayed as MONEY due to the size of the LCD). You cannot access that information via CV, as it is only a personal wish that might not manifest, unlike my oracles, which are always accurate.

  ModuleMainSection(title="Atout" illustration="atout" align="right")
    ModuleSubSection(subtitle="Arcane's smaller version" align="right")
      ModuleBox(align="right")
        :markdown-it
          There are two available form factors of the same module:

          - **Arcane**: the full 24hp version displays today's arcana, from Nicolas Conver's 1760 Tarot of Marseilles.
          - **Atout**: the smaller 9hp version doesn't display the arcana, but includes all the functionality and every jack from **Arcane**. To conserve space, the **Gate/Ramp** switch is at the bottom.

      Protip(align="center")
        :markdown-it
          When using Atout, you can use your third eye to visualize the tarot card instead.


  ModuleMainSection(title="Aleister" illustration="aleister")
    ModuleSubSection(subtitle="Binary pattern expander")
      ModuleBox(jack="in" to="aleister" :x="337/690" :y="107/760")
        :markdown-it
          The third module, **Aleister**, gives you access to the **_Bâtons_**, **_Coupes_**, **_Deniers_**, and **_Épées_** binary patterns as series of 16 outputs sending continuously either 0V or 10V, rather than as a rhythmic pattern of gates. If you connect only the first output of a group, it will instead be a polyphonic cable outputting the entire group. **Aleister** takes 14hp of space.

          You can employ **Aleister**'s services as a standalone module, but when placed directely the right of either **Arcane** or **Atout**, the module will act as an expander, lighting up the jacks in sync with the rightmost connected output of the corresponding pattern on the parent module. Try it out, you'll understand what it does immediately.
        ModuleImageInsert(src="/modules/arcane/expander.png").float-left
        :markdown-it
          When **Aleister** is connected to a parent module, the expander LEDs at the bottom light up.

  ModuleMainSection(title="Arcane" displaytitle="none" illustration="arcane")
    ModuleSubSection(subtitle="Network connection" align="right")
      ModuleBox(align="right")
        :markdown-it
          **Upon activation, this module will connect to the internet**, and fetch today's numbers on a GitHub repository via HTTP. The fortunes are not generated locally to make it possible for all users to share the same numbers every day, while also making it impossible to cheat fate and predict the next oracle (which a local deterministic implementation would necessarily entail).

          If the repository is unreachable, the module will will output 0V on all ports, except the quantizer, which will forward input as-is. You can find more information about the **Arcane** server, its API, and its source code, on [their GitHub repository](https://github.com/AriaSalvatrice/Arcane).
        ModuleImageInsert(src="/modules/arcane/new-oracle.png").float-left
        :markdown-it
          If the module is active at the time a new fortune is drawn, the values will not change, but a notification a new fortune is available will appear on the **LCD**. Using the right-click menu, you can _Initialize_ the module to download the newest fortune. Every active instance of **Arcane**, **Atout** and **Aleister** have to be initialized spearately to update the fortune.

      ModuleBox(align="right")
        :markdown-it
          **There is no offline mode, and no built-in way to load older fortunes, by design.** These are multiplayer-only oracles. But I won't prevent you from editing the .json files in the `AriaSalvatrice/Arcane/` directory of your VCV Rack user directory, if you really must. Every downloaded fortune is archived locally, a full archive is available [from GitHub](https://github.com/AriaSalvatrice/Arcane), and if a local file exists for today, it will not be checked against the server.

      ModuleBox(align="right")
        :markdown-it
          Quick tech remark about JSON API cache spoofing: such self-deception will never alter your true destiny, and it is unwise to cling to the past instead of living for a future you can yet change.

  ModuleMainSection(title="Arcane" displaytitle="none" illustration="cards")
    ModuleSubSection(subtitle="Final Wisdom" align="center")
      ModuleBox(align="center")
        :markdown-it
          Using this series of modules to their full extent requires a bit of creative patching, a bit of lateral thinking, but most importantly, friends to share your different interpretations of the same fortune with.

      Protip(align="center")
        :markdown-it
          If you treat my oracles as a mere random number generator, you will never gain any wisdom from them.

      ModuleBox
        :markdown-it
          **The tarot deck used is the Conver – Ben-Dov (CBD) version**.

          The CBD deck was restored in 2008-2011 from the original 18th century deck by tarot expert [Dr. Yoav Ben-Dov's](https://www.cbdtarot.com/).

          It was chosen for its traditional significance, the quality of its imagery, and the simplicity of its broad lines being well suited to VCV's limited vector rendering engine.

          While there is great variety in decks across many different Tarot traditions, Tarot of Marseilles imagery does not vary significantly across decks. The exact same subjects are drawn from the same angle, leaving very little room for the artist to re-interpret the themes.

          A few figures are generally depicted nude, and while the style of the CBD deck is obviously neither graphic nor intended to titillate, I took the liberty to slightly alter a few cards to remove details, in particular the Devil's codpiece, as most users will download my module from the VCV library without being forewarned about contents a small minority would find upsetting. I hope you will understand my decision.

      ModuleBox(align="right")
        :markdown-it
          It should go without saying that no sane courtroom would ever humor the idea the output of **Arcane** is original enough to be my copyright. Since courtooms are rarely sane, **I explicitly relinquish any claim of intellectual propery over the output of Arcane**, not that I believe I ever had any. Any song you make with it is yours alone.


</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Arcane - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
