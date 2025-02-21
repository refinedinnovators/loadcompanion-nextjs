'use client'

import Script from 'next/script'
import { GA_TRACKING_ID } from '@/lib/gtag'

function Analytics() {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              transport_type: 'beacon'
            });
          `,
        }}
      />
    </>
  )
}

export default function ClientAnalytics() {
  return <Analytics />
}
