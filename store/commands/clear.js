export const state = () => ({
  description: 'Clears the space underneath the command line'
})

export const getters = {
  description (state) {
    return state.description
  }
}
