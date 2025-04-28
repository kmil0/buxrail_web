// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kmilo.github.io/buxrail_web/',
  base: '/buxrail_web/', 
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()]
  }
});