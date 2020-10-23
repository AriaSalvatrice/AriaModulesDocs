<template lang="pug">
#module-text

  ModuleIllustration#modulus(src="/modules/modulus/modulus.png")
  ModuleIllustration#modulellus(src="/modules/modulus/modulellus.png")
  ModuleIllustration#formfactors(src="/modules/modulus/formfactors.png")

  ModuleIllustration#patch1(src="/modules/modulus/patch1.png")
  ModuleIllustration#patch2(src="/modules/modulus/patch2.png")
  ModuleIllustration#patch3(src="/modules/modulus/patch3.png")
  ModuleIllustration#patch4(src="/modules/modulus/patch4.png")
  ModuleIllustration#patch5(src="/modules/modulus/patch5.png")

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="modulus" align="right")
    ModuleSubSection(subtitle="Conjuring Knowledge of the Arts" align="right")
      ModuleBox(align="right")
        :markdown-it
          **Modulus Salomonis Regis** is a faithful reproduction of a vintage hardware module created in 949 BC by Solomon, son of David, King of Israel.

      ModuleQuote(align="right")
        img(src="/modules/modulus/amdusias.png").float-right.w-48
        :markdown-it
          Amduscias a great and a strong duke, he commeth foorth as an unicorne, when he standeth before his maister in humane shape, being commanded, he easilie bringeth to passe, that trumpets and all musicall instruments may be heard and not seene, and also that trees shall bend and incline, according to the conjurors will, he is excellent among familiars, and hath nine and twentie legions.

          —Pseudomonarchia Daemonum, De praestigiis daemonum, Johann Weyer

      ModuleBox(align="right")
        :markdown-it
          Knowledge is granted to those who master sigils. By self-patching outputs back to inputs, you draw seals on the surface of the module. Should your sigil be well-conceived, you will gain grand knowledge.

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="formfactors" displaytitle="none")
    ModuleSubSection(subtitle="Form Factors" align="center")

      ModuleBox(align="center")
        :markdown-it
          The module is available in three different form factors. All three are identical, but offer a different amount of maximum nodes.

          - **Modulellus Salomonis Regis**: 4 maximum nodes, 30hp. This is good for chords.
          - **Modulus Salomonis Regis**: 8 maximum nodes, 50hp. This is the recommended variant.
          - **Modulissimus Salomonis Regis**: 16 maximum nodes, 89hp. You should not consider this one if this is your first ritual.
      ModuleBox(align="center")
        :markdown-it
          While I recommend you get started on **Modulus Salomonis Regis**, the 8 nodes version, in this documentation, we will use a picture of **Modulellus Salomonis Regis**, the 4 nodes version, to fit on the screen easier.

          Whenever **Modulus Salomonis Regis** is mentioned on this page, it is interchangeable with the two other variants.

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="modulellus" displaytitle="none" align="right")
    ModuleSubSection(subtitle="Getting started" align="right")
      ModuleBox(align="right")
        :markdown-it
          Understanding **Modulus Salomonis Regis** is easier if we create a little patch first, before explaining the controls in detail. You can follow along on any version of the module you want.

      ModuleBox(jack="out" to="modulellus" :x="207/900" :y="190/760" align="right")
        :markdown-it
          First, patch a clock to the **Forward** input. A LFO's square wave can also be used, if you don't have a clock.

      ModuleBox(align="right")
        :markdown-it
          Then, right-click the device and pick "Randomize all nodes" near the bottom.
        ModuleImageInsert(src="/modules/modulus/rightclick.png").float-left

      ModuleBox(jack="in" to="modulellus" :x="160/900" :y="633/760" align="right")
        :markdown-it
          Patch the CV out to the V/Oct input of an oscillator, and listen what happens.

      ModuleBox(jack="in" to="modulellus" :x="314/900" :y="574/760")
        :markdown-it
          Patch the **Gate** output of the first node to the any of the inputs labeled 1, directly above the segment display.
        ModuleImageInsert(src="/modules/modulus/selfpatch.png").float-left
        :markdown-it
          Listen what happens: every time the second node is reached, the note of the connected node changes by +1 or -1 scale degree. By default, the scale used is C Minor.

          Self-patching is the primary way of programming **Modulus Salomonis Regis**.

      ModuleBox
        :markdown-it
          Now, connect more outputs to inputs randomly, and listen to the results.

      ModuleBox
        :markdown-it
          **Modulus Salomonis Regis** is much easier to understand through experimentation than explanation. If any part of the manual is hard to understand, skip it for now.


      hr

    ModuleSubSection(subtitle="Step Inputs" align="right")
      ModuleBox(align="right")
        :markdown-it
          To move through the nodes, at least one of the five **Step Inputs** must receive triggers or gates.

      ModuleBox(jack="out" to="modulellus" :x="119/900" :y="101/760" align="right")
        :markdown-it
          **Queue**: Move to one of the enqueued nodes, selected at random from the queue if there is more than one. If no nodes are enqueued, then this input does nothing.
        ModuleImageInsert(src="/modules/modulus/queue.png").float-left
        :markdown-it
          Nodes can be added to the queue from their corresponding **Q (Queue)** jack, or by pressing their **Q (Queue)** button. When in the queue, the word **Queue** is lit on the segment display.
        ModuleImageInsert(src="/modules/modulus/keep.png").float-left
        :markdown-it
          When the rocker switch next to the **Queue** input is set to **Keep**, other enqueued steps will not be removed from the queue after one is picked at random. If it's set to **Reset**, then the queue will be emptied of the other options.

      ModuleBox(jack="out" to="modulellus" :x="30/900" :y="190/760" align="right")
        :markdown-it
          **Teleport**: Move to a random node.
        ModuleImageInsert(src="/modules/modulus/new.png").float-left.clear-both
        :markdown-it
          If the rocker switch is set to **New**, it will never teleport back to the current step (unless only a single step is enabled). If it is set to **Any**, then the current step will be considered a valid destination.

      ModuleBox(jack="out" to="modulellus" :x="60/900" :y="278/760" align="right")
        :markdown-it
          **Walk**: Move one node to the left or right randomly. When at either edge, wraps around.
        ModuleImageInsert(src="/modules/modulus/new.png").float-left.clear-both
        :markdown-it
          If the rocker switch is set to **New**, it will perform a random walk, 50/50. If it is set to **Any**, then there is 1 chance out of 3 of staying on the current step instead of walking.

      ModuleBox(jack="out" to="modulellus" :x="178/900" :y="278/760" align="right")
        :markdown-it
          **Back**: Move one node to the left. When at the beginning, wraps around.

      ModuleBox(jack="out" to="modulellus" :x="207/900" :y="190/760" align="right")
        :markdown-it
          **Forward**: Move one node to the right. When at the end, wraps around.

      ModuleBox(align="right")
        :markdown-it
          When multiple step inputs receive a gate or trigger at the exact same time, inputs are processed in the following order of priority: **Queue** > **Teleport** > **Walk** > **Back** > **Forward**. The arrow displayed on the summoning circle will remind you of this.

          You can exploit these priorities by sending different clock divisions to different inputs, or to patch a fallback option for the **Queue** input.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/modulus/nodes.png").float-left
        :markdown-it
          You can use the **Nodes** knob to use fewer nodes than the maximum. Unused nodes will be dimmer on the segment display. They can still be programmed, but they cannot be reached by **Step Inputs**.

    ModuleSubSection(subtitle="Step Windows" align="center")
      ModuleBox(align="center")
        :markdown-it
          As soon as a **Step Input** is accepted, a **Step Window** of 1 millisecond opens. During that time, the CV inputs of every node become active. Outside of **Step Windows**, the nodes will not react to CV input.

      Protip(align="center")
        :markdown-it
          Not only there is no good justification for trying to understand how **Step Windows** work, it's actually harmful to even attempt to.

      ModuleBox(align="center" width="60rem")
        :markdown-it
          Here's precisely how things happen:

          1. A valid **Step Input** is received. A **Step Window** opens for a millisecond.
          2. The CV inputs of nodes listen for incoming triggers or gates. They can't accept multiple triggers during the **Step Window**, either they receive something or nothing.
          3. The **Step Window** closes: every node processes every input it received. **Sub** and **Add** inputs can cancel out each other.
          4. The **Step** is applied: a **Global Trig** is sent, the **Global CV** is updated (with **Slide** if any), the current node's **Play** indicator lights up, and the new current node sends out its gate outputs continuously, until the next **Step Window** _closes_. Thus, the gates the current node is sending will be picked up during the next **Step Window**.
          5. The module waits 2 milliseconds before allowing another **Step Input** to be received.
          6. Once another **Step Input** is received, another **Step Window** opens for a millisecond.
          7. The outputs from _step 4_ are still active: if they are patched, they are picked up during this **Step Window**.
          8. The **Step Window** closes, and the outputs from _step 4_ no longer send output.

      ModuleBox(align="center")
        :markdown-it
          In software, every single patchcable adds one sample of latency to its signal, by design.

          The purpose of **Step Windows** is to make it easier to patch signals through external logic modules before patching them back into **Modulus Salomonis Regis**. So long as you pick logic modules that work at audio rates and do not add latency, you can patch a signal through more logic processors than you'd ever need and still make it in time to be picked up by the **Step Window**.

          The lowest sampling rate generally used for audio is 44,100 samples per second: that means at least 44 samples per millisecond, the duration of a **Step Window**.

          **Modulus Salomonis Regis** adds one millisecond of latency to incoming triggers, and can't move through more than 333 nodes per second. These limitations are negligible for most use cases.


    ModuleSubSection(subtitle="LCD & Programmer" align="right")
      ModuleBox(align="right")
        :markdown-it
          Below the **Step Input** are the **LCD** and **Programmer**.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/modulus/lcd.png").float-left
        :markdown-it
          The **LCD** shows you the note being played, the number of the current node, and gives you contextual information for a few seconds when you turn knobs.

      ModuleBox(jack="out" to="modulellus" :x="18.5/900" :y="633/760" align="right")
        ModuleImageInsert(src="/modules/modulus/save.png").float-right.clear-both
        :markdown-it
          The **Save** button saves the current node pattern in memory. There is only a single memory slot.

          The **Load** button loads it.

          As usual, I do not provide CV control over every button, but it's possible to automate them with [CV-MAP](https://library.vcvrack.com/Stoermelder-P1/CVMap) or [µMAP](https://library.vcvrack.com/Stoermelder-P1/CVMapMicro).

          The **Reset** jack listens to input **continuously**, not just during **Step Windows**. When it receives a trig or gate, its behavior can be customized from the **right-click menu**:

          - **Reset input goes back to the first step** (enabled by default)
          - **Reset input loads the saved pattern** (enabled by default)
          - **Reset input quantizes the pattern** (disabled by default)

          Multiple behaviors can be enabled simultaneously.
        ModuleImageInsert(src="/modules/modulus/rightclick.png").float-left.clear-both

      ModuleBox(jack="out" to="modulellus" :x="231/900" :y="479/760" align="right")
        ModuleImageInsert(src="/modules/modulus/key.png").float-left.clear-both
        :markdown-it
          The **Key** and **Scale** knobs allow you to select the scale from those provided by [QQQQ](/modules/qqqq).

          You can also use the **Poly External Scale** input to send the scale, using the [Poly External Scale](/modules/poly-external-scale) format shared by my modules.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/modulus/min.png").float-left.clear-both
        :markdown-it
          The **Min** and **Max** knobs allow you to restrict the range of pitches that can be selected before the node wraps around. Their naming is only a suggestion: it's safe for the **Min** to be higher than the **Max**.

      ModuleBox(align="right")
        ModuleImageInsert(src="/modules/modulus/slide.png").float-left.clear-both
        :markdown-it
          **Slide**: The fun knob.

      ModuleBox(jack="in" to="modulellus" :x="90/900" :y="633/760" align="right")
        :markdown-it
          A **Global Trig** is sent whenever a **Step Window** closes. It's a short trigger, not a gate, no matter the duration of the input.

      ModuleBox(jack="in" to="modulellus" :x="160/900" :y="633/760" align="right")
        :markdown-it
          The **Global V/Oct CV** output sends the V/Oct value of the current node, with **Slide** applied if any.

      ModuleQuote(align="right")
        img(src="/modules/modulus/beleth.png").float-right.w-48
        :markdown-it
          Bileth is a great king and a terrible, riding on a pale horsse, before whome go trumpets, and all kind of melodious musicke. When he is called up by an exorcist, he appeareth rough and furious, to deceive him. Then let the exorcist or conjuror take heed to himself; and to allaje his courage, let him hold a hazell bat in his hand, wherewithall he must reach out toward the east and south, and make a triangle without besides the circle; but if he hold not out his hand unto him, and he bid him come in, and he still refuse the bond or chain of spirits; let the conjuror proceed to reading, and by and by he will submit himselfe, and come in, and doo whatsoever the exorcist commandeth him, and he shalbe safe.

          —Pseudomonarchia Daemonum, De praestigiis daemonum, Johann Weyer

    hr

    ModuleSubSection(subtitle="Nodes")
      ModuleBox
        ModuleImageInsert(src="/modules/modulus/node.png").float-right
        :markdown-it
          Every node behaves identically, and can store four states:

          - **Pitch**: Only twelve-tone equal temperament notes, no arbitrary CV. The asterisk stands for "Sharp". After changing the scale, pitches are not automatically quantized.
          - **Play**: One and only one node is playing at all times. In addition to the play arrow, the node being played flashes for a split second when reached: it helps identifying repeating nodes, and helps you follow the movement when the module is heavily self-patched.
          - **Queue**: When added to the queue, a node can be picked by the **Queue Step Input**. The **Queue** marker will be cleared if the node is played via **Queue Step Input**, or if a **Queue Step Input** picks another node while in **Reset** mode. When reached from another **Step Input** than the **Queue Step Input**, the **Queue** marker is not lost.
          - **Delay**: The last node to have played has this **Delay** marker. If a node repeats, it will have the **Play** and the **Delay** marker at the same time.

      ModuleBox(jack="in" to="modulellus" :x="609/900" :y="574/760")
        :markdown-it
          The **Gate** output sends 10V continuously when the node starts **Playing**, until the next **Step Window** closes. When not playing, it sends 0V.

      ModuleBox(jack="in" to="modulellus" :x="668/900" :y="574/760")
        :markdown-it
          The **Coin Flip** output (labeled "**?**") has a 50% chance of sending 10V continuously when a node starts **Playing**, until the next **Step Window** closes. When not playing, it sends 0V.

          Want another probability than 50%? Use the **Gate** output with a [Bernoulli Gate](https://library.vcvrack.com/CountModula/Chances)!

      ModuleBox(jack="in" to="modulellus" :x="609/900" :y="668/760")
        :markdown-it
          The **Latch** output alternates sending 0V continuously and 10V continuously every time this specific node starts **Playing**, until the next **Step Window** closes. When not playing, it sends 0V.

      ModuleBox(jack="in" to="modulellus" :x="668/900" :y="668/760")
        :markdown-it
          The **Delay** output sends 10V continuously when the node obtains the **Delay** marker (that is, one step after it has **Played**), until the next **Step Window** closes. When not playing, it sends 0V.

          Remember, in many configurations, a node can play twice in a row, sending 10V on its **Gate** and **Delay** output simultaneously.

      ModuleBox(jack="in" to="modulellus" :x="639/900" :y="621/760")
        :markdown-it
          The **V/Oct CV** output sends the V/Oct value of the node at all times. It is not affected by the **Slide** knob. It's useful to craft chords with **Modulellus Salomonis Regis**, the 4-node version.

      Protip
        :markdown-it
          Do not limit yourself to drawing Goetic sigils on **Modulus Salomonis Regis**! There exists countless traditions cataloging the symbols to bring forth dangerous, malevolent entities into the material plane.

          If you manage to summon a new and exciting apparition, divinity, wanderer, wraith, ayakashi, jinn, zlydzen, yaoguai, etc, be sure to share your patch on [patchstorage.com](https://patchstorage.com/)!

      ModuleBox
        ModuleImageInsert(src="/modules/modulus/buttons.png").float-right
        :markdown-it
          Each node has three buttons, accepting input at all times. From left to right:

          - **Subtract 1 Scale Degree** (labeled **-1**): Subtracts 1 scale degree from the node, wrapping over and quantizing if necessary.
          - **Queue**: Toggles the **Queue** marker of the node.
          - **Add 1 Scale Degree** (labeled **+1**): Adds 1 scale degree to the node, wrapping over and quantizing if necessary.

      ModuleBox(jack="out" to="modulellus" :x="786/900" :y="101/760")
        :markdown-it
          The **Queue** input adds the node to the queue when it receives a gate or trigger during the **Step Window**.

      ModuleBox(jack="out" to="modulellus" :x="757/900" :y="160/760")
        :markdown-it
          The **Subtract Octave** input subtracts an octave from the node, wrapping over and quantizing if necessary, when it receives a gate or trigger during the **Step Window**. The corresponding **Add Octave** input to its right adds an octave instead.

      ModuleBox(jack="out" to="modulellus" :x="757/900" :y="219/760")
        :markdown-it
          The **Subtract 3 Scale Degrees** input subtracts 3 scale degrees from the node, wrapping over and quantizing if necessary, when it receives a gate or trigger during the **Step Window**. The corresponding **Add 3 Scale Degrees** input to its right adds 3 scale degrees instead.

      ModuleBox(jack="out" to="modulellus" :x="757/900" :y="278/760")
        :markdown-it
          **Subtract 2 Scale Degrees** and **Add 2 Scale Degrees**: same as above, with 2 scale degrees.

      ModuleBox(jack="out" to="modulellus" :x="757/900" :y="337/760")
        :markdown-it
          **Subtract 1 Scale Degree** and **Add 1 Scale Degree**: same as above, with 1 scale degree.

      ModuleBox
        :markdown-it
          Remember, every node input received during a **Step Window** will be processed.

          If you send both **Add 1 Scale Degree** and **Subtract 1 Scale Degree**, they cancel out each other.

          If you send both **Add 3 Scale Degrees** and **Add 2 Scale Degrees**, you will actually add 5 scale degrees.

      ModuleQuote(align="right")
        img(src="/modules/modulus/paimon.png").float-right.w-48
        :markdown-it
          Paimon is constrained by divine vertue to stand before the exorcist; where he putteth on the likenesse of a man: he sitteth on a beast called a dromedarie, which is a swift runner, and weareth a glorious crowne, and hath an effeminate countenance. There goeth before him an host of men with trumpets and well sounding cymbals, and all musicall instruments. At the first he appeereth with a great crie and roring, as in Circulo [Empto.] Salomonis, and in the art is declared. And if this Paimon speake sometime that the conjuror understand him not, let him not therefore be dismaied. But when he hath delivered him the first obligation to observe his desire, he must bid him also answer him distinctlie and plainelie to the questions he shall aske you, of all philosophie, wisedome, and science, and of all other secret things. And if you will knowe the disposition of the world, and what the earth is, or what holdeth it up in the water, or any other thing, or what is Abyssus, or where the wind is, or from whence it commeth, he will teach you aboundantlie.

          —Pseudomonarchia Daemonum, De praestigiis daemonum, Johann Weyer


    ModuleSubSection(subtitle="Right-click menu" align="center")
      ModuleBox(align="center")
        ModuleImageInsert(src="/modules/modulus/rightclick.png").float-right
        .clear-both
        :markdown-it
          In addition to the **Reset options** explained above, from the **Right-click menu**, you can:

          - **Copy Portable Sequence**: copies to the clipboard the current node pattern as a [Portable Sequence](https://github.com/squinkylabs/SquinkyVCV/blob/master/docs/clipboard-format.md).
          - **Paste Portable Sequence**: pastes from the clipboard a **Portable Sequence**
          - **Randomize all nodes**: sets all nodes to random notes in range from the current scale.
          - **Quantize all nodes**: quantizes them to the current scale.


    ModuleSubSection(subtitle="Sigils")
      ModuleBox
        :markdown-it
          To get you started, here's a few beginner rituals you can try out.

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="patch1" displaytitle="none")
      ModuleBox
        :markdown-it
          Send triggers to the **Queue Step Input** twice as fast as the **Forward Step Input**, stay in **Keep** mode, and randomly enable the queue of multiple steps at the same time: the module will have double time bursts once in a while.

          Module used: [Clocked](https://library.vcvrack.com/ImpromptuModular/Clocked)

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="patch2" displaytitle="none")
      ModuleBox
        :markdown-it
          Patch the **Latch** and the **Gate** output of the same node to inputs that partially cancel out each other. In this patch, the third node will alternate between gaining one and two scale degrees.

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="patch3" displaytitle="none")
      ModuleBox
        :markdown-it
          Just add cables all over the bloody thing at random.

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="patch4" displaytitle="none")
      ModuleBox
        :markdown-it
          Automate the **Slide** knob for instant 303 lines.

          Modules used: [UMIX](https://library.vcvrack.com/Bogaudio/Bogaudio-UMix), [µMAP](https://library.vcvrack.com/Stoermelder-P1/CVMapMicro)

  ModuleMainSection(title="Modulus Salomonis Regis" illustration="patch5" displaytitle="none")
      ModuleBox
        :markdown-it
          Send evolving chords as a **Poly External Scale**, set **Modulus Salomonis Regis** to only quantize the pattern upon reset from the right-click menu, and it will pick notes from the chord each time it reaches the first node.

          Modules used: [Knobs](https://library.vcvrack.com/VultModulesFree/UtilKnobs), [QQQQ](/modules/qqqq)


</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Modulus Salomonis Regis - Aria Salvatrice’s Synthesizer Modules'
  }
}
</script>
