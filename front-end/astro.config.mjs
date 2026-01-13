// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

const isProd = import.meta.env.MODE === "production";

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://vdinhaus.github.io" : "http://localhost:4321",
  base: "/front-end",
  integrations: [react()],
});
