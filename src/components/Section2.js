import Link from "next/link"
import links from "../lib/links"

const text = "Hyperscale DAO helps projects build and grow their project."

const Section2 = () => (
  <div className="relative bg-[#160A2F]">
    <div className="bg-[#160A2F] md:px-6">
      <div className="container mx-auto relative bg-[#FEDB9E] py-24 rounded px-8 xl:px-16">
        <img
          src="/coins/token.svg"
          className="absolute w-40 -top-20 -translate-x-1/2 left-1/2 lg:hidden"
        />
        <img
          src="/coins/token.svg"
          className="absolute w-40 -top-20 left-28 ml-2 hidden lg:block"
        />
        <img
          src="/coins/token2.svg"
          className="absolute w-28 -bottom-20 -translate-x-1/2 left-1/2 lg:hidden"
        />
        <img
          src="/coins/token2.svg"
          className="absolute w-28 -bottom-20 mr-2 hidden lg:block lg:right-28"
        />
        <div className="flex flex-col justify-between items-center">
          <h2 className="font-redrose text-5xl text-center">
            Join the Hyperscale Ecosystem
          </h2>
          <div className="text-xl mt-4 text-center">{text}</div>
          <div className="flex justify-center lg:justify-between flex-wrap 2xl:px-16 my-16">
            <div className="md:max-w-2xl lg:w-[31%] offset-border text-center px-8 lg:px-4 xl:px-8 my-8 sm:w-11/12 bg-[#EBE8E3]">
              <h3 className="font-redrose text-3xl  mt-10 font-bold">
                Hyper Fast <br /> Funding
              </h3>
              <img
                className="py-8 w-1/2 sm:w-auto lg:w-2/3"
                src="/section2/4-Fast-funding.png"
              />
              <div className="text-lg lg:text-base xl:text-xl text-center px-2 mb-10">
                Projects receive up to $1M funding. They apply in 15 minutes and
                get a decision within a few days
              </div>
            </div>
            <div className="md:max-w-2xl lg:w-[31%] offset-border text-center px-8 lg:px-4 xl:px-8 my-8 sm:w-11/12 bg-[#EBE8E3]">
              <h3 className="font-redrose text-3xl  mt-10 font-bold">
                <span className="lg:hidden xl:inline">The</span> Hyperscale{" "}
                <br /> Community
              </h3>
              <img
                className="py-8 w-1/2 sm:w-auto lg:w-2/3"
                src="/section2/5-Community.png"
              />
              <div className="text-lg lg:text-base xl:text-xl text-center px-2 mb-10">
                Community of high-performing DAOs, founders, web3 experts, and
                like-minded peers
              </div>
            </div>
            <div className="md:max-w-2xl lg:w-[31%] offset-border text-center px-8 lg:px-4 xl:px-8 my-8 sm:w-11/12 bg-[#EBE8E3]">
              <h3 className="font-redrose text-3xl  mt-10 font-bold">
                The Talent <br /> Network
              </h3>
              <img
                className="py-8 w-1/2 sm:w-auto lg:w-2/3"
                src="/section2/6-Talent-network.png"
              />
              <div className="text-lg lg:text-base xl:text-xl text-center px-2 mb-10">
                Projects find top-tier developers, designers, governance
                experts, &#38; legal advisors
              </div>
            </div>
          </div>
          <Link href={links.discord}>
            <a target="_blank">
              <div className="offset-border border-black rounded bg-[#BAC4FA] py-2 px-6 text-lg font-semibold">
                Join the Discord
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Section2
