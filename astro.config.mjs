import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Site URL is configured in one place only. Leave blank until a production domain is assigned.
const site = "";

export default defineConfig({
  site: site || undefined,
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: site ? [sitemap()] : [],
});
