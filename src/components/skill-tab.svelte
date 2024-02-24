<script>
	export let title = '';
	export let toolName = '';
	export let alt = '';
	export let src = '';
	export let active = false;
</script>

<a aria-label={title} class="item" class:is--active={active} href={`/skills/${toolName}`} {title}>
	<img {alt} aria-hidden="true" {src} />
</a>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.6;

		&:hover {
			opacity: 0.8;
		}
	}

	img {
		width: auto;
		height: 6rem;
		object-fit: scale-down;
	}

	.is--active {
		opacity: 1;
		position: relative;

		&:hover {
			opacity: 1;
		}

		&::after {
			content: '';
			background: var(--primary-color);
			height: 0.25rem;
			width: 6rem;
			position: absolute;
			bottom: -2.25rem;
			border-radius: 0.25rem;
		}
	}

	@media screen and (min-width: 2560px) {
		img {
			height: 8rem;
		}

		.is--active::after {
			width: 8rem;
		}
	}

	@media screen and (max-width: 1919px) {
		img {
			height: 4rem;
		}

		.is--active::after {
			width: 4rem;
		}
	}

	@media screen and (max-width: 1023px) {
		.is--active::after {
			width: 4rem;
			bottom: -1.25rem;
		}
	}
</style>
