<script setup>
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-4 item">
          <div class="title">友情链接</div>
          <div class="txt">https://github.com/</div>
          <div class="lang" @click="showNav">
            <span>语言选择</span>
            <ul class="nav-menu" v-show="menuShow">
              <li>中文简体</li>
              <li>English</li>
            </ul>
            <div class="arrow" :style="menuShow ? arrowstyle : ''"></div>
          </div>
        </div>
        <div class="col-4 item">
          <div class="title">联系我们</div>
          <div class="txt">24小时服务电话：18273186990</div>
          <div class="txt">邮箱: juhechuhai@163.com</div>
          <div class="txt">地址：长沙市岳麓区长沙芯城科技园1栋704室</div>
        </div>
        <div class="col-4 item">
          <div class="title">友情链接</div>
          <div class="txt">关注我们，助您出海无忧</div>
          <div class="img">
            <img src="@assets/qrcode.png" alt="">
            <img src="@assets/qrcode1.png" alt="">
          </div>
        </div>
        <div class="backg color1"></div>
        <div class="backg color2"></div>
        <div class="backg color3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menuShow: false,
      arrowstyle: 'transform: rotateZ(540deg);top:8%;left:20%'
    }
  },
  methods: {
    //语言选择展示隐藏
    showNav() {
      this.menuShow = !this.menuShow
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 500px;
  background-color: #FFFFFF;
  padding-top: 115px;

  .item {
    text-align: left;
    z-index: 99;

    .title {
      @include tx(20px, 28px);
      font-family: PingFang SC;
      font-weight: 800;
      color: #004BE9;
      margin-bottom: 21px;
    }

    .txt {
      @include tx(16px, 24px);
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      padding: 9px 0;
    }

    .img {
      @include flex(flex-start);

      >img {
        @include size(100px, 100px)
      }
    }

    .lang {
      position: relative;
      cursor: pointer;
      margin-top: 112px;

      >span {
        @include tx(18px, 24px);
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
      }

      .arrow {
        height: 0;
        width: 0;
        border-width: 6px;
        border-color: #004BE9 transparent transparent;
        border-style: solid;
        top: 50%;
        position: absolute;
        left: 21.5%;
        transform: translate(-50%, -25%);
        background: transparent !important;
      }

      .nav-menu {
        min-width: 96px;
        position: absolute;
        top: 30px;
        left: 0;
        background: rgba(70, 120, 225, 1);
        box-shadow: 0px 8px 14px 1px rgba(0, 0, 0, 0.05);

        >li {
          padding: 10px;
          line-height: 22px;
          font-size: 14px;
          font-weight: bold;
          color: #FFFFFF;
          text-align: center;
          transition: all 0.4s;

          &:hover {
            color: #FFFFFF;
            background-color: #004BE9;
          }
        }
      }
    }
  }

  .backg{
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 342px;
    background: linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%);

  }

  .color1{
    left: 8%;
    width: 250px;
  }

  .color2{
    left: 26%;
    width: 184px;
  }

  .color3{
    left: 40%;
    width: 118px;
  }
}
</style>