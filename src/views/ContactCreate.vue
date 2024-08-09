<template>
  <div>
    <h1>Create New Contact</h1>
    <form @submit.prevent="createContact">
      <label>
        Name:
        <input v-model="contact.name" required />
      </label>
      <label>
        Phone:
        <input v-model="contact.phone" required />
      </label>
      <label>
        City:
        <input v-model="contact.city" required />
      </label>
      <button type="submit">Create</button>
      <router-link to="/">Cancel</router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactCreate',
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        city: '',
      },
    };
  },
  methods: {
    async createContact() {
      await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.contact),
      });
      this.$router.push('/');
    },
  },
});
</script>