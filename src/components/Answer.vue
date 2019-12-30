<template>
  <div class="answer">
    <div class="answer_character" @click="handleAnswer">
      在线问答
      <span class="answer_icon iconfont icon-arrow"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAnswer () {
      // console.log(111111111,this.$route.params.myrouteraddress)
      this.$router.push(`/moreask/${this.$route.params.myrouteraddress}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.answer {
  margin: 0 0.2rem 0.15rem;
  padding: 0 0.2rem;
  height: 0.45rem;
  line-height: 0.45rem;
  border-radius: 0.1rem;
  background: white;
  .answer_character {
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
    font-weight: 700;
    color: #333;
    .answer_icon {
      float: right;
      display: block;
      background-position: 0 -0.75rem;
    }
  }
}
</style>
