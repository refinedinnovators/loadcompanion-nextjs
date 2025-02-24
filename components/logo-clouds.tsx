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

    // Create multiple sets of images for seamless scrolling
    const duplicateContent = () => {
      if (!scrollerRef.current) return
      const content = Array.from(scrollerRef.current.children)
      // Create 3 copies for smoother infinite loop
      for (let i = 0; i < 3; i++) {
        content.forEach(item => {
          const clone = item.cloneNode(true)
          scrollerRef.current?.appendChild(clone)
        })
      }
    }

    duplicateContent()

    // Reset animation when it reaches the end
    const resetAnimation = () => {
      if (scrollerRef.current) {
        const firstScroll = () => {
          if (scrollerRef.current) {
            scrollerRef.current.style.transition = 'none'
            scrollerRef.current.style.transform = 'translateX(0)'
            setTimeout(() => {
              if (scrollerRef.current) {
                scrollerRef.current.style.transition = ''
                scrollerRef.current.style.animation = 'scroll 40s linear infinite'
              }
            }, 10)
          }
        }
        scrollerRef.current.addEventListener('animationend', firstScroll, { once: true })
      }
    }

    resetAnimation()

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
