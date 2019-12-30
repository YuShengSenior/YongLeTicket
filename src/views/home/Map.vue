<template>
  <div class="map">
    <!-- <label>关键词：<input v-model="keyword"></label>
    <label>地区：<input v-model="location"></label> -->
    <baidu-map class="bm-view" :center="{lng: 116.404, lat: 39.915}" :zoom="zoom" @ready="handler" anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
      <!-- <bm-control>
        <button @click="addZoom(19)">缩放至最大</button>
        <button @click="addZoom(10)">还原</button>
        <button @click="addZoom(3)">缩放至最小</button>
      </bm-control> -->
      <bm-panorama></bm-panorama>
      <!-- 在地图左上角加入城市切换控件 -->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!-- 定位控件 -->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
      <!-- 地区检索 -->
      <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search> -->
    </baidu-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      location: '北京',
      keyword: '百度'
    }
  },
  methods: {
    handler ({ BMap, map }) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
