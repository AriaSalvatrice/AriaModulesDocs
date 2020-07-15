<template lang="pug">
.boxcontainer(v-bind:style="{ 'align-items': computedAlignment }" v-observe-visibility="{callback: updateVisibility}")
  .box
    .jackContainer(ref="jackcontainer" v-bind:style="{ 'float': computedJackFloat }")
      template(v-if="jack === 'in'")
        img.jack.in(src="/modules/jack-in.png")
      template(v-if="jack === 'out'")
        img.jack.out(src="/modules/jack-out.png")
    template(v-if="jack === 'in' || jack === 'out'")
      Cable(v-if="cableVisible" :fromX="fromX" :fromY="fromY" :toX="x" :toY="y" :to="to")
    slot
</template>

<style lang="stylus" scoped>
.boxcontainer
  @apply flex flex-col;
  .box
    width 30rem
    max-width 90vw
    margin 5rem
    padding 1.5rem
    color $lightest alpha($darkest, 0.8)
    box-shadow -12px 12px $darkest
    text-shadow -1px 1px #00000088
    font-size 1.2rem
    .jack
      padding 1.2rem 1rem 0.1rem 1rem
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
</style>

<script>

import _ from 'lodash'

export default {
  props: {
    align: {
      type: String,
      required: false,
      default: "left"
    },
    jack: {
      type: String,
      required: false,
      default: ""
    },
    x: {
      type: Number,
      required: false,
      default: 0
    },
    y: {
      type: Number,
      required: false,
      default: 0
    },
    to: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      fromX: 0,
      fromY: 0,
      cableVisible: false
    }
  },
  mounted() {
    this.calcBox()
    window.addEventListener("scroll", this.onUpdate)
    window.addEventListener("resize", this.onUpdate)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onUpdate)
    window.removeEventListener("resize", this.onUpdate)
  },
  methods: {
    calcBox() {
      this.fromX = this.$refs["jackcontainer"].getBoundingClientRect().x
      this.fromY = this.$refs["jackcontainer"].getBoundingClientRect().y
    },
    onUpdate(e) {
      this.calcBox()
    },
    updateVisibility(isVisible, entry) {
      if (isVisible) {
        this.cableVisible = true
      } else {
        this.cableVisible = false
      }
    }
  },
  computed: {
    computedAlignment: function () {
      if (this.align === "center") { return "center" }
      if (this.align === "right")  { return "flex-end" }
      return "flex-start"
    },
    computedJackFloat: function() {
      if (this.align === "right")  { return "left" }
      return "right"
    },
  }
}
</script>