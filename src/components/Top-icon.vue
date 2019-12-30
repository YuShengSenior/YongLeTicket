<template>
  <div class="top_icon">
    <div class="zuojiantou" @click="hanleClickArrow">
      <span class="iconfont icon-jiantou" id="zuojiantou"></span>
    </div>
    <span class="fenxiang iconfont icon-fenxiang" @click="hanleClickEnjoy"></span>
    <span
      class="shoucang iconfont icon-collection"
      @click="hanleClickCollection"
      :class="isChangeColor ? 'changeyellow' : ''"
    ></span>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <div class="share-box">
            <div class="content">
              <h4>
                使用浏览器分享功能
                <br />将精彩发送给更多好友
              </h4>
              <ul class="con">
                <li class="safari">
                  <p class="left fl">Safari 点击下方</p>
                  <p class="right fr">
                    <i class="share1"></i>
                    <i class="share4"></i>
                    <i class="share3"></i>
                  </p>
                </li>
                <li class="uc">
                  <p class="left fl">UC点击下方菜单</p>
                  <p class="right fr">
                    <i class="share6"></i>
                    <i class="share4"></i>
                    <i class="share2"></i>
                  </p>
                </li>
                <li class="qq">
                  <p class="left fl">QQ点击下方菜单</p>
                  <p class="right fr">
                    <i class="share5"></i>
                    <i class="share4"></i>
                    <i class="share2"></i>
                  </p>
                </li>
                <li class="baidu">
                  <p class="left fl">百度点击右上方菜单</p>
                  <p class="right fr">
                    <i class="share6"></i>
                    <i class="share4"></i>
                    <i class="share3"></i>
                  </p>
                </li>
                <li class="chome">
                  <p class="left fl">Chome 点击右上方菜单</p>
                  <p class="right fr">
                    <i class="share1"></i>
                    <i class="share4"></i>
                    <i class="share3"></i>
                  </p>
                </li>
                <li class="other">
                  <p class="left fl">其他浏览器</p>
                  <p class="right fr">
                    <i class="share1"></i>
                    <i class="share4"></i>
                    <i class="share3"></i>
                    <span>或</span>
                    <i class="share1"></i>
                  </p>
                </li>
              </ul>
              <div class="close" @click="show = false"></div>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
// 引入弹出框
// 引入遮罩层
import Vue from 'vue'
import { Dialog, Overlay } from 'vant'
Vue.use(Dialog, Overlay)

export default {
  data () {
    return {
      // 判断、是否登录的状态
      isLongin: true,
      // 判断、收藏星星是否点亮状态
      isChangeColor: false,
      // 遮罩层
      show: false
    }
  },
  methods: {
    hanleClickArrow () {
      // console.log('左箭头点击了')
      // console.log(this.$router)
      this.$router.history.go(-1)
    },
    hanleClickEnjoy () {
      // console.log('分享点击了')
      this.show = true
    },
    hanleClickCollection () {
      // console.log('收藏点击了')
      if (this.isLongin) {
        this.isChangeColor = !this.isChangeColor
      } else {
        Dialog.confirm({
          title: '未登录',
          message: '登录之后添加喜欢'
        })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 120px;
  height: 120px;
  background-color: transparent;
}
.share-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
}
.share-box .content h4 {
  text-align: center;
  line-height: 0.39rem;
  letter-spacing: 2.5px;
  color: #fff;
  font-size: 0.2rem;
  margin-top: 0.3rem;
}
.share-box .content .con {
  margin: 0.3rem 0.4rem 0;
}
.share-box .content .con li,
.share-box .content .con li i {
  background: url("/img/shareIcon.png") no-repeat;
  background-size: 0.3rem;
}
.share-box .content .con li {
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.14rem;
  color: #fff;
  margin-bottom: 0.2rem;
  padding-left: 0.4rem;
}
.share-box .content .con li.safari {
  background-position: 0 0;
}
.share-box .content .con li.uc {
  background-position: 0 -0.55rem;
}
.share-box .content .con li.qq {
  background-position: 0 -1.1rem;
}
.share-box .content .con li.baidu {
  background-position: 0 -1.65rem;
}
.share-box .content .con li.chome {
  background-position: 0 -2.2rem;
}
.share-box .content .con li.other {
  background-position: 0 -2.75rem;
}
.share-box .content .con li .right {
  margin-top: 0.05rem;
}
.share-box .content .con li .right i,
.share-box .content .con li .right span {
  width: 0.17rem;
  height: 0.2rem;
  display: block;
  float: right;
}
.share-box .content .con li .right span {
  line-height: 0.2rem;
  margin-left: 0.02rem;
  text-align: center;
}
.share-box .content .con li .share1 {
  background-position: 1px -3.3rem;
}
.share-box .content .con li .share2 {
  background-position: 0 -3.7rem;
}
.share-box .content .con li .share3 {
  background-position: 7px -4.11rem;
}
.share-box .content .con li .share4 {
  background-position: 2px -4.47rem;
}
.share-box .content .con li .share5 {
  background-position: 0 -4.83rem;
}
.share-box .content .con li .share6 {
  background-position: 0 -5.25rem;
}
.share-box .close {
  margin-top: 0.6rem;
  width: 0.2rem;
  height: 0.2rem;
  margin-left: calc((100% - 0.2rem) / 2);
  background-size: 0.33333rem;
  background-position: 0 -10.44rem;
}
.close{
  margin-top: .6rem;
    width: .2rem;
    height: .2rem;
    margin-left: calc((100% - .2rem)/2);
    background: url('/img/product-icon.png') no-repeat;
    background-size: .33333rem;
    background-position: 0 -10.44rem;
}
//========================
.top_icon {
  color: red;
  padding-top: 0.29rem;
  width: calc(100% - 0.3rem);
  margin-left: 0.15rem;
  overflow: hidden;
  position: relative;
  z-index: 9;
  .zuojiantou {
    #zuojiantou {
      float: left;
      background-position: 0 -34.54rem;
      width: 0.3rem;
      height: 0.31rem;
      background: rgba($color: #000, $alpha: 0.3);
      border-radius: 50%;
      display: block;
      background-size: 1.5rem;
      position: relative;
      &::before {
        color: rgba($color: #fff, $alpha: 0.7);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .shoucang {
    float: right;
    background-position: 0 -35.34rem;
    margin-right: 0.15rem;
    width: 0.3rem;
    height: 0.31rem;
    display: block;
    background: rgba($color: #000, $alpha: 0.3);
    border-radius: 50%;
    background-size: 0.3rem 0.31rem;
    position: relative;
    &::before {
      color: rgba($color: #fff, $alpha: 0.7);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .fenxiang {
    float: right;
    background-position: 0 -36.955rem;
    width: 0.3rem;
    height: 0.31rem;
    display: block;
    background-size: 1.5rem;
    background: rgba($color: #000, $alpha: 0.3);
    border-radius: 50%;
    position: relative;
    &::before {
      color: rgba($color: #fff, $alpha: 0.7);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.changeyellow {
  background: rgba($color: yellow, $alpha: 1) !important;
  &::before {
    // background: yellow !important;
    color: red !important;
    // font-size: .2rem;
  }
}
</style>
