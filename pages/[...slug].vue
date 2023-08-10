<script setup lang="ts">
const { page, prev, next, toc } = useContent()
const docShow = ref(false)
function changedocShow() {
  docShow.value = !docShow.value
}
</script>

<template>
  <div>
    <div>
      <div m="b-50px t-50px">
        <NuxtLink to="/"><div class="i-mdi-keyboard-return" text="39px"></div></NuxtLink>
      </div>
      <h1 m="b-50px t-50px">{{ page.title }}</h1>
      <div class="flex" w="80vw">
        <ContentRenderer :key="page._id" w="60vw" :value="page" />
        <div
          fixed
          right="10px"
          w="17vw"
          class="dark:bg-#4c545f text-gray-800 bg-#ffffff dark:text-gray-800"
          p="10px"
          rounded="10px"
        >
          <div class="flex" flex="items-center">
            <p>目录</p>
            <div
              v-show="docShow"
              class="i-mdi-triangle-down"
              p="l-10px"
              @click="changedocShow"
            ></div>
            <div v-show="!docShow" class="i-mdi-triangle" p="l-10px" @click="changedocShow"></div>
          </div>
          <div v-show="docShow">
            <ul v-if="toc && toc.links">
              <li v-for="link in toc.links" :key="link.text">
                <a :href="`#${link.id}`">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div m="t-50px" class="flex" w="80%" flex="row items-center">
      <div h="4rem" bg="#ffffff" w="50%" dark:bg-gray-800 m="10px" text="center" rounded="10px">
        <NuxtLink v-if="prev" p="10px" :to="prev._path">上一篇：{{ prev.title }}</NuxtLink>
      </div>
      <div h="4rem" bg="#ffffff" w="50%" dark:bg-gray-800 m="10px" text="center" rounded="10px">
        <NuxtLink v-if="next" p="10px" :to="next._path">下一篇：{{ next.title }}</NuxtLink>
      </div>
    </div>
    <BackTop />
    <Valine />
  </div>
</template>
