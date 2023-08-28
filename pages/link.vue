<script setup lang="ts">
import { linkData } from '@/data/config'

function goto(url: string) {
  window.open(url)
}
</script>

<template>
  <div>
    <div class="flex flex-row flex-wrap">
      <div
        v-for="(user, index) in linkData.linkList"
        :key="index"
        class="user flex flex-row w-13vw h-8vh kif-bg-white p-10px m-10px b-rd"
        @click="goto(user.url)"
      >
        <div class="avatar w-90px h-90px">
          <waterStripeImg :img-url="user.img" />
        </div>
        <div class="right">
          <div class="name">
            {{ user.name }}
          </div>
          <div class="desc">
            {{ user.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.user {
  .right {
    .name {
      font-size: larger;
    }
    .desc {
      // 单行 文字溢出显示省略号
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.user:hover {
  background-color: #2add9c;
  transition: 0.5s;
  .avatar {
    width: 0px;
    height: 0px;
    transition: 0.5s;
  }
  .right {
    .name {
    }
  }
}
</style>
