<script setup lang="ts"></script>

<template>
  <main>
    <ContentList path="/post" v-slot="{ list }">
      <ul>
        <li v-for="link of list" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentList>
  </main>
</template>

<style lang="less" scoped></style>
