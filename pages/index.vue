<template>
  <div class="flex text-white font-bash flex-col bg-gray-900 h-screen w-screen p-4">
    <div class="flex -mx-2">
      <div class="px-2">
        <span>guest@CARLWITHAK-IBHU8V4:~$</span>
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
import components from '../components/export'

export default {
  components: {
    ...components
  },
  data () {
    return {
      component: null,
      input: ''
    }
  },
  computed: () => {
    return components[this.component]
  },
  methods: {
    submit () {
      const parts = this.input.split(' ')

      if (this.$store.getters['commands/has'](parts[0]) === undefined) {
        this.component = 'error'
      } else if (parts[0] === 'clear') {
        this.component = null
      } else {
        this.component = parts[0]
      }
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
