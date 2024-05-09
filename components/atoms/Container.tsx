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
  let widthClass = ""
  switch (size) {
    case "narrow":
      widthClass = "max-w-[480px]"
    case "wide":
      widthClass = "max-w-[980px]"
    case "ultrawide":
      widthClass = "max-w-[1200px]"
    case "normal":
    default:
      widthClass = "max-w-[680px]"
  }

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
