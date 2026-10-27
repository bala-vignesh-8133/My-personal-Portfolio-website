import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `host: true` makes the dev and preview servers reachable from other devices
// on the same network, so the site can be opened on a phone.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { host: true },
  preview: { host: true },
})
