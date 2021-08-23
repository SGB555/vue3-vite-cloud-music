<template>
  <div class="banner-wrapper">
    <el-carousel ref="outterBanner" class="flex-1" height="279px" trigger="click" :autoplay="false">
      <el-carousel-item v-for="item in state.bannerList" :key="item.imageUrl">
        <img :src="item.imageUrl + '?imageView&blur=40x20'" class="outter-banner-item" />
      </el-carousel-item>
    </el-carousel>
    <div class="banner-content align-center">
      <el-carousel class="flex-1" height="279px" trigger="click" @change="onCarouselChange">
        <el-carousel-item v-for="item in state.bannerList" :key="item.imageUrl">
          <img :src="item.imageUrl" class="banner-item" />
        </el-carousel-item>
      </el-carousel>
      <div class="download">
        <a class="download-link"></a>
        <div>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ElCarousel, ElCarouselItem } from 'element-plus'
  import { reactive, ref } from 'vue'
  import { BannerState } from '../data'
  import { banner } from '../service'
  const state = reactive<BannerState>({
    bannerList: []
  })
  const currentBannerIndex = ref(0)
  const outterBanner = ref()

  const getBannerList = async () => {
    const { body } = await banner()
    console.log(body)

    state.bannerList = body.banners
  }
  getBannerList()

  const onCarouselChange = (index: number) => {
    currentBannerIndex.value = index
    outterBanner.value?.setActiveItem(index)
  }
</script>
<style lang="less" scoped>
  .banner-wrapper {
    width: 100%;
    position: relative;
    .banner-content {
      position: absolute;
      top: 0;
      width: 980px;
      left: 50%;
      transform: translate(-50%);
    }
    .outter-banner-item {
      width: 6000px;
      height: auto;
    }
    .banner-item {
      width: 100%;
      height: 100%;
    }
    .download {
      height: 100%;
      width: 254px;
      background-color: #000;
      .download-link {
        display: block;
        width: 100%;
        height: 246px;
        background: url('src/assets/imgs/download.png') no-repeat;
      }
      div {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        font-size: 12px;
      }
    }
  }
</style>
