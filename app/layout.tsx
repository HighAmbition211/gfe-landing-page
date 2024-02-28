import App from "@/provider/provider"

import "@/styles/globals.css"
import { Metadata } from "next"
import { Toaster } from "react-hot-toast"

import { siteConfig } from "@/config/site"
import {
  fontGoldman,
  fontMono,
  fontMont,
  fontMonumentExtended,
  fontSans,
} from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <App>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-mont antialiased ",
            fontSans.variable,
            fontMono.variable,
            fontMont.variable,
            fontGoldman.variable,
            fontMonumentExtended.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <Toaster />
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </App>
  )
}
