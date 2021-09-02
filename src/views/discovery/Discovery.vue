<template>
  <div class="discovery flex-column">
    <Banner />
    <div class="discovery-content flex-1 flex">
      <div class="discovery-content__left flex-1">
        <div class="discovery-content__block">
          <Recommend />
        </div>
      </div>
      <div class="discovery-content__right"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Banner from './components/Banner.vue'
  import Recommend from '@/views/discovery/components/Recommend.vue'
</script>
<style lang="scss" scoped>
  .discovery {
    background-color: #f5f5f5;
    height: 100%;
    .discovery-content {
      width: 982px;
      margin: 0 auto;
      background-color: #fff;
      .discovery-content__block {
        padding: 20px 20px 40px;
      }
      .discovery-content__right {
        width: 254px;
        background-color: #000;
      }
    }
  }
</style>
