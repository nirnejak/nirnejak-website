"use client"
import * as React from "react"

import useSound from "use-sound"

let timer: any = null

const InteractiveBulb: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  const [count, setCount] = React.useState(0)
  const [isBroken, setIsBroken] = React.useState(false)

  const [playOn] = useSound("/sounds/on.mp3")
  const [playOff] = useSound("/sounds/off.mp3")
  const [playBroken] = useSound("/sounds/break.mp3")

  const toggleBulb = (): void => {
    if (isSwitchOn) {
      playOff()
    } else {
      playOn()
    }
    setIsSwitchOn(!isSwitchOn)

    if (timer === null) {
      timer = setTimeout(() => {
        setCount(0)
        timer = null
      }, 1500)
    }

    setCount(count + 1)
    if (count > 5) {
      setIsBroken(true)
      playBroken()
    }
  }

  return (
    <div className="h-96 w-full rounded-lg bg-zinc-800">
      <div className="origin-top animate-swing">
        <div className="relative left-1/2 h-40 w-1 -translate-x-1/2 bg-black" />
        <div className="relative left-1/2 h-[20px] w-4 -translate-x-1/2 bg-zinc-500">
          <div
            className="relative right-px h-[2px] w-[18px] bg-zinc-400"
            style={{ top: 4 }}
          />
          <div
            className="relative right-px h-[2px] w-[18px] bg-zinc-400"
            style={{ top: 7 }}
          />
          <div
            className="relative right-px h-[2px] w-[18px] bg-zinc-400"
            style={{ top: 10 }}
          />
        </div>
        {isBroken ? (
          ""
        ) : (
          <div
            tabIndex={0}
            role={"checkbox"}
            aria-checked="false"
            aria-labelledby="Bulb"
            className="relative bottom-[2px] left-1/2 z-[-1] size-[40px] -translate-x-1/2 cursor-pointer rounded-full bg-zinc-700"
            style={
              isSwitchOn
                ? {
                    boxShadow: "0px 0px 300px 77px rgba(235, 209, 164, 1)",
                    backgroundColor: "rgba(226, 211, 161, 0.85)",
                  }
                : {}
            }
            onKeyUp={(e) => {
              e.key === "Enter" && toggleBulb()
            }}
            onClick={() => {
              toggleBulb()
            }}
          >
            {Array(5)
              .fill(1)
              .map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "5px / 2.5px",
                    border: "black solid 1px",
                    top: index * -3,
                  }}
                  className="relative left-[15px] h-[5px] w-[10px]"
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default InteractiveBulb
