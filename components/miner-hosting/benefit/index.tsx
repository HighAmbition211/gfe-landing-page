"use client"

import { useTranslation } from "react-i18next"

import { BenefitCard } from "./benefit-card"

export default function BenefitSection() {
  const { t } = useTranslation()
  const CARDS_DATA = [
    {
      title: t("minerHosting.highIncome.title"),
      description: t("minerHosting.highIncome.subtitle"),
    },
    {
      title: t("minerHosting.makeTheWorldBetter.title"),
      description: t("minerHosting.makeTheWorldBetter.subtitle"),
    },
  ]
  return (
    <div className="container flex flex-col items-stretch justify-center gap-4 pb-32 md:flex-row">
      <div
        className="mx-auto h-96 max-w-sm rounded-xl bg-primary bg-cover bg-center bg-no-repeat p-4 md:mx-0 md:h-auto md:w-2/5"
        style={{ backgroundImage: "url(/images/how-it-works/bg2.png)" }}
      >
        <div className="font-monument text-2xl text-white">
          {t("minerHosting.benefitsOfHosting.title")}
        </div>
      </div>
      <div className="w-full space-y-4 md:w-3/5">
        {CARDS_DATA.map((card) => (
          <BenefitCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}
