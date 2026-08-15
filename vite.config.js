import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'manifest.json'],
      manifest: {
        name: 'CPENT Reference',
        short_name: 'CPENT',
        description: 'Interactive CPENT exam reference',
        theme_color: '#0B0F19',
        background_color: '#0B0F19',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  base: '/cpent-reference/',
  server: {
    port: 3000,
    open: true
  }
})
