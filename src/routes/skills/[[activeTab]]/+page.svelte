<script>
  import { page } from '$app/stores';

  import SkillTab from '../../../components/skill-tab.svelte';

  export let data;
</script>

<svelte:head>
  <title>Imanuel Ulbricht – Meine Fähigkeiten</title>
</svelte:head>

<main>
  <div class="tab__container">
    <nav aria-label="Fähigkeiten" class="tab__row">
      <SkillTab
        active={$page.params.activeTab === 'php' || !$page.params.activeTab}
        alt="PHP"
        title="Meine PHP Fähigkeiten"
        toolName="php"
        src="/assets/skills/tabs/php.png"
      />
      <SkillTab
        active={$page.params.activeTab === 'cpp'}
        alt="C++"
        title="Meine C++ Fähigkeiten"
        toolName="cpp"
        src="/assets/skills/tabs/iso_cpp.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'nodejs'}
        alt="nodejs"
        title="Meine nodejs Fähigkeiten"
        toolName="nodejs"
        src="/assets/skills/tabs/nodejs.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'java'}
        alt="Java"
        title="Meine Java Fähigkeiten"
        toolName="java"
        src="/assets/skills/tabs/java.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'rust'}
        alt="Rust"
        title="Meine Rust Fähigkeiten"
        toolName="rust"
        src="/assets/skills/tabs/rust.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'web'}
        alt="Web"
        title="Meine Web Fähigkeiten"
        toolName="web"
        src="/assets/skills/tabs/web.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'jetbrains'}
        alt="Jetbrains"
        title="Meine Jetbrains Fähigkeiten"
        toolName="jetbrains"
        src="/assets/skills/tabs/jetbrains.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'microsoft'}
        alt="Microsoft"
        title="Meine Microsoft Fähigkeiten"
        toolName="microsoft"
        src="/assets/skills/tabs/microsoft.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'google'}
        alt="Google"
        title="Meine Google Fähigkeiten"
        toolName="google"
        src="/assets/skills/tabs/google.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'linux'}
        alt="Linux"
        title="Meine Linux Fähigkeiten"
        toolName="linux"
        src="/assets/skills/tabs/linux.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'database'}
        alt="Database"
        title="Meine Database Fähigkeiten"
        toolName="database"
        src="/assets/skills/tabs/database.svg"
      />
      <SkillTab
        active={$page.params.activeTab === 'more'}
        alt="Mehr"
        title="Weitere meiner Fähigkeiten"
        toolName="more"
        src="/assets/skills/tabs/more.svg"
      />
    </nav>
  </div>
  <div class="tab__content">
    {#each data.skills as skill}
      <img src={skill.src} alt={skill.alt} title={skill.alt} />
    {/each}
  </div>
</main>

<style>
  .tab__container {
    width: 100%;
    position: sticky;
    top: 6rem;
    background: var(--white);
  }

  .tab__row {
    display: flex;
    width: 80vw;
    justify-content: space-between;
    padding-bottom: 2rem;
    padding-top: 1rem;

    &::after {
      content: '';
      background: var(--primary-color-tab-row-border);
      height: 0.25rem;
      width: 100%;
      position: absolute;
      bottom: -0.25rem;
      border-radius: 0.25rem;
    }
  }

  .tab__content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2rem;
    padding-top: 4rem;
    width: 80vw;
    padding-bottom: 2rem;
    position: relative;
  }

  img {
    height: 12rem;
    width: auto;
  }

  @media screen and (min-width: 2560px) {
    img {
      height: 14rem;
    }

    .tab__content {
      gap: 4rem;
    }
  }

  @media screen and (max-width: 1919px) {
    img {
      height: 10rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .tab__container {
      top: 4.25rem;
      width: 100vw;
      overflow-x: scroll;
      border-bottom: 0.25rem solid var(--primary-color-tab-row-border);
    }

    .tab__row {
      gap: 1rem;
      height: 100%;
      padding-bottom: 1rem;
      width: 100vw;
    }

    .tab__row::after {
      content: unset;
    }

    .tab__content {
      width: 100vw;
      z-index: -1;
      display: block;
    }

    img {
      width: 100vw;
      height: auto;
      padding: 0.5rem;
      box-sizing: border-box;
    }
  }
</style>
