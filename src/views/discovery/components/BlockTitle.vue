<template>
  <div class="block-title align-center">
    <slot name="label">
      <div class="block-title__label align-center flex-1">
        <div v-if="leftPoint" class="block-title__point" />
        <span>{{ label }}</span>
      </div>
    </slot>
    <slot name="subTitle"></slot>
    <div>
      <slot name="value"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineProps, withDefaults } from 'vue'
  interface props {
    label: string
    leftPoint?: boolean
  }
  withDefaults(defineProps<props>(), {
    label: '',
    leftPoint: false
  })
</script>
<style lang="scss" scoped>
  .block-title {
    border-bottom: 2px solid #c10d0c;
    height: 35px;
    width: 100%;
    .block-title__label {
      span {
        font-size: 20px;
      }
    }
    .block-title__point {
      border-radius: 50%;
      width: 6px;
      height: 6px;
      border: 4px solid #c10d0c;
      margin-right: 10px;
    }
  }
</style>
