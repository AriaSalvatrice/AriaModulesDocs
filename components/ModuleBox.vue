<template lang="pug">
.boxcontainer(v-bind:style="{ 'align-items': computedAlignment }" v-observe-visibility="{callback: updateVisibility}")
  .box(v-bind:style="{ 'max-width': width }")
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
    min-width 30rem
    margin 5rem 0
    padding 1.5rem
    color $lightest alpha($darkest, 0.90)
    box-shadow -12px 12px $darkest
    text-shadow -1px 1px #00000088
    font-size 1.2rem
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
      font-weight 400
    ul
      li
        position relative
        margin-bottom 1.2rem
      li:before
        position absolute
        left -1rem
        content "☆"
    ol
      li
        position relative
        counter-increment i
        margin-bottom 1.2rem
      li:before
        position absolute
        left -1.2rem
        content counter(i) "."
    table
      margin-bottom 2rem
      tr
        th
          border-bottom $lightest 3px solid
          color $yellow
          text-align left
          padding 0.3rem 0.7rem 0.3rem 0
          font-family $francois
          font-weight 400
      tr
        td
          border-top $lightest 1px solid
          padding 0.3rem 0.7rem 0.3rem 0

@screen lg
  .boxcontainer
    .box
      margin 5rem
      .jack
        display inline-block
</style>

<script>

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
    width: {
      type: String,
      required: false,
      default: "30rem",
    }
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
