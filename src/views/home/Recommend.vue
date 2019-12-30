<template>
  <div class="recommend">
      <div class="recommend_list" v-for="data in mydataRecommend" :key="data.ROW_ID" @click="handleClick(data.PRODUCTID)">
          <div class="recommend_list_img">
            <img :src="`//static.228.cn${data.PBIGIMG}`" alt />
          </div>
          <div class="recommend_list_name">{{data.NAME}}</div>
          <div class="recommend_list_beginenddate">{{data.BEGINDATE.substring(5, 7)+'.'+data.BEGINDATE.substring(8,10)}} ~ {{data.ENDDATE.substring(5, 7)+'.'+data.ENDDATE.substring(8,10)}}</div>
          <div class="recommend_list_price"><span class="ff3a56">￥ {{data.MINPRICE}}</span><span class="b5bbc1">&#32;起</span></div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    mydataRecommend: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClick (routeraddress) {
      this.$router.push({ path: `/ticket-${routeraddress}` })
    }
  },
  mounted () {
    // console.log(this.mydataRecommend, 9999)
  }

}
</script>

<style lang="scss" scoped>
  .recommend{
      margin: 0 .2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .recommend_list{
        width: 1.05rem;
        height: 2.11rem;
        margin-bottom: 0.12rem;
        cursor: pointer;
      }
      .recommend_list_name{
        font-size: .13rem;
        height: .34rem;
        line-height: .18rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-top: 0.05rem;
        font-weight: bold
      }
      .recommend_list_beginenddate{
        font-size: .11rem;
        color: #999;
        font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";        }
      .recommend_list_price{
        margin-top: 0.02rem;
        .ff3a56{
          font-size: .13rem;
          color: #ff3a56;
          font-weight: bold
        }
        .b5bbc1{
          font-size: 0.1rem;
          color: #b5bbc1;
        }
      }
  }
  img{
      width: 1.05rem;
      height: 1.4rem;
      border-radius: .1rem
  }
</style>
