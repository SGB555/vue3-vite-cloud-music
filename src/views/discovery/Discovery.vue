<template>
  <div class="discovery flex-column">
    <Banner />
    <div class="discovery-content flex-1 flex">
      <div class="discovery-content__left flex-1">
        <div class="discovery-content__block">
          <block-title label="热门推荐" left-point>
            <template #value>
              <div class="discovery-content__block-value">
                <Text size="12"> 更多 </Text>
                <Icon name="icon-arrow" color="#c10d0c" size="16" />
              </div>
            </template>
          </block-title>
        </div>
      </div>
      <div class="discovery-content__right"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Banner from './components/Banner.vue'
  import BlockTitle from './components/BlockTitle.vue'
  import Text from '@/components/text/Text.vue'
  import Icon from '@/components/icon/icon.vue'
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
