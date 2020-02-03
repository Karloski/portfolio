export const state = () => ({
  description: 'Show the help screen',
  params: []
})

export const getters = {
  description (state) {
    return state.description
  },
  params (state) {
    return state.params
  }
}
