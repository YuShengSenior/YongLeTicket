<template>
  <div class="ticket" :style="{ marginBottom: mymarginbottom}">
      <DownloadApp v-if="isShowApp" @myeventApp="handleEventApp"></DownloadApp>
      <div class="headImg">
        <div class="zhezhaoceng"></div>
        <topbackground :mytopBG="topBG" class="headImg_bg" id="img"></topbackground>
        <topicon id="topicon"></topicon>
        <div class="ticket_head--con">
            <div class="ticket_head--con_left">
                <img :src="`//static.228.cn${topIconImg}`" alt="" class="topimg">
                <span class="ticket_head--con_left--isSell"></span>
            </div>
            <div class="ticket_head--con_right">
                <h3 class="ticket_head--con_right_title">{{topIconTitle}}</h3>
                <h3 class="ticket_head--con_right_autonym"></h3>
                <div class="ticket_head--con_right_empty"></div>
                <span class="ticket_head--con_right_price">￥{{topIconPriceMIN}} - ￥{{topIconPriceMAX}}</span>
            </div>
        </div>
      </div>
      <div class="ticket_remind" @click="handleRemind(ID)">
          <div class="ticket_remind_discount">
              <div class="ticket_remind_discount_firstText">{{topRemindtextfirst}}</div>
              <div class="ticket_remind_discount_secondText">
                    <!-- <p @click='qq($event)' class='aa'>查看更多</p> -->
              </div>
          </div>
          <div class="ticket_remind_dateandaddress">
              <p class="ticket_remind_dateandaddress_date">
                  <span class="ticket_remind_dateandaddress_date_span"></span>
                  <span>{{topRemindtextdate}}</span>
              </p>
              <p class="ticket_remind_dateandaddress_address">
                  <span class="ticket_remind_dateandaddress_address_span"></span>
                  <span>{{topRemindtextaddress}}</span>
              </p>
              <span class="ticket_remind_dateandaddress_icon"></span>
          </div>
      </div>
      <div class="announcements">
          <h3 class="announcements_title">注意事项</h3>
          <div class="announcements_content" v-html="middleAnnouncements"></div>
      </div>
      <div class="showDetail">
          <h3 class="showDetail_title">演出详情</h3>
          <div class="showDetail_content" v-html="middleShowdetail" ref='a' style='height:35px;overflow:hidden'></div>
          <div class="showDetail_title_checkmore">
            <p @click='handleClickMore($event)' class='aa'>查看更多</p>
          </div>
      </div>
      <faq></faq>
      <answer></answer>
      <div class="homeFooter_first">
        <span @click="handleClickYL">永乐票务></span>
        <span @click="handleClickXXYL">{{leixing}}></span>
        <span @click="handleClickXXYLAddress">{{didianjialeixing}}></span>
        <span>{{jutididian}}></span>
      </div>
      <homeFooter></homeFooter>
      <Footerbtn :mychangeBtn="changeBtncolor" :mychangetext="changeText" ref='q'></Footerbtn>
  </div>
</template>

