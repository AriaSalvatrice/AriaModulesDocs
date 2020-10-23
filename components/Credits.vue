<template lang="md">
::: #credits

Credits & Namedrops
-------------------

Thanks to everyone who created open-source modules I could learn from and make songs with.

Thanks to [Jerry Sievert](https://legitimatesounding.com/) and [cschol](https://github.com/cschol) for their help with [QuickJS](https://bellard.org/quickjs/) integration.

Thanks to [Silvio Kunaschk](https://github.com/qno/) for their help with [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) continuous integration.

Thanks to [Squinky Labs](https://github.com/squinkylabs/SquinkyVCV), [Stoermelder](https://github.com/stoermelder/vcvrack-packone), [David O'Rourke](https://github.com/david-c14/SubmarineFree), and [Anthony Lexander Matos](https://github.com/anlexmatos) for technical advice.

Thanks to [Omri Cohen](https://www.youtube.com/channel/UCuWKHSHTHMV_nVSeNH4gYAg) for featuring my modules in livestreams.

Thanks to [Ken McAloon](https://whatsinaname.xyz/) for Latin language translations.

Thanks to [Sophie](https://twitter.com/DreamyDoric) for music theory advice.

Thanks to [Heavy Viper](https://rekkanogotoku.com/) for years of inspiring conversation about synths and music.

Thanks to [Mog](https://github.com/JustMog/Mog-VCV) for Mog.

Thanks to [my dog Ornstein](https://ornstein.neocities.org/) for being a good dog.

Thanks to my music-making LGBBQT internet shitposting gang for introducing me to modular synthesis as something that's not just for old guys with more disposable income than impetus to write fresh songs.

<big>**But most of all, thanks to YOU for using my art.**</big>

![](/modules/animedance.gif)

VCV Rack is a trademark of the VCV Rack project. This web site is neither affiliated nor endorsed by the VCV Rack project.

:::
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

#credits
  font-family $francois
  transform rotate(-3deg)
  transform-origin top left
  color $yellow
  font-size 1rem
  text-shadow -2px 1px $darkest, -1px -1px 0 $darkest, 1px -1px 0 $darkest, -1px 1px 0 $darkest, 1px 1px 0 $darkest
  margin auto
  margin-top 12rem
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
  #credits
    margin-top 8.5rem
    font-size 1.5rem
    width 70%

#credits strong, #credits big
  font-weight normal
  color $lightest
#credits big
  font-size 2.5rem

#credits p, #credits ul
  margin-bottom 2rem

#credits h2
  font-family $abril
  margin auto
  font-size 2rem
  background-image linear-gradient(90deg, #00000044 0%, #00000000 100%)
  border 2px solid $pink
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
  transform skew(-8deg, -5deg)
  padding 0.3rem 4.3rem 0.3rem 0.6rem
  margin-bottom 3rem
  color $dark $yellow
  background-image linear-gradient(90deg, #ffffff00 0%, #ffffff44 100%)
  text-shadow none
@screen md
  #credits h2
    width 600px
    font-size 4rem
@screen lg
  #credits h2
    width 800px
    font-size 4rem
@screen xl
  #credits h2
    width 1000px
    font-size 4rem
</style>
