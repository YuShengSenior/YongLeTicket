<template>
  <div class="searchlist">
    <back title="搜索"></back>
    <search></search>
    <div class="searchlist_content--show_goods">
      <div class="searchlist_content--show_goods_every" v-for="(data,index) in $store.state.searchList" :key="data.productid" @click="handleClickGoods(index,data.productid)">
        <div class="searchlist_content--show_goods_every_img">
          <img :src="`//static.228.cn${data.pbigimg}`" alt />
          <span></span>
        </div>
        <div class="searchlist_content--show_goods_every_detail">
          <div class="name">{{data.introduction}}</div>
          <div class="date">{{data.begindate}}</div>
          <div class="address">{{data.vname}}</div>
          <div class="price">{{data.minprice}} ~ {{data.maxprice}}元</div>
        </div>
      </div>
    </div>
    <homefooter></homefooter>
  </div>
</template>

<script>
import back from '@/components/back'
import search from '@/components/search'
import homefooter from '@/components/Homefooter'
export default {
  methods: {
    handleClickGoods (index, id) {
      this.$router.push({ path: `/ticket-${id}` })
    }
  },
  components: { back, search, homefooter },
  watch: {
    $route () {
      // console.log(222)
      this.$store.dispatch('getSearchlist')
    }
  },
  mounted () {
    this.$store.dispatch('getSearchlist')
  }
}
</script>

<style lang="scss" scoped>
.searchlist {
  padding-bottom: .5rem;
  .searchlist_content--show_goods {
    padding: 0.2rem;
    background: #fff;
    .searchlist_content--show_goods_every {
      display: block;
      margin-bottom: 0.15rem;
      border-bottom: 1px solid #fafafb;
      padding-bottom: 0.15rem;
      overflow: hidden;
      color: #333;
      .searchlist_content--show_goods_every_img {
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
      .searchlist_content--show_goods_every_detail {
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
</style>
