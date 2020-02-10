export const state = () => ({
  description: 'Changes the current/active directory',
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
  exec ({ state, commit, rootGetters }, args) {
    commit('dir', args[0], { root: true })
  }
}
