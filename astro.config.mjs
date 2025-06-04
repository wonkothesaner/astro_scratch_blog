// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://wonkothesaner.github.io',
	base: '/astro-sanity-blog',
	integrations: [mdx(), sitemap()],
});
