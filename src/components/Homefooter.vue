<template>
  <div class="homeFooter">
    <div class="homeFooter_second">
        <div class="homeFooter_second_line1">
          <span><a href="/notices/" class>最新资讯</a></span>
          <span><a href="/partner.html" class>合作招商</a></span>
          <span><a href="/contect.html" class>联系我们</a></span>
        </div>
        <div class="homeFooter_second_line2">版权所有 © 2003-2019 永乐票务</div>
        <div class="homeFooter_second_line3">
          <span><a href="https://static.228.com.cn/resources/images/footer/yyzzfb.jpg">营业执照</a></span>
          <span>|</span>
          <span><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action " target="_blank" rel="noopener noreferrer">京IC P证030942号</a></span>
        </div>
        <div class="homeFooter_second_line4"><a href="http://www.beian.gov.cn/portal/recordQuery?token=f25e17e1-87db-434d-a0e0-26283deceecb">京公网安备 11010102000758号</a></div>
        <div class="homeFooter_second_line5"><a href="https://static.228.com.cn/resources/images/footer/jyxkz.jpg">网络文化经营许可证 京网文 [2019] 3189-307 号</a></div>
        <div class="homeFooter_second_line6">
          <span><a href="https://static.228.com.cn/resources/images/footer/zzdxjyxkz.jpg">增值电信经营许可证</a></span><span>|</span><span><a href="https://static.228.com.cn/resources/images/footer/yyxycxkz.jpg">营业性演出许可证</a></span>
        </div>
    </div>
    <!-- <div class="home-foot tc">
      <div class="box-shadow-top">
        <div class="box-shadow-bot">
          <p class="mb5">
            <a href="/notices/" class>最新资讯</a>
            <a href="/partner.html" class>合作招商</a>
            <a href="/contect.html" class>联系我们</a>
          </p>
          <p class="mb20">
            <em class="f12">版权所有 © 2003-2019 永乐票务</em>
          </p>
          <p class="mb5">
            <a href="https://static.228.com.cn/resources/images/footer/yyzzfb.jpg">营业执照</a>|
            <a href="http://beian.miit.gov.cn/publish/query/indexFirst.action "
              target="_blank"
              rel="noopener noreferrer"
            >京IC P证030942号</a>
          </p>
          <p class="mb5">
            <a
              href="http://www.beian.gov.cn/portal/recordQuery?token=f25e17e1-87db-434d-a0e0-26283deceecb"
            >京公网安备 11010102000758号</a>
          </p>
          <p class="mb5">
            <a
              href="https://static.228.com.cn/resources/images/footer/jyxkz.jpg"
            >网络文化经营许可证 京网文 [2019] 3189-307 号</a>
          </p>
          <p>
            <a href="https://static.228.com.cn/resources/images/footer/zzdxjyxkz.jpg">增值电信经营许可证</a> |
            <a href="https://static.228.com.cn/resources/images/footer/yyxycxkz.jpg">营业性演出许可证</a>
          </p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['mytext1', 'mytext2', 'mytext3']
}
</script>

<style lang="scss" scoped>
.homeFooter {
  // position: fixed;
  // bottom: 0;
  .homeFooter_second{
    font-size: .14rem;
    font-weight: 400;
    padding: .2rem 0;
    text-align: center;
    color: #82888f;
    .homeFooter_second_line1{
      margin-bottom: 0.05rem;
      span{
        margin: 0 .15rem;
        font-size: .12rem;
      }
    }
    .homeFooter_second_line2{
      margin-bottom: 0.2rem;
    }
    .homeFooter_second_line3{
      margin-bottom: 0.05rem;
      span:nth-of-type(1),span:nth-of-type(3){
        margin: 0 .15rem;
      }
    }
    .homeFooter_second_line4,
    .homeFooter_second_line5{
      margin-bottom: .05rem;
    }
    .homeFooter_second_line6{
      span:nth-of-type(1),span:nth-of-type(3){
        margin: 0 .15rem;
      }
    }
  }
}
</style>
