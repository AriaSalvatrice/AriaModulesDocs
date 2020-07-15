<template lang="pug">
transition(name="fadecable")
  svg.cableoverlay
    circle.outer(
      :cx="computedFromX"
      :cy="computedFromY"
      r="15"
      fill="#083d45"
      stroke-width="5"
    )
    circle.outer(
      :cx="computedToX"
      :cy="computedToY"
      r="15"
      fill="#083d45"
      stroke-width="5"
    )
    path.outer(
      :d="computedPath"
      fill="none"
      stroke-width="14"
    )

    circle.inner(
      :cx="computedFromX"
      :cy="computedFromY"
      r="13"
      fill="#083d45"
      stroke-width="5"
    )
    circle.inner(
      :cx="computedToX"
      :cy="computedToY"
      r="13"
      fill="#083d45"
      stroke-width="5"
    )
    path.inner(
      :d="computedPath"
      fill="none"
      stroke-width="10"
    )

    circle.outer(
      :cx="computedFromX"
      :cy="computedFromY"
      r="10"
      fill="#ffcc03"
      stroke-width="3"
      stroke="#083d45"
    )
    circle.outer(
      :cx="computedToX"
      :cy="computedToY"
      r="10"
      fill="#ffcc03"
      stroke-width="3"
      stroke="#083d45"
    )

</template>

<style lang="stylus" scoped>
.cableoverlay
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  pointer-events none
  z-index 100
  opacity 0.7
  .inner
    stroke $lightest
  .outer
    stroke $darkest

.fadecable-enter-active, .fadecable-leave-active, .fadecable-appear-active
  transition all 0.1s
.fadecable-enter, .fadecable-leave-to, .fadecable-appear
  opacity 0


</style>

<script>
export default {
  props: {
    fromX: {
      type: Number,
      required: true,
    },
    fromY: {
      type: Number,
      required: true,
    },
    toX: {
      type: Number,
      required: true,
    },
    toY: {
      type: Number,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      viewportWidth: 0,
      viewportHeight: 0,
      rect: []
    }
  },
  mounted() {
    this.viewportWidth = window.innerWidth
    this.viewportHeight = window.innerHeight
    window.addEventListener("resize", this.onUpdate)
    document.addEventListener("scroll", this.onUpdate)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onUpdate  )
    document.removeEventListener("scroll", this.onUpdate  )
  },
  methods: {
    onUpdate(e) {
      this.viewportWidth = window.innerWidth
      this.viewportHeight = window.innerHeight

      let rect = document.getElementById(this.to).getBoundingClientRect()
      this.rect = rect

      console.log( rect )

    }
  },
  computed: {
    computedFromX: function () {
      return this.fromX + 40
    },
    computedFromY: function () {
      return this.fromY + 43
    },
    computedToX: function () {
      let x = this.rect.left
      x += this.toX * this.rect.width
      x += 23.5
      return x
    },
    computedToY: function () {
      let y = this.rect.top
      y += this.toY * this.rect.height
      y += 23.5
      return y
    },
    computedPath: function () {
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
      // I hate myself
      let qx = (this.computedToX + this.computedFromX) / 2
      let qy = (this.computedToY + this.computedFromY) / 2 + 500
      let d = ""
      d += "M " + this.computedFromX +  "  " + this.computedFromY + " "
      d += "Q " + qx + " " + qy  + " "
      d += this.computedToX + " " + this.computedToY
      return d
    },
  }
}
</script>
