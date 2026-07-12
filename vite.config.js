import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import { fileURLToPath } from 'node:url'

const esToolkitCompatHelpers = [
  'get',
  'isPlainObject',
  'last',
  'maxBy',
  'minBy',
  'omit',
  'range',
  'sortBy',
  'sumBy',
  'throttle',
  'uniqBy',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: esToolkitCompatHelpers.map((helper) => ({
      find: `es-toolkit/compat/${helper}`,
      replacement: fileURLToPath(
        new URL(`./src/shims/es-toolkit-${helper}.js`, import.meta.url),
      ),
    })),
  },
})
