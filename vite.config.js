import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: '/goit-js-hw-11/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
