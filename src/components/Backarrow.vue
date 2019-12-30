<template>
  <div class="top_icon">
      <div class="zuojiantou" @click="hanleClickArrow">
        <span class="iconfont icon-jiantou" id="zuojiantou"></span>
      </div>
  </div>
</template>

<script>
// 引入弹出框
// 引入遮罩层
import Vue from 'vue'
import { Dialog, Overlay } from 'vant'
Vue.use(Dialog, Overlay)

export default {
  data () {
    return {

    }
  },
  methods: {
    hanleClickArrow () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .top_icon{
    color: red;
    padding-top: .29rem;
    width: calc(100% - .3rem);
    margin-left: .15rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
    .zuojiantou{
      #zuojiantou{
        float: left;
        background-position: 0 -34.54rem;
        width: .3rem;
        height: .31rem;
        background: rgba($color: #000, $alpha: 0.3);
        border-radius: 50%;
        display: block;
        background-size: 1.5rem;
        position: relative;
        &::before{
          color: rgba($color: #fff, $alpha: 0.7);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%)
        }
      }
    }
  }
</style>
