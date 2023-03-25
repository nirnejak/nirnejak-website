import * as React from "react"

import classNames from "utils/classNames"

const Bulb: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  return (
    <div className="area fixed top-0 right-24">
      <div className="wire"></div>
      <div className="fixture">
        <div className="strip"></div>
        <div className="strip"></div>
        <div className="strip"></div>
      </div>
      <div
        tabIndex={0}
        role={"button"}
        className={classNames("bulb", isSwitchOn ? "on" : "")}
        onKeyUp={(e) => {
          e.key === "enter" && setIsSwitchOn(!isSwitchOn)
        }}
        onClick={() => {
          setIsSwitchOn(!isSwitchOn)
        }}
      >
        <div className="zig"></div>
        <div className="zig"></div>
        <div className="zig"></div>
      </div>
    </div>
  )
}

export default Bulb
