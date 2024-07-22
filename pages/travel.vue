<script setup lang="ts">
import { getIncludedYearPosts } from "@/utils";
const posts = await getIncludedYearPosts("travel");
</script>

<template>
  <post-list :posts="posts" />
</template>
