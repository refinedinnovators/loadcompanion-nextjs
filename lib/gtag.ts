export const GA_TRACKING_ID = 'G-XQT5NL73P7'

type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      options?: Record<string, any>
    ) => void
    dataLayer: Record<string, any>[]
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (typeof window.gtag !== 'function') {
    console.warn('Google Analytics not yet initialized')
    return
  }

  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      transport_type: 'beacon',
    })
  } catch (error) {
    console.error('Failed to send pageview:', error)
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window.gtag !== 'function') {
    console.warn('Google Analytics not yet initialized')
    return
  }

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } catch (error) {
    console.error('Failed to send event:', error)
  }
}
