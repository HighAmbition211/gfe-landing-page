import AdvantagesSection from "@/components/home/advantages"
import CalculatorSection from "@/components/home/calculator"
import CommunitySection from "@/components/home/community"
import FaqSection from "@/components/home/faq"
import HomeSection from "@/components/home/intro"
import PartnersSection from "@/components/home/partnersSection"
import SliderSection from "@/components/home/slider"
import SpecsSection from "@/components/home/specs"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-4 pb-8">
      <div>
        <HomeSection />
        <SliderSection />
        <SpecsSection />
        <AdvantagesSection />
        <CalculatorSection />
        <PartnersSection />
      </div>
      <div className="bg-[url('/images/nft/bg2.png')] bg-cover px-5 pb-[300px] md:pb-[150px] lg:px-24">
        <FaqSection />
        <CommunitySection />
      </div>
    </section>
  )
}