<script>
// 引入下载App
import DownloadApp from '@/components/DownloadApp'
// 引入Axios
import Axios from 'axios'
// 引入头部背景图片
import topbackground from '@/views/home/Ticket/Top-background'
// 引入头部top-icon
import topicon from '@/components/Top-icon'
// 引入尾部的FAQ
import faq from '@/components/FAQ'
// 引入尾部的问答
import answer from '@/components/Answer'
// 引入脚
import homeFooter from '@/components/Homefooter'
// 引入脚按钮
import Footerbtn from '@/components/Footerbtn'
export default {
  data () {
    return {
      topIconImg: '',
      topIconTitle: '',
      topIconPriceMAX: '',
      topIconPriceMIN: '',
      topBG: '',
      topRemindtextfirst: '',
      topRemindtextdate: '',
      topRemindtextaddress: '',
      middleAnnouncements: '',
      middleShowdetail: '',
      leixing: '',
      didianjialeixing: '',
      jutididian: '',
      ID: '',
      isShowApp: true,
      date: null,
      year: Number,
      mounth: Number,
      day: Number,
      changeBtncolor: false,
      changeText: '',
      mymarginbottom: '60px'
    }
  },
  methods: {
    handleClickMore (e) {
      this.$refs.a.style.height = 'auto'
      // console.log(e.target.innerHTML)
      if (e.target.innerHTML === '查看更多') {
        e.target.innerHTML = '收起'
      } else {
        this.$refs.a.style.height = '35px'
        e.target.innerHTML = '查看更多'
      }
    },
    handleEventApp () {
      this.isShowApp = false
    },
    handleRemind (routeraddressVenue) {
      // console.log('dianle', this.$route.params.myrouteraddress)
      this.$router.push({ path: `/venue-${routeraddressVenue}` })
    },
    handleClickYL () {
      // console.log('111')
      this.$router.push({ path: '/home' })
    },
    handleClickXXYL () {
      // console.log('跳转到分类页面, 是休闲娱乐')
    },
    handleClickXXYLAddress () {
      // console.log('跳转到分类页面, 是地方休闲娱乐')
    }
  },
  components: { DownloadApp, topbackground, topicon, faq, answer, homeFooter, Footerbtn },
  props: [],
  created () {
    // console.log(this.$route.name, 'mzmzmmzmz')
    if (this.$route.name === 'ticket') {
      document.documentElement.style.background = '#f7f3f3'
    }
  },
  beforeMount () {
    this.$store.commit('hide')
  },
  mounted () {
    Axios.get(`/server/product/ticket-${this.$route.params.myrouteraddress}.json?pid=${this.$route.params.myrouteraddress}.html`).then(res => {
      // console.log(res)
      var shy = res.data.data.product
      this.topIconImg = shy.PBIGIMG
      this.topIconTitle = shy.DESCRIPTION.substring(0, 21)
      this.topIconPriceMAX = shy.MAXPRICE
      this.topIconPriceMIN = shy.MINPRICE
      if (shy.SPECIAL === null) {
        this.topRemindtextfirst = shy.ROBTICKETTIPS
      } else {
        this.topRemindtextfirst = shy.SPECIAL
      }
      // 判断开始时间和结束时间是否相等
      if (shy.BEGINDATE === shy.ENDDATE) {
        this.topRemindtextdate = shy.BEGINDATE.replace(/-/g, '.').substring(0, 10)
      } else {
        this.topRemindtextdate = shy.BEGINDATE.replace(/-/g, '.').substring(0, 10) + '-' + shy.ENDDATE.replace(/-/g, '.').substring(0, 10)
      }
      // 按照时间的判断，判断商品按钮是否下架，改变文字
      this.date = new Date()
      // 获取实时年份
      this.year = this.date.getFullYear()
      // 获取实时月份
      this.mounth = this.date.getMonth() + 1
      // 获取实时日期
      this.day = this.date.getDate()
      // 判断时间
      if (this.year <= shy.BEGINDATE.substring(0, 4) && this.mounth < shy.BEGINDATE.substring(6, 7) && this.day < shy.BEGINDATE.substring(9, 10)) {
        this.changeBtncolor = true
        this.changeText = '该商品已经下架'
      } else {
        this.changeText = '立即购买'
      }
      // 获取场馆
      this.topRemindtextaddress = shy.VNAME
      // 获取注意事项
      this.middleAnnouncements = shy.PRECAUTIONS
      // 获取详情
      this.middleShowdetail = shy.INTRODUCTION
      //
      this.topBG = shy.PBIGIMG
      // 获取脚的类型
      this.leixing = shy.TYPEA1
      // 获取脚的地点加类型
      this.didianjialeixing = shy.JXNAME + shy.TYPEA1
      // 获取具体地点
      this.jutididian = shy.DESCRIPTION
      this.ID = shy.VENUESID
    })
  },
  beforeDestroy () {
    // this.$store.state.isShow = true
  },
  destroyed () {
    // 改变商品页和home页的背景颜色
    if (document.documentElement.style.background === 'rgb(247, 243, 243)') {
      document.documentElement.style.background = 'white'
    }
    // 按照时间的判断，判断商品按钮是否下架，改变颜色操作
    if (this.changeBtncolor) {
      this.changeBtncolor = false
    }
    // 离开详情页面将底部选项卡显示
    this.$store.commit('show')
  }
}
</script>

