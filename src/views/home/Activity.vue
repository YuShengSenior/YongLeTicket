<template>
  <div class="activty">
      <div class="activty_head">
          <div class="back" @click="handleClickBack">
              <img src="/img/back.png" alt="">
          </div>
          <div class="activty_head_activity">
              <img src="/img/zhe01.jpg" alt="">
              <span class="activty_head_activity_rules" @click="handleClickRules"></span>
          </div>
          <div class="activty_buyticket" v-for="data in $store.state.imgList" :key="data.id">
              <img :src="`/img/${data.imgOrderNumber}.JPG`" alt="">
              <span class="activty_buyticket_click" @click="handleClickBuyFirst(data.firstId)"></span>

              <span class="activty_buyticket_click" @click="handleClickBuySecond(data.secondId)" v-if="data.secondId === '' ? false : true"></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClickBack () {
      this.$router.go(-1)
    },
    handleClickRules () {
      this.$router.push('/zhuanti/rule')
    },
    handleClickBuyFirst (id) {
      this.$router.push({ path: `/ticket-${id}` })
    },
    handleClickBuySecond (id) {
      this.$router.push({ path: `/ticket-${id}` })
    }
  },
  mounted () {
    this.$store.commit('hide')
    console.log(11111)
  },
}
</script>

<style lang="scss" scoped>
  .activty{
      .activty_head{
          position: relative;
          .back{
              position: absolute;
              top: .15rem;
              left: .15rem;
          }
          .activty_head_activity{
              img{
                  width: 100%;
                  height: auto;
                  vertical-align: middle;
              }
              .activty_head_activity_rules{
                  display: block;
                  width: 1.08rem;
                  height: .22rem;
                  position: absolute;
                  top: 1.17rem;
                  left: 1.23rem;
                  border-radius: 1rem;
              }
          }
      }
      .activty_buyticket{
          font-size: 0;
          position: relative;
          img{
            width: 100%;
            height: auto;
            vertical-align: middle;
          }
          .activty_buyticket_click{
            display: block;
            width: .5rem;
            height: .24rem;
            position: absolute;
            top: 1.68rem;
          }
          .activty_buyticket_click:nth-of-type(odd){
            left: .47rem;
          }
          .activty_buyticket_click:nth-of-type(even){
            left: 2rem;
          }
      }
  }
</style>
