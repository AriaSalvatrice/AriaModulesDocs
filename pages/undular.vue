<template lang="pug">
#module-text

  ModuleIllustration#undular(src="/modules/undular/undular.png")

  ModuleMainSection(title="UnDuLaR" illustration="undular" align="right")
    ModuleSubSection(subtitle="Rack Scroller" align="right")
      ModuleBox(align="right")
        :markdown-it
          Scroll your rack via CV! **UnDuLaR** adjusts to the size of your rack without any setup.

          You can also automate cable tension and opacity. This is particularly useful for live performance with MIDI gear.

      ModuleBox(jack="out" to="undular" :x="51/150" :y="107/760")
        :markdown-it
          **Up**, **Down**, **Left**, **Right**: Take trigs, and jump around the rack in the corresponding direction, wrapping around when it reaches the end.

          The default vertical jump is 3U - the height of exactly one module.

          The default horizontal jump is 32hp - the width of exactly one module, so long as the module in question happens to be exactly 32hp.

      ModuleBox
        :markdown-it
          **Step X**, **Step Y**: Adjust the distance to jump on each trigger.

      ModuleBox(jack="out" to="undular" :x="15/150" :y="390/760")
        :markdown-it
          **Scroll X**, **Scroll Y**: Take 0V~10V, and smoothly scrolls your rack horizontally or vertically.

           You might want to invert the input if it feels more natural for you to operate your MIDI controller in the reverse direction. **[Rotatoes](/modules/remote-controllers)** are a good way to do that.

      ModuleBox
        :markdown-it
          **Padding**: Overshoots the scrolling a little by the specified hp.

      ModuleBox(jack="out" to="undular" :x="51/150" :y="485/760")
        :markdown-it
          **Zoom**: Takes 0V~10V, and zooms your rack in and out from 25% to 400%.

          **Zooming in and out is neither fast nor reliable enough to ever attempt during live performance.** Expect broken graphics, unreadable panels, CPU usage spikes, and audio crackles. This is due to the graphics engine, there is nothing I can do to improve the performance.

      ModuleBox(jack="out" to="undular" :x="51/150" :y="562/760")
        :markdown-it
          **Alpha** (Opacity): Takes 0V~10V, and adjusts the opacity of cables.

      ModuleBox(jack="out" to="undular" :x="51/150" :y="609/760")
        :markdown-it
          **Tnsn.** (Tension): Takes 0V~10V, and adjust the tension of cables.

      ModuleBox
        ModuleImageInsert(src="/modules/undular/lock.png").float-right
        :markdown-it
          **Lock X/Lock Y**: By pressing those **DANGEROUS** buttons, **UnDuLaR** fully takes over scrolling on that axis, preventing scrolling from the scrollbars, scrollwheels, arrow keys, middle click, or from dragging cables at the edges of the screen.

          As a safety measure, the status of those buttons isn't saved with your patch. When you reload it, they are always disabled.

          Those locks will only work if the three corresponding cable inputs for that axis are unplugged.

          Trying to scroll on the disabled axis will be a little bit jittery, I can't help it.

      Protip(align="left")
        :markdown-it
          Kick Drum ➔ Envelope Follower ➔ Offsetter ➔ Cable Tension input.

          You're welcome.


      ModuleBox(align="center")
        :markdown-it
          Because **a misconfiguration makes it possible to lock yourself out of your rack**, **UnDuLar** does nothing for the 10 first seconds after initialization.

          If you find yourself unable to scroll back to **UnDuLaR**, save your patch (yup, seriously, even if it seems entirely hosed), then reload it. You now have 10 seconds to find the **UnDuLaR** module and unplug it.


      ModuleBox(align="center")
        :markdown-it
          **Known issue**: zooming in and out after locking X or Y won't bring you where you expect, and might allow to peer at the infinite darkness that lies outside the boundaries of the Rack.

          **Known solution**: don't do that.

      ModuleBox(align="right")
        :markdown-it
          You can only use a single instance of **UnDuLaR** in your patch, as multiple instances would just fight each other for control.

          Additional instances past the first one do nothing.

      ModuleBox(align="right")
        :markdown-it
          While you can bind every control, **I recommend using only one type of movement input and one axis of movement**. You do not want the mental overhead of navigating two dimensions while performing.

          Build a rack that is no wider (or no taller) than your screen at your preferred zoom level, bind to MIDI either a trig input pair or a scroll input, then lock the unused axis with its button.

          Personally, I bind **Scroll Y** to a fader (inverted via a **[rotato](/modules/remote-controllers)**), and **Opacity** to a knob.

      ModuleBox(align="right")
        :markdown-it
          **Make sure you triple check the module works to your expectations every single time you're about to take it on the stage**, especially after a Rack update!

          I'll hear no complaints about botched performances, the module is provided as-is, with **zero guarantee** it will work with your setup, and zero guarantee that it will continue to work in the future.

          The only guarantee I offer is that zooming will cause you no end of trouble.

      Protip(align="center")
        :markdown-it
          Never hesitate to attempt all sorts of imbecilic party tricks you will regret immediately, such as connecting an oscillator to the controls, forcing you to jettison your rack before the onset of the seizure.

      ModuleBox(align="center")
        :markdown-it
          Thanks to [Frank Buss' Shaker](https://library.vcvrack.com/FrankBuss/Shaker) for demonstrating it's possible to scroll the rack and alter cable properties from a module!


</template>

<script>
export default {
  layout: 'module',
  head: {
    title: 'UnDuLaR - Aria Salvatrice’s Synthesizer Modules'
  }
}
</script>
