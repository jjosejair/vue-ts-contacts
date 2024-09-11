<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from './components/nav-bar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>