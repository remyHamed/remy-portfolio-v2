import react from "@vitejs/plugin-react";
<<<<<<< Updated upstream
=======
import { defineConfig } from "vite";
>>>>>>> Stashed changes
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/remy-portefolio-v2",
<<<<<<< Updated upstream
=======
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
>>>>>>> Stashed changes
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
