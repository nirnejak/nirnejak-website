import React from "react"

import classNames from "utils/classNames"

interface Props {
  children: React.ReactNode
  className?: string
  size?: "narrow" | "normal" | "wide" | "ultrawide"
}

const Container: React.FC<Props> = ({
  children,
  className,
  size = "normal",
  ...restProps
}) => {
  const widthClass = React.useMemo(() => {
    switch (size) {
      case "narrow":
        return "max-w-[480px]"
      case "wide":
        return "max-w-[980px]"
      case "ultrawide":
        return "max-w-[1200px]"
      case "normal":
      default:
        return "max-w-[680px]"
    }
  }, [size])

  return (
    <div
      className={classNames("mx-auto px-4 md:px-0", widthClass, className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Container
