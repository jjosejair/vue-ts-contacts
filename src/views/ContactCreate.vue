<template>
  <div class="contact-create">
    <h1>Criar Novo Contato</h1>
    <ContactForm
      :contact="contact"
      buttonText="Criar"
      @submit="createContact"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../components/ContactForm.vue';
import apiClient from '../axios';  // Importa a configuração do axios

interface Contact {
  name: string;
  phone: string;
  city: string;
}

export default defineComponent({
  name: 'ContactCreate',
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        city: '',
      } as Contact,
    };
  },
  methods: {
    async createContact(contact: Contact) {
      try {
        await apiClient.post('/contacts', contact);
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao criar contato:', error);
      }
    },
  },
});
</script>

<style scoped>
.contact-create {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>