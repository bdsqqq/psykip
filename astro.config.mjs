import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  experimental: {
    contentCollections: true,
  },
  site: "https://psykip.vercel.app",
  integrations: [
    tailwind(),
    prefetch(),
    solid(),
    astroImageTools,
    sitemap(),
    partytown(),
  ],
});
