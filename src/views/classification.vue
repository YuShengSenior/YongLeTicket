<template>
  <div class="bigBox">
    <back title="分类"></back>
    <dropmenu :class="isFixed?'fixed':''" ref="classifyBox"></dropmenu>
    <goods></goods>
    <homeFooter class="homeFooter"></homeFooter>
  </div>
</template>
<script>
import back from '@/components/back'
import homeFooter from '@/components/Homefooter'
import goods from '@/components/Goods'
import dropmenu from '@/components/DropdownMenu'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: { back, homeFooter, goods, dropmenu },
  mounted () {
    window.onscroll = this.handelscroll
  },
  methods: {
    handelscroll () {
      const topHeight = this.$refs.classifyBox.$el.offsetHeight
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >=
        topHeight
      ) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}

</script>
<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.4rem;
  line-height: 0.4rem;
  width: 100%;
}
div.bigBox {
  margin-bottom: 0.5rem;
}
</style>
