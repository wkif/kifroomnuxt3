<template>
  <div
    class="fixed right-2em bottom-2em cursor-pointer flex items-center flex-col space-between"
  >
    <div
      class="i-mdi-arrow-left-top w-10 h-10 my-4 text-#353130 dark:text-#fff"
      :style="{ color: prop.color }"
      v-if="prop.showBack"
      @click="$router.back()"
    ></div>
    <div
      class="i-mdi-arrow-up-circle-outline w-10 h-10 my-4 text-#353130 dark:text-#fff"
      :style="{ color: prop.color }"
      @click="goTop"
    ></div>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps({
  color: {
    type: String,
    default: "",
  },
  showBack: {
    type: Boolean,
    default: false,
  },
});
const goTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>
<style scoped></style>
