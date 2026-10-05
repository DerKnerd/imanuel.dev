import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const svelteKitConfig = {
	// hydrate the <div id="svelte"> element in src/app.html
	adapter: adapter({
		// default options are shown
		pages: 'public',
		assets: 'public',
		fallback: 'index.html',
		out: 'public'
	}),

	preprocess: [vitePreprocess({})]
};

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(svelteKitConfig), ViteImageOptimizer()]
};

export default config;
