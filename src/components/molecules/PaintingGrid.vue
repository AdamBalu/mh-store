<script setup lang="ts">
import {useRouter} from "vue-router";
import StorePainting from "./StorePainting.vue";
import paintbrushStrokesGifSrc from "@/assets/brushstrokes.gif";
import painting1Path from "@/assets/default_painting_1.jpg";
import painting2Path from "@/assets/default_painting_2.jpg";
import painting3Path from "@/assets/default_painting_3.jpg";
import dropletsGifSrc from "@/assets/droplets.gif";

const router = useRouter();

const paintings = [
  {id: '1', paintingPath: painting1Path, gifPath: paintbrushStrokesGifSrc, price: '39.90', name: 'Krowka'},
  {id: '2', paintingPath: painting2Path, gifPath: dropletsGifSrc, price: '49', name: 'Bobrownik'},
  {id: '3', paintingPath: painting3Path, gifPath: dropletsGifSrc, price: '10.55', name: 'Rysunek'},
  {id: '4', paintingPath: painting1Path, gifPath: paintbrushStrokesGifSrc, price: '5.20', name: 'Obraz'},
  {id: '5', paintingPath: painting2Path, gifPath: paintbrushStrokesGifSrc, price: '14', name: 'Kolorowe'},
  {id: '6', paintingPath: painting3Path, gifPath: dropletsGifSrc, price: '22.01', name: 'Krest'},
];

function goToProductDetail(painting: { id: string, name: string, paintingPath: string, price: string }) {
  router.push({
    name: 'PaintingDetail',
    params: {id: painting.id},
    query: {name: painting.name, imagePath: painting.paintingPath, price: painting.price}
  });
}
</script>

<template>
  <div class="painting-grid">
    <div v-for="painting in paintings" :key="painting.id">
      <StorePainting @click="goToProductDetail(painting)" :bg-path="painting.gifPath"
                     :painting-path="painting.paintingPath" :price="painting.price"/>
    </div>
  </div>
</template>

<style scoped>
.painting-grid {
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
