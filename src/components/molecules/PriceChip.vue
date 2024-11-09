<script setup lang="ts">

defineProps<{ price: string }>()
</script>

<template>
<div class="price-chip">
  <div class="price-number">{{ price }}€</div>
</div>
</template>

<style scoped>
.price-chip {
  background-color: #B25BAE;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-weight: 600;
  font-size: 1rem;
}
.price-number {
  padding-bottom: 3px;
}
</style>