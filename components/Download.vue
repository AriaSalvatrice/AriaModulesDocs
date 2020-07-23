<template lang="md">
::: #install

Downloads & Installation
------------------------

The most recent version available of the plugin containing all my modules is version 1.6.0. The last version available on the library is version 1.4.2, lacking multiple modules. For technical reasons, my modules cannot be automatically built by the VCV library, so up-to-date versions are no longer available for download from its library.

Please do not install outdated versions from the libray, and install manually the most recent version instead. You can [download it from my Github releases pages](https://github.com/AriaSalvatrice/AriaVCVModules/releases/tag/1.6.0). To install, place the downloaded ZIP file in the following directory:

- Windows: `My Documents/Rack/plugins-v1`
- Linux: `~/.Rack/plugins-v1`
- OS X: `Documents/Rack/plugins-v1`

If my plugin is re-integrated to the library, it will be safe to accept the prompt to automatically update this manually installed version.
:::
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

#install
  font-family $francois
  transform rotate(-3deg)
  transform-origin top left
  color $lightest
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
  p, ul
    background $dark
    padding 1rem
    box-shadow -12px 12px $darkest
    font-family $novaslim
@screen md
  margin-top 6rem
@screen lg
  #install
    margin-top 8.5rem
    font-size 1.5rem
    width 70%

#install strong, #install big
  font-weight normal
  color $lightest
#install big
  font-size 2.5rem

#install p, #install ul
  margin-bottom 2rem

#install h2
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
  #install h2
    width 600px
    font-size 4rem
@screen lg
  #install h2
    width 800px
    font-size 4rem
@screen xl
  #install h2
    width 1000px
    font-size 4rem
</style>
