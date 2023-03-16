import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import classNames from "utils/classNames"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  target?: "_blank" | "_self" | "_parent" | "_top" | string
}

const AppLink: React.FC<Props> = ({
  href,
  children,
  className,
  activeClassName,
  ...props
}) => {
  const router = useRouter()

  const isActive = React.useMemo(
    () => router.pathname === href,
    [href, router.pathname]
  )

  if (href.includes("http") || href.includes("mailto")) {
    return (
      <a
        href={href}
        className={classNames(
          className,
          "text-sm font-medium text-white hover:text-zinc-100",
          isActive && activeClassName
        )}
        {...props}
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
          "text-sm font-medium text-white hover:text-zinc-100",
          isActive && activeClassName
        )}
        {...props}
      >
        {children}
      </Link>
    )
  }
}

export default AppLink
