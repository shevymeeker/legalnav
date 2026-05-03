import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

// GitHub Pages needs /legalnav/ as the base; Netlify deploys at /.
// Set VITE_BASE_PATH in CI to control which deployment target is built.
const base = process.env.VITE_BASE_PATH ?? '/';

export default defineConfig({
  base,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon.svg', 'icons/logo-192.png', 'icons/logo-512.png'],
      manifest: {
        name: 'Wildman Legal Nav',
        short_name: 'Wildman Legal Nav',
        description: 'Wildman Legal Nav – not legal advice.',
        theme_color: '#234d35',
        background_color: '#f4efe4',
        display: 'standalone',
        icons: [
          { src: 'icons/logo-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/logo-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
        ]
      },
      workbox: {
        navigateFallback: `${base}index.html`,
        navigateFallbackDenylist: [/\.pdf($|\?)/i],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: { cacheName: 'pages' }
          },
          {
            urlPattern: ({ url }) => url.pathname.includes('/content/'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'app-content',
              networkTimeoutSeconds: 4,
              expiration: { maxEntries: 150, maxAgeSeconds: 30 * 24 * 60 * 60 }
            }
          }
        ]
      }
    })
  ],
  server: { port: 5173 }
});
