<template>
  <nav class="flex justify-center p-4 bg-gray-800 text-white shadow-md">
    <router-link to="/" class="mx-2 px-4 py-2 rounded hover:bg-blue-600">Home</router-link>
    <router-link to="/create" class="mx-2 px-4 py-2 rounded hover:bg-blue-600">Novo Contato</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>