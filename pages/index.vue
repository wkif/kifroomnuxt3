<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/post', sort: [{ date: -1 }] }
const length = ref(0)
if (process.client) {
  length.value = Number(document.getElementById('length')?.innerHTML)
}
const page = ref(1)
const pageSize = ref(15)
const totalPage = computed(() => Math.ceil(length.value / pageSize.value))
const prev = ref(0)
const next = ref(15)

function changePage(e: number) {
  if (e === -1) {
    if (page.value === 1) {
      return
    }
    page.value--
  } else {
    if (page.value === totalPage.value) {
      return
    }
    page.value++
  }
  prev.value = (page.value - 1) * pageSize.value
  next.value = page.value * pageSize.value
}
</script>

<template>
  <div m="t-200px">
    <ContentList v-slot="{ list }" :query="query">
      <div class="flex" flex="items-center wrap" w="100%">
        <div
          v-for="article in list.slice(prev, next)"
          :key="article._path"
          p="10px"
          h="10rem"
          w="30%"
          m="10px"
          rounded="10px"
        >
          <NuxtLink :to="article._path" hover="text-#43b244">
            <h2>{{ article.title }}</h2></NuxtLink
          >
          <p>{{ article.date }}</p>
        </div>
      </div>

      <div class="flex" flex="items-center">
        共
        <p id="length">{{ list.length }}</p>
        篇文章
      </div>
    </ContentList>
    <div class="flex" flex="items-center justify-between" p="20px" text="30px" w="30%">
      <div v-show="page !== 1" class="i-mdi-arrow-left-thick" @click="changePage(-1)"></div>
      <div v-show="page !== totalPage" class="i-mdi-arrow-right-thick" @click="changePage(1)"></div>
    </div>
  </div>
</template>
