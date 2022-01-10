import Link from 'next/link'

const text = 'Receive funding & join the ecosystem in <1W'
const links = [
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
]

const Section1 = () => (
	<div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('/section1/bg1.jpeg')" }}>
		<div className="flex pt-4 justify-between px-20">
			<div className="flex items-center">
				<img src="/logo.svg" width="60" />
				<div className="text-white text-3xl font-semibold ml-4">Hyperscale</div>
			</div>
			<div className="flex items-center">
				<Link href={links[0]}>
					<a target="_blank">
						<div className="text-white mr-16">Twitter</div>
					</a>
				</Link>
				<Link href={links[1]}>
					<a target="_blank">
						<div className="text-white mr-16">Discord</div>
					</a>
				</Link>
				<Link href={links[2]}>
					<a target="_blank">
						<div className="flex w-24 h-10 bg-[#BAC4FA] rounded-sm justify-center items-center font-semibold">
							Apply
						</div>
					</a>
				</Link>
			</div>
		</div>
		<div className="flex items-center justify-evenly py-32">
			<div className="flex flex-col">
				<img src="/section1/title.svg" />
				<div className="text-white text-2xl my-12">{text}</div>
				<Link href={links[2]}>
					<a target="_blank">
						<div className="flex w-24 h-10 bg-[#BAC4FA] rounded-sm justify-center items-center font-semibold">
							Apply
						</div>
					</a>
				</Link>
			</div>
			<div>
				<img src="/section1/info.svg" />
			</div>
		</div>
	</div>
)

export default Section1
