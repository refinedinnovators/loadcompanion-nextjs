'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

interface DynamicImportProps {
  load: () => Promise<{ default: React.ComponentType<any> }>
  props?: Record<string, any>
  fallback?: React.ReactNode
}

export function DynamicImport({ load, props = {}, fallback }: DynamicImportProps) {
  const Component = dynamic(load, {
    loading: () => <>{fallback}</>,
    ssr: false,
  })

  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}
