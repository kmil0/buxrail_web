// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import clarity from '@kbyte-tech/astro-clarity';

// https://astro.build/config
export default defineConfig({
  site: "https://buxrail.com",
  base: "/", 
  integrations: [
    sitemap(),  
    clarity({
      enabled: true,
      projectId: import.meta.env.PUBLIC_CLARITY_ID,
    }),
  ],
  
});