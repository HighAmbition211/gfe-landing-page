"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useTranslation } from "next-i18next"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/header/main-nav"

import { LanguageSelector } from "./language"
import { MobileMenu } from "./mobile-menu"

export function SiteHeader() {
  let { t } = useTranslation()

  return (
    <>
      <header className="siteheader sticky top-0 z-50 w-full border-b bg-background px-0 font-mont">
        <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="hidden space-x-4 lg:flex">
            <Button
              variant="default"
              className="!mx-2 whitespace-nowrap font-mont font-semibold"
              style={{
                background:
                  "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
              }}
              asChild
            >
              <Link href="https://platform.gfe.foundation" target="_blank">
                {t("navbar_section.sign_in")}
              </Link>
            </Button>
            <LanguageSelector />
          </div>
          <div className="flex gap-1 lg:hidden">
            <MobileMenu>
              <Button
                variant="default"
                className="!mx-2 block whitespace-nowrap font-mont font-semibold lg:hidden"
                style={{
                  background:
                    "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
                }}
              >
                <Menu />
              </Button>
            </MobileMenu>
          </div>
        </div>
      </header>
    </>
  )
}
