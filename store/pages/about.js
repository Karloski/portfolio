export const state = () => ({

})

export const getters = {

}

export const actions = {
  display ({ state, commit }) {
    commit('active', 'about', { root: true })
  }
}
