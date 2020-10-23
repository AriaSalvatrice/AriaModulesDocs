<template lang="pug">
article
  :markdown-it
    [No new modules will be created for the time being](https://rentry.org/awrgi). Thank you for your understanding.



</template>

<script>
export default {
  layout: 'article',
  mounted() {
    this.$store.commit('moduletitle/changeTitle', "Future plans")
    this.$store.commit('moduletitle/changeSubtitle', "Free for adoption to a good home")
  },
  head: {
    title: 'Future Plans - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
