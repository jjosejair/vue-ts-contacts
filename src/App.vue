<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create New Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
/* Estilos para a barra de navegação */
nav {
  padding: 1rem;
  background-color: #f8f9fa;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>
