<template>
  <div class="Subjectdetail">
      <backarrow id="backarrow"></backarrow>
      <div class="Subjectdetail_bg">
          <div class="Subjectdetail_bg-head">
              <div class="Subjectdetail_bg-head_bg">
                  <div class="bgimg">
                    <img :src="`//static.228.cn${data.IMG}`" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div class="Subjectdetail_detail">
        <div class="Subjectdetail_detail_title">
          {{data.REMARK}}
        </div>
        <div class="Subjectdetail_detail_content">
          {{data.TEXT}}
        </div>
      </div>
      <div class="goods-list">
        <div class="goods-list_con" v-for="(data,index) in goodsList" :key="index" @click="handleClick(data.PRODUCTID)">
          <div class="goods-list_con-left"><img :src="`//static.228.cn${data.PSMILLIMG}`" alt=""></div>
          <div class="goods-list_con-right">
            <p class="name">{{data.NAME}}</p>
            <p class="date">{{data.SHOWDATE}}</p>
            <p class="address">{{data.VNAME}}</p>
            <p class="price">{{data.MINPRICE}} - {{data.MAXPRICE}}元</p>
          </div>
        </div>
      </div>
      <DownloadApp v-if="isShowApp" @myeventApp="handleEventApp"></DownloadApp>
  </div>
</template>

<script>
import Axios from 'axios'
import backarrow from '@/components/Backarrow'
import DownloadApp from '@/components/DownloadApp'
export default {
  data () {
    return {
      data: '',
      isShowApp: true,
      goodsList: []
    }
  },
  methods: {
    handleEventApp (ishow) {
      this.isShowApp = ishow
    },
    handleClick (URLId) {
      // console.log(URLId,55)
      this.$router.push({ path: `/ticket-${URLId}` })
    }
  },
  components: { backarrow, DownloadApp },
  mounted () {
    // console.log(this.$route.params.mysubject)
    Axios.get(`/server/subject/detail-${this.$route.params.mysubject}.json`).then(res => {
      // console.log(res)
      this.data = res.data.data.subjectMap
      this.goodsList = res.data.data.subjectProductList
    })
  }
}
</script>

<style lang="scss" scoped>
  .Subjectdetail{
    margin-bottom: .7rem;
    position: relative;
    #backarrow{
      position: absolute;
      top: 0;
    }
    .Subjectdetail_bg{
        background: #fff;
        .Subjectdetail_bg-head{
            position: relative;
            width: 100%;
            overflow: hidden;
            margin-bottom: .2rem;
            height: 1.9rem;
            .Subjectdetail_bg-head_bg{
                top: 0;
                position: absolute;
                height: 1.9rem;
                width: 100%;
                overflow: hidden;
                z-index: 1;
                .bgimg{
                    position: absolute;
                    content: '';
                    z-index: 1;
                    height: 2.5rem;
                    top: -.6rem;
                    left: -75%;
                    width: 250%;
                    border-radius: 50%;
                    overflow: hidden;
                    left: -60%;
                    width: 200%;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
    .Subjectdetail_detail{
      margin-bottom: .7rem;
      margin: .2rem;
      .Subjectdetail_detail_title{
        font-weight: 400;
        font-size: .17rem;
        text-align: center;
        margin-bottom: .15rem;
        color: #000;
      }
      .Subjectdetail_detail_content{
        font-size: .14rem;
        line-height: 22px;
        letter-spacing: 2px;
        color: #7b8187;
      }
    }
    .goods-list{
      padding: .2rem;
      background: #fff;
      .goods-list_con{
        margin-bottom: .15rem;
        border-bottom: 1px solid #fafafb;
        padding-bottom: .15rem;
        overflow: hidden;
        .goods-list_con-left{
          position: relative;
          float: left;
          width: .85rem;
          height: 1.13rem;
          border-radius: .1rem;
          overflow: hidden;
        }
        .goods-list_con-right{
          margin-left: .15rem;
          float: left;
          width: calc(100% - 1rem);
          .name{
            height: .4rem;
            line-height: .2rem;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: .14rem;
            font-weight: bold;
          }
          .date{
            margin-top: 0.1rem;
            color: #999ea3;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .address{
            color: #999ea3;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .price{
            color: #999ea3;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 0.12rem;
            margin-top: 0.1rem;
            margin-right: 0.05rem;
            color: #ff3a56;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
