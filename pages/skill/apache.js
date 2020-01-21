import React from 'react'
import Link from 'next/link'

import CouchDB from '../../assets/tools/couchdb.svg'
import Cassandra from '../../assets/tools/cassandra.svg'
import WebServer from '../../assets/tools/ApacheSoftwareFoundation.svg'
import Cordova from '../../assets/tools/cordova_512.png'
import Maven from '../../assets/tools/1280px-Maven_logo.png'
import Subversion from '../../assets/tools/Subversion_logo.svg'

export default function Apache() {
  return (
    <div className="iuc-grid" role="grid" aria-label="My Apache skills">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span aria-hidden className="iuc-grid__arrow" />
        </a>
      </Link>

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile" role="grid-cell" title="Apache CouchDB">
        <CouchDB aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="Apache Cassandra">
        <Cassandra aria-hidden />
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
      <div className="iuc-grid__tile" role="grid-cell" title="Apache Webserver">
        <WebServer aria-hidden />
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
      <div className="iuc-grid__tile" role="grid-cell" title="Apache Cordova">
        <img src={Cordova} alt="Cordova" aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="Apache Subversion">
        <Subversion aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" role="grid-cell" title="Apache Maven">
        <img src={Maven} alt="Apache Maven" aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
    </div>
  )
}
