<script setup lang="ts">
const commandList: {
  name: string
  desc: string
}[] = [
  {
    name: 'ls/list',
    desc: 'list all posts'
  },
  {
    name: 'help',
    desc: 'show help'
  },
  {
    name: 'about',
    desc: 'about me'
  }
]
</script>

<template>
  <div>
    <div v-for="item in commandList" :key="item.name" flex justify-center>
      <div color="#f6b6d0">{{ item.name }}：</div>
      <div>{{ item.desc }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
