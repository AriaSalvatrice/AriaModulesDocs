<template lang="pug">
#module-text

  ModuleIllustration#blank(src="/modules/blank/blank.png")

  ModuleMainSection(title="Blank Plate" illustration="blank" align="left")
    ModuleSubSection(subtitle="Honk" align="left")
      ModuleBox(align="left")
        :markdown-it
          A complimentary **8hp Blank Plate** and **♥-head screwdriver** are included with every Signature Series module purchase.

      ModuleBox(align="right")
        :markdown-it
          The pup's name is Honoré. Thanks for asking.

      Protip(align="center")
        :markdown-it
          Having one or two blank plates in your patch is fine, but if you find yourself having too many of them, it's generally considered a red flag you're doing something wrong.

          The accepted best practice in the virtual modular community is to make your patch as gratuitously complicated as possible until you reach at least 95% CPU usage.


</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'Blank Plate - Aria Salvatrice’s VCV Rack-compatible Synthesizer Modules'
  }
}
</script>
