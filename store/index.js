export const state = () => ({
  active: null
})

export const getters = {
  active (state) {
    return state.active
  }
}

export const mutations = {
  active (state, payload) {
    state.active = payload
  }
}

export const actions = {

}
