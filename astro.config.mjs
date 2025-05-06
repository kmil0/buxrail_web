// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'


// https://astro.build/config
export default defineConfig({
  site: "https://buxrail.com",
  base: "/", 
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),  
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
  }),
  ],
  
});