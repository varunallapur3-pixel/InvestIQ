import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves from https://<user>.github.io/<repo-name>/
  // This must match your repository name exactly
  base: '/InvestIQ/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
