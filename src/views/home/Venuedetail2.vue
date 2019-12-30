<template>
  <div class="Venuedetail">
    <!-- toubu -->
    <!-- ditu -->
    <Map></Map>
    <div class="Venuedetail_content">
      <h3 class="Venuedetail_content_title">{{Venue3.vname}}</h3>
      <div class="Venuedetail_content_produce">{{Venue3.info}}</div>
      <div class="Venuedetail_content_address">地址：{{Venue3.address}}</div>
      <div class="Venuedetail_content--show">
        <div class="Venuedetail_content--show_select">
            <p :class="currentIndex === index ? 'active' : ''" v-for="(data,index) in dataList" :key="index" @click="handleClick(index)">
                <span href="#">
                    <span>{{data}}</span>
                    <i></i>
                </span>
            </p>
        </div>
        <div class="Venuedetail_content--show_goods">
          <div class="Venuedetail_content--show_goods_every" v-for="(data,index) in Venue1" :key="data.ROWNUM_" @click="handleClickGoods(index,data.PRODUCTID)">
            <div class="Venuedetail_content--show_goods_every_img">
              <img :src="`//static.228.cn${data.PBIGIMG}`" alt="">
              <span></span>
            </div>
            <div class="Venuedetail_content--show_goods_every_detail">
                <div class="name">{{data.NAME}}</div>
                <div class="date">{{data.ENDDATE}}</div>
                <div class="address">{{data.VNAME}}</div>
                <div class="price">{{data.MINPRICE}} ~ {{data.MAXPRICE}}元</div>
            </div>
          </div>
        </div>
        <!-- jiazaigengduozujian -->
      </div>
      <div class="recommendtitle"></div>
      <div class="recommendVunue">
          <!-- 遍历 -->
          <a href=""></a>
      </div>
      <!-- 组件footer -->
      <div class="homefooter"></div>
    </div>
  </div>
</template>

<script>
// 引入Axios
import Axios from 'axios'
// 引入地图组件
import Map from '@/views/home/Map'
export default {

  data () {
    return {
      Venue1: [],
      Venue3: '',

      currentIndex: 0,
      dataList: ['全部演出', '即将开始', '历史演出']
    }
  },
  methods: {
    handleClick (index, imgurl) {
      this.currentIndex = index
    },
    handleClickGoods (index, venueDetailurl) {
    // console.log(this.Venue1)

      // 第一种映射方法
      var PRODUCTID = this.Venue1.map(item => item.PRODUCTID)
      //   for(var i=0; i<PRODUCTID.length; i++){
      //       var url = PRODUCTID[i]
      //       return url
      //   }
      console.log('请求代码地址=', PRODUCTID[index])
      // 第二种映射方法
      // var PRODUCTID = this.Venue1.reduce((acc, value)=>{
      //     return {...acc, ...value}
      // })
      // console.log('请求代码地址=',PRODUCTID.PRODUCTID)

      console.log('索引值=', index)
      Axios.get(`server/product/ticket-${PRODUCTID[index]}.json?pid=${PRODUCTID[index]}.html`).then(res => {
        console.log(res, '请求当前地址')
      })
      //   console.log(this.$router)
      this.$router.push({ path: `/ticket-${venueDetailurl}` })
    }
  },
  components: { Map },
  mounted () {
    Axios.get(
      `/server/venue/${this.$route.params.myrouteraddressvenue}.json`
    ).then(res => {
      console.log(res)
      var shy1 = res.data.data.products
      // var shy2 = res.data.data.tjVenues
      var shy3 = res.data.data.venue
      // console.log(shy1)
      // console.log(shy2)
      // console.log(shy3)
      this.Venue1 = shy1
      this.Venue3 = shy3
      console.log(this.Venue1, this.Venue1.PRODUCTID, '02020202')
      //   this.topIconImg = shy.PBIGIMG
      //   this.topIconTitle = shy.DESCRIPTION.substring(0, 21)
      //   this.topIconPrice = shy.MAXPRICE
      //   this.topRemindtextfirst = shy.SPECIAL
      //   this.topRemindtextdate = shy.ALADING_TIME.substring(0, 9) + '-' + shy.BEGINDATE.substring(0, 9)
      //   this.topRemindtextaddress = shy.VNAME
      //   this.middleAnnouncements = shy.PRECAUTIONS
      //   this.middleShowdetail = shy.INTRODUCTION
      //   this.topBG = shy.PBIGIMG
    })
  }
}
</script>

<style lang="scss" scoped>
    .Venuedetail{
        .Venuedetail_content{
            margin-top: -.2rem;
            position: relative;
            border-radius: .2rem .2rem 0 0;
            background: rgba(252,253,253,.98);
            .Venuedetail_content_title{
                padding-top: 0.2rem;
                text-align: center;
                font-weight: normal
            }
            .Venuedetail_content_produce{
                margin: .15rem .2rem;
                line-height: .22rem;
                letter-spacing: 2px;
                color: #7b8187;
                font-size: .14rem;
            }
            .Venuedetail_content_address{
                margin: .15rem .2rem;
                line-height: .22rem;
                letter-spacing: 2px;
                color: #7b8187;
                font-size: .14rem;
            }
            .Venuedetail_content--show{
                .Venuedetail_content--show_select{
                    display: flex;
                    line-height: .45rem;
                    background: #fff;
                    margin-bottom: .2rem;
                    border-bottom: 1px solid #f3f4f5;
                    border-top: 1px solid #f3f4f5;
                    p{
                        flex: 1;
                        text-align: center;
                        color: #999;
                        font-size: .15rem;
                        position: relative;
                        span{
                            color: #999;
                            display: inline-block;
                            position: relative;
                            font-size: .15rem;
                            span{
                                color: #999;
                                font-size: .15rem;
                            }
                            i{
                                font-style: italic;
                            }
                        }
                    }
                }
                .Venuedetail_content--show_goods{
                    padding: .2rem;
                    background: #fff;
                    .Venuedetail_content--show_goods_every{
                        display: block;
                        margin-bottom: .15rem;
                        border-bottom: 1px solid #fafafb;
                        padding-bottom: .15rem;
                        overflow: hidden;
                        color: #333;
                        .Venuedetail_content--show_goods_every_img{
                            position: relative;
                            float: left;
                            width: .85rem;
                            height: 1.13rem;
                            border-radius: .1rem;
                            overflow: hidden;
                            box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
                            img{
                                width: 100%;
                            }
                        }
                        .Venuedetail_content--show_goods_every_detail{
                            margin-left: .15rem;
                            float: left;
                            width: calc(100% - 1rem);
                            .name{
                                font-size: 0.14rem;
                                height: .4rem;
                                line-height: .2rem;
                                display: block;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                font-weight: bold;
                            }
                            .date{
                                // display: block;
                                color: #999ea3;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                margin-top: 0.1rem;
                                font-size: .14rem;
                            }
                            .address{
                                display: block;
                                color: #999ea3;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                font-size: 0.12rem;
                            }
                            .price{
                                display: block;
                                color: #999ea3;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                margin-top: 0.1rem;
                                font-size: 0.14rem;
                                color: #ff3a56;
                                font-weight: bold
                            }
                        }

                    }
                }
            }
        }
    }
    .active{
        span{
            color: #000;
            span{
                position: relative;
                z-index: 2;
            }
            i{
                height: .05rem;
                width: 100%;
                display: block;
                border-radius: .1rem;
                position: absolute;
                top: .265rem;
                left: 0;
                z-index: 1;
                background: linear-gradient(90deg,rgba(255,41,89,.8),rgba(255,126,111,.8));
            }
        }

    }
</style>
