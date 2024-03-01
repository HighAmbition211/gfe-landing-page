import CommunitySection from "@/components/common/community"
import ScrollToTop from "@/components/common/scroll-to-top"
import AdvantagesSection from "@/components/home/advantages"
import CalculatorSection from "@/components/home/calculator"
import FaqSection from "@/components/home/faq"
import HomeSection from "@/components/home/intro"
import PartnersSection from "@/components/home/partnersSection"
import SliderSection from "@/components/home/slider"
import SpecsSection from "@/components/home/specs"

function IndexPage() {
  return (
    <>
      <HomeSection />
      <SliderSection />
      <SpecsSection />
      <AdvantagesSection />
      <CalculatorSection />
      <PartnersSection />
      <div className="space-y-10 bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px]">
        <FaqSection />
        <CommunitySection />
      </div>
      <ScrollToTop />
    </>
  )
}
// export default IndexPage
export default IndexPage