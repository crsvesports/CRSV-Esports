import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// Construimos el array de plugins sin usar await directamente
const plugins = [
  react(),
  runtimeErrorOverlay(),
  tailwindcss(),
  metaImagesPlugin(),
];

// Solo añadimos los plugins de Replit en desarrollo local
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
  try {
    // Usamos require en vez de await para producción
    const cartographer = require("@replit/vite-plugin-cartographer").cartographer;
    const devBanner = require("@replit/vite-plugin-dev-banner").devBanner;
    plugins.push(cartographer(), devBanner());
  } catch {
    // No hacer nada si no está disponible
  }
}

// Exportamos la config para Vite
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  base: "./", // importante para que las imágenes y assets funcionen en Render
});
