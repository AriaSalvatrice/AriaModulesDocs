<template lang="pug">
section.modulesection(v-observe-visibility="{callback: updateVisibility}")
  template(v-if="displaytitle != 'none'")
    .titlealign(v-bind:style="{ 'align-items': computedAlignment }")
      h1 {{ title }}
  slot
</template>

<style lang="stylus" scoped>
.modulesection
  margin 5rem 0 15vh 0
  .titlealign
    @apply flex flex-col;
    h1
      width 30rem
      max-width 90vw
      padding 1rem
      box-shadow -12px 12px $darkest
      font-size 3rem
      font-family $francois
      color $lightest $dark
      text-shadow: -3px 3px #00000088
@screen lg
  .modulesection
    min-height 100vh
    margin 15rem 0 75vh 0
    .titlealign
      h1
        margin 0 1rem 0

</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    displaytitle: {
      type: String,
      required: false,
      default: "visible"
    },
    align: {
      type: String,
      required: false,
      default: "left"
    },
    illustration: {
      type: String,
      required: false,
      default: ""
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
    updateVisibility(isVisible, entry) {
      if (isVisible) {
        this.$store.commit('moduletitle/changeTitle', this.title)
        if (this.illustration != "") {
          this.$store.commit('moduleillustration/changeIllustration', this.illustration)
        }
      }
    }
  }
}
</script>
