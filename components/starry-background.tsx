"use client"

import { useEffect, useRef } from "react"

const starryStyles = `
@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
}

.twinkle {
  animation: twinkle 2s ease-in-out infinite;
}
`

export function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const stars: HTMLDivElement[] = []
    const numberOfStars = 200

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div")
      star.className = "star twinkle"

      // Random size between 1-2px
      const size = Math.random() * 1 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random twinkle delay
      star.style.animationDelay = `${Math.random() * 2}s`

      container.appendChild(star)
      stars.push(star)
    }

    return () => {
      stars.forEach((star) => star.remove())
    }
  }, [])

  return (
    <>
      <style>{starryStyles}</style>
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden bg-[#0A0A0B]"
        style={{
          backgroundImage: `url(/images/backgrounds/stars.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
    </>
  )
}

