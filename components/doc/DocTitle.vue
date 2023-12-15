<script setup lang="ts">
import { formattedDate } from "@/utils";

const props = defineProps(["article"]);
</script>

<template>
  <div>
    <h1 class="rainbow-text">{{ props.article.title }}</h1>
    <div class="op-50 mb-4em">
      <div class="flex items-center">
        <i class="i-icon-park-outline-calendar m-r-0.5em" />
        {{ formattedDate(props.article.date) }}
      </div>
      <div class="flex gap-2 m-t-0.5em">
        <NuxtLink
          v-for="tag in props.article.tags"
          :key="tag"
          :to="`/tags/${tag}`"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin-right: auto;
  margin-left: auto;
  font-family: "Work Sans", sans-serif;
  font-weight: 800;
  line-height: 0.9em;
}

/* Style the rainbow text element. */
.rainbow-text {
  cursor: pointer;

  /* Create a conic gradient. */

  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #ca4246;
  background: conic-gradient(
    #ca4246 16.666%,
    #e16541 16.666%,
    #e16541 33.333%,
    #f18f43 33.333%,
    #f18f43 50%,
    #8b9862 50%,
    #8b9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #a7489b 83.333%
  );
  background-color: #ca4246;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */

  /* This will show the gradient as a text color rather than element bg. */
  background-clip: text;

  /* Set thee background size and repeat properties. */
  background-size: 57%;

  /* Animate the text when loading the element. */

  /* This animates it on page load and when hovering out. */
  animation: rainbow-text-animation-rev 0.5s ease forwards;
  -webkit-text-fill-color: transparent;
}

/* Add animation on hover. */
.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}

/* Move the background and make it larger. */

/* Animation shown when hovering over the text. */
@keyframes rainbow-text-animation {
  0% {
    background-position: 0 0;
    background-size: 57%;
  }

  20% {
    background-position: 0 1em;
    background-size: 57%;
  }

  100% {
    background-position: -9em 1em;
    background-size: 300%;
  }
}

/* Move the background and make it smaller. */

/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-animation-rev {
  0% {
    background-position: -9em 1em;
    background-size: 300%;
  }

  20% {
    background-position: 0 1em;
    background-size: 57%;
  }

  100% {
    background-position: 0 0;
    background-size: 57%;
  }
}
</style>
