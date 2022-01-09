import Link from 'next/link'

const text = 'Hyperscale'
const separator = '//'
const links = [
	'https://www.hyperscalefund.com',
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
]

const Footer = () => (
	<div className="w-full py-8 bg-[#100528] flex flex-col-reverse md:justify-center items-center relative">
		<div className="flex md:absolute left-20">
			<Link href={links[0]}>
				<a>
					<div className="text-white">Home</div>
				</a>
			</Link>
			<div className="text-[#FEDB9E] mx-4">{separator}</div>
			<Link href={links[1]}>
				<a target="_blank">
					<div className="text-white">Twitter</div>
				</a>
			</Link>
			<div className="text-[#FEDB9E] mx-4">{separator}</div>
			<Link href={links[2]}>
				<a target="_blank">
					<div className="text-white">Discord</div>
				</a>
			</Link>
		</div>
		<div className="text-white text-xl mb-6 md:mb-0">{text}</div> 
	</div>
)

export default Footer
