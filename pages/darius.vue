<template lang="pug">
#module-text

  ModuleIllustration#darius(src="/modules/darius/darius.png")
  ModuleIllustration#arcade(src="/modules/darius/arcade.jpg")

  ModuleMainSection(title="Darius" illustration="darius" align="center")
    ModuleSubSection(subtitle="Getting started" align="center")
      ModuleBox(align="center")
        :markdown-it
          Are you still looking for the perfect sequencer, the one that allows you to effortlessly express any musical idea?

          Sucks.

          Here comes yet another gimmick module challenging you to integrate its way of thinking to your song instead.

      ModuleBox(align="right")
        :markdown-it
          **Darius** is a 8-step sequencer where each node branches into two possible paths, creating repeating patterns that start similarly and resolve differently. Takes a whole 32hp of space to fit all its knobs.

      ModuleBox(align="right" jack="out" to="darius" :x="145/960" :y="133/760")
        :markdown-it
          To get started immediately, patch in a clock to the **Forward⯈** input, and push the **Randomize CV** button.
      ModuleBox(align="left" jack="in" to="darius" :x="529/960" :y="662/760")
        :markdown-it
          Patch the **CV output** to an oscillator, and listen what happens.
      ModuleBox(align="right")
        :markdown-it
          The module's **LCD** will help you figure out what's going on when you grope at the auspicuous-looking array of knobs.

    ModuleSubSection(subtitle="Nodes" align="left")
      ModuleBox(align="left")
        :markdown-it
          Darius is comprised of 8 steps and 36 nodes. The first step has one node, the second step has two nodes, and so on.

          Going **Forward⯈** on all steps but the last can lead you to the node to the top-right of the current one, or that to the bottom-right, depending on the **Route** probability. On the last step, it leads back to the first one.

      ModuleBox(align="right" jack="in" to="darius" :x="411/960" :y="440/760")
        :markdown-it
          On each node, you will find these jacks and knobs:
        ModuleImageInsert(src="/modules/darius/node.png").float-right
        :markdown-it
          - **CV Knob** (left): sets the CV/Note value of that step.
          - **Route Knob** (right): alters the probability to pick the top or the bottom node on the next step when stepping **Forward⯈**. If the knob's arrow points to the right, that means 50/50. They're not present on the last step, since it always leads back to the first. Because of floating point math imprecision, sometimes the probabilities displayed on the LCD are off by 0.1%.
          - **Gate Output**: when the node is active, passes through the gate or step inputs received on any of the directional inputs, or sends 10V continuously if no step input is plugged in.

      Protip(align="left")
        :markdown-it
          If someone tells you they're painstakingly programming **Darius** manually, they're lying. Everyone justs uses the Randomize buttons a few hundred times until they come up with a masterpiece.

    ModuleSubSection(subtitle="Steps" align="right")
      ModuleBox(align="right")
        :markdown-it
          On the top-left of the module, you can control progress through the steps.
      ModuleBox(align="right" jack="out" to="darius" :x="145/960" :y="133/760")
        :markdown-it
          **⯇Back**, **Up⯅**, **Down⯆**, **Forward⯈**: Takes a step in the corresponding direction when it receives a gate or a trigger.

          Stepping **Up⯅** or **Down⯆** advances a step in the corresponding direction, it's used to force the module to take a certain route, but can't be used to move within the same step. They move diagonally only.

          Going **⯇Back** remembers the path you've taken, and does nothing if you're already on the first step.
      ModuleBox(align="right")
        :markdown-it
          **Step**: The manual button below **Forward⯈** works even if the module isn't running.
      ModuleBox(align="right" jack="out" to="darius" :x="27/960" :y="251/760")
        :markdown-it
          **Run**: Starts and stops accepting directional inputs.
      ModuleBox(align="right" jack="out" to="darius" :x="145/960" :y="251/760")
        :markdown-it
          **Reset**: Go back to the first node. After a reset, step signals are ignored for a millisecond. Doing that is a best practice to [avoid a lot of problems](https://github.com/MarcBoule/ImpromptuModular/#on-resets-clocks-and-run-states-).
      ModuleBox(align="right")
        :markdown-it
          Those step inputs are generally connected to the corresponding output of a clock, but anything that sends gates or triggers will work. Triggers are accepted polyphonically, which is useful for creative self-patching via a [poly merge](/modules/splitmerge) module.
      ModuleBox(align="left")
        :markdown-it
          Next to the step inputs are **Step Range Knobs**, to choose on which step to start and end the pattern, from 1 to 8 steps in total.
      ModuleBox(align="left")
        :markdown-it
          To the right of those knobs, the **Randomize Buttons** allow you to randomize CV and routes separately from other parameters. If you don't like the results, you can use `Edit > Undo`.
      ModuleBox(align="center")
        :markdown-it
          If you send triggers to the directional inputs at the exact same time (that is, the exact same _sample_), only one will be accepted.

          The priority, from most to least important, is **Forward⯈** > **Up⯅** > **Down⯆** > **⯇Back**.

          If you want a different priority, you can patch logic gates with modules such as [Count Modula's](https://library.vcvrack.com/CountModula) to do that. If the priorities aren't working as expected, do not forget that every single cable a signal travels through adds at least one sample of delay, so your triggers might not be actually simultaneous.
      Protip(align="center")
        :markdown-it
          You just need the **Forward⯈** input, really. Ignore the others, I just added them because some nerds wouldn't stop bothering me about it on Github.


    ModuleSubSection(subtitle="LCD Area" align="right")
      ModuleBox(align="right")
        :markdown-it
          Most knobs show you their value on the LCD. It's particularly useful for the CV knobs.
      ModuleBox(align="right")
        :markdown-it
          **CV/Quantize Rocker Switch**: Whether to output precise CV (best for modulation), or quantized V/OCT CV (Twelve-tone Equal Temperament only - the usual Western tuning system).
      ModuleBox(align="right")
        :markdown-it
          **-5V\~5V/0V\~10V Rocker Switch**: In CV mode, selects if the knobs output voltage from 0V to 10V, or -5V to 5V.

          In quantized mode, removes 1 octave from the output.
      ModuleBox(align="right")
        :markdown-it
          **Min Knob** and **Max Knob**: Limit the CV output range. The words are only suggestions, if the **Min** is larger than the **Max**, it just flips in which direction the **CV** knobs operate.
      ModuleBox(align="right")
        :markdown-it
          **Key Knob** and **Scale Knob**: Select which notes to quantize to when in Quantize mode. The available scales are the same as in the [QQQQ](/modules/qqqq) modules.
      ModuleBox(align="right" jack="out" to="darius" :x="411/960" :y="585/760")
        :markdown-it
          **Poly External Scale**: Accepts the scale in the [Poly External Scale](/modules/poly-external-scale) format, compatible with my other modules. You can use Darius as an arpeggiator by sending it a chord rather than a full scale!
      ModuleBox(align="right")
        :markdown-it
          **Slide**: The fun knob.
      ModuleBox(align="right" jack="in" to="darius" :x="470/960" :y="662/760")
        :markdown-it
          **Global Gate**: Passes through the gate or step inputs received on any of the directional inputs, or sends a short trig if operated via the manual Step button. It's useful if are controlling Darius using more than one directional input.
      ModuleBox(align="right" jack="in" to="darius" :x="529/960" :y="662/760")
        :markdown-it
          **CV**: The main output.
      Protip(align="right")
        :markdown-it
          The plural of **Darius** is **Darii**.


    ModuleSubSection(subtitle="Setting the random seed" align="left")
      ModuleBox
        :markdown-it
          On the bottom-right, next to my signature, are two inputs used to fix the random seed, if you want **Darius** to be a bit more deterministic. If this section makes no sense, it's entirely safe to ignore.
      ModuleBox(jack="out" to="darius" :x="647/960" :y="662/760")
        :markdown-it
          **Random**: When the input is not patched, or when it's receiving 0V, **Darius** flips the coin using its own random seed. But when it's receiving a seed, the coin flips become deterministic - it will take the same route every time, until the seed changes.

          Try out alternating, every bar, sending it an arbitrary fixed voltage such as 4.58V then 0V, to create call-and-response phrases where the first part is always the same.
      ModuleBox
        :markdown-it
          **1st/All Rocker Switch**: Decides whether to plan out the route on the first step, or whether to flip the coin at last moment.

          In **1st** mode, going back and forth repeatedly results in the same path (unless you alter the routes), until the first node is reached from step 8 (it won't refresh it if you reach the first node from stepping back). In effect, it acts as a sample and hold for the **Random** input at the exact moment the first node is _left_.


    ModuleSubSection(subtitle="Right-click options" align="right")
      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/darius/menu.png").float-left
        :markdown-it
          Via the **right-click menu**, you can load various presets for the CV and routes, and copy/paste [Portable Sequences](https://github.com/squinkylabs/SquinkyVCV/blob/master/docs/clipboard-format.md).

          When you **Copy** a sequence, you copy one random possible path Darius could take (or the current path it will take if there is an external **Random** seed).

          When you **Paste** a sequence, you paste its first 8 notes to each step, rather than each node: each node of a same step will receive the same note for you to use as a new point of departure.

          After pasting, be sure to set the **Min** and **Max** knobs to the maximum range to obtain accurate data.

  ModuleMainSection(title="Darius" illustration="arcade" align="left" displaytitle="none")
    ModuleSubSection(subtitle="Warning!" align="left")
      ModuleBox(align="left")
        :markdown-it
          **Darius** is named after Taito's eponymous shoot-em-up arcade game series, known for its surreal visuals, its fish-themed enemies, its [unique soundtracks](https://www.youtube.com/watch?v=6FEdlAL3bX0), its multi-display arcade cabinets, and for allowing the player to select their route through the game via a branching map that inspired the module's main gimmick.

          A silhouette of **King Fossil** adorns the module.

      ModuleBox(align="right")
        :markdown-it
          **Darius** has a simple panel, easily understood features, and can never be truly tamed - by design. It is meant to be easy to learn, surprising to use, and impossible to master. It can be used as a melody sequencer, an arpeggiator, a source of modulation, or even as a drum sequencer.

          Many of its apparent limitations can be overcome with a bit of creative patching, and its randomness can be kept in check by manipulating the seed.

      ModuleBox(align="right")
        :markdown-it
          In its default configuration, the possibility space of **Darius** is very large: if you restrict it, it becomes less chaotic.

          The default routes follow a normal distribution: one that skews very heavily towards the center. By loading a different route preset from the right-click menu, you can have a more constrained starting point.

      ModuleBox(align="right")
        :markdown-it

          **Darius** works wonderfully with [Stoermelder](https://library.vcvrack.com/Stoermelder-P1)'s [CV-MAP](https://library.vcvrack.com/Stoermelder-P1/CVMap) to give you CV control over the knobs, and [8FACE](https://library.vcvrack.com/Stoermelder-P1/EightFace) to make it easy to switch between multiple preset banks.







</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Darius - Aria Salvatrice’s Synthesizer Modules'
  }
}
</script>
