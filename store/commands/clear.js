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

export const actions = {
  exec ({ state, commit }) {
    commit('active', null, { root: true })
  }
}
