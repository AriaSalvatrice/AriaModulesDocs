<template lang="pug">
h2(v-observe-visibility="{callback: changeSubtitle, throttle: 50}") {{ subtitle }}
</template>

<style lang="stylus" scoped>

</style>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: true
    }
  },
  methods: {
    changeSubtitle(isVisible, entry) {
      if (isVisible) {
        this.$store.commit('moduletitle/changeSubtitle', this.subtitle)
      }
      console.log(entry)
    }
  }
}
</script>
