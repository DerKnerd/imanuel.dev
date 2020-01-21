import React from 'react'

import Link from 'next/link'
import Yarn from '../../assets/tools/yarn.svg'
import Npm from '../../assets/tools/npm-node-package-manager.svg'
import NodeJS from '../../assets/tools/nodejs.svg'
import ExpressJS from '../../assets/tools/expressjs-icon.svg'
import Gulp from '../../assets/tools/gulp.svg'
import TypeScript from '../../assets/tools/typescript.svg'

export default function Node() {
  return (
    <div className="iuc-grid" role="grid" aria-label="My nodeJS skills">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span aria-hidden className="iuc-grid__arrow" />
        </a>
      </Link>

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div role="grid-cell" className="iuc-grid__tile" title="Yarn">
        <Yarn aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="NPM">
        <Npm aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="NodeJS">
        <NodeJS aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div role="grid-cell" className="iuc-grid__tile" title="express.js">
        <ExpressJS aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="gulp">
        <Gulp aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="TypeScript">
        <TypeScript aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
    </div>
  )
}
