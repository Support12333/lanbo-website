<script setup>

</script>

<template>
  <div class="haeder">
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-4 logo">
          <img src="@assets/logo.png" alt="">
        </div>
        <div class="col-6 col-lg-8 navbars">
          <ul class="navbars_header">
            <li><a href="">首页</a></li>
            <li><a href="">产品服务</a></li>
            <li><a href="">技术优势</a></li>
            <li><a href="">联系我们</a></li>
          </ul>
        </div>
      </div>
      <!-- <div class="navbar navbar-default"></div>
      <div class="navbar-header">
        <a href="#" class="navbar-brand">Tarena</a>
        <a href="#startNav" data-toggle="collapse" class="navbar-toggle">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
      </div>
      <div id="startNav" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">首页</a></li>
          <li><a href="#">新闻</a></li>
          <li class="dropdown">
            <a href="#" data-toggle="dropdown">产品大全</a>
            <ul class="dropdown-menu">
              <li>MP3</li>
              <li>MP4</li>
              <li>DVD</li>
            </ul>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.haeder {
  @include header;
  @include flex(center, center);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  .logo {
    @include flex(flex-start, center);

    >img {
      @include size(216px, 42px)
    }
  }

  .navbars {
    @include flex(flex-end, center);

    .navbars_header {
      @include flex(center, center);

      >li {
        @include tx(20px, 75px);
        font-family: PingFang SC;
        font-weight: 800;

        >a {
          display: block;
          color: #FFFFFF;
        }

        &:hover {
          animation: jump .4s;
        }
      }

      @keyframes jump {
        0% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-5px);
        }

        100% {
          transform: translateY(0);
        }
      }

      li+li {
        margin-left: 60px;
      }
    }
  }
}
</style>