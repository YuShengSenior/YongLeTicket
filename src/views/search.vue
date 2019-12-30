<template>
  <div>
    <back title="搜索"></back>
    <search :cancel="mycancel"></search>
    <homeFooter class="homeFooter"></homeFooter>
  </div>
</template>

<script>
import search from '@/components/search'
import back from '@/components/back'
import homeFooter from '@/components/Homefooter'
export default {
  data () {
    return {
      mycancel: '取消',
      mysearch: ''
    }
  },
  props: {
    mytitle: String
  },
  components: { search, back, homeFooter }
}
</script>

<style lang="scss" scoped>
  .homeFooter{
    width: 100%;
    margin: 0 auto;
    position: fixed;
    bottom: 0.5rem;
    left: 0;
  }
</style>
