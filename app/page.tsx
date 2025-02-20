import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { AnimatedFeatures } from "@/components/animated-features"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
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

