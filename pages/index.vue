<template>
  <div class="flex text-white font-bash flex-col bg-gray-900 h-screen w-screen p-4">
    <div v-if="!$store.getters['active']" class="-my-2" v-html="$store.getters['commands/motd/message']" />
    <div class="flex -mx-2">
      <div class="px-2">
        <span>guest@CARLWITHAK-CO-UK:{{ page }}$</span>
      </div>
      <div class="px-2 flex-auto">
        <input v-model="input" class="w-full bg-transparent outline-none" type="text" placeholder="Type help and press enter to start" @keydown.enter="submit">
      </div>
    </div>
    <keep-alive>
      <component :is="component" class="flex-auto w-full" />
    </keep-alive>
  </div>
</template>

<script>
import commands from '../components/commands/export'
import pages from '../components/pages/export'

// FIXME: May cause conflicts
const components = {
  ...commands, ...pages
}

export default {
  components: {
    ...components
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    component () {
      return components[this.$store.state.active]
    },
    page () {
      let page = '~'

      if (this.$store.state.active && this.$store.getters['pages/has'](this.$store.state.active)) {
        page += `/${this.$store.state.active}`
      }

      return page
    }
  },
  methods: {
    submit () {
      const args = this.input.split(' ')
      const command = args.shift()

      this.$router.push({ path: command, query: { args } })
    }
  },
  mounted () {
    const route = this.$router.currentRoute.path.split('/').pop()

    if (route) {
      if (this.$store.getters['commands/has'](route) === undefined) {
        this.$store.commit('active', 'error')
      } else {
        this.$store.dispatch(`commands/${route}/exec`, this.$router.currentRoute.query.args)
      }

      this.input = route
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
