import Link from 'next/link';
import Header from '../components/Header';

const text = 'Receive up to $1M in funding and the benefits of the Hyperscale ecosystem in a matter of days.'
const links = [
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
]

const Section1 = () => (
	<div className="bg-no-repeat bg-cover" style={{ backgroundImage : "url('./section1/background.svg')" }}>
		<Header />
		<div className="flex flex-col-reverse lg:flex-row justify-evenly items-center space-x-3 px-8 md:px-20 pt-16 pb-32 lg:py-24">
			<div className="flex flex-col max-w-3xl mt-12">
				<h1 className="font-redrose text-gray-100 font-bold text-6xl md:text-8xl">An ecosystem of <span className="hs-gradient">web3</span> projects</h1>
				<div className="text-white text-2xl my-12">{text}</div>
				<Link href={links[2]}>
					<a target="_blank">
						<div className="flex w-24 h-10 bg-[#BAC4FA] rounded-sm justify-center items-center font-semibold">
							Apply
						</div>
					</a>
				</Link>
			</div>
			<div className="mx-auto max-w-md md:min-w-0 md:max-w-lg lg:max-w-2xl">
				<img src="/section1/diagram.svg"/>
			</div>
		</div>
	</div>
)

export default Section1
