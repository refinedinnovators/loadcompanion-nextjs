import { Footer } from '@/components/footer'
import { GetStarted } from '@/components/get-started'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Load Companion - Get Started',
  description:
    "Simplify load booking on DAT Power and DAT One with Load Companion's advanced features. Enhance productivity and streamline workload.",
}

export default function GetStartedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}
