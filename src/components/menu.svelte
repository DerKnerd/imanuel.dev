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

<div aria-label="Menüs" class="iuc-menu" role="navigation">
  <nav aria-label="Hauptmenü" class="iuc-menu__left">
    <span class="iuc-menu__brand">Imanuel Ulbricht</span>
    <button class="iuc-menu__hamburger-button" class:iuc-menu__hamburger-button--open={menuToggled}
            on:click={toggleMenu}>
      <span class="iuc-menu__hamburger-bar"></span>
      <span class="iuc-menu__hamburger-bar"></span>
    </button>
    <a
      class="iuc-menu__item"
      class:iuc-menu__item--active={activeRoute === '/skills'}
      href="/skills">
      Fähigkeiten
    </a>
    <a
      class="iuc-menu__item"
      class:iuc-menu__item--active={activeRoute === '/side-project'}
      href="/side-project">
      Private Projekte
    </a>
    <a
      class="iuc-menu__item"
      class:iuc-menu__item--active={activeRoute === '/employers'}
      href="/employers">
      Ehemalige Arbeitgeber
    </a>
    <a class="iuc-menu__item" href="https://design.imanuel.dev" target="_blank">
      Meine Designs
    </a>
    <a class="iuc-menu__item" class:iuc-menu__item--active={activeRoute === '/about'} href="/about">
      Über mich
    </a>
  </nav>
  <nav aria-label="Kontaktier mich" class="iuc-menu__icon-bar">
    <a
      class="iuc-menu__item iuc-menu__item--icon"
      href="mailto:me@imanuel.dev"
      target="_blank"
      title="Schick mir eine Mail"
    >
      <Email />
    </a>
    <a
      class="iuc-menu__item iuc-menu__item--icon"
      href="https://www.xing.com/profile/Imanuel_Ulbricht/"
      target="_blank"
      title="Ich bin auf Xing"
    >
      <Xing />
    </a>
    <a
      class="iuc-menu__item iuc-menu__item--icon"
      href="https://github.com/DerKnerd"
      target="_blank"
      title="Ich bin auf Github"
    >
      <Github />
    </a>
  </nav>
</div>
<div class="iuc-hamburger-menu" class:iuc-hamburger-menu--open={menuToggled} role="menu">
  <div class="iuc-hamburger-menu__top">
    <nav class="iuc-hamburger-menu__links">
      <a
        class="iuc-hamburger-menu__item"
        class:iuc-menu__item--active={activeRoute === '/skills'}
        href="/skills">
        Fähigkeiten
      </a>
      <a
        class="iuc-hamburger-menu__item"
        class:iuc-menu__item--active={activeRoute === '/side-project'}
        href="/side-project">
        Private Projekte
      </a>
      <a
        class="iuc-hamburger-menu__item"
        class:iuc-menu__item--active={activeRoute === '/employers'}
        href="/employers">
        Ehemalige Arbeitgeber
      </a>
      <a class="iuc-hamburger-menu__item" href="https://design.imanuel.dev" target="_blank">
        Meine Designs
      </a>
      <a class="iuc-hamburger-menu__item" class:iuc-menu__item--active={activeRoute === '/about'} href="/about">
        Über mich
      </a>
    </nav>
    <nav aria-label="Kontaktier mich" class="iuc-hamburger-menu__icon-bar">
      <a
        class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
        href="mailto:me@imanuel.dev"
        target="_blank"
        title="Schick mir eine Mail"
      >
        <Email />
      </a>
      <a
        class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
        href="https://www.xing.com/profile/Imanuel_Ulbricht/"
        target="_blank"
        title="Ich bin auf Xing"
      >
        <Xing />
      </a>
      <a
        class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
        href="https://github.com/DerKnerd"
        target="_blank"
        title="Ich bin auf Github"
      >
        <Github />
      </a>
    </nav>
  </div>
  <nav class="iuc-hamburger-menu__bottom">
    <a class="iuc-hamburger-menu__item" href="/imprint.html" on:click={toggleMenu}>Impressum</a>
  </nav>
</div>

<style>
  .iuc-menu {
    border-bottom: 4px solid var(--primary-color);
    background: var(--white);
    color: var(--primary-color);
    height: 5rem;
    box-shadow: 0 4px 6px #00000029;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    position: sticky;
    top: 0;
  }

  @media screen and (max-width: 1023px) {
    .iuc-menu {
      padding-right: 1%;
      padding-left: 1%;
      height: 4rem;
      display: block;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    .iuc-menu {
      padding-right: 1%;
      padding-left: 1%;
      height: 4rem;
      display: block;
    }
  }

  @media screen and (max-width: 1023px) {
    .iuc-menu__left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    .iuc-menu__left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .iuc-menu__brand {
    font-family: var(--font-family-special);
    font-weight: var(--font-weight-regular);
    font-size: 2rem;
    margin-right: 2rem;
  }

  .iuc-menu__item {
    color: var(--primary-color-lighter);
    text-decoration: none;
    font-size: 1.5rem;
    font-family: var(--font-family-normal);
    font-weight: var(--font-weight-light);
    margin-right: 2rem;
    transition: color 0.3s;
  }

  @media screen and (max-width: 1023px) {
    .iuc-menu__item {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    .iuc-menu__item {
      display: none;
    }
  }

  .iuc-menu__item--active {
    color: var(--primary-color);
    font-weight: var(--font-weight-regular);
  }

  .iuc-menu__icon-bar {
    display: flex;
    flex-flow: row;
  }

  .iuc-menu__item--icon {
    margin-right: 0;
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    fill: var(--primary-color);
  }

  .iuc-menu__hamburger-button {
    height: 4rem;
    width: 4rem;
    background: none;
    border: none;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    cursor: pointer;
    position: relative;
  }

  @media screen and (min-width: 2560px) {
    .iuc-menu__hamburger-button {
      display: none;
    }
  }

  @media screen and (min-width: 1920px) and (max-width: 2559px) {
    .iuc-menu__hamburger-button {
      display: none;
    }
  }

  .iuc-menu__hamburger-button--open {
    padding-top: 0;
    padding-bottom: 0;
  }

  .iuc-menu__hamburger-bar {
    display: block;
    background: var(--primary-color);
    height: 0.25rem;
    width: 100%;
    transition: transform 0.3s;
    margin-bottom: 0.5rem;
  }

  .iuc-menu__hamburger-button--open .iuc-menu__hamburger-bar {
    position: absolute;
  }

  .iuc-menu__hamburger-button--open .iuc-menu__hamburger-bar:first-child {
    transform: rotate(45deg);
  }

  .iuc-menu__hamburger-button--open .iuc-menu__hamburger-bar:last-child {
    transform: rotate(-45deg);
  }

  .iuc-hamburger-menu {
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
  }

  .iuc-hamburger-menu--open {
    display: flex;
  }

  .iuc-hamburger-menu__top {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }

  .iuc-hamburger-menu__item {
    font-size: 2rem;
    font-family: var(--font-family-special);
    font-weight: var(--font-weight-light);
    color: var(--primary-color);
    text-decoration: none;
  }

  .iuc-hamburger-menu__item--icon {
    margin-left: 1rem;
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
    fill: var(--primary-color);
  }

  .iuc-hamburger-menu__links {
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 3rem;
  }

  .iuc-hamburger-menu__icon-bar {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .iuc-hamburger-menu__bottom {
    margin-top: auto;
  }
</style>
