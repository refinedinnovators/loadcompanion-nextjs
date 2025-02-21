'use client'

import { useCallback, useEffect, useState } from 'react'
import { ResponsiveImage } from '@/components/ui/responsive-image'
import {
  ChevronLeft,
  ChevronRight,
  InfoIcon as InfoCircle,
  X,
} from 'lucide-react'

type Pointer = {
  x: number
  y: number
  title: string
  description: string
  gif?: string
}

type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
  pointers?: Pointer[]
}

type CarouselProps = {
  images: ImageProps[]
  onSlideChange: (index: number) => void
}

const determineTooltipPosition = (pointerX: number, pointerY: number) => {
  const isLeft = pointerX > 50
  const isTop = pointerY > 50
  return {
    verticalClass: isTop ? 'bottom-[calc(100%+6px)]' : 'top-[calc(100%+6px)]',
    horizontalClass: isLeft ? 'right-0' : 'left-0',
  }
}

export function Carousel({ images, onSlideChange }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activePointerIndex, setActivePointerIndex] = useState<number | null>(
    null
  )
  const [isHovered, setIsHovered] = useState(false)
  const [modalGif, setModalGif] = useState<string | null>(null)
  const [gifDimensions, setGifDimensions] = useState<{
    width: number
    height: number
  } | null>(null)

  const closeModal = useCallback(() => {
    setModalGif(null)
    setGifDimensions(null)
  }, [])

  const openModal = useCallback((gif: string) => {
    setModalGif(gif)
    if (typeof window !== 'undefined') {
      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.src = gif
      img.onload = () => {
        const maxWidth = window.innerWidth * 0.8
        const maxHeight = window.innerHeight * 0.8
        let width = img.width
        let height = img.height

        const isSmallGif = width < 500 || height < 500
        if (isSmallGif) {
          // For small GIFs, scale up more aggressively (up to 3x) for better visibility
          const scaleFactor = Math.min(maxWidth / width, maxHeight / height, 3)
          width *= scaleFactor
          height *= scaleFactor
        } else {
          if (width > maxWidth) {
            height = (maxWidth / width) * height
            width = maxWidth
          }
          if (height > maxHeight) {
            width = (maxHeight / height) * width
            height = maxHeight
          }
        }

        setGifDimensions({ width, height })
      }
    }
  }, [])

  useEffect(() => {
    if (!isHovered) {
      const timeout = setTimeout(() => {
        setActivePointerIndex(null)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [isHovered])

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setActivePointerIndex(null)
    onSlideChange(newIndex)
  }, [images.length, currentIndex, onSlideChange])

  const prevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setActivePointerIndex(null)
    onSlideChange(newIndex)
  }, [images.length, currentIndex, onSlideChange])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      } else if (event.key === 'Escape' && modalGif) {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalGif, closeModal, nextSlide, prevSlide])

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-800 shadow-inner"
      aria-live="polite"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center relative"
            aria-hidden={index !== currentIndex}
          >
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <div className="absolute inset-0">
                <ResponsiveImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover"
                  priority={index === currentIndex}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>

              {/* Pointers */}
              {image.pointers?.map((pointer, idx) => {
                const { verticalClass, horizontalClass } =
                  determineTooltipPosition(pointer.x, pointer.y)

                return (
                  <div
                    key={idx}
                    className={`absolute ${activePointerIndex === idx ? 'z-20' : 'z-10'}`}
                    style={{
                      top: `${pointer.y}%`,
                      left: `${pointer.x}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className="group relative"
                      onMouseEnter={() => {
                        setActivePointerIndex(idx)
                        setIsHovered(true)
                      }}
                      onMouseLeave={() => setIsHovered(false)}
                      onTouchStart={() => setActivePointerIndex(idx)}
                    >
                      {/* Pointer */}
                      <div
                        className={`relative w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center ${activePointerIndex === idx ? 'z-20' : 'z-10'}`}
                      >
                        <div className="absolute w-3 h-3 bg-[#FF9800] rounded-full animate-ping" />
                        <div className="relative w-2.5 h-2.5 bg-[#FF9800] rounded-full" />
                      </div>

                      {/* Tooltip */}
                      {activePointerIndex === idx && (
                        <div
                          className={`absolute z-30 flex flex-col items-start gap-2 transition-transform duration-200 transform hover:scale-110 ${verticalClass} ${horizontalClass} w-40 sm:w-60 bg-white text-black text-[10px] sm:text-[12px] p-2 sm:p-4 rounded-md shadow-lg border border-gray-200`}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          {pointer.gif && (
                            <div
                              className="mb-2 w-full flex justify-center cursor-pointer"
                              onClick={() =>
                                pointer.gif && openModal(pointer.gif)
                              }
                            >
                              <ResponsiveImage
                                src={pointer.gif || '/placeholder.svg'}
                                alt="Feature preview"
                                width={300}
                                height={169}
                                className="w-full h-auto rounded-md"
                                loading="eager"
                                quality={75}
                                sizes="150px"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <InfoCircle className="text-[#FF9800]" />
                            <h4 className="font-bold text-[10px] sm:text-[12px] leading-tight">
                              {pointer.title}
                            </h4>
                          </div>
                          <p className="text-[9px] sm:text-[11px] text-gray-600 leading-tight">
                            {pointer.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            onClick={() => {
              setCurrentIndex(idx)
              onSlideChange(idx)
            }}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === currentIndex}
          />
        ))}
      </div>

      {/* Modal */}
      {modalGif && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative bg-black rounded-lg overflow-hidden">
            <ResponsiveImage
              src={modalGif}
              alt="Feature preview"
              width={gifDimensions?.width || 800}
              height={gifDimensions?.height || 600}
              className="rounded-lg"
              loading="eager"
              quality={75}
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors duration-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
