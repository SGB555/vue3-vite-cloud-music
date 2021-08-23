<template>
  <div class="home">
    <home-header />
    <div class="home-content">
      <router-view></router-view>
    </div>
    <home-footer />
  </div>
</template>

<script lang="ts" setup>
  import HomeHeader from './compoents/HomeHeader.vue'
  import HomeFooter from './compoents/HomeFooter.vue'
</script>
<style lang="less" scoped>
  .home-content {
    // width: 980px;
    min-height: 700px;
    height: 100vh;
    // margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
</style>
