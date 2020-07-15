export const state = () => ({
  title: "",
  subtitle: ""
})

export const mutations = {
  changeTitle (state, text) {
    state.title = text
  },

  changeSubtitle (state, text) {
    state.subtitle = text
  }
}
