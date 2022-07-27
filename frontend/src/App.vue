<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/template/Header.vue";
import Footer from "./components/template/Footer.vue";
</script>

<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>
