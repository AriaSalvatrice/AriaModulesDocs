<template lang="pug">
article
  :markdown-it
    In my modules, I frequently make use of the ability to quantize to a scale or chord, using a polyphonic cable to transfer external scales between devices.

    I am calling it the **Poly External Scale** format. This format is drafted primarily considering the uses I personally have in mind for it, and the many ways I expect to use it in the future.

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
