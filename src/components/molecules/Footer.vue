<script setup lang="ts">

</script>

<template>
  <div class="footer"><p class="contact-me-label">Kontaktujte ma</p>
    <div class="contact-icons">
  <span class="material-icons">
email
</span>
      <span class="material-icons">
email
</span>
      <span class="material-icons">
email
</span>
      <span class="material-icons">
email
</span>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 15rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  background-image: url("../../assets/footer_bg.svg");
  height: 300px;
}

.contact-icons {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .material-icons {
    font-size: 3rem;
    color: #B25BAE;
  }
}

.contact-me-label {
  font-family: Jokerman, serif;
  font-size: 2rem;
}

.footer p {
  color: #B25BAE;
  font-weight: bold;
  text-transform: uppercase;
}
</style>