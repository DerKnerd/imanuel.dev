import React from 'react'
import Link from 'next/link'

import Fedora from '../../assets/tools/Fedora_logo_and_wordmark.svg'
import Ubuntu from '../../assets/tools/ubuntu_black-orange_hex.svg'
import Manjaro from '../../assets/tools/manjaro.svg'
import Vim from '../../assets/tools/Vimlogo.svg'
import Alpine from '../../assets/tools/Alpine_Linux.svg'
import CentOS from '../../assets/tools/centos-logo-light-vertical-rtm.svg'
import KDE from '../../assets/tools/kde-logo-blue-transparent-source.svg'
import Gnome from '../../assets/tools/Gnomelogo.svg'
import Bash from '../../assets/tools/bash.svg'

export default function Linux() {
  return (
    <div className="iuc-grid" role="grid" aria-label="My Linux skills">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span aria-hidden className="iuc-grid__arrow" />
        </a>
      </Link>

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile" title="Fedora">
        <Fedora aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="CentOS">
        <CentOS aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="KDE">
        <KDE aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Ubuntu">
        <Ubuntu aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Gnome">
        <Gnome aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile" title="Manjaro">
        <Manjaro aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Vim">
        <Vim aria-hidden />
      </div>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Bash">
        <Bash aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Alpine Linux">
        <Alpine aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
    </div>
  )
}
