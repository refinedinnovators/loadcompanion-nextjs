import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Script from 'next/script'

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
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
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
        <Script id="chatbase-widget" strategy="afterInteractive">
          {`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="grUWA4mHMRvK5KBHvJzNZ";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}
        </Script>
      </body>
    </html>
  )
}
