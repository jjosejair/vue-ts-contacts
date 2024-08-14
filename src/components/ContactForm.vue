<template>
    <form @submit.prevent="handleSubmit">
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
        <button type="submit">{{ buttonText }}</button>
        <router-link to="/" class="cancel-button">Cancelar</router-link>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface Contact {
    name: string;
    phone: string;
    city: string;
  }
  
  export default defineComponent({
    name: 'ContactForm',
    props: {
      contact: {
        type: Object as PropType<Contact>,
        required: true,
      },
      buttonText: {
        type: String,
        required: true,
      },
    },
    methods: {
      handleSubmit() {
        this.$emit('submit', this.contact);
      },
    },
  });
  </script>
  
  <style scoped>
  /* Inclua aqui os estilos comuns para o formulário */
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
  