'use client'

import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XQT5NL73P7`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XQT5NL73P7', {
              page_path: window.location.pathname,
              transport_type: 'beacon',
              send_page_view: true
            });
          `,
        }}
      />
    </>
  )
}
