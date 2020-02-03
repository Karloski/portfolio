export const state = () => ({
  list: [
    'help', 'clear', 'cat', 'ls'
  ],
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
  }
}

export const mutations = {

}

export const actions = {

}
