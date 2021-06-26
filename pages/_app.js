import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import IconJpg from '../assets/icon.png'
import IconIco from '../assets/icon.ico'

import '../scss/side-project.scss'
import '../scss/grid.scss'
import '../scss/about.scss'
import '../scss/body.scss'
import '../scss/employer.scss'
import '../scss/imprint.scss'
import '../scss/footer.scss'
import '../scss/menu.scss'

export default class IucApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeStart', url => {
      fetch(`https://matomo.statistical.li/matomo.php?idsite=5&rec=1&url=${encodeURIComponent(location.href)}&rand=${Math.random()}&urlref=${encodeURIComponent(document.referrer)}`)
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={IconJpg} />
          <link rel="icon" type="image/jpeg" sizes="32x32" href={IconJpg} />
          <link rel="icon" type="image/jpeg" sizes="16x16" href={IconJpg} />
          <link rel="shortcut icon" href={IconIco} />
        </Head>
        <Menu />
        <main role="main" aria-label="Main content" className="iuc-container">
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    )
  }
}
