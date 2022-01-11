import Link from 'next/link';
import Header from '../components/Header';

const text = 'Receive funding & join the ecosystem in <1W'
const links = [
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
]

const Section1 = () => (
	<div className="bg-no-repeat bg-cover bg-[#160A2F]" style={{ backgroundImage: "url('/section1/1-hero-BG.jpg')" }}>
		<Header />
		<div className="flex items-center justify-evenly py-32 px-8">
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
				<img src="/section1/2-Hero-image.png" className="md:max-w-md lg:max-w-lg"/>
			</div>
		</div>
		</div>
)

export default Section1
