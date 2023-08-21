<script setup lang="ts">
import { SayingData } from '@/data/config'
import type { SayingDataType } from '@/data/sayingData'

const hasSelectList = ref<number[]>([])
const saying: Ref<SayingDataType> = ref({
  msg: ''
})
const image = ref('')
const ID = ref(0)
function getMsg() {
  image.value = ''
  const index = Math.floor(Math.random() * SayingData.length)
  if (hasSelectList.value.includes(index) && hasSelectList.value.length !== SayingData.length) {
    return getMsg()
  }
  hasSelectList.value.push(index)
  saying.value = SayingData[index]
  ID.value = index
  image.value = `https://source.unsplash.com/random?v=${new Date().getTime()}`
}

const dotImg = ref('http://www.appladesign.net/domains/create/documents/dots_266.png')
onMounted(() => {
  getMsg()
})
</script>

<template>
  <div>
    <div
      class="transform-center dark:bg-gray-800 text-gray-800 dark:text-gray-100"
      absolute
      top="50%"
      left="50%"
      z-1
    >
      <div h-520px w-900px class="dark:bg-gray-800 text-gray-800 dark:text-gray-100"></div>
      <div
        h-520px
        w-450px
        absolute
        top="50%"
        left="50%"
        bg-cover
        bg-repeat
        :style="`background-image: url(${image}); transform: translateX(-100%) translateY(-50%)`"
      ></div>
      <div
        class="article"
        style="transform: translateX(35%) translateY(-510%)"
        absolute
        top="50%"
        left="50%"
        text-center
        @click="getMsg"
      >
        <p>MESSAGE {{ ID }}</p>
      </div>
      <div class="block"></div>
      <div
        style="transform: translateX(100%) translateY(-150%)"
        text-center
        absolute
        top="50%"
        left="50%"
      >
        <h1>{{ saying.title }}</h1>
        {{ saying.author }}
      </div>
      <div
        class="para"
        style="transform: translateX(20%) translateY(-20%)"
        w="35%"
        text-center
        text-10px
        absolute
        top="50%"
        left="50%"
      >
        <p>
          {{ saying.msg }}
        </p>
      </div>
      <div
        id="dot"
        style="transform: translateX(140%) translateY(200%)"
        absolute
        top="50%"
        left="50%"
        h-100px
        w-200px
        bg-contain
        bg-repeat
        z-2
        :style="`background-image: url(${dotImg});`"
      ></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#dot:before {
  content: '';
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-850%) translateY(-280%);
  background-image: url(http://www.appladesign.net/domains/create/documents/dots_266.png);
  background-size: contain;
  background-repeat: repeat;
}
.article:before {
  content: 'NEXT';
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-75%) translateY(240%);
}
.article:after {
  content: '----';
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(280%) translateY(-5%);
  font-weight: bold;
}
.block {
  background: grey;
  opacity: 0.5;
  position: absolute;
  height: 5px;
  width: 200px;
  top: 5%;
  left: 65%;
}
.block:before {
  content: '';
  background: grey;
  opacity: 0.5;
  position: absolute;
  height: 5px;
  width: 80px;
  top: 500px;
  left: -145px;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
