<template lang="pug">
.moduleillustration
  transition(name="fadeillustration")
    .imagecontainer(v-if="isVisible")
      img(:src="src" alt="" :id="id")
  .preload
    img(:src="src" alt="")
</template>

<style lang="stylus">
.moduleillustration
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index -10
  @apply flex items-center justify-center self-center;
  .preload // Hidden away
    position fixed
    left -100rem
    z-index -100
  .imagecontainer
    position fixed
    top 10rem
    box-shadow -12px 12px $darkest
    border 3px solid $darkest
  img
    position relative
    max-width 95vw
    max-height 90vh
  .fadeillustration-enter-active, .fadeillustration-leave-active
    transition all 0.4s
  .fadeillustration-enter, .fadeillustration-leave-to
    opacity 0.2
    transform rotateY(90deg)
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: false,
      default: ""
    }
},
  computed: {
    isVisible: function () {
      if (this.$store.state.moduleillustration.illustration == this.id) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
