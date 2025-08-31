import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: /\.(js|jsx|ts|tsx)$/,
    }),
  ],
  esbuild: {
    jsx: 'automatic',
  },
})
