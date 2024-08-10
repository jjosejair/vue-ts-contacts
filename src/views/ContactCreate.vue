<template>
  <div class="contact-create">
    <h1>Criar Novo Contato</h1>
    <form @submit.prevent="createContact">
      <label>
        Nome:
        <input v-model="contact.name" required />
      </label>
      <label>
        Telefone:
        <input v-model="contact.phone" required />
      </label>
      <label>
        Cidade:
        <input v-model="contact.city" required />
      </label>
      <div class="buttons">
        <button type="submit">Criar</button>
        <router-link to="/" class="cancel-button">Cancela</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactCreate',
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        city: '',
      },
    };
  },
  methods: {
    async createContact() {
      await fetch('http://localhost:3000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.contact),
      });
      this.$router.push('/');
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

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

label {
  display: block;
  margin-bottom: 10px;
  color: #555;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.cancel-button {
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #6c757d;
  color: white;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

.cancel-button:hover {
  background-color: #5a6268;
}
</style>