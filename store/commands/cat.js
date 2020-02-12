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
      console.log(args)
    }
  }
}
