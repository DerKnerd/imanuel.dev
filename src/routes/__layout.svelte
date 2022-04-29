<script>
  import Email from '../icons/Email.svelte';
  import Github from '../icons/Github.svelte';
  import Behance from '../icons/Behance.svelte';
  import Xing from '../icons/Xing.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let menuToggled = false;
  let activeRoute;

  let updateTracking = () => {};

  page.subscribe((data) => {
    const idx = data.url.pathname.indexOf('/', 1);
    if (idx === -1) {
      activeRoute = data.url.pathname;
    } else {
      activeRoute = data.url.pathname.substring(0, idx);
    }

    updateTracking(data.url.pathname);
  });

  onMount(() => {
    const _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['setCookieDomain', '*.imanuel.dev']);
    _paq.push(['setDoNotTrack', true]);
    _paq.push(['disableCookies']);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      const u = 'https://matomo.imanuel.dev/';
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '5']);
      const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript';
      g.async = true;
      g.src = u + 'matomo.js';
      s.parentNode.insertBefore(g, s);
    })();
    updateTracking = function(path) {
      if (window !== undefined && window._paq !== undefined) {
        window._paq.push(['setCustomUrl', path]);
        window._paq.push(['setDocumentTitle', document.title]);
        window._paq.push(['trackPageView']);
      }
    };
  });

  function toggleMenu() {
    menuToggled = !menuToggled;
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
        <a class="iuc-menu__item" href="https://design.imanuel.dev" target="_blank">My Design Samples</a>
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
               href="/side-project" on:click={toggleMenu}>My Side Project</a>
            <a class="iuc-hamburger-menu__item" class:iuc-menu__item--active={activeRoute === '/employers'}
               href="/employers" on:click={toggleMenu}>My Employers</a>
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
<div class="iuc-container">
    <slot />
</div>
<footer aria-label="Footer" class="iuc-footer">
    <a class="iuc-footer__link" href="/imprint">Imprint</a>
    <a class="iuc-footer__link" href="/legal">Legal</a>
</footer>
<noscript><p><img alt="" src="//matomo.imanuel.dev/matomo.php?idsite=5&amp;rec=1" style="border:0;" /></p>
</noscript>