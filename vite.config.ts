import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/remy-portefolio-v2/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
