import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const ClientAnalytics = dynamic(
  () => import('@/components/client-wrapper'),
  { ssr: false }
)

export const viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Load Companion',
  description: 'Your trusted companion for load management',
  icons: {
    icon: '/images/logos/lc-logo.png',
    apple: '/images/logos/lc-logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Load Companion',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  formatDetection: {
    telephone: false,
  },
  applicationName: 'Load Companion',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ClientAnalytics />
      </body>
    </html>
  )
}
