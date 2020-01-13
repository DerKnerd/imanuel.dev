import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children, className, regex }) => {
  const router = useRouter()

  let childrenClassName = children.props.className || ''
  if (regex && regex.test(router.pathname)) {
    childrenClassName = `${childrenClassName} ${className}`
  } else if (router.pathname === href) {
    childrenClassName = `${childrenClassName} ${className}`
  }

  return <Link href={href}>{React.cloneElement(children, { className: childrenClassName })}</Link>
}
