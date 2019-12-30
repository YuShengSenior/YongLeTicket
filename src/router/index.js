import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入文件，准备注册路由, 注册一级路由
import Home from '@/views/home'
import Classification from '@/views/classification'
import Search from '@/views/search'
import Searchlist from '@/views/search/Searchlist'

import Center from '@/views/center'
// 引入文件，准备注册路由, 注册二级路由
import Citylist from '@/views/home/citylist'
import City from '@/views/home/city'

import yhte from '@/views/home/yhte'
import subject from '@/views/home/subject'
import subjectdetail from '@/views/home/Subjectdetail'
import opera from '@/views/home/opera'
import operadetail from '@/views/home/Operadetail'

import zhuanti from '@/views/home/zhuanti'
import activity from '@/views/home/Activity'
import activityRule from '@/views/home/ActivityRule'

import ticket from '@/views/home/Ticket'

import Venue from '@/views/home/Venuedetail'
import faqWenda from '@/components/Faqwenda'
import Answerask from '@/components/Answerask'

import Kerwin from '@/views/home/Kerwin'

// 使用vue路由
Vue.use(VueRouter)

// 路由配置表
const routes = [
  // 配置一级路由
  { path: '/home', component: Home },
  { path: '/classification', component: Classification },
  { path: '/search', component: Search },
  { path: '/search/:mysearch', component: Searchlist },

  { path: '/center/:operation', component: Center },
  { path: '/citylist', component: Citylist },
  { path: '/citylist/:citylist', component: City },

  { path: '/classification/:myrouter', component: yhte },
  { path: '/subject', component: subject, name: 'subject' },
  { path: '/subject/mb/:mysubject', component: subjectdetail },

  { path: '/opera', component: opera, name: 'opera' },
  { path: '/opera/detail-:myopera', component: operadetail },

  { path: '/zhuanti/meiyunticket', component: zhuanti },
  { path: '/zhuanti/activity', component: activity },
  { path: '/zhuanti/rule', component: activityRule },

  { path: '/ticket-:myrouteraddress', component: ticket, name: 'ticket' },

  { path: '/venue-:myrouteraddressvenue', component: Venue },
  { path: '/moreFaq/:mymoreFaq', component: faqWenda },
  { path: '/moreask/:mymoreask', component: Answerask },

  { path: '/kerwin', component: Kerwin },

  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
