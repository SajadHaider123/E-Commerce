<template>
  <header>
    <nav class="navbar">
      <div class="logo">Sajad Store</div>
      <div class="links">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
    </nav>
  </header>

  <HomeView />
</template>

<script setup>
// Pehle ye tha: './views/HomeView.vue'
// Isay aise kar dein (agar file views ke folder mein hai):
import HomeView from './views/HomeView.vue'

// Ya agar file direct src folder mein hai to:
// import HomeView from './HomeView.vue'
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}
.logo { font-size: 1.5rem; font-weight: bold; }
.links a { color: white; margin-left: 20px; text-decoration: none; }
</style>