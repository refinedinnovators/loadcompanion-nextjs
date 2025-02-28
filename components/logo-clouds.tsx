'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type LogoCloudType = {
  title?: string
  images: Array<{
    src: string
    alt: string
    width?: number
    height?: number
  }>
  className?: string
}

export function LogoClouds({ title, images, className = '' }: LogoCloudType) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(scrollerRef.current)

    // Create three sets of images for seamless scrolling
    const content = [...images, ...images, ...images, ...images]
    content.forEach((image, index) => {
      if (!scrollerRef.current) return
      const div = document.createElement('div')
      div.className = 'logo-cloud-item'
      const img = document.createElement('img')
      img.src = image.src
      img.alt = image.alt
      img.width = image.width || 140
      img.height = image.height || 70
      img.className = 'object-contain opacity-80 hover:opacity-100'
      img.style.color = 'transparent'
      img.style.width = `${image.width || 140}px`
      img.style.height = `${image.height || 70}px`
      img.style.maxWidth = '100%'
      img.style.transform = 'translateZ(0)'
      div.appendChild(img)
      scrollerRef.current.appendChild(div)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`logo-cloud ${className}`}>
      {title && (
        <p className="logo-cloud-title" role="heading" aria-level={2}>
          {title}
        </p>
      )}

      <div 
        className="logo-cloud-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Partner logos carousel"
      >
        <div
          ref={scrollerRef}
          className={`logo-cloud-scroller ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${
            isPaused ? 'animate-pause' : 'animate-scroll'
          }`}
          aria-live="off"
        >
          {images?.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="logo-cloud-item"
            >
              <Image
                alt={image.alt}
                loading="lazy"
                width={image.width || 140}
                height={image.height || 70}
                decoding="async"
                className="object-contain opacity-80 hover:opacity-100"
                style={{
                  color: 'transparent',
                  width: image.width || 140,
                  height: image.height || 70,
                  maxWidth: '100%',
                  transform: 'translateZ(0)'
                }}
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
