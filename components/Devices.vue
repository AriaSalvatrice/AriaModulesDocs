<template lang="pug">
section#cards
  h2 Modules
  DeviceMenuItem(
    slug="splitmerge"
    title="Split & Merge"
    description="Splirge, Splort, Smerge, Spleet & Swerge: tiny kawaii lil’ polyphonic splitters, mergers, and sorters."
    rotate="-6"
    skewX="-8"
    skewY="-4"
  )

  DeviceMenuItem(
    slug="qqqq"
    title="Quatherina’s Quality Quad Quantizer"
    description="Quatherina the Quantum Duck presents her polyphonic Quantizers with too many features. Includes QQQQ, Quack, Q<, and Quale."
    rotate="2"
    skewX="-2"
    skewY="7"
  )

  DeviceMenuItem(
    slug="darius"
    title="Darius"
    description="8-step probabilistic sequencer, where each node branches into two possible paths, creating repeating patterns that resolve differently."
    rotate="-5"
    skewX="-10"
    skewY="0"
  )

  .picture#construction
    div

  DeviceMenuItem(
    slug="modulus"
    title="Modulus Salomonis Regis"
    description="Step sequencer conjuring grand knowledge of the arts for those who self-patch pleasing sigils.\nIncludes Modulus Salomonis Regis, Modulellus Salomonis Regis, and Modulissimus Salomonis Regis."
    rotate="-6"
    skewX="-3"
    skewY="7"
  )

  DeviceMenuItem(
    slug="arcane"
    title="Arcane"
    description="Arcane, Atout & Aleister:\nToday’s fortune ★\n\nI hope luck is on your side."
    rotate="4"
    skewX="8"
    skewY="-11"
  )

  DeviceMenuItem(
    slug="psychopump"
    title="Psychopump"
    description="Send your beats straight to Hades with 8 triggered channels of CV presets, Sample & Hold, with randomization and quantization features. Pairs great with percussive sound sources."
    rotate="-5"
    skewX="-8"
    skewY="-6"
  )

  .picture#blingee
    div

  DeviceMenuItem(
    slug="remote-controllers"
    title="Remote Controllers"
    description="Pokies, Grabby, Rotatoes: tiny performance controllers with offset, inversion, latch & quantization features."
    rotate="7"
    skewX="9"
    skewY="-5"
  )

  DeviceMenuItem(
    slug="undular"
    title="UnDuLaR"
    description="Rack scroller for live performance, controllable via CV/MIDI."
    rotate="-8"
    skewX="-6"
    skewY="-4"
  )
  DeviceMenuItem(
    slug="blank"
    title="Blank Plate"
    description="Honk."
    rotate="3"
    skewX="3"
    skewY="8"
  )
</template>

<script>
import DeviceMenuItem from '~/components/DeviceMenuItem'
export default {
  components: {
    DeviceMenuItem
  }
}
</script>

<style lang="stylus" scoped>
#cards
  @apply flex flex-wrap content-start order-1;
@screen lg
  #cards
    width 60%

#cards h2
  font-family $abril
  margin auto
  width 100%
  font-size 2rem
  background-image linear-gradient(90deg, #00000044 0%, #00000000 100%)
  border 2px solid $pink
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
  transform skew(-8deg, -5deg)
  padding 0.3rem 0.3rem 0.3rem 0.6rem
  margin-bottom 3rem
  color $dark $yellow
  background-image linear-gradient(90deg, #ffffff00 0%, #ffffff44 100%)
@screen lg
  #cards h2
    font-size 4rem

.picture
  height 30rem
  position relative
  z-index 100
  width 100%
@screen lg
  .picture
    width 50%

#construction
  background url('https://youpi.neocities.org/construction.gif') no-repeat center center
  transform skew(8deg, 6deg)

#blingee
  div
    margin-top 40px
    background url('/modules/blingee.gif') no-repeat center center
    transform skew(-7deg, -3deg)
    width 400px
    height 400px
    box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark

</style>
