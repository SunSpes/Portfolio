import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { projects } from './src/projectsData.js'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://sunspes.fr',
      dynamicRoutes: [
        '/montage',
        '/motion-design',
        '/contact',
        ...projects.map((p) => `/motion-design/${p.slug}`),
      ],
    }),
  ],
})