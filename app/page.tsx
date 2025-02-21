import { Metadata } from 'next'

import { AboutUs } from '@/components/about-us'
import { AnimatedFeatures } from '@/components/animated-features'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Navbar } from '@/components/navbar'
import { Pricing } from '@/components/pricing'

export const metadata: Metadata = {
  title: 'Load Companion - Automate Your Load Booking Process',
  description:
    'Streamline your trucking operations with Load Companion. One-click booking, automated rate calculations, and seamless email integration for DAT and Sylectus.',
  keywords: [
    'load booking automation',
    'trucking software',
    'DAT automation',
    'Sylectus automation',
    'freight management software',
  ],
}

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <main id="main-content" role="main" className="w-full overflow-x-hidden">
        <Hero />
          <Gallery />
          <AnimatedFeatures />
          <HowItWorks />
          <Pricing />
          <FAQ />
          <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
