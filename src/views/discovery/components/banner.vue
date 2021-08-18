<template>
  <div class="banner align-center">
    <!-- <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div v-for="(item, index) of state.bannerList" :key="index">
        <h3>{{ item.imageUrl }}</h3>
      </div>
    </a-carousel> -->
    <div class="download">
      <a class="download-link"></a>
      <div>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  // import { Carousel } from 'ant-design-vue'
  // import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
  import { BannerState } from '../data'
  import { banner } from '../service'
  export default defineComponent({
    name: 'Banner',
    //   components: {
    //     ACarousel: Carousel,
    //     LeftCircleOutlined,
    //     RightCircleOutlined
    //   },
    setup() {
      const state = reactive<BannerState>({
        bannerList: []
      })
      const getBannerList = async () => {
        const { body } = await banner()
        state.bannerList = body.banner
      }
      getBannerList()
      // banner().then(({ body }) => {
      //   state.bannerList = body.banner
      // })
      return {
        state
      }
    }
  })
</script>
<style lang="less" scoped>
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 284px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
  }
  .ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
  }

  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }

  .banner {
    width: 100%;
    .ant-carousel {
      width: 730px;
      height: 284px;
    }
    .download {
      height: 100%;
      width: 100%;
      background-color: #000;
      .download-link {
        display: block;
        width: 100%;
        height: 246px;
        background: url('src/assets/imgs/download.png');
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
