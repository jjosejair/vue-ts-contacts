<template>
  <li class="contact-item flex justify-between items-center p-4 bg-white rounded-lg shadow">
    <router-link :to="`/contact/${contact.id}`" class="text-blue-500 hover:underline">{{ contact.name }}</router-link>
    <div class="actions space-x-2">
      <button @click="$emit('edit', contact.id)" class="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">Editar</button>
      <button @click="$emit('delete', contact.id)" class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Deletar</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Contact } from '../models/Contact'; 

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

