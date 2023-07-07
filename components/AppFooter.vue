<script setup lang="ts">
import { name } from '@/config'
</script>

<template>
  <div fixed bottom="0" w="100%" text="center" p="10px">
    <a
      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      CC BY-NC-SA 4.0
    </a>
    2023-PRESENT © {{ name }}
  </div>
</template>
