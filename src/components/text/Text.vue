<template>
  <span class="text">
    <slot></slot>
  </span>
</template>
<script lang="ts" setup>
  import { defineProps, withDefaults } from 'vue'
  interface Props {
    size?: string
  }
  withDefaults(defineProps<Props>(), {
    size: '14'
  })
</script>
<style scoped lang="scss">
  .text {
    font-size: v-bind(size + 'px');
  }
</style>
