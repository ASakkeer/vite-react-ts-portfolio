/**
 * Vite config. Includes PWA plugin for asset caching (service worker).
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff2,woff}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts",
                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
        manifest: {
          name: "Sakkeer – React Native & React Developer",
          short_name: "Sakkeer",
          description: "Portfolio and services of Sakkeer, React Native and React developer.",
          theme_color: "#161616",
          background_color: "#161616",
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
