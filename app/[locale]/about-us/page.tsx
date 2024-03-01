import { Metadata } from "next"

import AboutEnergy from "@/components/aboutUs/about-energy"
import AboutGFE from "@/components/aboutUs/about-gfe"
import Introduction from "@/components/aboutUs/introduction"
import LaPazSection from "@/components/aboutUs/la-paz-section"
import MarketPlace from "@/components/aboutUs/market-place"
import PowerProduction from "@/components/aboutUs/power-production"
import CommunitySection from "@/components/common/community"
import ScrollToTop from "@/components/common/scroll-to-top"

import { openGraphImage } from "../../shared-metadata"

export const metadata: Metadata = {
  title: "About Us",
  description: "Innovative approach to global energy",
  openGraph: {
    ...openGraphImage,
    title: "About Us",
  },
}

function page() {
  return (
    <>
      <Introduction />
      <AboutGFE />
      <AboutEnergy />
      <MarketPlace />
      <PowerProduction />
      <div className="bg-[url('/images/nft/bg2.png')] bg-cover pb-[300px] md:pb-[150px]">
        <LaPazSection />
        <CommunitySection />
      </div>
      <ScrollToTop />
    </>
  )
}

export default page
