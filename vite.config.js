import { defineConfig } from 'vite';

export default defineConfig({
  // Netlify serves from root /
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
