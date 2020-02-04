<template>
  <div>
    <div class="-my-2" v-html="$store.getters['commands/motd/message']" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
