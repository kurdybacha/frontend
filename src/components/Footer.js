import Link from 'next/link'
import links from '../lib/links'

const Footer = () => (
	<div className="w-full bg-[#160A2F] px-8">
		<div className="container mx-auto flex flex-wrap justify-between items-center py-8">
			<div className="w-full lg:w-1/3 flex justify-center lg:justify-start pb-8 lg:pb-0">
				<img src="/footer/Footer-logo.svg" className="w-40 lg:w-min" />
			</div>
			<div className="w-full lg:w-auto flex justify-evenly lg:justify-end pb-8 lg:pb-0 font-light text-white/70">
				<Link href={links.knowledgeBase}>
					<a className="mx-4" target="_blank">
						<div className="">FAQ</div>
					</a>
				</Link>
				<Link href={links.twitter}>
					<a className="mx-4" target="_blank">
						<div className="">Twitter</div>
					</a>
				</Link>
				<Link href={links.discord}>
					<a className="mx-4" target="_blank">
						<div className="">Discord</div>
					</a>
				</Link>
				<Link href={links.privacy}>
					<a className="mx-4 hidden lg:block">
						<div className="">Privacy Policy</div>
					</a>
				</Link>
				<Link href={links.terms}>
					<a className="mx-4 hidden lg:block">
						<div className="">Terms of Service</div>
					</a>
				</Link>
			</div>
			{/* Mobile only */}
			<div className="w-full flex justify-evenly lg:hidden text-xs text-white/70 mt-8">
				<Link href={links.privacy}>
					<a className="">
						<div className="">Privacy Policy</div>
					</a>
				</Link>
				<Link href={links.terms}>
					<a className="">
						<div className="">Terms of Service</div>
					</a>
				</Link>
			</div>
		</div>
	</div>
)

export default Footer
