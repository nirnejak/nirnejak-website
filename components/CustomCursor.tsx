"use client"
import * as React from "react"

import classNames from "utils/classNames"

const CustomCursor: React.FC = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    const updatePosition = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  React.useEffect(() => {
    const handleMouseOver = (): void => {
      setIsHovering(true)
    }
    const handleMouseOut = (): void => {
      setIsHovering(false)
    }

    const links = document.querySelectorAll("a, button, #bulb")
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver)
      link.addEventListener("mouseout", handleMouseOut)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver)
        link.removeEventListener("mouseout", handleMouseOut)
      })
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-50 transition-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate3d(-50%, -50%, 0)",
      }}
    >
      <div
        className={classNames(
          isHovering ? "size-8" : "size-5",
          "bg-black/80 transition-all ease-out rounded-full z-50"
        )}
      ></div>
    </div>
  )
}

export default CustomCursor
