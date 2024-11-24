import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7779
  },
  resolve: {
    alias: [
      { find: "#", replacement: "/src" },
      { find: "#components", replacement: "/src/components" },
      { find: "#resources", replacement: "/src/resources" }
    ]
  }
})
