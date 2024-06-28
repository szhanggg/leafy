import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), react()],
  output: "static",
  adapter: vercelStatic()
});