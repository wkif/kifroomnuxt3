<script lang="ts" setup>
const route = useRoute();
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Social from "./components/Social.vue";

import { FullWidthPath } from "@/site.config";
const isFullWidth = FullWidthPath.includes(route.name as string);

const el = ref<HTMLCanvasElement>();

/* 角度 */
const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
/* random 函数 */
const { random } = Math;
/* len 也就是延展出去的长度 */
const len: number = 6;
/* 匿名函数 */
const pendingCallback: any[] = [];

interface Point {
  x: number;
  y: number;
}

/* initialize */
function init() {
  const canvas = el.value!;
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d")!;
  return { ctx };
}
/* paintLine */
function line(ctx: CanvasRenderingContext2D, p1: Point, p2: Point) {
  ctx.beginPath();
  ctx.strokeStyle! = "#d8d8d8";
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}
/* getP2 */
function getP2(x = 0, y = 0, theta = 0) {
  const dx = x + len * Math.cos(theta);
  const dy = y + len * Math.sin(theta);
  return { x: dx, y: dy };
}

onMounted(() => {
  const { ctx } = init();
  let interable = 0;
  const max_x = document.body.clientWidth;
  const max_y = document.body.clientHeight;

  const step = function (x: number, y: number, rad: number) {
    const p1 = { x, y };
    const p2 = getP2(x, y, rad);
    line(ctx, p1, p2);
    if (x > max_x || x < 0 || y > max_y || y < 0) return;
    if (random() < 0.5 || interable < 4) {
      pendingCallback.push(() => step(p2.x, p2.y, rad + random() * r15));
    }
    if (random() < 0.5 || interable < 4) {
      pendingCallback.push(() => step(p2.x, p2.y, rad - random() * r15));
    }
  };

  pendingCallback.push(() => step(random() * max_x, 0, r90));
  pendingCallback.push(() => step(random() * max_x, max_y, -r90));
  pendingCallback.push(() => step(0, random() * max_y, 0));
  pendingCallback.push(() => step(max_x, random() * max_y, r180));

  function frame() {
    const task = [...pendingCallback];
    pendingCallback.length = 0;
    interable += 1;
    task.forEach((fn) => fn());
  }

  function startFrame() {
    requestAnimationFrame(() => {
      frame();
      startFrame();
    });
  }

  startFrame();
});
</script>

<template>
  <div class="z--1 absolute h-screen">
    <canvas id="el" ref="el" class="absolute"></canvas>
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
