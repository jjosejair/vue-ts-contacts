<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/create" class="nav-link">Novo Contato</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
/* Estilos para a barra de navegação */
.navbar {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #343a40;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #007bff;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #0056b3;
}

.nav-link.active {
  background-color: #0056b3;
}
</style>
