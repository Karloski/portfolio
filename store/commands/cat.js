export const state = () => ({
  description: 'Displays [page] underneath the command line',
  params: ['[page]']
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
  exec ({ commit, dispatch }, args) {
    if (args[0] !== undefined) {
      dispatch(`pages/${args[0]}/display`, {}, { root: true })
    } else {
      commit('active', 'cat', { root: true })
    }
  }
}
