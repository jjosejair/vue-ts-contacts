<template>
    <li class="contact-item">
      <router-link :to="`/contact/${contact.id}`" class="contact-link">{{ contact.name }}</router-link>
      <div class="actions">
        <button @click="$emit('edit', contact.id)" class="edit-button">Editar</button>
        <button @click="$emit('delete', contact.id)" class="delete-button">Deletar</button>
      </div>
    </li>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface Contact {
    id: number;
    name: string;
  }
  
  export default defineComponent({
    name: 'ContactItem',
    props: {
      contact: {
        type: Object as PropType<Contact>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  /* Inclua aqui os estilos específicos para um item de contato */
  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .contact-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  
  .contact-link:hover {
    text-decoration: underline;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  .edit-button {
    background-color: #28a745;
    color: white;
  }
  
  .edit-button:hover {
    background-color: #218838;
  }
  
  .delete-button {
    background-color: #dc3545;
    color: white;
  }
  
  .delete-button:hover {
    background-color: #c82333;
  }
  </style>
  