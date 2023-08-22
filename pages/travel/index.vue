<script setup lang="ts">
// 地图对象
// const map = shallowRef<AMap.Map>()

// // 加载地图文件
// onMounted(() => {
//   map.value = new AMap.Map('container', {
//     zoom: 14,
//     center: [120.03169, 30.22612]
//   })
// })
</script>

<template>
  <div m-t-4rem>
    <div text-left>
      旅游的意义就在于，它允许我错误的理解生活，在这种生活里，我们都是毋需承担的过客，是心情轻松的旁观者，是满心期待的异乡人。
      关于旅行，每个喜欢旅行的人都有自己的看法。或许是出去走走看看，去感受异国异地的风情文化；或许是在不顺心的时候去旅行放松自己，感受不一样的人生，也会对人生产生更多的感悟。所以，旅行的意义究竟是什么，我们一起来探求一下。
      歌德说过：“人之所以爱旅行，不是为了抵达目的地，而是为了享受旅途中的种种乐趣。”有的人去旅行是为了让自己暂时的抛掉生活的琐事，让自己投入旅行的乐趣中。寻找内心的平静。
    </div>
    <TravelSlider />
    <!-- <main>
      <ContentDoc path="/travel" />
    </main> -->
  </div>
</template>

<style lang="less" scoped></style>
