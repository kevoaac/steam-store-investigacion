import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), react()],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false, // URL -> false: /es /en  true: / /en
    },
  },
  adapter: vercel(),
});
