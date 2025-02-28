'use client'

import { motion } from 'framer-motion'

import { YouTubePlayer } from '@/components/youtube-player'
import { Button } from '@/components/ui/button'

const GetStartedContent = {
  kicker: 'How does it work?',
  title: 'Getting Started with Load Companion',
  description: 'Whole setup takes less than 60 seconds.',
  steps: [
    {
      title: 'Visit the Chrome Web Store',
      description:
        "Click on the 'Install Load Companion' button to go directly to the Load Companion extension page.",
    },
    {
      title: 'Add to Chrome',
      description:
        "On the extension page, click the blue 'Add to Chrome' button.",
    },
    {
      title: 'Confirm Installation',
      description:
        "A confirmation dialog will appear. Click 'Add extension' to confirm and complete the installation.",
    },
    {
      title: 'Access the Extension',
      description:
        'Once installed, you can access the extension by clicking the puzzle piece icon in the top-right corner of your Chrome browser. For easy access, you can pin the Load Companion extension by clicking the pin icon next to it in the list of extensions.',
    },
  ],
  video: {
    id: 'uWPYq7k2wAE',
    title: 'How to Install LoadCompanion',
  },
}

export function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/50 to-background py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">
            {GetStartedContent.kicker}
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {GetStartedContent.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {GetStartedContent.description}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.ol
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {GetStartedContent.steps.map((step, index) => (
              <motion.li
                key={index}
                className="relative pl-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <YouTubePlayer
              videoId={GetStartedContent.video.id}
              title={GetStartedContent.video.title}
            />
          </motion.div>
        </div>


      </div>
    </section>
  )
}
