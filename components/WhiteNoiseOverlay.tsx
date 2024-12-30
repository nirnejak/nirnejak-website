"use client"
import * as React from "react"

interface Props {
  opacity?: number
}

const WhiteNoiseOverlay: React.FC<Props> = ({ opacity = 0.05 }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const { current: canvas } = canvasRef
    if (canvas === null) return

    const ctx = canvas.getContext("2d")
    if (ctx === null) return
    let animationFrameId = 0

    const resizeCanvas = (): void => {
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth
      canvas.height = innerHeight
    }

    const generateNoise = (): void => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const { data } = imageData

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value // Red
        data[i + 1] = value // Green
        data[i + 2] = value // Blue
        data[i + 3] = 255 // Alpha
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const animate = (): void => {
      generateNoise()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
        zIndex: 9999,
      }}
    />
  )
}

export default WhiteNoiseOverlay
