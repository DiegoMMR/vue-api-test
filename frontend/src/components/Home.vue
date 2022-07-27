<script setup lang="ts">
import { onMounted, ref } from "vue";
import { login } from "../api/auth";
import { useAuthStore } from "../stores/auth";

import Form from "./Form/index.vue";
import Table from "./Table/index.vue";

const isLoogedIn = ref(false);
const authStore = useAuthStore();

onMounted(() => {
  const form = { username: "sarah", password: "connor" };

  login(form)
    .then((response) => {
      authStore.setToken(response.token);
      isLoogedIn.value = true;
    })
    .catch(() => {
      isLoogedIn.value = false;
    });
});
</script>

<template>
  <div v-if="isLoogedIn" class="flex-row">
    <Form />
    <Table />
  </div>
</template>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  height: 100%;
}

@media (max-width: 768px) {
  .flex-row {
    flex-direction: column;
  }
}

.flex-row > * {
  flex: 1;
  box-sizing: border-box;
}
</style>
