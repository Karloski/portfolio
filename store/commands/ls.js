export const state = () => ({
  description: 'Show a list of all available pages'
})

export const getters = {
  description (state) {
    return state.description
  }
}
