import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/NEON-SHADOW-CYBER-RUNNER/',
  plugins: [react(), tailwindcss()],
})
