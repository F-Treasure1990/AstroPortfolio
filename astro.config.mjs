import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://fentontreasure.co.uk",
  integrations: [react(), partytown(), compress(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@styles": path.resolve("./src/styles"),
        "@components": path.resolve("./src/Components"),
        "@layouts": path.resolve("./src/Layouts"),
        "@public": path.resolve("./public"),
        "@hooks": path.resolve("./src/Hooks"),
        "@data": path.resolve("./src/Data"),
        "@store": path.resolve("./src/Store"),
      },
    },
  },
});
