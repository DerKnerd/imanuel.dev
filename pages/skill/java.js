import React from 'react'
import Link from 'next/link'

import Kotlin from '../../assets/tools/kotlin-logo.svg'
import Vertx from '../../assets/tools/vertx-logo.svg'
import Hibernate from '../../assets/tools/hibernate.svg'
import Spring from '../../assets/tools/spring.svg'
import Wicket from '../../assets/tools/wicket.svg'
import Android from '../../assets/tools/Androidrobot.svg'

export default function Java() {
  return (
    <div className="iuc-grid" role="grid" aria-label="My Java skills">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span aria-hidden className="iuc-grid__arrow" />
        </a>
      </Link>

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--small-hidden" />
      <div className="iuc-grid__tile" title="Kotlin">
        <Kotlin aria-hidden />
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
      <div className="iuc-grid__tile" title="vert.x">
        <Vertx aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div className="iuc-grid__tile" title="Hibernate">
        <Hibernate aria-hidden />
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
      <div className="iuc-grid__tile" title="Apache Wicket">
        <Wicket aria-hidden />
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
      <div className="iuc-grid__tile" title="Spring">
        <Spring aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--medium-hidden iuc-grid__tile--large-hidden iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--medium-hidden iuc-grid__tile--large-hidden iuc-grid__tile--extra-small-hidden" />
      <div className="iuc-grid__tile" title="Android">
        <Android aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
    </div>
  )
}
