<script setup lang="ts">
import { vInfiniteScroll } from '@vueuse/components';
import {ref} from "vue";

import StorePainting from "./StorePainting.vue";
import Logo from "./Logo.vue";

const paintbrushStrokesGifSrc = "../../assets/brushstrokes_final.gif";
const painting1Path = "../../assets/default_painting_1.jpg";
const painting2Path = "../../assets/default_painting_2.jpg";
const painting3Path = "../../assets/default_painting_3.jpg";
const dropletsGifSrc = "../../assets/bruh3.gif";

const imagePaths = ref([painting1Path, painting2Path, painting3Path, painting1Path, painting2Path, painting3Path])
const gifPaths = ref([paintbrushStrokesGifSrc, dropletsGifSrc, dropletsGifSrc, paintbrushStrokesGifSrc, paintbrushStrokesGifSrc, dropletsGifSrc])

function onLoadMore() {
  // imagePaths.value.push(...Array.from({ length: 5 }, (_, i) => i % 3 === 0 ? painting1Path : i % 3 === 1 ? painting2Path : painting3Path))
  // gifPaths.value.push(...Array.from({ length: 5 }, (_, i) => i % 3 === 0 ? paintbrushStrokesGifSrc : i % 3 === 1 ? dropletsGifSrc : dropletsGifSrc))
}

</script>

<template>
  <Logo />
    <div v-infinite-scroll="onLoadMore" class="painting-grid">
      <div v-for="item in imagePaths" :key="item">
        <StorePainting :bg-path="gifPaths[imagePaths.indexOf(item)]" :painting-path="item" price="39.95" />
      </div>
<!--    <StorePainting :bg-path="paintbrushStrokesGifSrc" :painting-path="painting1Path" price="59.99" />-->
<!--    <StorePainting :bg-path="dropletsGifSrc" :painting-path="painting2Path" price="39.95" />-->
<!--    <StorePainting :bg-path="dropletsGifSrc" :painting-path="painting3Path" price="59.99" />-->
<!--    <StorePainting :bg-path="paintbrushStrokesGifSrc" :painting-path="painting1Path" price="39.95" />-->
<!--    <StorePainting :bg-path="paintbrushStrokesGifSrc" :painting-path="painting2Path" price="59.99" />-->
<!--    <StorePainting :bg-path="dropletsGifSrc" :painting-path="painting3Path" price="39.95" />-->
  </div>
</template>

<style scoped>
.painting-grid {
  margin-top: 250px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .painting-grid {
    grid-template-columns: 1fr;
  }
}
</style>
