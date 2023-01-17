import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@views',
        replacement: path.join(__dirname, './src/views'),
      },
      {
        find: '@utils',
        replacement: path.join(__dirname, './src/utils'),
      },
      {
        find: '@components',
        replacement: path.join(__dirname, './src/components'),
      },
      {
        find: '@types',
        replacement: path.join(__dirname, './src/types'),
      },
      {
        find: '@context',
        replacement: path.join(__dirname, './src/context'),
      },
    ],
  },
  envDir: '../',
});
