"use client"
import * as React from "react"

import Link from "next/link"
import useSound from "use-sound"

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
  const [play] = useSound("../sounds/whoop.wav")

  if (href.includes("http") || href.includes("mailto")) {
    return (
      <a
        href={href}
        className={classNames(
          className,
          "text-zinc-800 hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-100"
        )}
        onClick={(e) => {
          play()
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
        className={classNames(
          className,
          "text-zinc-800 hover:text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-100"
        )}
        onClick={(e) => {
          play()
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
