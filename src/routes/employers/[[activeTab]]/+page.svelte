<script>
	import { page } from '$app/stores';

	import EmployerTab from '../../../components/employer-tab.svelte';

	export let data;
</script>

<svelte:head>
	<title>Imanuel Ulbricht – Bisherige Arbeitgeber</title>
</svelte:head>

<main>
	<div class="container">
		<nav aria-label="Bisherige Arbeitgeber" class="row">
			<EmployerTab
				active={$page.params.activeTab === 'hyand' || !$page.params.activeTab}
				title="Hyand Group GmbH"
				employerName="hyand"
				src="/assets/employers/tabs/hyand.svg"
			/>
			<span class="right-pusher"></span>
			<EmployerTab
				active={$page.params.activeTab === 'ferchau'}
				title="FERCHAU GmbH"
				employerName="ferchau"
				src="/assets/employers/tabs/ferchau.svg"
			/>
			<EmployerTab
				active={$page.params.activeTab === 'eevolution'}
				title="eEvolution GmbH & Co. KG"
				employerName="eevolution"
				src="/assets/employers/tabs/eevolution.png"
			/>
			<EmployerTab
				active={$page.params.activeTab === 'computacenter'}
				title="Computacenter AG & co. oHG"
				employerName="computacenter"
				src="/assets/employers/tabs/computacenter.svg"
			/>
			<EmployerTab
				active={$page.params.activeTab === 'arvato'}
				title="Arvato Supply Chain Solutions SE"
				employerName="arvato"
				src="/assets/employers/tabs/arvato.svg"
			/>
			<EmployerTab
				active={$page.params.activeTab === 'mentana'}
				title="FP Digital"
				employerName="mentana"
				src="/assets/employers/tabs/mentana.webp"
			/>
		</nav>
	</div>
	<div class="content">
		<h2>
			{data.name}
		</h2>
		<h3>Über {data.name}</h3>
		<dl>
			{#if data.parentCompany}
				<dt>Muttergesellschaft</dt>
				<dd>{data.parentCompany}</dd>
			{/if}
			<dt>Standort</dt>
			<dd>{data.site}</dd>
			<dt>Mitarbeiter</dt>
			<dd>{data.employees}</dd>
		</dl>
		<h3>Über meinen Job</h3>
		<dl>
			<dt>Rolle</dt>
			<dd>{data.role}</dd>
			<dt>Angefangen</dt>
			<dd>{data.started}</dd>
			{#if data.ended}
				<dt>Aufgehört</dt>
				<dd>{data.ended}</dd>
			{/if}
		</dl>
		<h3>Projekte</h3>
		<dl>
			{#each data.projects as project}
				<dt>{project.short}</dt>
				<dd>{project.long}</dd>
			{/each}
		</dl>
		<h3>Erfahrungen</h3>
		<dl>
			<dt>Sprachen</dt>
			<dd>{data.languages.join(', ')}</dd>
			<dt>Technologien</dt>
			<dd>{data.technologies.join(', ')}</dd>
		</dl>
	</div>
</main>

<style lang="scss">
	.container {
		width: 100%;
		position: sticky;
		top: 5.25rem;
		background: var(--white);

		@media screen and (max-width: 1023px) {
			top: 4.25rem;
			width: 100vw;
			overflow-x: scroll;
			border-bottom: 0.25rem solid var(--primary-color-tab-row-border);
		}
	}

	.row {
		display: flex;
		width: 80vw;
		justify-content: space-between;
		padding-bottom: 2rem;
		padding-top: 1rem;
		gap: 2rem;

		&::after {
			content: '';
			background: var(--primary-color-tab-row-border);
			height: 0.25rem;
			width: 100%;
			position: absolute;
			bottom: -0.25rem;
			border-radius: 0.25rem;
		}

		@media screen and (max-width: 1023px) {
			gap: 1rem;
			height: 100%;
			padding-bottom: 1rem;
			width: 100vw;
			padding-left: 1vw;
			padding-right: 1vw;
			box-sizing: border-box;

			&::after {
				content: unset;
			}
		}
	}

	.content {
		padding-top: 4rem;
		width: 80vw;
		padding-bottom: 2rem;

		@media screen and (min-width: 2560px) {
			gap: 4rem;
		}

		@media screen and (max-width: 1023px) {
			width: 100vw;
			z-index: -1;
			display: block;
			padding-left: 1vw;
			padding-right: 1vw;
			box-sizing: border-box;
		}
	}

	.right-pusher {
		margin-left: auto;
		margin-right: 0;
	}

	h2 {
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-regular);
		margin: 0 0 0.5rem;
		font-size: 1.75rem;
		color: var(--primary-color);
	}

	h3 {
		font-family: var(--font-family-heading);
		font-weight: var(--font-weight-regular);
		margin: 0 0 0.5rem;
		font-size: 1.5rem;
		color: var(--primary-color);
	}

	dl {
		margin-top: 0;
		margin-bottom: 2rem;
	}

	dt {
		font-family: var(--font-family-heading);
		color: var(--primary-color);
		font-weight: 600;
	}

	dd {
		margin-bottom: 0.5rem;
		padding-left: 0;
		margin-left: 0;
	}
</style>
