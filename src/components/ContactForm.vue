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
import { Contact } from '../models/Contact'; 

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
      this.$emit('submit', this.contact as Contact);
    },
  },
});


  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  label {
    font-weight: bold;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .cancel-button {
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #6c757d;
    color: white;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .cancel-button:hover {
    background-color: #5a6268;
  }
  </style>