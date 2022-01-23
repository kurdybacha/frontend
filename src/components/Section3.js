const text = 'We get to a decision fast so you can focus on execution.'
const ampersand = '&'

const Section3 = () => (
	<div className="bg-[#160A2F] py-32 px-8">
		<div className="flex flex-col justify-center items-center">
			<div className="my-8">
				<h2 className="font-redrose text-5xl text-center  text-gray-100">Application Process</h2>
			</div>
			<div className="text-white text-xl text-center">{text}</div>
		</div>
		<div className="container mx-auto flex flex-wrap justify-center lg:justify-between space-x-5 pt-14 md:pt-28">
			<div className="max-w-sm lg:max-w-lg xl:max-w-2xl">
				<img className="w-1/2 sm:w-full ml-auto mr-auto" src="/section3/2-Hero-image.png" />
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex items-center my-4 md:my-8 justify-between mr-3">
					<div className="text-8xl font-redrose text-gray-100">1.</div>
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">APPLY</div>
						<div className="text-white">In just 15 minutes</div>
					</div>
				</div>
				<div className="flex items-center my-8 justify-between mr-3">
					<div className="text-8xl font-redrose text-gray-100">2.</div>
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">REVIEW {ampersand} ASYNC INTERVIEW</div>
						<div className="text-white">We review your application and progress it if it excites us.</div>
					</div>
				</div>
				<div className="flex items-center my-8 justify-between mr-3">
					<div className="text-8xl font-redrose text-gray-100">3.</div>
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">CALL</div>
						<div className="text-white">A 15 minute call with core founders and members.</div>
					</div>
				</div>
				<div className="flex items-center my-8 justify-between mr-3">
					<div className="text-8xl font-redrose text-gray-100 ">4.</div>
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">FUNDING</div>
						<div className="text-white">
							You&apos;re funded! Welcome to the Hyperscale ecosystem! Enjoy the community and all the
							tools we&apos;re building for you.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Section3
