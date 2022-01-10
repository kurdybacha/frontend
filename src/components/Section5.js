import Link from 'next/link'

const text = 'Receive up to $1M from. Apply in 15 minutes and you’ll recieve a decision in a few days'
const links = ['https://airtable.com/shrLFCXD7BQXUg97K']

const Section5 = () => (
	<div
		className="bg-no-repeat bg-cover flex flex-col justify-center items-center py-40 relative"
		style={{ backgroundImage: "url('/section5/bg.jpeg')" }}
	>
		<img src="/coins/token5.svg" className="absolute -top-10 right-24" />
		<img src="/section5/header.svg" />
		<div className="text-white text-xl my-12 text-center w-96">{text}</div>
		<Link href={links[0]}>
			<a target="_blank">
				<div className="flex w-52 h-10 bg-[#FEDB9E] rounded-sm justify-center items-center font-semibold">
					Apply to Hyperscale
				</div>
			</a>
		</Link>
	</div>
)

export default Section5
