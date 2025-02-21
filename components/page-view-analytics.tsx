'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { pageview } from '@/lib/gtag'

export function PageViewAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isGtagReady, setIsGtagReady] = useState(false)

  useEffect(() => {
    const checkGtag = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        setIsGtagReady(true)
        return true
      }
      return false
    }

    // Initial check
    const isReady = checkGtag()
    
    if (!isReady) {
      // If not ready, set up an interval to check
      const interval = setInterval(checkGtag, 500)
      return () => clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!pathname || !isGtagReady) return

    try {
      const url = pathname + searchParams.toString()
      pageview(url)
    } catch (error) {
      console.error('Error sending pageview:', error)
    }
  }, [pathname, searchParams, isGtagReady])

  return null
}
