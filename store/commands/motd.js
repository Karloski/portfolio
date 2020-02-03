export const state = () => ({
  description: 'Displays the message of the day',
  params: []
})

export const getters = {
  description (state) {
    return state.description
  },
  params (state) {
    return state.params
  }
}
