import { defineConfig } from "vite";
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react";
import Unfonts from 'unplugin-fonts/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Geist",
            src: './src/assets/fonts/geist/*.woff2',
          },
        ],
      },
    }),
  ],
  // base: process.env.VITE_BASE_URL || "/fransbeam-portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
