import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), ViteImageOptimizer()]
};

export default config;
