import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Vikas_Portfolio/',   // repo name
  build: {
    outDir: 'docs',            // 👈 build into docs/ instead of dist/
  },
})
