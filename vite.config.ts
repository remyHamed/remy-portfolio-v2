import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/remy-portefolio-v2/",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
