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
    <Logo @click="goToHome"/>
<!--    <div class="nav-bar-links">-->
<!--      <div class="nav-bar-link" @click="goToAbout">About</div>-->
<!--      <div class="nav-bar-link">Contact</div>-->
<!--    </div>-->
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
  margin: 40px auto 250px auto;
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