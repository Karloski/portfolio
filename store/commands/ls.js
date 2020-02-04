export const state = () => ({
  description: 'Show a list of all available pages',
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

export const actions = {
  exec ({ state, commit }) {
    commit('active', 'ls', { root: true })
  }
}
