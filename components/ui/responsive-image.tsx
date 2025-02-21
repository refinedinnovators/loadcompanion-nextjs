'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
}

export function ResponsiveImage({
  src,
  alt,
  className,
  sizes = '100vw',
  priority = false,
  quality = 75,
  fill = false,
  width,
  height,
  loading,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    sizes,
    className: cn(
      'duration-700 ease-in-out',
      isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0',
      className
    ),
    onLoadingComplete: () => setIsLoading(false),
    loading: loading || (priority ? 'eager' : 'lazy'),
  }

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          {...imageProps}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    )
  }

  return (
    <Image
      {...imageProps}
      width={width || 1920}
      height={height || 1080}
    />
  )
}
