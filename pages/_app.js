import App from 'next/app'
import Router from 'next/router'
import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'

import '../scss/side-project.scss'
import '../scss/grid.scss'
import '../scss/about.scss'
import '../scss/body.scss'
import '../scss/employer.scss'
import '../scss/imprint.scss'

export default class IucApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeStart', url => {
      fetch(`https://matomo.ulbricht.codes/matomo.php?idsite=5&rec=1&url=${encodeURIComponent(location.href)}&rand=${Math.random()}&urlref=${encodeURIComponent(document.referrer)}`)
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Menu />
        <main role="main" aria-label="Main content" className="iuc-container">
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    )
  }
}
