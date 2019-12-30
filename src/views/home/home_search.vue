<template>
  <div class="home_search">
      <input type="text" placeholder="搜索" @focus="onfocus">
      <span class="iconfont icon-sousuo"></span>
  </div>
</template>

<script>
export default {
  methods: {
    onfocus () {
      this.$router.push({ path: '/search' })
    }
  }

}
</script>

<style lang="scss" scoped>
  .home_search{
    position: relative;
    input{
      position: relative;
      height: .34rem;
      line-height: .34rem;
      font-size: .13rem;
      width: calc(100% - .75rem);
      padding: 0 .2rem 0 .55rem;
      border: none;
      text-align: center;
      background: white;
      width: 2.7rem;
      margin-top: .03rem;
      border-radius: 1rem;
    }
    span{
      width: .14rem;
      height: .14rem;
      display: block;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      left: 44%;

    }
  }
</style>
