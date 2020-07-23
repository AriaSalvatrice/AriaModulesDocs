<template lang="pug">
.protipcontainer(v-bind:style="{ 'align-items': computedAlignment }")
  .protip
    img.dogwink(src="/modules/dogwink.svg")
    h3
      | Protip
      |
      span for cool kids only

    slot
</template>

<style lang="stylus" scoped>
@keyframes scroll
  0%
    background-position 0 0
  100%
    background-position -200px 600px

.protipcontainer
  .protip
    font-family $francois
    width 30rem
    max-width 90vw
    margin 1rem
    padding 1.5rem
    color $dark $yellow
    background-image url('/modules/protip.png')
    box-shadow -12px 12px $darkest
    border 3px solid $darkest
    font-size 1.2rem
    position relative
    animation 12s linear infinite scroll
    .dogwink
      position absolute
      top -4.5rem
      right 0
      size 7rem
      filter drop-shadow( -6px 3px $darkest ) drop-shadow( -2px -2px 0 $darkest ) drop-shadow( 2px -2px 0 $darkest) drop-shadow( -2px 2px 0 $darkest ) drop-shadow( 2px 2px 0 $darkest)
    h3
      display inline-block
      font-family $abril
      font-size 1.8rem
      span
        font-size 1.2rem
    a:link, a:visited
      text-decoration underline
      color $pink
      transition color 0.4s
    a:focus, a:hover, a:active
      color $light
    p
      margin-bottom 1.2rem
    strong, a
      color $pink
      text-shadow -1px -1px 0 $dark, 1px -1px 0 $dark, -1px 1px 0 $dark, 1px 1px 0 $dark
    ul
      li
        position relative
      li:before
        position absolute
        left -1rem
        content "☆"
@screen md
  .protipcontainer
    @apply flex flex-col;
    .protip
      transform skew(-8deg, -5deg)
      max-width 90vw
      margin 5rem
      .dogwink
        top -2rem
        right -2rem
      h3
        font-size 3rem
        span
          font-size 1.7rem
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
