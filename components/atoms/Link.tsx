import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/router"
import useSound from "use-sound"

import classNames from "utils/classNames"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  onClick?: (e) => void
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
  const router = useRouter()

  const [play] = useSound("../sounds/whoop.wav")

  const isActive = React.useMemo(
    () => router.asPath === href,
    [href, router.asPath]
  )

  if (href.includes("http") || href.includes("mailto")) {
    return (
      <a
        href={href}
        className={classNames(
          className,
          "text-white hover:text-zinc-100",
          isActive && activeClassName
        )}
        onClick={(e) => {
          play()
          if (onClick) onClick(e)
        }}
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
          "text-white hover:text-zinc-100",
          isActive && activeClassName
        )}
        onClick={(e) => {
          play()
          if (onClick) onClick(e)
        }}
        {...restProps}
      >
        {children}
      </Link>
    )
  }
}

export default AppLink
