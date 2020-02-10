export const state = () => ({
  description: 'Displays [page] underneath the command line',
  params: ['[page]'],
  error: ''
})

export const getters = {
  description (state) {
    return state.description
  },
  params (state) {
    return state.params
  },
  error (state) {
    return state.error
  }
}

export const mutations = {
  error (state, payload) {
    state.error = payload
  }
}

export const actions = {
  exec ({ commit, dispatch, rootGetters }, args) {
    if (args[0] !== undefined) {
      if (rootGetters['pages/has'](args[0])) {
        dispatch(`pages/${args[0]}/display`, args, { root: true })
      } else {
        commit('active', 'cat', { root: true })
      }
    }
  }
}
