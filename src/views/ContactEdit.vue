<template>
  <div class="contact-edit">
    <h1>Editar contato</h1>
    <ContactForm
      :contact="contact"
      buttonText="Salvar"
      @submit="updateContact"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../components/ContactForm.vue';
import apiClient from '../axios'; // Importar o axios configurado

interface Contact {
  name: string;
  phone: string;
  city: string;
}

export default defineComponent({
  name: 'ContactEdit',
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
    async fetchContact() {
      const response = await apiClient.get(`/contacts/${this.$route.params.id}`); // Usar axios
      this.contact = response.data;
    },
    async updateContact(contact: Contact) {
      await apiClient.put(`/contacts/${this.$route.params.id}`, contact); // Usar axios
      this.$router.push('/');
    },
  },
  created() {
    this.fetchContact();
  },
});
</script>

<style scoped>
.contact-edit {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>