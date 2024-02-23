<footer aria-label="Footer" class="iuc-footer">
  <a class="iuc-footer__link" href="/imprint">Impressum</a>
  <a class="iuc-footer__link" href="/legal">Rechtliches</a>
</footer>

<style>
  .iuc-footer {
    border-top: 0.125rem solid var(--primary-color);
    box-sizing: border-box;
    height: 4.25rem;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    bottom: 0;
    background: var(--white);
  }

  @media screen and (max-width: 1023px) {
    .iuc-footer {
      display: none;
    }
  }

  .iuc-footer__link {
    font-size: 1.5rem;
    color: var(--primary-color);
    text-decoration: none;
    margin-right: 2rem;
    font-family: var(--font-family-normal);
    font-weight: var(--font-weight-light);
  }
</style>
