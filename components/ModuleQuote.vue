<template lang="pug">
.boxcontainer(v-bind:style="{ 'align-items': computedAlignment }")
  .box
    slot
</template>

<style lang="stylus" scoped>
.boxcontainer
  @apply flex flex-col;
  .box
    width 30rem
    max-width 90vw
    margin 5rem 0
    padding 1.5rem
    color $dark alpha($lightest, 0.8)
    box-shadow -12px 12px $darkest
    // text-shadow -1px 1px #00000088
    font-family $francois
    font-size 1.4rem
    .jack
      padding 1.2rem 1rem 0.1rem 1rem
      display none
    a:link, a:visited
      text-decoration underline
      color $pink
      transition color 0.4s
    a:focus, a:hover, a:active
      color $yellow
    p
      margin-bottom 1.2rem
    strong
      color $yellow
    ul
      li
        position relative
      li:before
        position absolute
        left -1rem
        content "☆"
@screen lg
  .boxcontainer
    .box
      margin 5rem
      .jack
        display inline-block
</style>

<script>

import _ from 'lodash'

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
