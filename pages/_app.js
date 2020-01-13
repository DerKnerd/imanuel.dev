import App from 'next/app'
import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'

import '../scss/side-project.scss'
import '../scss/grid.scss'
import '../scss/about.scss'
import '../scss/body.scss'
import '../scss/employer.scss'

export default class IucApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Menu />
        <div className="iuc-container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    )
  }
}
