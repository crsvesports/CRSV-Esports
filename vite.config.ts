import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

const isReplit = !!process.env.REPL_ID;

let runtimeErrorOverlay: any = () => {};
let cartographer: any = () => {};
let devBanner: any = () => {};

if (isReplit) {
  try {
    runtimeErrorOverlay =
      require("@replit/vite-plugin-runtime-error-modal").default;
    cartographer = require("@replit/vite-plugin-cartographer").cartographer;
    devBanner = require("@replit/vite-plugin-dev-banner").devBanner;
  } catch {
    console.warn("Replit plugins not found, skipping them.");
  }
}

export default defineConfig({
  root: path.resolve(__dirname, "client"),
  plugins: [
    react(),
    tailwindcss(),
    metaImagesPlugin(),
    ...(isReplit ? [runtimeErrorOverlay(), cartographer(), devBanner()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
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
