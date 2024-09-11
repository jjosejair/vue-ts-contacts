<template>
  <div class="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Editar Contato</h1>
    <ContactForm :contact="contact" buttonText="Salvar" @submit="updateContact" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../components/contact-form.vue';
import apiClient from '../axios';
import { Contact } from '../models/contact.model';

export default defineComponent({
  name: 'ContactEdit',
  components: { ContactForm },
  data() {
    return {
      contact: new Contact(),
    };
  },
  methods: {
    fetchContact() {
      apiClient.get(`/contacts/${this.$route.params.id}`).then((response) => {
        this.contact = response.data;
      });
    },
    updateContact(contact: Contact) {
      apiClient.put(`/contacts/${this.$route.params.id}`, contact).then(() => {
        this.$router.push('/');
      });
    },
  },
  created() {
    this.fetchContact();
  },
});
</script>