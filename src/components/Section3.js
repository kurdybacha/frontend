const text = 'We get to a decision fast so you can focus on execution.'
const ampersand = '&'

const Section3 = () => (
	<div className="bg-[#160A2F] py-32">
		<div className="flex flex-col justify-center items-center">
			<div className="flex bg-white w-48 h-10 rounded-sm justify-center items-center font-semibold">
				Application Process
			</div>
			<div className="my-8">
				<img src="/section3/header.svg" />
			</div>
			<div className="text-white text-2xl">{text}</div>
		</div>
		<div className="flex justify-evenly py-28">
			<img src="/section3/diagram.svg" />
			<div className="flex flex-col">
				<div className="flex items-center my-8">
					<img src="/section3/apply.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">APPLY</div>
						<div className="text-white">In just 15 minutes</div>
					</div>
				</div>
				<div className="flex items-center my-8">
					<img src="/section3/block.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">REVIEW</div>
						<div className="text-white">We're reviewing your application for setting you for the next stage.</div>
					</div>
				</div>
				<div className="flex items-center my-8">
					<img src="/section3/call.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">CALL</div>
						<div className="text-white">A 15 minute call with founders and core members.</div>
					</div>
				</div>
				<div className="flex items-center my-8">
					<img src="/section3/logo.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">FUNDING</div>
						<div className="text-white">
						Now you're in the Hyperscale family! Enjoy the community and all the tools we're building for you.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Section3
