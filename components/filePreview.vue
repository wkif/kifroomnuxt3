<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed bg-cover z-10 w-100vw h-100vh flex flex-col items-center space-between py-10vh"
      @touchmove.prevent
    >
      <div class="flex items-center justify-between w-100% md:w-60% p-4">
        <div class="text-#fff text-20px font-700 text-center">{{ title }}</div>
        <div
          class="i-mdi-close text-#fff text-20px cursor-pointer"
          @click="close"
        ></div>
      </div>
      <div class="content w-100% md:w-80% h-100% p-4">
        <NuxtImg
          v-if="type === 'image'"
          :src="src"
          class="h-100% w-100% object-contain rounded-4"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "image",
  },
  src: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const visible = ref(false);
const open = () => {
  visible.value = true;
  stopMove();
};
const close = () => {
  visible.value = false;
  Move();
};
const stopMove = () => {
  let m = function (e) {
    e.preventDefault();
  };
  document.body.style.overflow = "hidden";
  document.addEventListener("touchmove", m, { passive: false }); //禁止页面滑动
};
//开启页面滚动
const Move = () => {
  let m = function (e) {
    e.preventDefault();
  };
  document.body.style.overflow = ""; //出现滚动条
  document.removeEventListener("touchmove", m, { passive: true });
};
defineExpose({ open, close });
</script>
<style scoped>
.bg-cover {
  backdrop-filter: blur(8px);
  background: hsl(0deg 0% 100% / 20%);
  box-shadow: inset 0 0 6px hsl(0deg 0% 100% / 20%);
}
</style>
