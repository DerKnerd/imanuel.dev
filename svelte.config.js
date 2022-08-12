import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      default: true,
    },
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      out: 'build'
    })
  }
};

export default config;
