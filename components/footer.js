import React from 'react'
import Link from 'next/link'

import '../scss/footer.scss'

export default function Footer() {
  return (
    <footer aria-label="Footer" className="iuc-footer">
      <Link href="/imprint">
        <a className="iuc-footer__link">Imprint</a>
      </Link>
      <Link href="/legal">
        <a className="iuc-footer__link">Legal</a>
      </Link>
    </footer>
  )
}
