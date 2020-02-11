export const state = () => ({
  active: null, // The active file
  listing: [
    { name: about, files: [2,3,4], type: 'dir', parent: '~' },
    { name: mtg, type: 'file' },
    { name: programming, type: 'file' },
    { name: cybersecurity, type: 'file' },
    { name: gaming, type: 'file' },
    { name: football, type: 'file' },
  ]
})

export const getters = {
  get (state) {
    return state.listing
  },
  has (state) {
    return (dir) => {
      return Object.keys(state.listing)
    }
  },
  find (state) {
    return (name, type = 'file', parent = '~') => {
      return state.listing.find(d => d.name === name && d.type === type && d.parent === parent)
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
