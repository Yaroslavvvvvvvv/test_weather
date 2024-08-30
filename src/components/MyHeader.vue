<script setup>
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/images/logo.svg" class="logo" alt="Vite logo"/>
    </a>
  </div>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <router-link to="/" class="navbar-link" aria-current="page">Главная</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/favorites" class="navbar-link">Избранное</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.header {
  background-color: #333;
  color: #fff;
  padding: 1em;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-item {
  margin: 0 1em;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 300ms;
}

.navbar-link:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.navbar-link[aria-current="page"] {
  font-weight: bold;
}
</style>
