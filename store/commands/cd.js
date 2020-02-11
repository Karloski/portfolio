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
  exec ({ state, commit, rootGetters, rootState }, args) {
    commit('files', rootGetters['files/find'](args[0], 'dir', rootGetters.dir).files, { root: true })
    commit('dir', args[0], { root: true })
  }
}
