<!-- FIXME: All of those should be sub-components -->
<template lang="pug">
section#videointro
  h2 Collection Video Intro
  p [Placeholder video]
  iframe(
    width='560'
    height='315'
    src='https://www.youtube-nocookie.com/embed/3v5JTpkD6pU'
    frameborder='0'
    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen=''
  )
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
#videointro h2
  font-family $abril
  margin auto
  width 90%
  font-size 2rem
  background-image linear-gradient(90deg, #00000044 0%, #00000000 100%)
  border 2px solid $pink
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
  transform skew(-8deg, -5deg)
  padding 0.3rem 4.3rem 0.3rem 0.6rem
  margin-bottom 3rem
  color $dark $yellow
  background-image linear-gradient(90deg, #ffffff00 0%, #ffffff44 100%)
@screen md
  #videointro h2
    width 700px
    font-size 4rem
@screen lg
  #videointro h2
    margin-left 150px
    width 900px
    font-size 4rem

#videointro iframe
  width 90%
  margin-left 1rem
  box-shadow -24px 12px $dark, -3px -3px 0 $dark, 3px -3px 0 $dark, -3px 3px 0 $dark, 3px 3px 0 $dark
@screen lg
  #videointro iframe
    transform skew(-8deg, -5deg)
    width 64rem
    height 36rem
</style>
