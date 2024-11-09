<script setup lang="ts">

import StorePainting from "./StorePainting.vue";

const paintbrushStrokesGifSrc = "../../assets/paintbrush-strokes.gif";
const painting1Path = "../../assets/default_painting_1.jpg";
const painting2Path = "../../assets/default_painting_2.jpg";
const painting3Path = "../../assets/default_painting_3.jpg";
const dropletsGifSrc = "../../assets/droplets.gif";

</script>

<template>
  <div class="painting-grid">
    <StorePainting :bg-path="paintbrushStrokesGifSrc" :painting-path="painting1Path" price="59.99" />
    <StorePainting :bg-path="dropletsGifSrc" :painting-path="painting2Path" price="39.95" />
    <StorePainting :bg-path="dropletsGifSrc" :painting-path="painting3Path" price="59.99" />
    <StorePainting :bg-path="paintbrushStrokesGifSrc" :painting-path="painting1Path" price="39.95" />
    <StorePainting :bg-path="paintbrushStrokesGifSrc" :painting-path="painting2Path" price="59.99" />
    <StorePainting :bg-path="dropletsGifSrc" :painting-path="painting3Path" price="39.95" />
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
