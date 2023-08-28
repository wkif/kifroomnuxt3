<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { blogname } from '@/data/config'

const query: QueryBuilderParams = { path: '/post', sort: [{ date: -1 }] }
const terminal = ref(false)

if (process.client) {
  window.onkeydown = function (event) {
    if (event.ctrlKey && event.keyCode === 77) {
      console.log('terminal.value', terminal.value)
      if (terminal.value) {
        terminal.value = false
      } else {
        terminal.value = true
      }
    }
  }
}
</script>

<template>
  <div>
    <Terminal :show="terminal" />
    <div m="t-100px">
      <h1>👋 Welcome to {{ blogname }}</h1>
      {{ $t('welcome') }}
    </div>
    <div m="t-100px">
      <ContentList v-slot="{ list }" :query="query">
        <div class="flex" flex="items-center">
          共
          <p id="length">{{ list.length }}</p>
          篇文章
        </div>
        <div>
          <div
            v-for="article in list"
            :key="article._path"
            class="slide-in-elliptic-top-fwd"
            p="10px"
            w="70%"
            m="l-10%"
          >
            <NuxtLink :to="article._path" hover="text-#43b244">
              <h2>{{ article.title }}</h2></NuxtLink
            >
            <div w="30%" h="1px" bg="#000000"></div>
            <p>{{ article.description }}</p>
            <p text="right">{{ article.date }}</p>
          </div>
        </div>
      </ContentList>
      <BackTop />
    </div>
  </div>
</template>
