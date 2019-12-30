<template>
    <ul class="goodsUl">
      <!-- ticket-623928479 -->
      <li v-for= "goods in $store.state.goodslist" :key= "goods.productid" @click="goToDetail(goods.productid)">
        <!-- 装图片的盒子 -->
        <div class="imgBox">
          <img :src= "`//static.228.cn${goods.pbigimg}!t120x160.jpg`" alt="">
        </div>
        <div class="goodInfo">
          <h3 class="goodName">{{goods.name}}</h3>
          <p class="goodDate"> {{goods.begindate}} ~ {{goods.enddate}}  </p>
          <p class="goodPlace"> {{goods.vname}} </p>
          <p class="ticket"> {{goods.minprice}}-{{goods.maxprice}} 元</p>
        </div>
      </li>
      <div class="showMore" @click="getMoredata()" v-if="$store.state.isshowmore">
        <span>
          查看更多
        </span>
      </div>
    </ul>
</template>
<script>
export default {
  data () {
    return {
      goodslist: []
    }
  },
  methods: {
    goToDetail (routeraddressVenue) {
      this.$router.push({ path: `/ticket-${routeraddressVenue}` })
    },
    getMoredata () {
      this.$store.dispatch('askmoerdata')
    }
  }
}
</script>

<style lang="scss" scoped>
ul.goodsUl{
  padding: .2rem;
  img{
    width: .85rem;
    border-radius: .1rem;
  }
  li{
    margin: .15rem 0;
      overflow: hidden;
    div.imgBox{
      float: left;
    }
    .goodInfo{
      margin-left: .95rem;
     .goodName{
      height: .4rem;
     }
    .goodDate{
      color: #999ea3;
      margin-top: .1rem;
      font-size: .12rem;
    }
    .goodPlace{
      color: #999ea3;
      margin-top: .03rem;
    }
    .ticket{
      margin-top: .03rem;
      color:red;
      font-size: .12rem;
    }
    }
  }
  div.showMore{
    text-align: center;
    height: .27rem;
    line-height: .27rem;
    span{
      display: inline-block;
      height: .2rem;
      line-height: .2rem;
      width: .75rem;
      font-size: .12rem;
      color: hotpink;
      padding: 0 .03rem;
      border-radius: .1rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}

</style>
