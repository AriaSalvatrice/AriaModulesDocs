<template lang="pug">
section#sidebar
  div
    h2 Info
    a(href="https://library.vcvrack.com/?brand=Aria%20Salvatrice")
      .subtitle Grab those bad boys from the VCV library
      .title Installation
    a(href="https://github.com/AriaSalvatrice/AriaVCVModules/blob/master/CHANGELOG.md")
      .subtitle Peep what’s cool and good
      .title Changelog
    a(href="https://github.com/AriaSalvatrice/AriaVCVModules")
      .subtitle for(size_t i = 0; i < 666; i++){crash();}
      .title Source code
    a(href="https://community.vcvrack.com/t/8208/")
      .subtitle Click here if you do not know fear
      .title Development builds
    nuxt-link(to="/plans")
      .subtitle Don’t get your hopes up lol
      .title Future Plans
    h2 Tribute
    nuxt-link(to="/donations")
      .subtitle Ca$h mon€¥
      .title Donations
    h2 Contact
    a(href="https://github.com/AriaSalvatrice/AriaVCVModules/issues")
      .subtitle Your call is important to us
      .title Bug reports
    a(href="https://github.com/AriaSalvatrice/AriaVCVModules/blob/master/CONTRIBUTING.md")
      .subtitle That would rule TBH
      .title Contributing
    a(href="mailto:woof@aria.dog")
      .subtitle woof@aria.dog
      .title
        | E-mail me dog gifs
        img(src="/modules/mutt.gif" alt="Dog gif")
    h2 Elsewhere
    a(href="https://soundcloud.com/ariasalvatrice")
      .subtitle Recent honks and bleeps
      .title Sound Cloud
    a(href="https://ariasalvatrice.bandcamp.com/")
      .subtitle Honks collated in album form
      .title Band Camp
    a(href="https://www.youtube.com/channel/UCGsTFMXm0NyA_V8_Q1kRhbQ/videos")
      .subtitle ●LIVE honks
      .title You Tube
    a(href="https://twitter.com/AriaSalvatrice")
      .subtitle Absolute dumpster fire of terrible posts
      .title Tweeter
    h2 Legal
    a(href="https://github.com/AriaSalvatrice/AriaVCVModules#lawyers-corner")
      .subtitle 𝅘𝅥𝅮 Join us now and share the software
      .title Lawyer’s Corner
</template>

<style lang="stylus" scoped>
section#sidebar
  @apply flex flex-col order-2;
  width 100%
@screen lg
  section#sidebar
    width 40%

#sidebar #note, #sidebar #construction
  color $yellow
  font-size 1.5rem
  margin-top 3rem
  text-shadow -2px 1px $darkest, -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest

#sidebar h2, #sidebar h3
  font-family $abril

#sidebar h2, #sidebar a, #post-page footer a
  margin auto
  width 75%
  font-size 2rem
  color $pink $shade
  background-image linear-gradient(90deg, #00000044 0%, #00000000 100%)
  border 2px solid $pink
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
  transform skew(-8deg, -5deg)
  padding 0.3rem 0.3rem 0.3rem 0.6rem
#sidebar h2
  color $dark $yellow
  background-image linear-gradient(90deg, #ffffff00 0%, #ffffff44 100%)
@screen xl
  #sidebar h2
    font-size 4rem
#sidebar a, #post-page footer a
  font-family $francois
  display block
  font-size 1.1rem
  position relative
  transition transform 0.4s, color 0.4s, background-color 0.4s
  text-shadow -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest
  z-index 100
#sidebar a .subtitle
  display inline-block
  position absolute
  font-size 50%
#sidebar a .title
  margin-top 0.5rem
#sidebar a .title img
  display inline
#sidebar a:hover
  color $yellow $pink
  transform skew(0deg, 0deg) scale(1.2, 1.6) !important
  z-index 120
@screen lg
  #sidebar a
    font-size 1.9rem
@screen xl
  #sidebar a
    font-size 2.4rem
</style>
