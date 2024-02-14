"use client"

import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"
import { useTranslation } from "next-i18next"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import Counter from "./counter"

export default function HomeSection() {
  const { t, i18n } = useTranslation()
  return (
    <div
      className="relative  bg-cover bg-center  "
      style={{
        backgroundImage: "url('/bgs/Patterns.svg'),url('/bgs/intro.jpg')",
      }}
    >
      <div className="container flex flex-col justify-between space-y-14  pb-20 lg:flex-row lg:pb-56 lg:pt-24">
        <div className="flex  w-full flex-col justify-between lg:w-[45%] xl:w-[55%]">
          <div className="mb-5 flex flex-col items-start gap-[56px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-[42px] font-normal text-transparent md:text-[52px] xl:text-[62px]">
                {t("home_page.section1.title")}{" "}
                <br className="hidden sm:inline" />
                {t("home_page.section1.subtitle")}
              </h1>
              <p className="auth pr-5 font-mont font-semibold text-muted-foreground lg:text-[18px] xl:text-[20px]">
                {t("home_page.section1.description")}
              </p>
            </div>
            <div className="auth mb-7 flex w-full flex-col gap-2 md:mb-0 md:flex-row md:gap-3">
              <Button className="h-12 w-32 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] font-bold">
                <Link href={siteConfig.links.docs}>{t("audit")}</Link>
              </Button>

              <Button className="bg-backround h-12 border border-secondary-foreground bg-white font-bold text-muted-foreground hover:bg-muted">
                <Link
                  href={siteConfig.links.docs}
                  className="flex items-center justify-between gap-3"
                >
                  <Icons.paper />
                  <span>{t("whitepaper")}</span>
                </Link>
              </Button>
            </div>
          </div>
          {/* new nft landing page link be placed here */}
          <div>
            <div className=" auth relative flex items-center justify-between rounded-3xl bg-background py-[25px] pl-[8px]  pr-[16px] shadow-lg md:rounded-full md:py-[8px]">
              <Button className="absolute -top-3 left-5 rounded-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-[16px] py-[8px] md:relative md:left-0 md:top-0 ">
                New
              </Button>
              <h1 className="mt-2 font-mont font-medium text-muted-foreground md:mt-0 md:text-[16px]">
                {t("launch_text")}
              </h1>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <div className=" mt-7 w-full items-end lg:mt-0 lg:flex lg:w-[55%] lg:flex-col xl:w-[45%] xl:items-end">
          <Counter />
        </div>
      </div>
      <div className="absolute -bottom-6  left-0 z-0 flex w-full md:-bottom-10 lg:-bottom-16">
        <img src="/bgs/right.svg" alt="bg" className="w-1/2" />
        <img src="/bgs/left.svg" alt="bg" className="w-1/2" />
      </div>
    </div>
  )
}