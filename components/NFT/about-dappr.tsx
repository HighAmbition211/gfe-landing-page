"use client"

import Image from "next/image"
import dapprPic from "@/public/images/nft/dappr.svg"
import { useTranslation } from "next-i18next"

function AboutDappr() {
  const { t } = useTranslation()
  return (
    <div className="relative bg-[url('/images/nft/bg1.png')] bg-cover bg-center bg-no-repeat pb-[1500px] pt-24 xl:pb-[900px]">
      <div className="container items-center justify-between gap-12 xl:flex">
        <div className="flex flex-col gap-6 lg:px-24 xl:w-1/2 xl:px-0">
          <h1 className="auth w-fit rounded-sm bg-[#EEF5FF] px-[16px] py-[8px] text-base font-medium text-primary md:text-[20px]">
            {t("nft_page.about_section.title")}
          </h1>
          <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
            {t("nft_page.about_section.title")}
          </h1>
          <p className="auth text-justify font-mont text-base md:text-lg">
            {t("nft_page.about_section.para1")}
          </p>
          <p className="auth text-justify font-mont text-base md:text-lg">
            <span className="font-muted-foreground">
              {t("nft_page.about_section.para2")}
            </span>
          </p>
          <p className="auth text-justify font-mont text-base md:text-lg">
            <span className="font-muted-foreground">
              {t("nft_page.about_section.para3")}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center bg-opacity-45 backdrop-blur">
          <Image src={dapprPic} alt="image" className="" />
        </div>
      </div>
    </div>
  )
}

export default AboutDappr
