<template>
  <div>
    <p class="mb-4">Command not found. Try one of the following:</p>

    <table>
      <tr>
        <td>ls</td>
        <td>Show a list of all available pages</td>
      </tr>
      <tr>
        <td>cat [page]</td>
        <td>Displays [page] underneath the command line</td>
      </tr>
      <tr>
        <td>clear</td>
        <td>Clears the space underneath the command line</td>
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
