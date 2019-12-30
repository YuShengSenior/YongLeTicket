<template>
  <div>
      <div class="classifyBox">
          <ul @click="showcity" :class="cityred?'red':''" >{{this.dropcity}}&nbsp;&nbsp;&nbsp;&nbsp;{{this.citysymbol}}</ul>
          <ul @click="showclassify" :class="classifyred?'red':''">{{this.dropclassify}}&nbsp;&nbsp;&nbsp;&nbsp;{{this.classifysymbol}}</ul>
          <ul @click="showtime" :class="timered?'red':''">{{this.droptime}}&nbsp;&nbsp;&nbsp;&nbsp;{{this.timesymbol}}</ul>
      </div>
      <div class="showsth" v-show="this.ishsow" @click="dropmenu()">
        <!-- NAME -->
        <ul v-if="this.citystate">
          <li class="cityname" v-for="city in citylist" :key="city.FCONFIGID" @click="cityclick(city.CITYJX,city.JXNAME)"> {{city.JXNAME}} </li>
        </ul>
        <ul v-if="this.classifystate">
          <li class="cityname" v-for="classify in classifylist" :key="classify.PRODUCTTYPEAID" @click="classifyclick(classify.TYPEAJX,classify.NAME)"> {{classify.NAME}} </li>
        </ul>
        <ul v-if="this.timestate">
          <li class="cityname" v-for="time in timelist" :key="time.PRODUCTTYPEAID" @click="timeclick(time.TYPEAJX,time.NAME)"> {{time.NAME}} </li>
        </ul>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '@/API/bus'

export default {
  data () {
    return {
      citysymbol: '▾',
      classifysymbol: '▾',
      timesymbol: '▾',
      classifytype: [],
      cityred: false,
      classifyred: false,
      timered: false,
      dropcity: localStorage.getItem('cityjx'),
      dropclassify: localStorage.getItem('classifyjx'),
      droptime: localStorage.getItem('timejx'),
      citylist: [{ CITYNAME: '全国', PRODUCTNUM: 0, CITYJX: 'all', JXNAME: '全国', FCONFIGID: 0 }],
      classifylist: [{ TYPEAJX: 'all', PRODUCTTYPEAID: 0, NAME: '全部分类' }],
      timelist: [
        { TYPEAJX: 'all', PRODUCTTYPEAID: 0, NAME: '全部时间' },
        { TYPEAJX: 'today', PRODUCTTYPEAID: 1, NAME: '今天' },
        { TYPEAJX: 'tomorrow', PRODUCTTYPEAID: 2, NAME: '明天' },
        { TYPEAJX: 'thisWeek', PRODUCTTYPEAID: 3, NAME: '本周内' },
        { TYPEAJX: 'thisWeekEnd', PRODUCTTYPEAID: 4, NAME: '本周末' },
        { TYPEAJX: 'nextWeek', PRODUCTTYPEAID: 5, NAME: '下周' },
        { TYPEAJX: 'thisMonth', PRODUCTTYPEAID: 6, NAME: '本月' }
      ],
      showwidth: 0,
      isFixed: false,
      ishsow: false,
      citystate: false,
      classifystate: false,
      timestate: false
    }
  },
  beforeCreate () {
    this.$store.dispatch('changedropmenu')
    bus.$on('citybus', (city) => {
      this.dropcity = city
      localStorage.setItem('cityjx', city)
    })
    bus.$on('classifybus', (data) => {
      this.dropclassify = data
      localStorage.setItem('classifyjx', data)
    })
    bus.$on('timebus', (data) => {
      this.droptime = data
      localStorage.setItem('timejx', data)
    })
  },
  mounted () {
    axios({
      url: '/server/category/default.json'
    }).then(res => {
      this.classifytype = res.data.data.searMap
      this.citylist = [...this.citylist, ...res.data.data.fcitys]
      this.classifylist = [...this.classifylist, ...res.data.data.typeas]
      if (!localStorage.getItem('city')) {
        localStorage.setItem('city', 'all')
        localStorage.setItem('cityjx', '全国')
      }
      if (!localStorage.getItem('classify')) {
        localStorage.setItem('classifyjx', '全部分类')
        localStorage.setItem('classify', 'all')
      }
      if (!localStorage.getItem('time')) {
        localStorage.setItem('time', 'all')
        localStorage.setItem('timejx', '全部时间')
      }
    })
  },
  methods: {
    // 操作city的方法
    showcity () {
      this.ishsow = !this.ishsow
      this.citystate = !this.citystate
      this.classifystate = false
      this.timestate = false
      this.cityred = !this.cityred
    },
    showtime () {
      this.ishsow = !this.ishsow
      this.timestate = !this.timestate
      this.citystate = false
      this.classifystate = false
      this.timered = !this.timered
    },
    showclassify () {
      this.ishsow = !this.ishsow
      this.classifystate = !this.classifystate
      this.citystate = false
      this.timestate = false
      this.classifyred = !this.classifyred
    },
    cityclick (cityjx, jxname) {
      this.ishsow = !this.ishsow
      this.citystate = !this.citystate
      this.cityred = !this.cityred
      localStorage.setItem('city', cityjx)
      bus.$emit('citybus', jxname)
      this.$store.commit('changecity', cityjx)
    },
    // 操作分类的方法
    classifyclick (classifyjx, classjxname) {
      this.ishsow = !this.ishsow
      this.classifystate = !this.classifystate
      this.classifyred = !this.classifyred
      localStorage.setItem('classify', classifyjx)
      bus.$emit('classifybus', classjxname)
      this.$store.commit('changeclassify', classifyjx)
    },
    timeclick (timejx, timejxname) {
      this.ishsow = !this.ishsow

      this.timestate = !this.timestate

      this.timered = !this.timered

      localStorage.setItem('time', timejx)
      bus.$emit('timebus', timejxname)
      this.$store.commit('changetime', timejx)
    },
    dropmenu () {
      this.$store.dispatch('changedropmenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.red{
  color: red;
}
.fixed{
    position: relative;
    top: 0;
    left: 0;
}
div.classifyBox{
    display: flex;
    text-align: center;
    height: .4rem;
    line-height: .4rem;
    ul{
        font-size: .12rem;
        flex: 1;
        position: relative;
        border-bottom: 1px solid #cccccc;
        background: #ffffff;
    }
}
div.showsth{
  overflow: hidden;
  height: 100%;
    ul{
    overflow: auto;
    background:#f0f5f9;
    padding: .2rem .3rem;
    position: absolute;
    border-radius: 0 0 .15rem .15rem;
        li{
            float: left;
            width: 1rem;
            height: .35rem;
            line-height: .35rem;
            text-align: center;
    }
        }
        }
</style>
