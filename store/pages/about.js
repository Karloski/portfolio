export const state = () => ({
  dir: '~',
  type: 'dir'
})

export const getters = {
  dir (state) {
    return state.dir
  },
  type (state) {
    return state.type
  }
}

export const actions = {
  display ({ state, commit }) {
    commit('active', 'about', { root: true })
  }
}
