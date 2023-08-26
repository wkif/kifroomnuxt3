<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()
</script>

<template>
  <div fixed class="flex header" w="100%" p="10px" flex="items-center justify-evenly">
    <div class="flex" w="30%" p="l-2rem" h="100%" right="60px" flex="items-center justify-between">
      <NuxtLink to="/">{{ $t('header.home') }}</NuxtLink>
      <NuxtLink to="/about">{{ $t('header.about') }}</NuxtLink>
      <!-- <NuxtLink to="/project">Project</NuxtLink> -->
      <NuxtLink to="/link">{{ $t('header.link') }}</NuxtLink>
      <NuxtLink to="/saying">{{ $t('header.saying') }}</NuxtLink>
      <NuxtLink to="/travel">{{ $t('header.travel') }}</NuxtLink>
    </div>
    <div flex items-center>
      <div flex items-center color="#dfc243" m-r-1rem>
        <div v-show="locale === 'en'" @click="setLocale('zh')">
          <i class="iconfont icon-languages" text-30px></i>
        </div>
        <div v-show="locale === 'zh'" @click="setLocale('en')">
          <i class="iconfont icon-languages" text-30px></i>
        </div>
      </div>
      <Darkmode right="0" />
    </div>
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
