import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import fs from "fs"
// components
import Header from "../components/Header"
import Footer from "../components/Footer"

export async function getStaticProps() {
  const terms = fs.readFileSync("src/copy/terms.md", "utf8")
  const matterResult = matter(terms)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const termsHtml = processedContent.toString()

  return {
    props: {
      termsHtml,
    },
  }
}

const Terms = ({ termsHtml }) => (
  <div>
    <div className="bg-no-repeat bg-cover bg-[#160A2F] pb-16 px-6 md:px-10">
      <Header />
      <div className="bg-[#160A2F] md:p-8 relative">
        <div className="container mx-auto pt-8 xl:px-32">
          <div className="container mx-auto bg-[#EBE8E3] rounded py-24 px-4 sm:px-10 xl:px-32">
            <h2 className="font-redrose text-5xl pb-12">Terms of Use</h2>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: termsHtml }}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Terms
