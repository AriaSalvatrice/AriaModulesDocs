<template lang="pug">
div
  #bg-text(aria-hidden="true")
  #article-page
    .title
      nuxt-link.back(to="/") ◀
        span &nbsp;Home
      h1 &nbsp;{{ title }}&nbsp;
      h2 &nbsp;{{ subtitle }}&nbsp;
  .flex.justify-center
    .container.flex-wrap
      #article-text
        nuxt
        img(src="/modules/signature-article.png" alt="-Aria Salvatrice").mt-12
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


#article-page
  hr
    border none
    margin-bottom 15rem
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
  #article-page
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

#article-text
  width 100%
  margin 12rem 0 5rem 0
  padding 9%
  color $lightest alpha($darkest, 0.85)
  font-size 1.2rem
  text-shadow -3px 1px $darkest, -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest
  p
    margin-bottom 1.4rem
  h3
    font-family $francois
    font-size 3rem
    margin-top 3rem
  h4
    font-family $francois
    font-size 2rem
    margin-top 2rem
  ul
    li
      position relative
      margin-bottom 1.2rem
    li:before
      position absolute
      left -1.4rem
      content "☆"
  ol
    li
      position relative
      counter-increment i
      margin-bottom 1.2rem
    li:before
      position absolute
      left -1.8rem
      content counter(i) "."
  a:link, a:visited
    text-decoration underline
    color $pink
    transition color 0.4s
  a:focus, a:hover, a:active
    color $yellow
  strong
    color $yellow
    font-weight 400
  table
    margin-bottom 2rem
    tr
      th
        border-bottom $lightest 3px solid
        color $yellow
        text-align left
        padding 0.1rem 0.7rem 0.1rem 0
        font-family $francois
        font-weight 400
      td
        border-top $lightest 1px solid
        padding 0.1rem 0.7rem 0.1rem 0

</style>
