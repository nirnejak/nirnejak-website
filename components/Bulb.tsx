import * as React from "react"

import useSound from "use-sound"

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
        <div className="relative top-1 right-[1px] h-[2px] w-[18px] bg-zinc-400" />
        <div
          className="relative top-1 right-[1px] h-[2px] w-[18px] bg-zinc-400"
          style={{ top: 2 }}
        />
        <div
          className="relative top-1 right-[1px] h-[2px] w-[18px] bg-zinc-400"
          style={{ top: 10 }}
        />
      </div>
      {isBroken ? (
        ""
      ) : (
        <div
          tabIndex={0}
          role={"button"}
          className="relative left-[80px] bottom-[2px] z-[-1] h-[40px] w-[40px] cursor-pointer rounded-full bg-zinc-700"
          style={
            isSwitchOn
              ? {
                  boxShadow: "0px 0px 300px 77px rgba(235, 209, 164, 1)",
                  backgroundColor: "rgba(226, 211, 161, 0.85)",
                }
              : {}
          }
          onKeyUp={(e) => {
            e.key === "enter" && setIsSwitchOn(!isSwitchOn)
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
                className="relative left-[14px] h-[5px] w-[10px]"
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default Bulb
