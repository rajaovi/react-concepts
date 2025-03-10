import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Vite, by default, handles dynamic imports and code splitting efficiently. No specific configuration is usually needed.
  //For more advanced optimization, you can configure rollupOptions within vite.config.js to customize chunking behavior
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ["react", "react-dom"],
  //       },
  //     },
  //   },
  // },
});
