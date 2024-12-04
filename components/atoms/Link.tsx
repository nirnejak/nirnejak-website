"use client"
import * as React from "react"

import { Link } from "next-view-transitions"

import classNames from "utils/classNames"

interface Props {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  onClick?: (e: any) => void
  target?: "_blank" | "_self" | "_parent" | "_top" // add 'string' as option here if using for frameset
}

const AppLink: React.FC<Props> = ({
  href,
  children,
  className,
  activeClassName,
  onClick,
  ...restProps
}) => {
  if (href.includes("http") || href.includes("mailto")) {
    return (
      <a
        href={href}
        className={classNames(className, "text-zinc-50 hover:text-zinc-100")}
        onClick={(e) => {
          if (onClick !== undefined) onClick(e)
        }}
        rel="noopener noreferrer nofollow"
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        href={href}
        className={classNames(className, "text-zinc-50 hover:text-zinc-100")}
        onClick={(e) => {
          if (onClick !== undefined) onClick(e)
        }}
        {...restProps}
      >
        {children}
      </Link>
    )
  }
}

export default AppLink
