<script>
	export let title = '';
	export let projectName = '';
	export let alt = '';
	export let src = '';
	export let active = false;
</script>

<a
	aria-label={title}
	class="item"
	class:is--active={active}
	href={`/project/${projectName}`}
	{title}
>
	<img {alt} aria-hidden="true" {src} />
	<span>{title}</span>
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
			width: 4rem;
			position: absolute;
			bottom: -2.25rem;
			border-radius: 0.25rem;
			left: 0;
			opacity: 0;

			@media screen and (min-width: 2560px) {
				width: 6rem;
			}

			@media screen and (max-width: 1919px) {
				width: 3rem;
			}

			@media screen and (max-width: 1023px) {
				bottom: -1.25rem;
			}
		}
	}

	img {
		width: auto;
		height: 4rem;
		object-fit: scale-down;

		@media screen and (min-width: 2560px) {
			height: 6rem;
		}

		@media screen and (max-width: 1919px) {
			height: 3rem;
		}
	}

	span {
		font-size: 2rem;
		font-family: var(--font-family-heading);
		color: var(--primary-color);
	}

	.is--active {
		opacity: 1;

		&:hover {
			opacity: 1;
		}

		&::after {
			opacity: 1;
		}
	}
</style>
