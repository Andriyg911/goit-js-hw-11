import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // якщо все ж хочете явно не збирати simplelightbox (рідко потрібно):
    // rollupOptions: {
    //   external: ['simplelightbox']
    // }
  }
});