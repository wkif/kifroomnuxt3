<template>
  <div class="bg-#353130 iconfont flex flex-col items-center">
    <div class="header h-50vh">
      <NuxtImg
        src="https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202407091400771.jpg"
        class="w-full h-full object-cover rounded-6"
      />
      <div
        class="title text-#fff text-6vw md:text-30px font-700 text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <span>勒多曼因之旅</span>
      </div>
    </div>
    <div class="flex items-center p-4 md:w-60% w-100% flex-col overflow-auto">
      <div class="post p-4">
        <section class="prose text-#fff relative slide-enter-content">
          <ContentDoc path="travel/leiduomanyin">
            <template #default="{ doc }">
              <doc-render :article="doc" />
            </template>
            <template #empty>
              <h1 class="text-center">好像是个空文档哎😅</h1>
            </template>
            <template #not-found>
              <h1 class="text-center">没找着这个文档😗</h1>
            </template>
          </ContentDoc>
        </section>
      </div>
      <NuxtImg
        v-for="item in imgList"
        :key="item.id"
        :src="imgBaseUrl + item.src"
        class="p-4 object-cover rounded-6"
        @click="preview(imgBaseUrl + item.src)"
      />
    </div>
    <FilePreview ref="filePreview" type="image" :src="imgPreviewSrc" />
    <ToTop color="#fff" showBack />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
setPageLayout("custom");
const imgBaseUrl = "https://kiftravel.oss-cn-beijing.aliyuncs.com/img/";
const imgList = [
  {
    id: 0,
    title: "",
    src: "202407091359310.JPG",
  },
  {
    id: 1,
    title: "",
    src: "202407091359131.jpg",
  },
  {
    id: 2,
    title: "",
    src: "202407091400663.jpg",
  },
  {
    id: 3,
    title: "",
    src: "202407091400930.jpg",
  },
  {
    id: 4,
    title: "",
    src: "202407091400771.jpg",
  },
  {
    id: 5,
    title: "",
    src: "202407091400313.jpg",
  },
];
const imgPreviewSrc = ref("");
const filePreview = ref();
const preview = (src: string) => {
  imgPreviewSrc.value = src;
  filePreview.value?.open();
};
</script>
