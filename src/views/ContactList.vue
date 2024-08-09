<template>
    <div>
      <h1>Contact List</h1>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`">{{ contact.name }}</router-link>
          <button @click="editContact(contact.id)">Edit</button>
          <button @click="deleteContact(contact.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContactList',
    data() {
      return {
        contacts: [],
      };
    },
    methods: {
      async fetchContacts() {
        const response = await fetch('http://localhost:3000/contacts');
        this.contacts = await response.json();
      },
      async deleteContact(id: number) {
        await fetch(`http://localhost:3000/contacts/${id}`, {
          method: 'DELETE',
        });
        this.fetchContacts();
      },
      editContact(id: number) {
        this.$router.push(`/edit/${id}`);
      },
    },
    created() {
      this.fetchContacts();
    },
  });
  </script>