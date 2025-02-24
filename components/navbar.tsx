'use client'

import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

const navbarStyles = ``

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-[#0A0A0B]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0B]/75">
      <style>{navbarStyles}</style>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 142.29291 142.29291"
                className="h-10 w-10"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient-10"
                    x1="257.14999"
                    y1="257.14999"
                    x2="631.34003"
                    y2="631.34003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fa9814" />
                    <stop offset="0.19" stopColor="#fb9b14" />
                    <stop offset="1" stopColor="#e74e13" />
                  </linearGradient>
                </defs>
                <g transform="translate(-33.560792,-68.630921)">
                  <g transform="matrix(0.26458333,0,0,0.26458333,33.560792,58.050234)">
                    <path
                      d="m 338.77,591.66 a 179.95,179.95 0 0 0 258.82,-38.43 l 3.09,-4.73 a 8.57,8.57 0 0 0 -7.17,-13.27 v 0 a 8.58,8.58 0 0 0 -7.22,3.95 l -2.92,4.54 a 162.87,162.87 0 0 1 -233.78,34.68 8.77,8.77 0 0 0 -12.06,1 8.55,8.55 0 0 0 1.24,12.26 z"
                      transform="translate(-181.1,-141.11)"
                      fill="#fff"
                    />
                    <path
                      d="M 450,181.1 C 301.49,181.1 181.1,301.49 181.1,450 181.1,598.51 301.49,718.9 450,718.9 598.51,718.9 718.9,598.51 718.9,450 718.9,301.49 598.51,181.1 450,181.1 Z M 218,472.6 h -0.51 a 8.56,8.56 0 0 1 -8.54,-8.05 c -0.29,-4.82 -0.43,-9.72 -0.43,-14.57 a 241.79,241.79 0 0 1 136.18,-217.3 8.56,8.56 0 1 1 7.49,15.39 c -76.9,37.4 -126.58,116.67 -126.58,201.93 0,4.51 0.14,9.06 0.4,13.55 A 8.55,8.55 0 0 1 218,472.6 Z M 644.79,306.54 a 17.08,17.08 0 0 1 1.51,7 c 0,0.44 0,0.88 0,1.31 -0.62,8.22 -7.85,14.38 -16.1,14.38 H 518.4 a 138.11,138.11 0 0 0 -76.35,-17.84 c -71.07,4 -128,62 -130.77,133.16 -3,79 60.37,144.26 138.72,144.26 A 139,139 0 0 0 574.2,512 h 88.91 c 10.84,0 19.64,-8.48 19.64,-18.94 0,-10.46 -8.8,-18.94 -19.64,-18.94 H 543 a 96.2,96.2 0 0 1 -97.51,71.85 c -49.17,-2.27 -89.1,-42.16 -91.4,-91.34 a 96,96 0 0 1 155.26,-80 h 138 a 19,19 0 0 1 32.94,18.17 v 0.05 c -0.18,0.46 -0.39,0.92 -0.61,1.36 -0.06,0.13 -0.12,0.27 -0.19,0.39 -0.2,0.39 -0.42,0.76 -0.64,1.12 -0.09,0.16 -0.18,0.31 -0.28,0.46 -0.26,0.4 -0.54,0.79 -0.83,1.17 l -0.18,0.25 a 18.94,18.94 0 0 1 -30,-0.27 H 530.21 A 95.46,95.46 0 0 1 546,450 h 114.12 a 42.62,42.62 0 1 1 0,85.23 h -23.68 l -11.75,18 v 0 0 C 588.42,614.38 521,655 444.49,652.92 334,650 245.59,557.85 247,447.33 248.46,336.62 339,247 450,247 a 201.9,201.9 0 0 1 118.29,38.13 204.37,204.37 0 0 1 25.2,21.41 h 20.1 a 17.1,17.1 0 0 1 31.2,0 z"
                      transform="translate(-181.1,-141.11)"
                      fill="url(#linear-gradient-10)"
                    />
                    <path
                      d="m 511.79,282.22 a 178.82,178.82 0 0 0 -65.69,-12.4 c -99.35,0 -180.18,80.83 -180.18,180.18 a 178.53,178.53 0 0 0 13.93,69.46 8.554246,8.554246 0 1 0 15.78,-6.61 A 161.67,161.67 0 0 1 283,450 c 0,-89.91 73.15,-163.06 163.07,-163.06 a 161.84,161.84 0 0 1 59.43,11.21 8.56,8.56 0 1 0 6.26,-15.93 z"
                      transform="translate(-181.1,-141.11)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <span className="font-bold text-lg sm:text-xl text-white">
              Load Companion
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#features"
            onClick={(e) => scrollToSection(e, 'features')}
            className="text-gray-300 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="text-gray-300 transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            onClick={(e) => scrollToSection(e, 'faq')}
            className="text-gray-300 transition-colors hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-colors duration-300"
            asChild
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-colors duration-300"
          >
            <a
              href="https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Chrome Extension
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors duration-300"
          >
            <a
              href="https://webapp.loadcompanion.com/#/auth"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75 border-t border-gray-800">
          <nav className="flex flex-col items-start space-y-4 p-4 text-sm font-medium">
            <Link
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-gray-300 transition-colors hover:text-white w-full"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-gray-300 transition-colors hover:text-white w-full"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-gray-300 transition-colors hover:text-white w-full"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 transition-colors hover:text-white w-full"
            >
              Contact Us
            </Link>
            <div className="flex flex-col space-y-2 w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
                asChild
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
              >
                <a
                  href="https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Chrome Extension
                </a>
              </Button>
              <Button
                size="sm"
                className="w-full bg-[#4F46E5] text-white hover:bg-[#4338CA]"
              >
                <a
                  href="https://webapp.loadcompanion.com/#/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
