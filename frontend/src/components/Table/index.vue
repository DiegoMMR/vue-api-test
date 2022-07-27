<script setup lang="ts">
import "./table.scss";

import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { list } from "../../api/members";
import { useMembersStore } from "../../stores/members";

const membersStore = useMembersStore();
const { members } = storeToRefs(membersStore);
let timer;

const updateTable = () => {
  list().then((response) => {
    membersStore.setMembers(response);
  });
};

onMounted(() => {
  updateTable();

  // Update the table every 2 minutes
  timer = setInterval(() => {
    updateTable();
  }, 120000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Address</th>
          <th>SSN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in members" :key="item.ssn">
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.ssn }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
