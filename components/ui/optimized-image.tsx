'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface OptimizedImageProps
  extends Omit<React.ComponentProps<typeof Image>, 'alt'> {
  alt: string
}

export function OptimizedImage({
  alt,
  className,
  onLoadingComplete,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn('overflow-hidden', className)}>
      <Image
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        alt={alt}
        onLoadingComplete={() => {
          setIsLoading(false)
        }}
        quality={90}
        {...props}
      />
    </div>
  )
}
