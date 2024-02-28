<script setup lang="ts">
import mdData from "../content/photo.md?raw";
const imageLinks = mdData.match(/!\[[^\]]*\]\((.*?)\)/g);
const ImageList: { id: number; title: string; src: string }[] = [];
if (imageLinks) {
  for (let i = 0; i < imageLinks.length; i++) {
    const link = imageLinks[i];
    const src = link.match(/!\[[^\]]*\]\((.*?)\)/)?.[1];
    const imageLabel = link.match(/!\[([^\]]*)\]/);
    src &&
      ImageList.push({
        id: i,
        title: imageLabel && imageLabel.length > 1 ? imageLabel[1] : "",
        src,
      });
  }
}
const previewImg = ref<{
  id: number;
  title: string;
  src: string;
}>();
const show = ref(false);
const preview = (img: { id: number; title: string; src: string }) => {
  previewImg.value = img;
  show.value = true;
};
</script>

<template>
  <div class="photo-box">
    <p class="typewriter">
      不要因为工作而成为没有休息的人，也不需要因为自己想过轻松的生活而感到抱歉。
    </p>
    <p class="text-right">- 沃兹基 梭德 -</p>
    <div v-for="item in ImageList" :key="item.id">
      <ProseImg :src="item.src" :alt="item.title" @click="preview(item)" />
    </div>
    <!-- 全屏预览 -->
    <div
      v-show="show"
      fixed
      top-0
      left-0
      z-10
      w-90%
      h-screen
      bg-gray-900
      p-10
      overscroll-y-auto
      @click="show = false"
    >
      <img
        :src="previewImg?.src"
        :alt="previewImg?.title"
        class="w-100% absolute m-auto transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.typewriter {
  line-height: 1.5;
  display: inline;
  background-image: linear-gradient(
    transparent 50%,
    #e1fffe 50%,
    #b0f8ff 85%,
    transparent 85%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  animation: animatedBackground 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s
    forwards;
}

@keyframes animatedBackground {
  to {
    background-size: 100% 100%;
  }
}
</style>
