<template>
  <div class="navmiddle">
    <div v-for="data in $store.state.dataList1" :key="data.id" @click="List1(data.myrouter)" class="first">
      <span class="i"></span>
      <p class="p">{{data.name}}</p>
    </div>
    <div
      v-for="(data,index) in $store.state.dataList2"
      :key="data.id"
      @click="List2(data.myrouter)"
      :class="'second'+index"
    >
      <span class="i"></span>
      <p class="p">{{data.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    List1 (a) {
      this.$router.push(`/classification/${a}`)
    },
    List2 (b) {
      this.$router.push(`/${b}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navmiddle {
  width: 3.2rem;
  height: 1.35rem;
  margin: 0.25rem 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .first {
    // flex: 1;
    // float: left;
    width: 0.8rem;
    height: 0.55rem;
    text-align: center;
    .i {
      font-size: 0.36rem;
      display: block;
      width: 0.36rem;
      height: 0.36rem;
      background: red;
      margin: auto;
    }
    .p {
      font-size: 0.14rem;
      color: rgb(123, 129, 135);
    }
  }
  .first:nth-of-type(1) .i {
    background: url("/img/icon.png") no-repeat;
    background-size: 0.75rem;
    background-position: 0 -6.9325rem;
  }
  .first:nth-of-type(2) .i {
    background: url("/img/icon.png") no-repeat 0 -29.5rem;
    background-size: 0.75rem;
    background-position: 0 -7.3773rem;
  }
  .first:nth-of-type(3) .i {
    background: url("/img/icon.png") no-repeat 0 -31.28rem;
    background-size: 0.75rem;
    background-position: 0 -7.83rem;
  }
  .first:nth-of-type(4) .i {
    background: url("/img/icon.png") no-repeat 0 -33.06rem;
    background-size: 0.75rem;
    background-position: 0 -8.265rem;
  }
  .second0 {
    margin-top: 0.25rem;
    width: 0.8rem;
    height: 0.55rem;
    text-align: center;
    .i {
      font-size: 0.36rem;
      display: block;
      width: 0.36rem;
      height: 0.36rem;
      margin: auto;
      background: url("/img/icon.png") no-repeat;
      background-size: 0.75rem;
      background-position: 0 -8.7125rem;
    }
    .p {
      font-size: 0.14rem;
      color: rgb(123, 129, 135);
    }
  }
  .second1 {
    margin-top: 0.25rem;
    width: 0.8rem;
    height: 0.55rem;
    text-align: center;
    .i {
      font-size: 0.36rem;
      display: block;
      width: 0.36rem;
      height: 0.36rem;
      margin: auto;
      background: url("/img/icon.png") no-repeat;
      background-size: 0.75rem;
      background-position: 0 -9.155rem;
    }
    .p {
      font-size: 0.14rem;
      color: rgb(123, 129, 135);
    }
  }
  .second2 {
    margin-top: 0.25rem;
    width: 0.8rem;
    height: 0.55rem;
    text-align: center;
    .i {
      font-size: 0.36rem;
      display: block;
      width: 0.36rem;
      height: 0.36rem;
      margin: auto;
      background: url("/img/icon.png") no-repeat;
      background-size: 0.75rem;
      background-position: 0 -9.6rem;
    }
    .p {
      font-size: 0.14rem;
      color: rgb(123, 129, 135);
    }
  }
  .second3 {
    margin-top: 0.25rem;
    width: 0.8rem;
    height: 0.55rem;
    text-align: center;
    .i {
      font-size: 0.36rem;
      display: block;
      width: 0.36rem;
      height: 0.36rem;
      margin: auto;
      background: url("/img/icon.png") no-repeat;
      background-size: 0.75rem;
      background-position: 0 -10.0475rem;
    }
    .p {
      font-size: 0.14rem;
      color: rgb(123, 129, 135);
    }
  }
}
</style>
