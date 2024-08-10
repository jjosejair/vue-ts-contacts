<template>
  <div class="contact-details">
    <h1>Detalhes</h1>
    <div v-if="contact" class="contact-info">
      <p><strong>Nome:</strong> {{ contact.name }}</p>
      <p><strong>Telefone:</strong> {{ contact.phone }}</p>
      <p><strong>Cidade:</strong> {{ contact.city }}</p>
    </div>
    <router-link to="/" class="back-link">Voltar à Lista</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Contact {
  id: number;
  name: string;
  phone: string;
  city: string;
}

export default defineComponent({
  name: 'ContactDetails',
  data() {
    return {
      contact: null as Contact | null,
    };
  },
  methods: {
    async fetchContact() {
      const response = await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`);
      this.contact = await response.json() as Contact;
    },
  },
  created() {
    this.fetchContact();
  },
});
</script>

<style scoped>
.contact-details {
  max-width: 400px;
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

.contact-info {
  margin-bottom: 20px;
}

.contact-info p {
  margin: 10px 0;
  color: #555;
  font-size: 16px;
}

.back-link {
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.back-link:hover {
  background-color: #0056b3;
}
</style>