<script setup lang="ts">
import { name, socialLink } from '@/data/config'
</script>

<template>
  <div fixed bottom="10vh" opacity-50>
    <div class="flex">
      <div class="flex" flex="col" text="30px" border-r="3px #000000 solid">
        <a m="10px" class="i-mdi-github" :href="socialLink.github"></a>
        <a m="10px" class="i-mdi-email" :href="socialLink.email"></a>
        <!-- <a class="i-mdi-email"></a> -->
      </div>
      <div class="font-Dancing write-vertical-right" m="l-10px" text="50px center">{{ name }}</div>
    </div>
  </div>
</template>
~/data/config
