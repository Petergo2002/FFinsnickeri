import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://knallens-fs.se",

  vite: {
    plugins: [tailwindcss()]
  }
});
