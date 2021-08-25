<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="'#' + name" />
  </svg>
</template>
<script lang="ts" setup>
  import { defineProps, withDefaults } from 'vue'
  interface Props {
    name: string
    color?: string
    size?: string
  }
  withDefaults(defineProps<Props>(), {
    name: '',
    color: '#73787f',
    size: '14'
  })
</script>
<style scoped lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: v-bind(color);
    font-size: v-bind(size + 'px');
  }
</style>
