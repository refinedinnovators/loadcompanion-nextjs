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
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current) return

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

    // Set animation start after a short delay
    setTimeout(() => setStart(true), 100)

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

    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <div className={`py-8 ${className}`}>
      {title && (
        <p className="mb-6 text-center font-medium text-sm leading-relaxed tracking-wide text-gray-400">
          {title}
        </p>
      )}

      <div className="relative max-w-full mx-auto overflow-hidden">
        <div
          ref={scrollerRef}
          className={`flex items-center space-x-20 ${
            start
              ? 'md:animate-scroll animate-scroll-mobile'
              : '[&_img]:opacity-0 [&_img]:animate-fade-in'
          }`}
        >
          {images?.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${image.alt === 'DAT One' ? 'w-40 h-20' : 'w-32 h-16'} flex items-center justify-center`}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                width={96}
                height={48}
                className={`w-auto ${image.alt === 'DAT One' ? 'h-[60px]' : 'h-[48px]'} object-contain transition-all duration-300 hover:scale-110 opacity-80`}
                priority={true}
                quality={90}
                style={{ maxWidth: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
