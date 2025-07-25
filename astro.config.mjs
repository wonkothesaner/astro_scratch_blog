// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: "https://wts.services",
  integrations: [mdx(), sitemap()],
  trailingSlash: "always",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
		  target: '_blank', 
		  rel: 'noopener noreferrer' 
        },
      ],
    ],
  },
});
