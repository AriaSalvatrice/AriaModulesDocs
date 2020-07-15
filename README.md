# Documentation for my synthesizer modules

It's live at https://aria.dog/modules/

First time doing literally anything with vue, or nuxt. I haven't read the docs that's for losers. I'm just copy-pasting random stuff until it works. I have no idea what I'm doing, and I'm doing it. The architecture is absolutely horrible and full of revolting hacks, and everything kinda works OK enough. 

Modules pages are not implemented cleanly. If there is not enough space to scroll between sections and cables, things will break. 

If you read this code to learn from it you're a stupid imbecilic idiot fool dumbass cretin. 

If you know your stuff and happen to read this code, please lemme know what I'm doing wrong. I probably won't correct it but it'll be good to know for the next time.

## Screenshot standards

Faceplates:

- 200% (2x Ctrl++ from 100%)
- Pixel-precise crop - 760px high
- No cables
- Simulate realistic state conveying useful info

B&W versions:

- 200% zoom
- Some cables 70% opacity
- Simulate realistic state
- Downscale 50%
- Desaturate

## Magic incantations

```bash
$ yarn install
$ yarn dev
$ yarn build
$ yarn export
```
