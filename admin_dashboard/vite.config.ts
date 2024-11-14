import { defineConfig } from 'vite'
import {fileURLToPath, Url} from 'node:url'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
