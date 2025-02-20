'use client'

import { useReportWebVitals } from 'next/web-vitals'

declare global {
  interface Window {
    gtag: (command: string, eventName: string, params: object) => void
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    const { id, name, label, value, rating } = metric

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', name, {
        event_category:
          label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: id,
        non_interaction: true,
        metric_rating: rating,
      })
    }
  })

  return null
}
