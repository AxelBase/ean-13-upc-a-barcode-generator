import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false
    }),

    paths: {
      base: '/ean-13-upc-a-barcode-generator'
    },

    prerender: {
      // Don't try to crawl or validate any additional pages.
      crawl: false,
      entries: [],

      // The magic line that prevents build failure:
      handleUnseenRoutes: 'ignore',

      // Keep warnings instead of errors
      handleHttpError: 'warn'
    }
  }
};

export default config;
