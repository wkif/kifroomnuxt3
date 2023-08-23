<script setup lang="ts">
// 地图对象
const map = shallowRef<AMap.Map>()

function initMap() {
  map.value = new AMap.Map('map', {
    viewMode: '3D', // 是否为3D地图模式
    zoom: 10, // 初始化地图级别
    center: [113.868293, 27.637853]
  })
  // 添加插件
  AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye'], () => {
    // 异步同时加载多个插件
    map.value.addControl(new AMap.HawkEye()) // 显示缩略图
    map.value.addControl(new AMap.Scale()) // 显示当前地图中心的比例尺
  })
}
async function getLocation(city: string) {
  const res: {
    data: {
      value: {
        code: number
        data: string
      }
    }
  } = await useFetch('/api/geocode', {
    params: {
      city
    }
  })
  const { code, data } = res.data.value
  if (code !== 200) {
    console.log('error', data)
  } else {
    const location = data.split(',')
    console.log('location', location)
    map.value?.setCenter([...location])
  }
}

// 加载地图文件
onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      initMap()
    }, 1000)
  }
})
</script>

<template>
  <div m-t-4rem>
    <div class="text" text-left text-1rem>
      肉体和灵魂，总有一个需要在路上。
    </div>
    <div flex items-center>
      <!-- <div id="container" w-50vw h-50vh p-1rem m-1rem></div> -->
      <div class="border">
        <div class="frame">
          <div id="map" class="image" w-50vw h-60vh p-1rem m-1rem></div>
        </div>
      </div>
      <TravelSlider @get-location="getLocation" />
    </div>

    <!-- <main>
      <ContentDoc path="/travel" />
    </main> -->
  </div>
</template>

<style lang="less" scoped>
@keyframes animatedBackground {
  to {
    background-size: 100% 100%;
  }
}
.text {
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
  animation: animatedBackground 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s forwards;
}
.border {
  box-sizing: border-box;
  position: relative;
  background: black;
  background-image: linear-gradient(to top right, #5d5d5b, #383838);
  padding: 7px;
  width: 50vw;
  height: 60vh;
  box-shadow: -1px 1px var(--blur) 1px rgba(0, 0, 0, 0.1),
    -2px 2px var(--blur) 1px rgba(0, 0, 0, 0.09), -3px 3px var(--blur) 1px rgba(0, 0, 0, 0.08),
    -4px 4px var(--blur) 1px rgba(0, 0, 0, 0.07), -5px 5px var(--blur) 1px rgba(0, 0, 0, 0.06),
    -6px 6px var(--blur) 1px rgba(0, 0, 0, 0.05), -7px 7px var(--blur) 1px rgba(0, 0, 0, 0.04),
    -8px 8px var(--blur) 1px rgba(0, 0, 0, 0.03), -9px 9px var(--blur) 1px rgba(0, 0, 0, 0.03),
    -10px 10px var(--blur) 1px rgba(0, 0, 0, 0.03), -11px 11px var(--blur) 1px rgba(0, 0, 0, 0.03),
    -12px 12px var(--blur) 1px rgba(0, 0, 0, 0.02), -13px 13px var(--blur) 1px rgba(0, 0, 0, 0.02),
    -14px 14px var(--blur) 1px rgba(0, 0, 0, 0.01), -15px 15px var(--blur) 1px rgba(0, 0, 0, 0.01),
    -16px 16px var(--blur) 1px rgba(0, 0, 0, 0.01);
  &:before {
    content: ' ';
    display: block;
    padding-bottom: 140%;
  }
}

.frame {
  left: 3%;
  top: 2.5%;
  box-shadow: inset -1px 1px 6px 1px rgba(0, 0, 0, 0.24);
  width: 94%;
  height: 95%;
  background: white;
  align-items: center;
  display: flex;
  padding: 18px;
  box-sizing: border-box;
  position: absolute;
}

.image {
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
</style>
