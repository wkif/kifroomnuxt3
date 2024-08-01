<template>
  <div
    ref="parent"
    class="w-70vw h-100vh border-2 border-gray-300 bg-gray-100 dark:bg-white"
    @click="startFrame"
  >
    <canvas ref="el"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const el = ref<HTMLCanvasElement | null>(null);
const parent = ref<HTMLDivElement | null>(null);

function init() {
  const canvas = el.value!;
  const canvasWidth = parent.value!.clientWidth;
  const canvasHeight = parent.value!.clientHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d")!;
  return { ctx, canvasWidth, canvasHeight };
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawCurvedPolygon(
  ctx: CanvasRenderingContext2D,
  point1: { x1: number; y1: number },
  point2: { x2: number; y2: number }
) {
  const rectHeight = getRandomInt(60, 100);
  const shrinkAmount = getRandomInt(0, 5);
  const outerRect = [
    { x: point1.x1, y: point1.y1 },
    { x: point2.x2, y: point2.y2 },
    { x: point2.x2, y: point2.y2 - rectHeight },
    { x: point1.x1, y: point1.y1 - rectHeight },
  ];

  const innerRect = [
    { x: outerRect[0].x + shrinkAmount, y: outerRect[0].y - shrinkAmount },
    { x: outerRect[1].x - shrinkAmount, y: outerRect[1].y - shrinkAmount },
    { x: outerRect[2].x - shrinkAmount, y: outerRect[2].y + shrinkAmount },
    { x: outerRect[3].x + shrinkAmount, y: outerRect[3].y + shrinkAmount },
  ];

  // Function to get a random offset for curve
  function getRandomOffset() {
    return (Math.random() - 0.5) * 5;
  }

  ctx.beginPath();
  ctx.moveTo(outerRect[0].x, outerRect[0].y); // 1

  // Draw to innerRect[0]
  const midPoint1 = {
    x: (outerRect[0].x + innerRect[0].x) / 2 + getRandomOffset(),
    y: (outerRect[0].y + innerRect[0].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    outerRect[0].x,
    outerRect[0].y,
    midPoint1.x,
    midPoint1.y
  );

  // Draw to innerRect[3]
  const midPoint2 = {
    x: (innerRect[0].x + innerRect[3].x) / 2 + getRandomOffset(),
    y: (innerRect[0].y + innerRect[3].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    innerRect[0].x,
    innerRect[0].y,
    midPoint2.x,
    midPoint2.y
  );

  // Draw to outerRect[3]
  const midPoint3 = {
    x: (innerRect[3].x + outerRect[3].x) / 2 + getRandomOffset(),
    y: (innerRect[3].y + outerRect[3].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    innerRect[3].x,
    innerRect[3].y,
    midPoint3.x,
    midPoint3.y
  );

  // Draw to outerRect[2]
  const midPoint4 = {
    x: (outerRect[3].x + outerRect[2].x) / 2 + getRandomOffset(),
    y: (outerRect[3].y + outerRect[2].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    outerRect[3].x,
    outerRect[3].y,
    midPoint4.x,
    midPoint4.y
  );

  // Draw to innerRect[2]
  const midPoint5 = {
    x: (outerRect[2].x + innerRect[2].x) / 2 + getRandomOffset(),
    y: (outerRect[2].y + innerRect[2].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    outerRect[2].x,
    outerRect[2].y,
    midPoint5.x,
    midPoint5.y
  );

  // Draw to innerRect[1]
  const midPoint6 = {
    x: (innerRect[2].x + innerRect[1].x) / 2 + getRandomOffset(),
    y: (innerRect[2].y + innerRect[1].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    innerRect[2].x,
    innerRect[2].y,
    midPoint6.x,
    midPoint6.y
  );

  // Draw to outerRect[1]
  const midPoint7 = {
    x: (innerRect[1].x + outerRect[1].x) / 2 + getRandomOffset(),
    y: (innerRect[1].y + outerRect[1].y) / 2 + getRandomOffset(),
  };
  ctx.quadraticCurveTo(
    innerRect[1].x,
    innerRect[1].y,
    midPoint7.x,
    midPoint7.y
  );

  // Draw to outerRect[0]
  ctx.quadraticCurveTo(
    outerRect[1].x,
    outerRect[1].y,
    outerRect[0].x,
    outerRect[0].y
  ); // Close the path

  // ctx.strokeStyle = "#d8d8d8";
  ctx.strokeStyle = "#32312E";
  ctx.stroke();
  return {
    point1: {
      x1: outerRect[3].x,
      y1: outerRect[3].y,
    },
    point2: {
      x2: outerRect[2].x,
      y2: outerRect[2].y,
    },
  };
}

onMounted(() => {
  const { ctx, canvasHeight } = init();
  let point1 = { x1: 10, y1: canvasHeight };
  let rectWidth = getRandomInt(15, 20);
  let point2 = { x2: 10 + rectWidth, y2: canvasHeight };
  const maxHeight = 10;
  let count = 0;

  function startFrame() {
    requestAnimationFrame(() => {
      while (count < maxHeight) {
        const res = drawCurvedPolygon(ctx, point1, point2);
        console.log("res", res);
        point1 = res.point1;
        point2 = res.point2;
        point2.x2 -= 1;
        startFrame();
        count++;
      }
    });
  }

  startFrame();
  // const resizeCanvas = () => {
  //   const { ctx, canvasHeight } = init();
  //   drawCurvedPolygon(ctx, point);
  // };

  // window.addEventListener("resize", resizeCanvas);

  // onBeforeUnmount(() => {
  //   window.removeEventListener("resize", resizeCanvas);
  // });
});
</script>
