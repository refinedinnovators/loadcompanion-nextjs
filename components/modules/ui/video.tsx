"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { type StaticImageData } from 'next/image'

interface VideoProps {
  src: string | StaticImageData
  fallbackImage: string
  width?: number
  height?: number
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export function Video({
  src,
  fallbackImage,
  width = 640,
  height = 360,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}: VideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isGif, setIsGif] = useState(false)
  const videoSrc = typeof src === 'string' ? src : src.src

  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
    setIsGif(videoSrc.toLowerCase().endsWith('.gif'))
  }, [src, videoSrc])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  if (hasError || isGif) {
    return (
      <Image
        src={videoSrc}
        alt="Media content"
        width={width}
        height={height}
        className={className}
        priority={true}
      />
    )
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <video
        src={videoSrc}
        width={width}
        height={height}
        className={`${className} ${!isLoaded ? 'invisible' : 'visible'}`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        onLoadedData={handleLoad}
        onError={handleError}
      />
    </div>
  )
}
