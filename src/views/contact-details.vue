<template>
  <div class="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Detalhes</h1>
    <div v-if="contact" class="mb-4">
      <p><strong>Nome:</strong> {{ contact.name }}</p>
      <p><strong>Telefone:</strong> {{ contact.phone }}</p>
      <p><strong>Cidade:</strong> {{ contact.city }}</p>
    </div>
    <router-link to="/" class="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Voltar à
      Lista</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../axios';
import { Contact } from '../models/contact.model';

export default defineComponent({
  name: 'Contact-details',
  data() {
    return {
      contact: null as Contact | null,
    };
  },
  methods: {
    fetchContact() {
      apiClient.get(`/contacts/${this.$route.params.id}`).then((response) => {
        this.contact = response.data;
      });
    },
  },
  created() {
    this.fetchContact();
  },
});
</script>