import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    define: {
      [isDev ? 'global' : '_global']: {},
    },
    root: 'src',
    base: isDev ? '' : '/goit-js-hw-11/',
    server: {
      fs: { allow: ['..'] }
    },
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/index.html'),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
          },
          entryFileNames: '[name].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      }
    },
    plugins: []
  };
});
