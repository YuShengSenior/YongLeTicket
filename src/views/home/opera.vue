<template>
  <div class="opera">
    <back title="Kerwin说戏"></back>
    <Swiper :options="options" class="home_swiper">
      <div class="swiper-slide" v-for="data in $store.state.operaSwiperIMGList" :key="data.ROW_ID" @click="handleClickswiper(data.URL)">
        <img :src="`//static.228.cn${data.IMG}`" :alt="data.REMARK" />
      </div>
    </Swiper>
    <div class="opera_goods">
      <div class="kerwin" @click="hanleKerwin">
        <p>
          <span class="fl0">
            <img src="/kerwin/pic1800.jpg" alt="">
            <i></i>
          </span>
          <span class="fl0text">
            <b class="b">成功学讲师</b>
            <b class="em">2019年12月20日</b>
          </span>
        </p>
        <p class="kerwintext">
          名师介绍<br/>前IBM高级软件工程师， 5年研发经验，获得IBM WORKLIGHT 跨平台移动应用高级开发者认证，致力于HTML5，Android，ios，混合应用的开发与最佳实践。为企业内部进行跨平台应用开发培训，帮助职员短时间内，高效率，快速实现技术积累与储备。<br/>热爱IT培训行业，注重理论基础与实战相结合，善于讲解技术原理以及帮助学生提高自学能力，注重理论基础与实战相结合，善于讲解技术原理以及帮助学生提高自学能力。想对学员说的话：没有功德圆满， 没有一步登天<br/>名师虽贵绝不省人工，面授虽繁必不减品质
        </p>
      </div>
      <div class="opera_goods_every" v-for="data in $store.state.operaGoodsIMGList" :key="data.ROW_ID" @click="handleClickGoods(data.LINKID)">
        <p class="cl">
          <span class="fl1">
            <img :src="`//static.228.cn${data.IMG}`" alt="">
            <i></i>
          </span>
          <span class="fl2">
            <b class="b">{{data.REMARK}}</b>
            <em class="em">{{data.IMG.substring(8,12)}}年{{data.IMG.substring(13,15)}}月{{data.IMG.substring(17,18)}}日</em>
          </span>
        </p>
        <div class="brief">
          {{data.TEXT}}
        </div>
      </div>
    </div>
    <div class="more" @click="hanleClickMore">展开更多</div>
    <homeFooter/>
  </div>
</template>

<script>
import Axios from 'axios'
import back from '@/components/back'
import Swiper from '@/components/Swiper'
import homeFooter from '@/components/Homefooter'
export default {
  data () {
    return {
      options: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: { back, Swiper, homeFooter },
  created () {
    if (this.$route.name === 'opera') {
      document.documentElement.style.background = '#f7f3f3'
    }
  },
  mounted () {
    this.$store.dispatch('getOperaData')
  },
  destroyed () {
    if (document.documentElement.style.background === 'rgb(247, 243, 243)') {
      document.documentElement.style.background = '#fff'
    }
  },
  methods: {
    handleClickswiper (URLId) {
      var newId = URLId.substring(30, 37)
      this.$router.push({ path: `/opera/detail-${newId}` })
    },
    handleClickGoods (URLId) {
      this.$router.push({ path: `/opera/detail-${URLId}` })
    },
    hanleClickMore () {
      Axios.post('./json/Operamore.json').then(res => {
      })
    },
    hanleKerwin () {
      this.$router.push({ path: '/kerwin' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .opera{
    margin-bottom: .5rem;
    .opera_goods{
      margin: 0 .15rem .15rem .15rem;
      .kerwin{
        width: 100%;
        /* height: 1.69rem; */
        margin-top: .15rem;
        /* box-shadow: 0 0 0.05rem 0.01rem #eee; */
        border-radius: .1rem;
        overflow: hidden;
        padding-bottom: .15rem;
        background: white;
        .fl0text{
          margin-left: .15rem;
          font-size: .2rem;
          display: block;
          b{
            display: block;
          }
        }
        .kerwintext{
          border-top: 1px solid #f3f4f5;
          font-size: 0.13rem;
          padding-top: 0.05rem;
          color: #7b8187;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-left: .15rem;
          margin-right: .15rem;
        }
      }
      .opera_goods_every{
        width: 100%;
        /* height: 1.69rem; */
        margin-top: .15rem;
        /* box-shadow: 0 0 0.05rem 0.01rem #eee; */
        border-radius: .1rem;
        overflow: hidden;
        padding-bottom: .15rem;
        background: white;
        .cl{
          padding: .15rem;
          background: #fff;
          zoom: 1;
          height: 1.32rem;
          .fl1{
            float: left;
            width: 1.8rem;
            height: 1.02rem;
            border-radius: .1rem;
            overflow: hidden;
            position: relative;
            img{
              background: rgba(123, 115, 3, 0.3);
              vertical-align: top;
              width: 100%;
              height: auto;
            }
            i{
              width: .25rem;
              height: .25rem;
              display: block;
              position: absolute;
              background-image: url(/img/icon.png);
              background-size: 1.5rem;
              background-position: 0 -37.755rem;
              top: 0;
              left: 0;
            }
          }
          .fl2{
            width: calc(100% - 1.9rem);
            margin-left: .1rem;
            .b{
              font-size: .16rem;
              display: block;
              height: .42rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .em{
              font-size: .11rem;
              display: block;
              height: .42rem;
              color: #b5bbc1;
              font-style: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              margin-top: 0.1rem;
            }
          }
        }
        .brief{
          border-top: 1px solid #f3f4f5;
          font-size: 0.13rem;
          padding-top: 0.05rem;
          color: #7b8187;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-left: .15rem;
          margin-right: .15rem;
        }
      }
    }
    .more{
      height: .3rem;
      width: 100%;
      background: #fff7f7;
      line-height: .3rem;
      text-align: center;
    }
  }
</style>
