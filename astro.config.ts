import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://emirgultekin.com",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr"],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin"),
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
