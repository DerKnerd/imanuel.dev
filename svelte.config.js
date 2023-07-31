import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// default options are shown
			pages: 'public',
			assets: 'public',
			fallback: 'index.html',
			out: 'public'
		})
	}
};

export default config;
