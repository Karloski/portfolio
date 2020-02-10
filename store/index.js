export const state = () => ({
  active: null,
  dir: '~'
})

export const getters = {
  active (state) {
    return state.active
  },
  dir (state) {
    return state.dir
  }
}

export const mutations = {
  active (state, payload) {
    state.active = payload
  },
  dir (state, payload) {
    state.dir = payload
  }
}

export const actions = {

}
