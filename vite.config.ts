import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' garante que o index.html e os assets fiquem na raiz do dist (requisito do Plesk)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
