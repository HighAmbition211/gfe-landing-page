import AboutDappr from "@/components/NFT/about-dappr"
import FAQ from "@/components/NFT/faq"
import Introduction from "@/components/NFT/introduction"
import Roadmap from "@/components/NFT/roadmap"
import ServerHosting from "@/components/NFT/server-hosting"
import ContactUs from "@/components/common/contact-us"
import ScrollToTop from "@/components/common/scroll-to-top"

function page() {
  return (
    <>
      <Introduction />
      <AboutDappr />
      <ServerHosting />
      <Roadmap />
      <div className="bg-[url('/images/nft/bg2.png')] bg-cover bg-bottom px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FAQ />
        <ContactUs />
      </div>
      <ScrollToTop />
    </>
  )
}

export default page
