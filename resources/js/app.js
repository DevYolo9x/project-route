import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { createPinia } from 'pinia'

const pinia = createPinia()
import App from './components/App.vue';
import routerBackend from './router/routerBackend'; // Router phía Backend

const routes = [
    ...routerBackend
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)
app.use(router)
app.use(pinia)


router.isReady().then(() => { // Thực hiện router trước đó xong thì mới load đến router tiếp theo.
    app.mount('#app')
})