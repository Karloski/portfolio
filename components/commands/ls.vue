<template>
  <div>
    <div class="-mx-4">
      <nuxt-link v-for="page of $store.getters['pages/get']" :to="`cat?args=${page}`" :key="page" class="px-4">{{ page }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
