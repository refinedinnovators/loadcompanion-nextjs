'use client'

import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'

interface YouTubePlayerProps {
  videoId: string
  title: string
}

export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        rootMargin: '100px',
      }
    )

    const element = document.getElementById(`youtube-player-${videoId}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [videoId])

  if (!isPlaying) {
    return (
      <div
        id={`youtube-player-${videoId}`}
        className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsPlaying(true)}
      >
        {/* Thumbnail */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
          loading="lazy"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[68px] h-[48px] bg-[#212121]/80 rounded-lg flex items-center justify-center group-hover:bg-[#FF0000] transition-colors duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.14722L19 12.0002L8 18.8531L8 5.14722Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white text-lg font-medium">{title}</p>
        </div>
      </div>
    )
  }

  // Only load the iframe when the user clicks play
  return (
    <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
