<template>
  <div class="top_background">
      <img :src="`//static.228.cn${mytopBG}`" alt="" class="img">
  </div>
</template>

<script>
export default {
  props: ['mytopBG']
}
</script>

<style lang="scss" scoped>
  .top_background{
    position: absolute;
    content: '';
    z-index: 1;
    height: 2.5rem;
    top: -.6rem;
    left: -75%;
    width: 250%;
    border-radius: 50%;
    overflow: hidden;
    .img{
      position: absolute;
      content: "";
      -webkit-filter: blur(10px);
      filter: blur(10px);
      z-index: 1;
      height: 3.9rem;
      top: -1rem;
      left: 0;
      width: 100%;
      background-size: 200%;
    }
  }

</style>
