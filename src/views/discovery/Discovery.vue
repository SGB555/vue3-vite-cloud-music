<template>
  <Banner />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import Banner from './components/banner.vue'

  export default defineComponent({
    name: 'Discovery',
    components: { Banner }
    //   setup() {}
  })
</script>
