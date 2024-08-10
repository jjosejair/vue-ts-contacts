<template>
    <div class="contact-edit">
      <h1>Editar contato</h1>
      <form @submit.prevent="updateContact">
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
          <button type="submit" class="save-button">Save</button>
          <router-link to="/" class="cancel-link">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContactEdit',
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
      async fetchContact() {
        const response = await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`);
        this.contact = await response.json();
      },
      async updateContact() {
        await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.contact),
        });
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
  
  .save-button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    flex: 1;
    margin-right: 10px;
  }
  
  .save-button:hover {
    background-color: #218838;
  }
  
  .cancel-link {
    padding: 10px 15px;
    border-radius: 4px;
    background-color: #dc3545;
    color: white;
    text-decoration: none;
    text-align: center;
    flex: 1;
  }
  
  .cancel-link:hover {
    background-color: #c82333;
  }
  </style>