<style lang="scss">
  .headImg{
      position: relative;
      width: 100%;
      overflow: hidden;
      margin-bottom: .2rem;
      .zhezhaoceng{
          top: 0;
          position: absolute;
          height: 1.9rem;
          width: 100%;
          overflow: hidden;
          z-index: 1;
          border-radius: 50%;
      }
      #topicon{
          z-index: 10;
      }
      .ticket_head--con{
          margin: .3rem .2rem 0;
          overflow: hidden;
          z-index: 9;
          position: relative;
          .ticket_head--con_left{
              position: relative;
              float: left;
              width: 1.2rem;
              height: 1.6rem;
              box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1), 0px 2px 8px 0px rgba(58, 64, 69, 0.1);
              border-radius: .1rem;
              overflow: hidden;
              .topimg{
                  width: 100%;
                  height: 100%;
              }
          }
          .ticket_head--con_right{
              float: left;
              margin-left: .15rem;
              width: calc(100% - 1.35rem);
              .ticket_head--con_right_title{
                  // colorgaichengbaise
                  color: white;
                  font-weight: normal;
                  height: .63rem;
                  line-height: .21rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  font-size: .15rem;
              }
              .ticket_head--con_right_autonym{
                  height: .18rem;
                  margin-top: 0.08rem;
              }
              .ticket_head--con_right_empty{
                  height: .18rem;
                  margin-top: 0.08rem;
                  zoom: 1;
              }
              .ticket_head--con_right_price{
                  margin-top: 0.3rem;
                  zoom: 1;
                  font-size: 0.16rem;
                  color: #000;
                  font-weight: bold;
              }
          }
      }
  }
  .ticket_remind{
      margin: 0 .2rem .16rem;
      background: #fff;
      border-radius: .1rem;
      padding: .1rem;
      .ticket_remind_discount{
          margin-bottom: 0.1rem;
          text-align: center;
          font-weight: 400;
          .ticket_remind_discount_firstText{
              color: #999;
              font-size: 0.13rem;
              text-align: left;
              -webkit-line-clamp: initial;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
          }
          .ticket_remind_discount_secondText{
              -webkit-line-clamp: initial;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
          }
      }
      .ticket_remind_dateandaddress{
          display: block;
          font-size: .14rem;
          color: #5f646a;
          position: relative;
          overflow: hidden;
          .ticket_remind_dateandaddress_date{
              margin-bottom: .05rem;
              overflow: hidden;
              font-size: .14rem;
              color: #5f646a;
              font-weight: bold;
              .ticket_remind_dateandaddress_date_span{
                  float: left;
                  display: block;
                  margin-top: .03rem;
                  width: .12rem;
                  height: .12rem;
                  margin-right: .1rem;
                  background: url(/img/product-icon.png) no-repeat;
                  background-size: .5rem;
                  background-position: 0 0;
              }
          }
          .ticket_remind_dateandaddress_address{
              margin-bottom: .05rem;
              overflow: hidden;
              font-size: .14rem;
              color: #5f646a;
              font-weight: bold;
              .ticket_remind_dateandaddress_address_span{
                  float: left;
                  display: block;
                  margin-top: .03rem;
                  width: .12rem;
                  height: .12rem;
                  margin-right: .1rem;
                  background: url(/img/product-icon.png) no-repeat;
                  background-size: .5rem;
                  background-position: 0 -.38rem;
              }
          }
          .ticket_remind_dateandaddress_icon{
              position: absolute;
              height: .12rem;
              width: .12rem;
              display: block;
              top: .14rem;
              right: 0;
              background: url(/img/product-icon.png) no-repeat;
              background-size: .5rem;
              background-position: 0 -.75rem;
          }

      }
  }
  .announcements{
      .announcements_title{
          font-size: .22rem;
          color: #000;
          margin-left: .2rem;
          margin-right: .2rem;
          margin-bottom: 0.15rem;
      }
      .announcements_content{
          margin: 0 .2rem;
          line-height: .22rem;
          letter-spacing: .02rem;
          font-size: .14rem;
          color: #7b8187;
      }
  }
  .showDetail{
      .showDetail_title{
          font-size: .22rem;
          color: #000;
          margin-left: .2rem;
          margin-right: .2rem;
          margin-bottom: 0.15rem;
          margin-top: 0.15rem
      }
      .showDetail_content{
          margin: 0 .2rem;
          line-height: .22rem;
          letter-spacing: .02rem;
          font-size: .14rem;
          color: #7b8187;
          img{
              width: 100%;
              vertical-align: top;
          }
      }
      .showDetail_title_checkmore{
          margin-bottom: 0.2rem;
          text-align: center;
          margin-top: 0.15rem;
          p{
              font-size: .14rem;
              color: #ff7e6f;
          }
      }
  }
  .homeFooter_first {
      margin: 0 0.15rem 0.1rem;
      color: #999ea3;
      font-size: 0.14rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
      margin: 0 0.05rem;
      }
  }
</style>
