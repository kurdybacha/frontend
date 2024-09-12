const text =
  "Have or know of a great builder community? We'd love to hear from you!"
const ampersand = "&"
const apostrophe = "'"

const Section3 = () => (
  <div className="bg-[#160A2F] py-32 px-8">
    <div className="flex flex-col justify-center items-center">
      <div className="my-8">
        <h2 className="font-redrose text-5xl text-center  text-gray-100">
          Join the Revolution
        </h2>
      </div>
      <div className="text-white text-xl text-center">{text}</div>
    </div>
    <div className="container mx-auto flex flex-wrap items-center justify-center xl:px-32 lg:justify-between pt-14 lg:pt-28">
      <div className="hidden lg:block lg:w-[45%] items-center">
        <img
          className="mx-auto max-w-md xl:max-w-lg"
          src="/section3/2-Hero-image.png"
        />
      </div>
      <div className="flex flex-col lg:w-[45%] justify-center items-center">
        <div className="flex items-center my-4 md:my-8 justify-between">
          <div className="text-8xl w-16 text-center font-redrose text-[#BAC4FA]">
            1
          </div>
          <div className="flex flex-col ml-8 w-72">
            <div className="text-[#BAC4FA] font-bold">REACH OUT</div>
            <div className="text-white">
              Email{" "}
              <span className="hs-gradient">apply@hyperscalefund.com</span> and
              explain why the group is promising. Please attach any useful
              information (deck, website, social media, etc).
            </div>
          </div>
        </div>
        <div className="flex items-center my-8 justify-between">
          <div className="text-8xl w-16 text-center font-redrose text-[#BAC4FA]">
            2
          </div>
          <div className="flex flex-col ml-8 w-72">
            <div className="text-[#BAC4FA] font-bold">CALL</div>
            <div className="text-white">
              We{apostrophe}d like to know more about the group. We
              {apostrophe}ll ask questions and explore how we can assist.
            </div>
          </div>
        </div>
        <div className="flex items-center my-8 justify-between">
          <div className="text-8xl w-16 text-center font-redrose text-[#BAC4FA]">
            3
          </div>
          <div className="flex flex-col ml-8 w-72">
            <div className="text-[#BAC4FA] font-bold">GRANT</div>
            <div className="text-white">You{apostrophe}ll receive crypto!</div>
          </div>
        </div>
        {/* <div className="flex items-center my-8 justify-between">
          <div className="text-8xl w-16 text-center font-redrose text-[#BAC4FA]">
            4
          </div>
          <div className="flex flex-col ml-8 w-72">
            <div className="text-[#BAC4FA] font-bold">FUNDING</div>
            <div className="text-white">
              You{apostrophe}re funded! Welcome to the Hyperscale ecosystem! Enjoy the
              community and all the tools we&apos;re building for you.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
)

export default Section3
