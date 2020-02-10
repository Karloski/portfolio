export const state = () => ({
  list: ['clear', 'motd', 'ls', 'cat', 'help'],
  active: null
})

export const getters = {
  get (state) {
    return state.list
  },
  has (state) {
    return (payload) => {
      return state.list.find(i => i === payload)
    }
  },
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
