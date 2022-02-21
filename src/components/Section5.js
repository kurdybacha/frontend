import Link from "next/link"
import links from "../lib/links"

const text =
  "Receive up to $1M funding. Apply in 15 minutes and you’ll recieve a decision within a few days"

const Section5 = () => (
  <div
    className="bg-no-repeat bg-cover"
    style={{ backgroundImage: "url('/section5/14-Final-section-BG.jpg')" }}
  >
    <div className="container mx-auto flex flex-col justify-center items-center py-12 xl:py-40 relative">
      <img
        src="/section5/Stars-left.svg"
        className="hidden md:block md:absolute left-0"
      />
      <img
        src="/section5/Stars-right.svg"
        className="hidden md:block md:absolute right-0"
      />
      <img
        src="/coins/token5.svg"
        className="lg:absolute -top-12 pb-12 md:top-0 md:right-0"
      />
      <h2 className="font-redrose text-gray-100 text-4xl font-bold">
        Apply to Hyperscale
      </h2>
      <div className="text-white text-xl my-12 text-center w-96">{text}</div>
      <Link href={links.apply}>
        <a target="_blank">
          <div className="offset-border flex px-6 py-2 bg-[#FEDB9E] rounded justify-center items-center font-semibold">
            Apply to Hyperscale
          </div>
        </a>
      </Link>
      <div className="w-full px-8 flex justify-end md:hidden">
        <img src="/section5/Stars-right.svg" className="" />
      </div>
    </div>
  </div>
)

export default Section5
