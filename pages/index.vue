<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/post', sort: [{ date: -1 }] }
</script>

<template>
  <div m="t-200px">
    <ContentList v-slot="{ list }" :query="query">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">
          <h2>{{ article.title }}</h2></NuxtLink
        >
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </div>
</template>
