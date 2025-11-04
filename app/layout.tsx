import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navigation } from "./components/Navigation"

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Donatas Šimeliūnas",
    template: "%s",
  },
  description: "Portfolio website of filmmaker Donatas Šimeliūnas",
  icons: {
    icon: [
      {
        url: "https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/favicon.ico",
        sizes: "any",
      },
      {
        url: "https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/favicon.ico",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/favicon.ico",
      sizes: "180x180",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cinedonatas.com",
    siteName: "Portfolio | Donatas Šimeliūnas",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang || "lt"

  return (
    <html lang={lang}>
      <body>
        <Navigation />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
