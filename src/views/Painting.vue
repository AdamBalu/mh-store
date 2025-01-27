<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="site-wrapper">
    <div class="painting-purchase-section">
      <div class="painting-wrapper">
        <img src="/src/assets/image_detail_bg.png" alt="painting background" class="painting-background"/>
        <img :src="route.query.imagePath?.toString()" alt="painting1" class="painting"
             :style="{ backgroundImage: `/src/assets/image_detail_bg.png` }"/>
        <!--        <PriceChip :price="route.query.price"/>-->
        <span class="painting-name">{{ route.query.name }}</span>
      </div>
      <button class="buy-button">
        <span class="buy-button-content">Chcem kúpiť <span class="material-icons">
shopping_cart
</span></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.site-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}

.painting-purchase-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
}

.buy-button {
  margin-bottom: 130px;
  width: 450px;
  height: 90px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.buy-button-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.painting-wrapper {
  position: relative;
  width: 550px;
  height: 550px;
}

.painting {
  background-image: url("/src/assets/image_detail_bg.png");
  background-size: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  float: left;
  max-width: 350px;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.painting-background {
  width: 550px;
  height: 550px;
  position: absolute;
  top: 0;
  left: 0;
}

.painting-name {
  font-family: Jokerman, serif;
  background-color: #F6F6F6;
  color: #F99D43;
  padding: 5px;
  border-radius: 15px;
  position: absolute;
  top: 5%;
  left: 5%;
  font-weight: bold;
  font-size: 3rem;
  transform: rotate(-20deg);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
</style>