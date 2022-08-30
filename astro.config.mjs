import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import { astroImageTools } from "astro-imagetools";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [tailwind(), prefetch(), solid(), astroImageTools],
});
