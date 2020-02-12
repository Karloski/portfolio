export const state = () => ({
  active: null, // The active file
  // Might need to add the parent field back in later for easy reference
  listing: [
    { name: '~', files: [1], type: 'dir' },
    { name: 'about', files: [2, 3, 4, 5, 6], type: 'dir' },
    { name: 'mtg', type: 'file' },
    { name: 'programming', type: 'file' },
    { name: 'cybersecurity', type: 'file' },
    { name: 'gaming', type: 'file' },
    { name: 'football', type: 'file' }
  ]
})

export const getters = {
  listing (state) {
    return state.listing
  },
  get (state) {
    return (id) => {
      return state.listing[id]
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
