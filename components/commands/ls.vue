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
      <!-- Cat/CD the name of the file and not the ID -->
      <div v-if="args.indexOf('-l') !== -1">
        <ul>
          <li v-for="file of files" :key="file">
            <span>{{ $store.getters['files/get'](file).type }}</span>
            <nuxt-link v-if="$store.getters['files/get'](file).type === 'file'" :to="`cat?args=${file}`" >{{ $store.getters['files/get'](file).name }}</nuxt-link>
            <nuxt-link v-else :to="`cd?args=${file}`" >{{ $store.getters['files/get'](file).name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="inline">
          <li v-for="file of files" :key="file">
            <nuxt-link v-if="$store.getters['files/get'](file).type === 'file'" :to="`cat?args=${file}`" >{{ $store.getters['files/get'](file).name }}</nuxt-link>
            <nuxt-link v-else :to="`cd?args=${file}`" >{{ $store.getters['files/get'](file).name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    args () {
      return this.$store.getters['commands/ls/args'] || []
    },
    files () {
      // FIXME: Not particularly defensive
      return this.$store.getters['files/get'](this.$store.getters.dir).files
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
