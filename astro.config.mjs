import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  site: "https://psykip.vercel.app",
  integrations: [sitemap(), react()]
});
