<script setup lang="ts">
import { travelData } from '@/data/config'

const emits = defineEmits(['getLocation'])

let count = 0
let itemCount = 0
function getLocation(index = 0) {
  const item = travelData[index]
  const { city } = item
  emits('getLocation', city)
}
function showNextItem() {
  const items = document.querySelectorAll('.slider-item')
  itemCount = items.length
  items[count].classList.remove('active')

  if (count < itemCount - 1) {
    count++
  } else {
    count = 0
  }
  getLocation(count)

  items[count].classList.add('active')
  console.log(count)
}

function showPreviousItem() {
  const items = document.querySelectorAll('.slider-item')
  itemCount = items.length
  items[count].classList.remove('active')

  if (count > 0) {
    count--
  } else {
    count = itemCount - 1
  }
  getLocation(count)
  items[count].classList.add('active')
}

function keyPress(e: KeyboardEvent) {
  e = e || window.event

  if (e.keyCode.toString() === '37') {
    showPreviousItem()
  } else if (e.keyCode.toString() === '39') {
    showNextItem()
  }
}
if (process.client) {
  document.addEventListener('keydown', keyPress)
}
onMounted(() => {
  getLocation()
})
</script>

<template>
  <div>
    <nav class="flex-nav">
      <div class="container">
        <div class="grid">
          <div class="column-xs-9 column-md-8">
            <p id="logo">kif<span id="highlight">.</span></p>
          </div>
        </div>
      </div>
    </nav>
    <main class="intro-section">
      <div class="container">
        <div class="grid">
          <div class="column-xs-12">
            <ul class="slider">
              <li
                v-for="(item, index) in travelData"
                :key="item.title"
                class="slider-item"
                :class="index === 0 ? 'active' : ''"
              >
                <div class="grid vertical">
                  <div class="column-xs-12 column-md-2 hide-mobile">
                    <div class="intro">
                      <a :href="item.path">
                        <h1 class="title">
                          <span class="underline">{{ item.title }}</span>
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div class="column-xs-12 column-md-10">
                    <div class="image-holder">
                      <img :src="item.img" />
                    </div>
                    <div class="grid">
                      <div class="column-xs-12 column-md-9">
                        <div v-if="item.type === 'md'" class="intro show-mobile">
                          <a :href="item.path">
                            <h1 class="title">
                              <span class="underline">{{ item.title }}</span>
                            </h1>
                          </a>
                        </div>
                        <div v-else class="intro show-mobile NuxtLink">
                          <NuxtLink :to="item.path">
                            <h1 class="title">
                              <span class="underline">{{ item.title }}</span>
                            </h1>
                          </NuxtLink>
                        </div>
                        <div>{{ item.time }}.{{ item.city }}</div>
                        <p class="description">
                          {{ item.desc }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="grid">
              <div class="column-xs-12">
                <div class="controls">
                  <a class="previous" @click="showPreviousItem">
                    <span class="visually-hidden">Previous</span>
                    <span class="icon arrow-left" aria-hidden="true"></span>
                  </a>
                  <a class="next" @click="showNextItem">
                    <span class="visually-hidden">Next</span>
                    <span class="icon arrow-right" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
@white: #fff;
@black: #232323;
@gray: #8d8d8d;
@red: #e83f43;

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

body {
  font-family: 'Barlow', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  color: @gray;
  background: @white;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

a {
  // color: @gray;
  text-decoration: none;
  &:hover {
    color: @black;
  }
}

nav {
  position: relative;
  z-index: 2;
  padding: 1.25rem 0 1.25rem 0;
  ul {
    line-height: 2.2;
    display: flex;
    justify-content: flex-start;
    li {
      margin: 0.325rem 0;
    }
  }
}

#logo {
  color: @black;
  font-weight: 700;
  font-size: 1.125rem;
}

#highlight {
  color: @red;
}

img {
  width: 100%;
  height: 43vh;
  object-fit: cover;
}

.vertical {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.intro {
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: fadeIn 0.8s 0.4s ease forwards;
  .title {
    display: inline-block;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.1;
    text-decoration: underline;
    // color: @red;
    .underline {
      // color: @black;
    }
  }
}

.description {
  position: relative;
  z-index: 1;
  margin: 1rem 0 1.5rem 0;
  font-size: 1rem;
  opacity: 0;
  animation: fadeIn 0.8s 0.6s ease forwards;
}

.slider-item {
  display: none;
  &.active {
    display: block;
    .hide-mobile {
      display: none;
    }
    .show-mobile {
      display: block;
      margin: 1rem 0;
    }
  }
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  font-size: inherit;
  width: 55px;
  height: 55px;
}

.controls {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0 0.25rem 0;
  height: 55px;
  .previous {
    border: 1px solid @black;
  }
  .next {
    border-top: 1px solid @black;
    border-right: 1px solid @black;
    border-bottom: 1px solid @black;
  }
  .icon {
    position: relative;
    margin: auto;
    width: 20px;
    height: 1px;
    background-color: currentColor;
    &.arrow-left {
      &::before {
        content: '';
        position: absolute;
        left: 1px;
        top: -4px;
        width: 9px;
        height: 9px;
        border-top: solid 1px currentColor;
        border-right: solid 1px currentColor;
        transform: rotate(-135deg);
      }
    }
    &.arrow-right {
      &::before {
        content: '';
        position: absolute;
        right: 1px;
        top: -4px;
        width: 9px;
        height: 9px;
        border-top: solid 1px currentColor;
        border-right: solid 1px currentColor;
        transform: rotate(45deg);
      }
    }
  }
}

.previous,
.next {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-basis: 15%;
  font-size: 2rem;
  &:hover .icon {
    transform: scale(1.5);
  }
  .icon {
    transition: transform 0.1s ease;
  }
}

.active .image-holder::before {
  position: absolute;
  content: '';
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: @white;
  transform-origin: 100% 50%;
  animation: revealRight 1s cubic-bezier(0.23, 1, 0.75, 1) forwards;
}

@keyframes revealRight {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.toggle-nav {
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  line-height: 1.9;
  i {
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 0 0 0 0.5rem;
  }
}

.flex-nav ul {
  position: absolute;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  display: none;
  width: 100%;
  left: 0;
  padding: 1rem;
  background: @white;
  text-align: center;
  &.active {
    display: flex;
  }
}

@media (min-width: 1024) {
  nav ul {
    justify-content: flex-end;
  }

  #logo {
    font-size: 1.25rem;
  }

  .controls {
    padding: 1.75rem 0 1.75rem 0;
  }

  .intro {
    animation: fadeInLeft 0.8s 0.4s ease forwards;
    .title {
      font-size: 4.25rem;
      padding: 2.5rem 2.5rem 3rem 2.5rem;
      background: @white;
    }
  }

  img {
    height: 60vh;
  }

  .description {
    font-size: 1.25rem;
    margin: 1rem 0 0 0;
  }

  .previous,
  .next {
    flex-basis: 8.33%;
  }

  .slider-item.active .hide-mobile {
    display: block;
  }

  .slider-item.active .show-mobile {
    display: none;
  }

  .toggle-nav {
    display: none;
  }

  .flex-nav ul {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 0;
    justify-content: flex-end;
  }

  nav {
    padding: 1.75rem 0 1.75rem 0;
    ul {
      line-height: 2.2;
      display: flex;
      justify-content: flex-start;
      li {
        font-size: 1rem;
        text-transform: uppercase;
        margin: 0 2rem 0 0;
        &:nth-child(3) {
          margin: 0;
        }
      }
    }
  }
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
