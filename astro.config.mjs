import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Site URL is configured in one place only. Setting it enables absolute canonical/OG URLs and the sitemap.
const site = "https://pantaicarocok.com";

export default defineConfig({
  site: site || undefined,
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: site ? [sitemap()] : [],
});
