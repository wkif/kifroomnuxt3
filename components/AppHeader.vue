<script setup lang="ts"></script>

<template>
  <div fixed class="flex header" w="100%" p="10px" flex="items-center justify-evenly">
    <div class="flex" w="30%" p="l-2rem" h="100%" right="60px" flex="items-center justify-between">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <!-- <NuxtLink to="/project">Project</NuxtLink> -->
      <NuxtLink to="/link">Link</NuxtLink>
      <NuxtLink to="/saying">Saying</NuxtLink>
      <NuxtLink to="/travel">Travel</NuxtLink>
    </div>
    <Darkmode right="0" />
  </div>
</template>

<style lang="less" scoped>
.header {
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}
</style>
