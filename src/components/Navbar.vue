<template>
  <div class="nav">
    <router-link to="/home" tag="li" activeClass="shyactive">
      <span class="iconfont icon-shouye"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/classification" tag="li" activeClass="shyactive">
      <span class="iconfont icon-leimupinleifenleileibie"></span>
      <p>分类</p>
    </router-link>
    <router-link to="/search" tag="li" activeClass="shyactive">
      <span class="iconfont icon-sousuo"></span>
      <p>搜索</p>
    </router-link>
    <router-link to="/center" tag="li" activeClass="shyactive">
      <span class="iconfont icon-wode"></span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav {
  background: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 0.5rem;
  // line-height: 0.5rem;
  padding-top: 0.07rem;
  display: flex;
  z-index: 100;
  li {
    flex: 1;
    text-align: center;
    list-style: none;
    span{
      font-size: .23rem;
      font-weight: bold;
    }
    p{
      font-size: .12rem;
      font-weight: bold;
    }
  }
  .shyactive {
    color: #ff2959;
  }
}
</style>
