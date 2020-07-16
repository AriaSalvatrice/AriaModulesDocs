<template lang="pug">
nuxt-link.card(:to="slug" :style="transform")
  h3 {{ title }}
  .details(:style="bgimage")
    span {{ description }}
</template>

<style lang="stylus" scoped>
.card
  @apply w-full flex flex-col mx-3 my-2;
  height 30rem
  transform rotate(-6deg) skew(-8deg, -4deg)
  opacity 0.9
  transition transform 0.6s, opacity 0.6s
  box-shadow -6px 3px $dark, -2px -2px 0 $dark, 2px -2px 0 $dark, -2px 2px 0 $dark, 2px 2px 0 $dark
  z-index 100
.card:hover
  transform rotate(0) skew(0deg, 0deg) !important
  opacity 1
  z-index 200
@screen lg
  .card, .picture
    width 46%
  .card:hover
    transform rotate(0) skew(0deg, 0deg) scale(1.1, 1.1)

.card h3
  @apply pl-2 overflow-hidden;
  font-family $abril
  font-size 1.4rem
  color $darkest $pink
  background-image linear-gradient(90deg, #00000044 0%, #00000000 100%)
  transition color 0.4s, background-color 0.4s
.card:hover h3
  color $yellow $shade
@screen lg
  .card h3
    font-size 2.2rem;

.card .details
  @apply text-xl flex-grow flex flex-col justify-center text-center;
  font-family $francois
  padding 2rem 1rem 1rem 2rem
  color $pink $shade
  --gradient linear-gradient(90deg, #00000000 0%, #00000044 100%)
  background-image var(--gradient)
  background-blend-mode multiply
  background-repeat no-repeat
  background-position bottom right
  background-size cover
  text-shadow -1px -1px 0 $dark, 1px -1px 0 $dark, -1px 1px 0 $dark, 1px 1px 0 $dark
  transition color 0.4s, background-color 0.4s
  overflow hidden

.card .details span
  white-space pre-wrap
  transition transform 0.4s

.card:hover .details
  color $yellow $pink

.card:hover .details span
  transform scale(1.1, 1.4)
</style>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rotate: {
      type: String,
      required: false,
      default: 0
    },
    skewX: {
      type: String,
      required: false,
      default: 0
    },
    skewY: {
      type: String,
      required: false,
      default: 0
    },
  },
  computed: {
    transform() {
      return {
        'transform': 'rotate(' + this.rotate + 'deg) skew(' + this.skewX + 'deg, ' + this.skewY + 'deg)'
      }
    },
    bgimage() {
      return {
        'background-image': 'url(/modules/' + this.slug + '/bw.png), var(--gradient)'
      }
    }
  }
}
</script>
