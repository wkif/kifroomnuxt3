<script setup lang="ts">
const route = useRoute();
const post = route.params.post as Array<string>;
const path = post.join("/");
</script>

<template>
  <section class="prose relative slide-enter-content">
    <ContentDoc :path="path">
      <template #default="{ doc }">
        <doc-back />
        <doc-render :article="doc" />
        <doc-toc :toc="doc.body?.toc" />
        <Valine />
      </template>

      <template #empty>
        <h1 class="text-center">好像是个空文档哎😅</h1>
      </template>

      <template #not-found>
        <h1 class="text-center">没找着这个文档😗</h1>
      </template>
    </ContentDoc>
  </section>
  <ToTop />
</template>
