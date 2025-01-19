<script setup lang="ts">
import { ref } from "vue";
import PriceChip from "./PriceChip.vue";

const props = defineProps<{ bgPath: string, paintingPath: string, price: string }>();

const gifPath = new URL(props.bgPath, import.meta.url).href;
const gifSrc = ref<string | null>(null);

const painting1Path = new URL(props.paintingPath, import.meta.url).href;

function playGif() {
  gifSrc.value = `${gifPath}?${Date.now()}`;
}

function clearGif() {
  gifSrc.value = null;
}

</script>
<template>
  <div class="hover-element">
    <img v-if="gifSrc" :src="gifSrc" alt="" class="gif-img" />
    <div
        class="painting-wrapper"
        @mouseenter="playGif"
        @mouseleave="clearGif"
    >
      <img :src="painting1Path" alt="painting1" class="painting" />
      <PriceChip :price="price" />
    </div>
  </div>
</template>

<style scoped>
.hover-element {
  position: relative;
  width: 550px;
  height: 550px;
}
.gif-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 550px;
  height: 550px;
}
.painting-wrapper {
  cursor: pointer;
  background-color: #FFE7FE;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 340px;
  width: 100%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 3px 3px 0;
  box-sizing: border-box;
  overflow: hidden;
}

.painting {
  max-width: 340px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  &:hover {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.2);
  }
}
</style>