<script setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

function reloadPage() {
  window.location.reload();
}

const switchLanguage = (event) => {
  const selectedLocale = event.target.value;
  locale.value = selectedLocale;
  localStorage.setItem('lang', selectedLocale);
  window.location.reload();
};
</script>

<template>
  <header class="header">
    <div>
      <div>
        <select id="language-select"
                class=""
                @change="switchLanguage">
          <option value="en" :selected="locale === 'en'">English</option>
          <option value="ua" :selected="locale === 'ua'">Україньска</option>
        </select>
      </div>
      <a href="#" @click.prevent="reloadPage">
        <img src="/images/logo.svg" class="logo" alt="Vite logo"/>
      </a>
    </div>
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <router-link to="/" class="navbar-link">{{ $t('home') }}</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/favorites" class="navbar-link">{{ $t('favorites') }}</router-link>
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
