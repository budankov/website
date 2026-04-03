import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("three")) {
            return "three";
          }
          if (id.includes("@react-three")) {
            return "react-three";
          }
        },
      },
    },
  },
});
