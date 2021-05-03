<template lang="pug">
header.welcome
  .container
    h1#title-effect
      .block lol hi check out my homemade
      .inline-block virtual synth modules
      #emoji
        DogCool
      .highlight-animation(aria-hidden="true")
        .block lol hi check out my homemade
        .inline-block virtual synth modules
    #intro
      p
        | Hiya hello hey hi what’s hip love, I’m Aria Salvatrice.
      p
        | I’m a French expat living on the Worldwide Web with my dog.
      p
        | I make
        |
        a(href="https://soundcloud.com/ariasalvatrice") Gay Baroque Technopop
        |
        | and
        |
        a(href="https://ariasalvatrice.bandcamp.com/") Pastoral Industrial
        |
        | music happen, and made a buncha synth modules for my own use.
      img(src="signature-welcome.png" alt="signature").float-left.w-48
      p
        | They are the
        |
        span.signatureseries Aria Salvatrice Signature Series
        | . Lotsa artists found them inspiring for many genres of music. You can grab them for free!
      br
      p
        | Unfortunately, this collection is discontinued and no longer supported, and won't be updated in the future,&nbsp;
        a(href="https://aria.dog/barks/why-i-will-never-create-modules-for-vcv-rack-anymore/") due to VCV Rack's behavior towards third party developers
        | . I look forward to resuming this collection as a standlone modular sequencer in the future.
        | Until then, I hope you will enjoy the existing modules for as long they still work.
    #intro-2
      | heres the stuff ➞
</template>

<style lang="stylus" scoped>
.welcome
  @apply flex justify-end relative;
  .container
    @apply relative overflow-hidden pb-2 pt-2;
@screen lg
  .welcome .container
    @apply pt-40;

#title-effect // The solid color and text shadow
  font-family $abril
  font-size 2rem
  color $pink
  text-shadow -6px 3px $dark, -1px -1px 0 $dark, 1px -1px 0 $dark, -1px 1px 0 $dark, 1px 1px 0 $dark
  position absolute
  margin-left 3rem
  z-index 200
@screen lg
  #title-effect
    margin-left 0
    padding 0
    transform rotate(-11deg)
    transform-origin top left
    font-size 4rem

.highlight-animation // The highlight animation, only on large screens, aria-hidden
  display block
  position absolute
  top 0
  text-shadow none
  font-size 2rem
  background-size 200% 100%
  background-image linear-gradient(100deg, $pink 2.56%, #ffe4e9 2.56%, #ffe4e9 2.82%, $pink 2.82%, $pink 3.77%, #ffe4e9 3.77%, #ffe4e9 5%, $pink 5%)
  background-clip text
  color transparent
  user-select none
  will-change background-position
  animation 4.5s linear infinite highlight
  background-clip text
  -webkit-background-clip text
  z-index 200
@screen lg
  .highlight-animation
    padding 0
    font-size 4rem


@keyframes highlight
  0%
    background-position 10% 0%
  45%
    background-position 10% 0%
  75%
    background-position -100% 0%
  100%
    background-position -100% 0%

#emoji
  display block
  position relative
  margin-left 3rem
  margin-top 1rem
@screen lg
  #emoji
    display inline
    margin 0

#intro
  font-family $francois
  transform rotate(-3deg)
  transform-origin top left
  color $yellow
  font-size 1rem
  text-shadow -2px 1px #083d45, -1px -1px 0 #083d45, 1px -1px 0 #083d45, -1px 1px 0 #083d45, 1px 1px 0 #083d45
  margin auto
  margin-top 19rem
  width 90%
  z-index 200
  a:link, a:visited
    text-decoration underline
    color $pink
    transition color 0.4s
  a:focus, a:hover, a:active
    color $lightest
@screen md
  margin-top 6rem
@screen lg
  #intro
    margin-top 8.5rem
    font-size 1.5rem
    width 70%

.signatureseries
  color $lightest

#intro-2
  display none
@screen lg
  #intro-2
    display block
    font-family $abril
    font-size 3rem
    color $yellow
    transform rotate(96deg)
    transform-origin top right
    position absolute
    right 5rem
    bottom -5rem
    text-shadow 4px 7px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
    margin-top 8rem

</style>
