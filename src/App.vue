<template>
  <div id="app">
    <Navbar v-if='$store.state.isShow'></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  created () {
    this.$store.commit('www', true)
  }
}
</script>

<style lang="scss" scoped>
body,html{
  height: 100%;
}
</style>
