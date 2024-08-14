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
      await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      this.$router.push('/');
    },
  },
});
</script>

<style scoped>
.contact-create {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  font-weight: bold;
}
</style>