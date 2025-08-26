// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';

// Fallback config without astro-icon if dev toolbar errors persist
export default defineConfig({
  site: 'https://example.com',
  base: '/',
  
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['.', path.resolve('./src/assets')],
      },
    },
  },
  
  integrations: [mdx(), sitemap()]
});
