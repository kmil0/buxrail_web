import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import clarity from '@kbyte-tech/astro-clarity';

export default defineConfig({
  site: "https://buxrail.com",
  base: "/", 
  integrations: [
    sitemap(),  
    clarity({
      enabled: true,
      projectId: 'reuil5sodr',      
    }),
  ],
  
});