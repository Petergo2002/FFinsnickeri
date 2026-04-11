import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://knallens-fs.se",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
