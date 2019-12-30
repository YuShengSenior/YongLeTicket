<template>
  <div class="subject">
      <back title="活动专区"></back>
      <div class="subjectBox">
        <div class="subject_content">
          <div class="subject_content_every" v-for="data in $store.state.dataList" :key="data.ROW_ID" @click="handleClick(data.URL)">
            <div class="subject_content_every-img">
              <img :src="`//static.228.cn${data.IMG}`" alt="">
            </div>
            <div class="subject_content_every-title">{{data.REMARK}}</div>
          </div>
        </div>
      </div>
      <homeFooter/>
  </div>
</template>

<script>
// 引入头部
import back from '@/components/back'
// 引入脚
import homeFooter from '@/components/Homefooter'
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick (URL) {
      // console.log(111,`/subject/mb${URL}`)
      this.$router.push({ path: `/subject/mb${URL}` })
    }
  },
  components: { back, homeFooter },
  created () {
    if (this.$route.name === 'subject') {
      document.documentElement.style.background = '#f7f3f3'
    }
  },
  beforeMount () {
    this.$store.commit('show')
  },
  mounted () {
    if (this.$store.state.dataList.length === 0) {
      this.$store.dispatch('getSubjectData')
    } else {
      // console.log('缓存数据')
    }
  },
  destroyed () {
    if (document.documentElement.style.background === 'rgb(247, 243, 243)') {
      document.documentElement.style.background = '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
  .subject{
    padding-bottom: .5rem;
    .subjectBox{
      .subject_content{
        margin: .15rem;
        .subject_content_every{
          margin-bottom: .2rem;
          width: 100%;
          border-radius: .1rem;
          overflow: hidden;
          background: #fff;
          text-align: center;
          .subject_content_every-img{
            width: 100%;
            position: relative;
            img{
              width: 100%;
            }
          }
          .subject_content_every-title{
            margin: .2rem;
            font-size: .17rem;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
