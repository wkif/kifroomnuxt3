<script setup lang="ts">
import { formattedDate } from "@/utils";

const props = defineProps(["article"]);
let path = props.article.custompath
  ? props.article.custompath
  : props.article._path;
if (props.article.password) {
  path = `${path}?password=${props.article.password}`;
}
</script>

<template>
  <NuxtLink :to="`/p${path}`">
    <li
      :title="props.article.title"
      class="hover list-none mb-6 mt-2 flex flex-col md:(gap-2 flex-row items-center)"
    >
      <span class="text-lg">
        {{ props.article.title }}
      </span>
      <div
        v-if="props.article.password"
        class="i-mdi-lock-outline m-l-0.5em w-1em h-1em text-#737373 dark:text-#ccc"
      ></div>
      <span class="text-sm op-70">
        {{ formattedDate(props.article.date) }}
      </span>
    </li>
  </NuxtLink>
</template>
