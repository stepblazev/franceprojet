import {
    defineConfig
} from 'vite';

import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import {
    fileURLToPath,
    URL
} from "node:url";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/admin/app.scss',
                'resources/admin/app.js',
            ],
            refresh: true,
        }),
    ],

    preview: {
        port: 8080
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("resources/admin",
                import.meta.url)),
        },
    },
});
