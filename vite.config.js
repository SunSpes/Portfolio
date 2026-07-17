import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://sunspes.fr', // remplace par ton vrai domaine
      dynamicRoutes: [
        '/montage',
        '/motion',
        // '/contact', // à décommenter quand tu l'ajoutes
      ],
    }),
  ],
})