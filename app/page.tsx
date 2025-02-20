import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { AnimatedFeatures } from "@/components/animated-features"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"

export const metadata: Metadata = {
  title: 'Load Companion - Automate Your Load Booking Process',
  description: 'Streamline your trucking operations with Load Companion. One-click booking, automated rate calculations, and seamless email integration for DAT and Sylectus.',
  keywords: ['load booking automation', 'trucking software', 'DAT automation', 'Sylectus automation', 'freight management software'],
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" itemScope itemType="https://schema.org/WebPage">
      <Navbar />
      <main id="main-content" role="main">
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

