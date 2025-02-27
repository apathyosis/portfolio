import { defineConfig } from 'vite';

export default defineConfig({
    base: "/portfolio/",
    root: "src",
    build: {
        outDir: "../docs",
        rollupOptions: {
            input: {
                main: 'src/index.html',
                demos1: 'src/demos/color-change.html',
                demos2: 'src/demos/paragraph.html',
                demos3: 'src/demos/palindrome.html',
                demos4: 'src/demos/roman.html'
            }
        }
    }
});