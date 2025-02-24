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
            {aboutUsContent.buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                className={`px-4 py-2 rounded-md ${button.type === 'primary' ? 'bg-[#4F46E5] text-white hover:bg-[#4338CA]' : 'bg-white border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10'} transition-colors duration-300`}
              >
                <a href={button.href}>{button.title}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
