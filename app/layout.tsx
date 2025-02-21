import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Analytics } from '@/components/analytics'
import JsonLd from '@/components/json-ld'
import { WebVitals } from '@/components/web-vitals'

import './globals.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  other: {
    'fb:app_id': 'your-facebook-app-id',
  },
  metadataBase: new URL('https://loadcompanion.com'),
  title: {
    default: 'Load Companion - The One-Click Booking Solution for Trucking',
    template: '%s | Load Companion',
  },
  description:
    'Streamline your trucking operations with Load Companion. Automate load booking, rate calculations, and email communications. Integrated with DAT Power, DAT One, and Sylectus.',
  keywords: [
    'load booking',
    'trucking software',
    'DAT Power',
    'DAT One',
    'Sylectus',
    'dispatch automation',
    'freight management',
    'transportation management system',
    'TMS',
    'load board automation',
  ],
  authors: [{ name: 'Refined Innovators LLC' }],
  creator: 'Refined Innovators LLC',
  publisher: 'Refined Innovators LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logos/lc-logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/logos/lc-logo.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://loadcompanion.com',
    siteName: 'Load Companion',
    title: 'Load Companion - Automate Your Load Booking Process',
    description:
      'Streamline your trucking operations with Load Companion. One-click booking, automated rate calculations, and seamless email integration for DAT and Sylectus.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Load Companion Dashboard',
      },
    ],
    publishedTime: '2024-01-26T00:00:00.000Z',
    modifiedTime: '2024-02-21T00:00:00.000Z',
    section: 'Technology',
    tags: ['trucking software', 'automation', 'logistics', 'transportation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Load Companion - Trucking Automation Made Simple',
    description:
      'Automate your load booking process with Load Companion. Integrated with DAT and Sylectus.',
    images: ['/images/twitter-image.jpg'],
    creator: '@loadcompanion',
  },
  verification: {
    google: 'G-XQT5NL73P7',
    other: {
      'facebook-domain-verification': 'xxxxxxxxxxxxxxxxxxxxxxx',
      'msvalidate.01': 'xxxxxxxxxxxxxxxx',
      'fb:app_id': 'your-facebook-app-id',  // Replace with your actual Facebook App ID
      'fb:pages': 'your-facebook-page-id',  // Replace with your Facebook Page ID
      'instagram:card': 'summary_large_image',
      'instagram:site': '@loadcompanion',
      'instagram:creator': '@loadcompanion',
      'instagram:title': 'Load Companion - Trucking Automation Made Simple',
      'instagram:description': 'Automate your load booking process with Load Companion. Integrated with DAT and Sylectus.',
      'instagram:image': 'https://loadcompanion.com/images/og-image.jpg',
    },
  },
  alternates: {
    canonical: 'https://loadcompanion.com',
    languages: {
      'en-US': 'https://loadcompanion.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="msapplication-TileImage"
          content="/images/logos/lc-logo.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/logos/lc-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/images/logos/lc-logo.png"
        />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="application-name" content="Load Companion" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Load Companion" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <JsonLd />
        <Analytics />
        <WebVitals />
        {children}
      </body>
    </html>
  )
}
