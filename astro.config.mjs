import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

export default defineConfig({
    base: "/",
    trailingSlash: "always",
    output: "server",
    site: "https://minsight.lendmark.lol",
    integrations: [tailwind(), sitemap(), image()],
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
});
