import { defineConfig } from 'vite';

export default defineConfig({
    base: "/portfolio/",

    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: '/index.html',
                about: '/about/indexa.html'
            }
        }
    }
});