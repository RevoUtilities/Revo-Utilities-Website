import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { safariPerformanceOptimizer } from "./src/utils/optimizeForSafari";

// Add process type for Vite environment
declare const process: {
  env: {
    NODE_ENV?: string;
    SHOW_WATERMARK?: string;
    ENABLE_BROWSER_DETECTION?: boolean;
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // Make sure browser detection is available in development and production
    'process.env.ENABLE_BROWSER_DETECTION': true,
  },
  plugins: [
    react(),
    {
      name: "safari-performance-optimizer",
      transformIndexHtml(_html) {
        return [
          {
            tag: "script",
            attrs: { type: "text/javascript" },
            injectTo: "head-prepend",
            children: safariPerformanceOptimizer(),
          },
        ];
      },
    },
  ],
  server: {
    allowedHosts: true,
  },
});
