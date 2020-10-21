<template lang="pug">
article
  :markdown-it
    In my modules, I frequently make use of the ability to quantize to a scale or chord, using a polyphonic cable to transfer external scales between devices.

    I am calling it the **Poly External Scale** format. This format is drafted primarily considering the uses I personally have in mind for it, and the many ways I expect to use it in the future.

    I encourage other developers to use it, if it makes sense for their module. And if it doesn't make sense, I'm requesting you avoid using the term "Poly External Scale" in your modules - it's a specific enough name it should not be a problem.

    ### Specification

    - The format is concerned with sharing data about the 12 semitones of an octave. It is not concerned with _which_ octave it is.
    - A Poly External Scale has 12 channels, one per semitone of the octave. The first channel is C, the second C#, and so on. Twelve-tone equal temperament is assumed.
    - The valid range of voltage for each channel is 0V~10V.
    - You are not guaranteed specific voltages: your module should accept any valid input and do something sensible with it.
    - When a channel recives less than 0.1V, it is considered to receive 0V.
    - Modules sending a scale should use 0V for a disabled semitone, 8V for an enabled semitone, and optionally, 10V for the tonic _if it is known_.
    - Modules sending probabilities should use the full range: 0.1V for 1%, 10V for 100%.
    - Modules that accept a scale to determine which notes are enabled or disabled should accept any input above 0.1V as enabled, and pick the channel with the highest value as the tonic if this information is used.
    - Jacks that support the format should be named something such as "Ext.", "Ext. scale", "PES", "Poly External Scale", etc.
    - In the documentation, name it "Poly External Scale" consistently, and mention it's compatible with modules by other developers.

    This format is very self-evident, so I can't claim any degree of ownership over it. I just think it would be useful for users to have a consistent naming scheme for it, so I'm proposing one. When users see "Poly External Scale", they know it's probably compatible.

    A scale is just 12 bits of data: for sending data in between quantizers, it would have been a higher performance solution to send it encoded as voltage. However, such a format would not be intuitively hackable by the user, and that's what matters to me. You can understand Poly External Scales simply by observing and altering their values, you don't have to read this document or do maths to understand them.

    ### VCV Rack compatible modules that work with Poly External Scales

    Developer                      | Module name                                                                                 | Notes
    -------------------------------|---------------------------------------------------------------------------------------------|---------------
    Aria Salvatrice                | [Arcane](https://library.vcvrack.com/AriaSalvatrice/Arcane)                                 | Enabled notes are 8V. No tonic information provided.
    Aria Salvatrice                | [Atout](https://library.vcvrack.com/AriaSalvatrice/Atout)                                   | Enabled notes are 8V. No tonic information provided.
    Aria Salvatrice                | [Darius](https://library.vcvrack.com/AriaSalvatrice/Darius)                                 | Anything above 0.1V is a valid quantization target.
    Aria Salvatrice                | [Quatherina's Quality Quad Quantizer](https://library.vcvrack.com/AriaSalvatrice/Qqqq)      | Input: Anything above 0.1V is a valid quantization target. Output: Enabled notes are 8V. If the note on the Key knob is part of the current scale on the piano display, then it is sent as 10V.
    Aria Salvatrice                | [Quack](https://library.vcvrack.com/AriaSalvatrice/Quack)                                   | Same as above.
    Aria Salvatrice                | [Q<](https://library.vcvrack.com/AriaSalvatrice/Q)                                          | Input only: Anything above 0.1V is a valid quantization target.
    Aria Salvatrice                | [Quale](https://library.vcvrack.com/AriaSalvatrice/Quale)                                   | Anything above 0.1V is a valid chord target in Scale > Chord. Enabled notes are 8V in Chord > Scale.
    Aria Salvatrice                | [Modulus Salomonis Regis](https://library.vcvrack.com/AriaSalvatrice/Solomon8)              | Anything above 0.1V is a valid quantization target.
    Aria Salvatrice                | [Modulellus Salomonis Regis](https://library.vcvrack.com/AriaSalvatrice/Solomon4)           | Anything above 0.1V is a valid quantization target.
    Aria Salvatrice                | [Modulissimus Salomonis Regis](https://library.vcvrack.com/AriaSalvatrice/Solomon16)        | Anything above 0.1V is a valid quantization target.
    Aria Salvatrice                | [Grabby](https://library.vcvrack.com/AriaSalvatrice/Grabby)                                 | Input only: Anything above 0.1V is a valid quantization target.
    Aria Salvatrice                | [Rotatoes](https://library.vcvrack.com/AriaSalvatrice/Rotatoes4)                            | Input only: Anything above 0.1V is a valid quantization target.
    Grande                         | [Quant](https://library.vcvrack.com/GrandeModular/Quant)                                    | While not supporting PES, independently implemented a compatible format: disabled steps are 0V, enabled steps are 10V, but it will also accept 8V. Input only.
    Grande                         | [Scale](https://library.vcvrack.com/GrandeModular/Scale)                                    | While not supporting PES, independently implemented a compatible format: disabled steps are 0V, enabled steps are 10V. Output only.
    Purr Software                  | [Meander](https://library.vcvrack.com/PS-PurrSoftware/Meander)                              | Output only: current notes of Meander's scale are 8V, and the tonic 10V.


    Please contact me at <woof@aria.dog> if you implement Poly External Scales to be added to this page.


</template>

<script>
export default {
  layout: 'article',
  mounted() {
    this.$store.commit('moduletitle/changeTitle', "Poly External Scales")
    this.$store.commit('moduletitle/changeSubtitle', "Specification Draft")
  },
  head: {
    title: 'Poly External Scales - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
