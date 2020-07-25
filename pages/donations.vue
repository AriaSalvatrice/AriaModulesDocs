<template lang="pug">
article
  :markdown-it
    The Aria Salvatrice Signature Series modules are free software.

    If you wish to send me a tip for my modules, at this time, donations can only be accepted in the form of [pay-what-you-want album purchases](https://ariasalvatrice.bandcamp.com/releases). Feel free to send me a message along with the donation: <woof@aria.dog>!

    I am looking into providing more convenient donation options in the future, since bandcamp takes their cut and requires you to make a purchase you might not be interested in. It is unfortunately difficult to find a payment processor that operates legally in France but respects the choice of individuals to go by a chosen name. Thank you for your understanding.

</template>

<script>
export default {
  layout: 'article',
  mounted() {
    this.$store.commit('moduletitle/changeTitle', "Donations")
    this.$store.commit('moduletitle/changeSubtitle', "Thank you for enjoying my art")
  },
  head: {
    title: 'Donations - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
