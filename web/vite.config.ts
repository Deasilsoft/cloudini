import { siteIndexPlugin } from "@site-index/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const DEFAULT_SITE_URL = "https://cloudini.org";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...siteIndexPlugin({
      siteUrl: process.env.VITE_SITE_URL ?? DEFAULT_SITE_URL,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
