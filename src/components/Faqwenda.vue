<template>
  <div class="faq_wenda">
    <back title="FAQ"></back>
    <div class="content" v-for="(data,index) in dataList" :key="index">
      <div class="content_list">
        <h4>0{{index + 1}}</h4>
        <p><em><img src="http://m2static.228.cn/images/pic_Q.png" alt=""></em>{{data.SQUESTION}}</p>
        <p><em><img src="http://m2static.228.cn/images/pic_A.png" alt=""></em>{{data.SANSWER}}</p>
      </div>
    </div>
    <!-- 引入脚 -->
    <homeFooter></homeFooter>
  </div>

</template>

<script>
// 引入axios
import Axios from 'axios'
import homeFooter from '@/components/Homefooter'
import back from '@/components/back'
export default {
  data () {
    return {
      dataList: []
      // numberList:
    }
  },
  created () {
  },
  mounted () {
    // console.log(this.$route.params.mymoreFaq)
    Axios.get(`/server/question/moreFaq/${this.$route.params.mymoreFaq}.json`).then(res => {
      // console.log(res, 'wenda')
      this.dataList = res.data.data.faqList
      // console.log(this.dataList)
       this.$store.commit('qqq', false)
    })
  },
  components: { back, homeFooter }
}
</script>

<style lang="scss" scoped>
  .content{
    padding-top: .2rem;
    font-weight: 400;
    font-size: .14rem;
    .content_list{
      position: relative;
      margin: 0 .2rem 0 .3rem;
      border-bottom: 1px solid #eee;
      padding-bottom: .15rem;
      h4{
        font-size: .25rem;
        color: #eee;
        position: absolute;
        top: -.15rem;
        left: -.25rem;
      }
      p{
        margin-top: .25rem;
        position: relative;
        padding: .09rem .15rem;
        border-radius: .2rem;
        margin-left: .2rem;
        em{
          top: -.1rem;
          left: -.1rem;
          position: absolute;
          width: .25rem;
          height: .25rem;
          display: block;
          text-align: center;
          line-height: .25rem;
          border-radius: 50%;
        }
      }
      p:nth-of-type(1){
        background-image: linear-gradient(135deg,rgba(255,126,111,.1),rgba(255,41,89,.1));
        color: #ff5169;
        em{
          background: #fedee6;
          color: #ff5169;
          img{
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }
      }
      p:nth-of-type(2){
        background-image: linear-gradient(52deg,rgba(141,160,169,.1),rgba(213,221,255,.1));
        color: #7b8187;
        em{
          background: #e9edf0;
          color: #ff5169;
          img{
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
