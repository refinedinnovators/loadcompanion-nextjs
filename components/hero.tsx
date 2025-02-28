'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { LogoClouds } from '@/components/logo-clouds'
import { StarryBackground } from '@/components/starry-background'
import { Button } from '@/components/ui/button'

const heroStyles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 1rem));
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}
`

const logoCloudContent = {
  title: 'Integrated with largest load boards and email providers',
  images: [
    {
      src: '/images/logos/dat-one.png',
      alt: 'DAT One',
      width: 140,
      height: 70,
    },
    {
      src: '/images/logos/sylectus.svg',
      alt: 'Sylectus',
      width: 110,
      height: 55,
    },
    {
      src: '/images/logos/gmail.svg',
      alt: 'Gmail',
      width: 72,
      height: 36,
    },
    {
      src: '/images/logos/outlook.svg',
      alt: 'Outlook',
      width: 72,
      height: 36,
    },
  ],
}

export function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offset = 10

      if (ref.current) {
        const elements = (ref.current as HTMLElement).querySelectorAll(
          '.parallax'
        )
        elements.forEach((el) => {
          const element = el as HTMLElement
          const speedX = element.dataset.speedx || '0'
          const speedY = element.dataset.speedy || '0'
          const speedZ = element.dataset.speedz || '0'
          const rotateSpeed = element.dataset.rotation || '0'

          const zValue = Number.parseFloat(speedZ) * offset
          const rotateValue = Number.parseFloat(rotateSpeed) * offset

          element.style.transform = `translateX(calc(-50% + ${-moveX * Number.parseFloat(speedX)}px)) translateY(calc(-50% + ${
            -moveY * Number.parseFloat(speedY)
          }px)) perspective(2300px) translateZ(${zValue}px) rotateY(${rotateValue}deg)`
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <style>{heroStyles}</style>
      <header
        ref={ref}
        className="relative overflow-hidden bg-[#0A0A0B] py-8 md:py-16"
      >
        <StarryBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 relative">
              {/* Logo (behind text on mobile) */}
              <div className="absolute inset-0 md:hidden" style={{ zIndex: 1 }}>
                <div
                  className="parallax absolute w-64 h-64 sm:w-72 sm:h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 floating opacity-20"
                  data-speedx="0.1"
                  data-speedy="0.15"
                  data-speedz="0.05"
                  data-rotation="0.05"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 142.29291 142.29291"
                    className="w-full h-full text-white"
                  >
                    {/* SVG path data */}
                    <g transform="translate(-33.560792,-68.630921)">
                      <g transform="matrix(0.26458333,0,0,0.26458333,33.560792,58.050234)">
                        <path
                          d="m 338.77,591.66 a 179.95,179.95 0 0 0 258.82,-38.43 l 3.09,-4.73 a 8.57,8.57 0 0 0 -7.17,-13.27 v 0 a 8.58,8.58 0 0 0 -7.22,3.95 l -2.92,4.54 a 162.87,162.87 0 0 1 -233.78,34.68 8.77,8.77 0 0 0 -12.06,1 8.55,8.55 0 0 0 1.24,12.26 z"
                          transform="translate(-181.1,-141.11)"
                          fill="currentColor"
                        />
                        <path
                          d="M 450,181.1 C 301.49,181.1 181.1,301.49 181.1,450 181.1,598.51 301.49,718.9 450,718.9 598.51,718.9 718.9,598.51 718.9,450 718.9,301.49 598.51,181.1 450,181.1 Z M 218,472.6 h -0.51 a 8.56,8.56 0 0 1 -8.54,-8.05 c -0.29,-4.82 -0.43,-9.72 -0.43,-14.57 a 241.79,241.79 0 0 1 136.18,-217.3 8.56,8.56 0 1 1 7.49,15.39 c -76.9,37.4 -126.58,116.67 -126.58,201.93 0,4.51 0.14,9.06 0.4,13.55 A 8.55,8.55 0 0 1 218,472.6 Z M 644.79,306.54 a 17.08,17.08 0 0 1 1.51,7 c 0,0.44 0,0.88 0,1.31 -0.62,8.22 -7.85,14.38 -16.1,14.38 H 518.4 a 138.11,138.11 0 0 0 -76.35,-17.84 c -71.07,4 -128,62 -130.77,133.16 -3,79 60.37,144.26 138.72,144.26 A 139,139 0 0 0 574.2,512 h 88.91 c 10.84,0 19.64,-8.48 19.64,-18.94 0,-10.46 -8.8,-18.94 -19.64,-18.94 H 543 a 96.2,96.2 0 0 1 -97.51,71.85 c -49.17,-2.27 -89.1,-42.16 -91.4,-91.34 a 96,96 0 0 1 155.26,-80 h 138 a 19,19 0 0 1 32.94,18.17 v 0.05 c -0.18,0.46 -0.39,0.92 -0.61,1.36 -0.06,0.13 -0.12,0.27 -0.19,0.39 -0.2,0.39 -0.42,0.76 -0.64,1.12 -0.09,0.16 -0.18,0.31 -0.28,0.46 -0.26,0.4 -0.54,0.79 -0.83,1.17 l -0.18,0.25 a 18.94,18.94 0 0 1 -30,-0.27 H 530.21 A 95.46,95.46 0 0 1 546,450 h 114.12 a 42.62,42.62 0 1 1 0,85.23 h -23.68 l -11.75,18 v 0 0 C 588.42,614.38 521,655 444.49,652.92 334,650 245.59,557.85 247,447.33 248.46,336.62 339,247 450,247 a 201.9,201.9 0 0 1 118.29,38.13 204.37,204.37 0 0 1 25.2,21.41 h 20.1 a 17.1,17.1 0 0 1 31.2,0 z"
                          transform="translate(-181.1,-141.11)"
                          fill="currentColor"
                        />
                        <path
                          d="m 511.79,282.22 a 178.82,178.82 0 0 0 -65.69,-12.4 c -99.35,0 -180.18,80.83 -180.18,180.18 a 178.53,178.53 0 0 0 13.93,69.46 8.554246,8.554246 0 1 0 15.78,-6.61 A 161.67,161.67 0 0 1 283,450 c 0,-89.91 73.15,-163.06 163.07,-163.06 a 161.84,161.84 0 0 1 59.43,11.21 8.56,8.56 0 1 0 6.26,-15.93 z"
                          transform="translate(-181.1,-141.11)"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              <motion.div
                className="relative z-10 flex max-w-2xl flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  The One-Click Booking Solution
                </h1>
                <p className="text-base sm:text-lg text-gray-300 mb-6">
                  Streamline your trucking operations with Load Companion. From
                  one-click booking to real-time rate calculations, we've got
                  you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#4F46E5] text-white hover:bg-[#4338CA] text-base sm:text-lg py-2 px-4 sm:px-6" asChild>
                    <a
                      href="https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        // Open Chrome Web Store in a new tab
                        window.open('https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj', '_blank');
                        e.preventDefault();
                      }}
                    >
                      Start Free Trial
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white text-base sm:text-lg py-2 px-4 sm:px-6"
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const width = 800;
                        const height = 450;
                        const left = (window.screen.width - width) / 2;
                        const top = (window.screen.height - height) / 2;
                        window.open(
                          'https://www.youtube.com/embed/uWPYq7k2wAE',
                          'LoadCompanionDemo',
                          `width=${width},height=${height},top=${top},left=${left},popup=yes`
                        );
                      }}
                    >
                      Watch Demo
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Desktop logo (on the right) */}
            <div className="relative w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] mt-8 md:mt-0 hidden md:flex justify-center items-center">
              <div
                className="parallax w-64 h-64 md:w-80 md:h-80 floating"
                data-speedx="0.1"
                data-speedy="0.15"
                data-speedz="0.05"
                data-rotation="0.05"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 142.29291 142.29291"
                  className="w-full h-full text-white"
                >
                  {/* SVG path data */}
                  <g transform="translate(-33.560792,-68.630921)">
                    <g transform="matrix(0.26458333,0,0,0.26458333,33.560792,58.050234)">
                      <path
                        d="m 338.77,591.66 a 179.95,179.95 0 0 0 258.82,-38.43 l 3.09,-4.73 a 8.57,8.57 0 0 0 -7.17,-13.27 v 0 a 8.58,8.58 0 0 0 -7.22,3.95 l -2.92,4.54 a 162.87,162.87 0 0 1 -233.78,34.68 8.77,8.77 0 0 0 -12.06,1 8.55,8.55 0 0 0 1.24,12.26 z"
                        transform="translate(-181.1,-141.11)"
                        fill="currentColor"
                      />
                      <path
                        d="M 450,181.1 C 301.49,181.1 181.1,301.49 181.1,450 181.1,598.51 301.49,718.9 450,718.9 598.51,718.9 718.9,598.51 718.9,450 718.9,301.49 598.51,181.1 450,181.1 Z M 218,472.6 h -0.51 a 8.56,8.56 0 0 1 -8.54,-8.05 c -0.29,-4.82 -0.43,-9.72 -0.43,-14.57 a 241.79,241.79 0 0 1 136.18,-217.3 8.56,8.56 0 1 1 7.49,15.39 c -76.9,37.4 -126.58,116.67 -126.58,201.93 0,4.51 0.14,9.06 0.4,13.55 A 8.55,8.55 0 0 1 218,472.6 Z M 644.79,306.54 a 17.08,17.08 0 0 1 1.51,7 c 0,0.44 0,0.88 0,1.31 -0.62,8.22 -7.85,14.38 -16.1,14.38 H 518.4 a 138.11,138.11 0 0 0 -76.35,-17.84 c -71.07,4 -128,62 -130.77,133.16 -3,79 60.37,144.26 138.72,144.26 A 139,139 0 0 0 574.2,512 h 88.91 c 10.84,0 19.64,-8.48 19.64,-18.94 0,-10.46 -8.8,-18.94 -19.64,-18.94 H 543 a 96.2,96.2 0 0 1 -97.51,71.85 c -49.17,-2.27 -89.1,-42.16 -91.4,-91.34 a 96,96 0 0 1 155.26,-80 h 138 a 19,19 0 0 1 32.94,18.17 v 0.05 c -0.18,0.46 -0.39,0.92 -0.61,1.36 -0.06,0.13 -0.12,0.27 -0.19,0.39 -0.2,0.39 -0.42,0.76 -0.64,1.12 -0.09,0.16 -0.18,0.31 -0.28,0.46 -0.26,0.4 -0.54,0.79 -0.83,1.17 l -0.18,0.25 a 18.94,18.94 0 0 1 -30,-0.27 H 530.21 A 95.46,95.46 0 0 1 546,450 h 114.12 a 42.62,42.62 0 1 1 0,85.23 h -23.68 l -11.75,18 v 0 0 C 588.42,614.38 521,655 444.49,652.92 334,650 245.59,557.85 247,447.33 248.46,336.62 339,247 450,247 a 201.9,201.9 0 0 1 118.29,38.13 204.37,204.37 0 0 1 25.2,21.41 h 20.1 a 17.1,17.1 0 0 1 31.2,0 z"
                        transform="translate(-181.1,-141.11)"
                        fill="currentColor"
                      />
                      <path
                        d="m 511.79,282.22 a 178.82,178.82 0 0 0 -65.69,-12.4 c -99.35,0 -180.18,80.83 -180.18,180.18 a 178.53,178.53 0 0 0 13.93,69.46 8.554246,8.554246 0 1 0 15.78,-6.61 A 161.67,161.67 0 0 1 283,450 c 0,-89.91 73.15,-163.06 163.07,-163.06 a 161.84,161.84 0 0 1 59.43,11.21 8.56,8.56 0 1 0 6.26,-15.93 z"
                        transform="translate(-181.1,-141.11)"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
            <LogoClouds
              {...logoCloudContent}
              className="py-6"
            />
          </div>
        </div>
      </header>
    </>
  )
}
