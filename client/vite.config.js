import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    envDir: '../',
    build: {
      outDir: '../dist',
      emptyOutDir: '../dist'
    }
  };
});
