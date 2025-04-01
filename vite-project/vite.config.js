import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme:{
    fontFamily: {
      "hero-font":"sriracha"
    },
  },
  plugins: [
    tailwindcss(),
    react()],
})
