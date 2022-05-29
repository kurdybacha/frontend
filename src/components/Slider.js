import Link from "next/link"
import Ticker from "react-ticker"
import Countdown from "react-countdown"

const Slider = () => {
  const sponsorship = 1653687865827 + 172800 * 1.25 * 1000
  const investment = 1653687865827 + 2419200 * 1000

  return (
    <div className="bg-[#160A2F]">
      <Ticker speed={30}>
        {() => (
          <div className="flex">
            <div className="flex px-2 space-x-1">
              <h1 className="text-white whitespace-nowrap">
                Sponsorship Announcement
              </h1>
              <Countdown className="hs-gradient font-bold" date={sponsorship} />
            </div>
            <div className="flex px-2 space-x-1">
              <h1 className="text-white whitespace-nowrap">
                Initial Investment
              </h1>
              <Countdown className="hs-gradient font-bold" date={investment} />
            </div>
          </div>
        )}
      </Ticker>
    </div>
  )
}

export default Slider
