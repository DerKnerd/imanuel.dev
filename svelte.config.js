/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    prerender: {
      default: true,
      enabled: true
    },
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;
