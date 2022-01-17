import Link from 'next/link'

const text = 'Hyperscale'
const separator = '//'
const links = [
	'https://www.hyperscalefund.com',
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
	'/privacy',
	'/terms'
]

const Footer = () => (
	<div className="w-full bg-[#100528] px-8">
		<div className="container mx-auto flex flex-row flex-wrap items-center py-8 relative">			
			<div className="w-full lg:w-1/2">
				<img src="/footer/Footer-logo.svg" />
			</div> 
			<div className="w-full lg:w-1/2 flex justify-centerfont-light text-white/70">
				<Link href={links[0]}>
					<a>
						<div className="">FAQ</div>
					</a>
				</Link>
				<div className="text-[#FEDB9E] mx-4"></div>
				<Link href={links[1]}>
					<a target="_blank">
						<div className="">Twitter</div>
					</a>
				</Link>
				<div className="text-[#FEDB9E] mx-4"></div>
				<Link href={links[2]}>
					<a target="_blank">
						<div className="">Discord</div>
					</a>
				</Link>
				<div className="text-[#FEDB9E] mx-4"></div>
				<Link href={links[4]}>
					<a>
						<div className="">Privacy Policy</div>
					</a>
				</Link>
				<div className="text-[#FEDB9E] mx-4"></div>
				<Link href={links[5]}>
					<a>
						<div className="">Terms of Service</div>
					</a>
				</Link>
			</div>
		</div>
	</div>
)

export default Footer
