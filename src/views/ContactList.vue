<template>
  <div class="contact-list">
    <h1>Lista de Contatos</h1>
    <ul>
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @edit="editContact"
        @delete="deleteContact"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactItem from '../components/ContactItem.vue';

interface Contact {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'ContactList',
  components: {
    ContactItem,
  },
  data() {
    return {
      contacts: [] as Contact[],
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
</style>