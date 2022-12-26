import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

export default defineConfig({
    site: "https://minsight.lendmark.lol",
    base: "/",
    trailingSlash: "always",
    output: "static",
    site: "https://example.com",
    integrations: [tailwind(), sitemap(), image()],
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
});
