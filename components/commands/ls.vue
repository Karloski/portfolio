<template>
  <div>
    <div v-if="args.indexOf('--help') !== -1" class="-my-2">
      <p class="py-2">List information about files (the current directory by default)</p>
      <p class="py-2">Arguments:</p>
      <table class="py-2">
        <tbody>
          <tr>
            <td>--help</td>
            <td>Shows this help screen and exit</td>
          </tr>
          <tr>
            <td>-l</td>
            <td>Uses the long listing format, which shows additional information about the file</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <div v-if="args.indexOf('-l') !== -1">
        <ul>
          <li v-for="file of $store.getters['files/get']($store.getters['dir'])" :key="file">
            <span>{{ $store.getters[`files/${file}/type`] }}</span>
            <nuxt-link v-if="$store.getters[`files/${file}/type`] === 'file'" :to="`cat?args=${file}`" >{{ file }}</nuxt-link>
            <nuxt-link v-else :to="`cd?args=${file}`" >{{ file }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div v-else class="-mx-4">
        <nuxt-link v-for="file of $store.getters['files/get']" :to="`cat?args=${file}`" :key="file" class="px-4">{{ file }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    args () {
      return this.$store.getters['commands/ls/args'] || []
    }
  },
  mounted () {
    // console.log(this.$router.currentRoute.query)
  }
}
</script>

<style scoped>
    td {
        min-width: 200px;
    }
</style>
