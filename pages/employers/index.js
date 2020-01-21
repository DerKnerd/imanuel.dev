import React from 'react'

import Arvato from '../../assets/employers/arvato.svg'
import Compra from '../../assets/employers/Compra.svg'
import ComputaCenter from '../../assets/employers/Computacenter_logo.svg'
import Lineas from '../../assets/employers/lineas.png'
import Ferchau from '../../assets/employers/FERCHAU.png'
import Mentana from '../../assets/employers/mentana.png'
import Link from 'next/link'

export default function Employers() {
  return (
    <main className="iuc-grid">
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <Link href="/employers/arvato">
        <a className="iuc-grid__tile">
          <Arvato />
        </a>
      </Link>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Link href="/employers/compra">
          <a className="iuc-grid__tile">
            <Compra />
          </a>
        </Link>
      </div>
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <Link href="/employers/computacenter">
        <a className="iuc-grid__tile">
          <ComputaCenter />
        </a>
      </Link>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile">
        <Link href="/employers/lineas">
          <a className="iuc-grid__tile">
            <img src={Lineas} alt="LINEAS Informationstechnik GmbH" />
          </a>
        </Link>
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Link href="/employers/ferchau">
          <a className="iuc-grid__tile">
            <img src={Ferchau} alt="Ferchau" />
          </a>
        </Link>
      </div>
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile">
        <Link href="/employers/mentana">
          <a className="iuc-grid__tile">
            <img src={Mentana} alt="Mentana-Claimsoft GmbH" />
          </a>
        </Link>
      </div>
      <div className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div
        className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
    </main>
  )
}
