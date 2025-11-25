import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  // Removed 'base' → SvelteKit manages it via svelte.config.js paths
  build: {
    // Raise warning threshold to reduce noisy chunk warnings in local dev/build logs
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split bwip-js into its own chunk to keep the main bundle small
          if (id.includes('node_modules/bwip-js')) {
            return 'bwip-js';
          }
        }
      }
    }
  }
});
