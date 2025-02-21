'use client'

import { useReportWebVitals } from 'next/web-vitals'

import type { NextWebVitalsMetric } from 'next/app'

type GTagCommand = 'config' | 'event' | 'js'

declare global {
  interface Window {
    gtag: (command: GTagCommand, targetId: string, options?: Record<string, any>) => void
    dataLayer: Record<string, any>[]
  }
}

export function WebVitals() {
  useReportWebVitals((metric) => {
    const { id, name, label, value, rating } = metric

    // Send to Google Analytics
    if (typeof window.gtag === 'function') {
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
