import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

import clerk from "astro-clerk-auth";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {      
      external: ["svgo"]
    }
  },
  site: "https://psykip.vercel.app",
  integrations: [astroImageTools, sitemap(), partytown(), tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
});