<template>
  <div class="faq" @click="handlefaq">
    <div class="faq_character">
      FAQ
      <span class="faq_icon iconfont icon-arrow"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handlefaq () {
      this.$router.push(`/moreFaq/${this.$route.params.myrouteraddress}`)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.faq {
  margin: 0 0.2rem 0.15rem;
  padding: 0 0.2rem;
  height: 0.45rem;
  line-height: 0.45rem;
  border-radius: 0.1rem;
  background: white;
  .faq_character {
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    font-weight: 700;
    color: #333;
    .faq_icon {
      // margin-top: 0.165rem;
      float: right;
      display: block;
      background-position: 0 -0.75rem;
    }
  }
}
</style>
