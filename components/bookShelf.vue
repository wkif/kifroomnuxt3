<script setup lang="ts">
import { bookshelfList } from '@/data/config'

function goto(url: string | undefined) {
  if (url) {
    window.open(url)
  }
}
</script>

<template v-if="bookshelfList.length">
  <div v-for="(ul, index) in bookshelfList" :key="index" class="bookshelf">
    <div class="book-grid">
      <ul>
        <li v-for="(book, index) in ul" :key="index">
          <div class="p-10px">{{ book.name }}</div>
          <img :src="book.image" alt="" srcset="" @click="goto(book.url)" />
        </li>
      </ul>
    </div>
    <div class="shelf-shadows"></div>
    <div class="shelf"></div>
  </div>
</template>

<style lang="less" scoped>
.bookshelf {
  width: 900px;
  margin: 5rem auto;
  text-align: center;
  position: relative;
}

.book-grid {
  z-index: 2;
  position: relative;
  transform: translateY(-15px);
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    justify-self: center;
  }

  img {
    display: block;
    box-shadow: 0px -5px 20px 2px rgba(black, 0.3);
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
}

.shelf-shadows {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  border-radius: 2px;
  z-index: 1;
  box-shadow: 0px -5px 3px 0px rgba(#aaa, 0.2), 0px 15px 20px 0px rgba(#aaa, 0.7),
    0px 5px 5px 0px rgba(#777, 0.3);
}

.shelf {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: #f9f9f9;
  border-radius: 2px;
  z-index: 3;
}
</style>
