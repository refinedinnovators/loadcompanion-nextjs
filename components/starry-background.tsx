'use client'

import { useEffect, useState } from 'react'
import styles from './starry-background.module.css'

const generateStarryBackground = () => {
  const radialGradients = Array.from({ length: 100 }, (_, i) => {
    const x = Math.random() * 100
    const y = Math.random() * 100
    const size = Math.random() * 2 + 1
    const brightness = Math.random() * 0.4 + 0.6 // 0.6 to 1.0
    return `radial-gradient(${size}px ${size}px at ${x}% ${y}%, rgba(255, 255, 255, ${brightness}) 0%, rgba(255, 255, 255, 0) 100%)`
  }).join(', ')

  return radialGradients
}

export function StarryBackground() {
  const [patterns, setPatterns] = useState<{layer1: string, layer2: string} | null>(null)

  useEffect(() => {
    // Generate patterns only on client-side
    setPatterns({
      layer1: generateStarryBackground(),
      layer2: generateStarryBackground()
    })
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0A0A0B]">
      <div 
        className={styles.starryLayer1}
        style={{ backgroundImage: patterns?.layer1 || 'none' }}
      />
      <div 
        className={styles.starryLayer2}
        style={{ backgroundImage: patterns?.layer2 || 'none' }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
