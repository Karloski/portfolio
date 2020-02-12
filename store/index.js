export const state = () => ({
  active: undefined,
  dir: 0
})

export const getters = {
  active (state) {
    return state.active
  },
  dir (state) {
    return state.dir
  },
  files (state) {
    return state.files
  }
}

export const mutations = {
  active (state, payload) {
    state.active = payload
  },
  dir (state, payload) {
    state.dir = payload
  },
  files (state, payload) {
    state.files = payload
  }
}

export const actions = {
  dir ({ commit }, dir) {
    commit('dir', dir)
  }
}
