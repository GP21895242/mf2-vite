import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry:  'src/index.js',
      name: 'test-libs', 
      fileName: (format) => `index.${format}.js`
    },
    sourcemap: true,
  },
  plugins: [react()],
})
