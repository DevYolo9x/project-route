import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import FrontendLayout from '../frontend/FrontendLayout.vue';
import routerFrontend from '../../router/routerFrontend'; // Mảng routes

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../../../css/app.css';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

const routes = [
    ...routerFrontend
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(FrontendLayout)
app.use(router)

router.isReady().then(() => {
    app.mount('#app')
})
