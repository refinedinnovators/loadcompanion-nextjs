'use client'

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

const starryStyles = `
@keyframes twinkle1 {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 0.4; }
}

@keyframes twinkle2 {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.9; }
}

.starry-layer {
  position: absolute;
  inset: 0;
  background-image: ${generateStarryBackground()};
}

.starry-layer-1 {
  animation: twinkle1 4s ease-in-out infinite;
}

.starry-layer-2 {
  animation: twinkle2 4s ease-in-out infinite;
}
`

export function StarryBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0A0A0B]">
      <style>{starryStyles}</style>
      <div className="starry-layer starry-layer-1" />
      <div className="starry-layer starry-layer-2" style={{ backgroundImage: generateStarryBackground() }} />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
