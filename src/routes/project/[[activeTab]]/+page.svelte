<script>
	import { page } from '$app/stores';
	import ProjectTab from '../../../components/project-tab.svelte';

	import Jinya from '../../../data/projects/jinya.json';
	import Bambushain from '../../../data/projects/bambushain.json';
	import Servers from '../../../data/projects/servers.json';
	import Websites from '../../../data/projects/websites.json';
</script>

<svelte:head>
	<title>Imanuel Ulbricht – Private Projekte</title>
</svelte:head>

<main>
	<div class="tab-container">
		<nav aria-label="Private Projekte" class="tab-row">
			<ProjectTab
				active={$page.params.activeTab === 'jinya' || !$page.params.activeTab}
				alt="Jinya"
				title="Jinya"
				projectName="jinya"
				src="/assets/projects/tabs/jinya.svg"
			/>
			<ProjectTab
				active={$page.params.activeTab === 'bambushain'}
				alt="Bambushain"
				title="Bambushain"
				projectName="bambushain"
				src="/assets/projects/tabs/bambushain.svg"
			/>
			<span class="right-pusher"></span>
			<ProjectTab
				active={$page.params.activeTab === 'websites'}
				alt="Websites"
				title="Websites"
				projectName="websites"
				src="/assets/projects/tabs/websites.svg"
			/>
			<ProjectTab
				active={$page.params.activeTab === 'servers'}
				alt="Servers"
				title="Servers"
				projectName="servers"
				src="/assets/projects/tabs/servers.svg"
			/>
		</nav>
	</div>
	<div class="tab-content">
		{#if $page.params.activeTab === 'jinya' || !$page.params.activeTab}
			{#each Jinya.projects as project}
				<div class="project">
					<img class="project-logo" src={project.logo} alt="Logo" />
					<span class="project-name">{project.name}</span>
					<dl class="project-data">
						<dt>Kategorie</dt>
						<dd>{project.category}</dd>
						<dt>Sprachen</dt>
						<dd>{project.languages.join(', ')}</dd>
						<dt>Technologien</dt>
						<dd>{project.technologies.join(', ')}</dd>
						<dt>Kurzbeschreibung</dt>
						<dd>{project.description}</dd>
						<dt>Github</dt>
						<dd>
							<a target="_blank" href={`https://github.com/${project.github}`}>{project.github}</a>
						</dd>
						{#if project.website}
							<dt>Website</dt>
							<dd>
								<a target="_blank" href={`https://${project.website}`}>{project.website}</a>
							</dd>
						{/if}
					</dl>
				</div>
			{/each}
		{:else if $page.params.activeTab === 'bambushain'}
			{#each Bambushain.projects as project}
				<div class="project">
					<img class="project-logo" src={project.logo} alt="Logo" />
					<span class="project-name">{project.name}</span>
					<dl class="project-data">
						<dt>Kategorie</dt>
						<dd>{project.category}</dd>
						<dt>Sprachen</dt>
						<dd>{project.languages.join(', ')}</dd>
						<dt>Technologien</dt>
						<dd>{project.technologies.join(', ')}</dd>
						<dt>Kurzbeschreibung</dt>
						<dd>{project.description}</dd>
						<dt>Github</dt>
						<dd>
							<a target="_blank" href={`https://github.com/${project.github}`}>{project.github}</a>
						</dd>
						{#if project.website}
							<dt>Website</dt>
							<dd>
								<a target="_blank" href={`https://${project.website}`}>{project.website}</a>
							</dd>
						{/if}
					</dl>
				</div>
			{/each}
		{:else if $page.params.activeTab === 'websites'}
			{#each Websites.sites as site}
				<div class="site">
					<span class="site-name">{site.name}</span>
					<dl class="site-data">
						<dt>Besitzer</dt>
						<dd>{site.owner}</dd>
						<dt>Technologie</dt>
						<dd>{site.technology}</dd>
						<dt>Hoster</dt>
						<dd>{site.hoster}</dd>
						<dt>Adresse</dt>
						<dd><a target="_blank" href={`https://${site.address}`}>{site.address}</a></dd>
					</dl>
				</div>
			{/each}
		{:else if $page.params.activeTab === 'servers'}
			{#each Servers.installations as installation}
				<div class="installation">
					<span class="installation-name">{installation.name}</span>
					<dl class="installation-data">
						<dt>Architektur</dt>
						<dd>{installation.architecture}</dd>
						<dt>Betriebssystem</dt>
						<dd>{installation.operatingSystem}</dd>
						<dt>Hoster</dt>
						<dd>{installation.hoster}</dd>
						<dt>Zweck</dt>
						<dd>{installation.use}</dd>
						<dt>Anwendungen</dt>
						<dd>{installation.apps.join(', ')}</dd>
					</dl>
				</div>
			{/each}
		{/if}
	</div>
</main>

<style lang="scss">
	.tab-content {
		padding-top: 2rem;
		padding-bottom: 2rem;
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		box-sizing: border-box;

		@media screen and (max-width: 1023px) {
			margin-left: 0.5rem;
			margin-right: 0.5rem;
		}
	}

	.project,
	.installation,
	.site {
		display: grid;
		grid-template-areas: 'logo name' 'content content';
		grid-template-columns: 2rem 1fr;
		grid-template-rows: auto 1fr;
		flex: 0 0 calc((100% / 3) - (2 * 2rem / 3));
		background: var(--tile-background);
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		box-sizing: border-box;
		column-gap: 0.5rem;
		row-gap: 1rem;

		@media screen and (max-width: 1023px) {
			flex: 0 0 100%;
		}
	}

	.installation,
	.site {
		grid-template-areas: 'name name' 'content content';
	}

	.project-logo {
		height: 2rem;
		width: auto;
		object-fit: scale-down;
		align-self: center;
		justify-self: center;
		grid-area: logo;
	}

	.project-name,
	.installation-name,
	.site-name {
		align-self: start;
		grid-area: name;
		font-size: 2rem;
		font-family: var(--font-family-heading);
		color: var(--primary-color);
	}

	.project-data,
	.installation-data,
	.site-data {
		grid-area: content;
		margin: 0;

		dt {
			font-family: var(--font-family-heading);
			color: var(--primary-color);
			font-size: 1.25rem;
		}

		dd {
			margin-left: 0;
			margin-bottom: 0.5rem;

			&:last-of-type {
				margin-bottom: 0;
			}
		}
	}

	a {
		color: var(--primary-color);
	}

	.tab-container {
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

    @media screen and (min-width: 1024px) and (max-width: 1559px) {
      top: 4.25rem;
      width: 90vw;
    }
	}

	.tab-row {
		display: flex;
		width: 80vw;
		justify-content: space-between;
		padding-bottom: 2rem;
		padding-top: 2rem;
		gap: 2rem;

		&::after {
			content: '';
			background: var(--primary-color-tab-row-border);
			height: 0.25rem;
			width: 100%;
			position: absolute;
			bottom: -0.25rem;
			border-radius: 0.25rem;

			@media screen and (max-width: 1023px) {
				content: unset;
			}
		}

		@media screen and (max-width: 1023px) {
			gap: 1rem;
			height: 100%;
			padding-bottom: 1rem;
			width: 100vw;
			padding-left: 1vw;
			padding-right: 1vw;
			box-sizing: border-box;
		}

    @media screen and (min-width: 1024px) and (max-width: 1559px) {
      width: 90vw;
      overflow: hidden;
    }
	}

	.right-pusher {
		margin-left: auto;
		margin-right: 0;
	}
</style>
