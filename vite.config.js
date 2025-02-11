import { defineConfig } from 'vite';

export default defineConfig({
    base: "/portfolio/",
    build: {
        rollupOptions: {
            input: {
                main: '/index.html',
                about: '/about/indexa.html'
            }
        }
    }
});