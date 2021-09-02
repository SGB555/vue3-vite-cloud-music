<template>
  <span class="text">
    <slot></slot>
  </span>
</template>
<script lang="ts" setup>
  import { defineProps, withDefaults } from 'vue'
  import { Props } from './Text'
  withDefaults(defineProps<Props>(), {
    size: '14px'
  })
</script>
<style scoped lang="scss">
  .text {
    font-size: v-bind(size);
  }
</style>
