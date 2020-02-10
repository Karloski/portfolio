export const state = () => ({
  description: 'Show a list of all available pages',
  params: ['--help', '-l'],
  args: []
})

export const getters = {
  description (state) {
    return state.description
  },
  params (state) {
    return state.params
  },
  args (state) {
    return state.args
  }
}

export const mutations = {
  args (state, payload) {
    state.args = payload
  }
}

export const actions = {
  exec ({ state, commit }, args) {
    commit('args', args)
    commit('active', 'ls', { root: true })
  }
}
