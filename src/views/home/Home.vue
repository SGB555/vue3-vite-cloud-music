<template>
  <div class="home">
    <home-header />
    <div class="content">
      <router-view></router-view>
    </div>
    <home-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeHeader from './compoents/HomeHeader.vue'
import HomeFooter from './compoents/HomeFooter.vue'

export default defineComponent({
  name: 'Home',
  components: { HomeHeader, HomeFooter }
})
</script>
<style lang="less" scoped>
.content {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
</style>
