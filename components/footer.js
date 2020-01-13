import React from 'react'
import Link from 'next/link'

import '../scss/footer.scss'

export default function Footer() {
  return (
    <footer className="iuc-footer">
      <Link href="/imprint">
        <a className="iuc-footer__link">Imprint</a>
      </Link>
    </footer>
  )
}
