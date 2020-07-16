<template lang="pug">
section.modulesubsection(v-observe-visibility="{callback: changeSubtitle}")
  .subtitlealign(v-bind:style="{ 'align-items': computedAlignment }")
    h2 {{ subtitle }}
  slot
</template>

<style lang="stylus" scoped>
.modulesubsection
  margin 0
  .subtitlealign
    @apply flex flex-col items-center;
    h2
      width 30rem
      max-width 90vw
      margin 10rem 0 0
      padding 1rem
      box-shadow -12px 12px $darkest
      font-size 2rem
      font-family $francois
      color $lightest $dark
      text-shadow: -3px 3px #00000088
@screen lg
  .modulesubsection
    min-height 100vh
    .subtitlealign
      h2
        margin 10rem 5rem 0


// Merge with h1 above, but only if it's displayed
.titlealign + .modulesubsection .subtitlealign h2
  padding-top 0rem
  margin-top 0
</style>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: true
    },
    align: {
      type: String,
      required: false,
      default: "left"
    }
  },
  computed: {
    computedAlignment: function () {
      if (this.align === "center") { return "center" }
      if (this.align === "right")  { return "flex-end" }
      return "flex-start"
    }
  },
  methods: {
    changeSubtitle(isVisible, entry) {
      if (isVisible) {
        this.$store.commit('moduletitle/changeSubtitle', this.subtitle)
      }
    }
  }
}
</script>
