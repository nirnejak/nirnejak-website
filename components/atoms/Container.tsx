import React from "react"

import classNames from "utils/classNames"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className, ...restProps }) => {
  return (
    <div
      className={classNames("mx-auto max-w-[800px]", className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Container
