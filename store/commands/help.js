export const state = () => ({
  description: 'Show the help screen'
})

export const getters = {
  description (state) {
    return state.description
  }
}
