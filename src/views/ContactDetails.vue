<template>
    <div>
      <h1>Contact Details</h1>
      <div v-if="contact">
        <p>Name: {{ contact.name }}</p>
        <p>Phone: {{ contact.phone }}</p>
        <p>City: {{ contact.city }}</p>
      </div>
      <router-link to="/">Voltar a List</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContactDetails',
    data() {
      return {
        contact: null,
      };
    },
    methods: {
      async fetchContact() {
        const response = await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`);
        this.contact = await response.json();
      },
    },
    created() {
      this.fetchContact();
    },
  });
  </script>