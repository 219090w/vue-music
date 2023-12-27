<template>
  <Headers></Headers>
  <tab></tab>
  <router-view></router-view>
</template>

<script>
import Headers from '@/components/header/header.vue'
import Tab from '@/components/tab/tab.vue'
export default {
  name: 'App',
  components: {
    Headers,
    Tab
  }
}
</script>

<style>

</style>
