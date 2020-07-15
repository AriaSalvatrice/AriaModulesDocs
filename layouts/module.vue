<template lang="pug">
div
  #bg-text(aria-hidden="true")
  #module-page
    .title
      nuxt-link.back(to="/") ◀
        span &nbsp;All Modules
      h1 &nbsp;{{ title }}&nbsp;
      h2 &nbsp;{{ subtitle }}&nbsp;
    nuxt
  SiteFooter
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.moduletitle.title
    },
    subtitle () {
      return this.$store.state.moduletitle.subtitle
    }
  },
}
</script>

<style lang="stylus">
.back
  position fixed
  display inline-block
  top 2.8rem
  left 1.5rem
  font-family $abril
  color $yellow
  text-shadow -4px 2px $darkest, -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest
  transition all 0.3s
  padding 0.4rem 1rem 0.4rem 0.4rem
  z-index 10000
  span
    display none
.back:hover
  color $dark
  background-color $yellow
  text-shadow none
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
@screen xl
  .back span
    display inline


#module-page
  hr
    border none
    margin-bottom 15rem
  .title
    position fixed
    top 2rem
    width 100%
    font-family $francois
    font-size 2.5rem
    color $dark
    background-color $pink
    outline 0.5rem solid $yellow
    text-align center
    overflow none
    z-index 1000
    h1, h2
      margin 0
      padding 0
    h2
      position relative
      top -0.5rem
      margin-left 0.5rem
      font-size 1.5rem

</style>
