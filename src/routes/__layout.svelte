<script>
  import Email from '../icons/Email.svelte';
  import Github from '../icons/Github.svelte';
  import Behance from '../icons/Behance.svelte';
  import Xing from '../icons/Xing.svelte';
  import { page } from '$app/stores';

  let menuToggled = false;
  let activeRoute;

  page.subscribe((data) => {
    const idx = data.path.indexOf('/', 1);
    if (idx === -1) {
      activeRoute = data.path;
    } else {
      activeRoute = data.path.substring(0, idx);
    }
  });

  function toggleMenu() {
    menuToggled = true;
  }
</script>

<div aria-label="Page menu" class="iuc-menu" role="navigation">
    <nav aria-label="Main Menu" class="iuc-menu__left" role="navigation">
        <span class="iuc-menu__brand">Imanuel Ulbricht</span>
        <button class={'iuc-menu__hamburger-button' + (menuToggled ? ' iuc-menu__hamburger-button--open' : '')}
                on:click={toggleMenu}>
            <span class="iuc-menu__hamburger-bar"></span>
            <span class="iuc-menu__hamburger-bar"></span>
        </button>
        <a class="iuc-menu__item" class:iuc-menu__item--active={activeRoute === '/' || activeRoute === '/skill'}
           href="/">My Skills</a>
        <a class="iuc-menu__item" class:iuc-menu__item--active={activeRoute === '/side-project'} href="/side-project">My
            Side Project</a>
        <a class="iuc-menu__item" class:iuc-menu__item--active={activeRoute === '/employers'} href="/employers">My
            Employers</a>
        <a class="iuc-menu__item" href="https://imanuel.ulbricht.design" target="_blank">My Design Samples</a>
        <a class="iuc-menu__item" class:iuc-menu__item--active={activeRoute === '/about'} href="/about">About Me</a>
    </nav>
    <nav aria-label="Social icon menu" class="iuc-menu__icon-bar" role="navigation">
        <a class="iuc-menu__item iuc-menu__item--icon" href="mailto:imanuel@ulbricht.codes"
           target="_blank" title="Send me an email">
            <Email />
        </a>
        <a class="iuc-menu__item iuc-menu__item--icon" href="https://www.xing.com/profile/Imanuel_Ulbricht/"
           target="_blank" title="Find me on Xing">
            <Xing />
        </a>
        <a class="iuc-menu__item iuc-menu__item--icon" href="https://www.behance.net/knerd"
           target="_blank" title="Find me on Bēhance">
            <Behance />
        </a>
        <a class="iuc-menu__item iuc-menu__item--icon" href="https://github.com/DerKnerd"
           target="_blank" title="Find me on Github">
            <Github />
        </a>
    </nav>
</div>
<div class={'iuc-hamburger-menu' + (menuToggled ? ' iuc-hamburger-menu--open' : '')} role="menu">
    <div class="iuc-hamburger-menu__top">
        <nav class="iuc-hamburger-menu__links" role="navigation">
            <a class="iuc-hamburger-menu__item"
               class:iuc-menu__item--active={activeRoute === '/' || activeRoute === '/skill'}
               href="/" on:click={toggleMenu}>
                My Skills
            </a>
            <a class="iuc-hamburger-menu__item" class:iuc-menu__item--active={activeRoute === '/side-project'}
               href="/side-project"
               on:click={toggleMenu}>My Side
                Project</a>
            <a class="iuc-hamburger-menu__item" class:iuc-menu__item--active={activeRoute === '/employers'}
               href="/employers"
               on:click={toggleMenu}>My Employers</a>
            <a class="iuc-hamburger-menu__item" href="https://imanuel.ulbricht.design" target="_blank">
                My Design Samples
            </a>
            <a class="iuc-hamburger-menu__item" class:iuc-menu__item--active={activeRoute === '/about'} href="/about"
               on:click={toggleMenu}>About Me</a>
        </nav>
        <nav class="iuc-hamburger-menu__icon-bar" role="navigation">
            <a class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon" href="mailto:imanuel@ulbricht.codes"
               target="_blank" title="Send me an email">
                <Email />
            </a>
            <a class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
               href="https://www.xing.com/profile/Imanuel_Ulbricht/"
               target="_blank" title="Find me on Xing">
                <Xing />
            </a>
            <a class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon" href="https://www.behance.net/knerd"
               target="_blank" title="Find me on Bēhance">
                <Behance />
            </a>
            <a class="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon" href="https://github.com/DerKnerd"
               target="_blank" title="Find me on Github">
                <Github />
            </a>
        </nav>
    </div>
    <nav class="iuc-hamburger-menu__bottom" role="navigation">
        <a class="iuc-hamburger-menu__item" href="/imprint" on:click={toggleMenu}>Imprint</a>
    </nav>
</div>
<slot />
<footer aria-label="Footer" class="iuc-footer">
    <a class="iuc-footer__link" href="/imprint">Imprint</a>
    <a class="iuc-footer__link" href="/legal">Legal</a>
</footer>