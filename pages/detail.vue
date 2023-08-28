<script setup lang="ts">
const route = useRoute()
const path = route.query.path
console.log('path', path)
const { data } = await useAsyncData('page-data', () => queryContent(path).findOne())
console.log('data', data)
</script>

<template>
  <div>{{ route.query.path }}</div>
</template>

<style lang="less" scoped></style>
