import '../scss/menu.scss'
import Link from './highlightedLink'
import MailIcon from '../assets/topbar/Email.svg'
import BehanceIcon from '../assets/topbar/Behance.svg'
import GithubIcon from '../assets/topbar/Github.svg'
import XingIcon from '../assets/topbar/xing-logo.svg'
import Head from 'next/head'
import React from 'react'

export default function Menu() {
  return (
    <div className="iuc-menu">
      <Head>
        <title>Imanuel Ulbricht</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <nav className="iuc-menu__left">
        <span className="iuc-menu__brand">Imanuel Ulbricht</span>
        <Link className="iuc-menu__item--active" href="/" regex={/$(\/skill\/.*|\/)^/}><a className="iuc-menu__item">My
          Skills</a></Link>
        <Link className="iuc-menu__item--active" href="/side-project"><a className="iuc-menu__item">My Side Project</a></Link>
        <Link className="iuc-menu__item--active" href="/employers" regex={/\/employers.*/}><a
          className="iuc-menu__item">My Employers</a></Link>
        <Link className="iuc-menu__item--active" href="/about"><a className="iuc-menu__item">About Me</a></Link>
      </nav>
      <nav className="iuc-menu__right">
        <a target="_blank" className="iuc-menu__item iuc-menu__item--icon" href="mailto:imanuel@ulbricht.codes">
          <MailIcon />
        </a>
        <a target="_blank" className="iuc-menu__item iuc-menu__item--icon"
           href="https://www.xing.com/profile/Imanuel_Ulbricht/">
          <XingIcon />
        </a>
        <a target="_blank" className="iuc-menu__item iuc-menu__item--icon" href="https://www.behance.net/knerd">
          <BehanceIcon />
        </a>
        <a target="_blank" className="iuc-menu__item iuc-menu__item--icon" href="https://github.com/DerKnerd">
          <GithubIcon />
        </a>
      </nav>
    </div>
  )
}
