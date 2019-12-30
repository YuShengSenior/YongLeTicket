<template>
  <div class="Footerbtn">
    <div class="real-btn">
      <div class="btns">
        <span class="service" @click="handleClickService">
          <b></b>
        </span>
        <span :class="mychangeBtn ? 'servicechange' : 'btn'" class="gradual-red white" id="change" @click="handleClickBuy">{{mychangetext}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClickService () {
    },
    handleClickBuy () {
    }
  },
  props: ['mychangeBtn', 'mychangetext']
}
</script>

<style lang="scss" scoped>
.real-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.6rem;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0px 0px 15px 0px rgba(95, 100, 106, 0.2);
  .btns {
    display: flex;
    .service {
      width: 0.44rem;
      height: 0.44rem;
      display: block;
      border-radius: 50%;
      box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
      margin: 0.08rem 0.08rem 0.08rem 0;
      margin-left: 0.08rem;
      b {
        width: 0.44rem;
        height: 0.44rem;
        display: block;
        background: url("/img/product-icon.png") no-repeat;
        background-position: 0 -1.11rem;
        background-size: 0.5rem;
      }
    }
    .btn {
      flex: 1;
      text-align: center;
      height: 0.44rem;
      /* line-height: .44rem; */
      border-radius: 1rem;
      letter-spacing: 2px;
      font-size: 0.15rem;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      -webkit-box-orient: vertical;
      text-align: center;
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      color: white;
      margin: 0.08rem 0.08rem 0.08rem 0;
    }
    .servicechange {
      flex: 1;
      text-align: center;
      height: 0.44rem;
      /* line-height: .44rem; */
      border-radius: 1rem;
      letter-spacing: 2px;
      font-size:  0.15rem;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      -webkit-box-orient: vertical;
      text-align: center;
      background: linear-gradient(to left, #8da0a9 0%, #d5dde1 100%);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      color: white;
      margin: 0.08rem 0.08rem 0.08rem 0;
    }
  }
}
</style>
