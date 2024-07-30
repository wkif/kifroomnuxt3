<template>
  <div class="bg-#353130 iconfont flex flex-col items-center">
    kif
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
const imgList = [];
const imgPreviewSrc = ref("");
const filePreview = ref();
const preview = (src: string) => {
  imgPreviewSrc.value = src;
  filePreview.value?.open();
};
</script>
