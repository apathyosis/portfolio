import { defineConfig } from 'vite';

export default defineConfig({
    base: "/portfolio/",
    root: "src",
    build: {
        outDir: "../docs",
        rollupOptions: {
            input: {
                main: 'src/index.html',
                cert: 'src/demos/certifications.html',
                demos1A: 'src/demos/color-change.html',
                demos2A: 'src/demos/paragraph.html',
                demos3A: 'src/demos/palindrome.html',
                demos4A: 'src/demos/roman.html',
                demos5A: 'src/demos/tele-num-val.html',
            }
        }
    }
});