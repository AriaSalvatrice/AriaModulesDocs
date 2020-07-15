<template lang="pug">
footer.clear-both
  .container.flex.justify-end
    p Made with devastating hatred in Fréjus, France.
    a(href="https://web.archive.org/web/19971211090850/http://anipike.com/")
      img(src="https://youpi.neocities.org/anipike.gif" alt="Animé")
</template>

<style lang="stylus" scoped>
footer
  @apply flex justify-end;
  p
    margin 2rem 1rem 0 0
    font-family $francois
    font-size 2rem
    color $pink
    text-shadow -2px 1px $darkest, -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest
    transform rotate(-3deg) skew(24deg, -3deg)

</style>
