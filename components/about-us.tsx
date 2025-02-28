'use client'

import { Button } from '@/components/ui/button'

export type CallToActionBlockType = {
  title: string
  description: string
  buttons: Array<{
    title: string
    href: string
    type: 'primary' | 'secondary'
  }>
}

const aboutUsContent: CallToActionBlockType = {
  title: 'Why Choose Us',
  description:
    "In the world of freight logistics, where speed and precision are critical, the Load Companion Chrome Extension stands out as a game-changing tool for dispatchers. Tailored for use with DAT One, and Sylectus, it's designed to simplify load booking and enhance dispatching efficiency. By optimizing workflows and reducing manual effort, Load Companion helps you stay ahead in a competitive industry. Here's why it deserves a place in your dispatching arsenal.",
  buttons: [
    {
      title: 'Start Trial',
      href: 'https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj',
      type: 'primary',
    },
    {
      title: 'Watch Demo',
      href: 'https://www.youtube.com/embed/uWPYq7k2wAE',
      type: 'secondary',
    },
  ],
}

export function AboutUs() {
  const handleStartTrial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.open('https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj', '_blank');
    e.preventDefault();
  };

  const handleWatchDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {aboutUsContent.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {aboutUsContent.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              className="px-4 py-2 rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors duration-300"
              asChild
            >
              <a
                href="https://chromewebstore.google.com/detail/loadcompanion/leflgffnbnehlmfnheafonkfmdidpanj"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStartTrial}
              >
                Start Trial
              </a>
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 rounded-md bg-white border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10 transition-colors duration-300"
            >
              <a
                href="#"
                onClick={handleWatchDemo}
              >
                Watch Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
