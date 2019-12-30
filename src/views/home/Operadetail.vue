<template>
  <div class="Operadetail">
    <DownloadApp v-if="$store.state.isShowApp" @myeventApp="handleEventApp"></DownloadApp>
    <back :title="`永乐说戏-${$store.state.opearDetail.link.REMARK}`"></back>
    <div class="Operadetail_content">
      <div class="Operadetail_content_video" v-html="$store.state.opearDetail.link.SHARECONTENT"></div>
      <div class="Operadetail_content_discribe">
        <div class="Operadetail_content_discribe-title">永乐说戏-{{$store.state.opearDetail.link.REMARK}}</div>
        <div class="Operadetail_content_discribe-text">{{$store.state.opearDetail.link.TEXT}}</div>
      </div>
      <div class="Operadetail_content_goods">
        <div class="Operadetail_content_every" v-for="(data,index) in $store.state.opearDetail.productList" :key="data.PRODUCTID" @click="handleClickGoods(index,data.PRODUCTID)">
          <div class="Operadetail_content_every_img">
            <img :src="`//static.228.cn${data.PBIGIMG}`" alt />
            <span></span>
          </div>
          <div class="Operadetail_content_every_detail">
            <div class="name">{{data.NAME}}</div>
            <div class="date">{{data.SHOWDATE}}</div>
            <div class="address">{{data.VNAME}}</div>
            <div class="price">{{data.MINPRICE}} ~ {{data.MAXPRICE}}元</div>
          </div>
        </div>
      </div>
      <homeFooter></homeFooter>
    </div>
  </div>
</template>

<script>
import DownloadApp from '@/components/DownloadApp'
import back from '@/components/back'
import homeFooter from '@/components/Homefooter'

export default {
  data () {
    return {

    }
  },
  methods: {
    handleEventApp (ishow) {
      this.$store.state.isShowApp = ishow
    },
    handleClickGoods (index, OperaDetailurl) {
      // console.log(OperaDetailurl)
      // var URLLsitID = this.opearDetail.productList.map(item => item.PRODUCTID)
      // Axios.get(`server/product/ticket-${URLLsitID[index]}.json?pid=${URLLsitID[index]}.html`).then(res => {
      //   console.log(res, '请求当前地址')
      // })
      this.$router.push({ path: `/ticket-${OperaDetailurl}` })
    }
  },
  components: { DownloadApp, back, homeFooter },
  mounted () {
    this.$store.dispatch('getOperaDataDetail', this.$route.params.myopera)
  }
}

</script>

<style lang="scss" scoped>
  .Operadetail {
    .Operadetail_content {
      padding-bottom: 0.5rem;
      .Operadetail_content_discribe {
        padding: 0.2rem;
        .Operadetail_content_discribe-title {
          text-align: center;
          font-size: 0.17rem;
          color: #333;
          font-weight: bold;
        }
        .Operadetail_content_discribe-text {
          margin-top: 0.15rem;
          color: #7b8187;
          line-height: 0.22rem;
          letter-spacing: 0.02rem;
          font-size: 0.14rem;
        }
      }
      .Operadetail_content_goods {
        width: 100%;
        padding: 0.2rem;
        background: #fff;
        .Operadetail_content_every {
          // display: block;
          margin-bottom: 0.15rem;
          border-bottom: 1px solid #fafafb;
          padding-bottom: 0.15rem;
          overflow: hidden;
          color: #333;
          .Operadetail_content_every_img {
            position: relative;
            float: left;
            width: 0.85rem;
            height: 1.13rem;
            border-radius: 0.1rem;
            overflow: hidden;
            box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
            img {
              width: 100%;
            }
          }
          .Operadetail_content_every_detail {
            margin-left: 0.15rem;
            float: left;
            width: calc(100% - 1rem);
            .name {
              font-size: 0.14rem;
              height: 0.4rem;
              line-height: 0.2rem;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              font-weight: bold;
            }
            .date {
              // display: block;
              color: #999ea3;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              margin-top: 0.1rem;
              font-size: 0.14rem;
            }
            .address {
              display: block;
              color: #999ea3;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              font-size: 0.12rem;
            }
            .price {
              display: block;
              color: #999ea3;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              margin-top: 0.1rem;
              font-size: 0.14rem;
              color: #ff3a56;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
