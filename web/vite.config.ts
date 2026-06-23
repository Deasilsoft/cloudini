import { siteIndexPlugin } from "@site-index/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, "");
  const siteUrl = process.env.VITE_SITE_URL ?? env.VITE_SITE_URL;

  if (!siteUrl) {
    throw new Error("Missing env variable `VITE_SITE_URL`.");
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...siteIndexPlugin({
        siteUrl,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
