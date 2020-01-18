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
    <div className="iuc-grid" role="grid">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span aria-hidden className="iuc-grid__arrow" />
        </a>
      </Link>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains DataGrip">
        <DataGrip aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains GoLand">
        <Goland aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains Webstorm">
        <Webstorm aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Kotlin">
        <Kotlin aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains Rider">
        <Rider aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div role="grid-cell" className="iuc-grid__tile">
        <IntelliJ aria-hidden />
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains CLion">
        <CLion aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains YouTrack">
        <YouTrack aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Jetbrains PhpStorm">
        <PhpStorm aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Jetbrains ReSharper Ultimate">
        <Resharper aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
    </div>
  )
}
