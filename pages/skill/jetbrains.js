import Link from 'next/link'
import React from 'react'

import DataGrip from '../../assets/tools/datagrip-logo.svg'
import Goland from '../../assets/tools/goland-logo.svg'
import Webstorm from '../../assets/tools/webstorm-logo.svg'
import Kotlin from '../../assets/tools/kotlin-logo.svg'
import Rider from '../../assets/tools/rider-logo.svg'
import IntelliJ from '../../assets/tools/intellij-logo.svg'
import CLion from '../../assets/tools/icon_CLion.svg'
import PhpStorm from '../../assets/tools/phpstorm.svg'
import YouTrack from '../../assets/tools/youtrack-logo.svg'
import Resharper from '../../assets/tools/resharper-logo.svg'

export default function Jetbrains() {
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
        <DataGrip />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Goland />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile">
        <Webstorm />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Kotlin />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Rider />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile">
        <IntelliJ />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <CLion />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile">
        <YouTrack />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <PhpStorm />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Resharper />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
    </main>
  )
}
