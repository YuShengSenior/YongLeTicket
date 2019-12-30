<template>
  <div class="advertisement">
    <div class="advertisement_imgMargin" @click="handleImg">
      <img :src="`//static.228.cn${myAdvertisementImg}`" alt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleImg () {
      this.$router.push({ path: `/zhuanti/meiyunticket` })
    }
  },
  props: ['myAdvertisementImg']
}
</script>

<style lang="scss" scoped>
  .advertisement {
    .advertisement_imgMargin {
      margin: 0 0.2rem;
      img {
        border-radius: 0.05rem;
        width: 100%;
      }
    }
  }
</style>
