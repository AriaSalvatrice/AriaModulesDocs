<template lang="pug">
.protipcontainer(v-bind:style="{ 'align-items': computedAlignment }")
  .protip
    h3
      | Protip
      span  for cool kids only

    slot
</template>

<style lang="stylus" scoped>
.protipcontainer
  @apply flex flex-col;
  .protip
    font-family $francois
    width 30rem
    max-width 90vw
    margin 5rem
    padding 1.5rem
    color $dark $yellow
    box-shadow -12px 12px $darkest
    border 3px solid $darkest
    font-size 1.2rem
    transform skew(-8deg, -5deg)
    h3
      display inline-block
      font-family $abril
      font-size 3rem
      span
        font-size 1.7rem
    a:link, a:visited
      text-decoration underline
      color $pink
      transition color 0.4s
    a:focus, a:hover, a:active
      color $yellow
    p
      margin-bottom 1.2rem
    strong
      color $pink
      text-shadow -1px -1px 0 $dark, 1px -1px 0 $dark, -1px 1px 0 $dark, 1px 1px 0 $dark
    ul
      li
        position relative
      li:before
        position absolute
        left -1rem
        content "☆"
</style>

<script>

export default {
  props: {
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
    },
  }
}
</script>
