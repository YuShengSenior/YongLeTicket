<template>
  <div class="swiper-container shy">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import Axios from 'axios'

import Swiper from 'swiper' // swiper js
import 'swiper/css/swiper.min.css' // 引入 css

export default {
  updated () {
    /* eslint-disable no-new */
    new Swiper('.shy', this.options)
  },
  props: ['options']
}
</script>

<style lang="scss" scoped>
  .shy{
    width: 3.6rem;
    height: 1.46rem;
    border-radius: 0 0 .1rem .1rem;
    .swiper-wrapper{
      .swiper-slide{
        img{
          width: 100%;
        }
      }
    }
  }
</style>
