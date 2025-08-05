import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    // Ensure assets are properly handled
    assetsDir: 'assets',
    // Add source maps for debugging (disabled for production)
    sourcemap: false,
    // Optimize bundle size
    minify: 'esbuild',
    target: 'es2020',
    // Force cache busting with more predictable hashing
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          utils: ['class-variance-authority', 'clsx', 'tailwind-merge'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Ensure clean output
    emptyOutDir: true,
  },
  // Add base path if needed
  base: '/',
});
