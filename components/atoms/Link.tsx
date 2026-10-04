"use client"
import { Link } from "next-view-transitions"
import type * as React from "react"

import classNames from "@/utils/classNames"
import isExternal from "@/utils/isExternal"

interface Props {
  href: string
  children: React.ReactNode
  className?: string
  isFollowLink?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  target?: "_blank" | "_self" | "_parent" | "_top"
}

const AppLink: React.FC<Props> = ({
  href,
  children,
  className,
  isFollowLink,
  onClick,
  ...restProps
}) => {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={classNames("app-link", className)}
        onClick={onClick}
        rel={
          isFollowLink ? "noopener noreferrer" : "noopener noreferrer nofollow"
        }
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        href={href}
        className={classNames("app-link", className)}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </Link>
    )
  }
}

export default AppLink
