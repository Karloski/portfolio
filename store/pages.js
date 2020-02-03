export const state = () => ({
  list: [
    'home', 'about', 'portfolio', 'social'
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
  },
  active (state) {
    return state.active
  }
}

export const mutations = {

}

export const actions = {

}
