<script setup lang="ts">
import Plum from '../composables/Plum'

const el = ref<HTMLCanvasElement>()
const el2 = ref<HTMLCanvasElement>()
function initFlower() {
  // const canvas = el.value!

  const canvasList = []
  canvasList.push(el.value!)
  canvasList.push(el2.value!)
  const branchList = [
    {
      start: {
        x: 0,
        y: Math.random() * 600
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10
    },
    {
      start: {
        x: 1900,
        y: Math.random() * 600
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10
    }
  ]
  canvasList.forEach((canvas, index) => {
    canvas.width = window.innerWidth - 20
    canvas.height = window.innerHeight
    const plum = new Plum(canvas)
    const branch = branchList[index]
    plum.startPlum(branch)
  })
}
function init() {
  setTimeout(() => {
    initFlower()
  }, 1000)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div>
    <div class="z--1 absolute w-98vw h-screen">
      <canvas id="el" ref="el" class="absolute"></canvas>
      <canvas id="el2" ref="el2" class="absolute"></canvas>
    </div>
    <div>
      <AppHeader h="6vh" z="2" />
      <div p="t-8vh l-50px r-50px b-8vh" min-h="83vh" class="flex" flex="row">
        <Aside w="10vw" />
        <div p="l-10vw">
          <slot />
        </div>
      </div>
      <AppFooter h="5vh" />
    </div>
  </div>
</template>
