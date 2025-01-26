<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>

  <img :src="route.query.imagePath" alt="painting1" class="painting"/>
  <div>{{ route.query.price }}</div>
</template>

<style scoped>

</style>