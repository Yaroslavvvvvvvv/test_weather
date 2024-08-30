import { createApp } from 'vue'
import './style.css'
import router from './routes';
import { createI18n } from 'vue-i18n';
import { languages } from "./i18n/index.js";
import { defaultLocale } from "./i18n/index.js";
import App from './App.vue'


const messages = Object.assign(languages);


const localeStorageLang = localStorage.getItem('lang')
const i18n = createI18n({
    legacy: false,
    locale: localeStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount('#app');
