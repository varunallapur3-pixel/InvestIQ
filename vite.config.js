import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves from https://<user>.github.io/InvestIQ/
  base: '/InvestIQ/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
