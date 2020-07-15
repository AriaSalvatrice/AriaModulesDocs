<template lang="pug">
div
  nuxt
</template>

<script>
export default {

}
</script>

<style lang="stylus">
*, *::before, *::after
  box-sizing border-box
  margin 0

html
  font-family sans-serif
  box-sizing border-box

body
  font-family $novaslim
  background-color $light
  background-image url('/modules/bg.jpg')
  background-size contain
  background-attachment fixed

em, i, code
  font-family $novascript
  font-style normal

#bg-text
  position fixed
  width 160vw
  height 140vh
  transform rotate(-6deg)
  top -10rem
  left -5rem
  opacity 0.5
  z-index -20

// Text excerpts selected from https://talktotransformer.com/ answers for prompt "I love dogs"
#bg-text::after
  content "“I love dogs. I love puppies and I love dogs. And for the record I do. I adore them, and in this particular case they love my dog. I’m just proud of him. I love dogs like the schnauzers, the ones with the little eyes, the dachshunds.” I told them, “How about a big and cute puppy? You’ve got to be kidding. He can’t be bigger than a Doberman,” they said. “I love dogs. I love puppies. You are a wonderful fellow. I do. I am truly in awe.” That’s why I love dogs. I also love my cat. She is a dog; she’s got a heartbeat and she needs no sleep to sleep and she loves to curl up in the corner and be happy. “I love dogs. I love cats. I love the occasional cow. My dog is like, the best friend,” he tells me. “In fact, if they’re not looking for a job, maybe they should look for a family. It’s a different kind of animal—a family,” she says. If there’s one thing that is true for dog lovers everywhere, it’s that the only rule you need to adhere to is your own. “If they don’t recognize you and you’re not their friend, then there’s not anything you can do to get them to see you as a friend. You’ve just got to go, I will keep on loving you.” The first person I was able to talk to at the dog café was the sweet-natured Karen. “Hi, I’m Karen, and I just love dogs,” she said excitedly as I asked her about the café. She was right: they were so much more than I could have ever imagined a dog-loving couple for. The café was filled with a diverse group of folks from around town, a mix of dogs and people, who were all happy to share their love for their furry companions. Karen was on the ground early one morning, helping other couples around town meet to share their dogs (and how beautiful they all are). “I’m just a little girl from a small town in North Carolina, and I’m one of those small village girls who likes to love dogs,” she said. “I’ve been a dog lover for so long that whenever I go to a new town, I just love dogs! So my first few days here my friends and I were just hanging out in the café sharing my dogs. I wanted to meet this wonderful group in person and talk to all these dog lovers about it, and we just started talking and talking and chatting.” And there was one, my second. We’d be looking in the rearview mirror and the puppy’s nose popped out the front window. The rear-view mirror was out and there was the Pomeranian behind the rear-view mirror. He’s got the look of a man out of the Old West. The camera was rolling. It was all going to hell, but this dog, this little guy, got out, pulled out his camera and he took the picture. But as soon as the dog got out, he grabbed it and threw it on the ground. He wanted us to know that we’d seen something so great to happen to us. He wanted us to realize that we were so unlucky when there were no other dogs there to run."
  font-family 'Abril Fatface'
  font-size 6rem
  line-height 4.5rem
  letter-spacing -0.4rem
  user-select none
  background -webkit-linear-gradient($dark, $shade)
  background-clip text
  -webkit-text-fill-color transparent
  z-index -20

</style>
