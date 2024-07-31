import { Metadata, Viewport } from "next"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function SiteLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <div className="relative flex min-h-screen flex-col">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="flex-1">{children}</div>
      </NextIntlClientProvider>
    </div>
  )
}
