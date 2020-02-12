<template>
  <div class="flex text-white font-bash flex-col bg-gray-900 h-screen w-screen p-4">
    <div v-if="!$store.getters['active']" class="-my-2" v-html="$store.getters['commands/motd/message']" />
    <div class="flex -mx-2">
      <div class="px-2">
        <span>guest@CARLWITHAK-CO-UK:{{ $store.getters['files/get']($store.getters['dir']).name }}$</span>
      </div>
      <div class="px-2 flex-auto">
        <input
          v-model="input"
          class="w-full bg-transparent outline-none"
          type="text"
          placeholder="Enter your command here"
          @keydown.enter="submit"
          ref="command">
      </div>
    </div>
    <keep-alive>
      <component :is="component" class="flex-auto w-full" />
    </keep-alive>
  </div>
</template>

<script>
import commands from '../components/commands/export'
import files from '../components/files/export'

// FIXME: May cause conflicts
const components = {
  ...commands, ...files
}

export default {
  components,
  data () {
    return {
      input: ''
    }
  },
  key (route) {
    return route.fullPath
  },
  computed: {
    component () {
      return components[this.$store.state.active]
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
      if (this.$router.currentRoute.query.args !== undefined) {
        if (!Array.isArray(this.$router.currentRoute.query.args)) {
          this.$router.currentRoute.query.args = [this.$router.currentRoute.query.args]
        }

        this.input = route + this.$router.currentRoute.query.args.reduce((carry, arg) => {
          carry += ` ${arg}`
          return carry
        }, '')
      } else {
        this.input = route
      }

      if (this.$store.getters['commands/has'](route) === undefined) {
        this.$store.commit('active', 'error')
      } else {
        this.$store.dispatch(`commands/${route}/exec`, this.$router.currentRoute.query.args)
      }
    }

    this.$refs.command.focus()
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
