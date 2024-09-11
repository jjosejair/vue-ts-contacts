<template>
  <div class="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Criar Novo Contato</h1>
    <ContactForm :contact="contact" buttonText="Criar" @submit="createContact" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../components/contact-form.vue';
import { contactService } from '../services/contact-service';
import { Contact } from '../models/contact.model';

export default defineComponent({
  name: 'contact-create',
  components: { ContactForm },
  data() {
    return {
      contact: new Contact(),
    };
  },
  methods: {
    createContact(contact: Contact) {
      contactService.createContact(contact).then(() => {
        this.$router.push('/');
      });
    },
  },
});
</script>