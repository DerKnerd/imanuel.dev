<script>
	import { resolve } from '$app/paths';
</script>

<footer aria-label="Footer">
	<a href={resolve('/imprint')}>Impressum</a>
	<a href={resolve('/data-protection')}>Datenschutz</a>
	<a href={resolve('/legal')}>Rechtliches</a>
</footer>

<style>
	footer {
		border-top: 0.125rem solid var(--primary-color);
		box-sizing: border-box;
		height: 4.25rem;
		padding-left: 10%;
		padding-right: 10%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: sticky;
		bottom: 0;
		background: var(--white);

		@media screen and (max-width: 1559px) {
			display: none;
		}
	}

	a {
		font-size: 1.5rem;
		color: var(--primary-color);
		text-decoration: none;
		margin-right: 2rem;
		font-family: var(--font-family-normal);
		font-weight: var(--font-weight-light);
	}
</style>
