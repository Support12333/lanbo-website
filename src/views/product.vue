<script setup>

</script>

<template>
  <div class="product">
    <div class="banner">
      <div class="title">全方位的数字技术能力体系</div>
      <div class="title">强大底层数据能力支持、全链路营销产品矩阵、行业数字生态整合</div>
    </div>
    <div class="box">
      <div class="container">
        <div class="row content">
          <div class="col-12 col-lg-5 text" style="padding-right:40px">
            <div class="tit">Mission go</div>
            <div class="txt">作为在应用内展示各种积分任务，以供用户完成任务获得积分的广告解决方案。</div>
            <div class="txt">
              其安全性高，主流Top产品接受认可度高各类玩法新
              颖，权重用户含量，粘性大，高于其他一切刷量形式</div>
          </div>
          <div class="col-12 col-lg-7 img">
            <img src="@assets/product_4.png" alt="">
          </div>
        </div>
        <div class="row content">
          <div class="col-12 col-lg-7 img1">
            <img src="@assets/product_p1.png" alt="">
          </div>
          <div class="col-12 col-lg-5 text" style="padding-left:40px">
            <div class="tit">JUNE FB建站系统</div>
            <div class="txt">一款能开Facebook企业广告账户的ERP系统，助力企业轻松
              且批量获得Facebook广告账户。</div>
            <div class="txt">模板精美：贴近市场，实测体验转化率超高</div>
            <div class="txt">海量模板：商城，单页，海量模板，各种风格齐全</div>
            <div class="txt">免费更新：支持独立部署,数据安全性高, 使用灵活,售后,运维
              免费,功能不断免费更新.</div>
            <div class="txt">自定义：模板样式可随意设计，接受客户定制</div>
          </div>
        </div>
        <div class="row content">
          <div class="col-12 col-lg-5 text" style="padding-right:20px">
            <div class="tit">Box go</div>
            <div class="txt">线上盲盒聚焦于年轻一代新消费人群，突破传统电商瓶颈
              能为国际名品、潮流品牌、生活百货、休闲娱乐等行业提
              供获客服务
            </div>
            <div class="txt">
              整合全球优质供应链，通过益知+购物、明星IP+购物
              盲拍+购物等泛娱乐跨界新玩法，提升新一代消费客群
              的购物体验。</div>
          </div>
          <div class="col-12 col-lg-7 img2">
            <img src="@assets/product_p2.png" alt="">
          </div>
        </div>
        <div class="row content">
          <div class="col-12 col-lg-7 img3">
            <img src="@assets/product_3.png" alt="">
          </div>
          <div class="col-12 col-lg-5 text">
            <div class="tit">TUIKER BOT智能AI工具</div>
            <div class="txt">TUIKER BOT作为排名第一的Facebook Messenger聊天机器人
              全场景辅助人工，服务智能化。
            </div>
            <div class="txt">个性化对话提高产品销量、客户参与度、发掘潜在客户并提供
              即时支持，让营销在聊天中完成。</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'product'
}
</script>

<style lang="scss" scoped>
.product {
  .banner {
    height: 966px;
    @include flex(center, center, column);
    @include image(url('@assets/product_banner.png'));

    .title {
      @include tx(51px, 94px);
      font-family: PingFang SC;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0 20px;
    }
  }

  .box {

    .content {
      height: 960px;
      @include flex(center, center);

      .text {
        text-align: left;
        @include flex(center, flex-start, column);

        .tit {
          @include tx(40px, 48px);
          font-family: PingFang SC;
          font-weight: 800;
          color: #004BE9;
          margin-bottom: 25px;
        }

        .txt {
          @include tx(20px, 30px);
          font-family: PingFang SC;
          font-weight: bold;
          color: #666666;
        }
      }

      .img {
        @include flex(flex-end, center);

        >img {
          @include size(720px, 564px)
        }
      }

      .img1 {
        @include flex(flex-start, center);

        >img {
          @include size(525px, 564px)
        }
      }

      .img2 {
        @include flex(flex-end, center);

        >img {
          @include size(532px, 569px)
        }
      }

      .img3 {
        @include flex(flex-start, center);

        >img {
          @include size(715px, 536px)
        }
      }
    }
  }
}
</style>