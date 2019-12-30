<template>
  <div class="answer_ask">
    <back title="在线问答"></back>
    <div class="answerandask_content">
      <div class="head">
        <div class="answer-head">
          <span></span>
          <span>我要提问</span>
        </div>
        <div class="answer-con">
          <div class="list" v-for="data in dataList" :key="data.ROW_ID">
            <div class="top">
              <div class="left">
                <img src="//m2static.228.cn/images/1.jpg" alt="">
                <span>{{data.EMAILPHONE}}</span>
              </div>
              <div class="right">
                <span>{{data.CREATETIME}}</span>
                <span>来自{{data.CHANNEL}}</span>
              </div>
            </div>
            <div class="problem">{{data.INFO}}</div>
            <div class="answers">
              <i></i>
              <p>{{data.ANSWERINFO}}</p>
              <em class="tip">永乐客服 {{data.ANSWERTIME}}</em>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 脚 -->
    <div class="footer">
      <textarea name="" id="" cols="30" rows="10" class="textarea" v-model="mytext"></textarea>
      <button class="btn" @click="handleClickLogin">登录并提问</button>
    </div>
  </div>
</template>

<script>
// 引入axios
import Axios from 'axios'
import back from '@/components/back'

export default {
  data () {
    return {
      dataList: [],
      mytext: ''
    }
  },
  methods: {
    handleClickLogin () {
      // console.log('11',this.mytext)
    }
  },
  beforeMount () {
  },
  mounted () {
    // console.log(this.$route.params.mymoreask)
    Axios.get(
      `/server/question/moreask/${this.$route.params.mymoreask}.json`
    ).then(res => {
      // console.log(res, 'wenda')
      this.dataList = res.data.data.replys.list
      // console.log(this.dataList,111112122)
    })
    this.$store.commit('qqq', false)
  },
  components: { back },
  beforeDestroy () {

  }
}
</script>

<style lang="scss" scoped>
.answerandask_content {
  margin: 0.2rem;
  .head {
    .answer-head {
      float: right;
      span:nth-of-type(1) {
        width: 0.22rem;
        display: block;
        height: 0.22rem;
        float: left;
        margin-right: 0.08rem;
        background-position: 0 -19.45rem;
      }
      span:nth-of-type(2) {
        color: #ff3a56;
      }
    }
    &::after {
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
    }
    .answer-con {
      .list {
        margin-top: 0.15rem;
        .top {
          height: 0.25rem;
          line-height: 0.25rem;
          .left {
            float: left;
            img {
              width: 0.24rem;
              height: 0.24rem;
              border: 1px solid #ff5169;
              border-radius: 50%;
              margin-right: 0.05rem;
              vertical-align: top;
            }
            span {
              color: #999;
              font-size: 0.12rem;
            }
          }
          .right {
            float: right;
            font-size: 0.1rem;
            color: #b5bbc1;
            span {
              color: #b5bbc1;
              font-size: 0.1rem;
            }
          }
          &::after {
            display: block;
            clear: both;
            content: "";
            visibility: hidden;
            height: 0;
          }
        }
        .problem {
          margin-top: 0.05rem;
          line-height: 20px;
          letter-spacing: 1px;
          color: #5f646a;
          margin-bottom: 0.1rem;
        }
        .answers {
          position: relative;
          background: #fff9f9;
          border-radius: 0 0.2rem 0.2rem;
          padding: 0.15rem;
          margin-left: 0.1rem;
          i {
            position: absolute;
            top: 0;
            left: -0.12rem;
            width: 0;
            height: 0;
            border: 14px dashed transparent;
            border-top: 14px solid #fff9f9;
          }
          p {
            color: rgba(255, 58, 86, 0.7);
          }
          .tip {
            color: rgba(255, 58, 86, 0.6);
            float: right;
            font-style: normal;
          }
          &::after {
            display: block;
            clear: both;
            content: "";
            visibility: hidden;
            height: 0;
          }
        }
      }
    }
  }
}
.footer{
  margin: .2rem .1rem;
  .textarea{
    margin: .08rem;
    width: calc(100% - .2rem);
    outline: none;
    margin-bottom: 0.1rem;
    width: calc(100% - .2rem);
    padding: .1rem;
    border: 1px solid #ccd1d6;
    background: linear-gradient(135deg,rgba(141,160,169,.06),rgba(213,221,225,.06));
    border-radius: .1rem;
  }
  .btn{
    margin: .08rem;
    width: calc(100% - .2rem);
    height: .44rem;
    font-size: .15rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    color: white;
    background:  linear-gradient(to right, #ff7e6f, #ff2959);

  }
}
</style>
