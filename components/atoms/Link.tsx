import * as React from "react"

import Link from "next/link"

import classNames from "utils/classNames"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  target?: "_blank" | "_self" | "_parent" | "_top" | string
}

const AppLink: React.FC<Props> = ({ href, children, className, ...props }) => {
  if (href.includes("http") || href.includes("mailto")) {
    return (
      <a
        className={classNames("text-sm font-medium text-white", className)}
        href={href}
        {...props}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        className={classNames("text-sm font-medium text-white", className)}
        href={href}
        {...props}
      >
        {children}
      </Link>
    )
  }
}

export default AppLink
