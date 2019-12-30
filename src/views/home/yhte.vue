<template>
  <div class="yhte">
    <back title="分类"></back>
    <dropmenu :class="isFixed ? 'fixed' : ''" ref="classifyBox"></dropmenu>
    <div class="yhte_content--show_goods">
      <div
        class="yhte_content--show_goods_every"
        v-for="data in dataList"
        :key="data.productid"
        @click="handleClickGoods(data.productid)"
      >
        <div class="yhte_content--show_goods_every_img">
          <img :src="`//static.228.cn${data.pbigimg}`" alt />
          <span></span>
        </div>
        <div class="yhte_content--show_goods_every_detail">
          <div class="name">{{data.name}}</div>
          <div class="date">{{data.enddate}}</div>
          <div class="address">{{data.vname}}</div>
          <div class="price">{{data.minprice}} ~ {{data.maxprice}}元</div>
        </div>
      </div>
    </div>
    <div class="showMore" @click="getMoredata">
      <span>查看更多</span>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script>
import Axios from 'axios'
import back from '@/components/back'
import dropmenu from '@/components/DropdownMenu'
import homeFooter from '@/components/Homefooter'

export default {
  data () {
    return {
      dataList: [],
      isFixed: false
    }
  },
  methods: {
    handleClickGoods (url) {
      this.$router.push({ path: `/ticket-${url}` })
    },
    getMoredata () {
    },
    handelscroll () {
      const topHeight = this.$refs.classifyBox.$el.offsetHeight
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >=
        topHeight
      ) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  components: { back, dropmenu, homeFooter },
  mounted () {
    Axios.get(
      `/server/category/search-${this.$route.params.myrouter}.json`
    ).then(res => {
      this.dataList = res.data.data.pagerMemoryList
    })
    window.onscroll = this.handelscroll
  }
}
</script>

<style lang="scss" scoped>
.yhte {
  margin-bottom: 0.5rem;
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
  }
  .yhte_content--show_goods {
    padding: 0.2rem;
    background: #fff;
    .yhte_content--show_goods_every {
      display: block;
      margin-bottom: 0.15rem;
      border-bottom: 1px solid #fafafb;
      padding-bottom: 0.15rem;
      overflow: hidden;
      color: #333;
      .yhte_content--show_goods_every_img {
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
      .yhte_content--show_goods_every_detail {
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
  div.showMore {
    text-align: center;
    height: 0.27rem;
    line-height: 0.27rem;
    span {
      display: inline-block;
      height: 0.2rem;
      line-height: 0.2rem;
      width: 0.75rem;
      font-size: 0.12rem;
      color: hotpink;
      padding: 0 0.03rem;
      border-radius: 0.1rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
