import dynamic from "next/dynamic"

import CommunitySection from "@/components/aboutUs/community-section"
import ScrollToTop from "@/components/common/scroll-to-top"
import HowPaticipateSection from "@/components/governance/how-paticipate"
import BenefitSection from "@/components/guild/benefit"
import FeatureSection from "@/components/guild/feature"
// import GuildMap from "@/components/guild/guild-map"
import HeroSection from "@/components/guild/hero"
import LeadGuildSection from "@/components/guild/lead-guild"

const GuildMap = dynamic(() => import("@/components/guild/guild-map"), {
  ssr: false,
})

export default function GuildPage() {
  return (
    <section>
      <HeroSection />
      <FeatureSection />
      <LeadGuildSection />
      <BenefitSection />
      <div className="space-y-10 bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px]">
        <GuildMap />
        <CommunitySection />
      </div>
      <ScrollToTop />
    </section>
  )
}
