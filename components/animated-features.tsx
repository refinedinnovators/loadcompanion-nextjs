'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  AtSign,
  Calculator,
  CloudSun,
  Edit,
  FileText,
  Globe,
  Mail,
  Map,
  Phone,
  Star,
} from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const features = [
  {
    title: 'One-Click Email Magic',
    description:
      'Send booking requests with a single click, seamlessly integrated with Gmail and Outlook. Customize emails instantly without leaving your workflow.',
    icon: Mail,
  },
  {
    title: 'Multiple Email Templates',
    description:
      'Easily create and switch between multiple custom email templates designed for specific types of load bookings.',
    icon: FileText,
  },
  {
    title: 'Google Maps Integration',
    description:
      'Plan routes and calculate miles directly from DAT.com with integrated Google Maps support. Save time and optimize dispatching workflow.',
    icon: Map,
  },
  {
    title: 'Weather Widget',
    description:
      'When you open a load, the extension provides destination-specific weather details alongside the load information, making it easier to make a decision.',
    icon: CloudSun,
  },
  {
    title: 'RPM Column',
    description:
      'View real-time rates per mile directly in your dashboard, helping you make smarter decisions quickly.',
    icon: Calculator,
  },
  {
    title: 'Instant RPM Calculator',
    description:
      'Calculate costs, profits, and rates per mile instantly, empowering you with real-time financial insights.',
    icon: Calculator,
  },
  {
    title: 'Send Emails from Comments',
    description:
      'Coming soon: Send emails directly from comments when an email address is mentioned, streamlining your workflow further.',
    icon: Mail,
  },
  {
    title: 'Built-in Email Editor',
    description:
      'Effortlessly customize emails with our built-in editor. Make quick adjustments directly from your dashboard for precise, on-point trucking communications.',
    icon: Edit,
  },
  {
    title: 'Load Companion Map',
    description:
      'When you open a load, the extension automatically integrates a map with comprehensive load details, helping you evaluate its suitability at a glance.',
    icon: Globe,
  },
  {
    title: 'Multiple Email Addresses',
    description:
      'Send emails using multiple email addresses directly within Load Companion. This upcoming feature offers enhanced flexibility and convenience, empowering you to manage communications effortlessly across various accounts.',
    icon: AtSign,
  },
  {
    title: 'Click to Call',
    description:
      'Click to Call is a feature that allows users to initiate a phone call directly from the load board with a single click.',
    icon: Phone,
  },
  {
    title: 'RTS Rating (Coming Soon)',
    description:
      'Assess brokers directly from the load board with RTS ratings, empowering you to make informed decisions and streamline your workflow.',
    icon: Star,
  },
]

export function AnimatedFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    // Only auto-rotate on desktop
    const startAutoRotate = () => {
      interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length)
      }, 5000)
    }

    // Check if we're on desktop
    if (window.matchMedia('(min-width: 768px)').matches) {
      startAutoRotate()
    }

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const pulses = container.querySelectorAll('.pulse')
    pulses.forEach((pulse) => {
      pulse.animate([{ strokeDashoffset: 1000 }, { strokeDashoffset: 0 }], {
        duration: 15000,
        iterations: Number.POSITIVE_INFINITY,
        easing: 'linear',
      })
    })
  }, [])

  return (
    <section
      id="features"
      className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-24"
    >
      <div className="text-center space-y-4 mb-16">
        <p className="text-sm font-semibold tracking-wider uppercase">
          KEY FEATURES
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Discover the Load Companion Advantage
        </h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-[800px] mx-auto">
          Load Companion continues to grow alongside your needs. We're dedicated
          to providing you with a tool that helps you save time, streamline your
          operations, and make your work easier. Here's how Load Companion makes
          a difference:
        </p>
      </div>

      <TooltipProvider>
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          <svg
            className="absolute inset-0 -z-10 w-full h-full opacity-8"
            viewBox="0 0 392 392"
            preserveAspectRatio="xMidYMid slice"
          >
            <g stroke="currentColor" strokeOpacity="0.2" strokeDasharray="1 1">
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x2="392"
                  y1={15.5 + i * 16}
                  y2={15.5 + i * 16}
                />
              ))}
              {Array.from({ length: 24 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={12 + i * 16}
                  x2={12 + i * 16}
                  y2="392"
                />
              ))}
            </g>
          </svg>

          <div className="relative bg-background/80 backdrop-blur-sm border border-accent rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-start p-2 border-b border-accent">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                    {React.createElement(features[activeFeature].icon, {
                      className: 'w-10 h-10 md:w-14 md:h-14 text-primary',
                    })}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center md:text-left">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center md:text-left">
                    {features[activeFeature].description}
                  </p>
                </div>
                <div className="flex-grow space-y-4">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground md:hidden text-center">Tap a feature to learn more</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <div
                            onClick={() => setActiveFeature(index)}
                            className={`flex items-center space-x-3 p-2 rounded transition-colors duration-300 cursor-pointer ${
                              index === activeFeature
                                ? 'bg-primary/20'
                                : 'bg-primary/5 hover:bg-primary/10'
                            }`}
                          >
                            <feature.icon className="h-5 w-5 text-primary" />
                            <div className="flex-grow">
                              <div className="text-sm font-medium truncate">
                                {feature.title}
                              </div>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p>{feature.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="absolute -bottom-8 -left-8 w-60 h-16"
            fill="none"
            viewBox="0 0 237 35"
          >
            <path
              className="pulse"
              stroke="url(#pulse-1)"
              strokeLinecap="round"
              strokeWidth="1"
              d="M0.5 33.4999L59 33.5C59.5523 33.5 60 33.0619 60 32.5096C60 28.5146 60 13.282 60 2.49741C60 1.94512 60.4477 1.49997 61 1.49997L91 1.49997C91.5523 1.49997 92 1.94769 92 2.49997L92 10C92 14.1422 95.3579 17.5 99.5 17.5L236 17.5001"
            />
            <defs>
              <linearGradient
                id="pulse-1"
                gradientUnits="userSpaceOnUse"
                x1="360"
                x2="200"
                y1="200"
                y2="80"
              >
                <stop stopColor="var(--primary)" stopOpacity="0" />
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="absolute -top-8 -right-8 w-60 h-16 rotate-180"
            fill="none"
            viewBox="0 0 237 35"
          >
            <path
              className="pulse"
              stroke="url(#pulse-2)"
              strokeLinecap="round"
              strokeWidth="1"
              d="M0.5 33.4999L59 33.5C59.5523 33.5 60 33.0619 60 32.5096C60 28.5146 60 13.282 60 2.49741C60 1.94512 60.4477 1.49997 61 1.49997L91 1.49997C91.5523 1.49997 92 1.94769 92 2.49997L92 10C92 14.1422 95.3579 17.5 99.5 17.5L236 17.5001"
            />
            <defs>
              <linearGradient
                id="pulse-2"
                gradientUnits="userSpaceOnUse"
                x1="360"
                x2="200"
                y1="200"
                y2="80"
              >
                <stop stopColor="var(--primary)" stopOpacity="0" />
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </TooltipProvider>
    </section>
  )
}
