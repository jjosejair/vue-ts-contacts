<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
    <label class="font-bold text-gray-700">
      Nome:
      <input v-model="contact.name" maxlength="50" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </label>
    <label class="font-bold text-gray-700">
      Telefone:
      <input v-model="contact.phone" maxlength="14" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </label>
    <label class="font-bold text-gray-700">
      Cidade:
      <input v-model="contact.city" maxlength="30" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </label>
    <div class="flex justify-between mt-4">
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{{ buttonText }}</button>
      <router-link to="/" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancelar</router-link>
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