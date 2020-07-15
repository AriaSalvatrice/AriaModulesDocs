export const state = () => ({
  illustration: "",
})

export const mutations = {
  changeIllustration (state, text) {
    state.illustration = text
  },
}
