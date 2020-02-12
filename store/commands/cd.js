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
  exec ({ commit }, args) {
    // FIXME: Check args[0] (dir) exists
    commit('dir', args[0], { root: true })
  }
}
