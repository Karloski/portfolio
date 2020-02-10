export const state = () => ({

})

export const getters = {

}

export const actions = {
  display ({ state, commit }) {
    commit('active', 'contact', { root: true })
  }
}
