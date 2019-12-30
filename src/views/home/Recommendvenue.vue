<template>
  <div class="Recommendvenue">
      <span v-for="(data,index) in dataList" :key="index" @click="handleClick(index)" :class="currentIndex === index ? 'active' : ''">{{data}}</span>
      <!-- <div v-for="(shy,index) in currentspanIndex" :key="shy" v-if="current===index" >{{shy}}</div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: ['推荐', '场馆'],
      currentIndex: 0,
      current: 0
    }
  },
  methods: {
    handleClick (index) {
      this.current = index
      this.currentIndex = index
      this.$emit('myevent', this.current)
    }
  }

}
</script>

<style lang="scss" scoped>
    .Recommendvenue{
        font-size: .22rem;
        color: #b5bbc1;
        margin-left: .2rem;
        margin-right: .2rem;
        margin-bottom: 0.15rem;
        padding-top: 0.1rem;
        span{
            font-weight: bold;
            margin-right: .1rem;
        }
    }
    .active{
        // background: red
        color: black;
    }
</style>
