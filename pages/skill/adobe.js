import React from 'react'

import CreativeCloudLogo from '../../assets/tools/adobe-creative-cloud-logo.svg'
import Bridge from '../../assets/tools/logo-adobe-bridge.svg'
import Illustrator from '../../assets/tools/logo-illustrator.svg'
import Lightroom from '../../assets/tools/logo-lightroom.svg'
import Photoshop from '../../assets/tools/logo-photoshop.svg'
import Xd from '../../assets/tools/xd-logo.svg'
import Acrobat from '../../assets/tools/AdobeAcrobat.svg'
import AdobeFonts from '../../assets/tools/AdobeFonts.svg'
import Link from 'next/link'

export default function Adobe() {
  return (
    <div className="iuc-grid" role="grid" aria-label="My Adobe skills">
      <Link href="/">
        <a aria-label="Back to My Skills" className="iuc-grid__back-button">
          <span className="iuc-grid__arrow" aria-hidden />
        </a>
      </Link>
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Bridge CC">
        <Bridge aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Illustrator CC">
        <Illustrator aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Acrobat DC">
        <Acrobat aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Creative Cloud CC">
        <CreativeCloudLogo aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Fonts">
        <AdobeFonts aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Lightroom CC">
        <Lightroom aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe Photoshop CC">
        <Photoshop aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />

      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty" />
      <div role="grid-cell" className="iuc-grid__tile" title="Adobe XD CC">
        <Xd aria-hidden />
      </div>
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden" />
      <div aria-hidden
           className="iuc-grid__tile iuc-grid__tile--empty iuc-grid__tile--extra-small-hidden iuc-grid__tile--small-hidden" />
    </div>
  )
}
