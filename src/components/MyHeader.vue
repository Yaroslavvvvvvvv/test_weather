<script setup>

function reloadPage() {
  window.location.reload();
}
</script>

<template>
  <header class="header">
    <div>
      <a href="#" @click.prevent="reloadPage">
        <img src="/images/logo.svg" class="logo" alt="Vite logo"/>
      </a>
    </div>
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <router-link to="/" class="navbar-link">Головна</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/favorites" class="navbar-link">Вибране</router-link>
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
  border-radius: 0.5em;
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
  color: #535bf2;
}
</style>
