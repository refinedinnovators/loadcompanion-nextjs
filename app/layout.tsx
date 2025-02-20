import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Load Companion - The One-Click Booking Solution",
  description: "Streamline your trucking operations with Load Companion",
  icons: {
    icon: [
      {
        url: "/images/logos/lc-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/images/logos/lc-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/logos/lc-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="msapplication-TileImage" content="/images/logos/lc-logo.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/logos/lc-logo.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/images/logos/lc-logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'