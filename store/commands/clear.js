export const state = () => ({
  description: 'Clears the space underneath the command line',
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
