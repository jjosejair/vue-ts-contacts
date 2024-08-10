<template>
  <div class="contact-list">
    <h1>Lista de Contatos</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="contact-item">
        <router-link :to="`/contact/${contact.id}`" class="contact-link">{{ contact.name }}</router-link>
        <div class="actions">
          <button @click="editContact(contact.id)" class="edit-button">Edit</button>
          <button @click="deleteContact(contact.id)" class="delete-button">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Contact {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'ContactList',
  data() {
    return {
      contacts: [] as Contact[], // Define explicitamente o tipo do array
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

<style scoped>
.contact-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contact-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.contact-link:hover {
  text-decoration: underline;
}

.actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #28a745;
  color: white;
}

.edit-button:hover {
  background-color: #218838;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>