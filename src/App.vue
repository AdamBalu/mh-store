<script setup lang="ts">
import NavBar from "./components/molecules/NavBar.vue";
import Footer from "./components/molecules/Footer.vue";
</script>

<template>
  <NavBar/>
  <div class="screen-height">
    <router-view/>
  </div>
  <Footer/>
</template>

<style scoped>
</style>
