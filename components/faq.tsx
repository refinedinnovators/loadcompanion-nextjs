'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

const FAQContent = {
  kicker: 'Get your questions answered',
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Load Companion. Learn more about our features, security, and how to use our app.',
  questions: [
    {
      question: 'What is Load Companion?',
      answer:
        'Load Companion is an app that helps users streamline load booking process, enhance productivity, and simplify workload management on DAT One and Sylectus.',
    },
    {
      question: 'Is my data secure with Load Companion?',
      answer:
        'Yes, Load Companion utilizes Google and Outlook authentication services, which are managed and protected by Google and Microsoft, respectively. When you enter your email and password, this happens directly on Google and Outlook domains. Our system uses the OAuth2 protocol for authentication, which is designed to provide limited permissions to third-party applications.',
    },
    {
      question: 'How do I install the Load Companion extension?',
      answer:
        "You can install the Load Companion extension from the Chrome Web Store by searching for 'Load Companion' and clicking 'Add to Chrome'.",
    },
    {
      question: 'Can I revoke email permissions granted to Load Companion?',
      answer:
        'Yes, you can revoke permissions at any time through your Google or Outlook account settings.',
    },
    {
      question: 'How does the subscription work for dispatchers?',
      answer:
        'Each subscription is tied to an email address. If multiple dispatchers use unique emails, each will require an individual subscription. However, we offer a multi-seat subscription option, allowing you to manage multiple users under one primary account. You can easily add or remove users through the User Management Page, ensuring flexibility as your team evolves.',
    },
    {
      question: 'What happens if I need to replace a dispatcher?',
      answer:
        'If a dispatcher leaves your team, you can easily reassign their subscription to a new team member. Simply go to the User Management Page and remove the email associated with the departing user. Then, invite the new dispatcher by entering their email address to grant them access to the subscription. This ensures a seamless transition without requiring additional purchases.',
    },
  ],
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-background via-background/50 to-background py-12 sm:py-16 md:py-24"
    >
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            {FAQContent.kicker}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            {FAQContent.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {FAQContent.description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {FAQContent.questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <Button
                variant="ghost"
                className="w-full justify-between text-left font-medium text-base sm:text-lg py-3 sm:py-4 text-gray-900 hover:bg-muted"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </Button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-3 sm:p-4 text-sm sm:text-base text-muted-foreground">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
