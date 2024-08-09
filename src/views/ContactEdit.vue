<template>
    <div>
      <h1>Edit Contact</h1>
      <form @submit.prevent="updateContact">
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
        <button type="submit">Save</button>
        <router-link to="/">Cancel</router-link>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContactEdit',
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
      async fetchContact() {
        const response = await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`);
        this.contact = await response.json();
      },
      async updateContact() {
        await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.contact),
        });
        this.$router.push('/');
      },
    },
    created() {
      this.fetchContact();
    },
  });
  </script>