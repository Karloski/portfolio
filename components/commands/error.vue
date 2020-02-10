<template>
  <div>
    <p class="mb-4">Command not found. Try one of the following:</p>

    <table>
      <tr v-for="command of $store.getters['commands/get']" :key="command">
          <td>{{ command }}</td>
          <td>{{ $store.getters[`commands/${command}/description`] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    td {
        min-width: 200px;
    }
</style>
