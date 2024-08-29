import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/weather_card',
        name: 'weather card',
        component: () => import('./components/WeatherBlock.vue'),
    },
    {
        path: '/favorites_tab',
        name: 'favorites tab',
        component: () => import('./components/FavoritesBlock.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});



export default router;