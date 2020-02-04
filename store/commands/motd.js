export const state = () => ({
  description: 'Displays the message of the day',
  message: `
  <p class="py-2">
  Welcome to carlwithak.com 1.04 LTS
</p>
<p class="py-2">
  This website emulates the bash terminal from the popular unix distros
</p>
<p class="py-2">
  You can use this website to view more information about me and projects I have done, including this one
</p>
<p class="py-2">
  See below for a short overview for commands you can use to navigate this website
</p>
<ul class="py-2">
  <li>
    &nbsp;&nbsp;* Help: Type 'help'
  </li>
  <li>
    &nbsp;&nbsp;* Pages: Type cat [page] (e.g., cat portfolio)
  </li>
  <li>
    &nbsp;&nbsp;* MOTD: For the message of the day, type 'motd'
  </li>
</ul>
<p class="py-2">
  To run a command, type it into the input box below.
</p>
  `,
  params: []
})

export const getters = {
  description (state) {
    return state.description
  },
  params (state) {
    return state.params
  },
  message (state) {
    return state.message
  }
}

export const actions = {
  exec ({ state, commit }) {
    commit('active', 'motd', { root: true })
  }
}
