<template>
  <div class="city">
    <DownloadApp  v-if="isShowApp" @myeventApp="handleEventApp"></DownloadApp>
    <div class="topbar">
      <homeSearch class="home_search"></homeSearch>
      <div class="citylist" @click="handleClick">
        <span>{{cityName}}</span>
        <span class="tubiao"></span>
      </div>
    </div>
    <Swiper :options="options" class="home_swiper" v-if="SwiperList.length">
      <div class="swiper-slide" v-for="data in SwiperList" :key="data.ORDERS" @click="handleClickswiper(data.URL)">
        <img :src="`//static.228.cn${data.IMG}`" :alt="data.REMARK" />
      </div>
    </Swiper>
    <Middlenav/>
    <Advertisement :myAdvertisementImg="AdvertisementImg"></Advertisement>
    <Recommendvenue @myevent="handleEvent"></Recommendvenue>
    <Recommend :mydataRecommend="dataRecommend"  v-if="isShowRecommend === currentIndex"></Recommend>
    <Venue :mydataVenue="dataVenue"  v-if="isShowVenue === currentIndex"></Venue>
    <DownloadApp  v-if="isShowApp" @myeventApp="handleEventApp"></DownloadApp>
    <homeFooter />
  </div>
</template>

<script>
import Axios from 'axios'
import homeFooter from '@/components/Homefooter'
import homeSearch from '@/views/home/home_search'
import Swiper from '@/components/Swiper'
import Middlenav from '@/views/home/Middlenav'
import Advertisement from '@/views/home/Advertisement'
import Recommendvenue from '@/views/home/Recommendvenue'
import Recommend from '@/views/home/Recommend'
import Venue from '@/views/home/Venue'
import DownloadApp from '@/components/DownloadApp'

export default {
  data () {
    return {
      isShowApp: true,
      cityName: '',
      options: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      SwiperList: [],
      AdvertisementImg: '',
      currentIndex: 0,
      dataRecommend: [],
      dataVenue: [],
      isShowRecommend: 0,
      isShowVenue: 1,
      swiperurl: '',
      cityUrl: ''
    }
  },
  methods: {
    handleClick () {
      this.$router.push({ path: '/citylist' })
    },
    handleEventApp (ishow) {
      this.isShowApp = ishow
    },
    handleClickswiper (swiperURL) {
      // this.$router.push({ path: `/ticket-${swiperURL}` })
      if (swiperURL.indexOf('/') < 0) {
        // console.log(swiperURL.indexOf('/'), 1111111)
        this.$router.push(`/ticket-${swiperURL}`)
      } else {
        this.$router.push(`${swiperURL}`)
      }
    },
    handleEvent (index) {
      this.currentIndex = index
      // console.log('父组件被调用了', index)
      // console.log(this.currentIndex, '生命周期打印')
      if (this.currentIndex === 1) {
        // console.log('该发ajax了，home页面发送的')
        Axios.get(`/server/content/moreProductPlay.json?fcity=${this.cityUrl}&pageNum=1&type=1`).then(res => {
          // console.log(res)
          this.dataVenue = res.data.data.venuePage.list
        })
      }
    }
  },
  components: { DownloadApp, homeSearch, Swiper, Middlenav, Advertisement, Recommendvenue, Recommend, Venue, homeFooter },
  mounted () {
    Axios.get(`/server/content/city/${this.$route.params.citylist}.json`).then(
      res => {
        // console.log(res)
        this.cityName = res.data.data.fconfig.CITYNAME
        this.SwiperList = res.data.data.slideList
        this.AdvertisementImg = res.data.data.blockRec[0].IMG
        this.dataRecommend = res.data.data.recommendPage.list
        this.cityUrl = res.data.data.fcity
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.city {
  .topbar {
    width: 100;
    height: 0.48rem;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ff7e6f),
      to(#ff2959)
    );
    padding: 0.04rem 0.15rem 0.04rem 0.1rem;
    .home_search {
      float: right;
    }
    .citylist {
      // width: .65rem;
      // height: .4rem;
      // padding: 0 .15rem 0 0;
      // line-height: .4rem;
      // text-align: center;
      width: 0.5rem;
      height: 0.4rem;
      line-height: 0.4rem;
      position: relative;
      text-align: center;
      padding-right: 0.15rem;
      color: #fff;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      .tubiao{
        position: absolute;
        right: 0.1rem;
        top: .175rem;
        display: block;
        width: .07rem;
        height: .05rem;
        background: url(/img/icon.png) no-repeat;
        background-position: 0 -1144px;
        background-size: .75rem;
      }
    }
  }
}
</style>
