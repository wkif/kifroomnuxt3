<script setup lang="ts">
import { checkoutPass } from "@/utils/index";
const route = useRoute();
const post = route.params.post as Array<string>;
const path = post.join("/");
const isLock = ref(route.query.password ? true : false);
const articles = ref({});
const getData = async () => {
  articles.value = await queryContent(path).findOne();
  useHead({
    title: articles.value?.title,
    meta: [{ name: "description", content: articles.value?.description }],
  });
};

const isErr = ref(false);
const password = ref("");
onMounted(() => {
  if (!isLock.value) {
    getData();
  } else {
    useHead({
      title: "kif room",
      meta: [{ name: "description", content: "" }],
    });
  }
});
const dealPassword = async () => {
  const res = await checkoutPass(password.value, path);
  if (res) {
    isLock.value = false;
    isErr.value = false;
    getData();
  } else {
    isErr.value = true;
  }
};
</script>

<template>
  <section class="prose relative slide-enter-content">
    <template v-if="!isLock">
      <template v-if="articles">
        <doc-back />
        <doc-render :article="articles" />
        <doc-toc :toc="articles.body?.toc" />
        <Valine />
      </template>

      <template v-else>
        <h1 class="text-center">好像是个空文档哎😅</h1>
      </template>
    </template>
    <template v-else>
      <doc-back />
      <div class="flex items-center w-100vw">
        <div class="w-50vw">
          <input
            class="dark:bg-#fff bg-#E1E1E1 w-100% h-2em rounded-4 p-4 mr-4 border-#E1E1E1"
            type="password"
            v-model="password"
            @keyup.enter="dealPassword"
          />
        </div>
        <div
          class="i-mdi-lock-outline w-1em h-1em ml-1vw"
          @click="dealPassword"
        ></div>
      </div>
      <div class="text-red mt-1em mb-3em" v-show="isErr">密码错误</div>
      <Valine />
    </template>
  </section>
  <ToTop />
</template>
