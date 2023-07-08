<script setup lang="ts">
import { filmList } from '@/data/config'
</script>

<template>
  <div m="t-30px">
    <div v-if="filmList.length" class="container">
      <div
        v-for="(film, index) in filmList"
        :key="index"
        class="card"
        :class="film.haveSeen ? 'card1' : ''"
      >
        <h2>{{ film.name }}</h2>
        <p>{{ film.time }}</p>
        <div
          class="pic"
          :style="`background-image: url('${film.image}');    background-size: 100%;`"
        ></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button></button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// Color variables (appears count calculates by raw css)
@color0: #ffffff; // Appears 4 times
@color1: #e6e5e1; // Appears 4 times

// Width variables (appears count calculates by raw css)
@width6: 16px; // Appears 2 times

// Height variables (appears count calculates by raw css)
@height1: 200px; // Appears 2 times
@height3: 16px; // Appears 2 times

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
i {
  -webkit-transform: scale(0.1);
  -webkit-transition: all 0.2s ease;
  color: @color0;
  font-size: 18px;
  opacity: 0;
  transform: scale(0.1);
  transition: all 0.2s ease;
  will-change: transform;
}
h2 {
  pointer-events: none;
}
// body {
// 	background-color: @color1;
// 	height: 100vh;https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212060030103.png
// 	width: 100vw;
// }
.container {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  width: 100%;
  .card {
    background-color: @color0;
    height: @height1;
    margin-bottom: 4px;
    overflow: hidden;
    position: relative;
    width: 500px;
    &:before {
      background-color: @color1;
      border-radius: 16px;
      content: '';
      display: block;
      height: @height3;
      left: 32px;
      position: absolute;
      top: -10px;
      width: @width6;
      z-index: 3;
    }
    &:after {
      background-color: @color1;
      border-radius: 16px;
      bottom: -10px;
      content: '';
      display: block;
      height: @height3;
      left: 32px;
      position: absolute;
      width: @width6;
      z-index: 3;
    }
    ul {
      left: 39px;
      list-style-type: none;
      position: absolute;
      top: 5px;
      z-index: 3;
      li {
        background-color: @color1;
        border-radius: 2px;
        height: 2px;
        margin: 6px 0;
        width: 2px;
      }
    }
    h2 {
      bottom: 0;
      color: @color0;
      font-family: 'Poppins', sans-serif;
      font-size: 60px;
      font-weight: 700;
      position: absolute;
      right: 130px;
      z-index: 3;
    }
    .fa-arrow-right {
      bottom: 25px;
      cursor: pointer;
      font-size: 40px;
      position: absolute;
      right: 75px;
      z-index: 4;
    }
    p {
      -webkit-transition: all 0.2s ease;
      color: #333333;
      font-size: 12px;
      letter-spacing: 1px;
      opacity: 0.7;
      position: absolute;
      right: 70px;
      top: 20px;
      transition: all 0.2s ease;
      writing-mode: vertical-lr;
      z-index: 3;
    }
    .pic {
      // background-size: 100% 100%;
      filter: grayscale(100%);
      height: @height1;
      width: 400px;
      z-index: 4;
    }

    &:hover {
      i {
        -webkit-transform: scale(1);
        opacity: 1;
        transform: scale(1);
      }
      button {
        transform: scale(16.5);
      }
      p {
        color: @color0;
      }
      .pic {
        filter: grayscale(0);
      }
    }
    button {
      background-color: #da4d1d;
      border-radius: 30px;
      border: none;
      bottom: 14px;
      cursor: pointer;
      height: 30px;
      mix-blend-mode: hard-light;
      outline: none;
      position: absolute;
      right: 14px;
      transition: all 0.3s ease;
      width: 30px;
      i {
        font-size: 3rem;
      }
    }
  }
  .card1 {
    .pic {
    }
    button {
      background-color: #2b26c3;
    }
  }
}
.dr {
  bottom: 16px;
  position: absolute;
  right: 16px;
  width: 100px;
}
</style>
