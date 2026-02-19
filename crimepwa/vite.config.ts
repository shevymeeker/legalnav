import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon.svg', 'icons/logo-192.png', 'icons/logo-512.png'],
      manifest: {
        name: 'Wildman Legal Nav',
        short_name: 'Wildman Legal Nav',
        description: 'Wildman Legal Nav – not legal advice.',
        theme_color: '#0b1b2b',
        background_color: '#f6f6f6',
        display: 'standalone',
        icons: [
          { src: 'icons/logo-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/logo-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
        ]
      },
      workbox: {
        navigateFallback: `${base}index.html`,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: { cacheName: 'pages' }
          }
        ]
      }
    })
  ],
  server: { port: 5173 }
});
