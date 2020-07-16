<template lang="pug">
.imageinsert
  img(:src="src" alt="")
  .shadow
</template>

<style lang="stylus" scoped>
.imageinsert
  margin 0.3rem 0.5rem 0.1rem
  position relative
  .shadow
    position absolute
    width 100%
    height 100%
    box-shadow inset 0 0 3px 3px #083d45ee
    border 1px solid $darkest
    top 0
    left 0

</style>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
}
</script>
