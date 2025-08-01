import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    root: 'src',

    base: isDev ? '/' : '/goit-js-hw-11/',

    // 1) Аліас “axios” на UMD-бандл у node_modules/axios/dist/axios.js
    resolve: {
      alias: {
        axios: resolve(__dirname, 'node_modules/axios/dist/axios.js'),
      },
    },

    // 2) Препакуємо axios через esbuild, щоб Rollup не чіпав його CJS-джерела
    optimizeDeps: {
      include: ['axios'],
    },

    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: true,

      // 3) Дозволяємо змішані ES/CJS модулі у разі інших залежностей
      commonjsOptions: {
        transformMixedEsModules: true,
      },

      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/index.html'),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: '[name].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  };
});