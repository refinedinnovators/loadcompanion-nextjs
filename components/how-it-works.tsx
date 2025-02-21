'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Chrome, Mail, Rocket } from 'lucide-react'

import { YouTubePlayer } from '@/components/youtube-player'

import { Button } from '@/components/ui/button'

const HowItWorksContent = {
  kicker: 'How It Works',
  title: 'Easy Setup in 3 Simple Steps',
  description:
    'Load Companion simplifies your workflow with an easy setup process. Watch our demo video or follow the steps below:',
  video: {
    id: 'uWPYq7k2wAE',
    title: 'How LoadCompanion Works',
  },
  steps: [
    {
      title: 'Install LoadCompanion',
      description:
        'Visit the Chrome Web Store and add the LoadCompanion extension to your browser. It only takes a single click to install.',
      icon: Chrome,
      action: 'Add to Chrome',
      link: 'https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj',
    },
    {
      title: 'Log In Securely',
      description:
        'Once installed, use your Gmail or Outlook account to securely log in and activate the LoadCompanion extension.',
      icon: Mail,
    },
    {
      title: 'Start Using LoadCompanion',
      description:
        'With LoadCompanion active, you can immediately start using its features to streamline your load booking process and boost efficiency.',
      icon: Rocket,
      action: 'Explore Features',
      onClick: () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
      },
    },
  ],
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-600 mb-2">
            {HowItWorksContent.kicker}
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {HowItWorksContent.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {HowItWorksContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <YouTubePlayer
            videoId={HowItWorksContent.video.id}
            title={HowItWorksContent.video.title}
          />

          <div className="space-y-8">
            {HowItWorksContent.steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-start space-x-4 p-6 rounded-lg transition-colors ${
                  activeStep === index
                    ? 'bg-white shadow-md'
                    : 'hover:bg-white hover:shadow-md'
                }`}
                onMouseEnter={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                    {<step.icon className="w-6 h-6" />}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  {step.action && (step.link || step.onClick) && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild={!!step.link}
                      onClick={step.onClick}
                    >
                      {step.link ? (
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {step.action}
                        </a>
                      ) : (
                        step.action
                      )}
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
