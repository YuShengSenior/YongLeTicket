<template>
  <div class="search">
    <form action="/">
      <van-search placeholder="搜索" show-action shape="round" v-model="$store.state.mysearchvalue" @search="onsearch($store.state.mysearchvalue)">
        <div slot="action" @click="onCancel">{{cancel}}</div>
      </van-search>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
Vue.use(Search)

export default {
  data () {
    return {

    }
  },
  props: ['cancel'],
  methods: {
    onsearch (value) {
      this.$router.push({ path: `/search/${value}` })
    },
    onfocus () {
      this.$router.push({ path: '/search' })
    },
    onCancel () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">

</style>
