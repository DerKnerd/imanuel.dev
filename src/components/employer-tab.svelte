<script>
	export let title = '';
	export let employerName = '';
	export let src = '';
	export let active = false;
</script>

<a aria-label={title} class="item" class:active href={`/employers/${employerName}`} {title}>
	<img alt={title} aria-hidden="true" {src} />
</a>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.6;
		gap: 1rem;
		text-decoration: none;
		position: relative;

		&:hover {
			opacity: 0.8;
		}

		&::after {
			content: '';
			background: var(--primary-color);
			height: 0.25rem;
			width: 3rem;
			position: absolute;
			bottom: -2.25rem;
			border-radius: 0.25rem;
			opacity: 0;
		}

		@media screen and (min-width: 2559px) {
			&::after {
				width: 4rem;
			}
		}

		@media screen and (max-width: 1919px) {
			&::after {
				width: 2rem;
			}
		}

		@media screen and (max-width: 1023px) {
			&::after {
				bottom: -1.25rem;
			}
		}
	}

	img {
		width: auto;
		height: 3rem;

		:not(:first-child) & {
			height: 2rem;
		}

		@media screen and (min-width: 2560px) {
			height: 4rem;

			:not(:first-child) & {
				height: 3rem;
			}
		}

		@media screen and (max-width: 1919px) {
			height: 2rem;

			:not(:first-child) & {
				height: 1.5rem;
			}
		}
	}

	.active {
		opacity: 1;

		&:hover {
			opacity: 1;
		}

		&::after {
			opacity: 1;
		}
	}
</style>
