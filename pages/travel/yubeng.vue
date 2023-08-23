<script setup lang="ts">
const imageList = [
  {
    title: '',
    img: ''
  }
]
</script>

<template>
  <div>
    <div class="container w-100% h-40%">
      <div class="box">
        <img src="https://source.unsplash.com/1000x800" />
        <span>CSS</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x802" />
        <span>Image</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x804" />
        <span>Hover</span>
      </div>
      <div class="box">
        <img src="https://source.unsplash.com/1000x806" />
        <span>Effect</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  padding: 4% 2%;
  box-sizing: border-box;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 2%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
}

.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 1 50%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>
