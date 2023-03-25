import * as React from "react"

import useSound from "use-sound"

import classNames from "utils/classNames"

const Bulb: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  const [playOn] = useSound("../sounds/on.mp3")
  const [playOff] = useSound("../sounds/off.mp3")

  return (
    <div className="area fixed top-0 right-24 hidden md:block">
      <div className="wire" />
      <div className="fixture">
        <div className="strip" />
        <div className="strip" />
        <div className="strip" />
      </div>
      <div
        tabIndex={0}
        role={"button"}
        className={classNames("bulb", isSwitchOn ? "on" : "")}
        onKeyUp={(e) => {
          e.key === "enter" && setIsSwitchOn(!isSwitchOn)
        }}
        onClick={() => {
          if (isSwitchOn) {
            playOff()
          } else {
            playOn()
          }
          setIsSwitchOn(!isSwitchOn)
        }}
      >
        <div className="zig" />
        <div className="zig" />
        <div className="zig" />
      </div>
    </div>
  )
}

export default Bulb
