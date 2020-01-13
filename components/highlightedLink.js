import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children, className }) => {
  const router = useRouter()

  let childrenClassName = children.props.className || ''
  if (router.pathname === href) {
    childrenClassName = `${childrenClassName} ${className} `
  }

  return <Link href={href}>{React.cloneElement(children, { className: childrenClassName })}</Link>
}
