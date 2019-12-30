import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mint-ui库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入vant库
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(MintUI)
Vue.use(Vant)
Vue.use(BaiduMap, {
  ak: 'Q76zDNGArdYWGoAn9AbVrqoy5LskBV4P'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
