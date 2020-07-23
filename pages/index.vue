<template lang="pug">
div
  #bg-text(aria-hidden="true")
  Welcome
  section.video-intro
    .container
      Download
  section.main-index
    .container
      Devices
      Sidebar
  section.credits
      .container
        Credits
  SiteFooter
</template>

<script>
export default {
  head: {
    title: 'Aria Salvatrice Signature Series: VCV Rack-compatible Synthesizer Modules',
    meta: [
      { hid: 'description', name: 'description', content: 'Cool and nice modules what for VCV Rack.' }
    ]
  }
}
</script>

<style lang="stylus">
.video-intro
  @apply flex justify-end pb-16 pt-12
  .container
    @apply flex flex-wrap flex-row-reverse mr-16
.main-index
  @apply flex justify-end pb-16 pt-12
  .container
    @apply flex flex-wrap flex-row
.credits
  @apply flex justify-end pb-16 pt-12
  .container
    @apply flex flex-wrap flex-row-reverse mr-16

</style>
