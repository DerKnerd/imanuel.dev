module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/prettier'],
	plugins: ['svelte'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte/svelte' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
