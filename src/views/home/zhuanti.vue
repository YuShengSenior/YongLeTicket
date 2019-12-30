<template>
  <div class="zhuanti">
      <div class="back" @click="handleBack"><img src="/img/back.png" alt=""></div>
      <div class="first"><img src="/img/01.jpg" alt=""></div>
      <div class="sec" @click="handleSec">
        <img src="/img/02.jpg" alt="">
        <span class="platina" @click="handlePlatina"></span>
      </div>
      <div class="third"><img src="/img/03.jpg" alt=""></div>
      <div class="four"><img src="/img/042.jpg" alt=""></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    handleSec () {
      // console.log(111)
    },
    handlePlatina () {
      this.$router.push('/zhuanti/activity')
    }
  },
  beforeMount () {
    this.$store.commit('hide')
  },
  mounted () {

  },
  beforeDestroy () {
    this.$store.commit('show')
  }

}
</script>

<style lang="scss" scoped>
  .zhuanti{
    position: relative;
    .back{
      width: .4rem;
      height: .4rem;
      position: absolute;
      top: .1rem;
      left: .1rem;
    }
    .first{
      img{
        width: 100%;
        height: auto;
      }
    }
    .sec{
      position: relative;
      img{
        width: 100%;
        height: auto;
        vertical-align: top;
      }
      .platina{
        display: block;
        width: 1.08rem;
        height: .22rem;
        position: absolute;
        top: .45rem;
        left: 1.23rem;
        border-radius: 1rem;
      }
    }
    .third{
      img{
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
    .four{
      img{
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }
</style>
