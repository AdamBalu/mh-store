<script setup lang="ts">
import {useRouter} from "vue-router";
import Logo from "./Logo.vue";
const router = useRouter()

function goToHome() {
  router.push('/')
}

function goToAbout() {
  router.push('/about')
}

</script>

<template>
<div class="nav-bar">
  <div class="nav-bar-wrapper">
    <Logo @click="goToHome" />
    <div class="nav-bar-links">
      <div class="nav-bar-link" @click="goToAbout">About</div>
      <div class="nav-bar-link">Contact</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.nav-bar {
  width: 90dvw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 40px;
}
.nav-bar-wrapper {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-bar-links {
  display: flex;
  gap: 20px;
}
.nav-bar-link {
  font-size: 1.2rem;
  font-weight: 600;
  color: #3796D1;
  cursor: pointer;
}
.nav-bar-link:hover {
  color: #D4A7D2;
}
</style>