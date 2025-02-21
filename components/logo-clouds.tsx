'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type LogoCloudType = {
  title?: string
  images: Array<{
    src: string
    alt: string
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

    const scrollerContent = Array.from(scrollerRef.current.children)

    // Function to duplicate items
    const duplicateItems = () => {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })
    }

    // Initial duplication
    duplicateItems()
    duplicateItems() // Duplicate twice to ensure enough content for seamless loop

    // Check if scroller width is greater than viewport and duplicate again if needed
    const checkWidth = () => {
      if (!scrollerRef.current) return
      const scrollerWidth = scrollerRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      if (scrollerWidth <= viewportWidth * 2) {
        duplicateItems()
      }
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkWidth)
    }
  }, [])

  return (
    <div className={`py-8 ${className}`}>
      {title && (
        <p className="mb-6 text-center font-medium text-sm leading-relaxed tracking-wide text-gray-400">
          {title}
        </p>
      )}

      <div 
        className="relative max-w-full mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollerRef}
          className={`flex items-center space-x-20 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${
            isPaused ? 'animate-pause' : 'animate-scroll'
          }`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {images?.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                width={96}
                height={48}
                className="w-auto h-[48px] object-contain transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                loading="lazy"
                quality={90}
                style={{ maxWidth: '100%', transform: 'translateZ(0)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
