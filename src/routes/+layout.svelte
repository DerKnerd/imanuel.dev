<script>
	import '../app.scss';
	import Footer from '../components/footer.svelte';
	import Menu from '../components/menu.svelte';

	import '@fontsource/raleway/300.css';
	import '@fontsource/raleway/400.css';

	import '@fontsource/open-sans/300.css';
	import '@fontsource/open-sans/400.css';
	import '@fontsource/open-sans/700.css';
</script>

<Menu></Menu>
<div class="container">
	<slot />
</div>
<Footer></Footer>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: baseline;
		min-height: calc(100vh - 5rem - 4.5rem);
		margin-left: 10%;
		margin-right: 10%;
		padding-top: 5rem;
		box-sizing: border-box;

		@media screen and (max-width: 1023px) {
			padding-top: 2rem;
		}
	}
</style>
