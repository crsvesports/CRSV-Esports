import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// Importaciones estáticas
let runtimeErrorOverlay: any = () => {};
let cartographer: any = () => {};
let devBanner: any = () => {};

if (process.env.NODE_ENV !== "production") {
  // Solo en desarrollo importamos los plugins de Replit
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    runtimeErrorOverlay = require("@replit/vite-plugin-runtime-error-modal").default;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cartographer = require("@replit/vite-plugin-cartographer").cartographer;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    devBanner = require("@replit/vite-plugin-dev-banner").devBanner;
  } catch (e) {
    console.warn("Replit plugins not found, skipping them.");
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    metaImagesPlugin(),
    ...(process.env.NODE_ENV !== "production"
      ? [runtimeErrorOverlay(), cartographer(), devBanner()]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
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
});
