import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/legalnav/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon.svg'],
      manifest: {
        name: 'KY Criminal Law Navigation',
        short_name: 'KY Law Nav',
        description: 'Offline-first legal navigation prototype (content pack editable).',
        theme_color: '#0b1b2b',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          // Content packs (bundled) are pre-cached by build; runtime caching mostly for future.
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
