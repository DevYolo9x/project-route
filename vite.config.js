import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // Frontend
                'resources/js/components/frontend/frontend.js',
                'resources/css/frontend.css',

                // Backend
                'resources/js/components/backend/backend.js',
                'resources/css/backend.css',
            ],
            refresh: true,
        }),
        vue(),
    ],
});
