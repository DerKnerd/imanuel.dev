import React from 'react'

import CreativeCloudLogo from '../../assets/tools/adobe-creative-cloud-logo.svg'
import Bridge from '../../assets/tools/logo-adobe-bridge.svg'
import Illustrator from '../../assets/tools/logo-illustrator.svg'
import Lightroom from '../../assets/tools/logo-lightroom.svg'
import Photoshop from '../../assets/tools/logo-photoshop.svg'
import Xd from '../../assets/tools/xd-logo.svg'
import Link from 'next/link'

export default function Adobe() {
  return (
    <main className="iuc-grid">
      <Link href="/">
        <a className="iuc-grid__back-button">
          <span className="iuc-grid__arrow" />
        </a>
      </Link>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile">
        <Bridge />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Illustrator />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <CreativeCloudLogo />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile">
        <Lightroom />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Photoshop />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Xd />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
    </main>
  )
}
