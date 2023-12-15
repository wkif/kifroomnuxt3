<script setup lang="ts">
import { valineConfig } from '@/site.config'

onMounted(() => {
  import('valine').then((res) => {
    const Valine = res.default
    const valine = new Valine(valineConfig)
  })
})
</script>

<template>
  <div id="valineBox" w="100%" m="t-20px"></div>
</template>