<template>
  <div class="kerwin">
    <back title="kerwin评书三国" class="kerwin1">
      <div class="zhezaoceng"></div>
    </back>
    <video controls autoplay src="/kerwin/kerwin.mp4"></video>
    <!-- <img src="/kerwin/pic1800.jpg" alt=""> -->
    <div>
      <h3>名师介绍</h3>&nbsp;&nbsp;前IBM高级软件工程师， 5年研发经验，获得IBM WORKLIGHT 跨平台移动应用高级开发者认证，致力于HTML5，Android，ios，混合应用的开发与最佳实践。为企业内部进行跨平台应用开发培训，帮助职员短时间内，高效率，快速实现技术积累与储备。
      <br />
      <h3>授课特点</h3>&nbsp;&nbsp;热爱IT培训行业，注重理论基础与实战相结合，善于讲解技术原理以及帮助学生提高自学能力，注重理论基础与实战相结合，善于讲解技术原理以及帮助学生提高自学能力。
      <br />
      <h3>想对学员说的话：</h3>&nbsp;&nbsp;没有功德圆满， 没有一步登天
      <h3>相关名师</h3>&nbsp;&nbsp;名师虽贵绝不省人工，面授虽繁必不减品质
    </div>
  </div>
</template>

<script>
import back from '@/components/back'
export default {
  components: { back }
}
</script>

<style lang="scss" scoped>
.kerwin {
  .kerwin1 {
      position: relative;
    .zhezaoceng {
      width: 100%;
      height: 0.46rem;
      position: absolute;
      left: 0;
      height: 0;
      background: rgba($color: #000000, $alpha: 0.5);
    }
  }
  video {
    width: 100%;
    height: 100%;
  }
  div {
    margin: 0.1rem 0.2rem 0;
    font-size: 0.14rem;
    h3 {
      color: #ccc;
    }
  }
}
</style>
