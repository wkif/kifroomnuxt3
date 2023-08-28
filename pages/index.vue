<script setup lang="ts">
// import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { blogname } from '@/data/config'

// 导入json文件
import data from '@/data/path.json'

const router = useRouter()
// const query: QueryBuilderParams = { path: '/post', sort: [{ date: -1 }] }
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

const postList = ref([...data])
function goto (path: string) {
  router.push(`/detail?path=${path}`)
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
      <div v-for="article in postList" :key="article.path">
        <!-- <a :href="article.path" hover="text-#43b244">
          <h2>{{ article.name }}</h2>
        </a> -->
        <div @click="goto(article.path)">
          <h2>{{ article.name }}</h2>
        </div>
      </div>
      <div>{{ postList }}</div>
      <!-- <main>
        <ContentList path="/post" v-slot="{ list }">
          <div v-for="article in list" :key="article._path">
            <h2>{{ article.title }}</h2>
            {{ article._path }}
            <NuxtLink :to="article._path" hover="text-#43b244">
              <h2>{{ article.title }}</h2>
            </NuxtLink>
          </div>
        </ContentList>
      </main> -->
      <!-- <ContentList v-slot="{ list }" :query="query">
        <div>
          <div
            v-for="article in list.slice(prev, next)"
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

        <div class="flex" flex="items-center">
          共
          <p id="length">{{ list.length }}</p>
          篇文章
        </div>
      </ContentList> -->
      <BackTop />

      <div class="flex" flex="items-center justify-between" p="20px" text="30px" w="30%">
        <div v-show="page !== 1" class="i-mdi-arrow-left-thick" @click="changePage(-1)"></div>
        <div
          v-show="page !== totalPage"
          class="i-mdi-arrow-right-thick"
          @click="changePage(1)"
        ></div>
      </div>
    </div>
  </div>
</template>
