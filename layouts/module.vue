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
  head: {
    meta: [
      { hid: 'description', name: 'description', content: 'Cool and nice modules what for VCV Rack.' }
    ]
  }
}
</script>


<style lang="stylus">
.back
  position fixed
  display inline-block
  top 0.5rem
  left 0.5rem
  font-family $abril
  color $yellow
  text-shadow -4px 2px $darkest, -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest
  transition all 0.3s
  padding 0.3rem 1rem 0.3rem 0.4rem
  z-index 10000
  font-size 2rem
  span
    display none
.back:hover
  color $dark
  background-color $yellow
  text-shadow none
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
@screen md
  .back
    top 1.2rem
    left 1.5rem
    font-size 2.5rem
@screen xl
  .back span
    display inline


#module-page
  hr
    border none
    margin-bottom 25rem
  .title
    position fixed
    top 0
    width 100%
    font-family $francois
    color $dark
    background-color $pink
    border-top 0.5rem solid $yellow
    border-bottom 0.5rem solid $yellow
    text-align center
    overflow none
    z-index 1000
    h1, h2
      position relative
      top -0.3rem
      margin 0
      padding 0
      font-size 1.6rem
    h2
      position relative
      top -0.6rem
      margin-left 0.5rem
      font-size 1.2rem
      height 1.3rem
@screen md
  #module-page
    .title
      top 0.4rem
      font-size 2.5rem
      h1
        top -0.4rem
        font-size 2.5rem
      h2
        top -1.0rem
        margin-left 0.5rem
        font-size 1.5rem
        height 1.3rem
</style>
