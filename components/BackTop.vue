<script setup lang="ts">
const scrollTop = ref(0) // 距顶部距离
const visiable = ref(false) // 是否显示组件
let done = false // 是否停止帧函数

// 检测距离
function handleScroll() {
  scrollTop.value =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  scrollTop.value > 500 ? (visiable.value = true) : (visiable.value = false)
}

// 动画帧函数
function step() {
  scrollTop.value <= 0 ? (done = true) : (done = false)
  window.scrollTo({
    top: (scrollTop.value -= 75)
  })
  if (!done) {
    window.requestAnimationFrame(step)
  }
}

// 返回顶部
function handleScrollTop() {
  // 下一次重绘之前更新动画帧所调用的函数 60次1秒
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
  window.requestAnimationFrame(step)
}

// 设置监听与卸载
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    v-show="visiable"
    class="icons"
    fixed
    right="3rem"
    bottom="7rem"
    w="2rem"
    h="2rem"
    p="0.5rem"
    bg="#e1c857"
    rounded="50%"
    cursor="pointer"
    transition="all 0.3s ease-in-out"
    hover="bg-#43b244"
    color="#ffffff"
    @click="handleScrollTop"
  >
    <div class="i-mdi-arrow-up" text="2rem" leading="2rem"></div>
  </div>
</template>

