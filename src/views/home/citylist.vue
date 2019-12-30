<template>
  <div class="citylist">
    <back :title="$store.state.mytitleCityList"></back>
    <div class="positioncity">
      定位城市
      <span class="positioncity-city">大连</span>
      <span class="positioncity-city-isshow">无演出</span>
    </div>
    <h4 class="hot">热门城市</h4>
    <div class="hotcity">
      <span @click="handleClickQG">全国</span>
      <span v-for="(data,index) in $store.state.hotcityList" :key="data.CITYNAME" @click="handleClickHot(index,data.CITYJX)" :class="$store.state.currentIndexCityList === index ? 'active' : ''">{{data.CITYNAME}}</span>
    </div>
    <h4 class="more">更多城市</h4>
    <div class="morecity">
      <span v-for="(data,index) in $store.state.morecityList" :key="data.CITYNAME" @click="handleClickMore(index,data.CITYJX)" :class="$store.state.currentIndexCityList === index ? 'active' : ''">{{data.CITYNAME}}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import back from '@/components/back'
Vue.use(NavBar)
export default {
  data () {
    return {}
  },
  methods: {
    handleClickQG () {
      this.$router.push({ path: '/home' })
    },
    handleClickHot (index, cityURL) {
      this.$router.push({ path: `/citylist/${cityURL}` })
    },
    handleClickMore (index, cityURL) {
      this.$router.push({ path: `/citylist/${cityURL}` })
    }
  },
  components: { back },
  beforeMount () {
    this.$store.commit('hide')
  },
  mounted () {
    this.$store.dispatch('getCityListData')
  },
  destroyed () {
    this.$store.commit('show')
  }
}

</script>

<style lang="scss" scoped>
  .positioncity{
    margin-top: 0.3rem; margin-left:0.2rem; font-size:0.14rem; color: #999;
    .positioncity-city{
      color: #ff3a56; font-size: 0.14rem; margin-left: 0.1rem;
    }
    .positioncity-city-isshow{
      color: #ff3a56; font-size: 0.14rem; margin-left: 0.1rem;
    }
  }
  .hot{
    margin: .2rem .2rem 0;color: #999;font-size: 0.13rem;font-weight: normal;
  }
  .hotcity{
    margin: .1rem .2rem;
    overflow: hidden;
    text-align: center;
    span{
      height: .4rem;
      line-height: .4rem;
      width: calc(100% / 4);
      display: block;
      float: left;
      color: #7b8187;
      font-size: .14rem;
    }
    .active{color: #ff3a56;}

  }
  .more{
    font-size: 0.13rem;
    color: #999;
    margin: .2rem .2rem 0;
    font-weight: normal;
  }
  .morecity{
    margin: .1rem .2rem;
    overflow: hidden;
    text-align: center;
    span{
      height: .4rem;
      line-height: .4rem;
      width: calc(100% / 4);
      display: block;
      float: left;
      color: #7b8187;
      font-size: .14rem;
    }

  }
</style>
