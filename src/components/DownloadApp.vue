<template>
  <div class="downloadApp">
      <span class="close iconfont icon-guanbi" @click="handleClick"></span>
      <p class="app-name">
        永乐票务
        <span class="db red">新用户注册送20元现金券</span>
      </p>
      <a href="/zhuanti/app/index.html" class="download-btn">下载app</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('myeventApp', this.isshow)
    }
  }
}
</script>

<style lang="scss" scoped>
    .downloadApp{
        width: 100%;
        padding: .05rem .1rem .05rem .1rem;
        height: .6rem;
        background: #fff;
        box-shadow: 0 0.02rem 0.08rem 0 rgba(95,100,106,.1);
        .close{
            float: left;
            display: block;
            width: .15rem;
            height: .15rem;
            margin-top: .2rem;
            margin-right: .05rem;
            font-size: .15rem;
            color: #ff2959;
            font-weight: bold;
        }
        .app-name{
            float: left;
            height: .5rem;
            padding-left: .57rem;
            padding-top: .1rem;
            font-size: .17rem;
            background-image:url('/img/icon.png');
            background-position: 0 -10.53rem;
            background-repeat: no-repeat;
            background-size: .75rem;
            span{
                font-size: .12rem;
                width: 1.4rem;
                display: block;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #ff3a56;
            }
        }
        .download-btn{
            display: block;
            float: right;
            width: .8rem;
            height: .32rem;
            line-height: .32rem;
            text-align: center;
            color: #fff;
            margin-top: .14rem;
            border-radius: 1rem;
            font-size: .14rem;
            box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
            text-decoration: none;
            background: linear-gradient(to right, #ff7e6f, #ff2959);
        }
    }
</style>
