<template>
  <div class="activityrules">
      <img src="/img/back.png" alt="" class="back" @click="handleClickBack">
      <img src="/img/zhegz.jpg" alt="" class="rule">
  </div>
</template>

<script>
export default {
  methods: {
    handleClickBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.$store.commit('hide')
  }
}
</script>

<style lang="scss" scoped>
  .activityrules{
    position: relative;
    .back{
      position: absolute;
      top: .15rem;
      left: .15rem;
      width: .4rem;
      height: .4rem;
    }
    .rule{
      width: 100%;
      height: auto;
    }
  }
</style>
