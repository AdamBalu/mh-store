<script setup lang="ts">
import {ref} from "vue";

const logoGifPath = "../../assets/logo.gif";
const logoPath = "../../assets/logo.svg";

const gifPath = new URL(logoGifPath, import.meta.url).href
const gifSrc = ref<string | null>(null);

const logoSrc = new URL(logoPath, import.meta.url).href

function showGif() {
  gifSrc.value = `${gifPath}?${new Date().getTime()}`
}

function clearGif() {
  gifSrc.value = null;
}

</script>
<template>

  <div
      class="hover-element"
      @mouseenter="showGif"
      @mouseleave="clearGif"
  >
    <img v-if="gifSrc" :src="gifSrc" alt="gif" class="gif-img" />
    <div class="painting-wrapper">
      <img :src="logoSrc" alt="painting1" class="painting" />
    </div>
  </div>
</template>

<style scoped>
.hover-element {
  cursor: pointer;
  position: relative;
  margin-top: 30px;
}
.gif-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  z-index: 1;
}
.painting-wrapper {
  position: absolute;
  width: 100px;
}

.painting {
  max-width: 340px;
  width: 100%;
  height: auto;
  &:hover {
    transition: transform 0.4s ease-in-out;
  }
}

</style>
