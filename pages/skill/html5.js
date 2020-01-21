import React from 'react'
import Link from 'next/link'

import Html5Shield from '../../assets/tools/HTML5-Logo.svg'
import Css3 from '../../assets/tools/css3-logo.svg'
import JavaScript from '../../assets/tools/javascript-js.svg'
import TypeScript from '../../assets/tools/typescript.svg'
import Webpack from '../../assets/tools/webpack.svg'
import Sass from '../../assets/tools/sass_logo.svg'
import Bootstrap from '../../assets/tools/bootstrap.svg'
import VueJs from '../../assets/tools/vuejs.svg'
import ReactLogo from '../../assets/tools/React-icon.svg'
import JQuery from '../../assets/tools/jquery.svg'
import Knockout from '../../assets/tools/knockout.svg'
import SemanticUi from '../../assets/tools/semantic-ui.svg'

export default function HTML5() {
  return (
    <main className="iuc-grid" role="grid" aria-label="My HTML5 skills">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span aria-hidden className="iuc-grid__arrow" />
        </a>
      </Link>

      <div className="iuc-grid__tile" role="grid-cell" title="KnockoutJS">
        <Knockout aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="HTML5">
        <Html5Shield aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="CSS3">
        <Css3 aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="SemanticUI">
        <SemanticUi aria-hidden />
      </div>

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty " />
      <div className="iuc-grid__tile" role="grid-cell" title="JavaScript">
        <JavaScript aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="SASS">
        <Sass aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="TypeScript">
        <TypeScript aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile" role="grid-cell" title="Webpack">
        <Webpack aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="React">
        <ReactLogo aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="Bootstrap">
        <Bootstrap aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="VueJS">
        <VueJs aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="jQuery">
        <JQuery aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--medium-hidden iuc-grid__tile--large-hidden" />
    </main>
  )
}
