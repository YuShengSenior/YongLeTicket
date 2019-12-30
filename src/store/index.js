import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Navbar 显示隐藏状态
    isShow: null,
    dataList: [],
    // home组件页面状态
    homeswiper: [],
    homeadvertisementImg: '',
    homedataRecommend: [],
    homecityUrl: '',
    dataVenueList: [],
    isShowRecommend: 0,
    currentIndex: 0,
    isShowVenue: 1,
    myheight: '50px',
    isShowApp: true,
    options: {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination'
      }
    },
    // Middlenav组件状态
    dataList1: [
      { name: '演唱会', myrouter: 'yanchanghui', id: 1 },
      { name: '话剧舞台剧', myrouter: 'huajuwutaiju', id: 2 },
      { name: '体育赛事', myrouter: 'tiyusaishi', id: 3 },
      { name: '儿童亲子', myrouter: 'ertongqinzi', id: 4 }
    ],
    dataList2: [
      { name: '全部分类', myrouter: 'classification', id: 5 },
      { name: '活动', myrouter: 'subject', id: 6 },
      { name: 'Kerwin说', myrouter: 'opera', id: 7 },
      { name: '我的', myrouter: 'center', id: 8 }
    ],
    // cityList组件页面状态
    hotcityList: [],
    morecityList: [],
    currentIndexCityList: 0,
    mytitleCityList: '选择演出城市',

    // Recommendvenue组件状态

    // 活动页面subject组件状态

    // kerwin说页面Opera组件状态
    operaSwiperIMGList: [],
    operaGoodsIMGList: [],

    // kerwin说页面下detail组件页面状态
    opearDetail: '',

    // 广告页面下的activity组件页面状态
    imgList: [
      { imgOrderNumber: '0102', firstId: '624230871', secondId: '624186381', id: 1 },
      { imgOrderNumber: '0304', firstId: '623928479', secondId: '610490038', id: 2 },
      { imgOrderNumber: '0506', firstId: '613739226', secondId: '634171403', id: 3 },
      { imgOrderNumber: '0708', firstId: '624268412', secondId: '634171216', id: 4 },
      { imgOrderNumber: '0910', firstId: '634027241', secondId: '633999475', id: 5 },
      { imgOrderNumber: '1112', firstId: '567921063', secondId: '626375209', id: 6 },
      { imgOrderNumber: '1314', firstId: '595899853', secondId: '633075562', id: 7 },
      { imgOrderNumber: '1516', firstId: '609086829', secondId: '582473600', id: 8 },
      { imgOrderNumber: '1718', firstId: '634920406', secondId: '634168872', id: 9 },
      { imgOrderNumber: '1920', firstId: '633583873', secondId: '626953716', id: 10 },
      { imgOrderNumber: '2122', firstId: '615162434', secondId: '615165438', id: 11 },
      { imgOrderNumber: '2324', firstId: '619949922', secondId: '633565155', id: 12 },
      { imgOrderNumber: '2526', firstId: '627991329', secondId: '594134631', id: 13 },
      { imgOrderNumber: '2728', firstId: '627259837', secondId: '611342337', id: 14 },
      { imgOrderNumber: '2930', firstId: '576925119', secondId: '585448891', id: 15 },
      { imgOrderNumber: '3132', firstId: '585433074', secondId: '605646975', id: 16 },
      { imgOrderNumber: '3334', firstId: '626085885', secondId: '633933416', id: 17 },
      { imgOrderNumber: '3536', firstId: '613153314', secondId: '', id: 18 }
    ],
    // 详情页面用的状态
    goodslist: [],
    awaitgoodslist: [],
    nowcity: localStorage.getItem('city'),
    nowclassify: localStorage.getItem('classify'),
    nowtime: localStorage.getItem('time'),
    counter: 1,
    // search 搜索框状态
    mysearchvalue: '',
    searchList: [],
    // 显示更多按钮状态
    isshowmore: true
  },
  mutations: {
    qqq (store, state) {
      store.isShow = state
    },
    www (store, state) {
      store.isShow = state
    },
    show (state) {
      state.isShow = true
    },
    hide (store) {
      store.isShow = false
    },
    // home页面的数据赋值
    // (1)轮播、广告、推荐、城市IDurl数据赋值
    getHomeDataMutation (state, payload) {
      state.homeswiper = payload.homeSwiperList
      state.homeadvertisementImg = payload.homeAdvertisementImg
      state.homedataRecommend = payload.homeDataRecommend
      state.homecityUrl = payload.homeCityUrl
    },
    // (2)点击场馆数据赋值
    getHomeVenueDataMutation (state, payload) {
      state.dataVenueList = payload
    },
    // (3)点击城市列表数据赋值
    getCityListDataMutation (state, payload) {
      state.hotcityList = payload.hotCityList
      state.morecityList = payload.moreCityList
    },
    // 活动页面subject数据赋值
    getSubjectDataMutation (state, payload) {
      state.dataList = payload
    },

    // kerwin说页面Opera数据赋值
    getOperaDataMutation (state, data) {
      state.operaSwiperIMGList = data.resSwiperList
      state.operaGoodsIMGList = data.resGoodsList
    },
    getOperaDataDetailMutation (state, payload) {
      // console.log(payload, 2222222)
      state.opearDetail = payload
    },
    // 管理goods列表
    getGoodsList (state, payload) {
      state.goodslist = payload
    },
    // 存储全国城市列表
    awaitGoodsList (state, payload) {
      state.awaitgoodslist = payload
    },
    // 管理城市联动
    changecity (state, payload) {
      state.nowcity = payload
    },
    changeclassify (state, payload) {
      state.nowclassify = payload
    },
    changetime (state, payload) {
      state.nowtime = payload
    },
    disposelist (state, payload) {
      state.goodslist = [...state.goodslist, ...payload]
    },
    // 搜索框
    getSearchlistMutations (state, payload) {
      state.searchList = payload
      // console.log(payload,'02020')
    },
    setshowmore (state, payload) {
      state.isshowmore = payload
    }
  },
  actions: {
    // home页面发送ajax
    // (1)轮播、广告、推荐、城市IDurl发送ajax
    getHomeData (store) {
      Axios.get('/server/content/index.json').then(res => {
        var homeSwiperList = res.data.data.slideList
        var homeAdvertisementImg = res.data.data.blockRec[0].IMG
        var homeDataRecommend = res.data.data.recommendPage.list
        var homeCityUrl = res.data.data.fcity
        store.commit('getHomeDataMutation', { homeSwiperList, homeAdvertisementImg, homeDataRecommend, homeCityUrl })
      })
    },
    // (2)点击场馆发送ajax
    getHomeVenueData (store) {
      Axios.get(`/server/content/moreProductPlay.json?fcity=${store.state.homecityUrl}&pageNum=1&type=1`).then(res => {
        store.commit('getHomeVenueDataMutation', res.data.data.venuePage.list)
      })
    },
    // (3)点击城市列表发送ajax
    getCityListData (store) {
      Axios.get('/server/content/city/list.json').then(res => {
        var hotCityList = res.data.data.hotCitys
        var moreCityList = res.data.data.fcitys
        store.commit('getCityListDataMutation', { hotCityList, moreCityList })
      })
    },
    // 活动页面subject发送ajax
    getSubjectData (store) {
      Axios.get('/server/subject/list.json').then(res => {
        store.commit('getSubjectDataMutation', res.data.data.subjectPage.list)
      })
    },
    // kerwin说页面Opera发送ajax
    getOperaData (store) {
      Axios.get('server/opera/list.json').then(res => {
        var resSwiperList = res.data.data.focusImgList
        var resGoodsList = res.data.data.sxList
        store.commit('getOperaDataMutation', { resSwiperList, resGoodsList })
      })
    },
    getOperaDataDetail (store, url) {
      Axios.get(`/server/opera/detail-${url}.json`).then(res => {
        // console.log(res, 222222222)
        store.commit('getOperaDataDetailMutation', res.data.data)
      })
    },

    // 城市联动
    changedropmenu (store) {
      store.state.counter = 1
      let cityDrop = store.state.nowcity
      let classifyDrop = store.state.nowclassify
      let timeDrop = store.state.nowtime
      if (store.state.nowcity === 'all') {
        cityDrop = ''
      } else {
        cityDrop = `-${store.state.nowcity}`
      }
      if (store.state.nowclassify === 'all') {
        classifyDrop = ''
      } else {
        classifyDrop = `-${store.state.nowclassify}`
      }
      if (store.state.nowtime === 'all') {
        timeDrop = ''
      } else {
        timeDrop = `-${store.state.nowtime}`
      }
      if (((cityDrop === '') && classifyDrop === '') && timeDrop === '') {
        Axios({
          method: 'get',
          url: '/server/category/default.json'
        }).then(res => {
          store.commit('getGoodsList', res.data.data.pagerMemory.list)
          store.commit('awaitGoodsList', res.data.data.pagerMemory.list)
          store.commit('setshowmore', res.data.data.pagerMemory.hasNextPage)
        })
      } else {
        Axios.get(`/server/category/search${cityDrop}${classifyDrop}${timeDrop}.json`).then(res => {
          store.commit('getGoodsList', res.data.data.pagerMemory.list)
          store.commit('setshowmore', res.data.data.pagerMemory.hasNextPage)
        })
      }
    },
    askmoerdata (store) {
      store.state.counter++
      const data = {
        'params': `datestrEscape=all&datestr=all&type=1&tagstr=all&datestrSelected=${store.state.nowtime}&typebjx=all&orderstype=all&filter=all&total=629&typeajx=${store.state.nowclassify}&cityjx=${store.state.nowcity}&keyword=&pagenum=${store.state.counter}`
      }
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data),
        url: '/server/search/moreSearch.json'
      }
      Axios(options).then(res => {
        store.commit('disposelist', res.data.data.pagerMemoryList)
        if (res.data.data.pagerMemoryList.length === 0) {
          store.commit('setshowmore', false)
        }
        // console.log(store.state.goodslist)
      })
    },
    // 搜索发送ajax
    getSearchlist (store) {
      Axios.get(`/server/search/s/${store.state.mysearchvalue}.json`).then(res => {
        store.commit('getSearchlistMutations', res.data.data.pagerMemory.fistPage)
      })
    }
  },
  modules: {
  }
})
