import * as React from "react"

import useSound from "use-sound"

import classNames from "utils/classNames"

const Bulb: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  const [count, setCount] = React.useState(0)
  const [isBroken, setIsBroken] = React.useState(false)
  const [timer, setTimer] = React.useState<any>(null)

  const [playOn] = useSound("../sounds/on.mp3")
  const [playOff] = useSound("../sounds/off.mp3")
  const [playBroken] = useSound("../sounds/break.mp3")

  const toggleBulb = (): void => {
    if (isSwitchOn) {
      playOff()
    } else {
      playOn()
    }
    setIsSwitchOn(!isSwitchOn)

    if (timer === null) {
      setTimer(
        setTimeout(() => {
          setCount((oldCount) => 0)
        }, 1000)
      )
    }

    setCount(count + 1)
    if (count > 5) {
      setIsBroken(true)
      playBroken()
    }
  }

  return (
    <div className="fixed top-0 right-24 hidden h-[500px] w-52 origin-top animate-swing md:block">
      <div className="relative left-[98px] h-[200px] w-1 bg-black" />
      <div className="relative left-[92px] h-[20px] w-4 bg-zinc-500">
        <div className="strip" />
        <div className="strip" />
        <div className="strip" />
      </div>
      {isBroken ? (
        ""
      ) : (
        <div
          tabIndex={0}
          role={"button"}
          className={classNames("bulb", isSwitchOn ? "on" : "")}
          onKeyUp={(e) => {
            e.key === "enter" && setIsSwitchOn(!isSwitchOn)
          }}
          onClick={() => {
            toggleBulb()
          }}
        >
          <div className="zig" />
          <div className="zig" />
          <div className="zig" />
        </div>
      )}
    </div>
  )
}

export default Bulb
