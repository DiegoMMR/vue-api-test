<script setup lang="ts">
import { ref } from "vue";
import { create } from "../../api/members";
import { useMembersStore } from "../../stores/members";
import type { IMember } from "../../interfaces/member";
import "./form.scss";

const membersStore = useMembersStore();

const form = ref({
  firstName: "",
  lastName: "",
  address: "",
  ssn: "",
} as IMember);

const errorText = ref("");

const submitForm = () => {
  create(form.value)
    .then((response) => {
      membersStore.addMember(response);
      errorText.value = "";
      resetForm();
    })
    .catch((error) => {
      errorText.value = error.response.data.message;
    });
};

const resetForm = () => {
  form.value = {
    firstName: "",
    lastName: "",
    address: "",
    ssn: "",
  } as IMember;
};
</script>

<template>
  <div class="form">
    <div v-if="errorText !== ''" class="error-alert">
      {{ errorText }}
    </div>

    <div class="form-group">
      <label>First Name</label>
      <input v-model="form.firstName" placeholder="Joe" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input v-model="form.lastName" placeholder="Doe" />
    </div>
    <div class="form-group">
      <label>Address</label>
      <input v-model="form.address" placeholder="Some Place" />
    </div>
    <div class="form-group">
      <label>SSN</label>
      <input v-model="form.ssn" placeholder="000-00-0000" />
    </div>
    <div class="form-group buttons">
      <button @click="resetForm" class="btn-warning">Reset</button>
      <button @click="submitForm" class="btn-success">Save</button>
    </div>
  </div>
</template>
