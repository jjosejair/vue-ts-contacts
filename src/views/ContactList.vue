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
import apiClient from '../axios';  
import { Contact } from '../interfaces/Contact';

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
      try {
        const response = await apiClient.get('/contacts');
        this.contacts = response.data;
      } catch (error) {
        console.error('Erro ao buscar lista de contatos:', error);
      }
    },
    async deleteContact(id: string) {
      try {
        await apiClient.delete(`/contacts/${id}`);
        this.fetchContacts();
      } catch (error) {
        console.error('Erro ao deletar contato:', error);
      }
    },
    editContact(id: string) {
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