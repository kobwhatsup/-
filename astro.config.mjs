import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { manualChunks, optimizeDeps, ssrConfig } from './src/lib/config/vite';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  site: 'https://kobwhatsup.github.io',
  base: '/',
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        external: ['sqlite3'],
        output: {
          manualChunks
        }
      }
    },
    optimizeDeps,
    ssr: ssrConfig
  }
});