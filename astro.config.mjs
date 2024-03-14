import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  output: "static",
  adapter: vercelStatic()
});