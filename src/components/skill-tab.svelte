<script>
  export let title = '';
  export let toolName = '';
  export let alt = '';
  export let src = '';
  export let active = false;
</script>

<a aria-label={title} class="iuc-tab__item" class:iuc-tab__item--active={active} href={`/skills/${toolName}`}
   title={title}>
  <img alt={alt} aria-hidden="true" src={src} />
</a>

<style>
  .iuc-tab__item {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;

    &:hover {
      opacity: 0.8;
    }
  }

  .iuc-tab__item img {
    width: auto;
    height: 6rem;
    object-fit: scale-down;
  }

  .iuc-tab__item--active {
    opacity: 1;
    position: relative;

    &:hover {
      opacity: 1;
    }

    &::after {
      content: '';
      background: var(--primary-color);
      height: 0.25rem;
      width: 6rem;
      position: absolute;
      bottom: -2.25rem;
      border-radius: 0.25rem;
    }
  }

  @media screen and (min-width: 2560px) {
    .iuc-tab__item img {
      height: 8rem;
    }

    .iuc-tab__item--active::after {
      width: 8rem;
    }
  }

  @media screen and (max-width: 1919px) {
    .iuc-tab__item img {
      height: 4rem;
    }

    .iuc-tab__item--active::after {
      width: 4rem;
    }
  }
</style>
