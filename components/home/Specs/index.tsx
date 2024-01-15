"use client"

import { siteConfig } from "@/config/site"

import FeatureDiv from "./FeatureDiv"

export default function SpecsSection() {
  const features = siteConfig.features
  return (
    <div className="relative lg:mt-40 mt-0 flex flex-col gap-12 bg-background px-5 py-[100px] lg:px-[96px]  lg:py-[207px]">
      <div className=" relative z-30 flex flex-col gap-[24px]">
        <h1 className=" font-goldman text-[30px] font-normal text-primary md:text-[45px]">
          Functionalities
        </h1>
        <p className="auth text-base font-medium text-muted-foreground lg:w-1/2 lg:text-[20px]">
          This twofold implication of GFE tokens mean that not only do they
          serve as tradable assets with income, they are reflective of
          sustainable practices and have tangible, real-world utility.
        </p>
      </div>
      <div className=" relative z-30 grid gap-6  lg:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <FeatureDiv
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            link={feature.link}
          />
        ))}
      </div>
      <img
        src="/bgs/grid.jpg"
        alt="bg"
        className=" absolute left-0 top-0 hidden w-1/2 lg:block "
      />
      <img
        src="/bgs/global.jpg"
        alt="bg"
        className=" absolute -right-[100px] bottom-0 opacity-50 xl:top-0 "
      />
      <img
        src="/bgs/right1.png"
        alt="bgs"
        className="absolute -bottom-5 w-full"
      />
    </div>
  )
}
