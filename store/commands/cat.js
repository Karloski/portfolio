export const state = () => ({
  description: 'Displays [page] underneath the command line',
  params: ['[page]']
})

export const getters = {
  description (state) {
    return state.description
  },
  params (state) {
    return state.params
  }
}
