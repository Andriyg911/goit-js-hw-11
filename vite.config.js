import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      simplelightbox: path.resolve(__dirname, 'node_modules/simplelightbox'),
    },
  },
  define: {
    global: 'window',
  },
  server: {
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});