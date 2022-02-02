const paragraph1 = `Hyperscale is a fund that deploys ultra-fast and universal accessible capital. Crypto-native projects fill out a 15-minute application and receive an investment within a week. Crypto-native projects are democratizing access to opportunity around the world. By making crypto-native investments, we will tap into human potential around the world.`
const paragraph2 = `The internet economy will grow to replace our current economic system. As we progress, we will establish the standards that will underpin the new economy: Global investment, organizational, regulatory and contractual standards. Using these standards, we will deploy ultra-fast capital at a global scale.`
// const paragraph3 = `This economy can be visualized with a graph where the nodes are DAOs or contributors. Since blockchains are public we're able to use them to build this graph.  Nodes with a high number of relevant connections—centers of commerce—are indicative of value: their consumption and production volumes are high.`
// const paragraph4 = `We invest in the DAOs and contributors that have the potential to be well connected nodes in the graph.`
// const paragraph5 = `We're starting by investing in small projects that have the potential to become central nodes. Our initial focus is tooling DAOs (but we’re open to any DAO that’ll support the ecosystem) as they'll be well-connected nodes in this new economy.`
// const paragraph6 = `Our initial ecosystem—tooling DAOs—will use DAOs outside of the ecosystem. As a fund, we'll invest in these DAOs on the frontier & they'll join the ecosystem. When projects within the ecosystem are producers and consumers of the ecosystem an economy emerges. Projects can rapidly gain traction. As the economy grows everyone within the ecosystem does well.`
// const paragraph7 = `Founders don't just receive funding. They gain access to an ecosystem of DAOs to work with, a support network of founders, and the ecosystem's talent network. The Hyperscale ecosystem is ready to assist with top-tier developers, designers, governance experts, legal advisors, & much more! Contributors can solve problems for the new economy and are rewarded with tokens.`

const Section4 = () => (
	<div className="bg-[#160A2F] p-8 relative">
		<div className="container relative mx-auto bg-[#EBE8E3] rounded py-24 px-10 xl:px-32">
			<img src="/coins/token3.svg" className="absolute -translate-x-1/2 left-1/2 -top-16 lg:hidden" />
			<img src="/coins/token3.svg" className="absolute hidden lg:block ml-2 -top-24 left-24" />
			<h2 className="font-redrose text-5xl">Vision</h2>
			<div className="my-6">{paragraph1}</div>
			<div className="my-6">{paragraph2}</div>
			{/* <div className="my-6">{paragraph3}</div>
			<div className="my-6">{paragraph4}</div>
			<div className="my-6">{paragraph5}</div>
			<div className="my-6">{paragraph6}</div>
			<div className="">{paragraph7}</div> */}
		</div>
	</div>
)

export default Section4
