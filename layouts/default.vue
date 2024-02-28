<script lang="ts" setup>
const route = useRoute();
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Social from "./components/Social.vue";
import Plum from "../composables/Plum";
import { FullWidthPath } from "@/site.config";

const el = ref<HTMLCanvasElement>();
const el2 = ref<HTMLCanvasElement>();
function initFlower() {
  // const canvas = el.value!

  const canvasList = [];
  canvasList.push(el.value!);
  canvasList.push(el2.value!);
  const branchList = [
    {
      start: {
        x: 0,
        y: Math.random() * 600,
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10,
    },
    {
      start: {
        x: 1900,
        y: Math.random() * 600,
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10,
    },
  ];
  canvasList.forEach((canvas, index) => {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight;
    const plum = new Plum(canvas);
    const branch = branchList[index];
    plum.startPlum(branch);
  });
}
function init() {
  setTimeout(() => {
    initFlower();
  }, 1000);
}
const isFullWidth = FullWidthPath.includes(route.name as string);
onMounted(() => {
  init();
});
</script>

<template>
  <div class="z--1 absolute h-screen">
    <canvas id="el" ref="el" class="absolute"></canvas>
    <canvas id="el2" ref="el2" class="absolute"></canvas>
  </div>
  <header class="p-2em fixed z-1 top-0 left-0 right-0">
    <NavBar />
  </header>
  <aside>
    <Social />
  </aside>
  <main class="flex-1 px-7 py-10 w-100% m-t-5.5em">
    <div class="m-auto" :class="isFullWidth ? '' : 'max-w-70ch'">
      <slot />
      <Footer />
    </div>
  </main>
</template>
<style>
header {
  backdrop-filter: blur(8px);
  background: hsl(0deg 0% 100% / 20%);
  box-shadow: inset 0 0 6px hsl(0deg 0% 100% / 20%);
}
</style>
