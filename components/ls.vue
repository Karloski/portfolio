<template>
  <div>
    <div class="-mx-4">
      <span v-for="page of $store.getters['pages/get']" :key="page" class="px-4">{{ page }}</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
