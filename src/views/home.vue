<template>
  <div class="home" :style="{ marginBottom : $store.state.myheight }">
    <DownloadApp  v-if="$store.state.isShowApp" @myeventApp="handleEventApp"></DownloadApp>
    <div class="topbar">
      <homeSearch class="home_search"></homeSearch>
      <div class="city" @click="handleClick">
        <span>全国</span>
        <span class="tubiao"></span>
      </div>
    </div>
    <Swiper :options="$store.state.options" class="home_swiper">
      <div class="swiper-slide" v-for="data in $store.state.homeswiper" :key="data.ORDERS" @click="handleClickswiper(data.URL)">
        <img :src="`//static.228.cn${data.IMG}`" :alt="data.REMARK" />
      </div>
    </Swiper>
    <Middlenav></Middlenav>
    <Advertisement :myAdvertisementImg="$store.state.homeadvertisementImg"></Advertisement>
    <Recommendvenue @myevent="handleEvent"></Recommendvenue>
    <Recommend :mydataRecommend="$store.state.homedataRecommend"  v-if="$store.state.isShowRecommend === $store.state.currentIndex"></Recommend>
    <Venue :mydataVenue="$store.state.dataVenueList"  v-if="$store.state.isShowVenue === $store.state.currentIndex"></Venue>
    <!-- Home页面--查看更多组件 -->
    <DownloadApp  v-if="$store.state.isShowApp" @myeventApp="handleEventApp"></DownloadApp>
    <homeFooter></homeFooter>
  </div>
</template>

<script>
// Swiper组件
import Swiper from '@/components/Swiper'
// 中间导航组件
import Middlenav from '@/views/home/Middlenav'
// 广告组件
import Advertisement from '@/views/home/Advertisement'
// 推荐和场馆
import Recommendvenue from '@/views/home/Recommendvenue'
// 推荐组件
import Recommend from '@/views/home/Recommend'
// 场馆组件
import Venue from '@/views/home/Venue'
// 搜索框
import homeSearch from '@/views/home/home_search'
// 脚
import homeFooter from '@/components/Homefooter'
// app
import DownloadApp from '@/components/DownloadApp'
export default {
  data () {
    return {}
  },
  beforeCreate () {
    if (localStorage.getItem('city')) {} else {
      localStorage.setItem('city', 'all')
    }

    if (localStorage.getItem('cityjx')) {} else {
      localStorage.setItem('cityjx', '全国')
    }

    if (localStorage.getItem('classifyjx')) {} else {
      localStorage.setItem('classifyjx', '全部分类')
    }

    if (localStorage.getItem('classify')) {} else {
      localStorage.setItem('classify', 'all')
    }

    if (localStorage.getItem('time')) {} else {
      localStorage.setItem('time', 'all')
    }

    if (localStorage.getItem('timejx')) {} else {
      localStorage.setItem('timejx', '全部时间')
    }
  },
  components: { DownloadApp, homeSearch, Swiper, Middlenav, Advertisement, Recommendvenue, Recommend, Venue, homeFooter },
  methods: {
    handleClick () {
      this.$router.push({ path: '/citylist' })
    },
    handleEvent (index) {
      this.$store.state.currentIndex = index
      if (this.$store.state.currentIndex === 1) {
        this.$store.dispatch('getHomeVenueData')
      }
    },
    handleEventApp (ishow) {
      this.$store.state.isShowApp = ishow
    },
    handleClickswiper (swiperURL) {
      if (swiperURL.indexOf('/') < 0) {
        this.$router.push(`/ticket-${swiperURL}`)
      } else {
        this.$router.push(`${swiperURL}`)
      }
    }
  },
  created () {
    // console.log(window.innerHeight, 'window.innerHeight')
  },
  mounted () {
    this.$store.dispatch('getHomeData')
  }
}
</script>

<style lang="scss" scoped>
.home {
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
    .city {
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
      cursor: pointer;
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
.down {
  margin: 0 0.2rem;
  .down_recommend {
    .down_recommend_bold {
      span {
        font-size: 0.22rem;
        margin-right: 0.1rem;
        font-weight: bold;
      }
    }
  }
  .down_List {
    width: 3.2rem;
    display: flex;
    flex-wrap: wrap;
    .down_List_every {
      width: 1.05rem;
      background: red;
    }
  }
}
</style>
