<template>
  <div class="back">
    <!-- 第一种方法 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" :title="title" />
    <!-- 第二种方法 -->
    <!-- <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft">
        <van-icon name="search" slot="right" />
    </van-nav-bar> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)

export default {
  props: ['title'],
  methods: {
    onClickLeft () {
      // console.log(this.$router)
      this.$router.go(-1)
      // this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style>
</style>
