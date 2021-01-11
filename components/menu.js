import Link from './highlightedLink'
import MailIcon from '../assets/topbar/Email.svg'
import BehanceIcon from '../assets/topbar/Behance.svg'
import GithubIcon from '../assets/topbar/Github.svg'
import XingIcon from '../assets/topbar/xing-logo.svg'
import Head from 'next/head'
import React from 'react'

export default class Menu extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = { menuToggled: false }
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled }, () => {
      document.body.classList.toggle('iuc-menu--open')
    })
  }

  render() {
    return (
      <>
        <div className="iuc-menu" role="navigation" aria-label="Page menu">
          <Head>
            <title>Imanuel Ulbricht</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          </Head>
          <nav className="iuc-menu__left" role="navigation" aria-label="Main Menu">
            <span className="iuc-menu__brand">Imanuel Ulbricht</span>
            <button onClick={() => this.toggleMenu()}
                    className={'iuc-menu__hamburger-button' + (this.state.menuToggled ? ' iuc-menu__hamburger-button--open' : '')}>
              <span className="iuc-menu__hamburger-bar" />
              <span className="iuc-menu__hamburger-bar" />
            </button>
            <Link className="iuc-menu__item--active" href="/" regex={/^(\/skill\/.*|\/)$/}>
              <a className="iuc-menu__item">My Skills</a>
            </Link>
            <Link className="iuc-menu__item--active" href="/side-project">
              <a className="iuc-menu__item">My Side Project</a>
            </Link>
            <Link className="iuc-menu__item--active" href="/employers" regex={/\/employers.*/}>
              <a className="iuc-menu__item">My Employers</a>
            </Link>
            <a href="https://imanuel.ulbricht.design" className="iuc-menu__item" target="_blank">My Design Samples</a>
            <Link className="iuc-menu__item--active" href="/about">
              <a className="iuc-menu__item">About Me</a>
            </Link>
          </nav>
          <nav className="iuc-menu__icon-bar" role="navigation" aria-label="Social icon menu">
            <a target="_blank" className="iuc-menu__item iuc-menu__item--icon"
               href="mailto:imanuel@ulbricht.codes" title="Send me an email">
              <MailIcon aria-hidden />
            </a>
            <a target="_blank" className="iuc-menu__item iuc-menu__item--icon"
               href="https://www.xing.com/profile/Imanuel_Ulbricht/" title="Find me on Xing">
              <XingIcon aria-hidden />
            </a>
            <a target="_blank" className="iuc-menu__item iuc-menu__item--icon"
               href="https://www.behance.net/knerd" title="Find me on Bēhance">
              <BehanceIcon aria-hidden />
            </a>
            <a target="_blank" className="iuc-menu__item iuc-menu__item--icon"
               href="https://github.com/DerKnerd" title="Find me on Github">
              <GithubIcon aria-hidden />
            </a>
          </nav>
        </div>
        <div role="menu" className={'iuc-hamburger-menu' + (this.state.menuToggled ? ' iuc-hamburger-menu--open' : '')}>
          <div className="iuc-hamburger-menu__top">
            <nav className="iuc-hamburger-menu__links" role="navigation">
              <Link className="iuc-hamburger-menu__item--active" href="/" regex={/$(\/skill\/.*|\/)^/}>
                <a onClick={() => this.toggleMenu()} className="iuc-hamburger-menu__item">
                  My Skills
                </a>
              </Link>
              <Link className="iuc-hamburger-menu__item--active" href="/side-project">
                <a onClick={() => this.toggleMenu()} className="iuc-hamburger-menu__item">My Side Project</a>
              </Link>
              <Link className="iuc-hamburger-menu__item--active" href="/employers" regex={/\/employers.*/}>
                <a onClick={() => this.toggleMenu()} className="iuc-hamburger-menu__item">My Employers</a>
              </Link>
              <a href="https://imanuel.ulbricht.design" className="iuc-hamburger-menu__item" target="_blank">
                My Design Samples
              </a>
              <Link className="iuc-hamburger-menu__item--active" href="/about">
                <a onClick={() => this.toggleMenu()} className="iuc-hamburger-menu__item">About Me</a>
              </Link>
            </nav>
            <nav className="iuc-hamburger-menu__icon-bar" role="navigation">
              <a target="_blank" className="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
                 href="mailto:imanuel@ulbricht.codes" title="Send me an email">
                <MailIcon aria-hidden />
              </a>
              <a target="_blank" className="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
                 href="https://www.xing.com/profile/Imanuel_Ulbricht/" title="Find me on Xing">
                <XingIcon aria-hidden />
              </a>
              <a target="_blank" className="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
                 href="https://www.behance.net/knerd" title="Find me on Bēhance">
                <BehanceIcon aria-hidden />
              </a>
              <a target="_blank" className="iuc-hamburger-menu__item iuc-hamburger-menu__item--icon"
                 href="https://github.com/DerKnerd" title="Find me on Github">
                <GithubIcon aria-hidden />
              </a>
            </nav>
          </div>
          <nav className="iuc-hamburger-menu__bottom" role="navigation">
            <Link href="/imprint">
              <a onClick={() => this.toggleMenu()} className="iuc-hamburger-menu__item">Imprint</a>
            </Link>
          </nav>
        </div>
      </>
    )
  }
}
