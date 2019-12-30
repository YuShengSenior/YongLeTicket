<template>
  <div class="Venue">
      <div class="Venue_list" v-for="data in mydataVenue" :key="data.ROW_ID" @click="handleClick(data.VENUESID)">
          <div class="Venue_list_img">
            <img :src="`//static.228.cn${data.IMG}`" alt />
          </div>
          <div class="Venue_list_name">{{data.VNAME}}</div>
          <div class="Venue_list_address">{{data.ADDRESS}}</div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    mydataVenue: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClick (routeraddressVenue) {
      // console.log(111111111111111111111)
      this.$router.push({ path: `/venue-${routeraddressVenue}` })
    }
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<style lang="scss" scoped>
  .Venue{
      margin: 0 .2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .Venue_list{
        width: 1.54rem;
        height: 1.8rem;
        margin-bottom: 0.12rem;
        cursor: pointer;
      }
      .Venue_list_name{
        font-size: .13rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-top: 0.05rem;
      }
      .Venue_list_address{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: .11rem;
        color: #999;
      }
  }
  img{
      width: 1.54rem;
      height: 1.4rem;
      border-radius: .1rem
  }
</style>
