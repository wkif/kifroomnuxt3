<script setup lang="ts"></script>

<template>
  <div fixed class="flex" w="100%" p="10px" flex="items-center justify-evenly">
    <div class="flex" w="30%" p="l-2rem" h="100%" right="60px" flex="items-center justify-between">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/project">Project</NuxtLink>
    </div>
    <Darkmode right="0" />
  </div>
</template>

