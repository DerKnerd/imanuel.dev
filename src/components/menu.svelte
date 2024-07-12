<script>
  import Github from '../icons/Github.svelte';
  import Xing from '../icons/Xing.svelte';
  import Email from '../icons/Email.svelte';
  import { page } from '$app/stores';

  let menuToggled = false;
  let activeRoute = '';

  page.subscribe((data) => {
    const idx = data.url.pathname.indexOf('/', 1);
    if (idx === -1) {
      activeRoute = data.url.pathname;
    } else {
      activeRoute = data.url.pathname.substring(0, idx);
    }
    menuToggled = false;
  });

  function toggleMenu() {
    menuToggled = !menuToggled;
  }
</script>

<div aria-label="Menüs" class="menu" role="navigation">
  <nav aria-label="Hauptmenü" class="left">
    <span class="brand">Imanuel Ulbricht</span>
    <button class:open={menuToggled} on:click={toggleMenu}>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
    </button>
    <a class="item" class:active={activeRoute === '/skills'} href="/skills">Fähigkeiten</a>
    <a class="item" class:active={activeRoute === '/project'} href="/project">Private Projekte</a>
    <a class="item" class:active={activeRoute === '/employers'} href="/employers">Bisherige Arbeitgeber</a>
    <a class="item" href="https://design.imanuel.dev" target="_blank">Meine Designs</a>
    <a class="item" class:active={activeRoute === '/about'} href="/about">Über mich</a>
  </nav>
  <nav aria-label="Kontaktier mich" class="icon-bar">
    <a class="item icon" href="mailto:me@imanuel.dev" target="_blank" title="Schick mir eine Mail">
      <Email />
    </a>
    <a class="item icon" href="https://www.xing.com/profile/Imanuel_Ulbricht/" target="_blank" title="Ich bin auf Xing">
      <Xing />
    </a>
    <a class="item icon" href="https://github.com/DerKnerd" target="_blank" title="Ich bin auf Github">
      <Github />
    </a>
  </nav>
</div>
<div class="hamburger-menu" class:hamburger-menu--open={menuToggled} role="menu">
  <div class="hamburger-top">
    <nav class="hamburger-links">
      <a class="hamburger-item" class:active={activeRoute === '/skills'} href="/skills">Fähigkeiten</a>
      <a class="hamburger-item" class:active={activeRoute === '/project'} href="/project">Private Projekte</a>
      <a class="hamburger-item" class:active={activeRoute === '/employers'} href="/employers">
        Bisherige Arbeitgeber
      </a>
      <a class="hamburger-item" href="https://design.imanuel.dev" target="_blank">Meine Designs</a>
      <a class="hamburger-item" class:active={activeRoute === '/about'} href="/about">Über mich</a>
    </nav>
    <nav aria-label="Kontaktier mich" class="hamburger-icon-bar">
      <a
        class="hamburger-item hamburger-icon"
        href="mailto:me@imanuel.dev"
        target="_blank"
        title="Schick mir eine Mail"
      >
        <Email />
      </a>
      <a
        class="hamburger-item hamburger-icon"
        href="https://www.xing.com/profile/Imanuel_Ulbricht/"
        target="_blank"
        title="Ich bin auf Xing"
      >
        <Xing />
      </a>
      <a
        class="hamburger-item hamburger-icon"
        href="https://github.com/DerKnerd"
        target="_blank"
        title="Ich bin auf Github"
      >
        <Github />
      </a>
    </nav>
  </div>
  <nav class="hamburger-bottom">
    <a class="hamburger-item hamburger-bottom-item" href="/imprint" on:click={toggleMenu}>Impressum</a>
    <a class="hamburger-item hamburger-bottom-item" href="/data-protection" on:click={toggleMenu}>Datenschutz</a>
    <a class="hamburger-item hamburger-bottom-item" href="/legal" on:click={toggleMenu}>Rechtliches</a>
  </nav>
</div>

<style lang="scss">
  .menu {
    border-bottom: 4px solid var(--primary-color);
    background: var(--white);
    color: var(--primary-color);
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    position: sticky;
    top: 0;

    @media screen and (max-width: 1023px) {
      padding-right: 1%;
      padding-left: 1%;
      height: 4rem;
      display: block;
    }

    @media screen and (min-width: 1024px) and (max-width: 1559px) {
      height: 4rem;
      display: block;
      padding-left: 5%;
      padding-right: 5%;
    }
  }

  .left {
    @media screen and (max-width: 1559px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .brand {
    font-family: var(--font-family-special);
    font-weight: var(--font-weight-regular);
    font-size: 2rem;
    margin-right: 2rem;
  }

  .item {
    color: var(--primary-color-lighter);
    text-decoration: none;
    font-size: 1.5rem;
    font-family: var(--font-family-normal);
    font-weight: var(--font-weight-light);
    margin-right: 2rem;
    transition: color 0.3s;

    @media screen and (max-width: 1559px) {
      display: none;
    }
  }

  .active {
    color: var(--primary-color);
    font-weight: var(--font-weight-regular);
  }

  .icon-bar {
    display: flex;
    flex-flow: row;
  }

  .icon {
    margin-right: 0;
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    fill: var(--primary-color);
  }

  button {
    height: 4rem;
    width: 4rem;
    background: none;
    border: none;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    cursor: pointer;
    position: relative;

    @media screen and (min-width: 1600px) {
      display: none;
    }

    &.open {
      padding-top: 0;
      padding-bottom: 0;

      .hamburger-bar {
        position: absolute;

        &:first-child {
          transform: rotate(45deg);
        }

        &:last-child {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .hamburger-bar {
    display: block;
    background: var(--primary-color);
    height: 0.25rem;
    width: 100%;
    transition: transform 0.3s;
    margin-bottom: 0.5rem;
  }

  .hamburger-menu {
    display: none;
    flex-flow: row wrap;
    justify-content: space-between;
    position: fixed;
    background: var(--white);
    padding-top: 1rem;
    padding-left: 1%;
    padding-right: 1%;
    height: calc(100vh - 5rem);
    width: 100%;
    z-index: 99999999;

    @media screen and (min-width: 1024px) and (max-width: 1559px) {
      padding-left: 5%;
      padding-right: 5%;
    }
  }

  .hamburger-menu--open {
    display: flex;
  }

  .hamburger-top {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }

  .hamburger-item {
    font-size: 2rem;
    font-family: var(--font-family-special);
    font-weight: var(--font-weight-light);
    color: var(--primary-color);
    text-decoration: none;
  }

  .hamburger-icon {
    margin-left: 1rem;
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
    fill: var(--primary-color);
  }

  .hamburger-links {
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 3rem;
  }

  .hamburger-icon-bar {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .hamburger-bottom {
    margin-top: auto;
    display: flex;
    flex-flow: column;
  }

  .hamburger-bottom-item {
    font-size: 1.5rem;
  }
</style>
