<script>
	import { page } from '$app/state';

	import SkillTab from '../../../components/skill-tab.svelte';

	export let data;
</script>

<svelte:head>
	<title>Imanuel Ulbricht – Meine Fähigkeiten</title>
</svelte:head>

<main>
	<div class="tab-container">
		<nav aria-label="Fähigkeiten" class="tab-row">
			<SkillTab
				active={page.params.activeTab === 'php' || !page.params.activeTab}
				alt="PHP"
				src="/assets/skills/tabs/php.png"
				title="Meine PHP Fähigkeiten"
				toolName="php"
			/>
			<SkillTab
				active={page.params.activeTab === 'cpp'}
				alt="C++"
				src="/assets/skills/tabs/iso_cpp.svg"
				title="Meine C++ Fähigkeiten"
				toolName="cpp"
			/>
			<SkillTab
				active={page.params.activeTab === 'nodejs'}
				alt="nodejs"
				src="/assets/skills/tabs/nodejs.svg"
				title="Meine nodejs Fähigkeiten"
				toolName="nodejs"
			/>
			<SkillTab
				active={page.params.activeTab === 'java'}
				alt="Java"
				src="/assets/skills/tabs/java.svg"
				title="Meine Java Fähigkeiten"
				toolName="java"
			/>
			<SkillTab
				active={page.params.activeTab === 'rust'}
				alt="Rust"
				src="/assets/skills/tabs/rust.svg"
				title="Meine Rust Fähigkeiten"
				toolName="rust"
			/>
			<span class="right-pusher"></span>
			<SkillTab
				active={page.params.activeTab === 'web'}
				alt="Web"
				src="/assets/skills/tabs/web.svg"
				title="Meine Web Fähigkeiten"
				toolName="web"
			/>
			<SkillTab
				active={page.params.activeTab === 'jetbrains'}
				alt="Jetbrains"
				src="/assets/skills/tabs/jetbrains.svg"
				title="Meine Jetbrains Fähigkeiten"
				toolName="jetbrains"
			/>
			<SkillTab
				active={page.params.activeTab === 'microsoft'}
				alt="Microsoft"
				src="/assets/skills/tabs/microsoft.svg"
				title="Meine Microsoft Fähigkeiten"
				toolName="microsoft"
			/>
			<SkillTab
				active={page.params.activeTab === 'google'}
				alt="Google"
				src="/assets/skills/tabs/google.svg"
				title="Meine Google Fähigkeiten"
				toolName="google"
			/>
			<SkillTab
				active={page.params.activeTab === 'linux'}
				alt="Linux"
				src="/assets/skills/tabs/linux.svg"
				title="Meine Linux Fähigkeiten"
				toolName="linux"
			/>
			<SkillTab
				active={page.params.activeTab === 'database'}
				alt="Database"
				src="/assets/skills/tabs/database.svg"
				title="Meine Database Fähigkeiten"
				toolName="database"
			/>
			<SkillTab
				active={page.params.activeTab === 'more'}
				alt="Mehr"
				src="/assets/skills/tabs/more.svg"
				title="Weitere meiner Fähigkeiten"
				toolName="more"
			/>
		</nav>
	</div>
	<div class="tab-content">
		{#each data.skills as skill}
			<img src={skill.src} alt={skill.alt} title={skill.alt} />
		{/each}
	</div>
</main>

<style>
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
	}

	.tab-row {
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
		}
	}

	.tab-content {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 2rem;
		padding-top: 4rem;
		width: 80vw;
		padding-bottom: 2rem;

		@media screen and (min-width: 2559px) {
			gap: 4rem;
		}

		@media screen and (max-width: 1023px) {
			width: 100vw;
			z-index: -1;
			display: block;
			column-count: 3;
			padding-left: 0.5rem;
			padding-right: 0.5rem;
			box-sizing: border-box;
		}

		@media screen and (min-width: 1024px) and (max-width: 1559px) {
			width: 90vw;
		}
	}

	img {
		height: 6rem;
		width: auto;

		@media screen and (min-width: 2559px) {
			height: 8rem;
		}

		@media screen and (max-width: 1919px) {
			height: 5rem;
		}

		@media screen and (max-width: 1023px) {
			width: 100%;
			height: auto;
		}
	}

	.right-pusher {
		margin-left: auto;
		margin-right: 0;
	}
</style>
