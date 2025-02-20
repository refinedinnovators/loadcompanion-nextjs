import { Calculator, CloudSun, Mail, Map, Phone, Star } from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="container py-24 scroll-mt-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Discover the Load Companion Advantage
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Load Companion continues to grow alongside your needs. We're dedicated
          to providing you with a tool that helps you save time, streamline your
          operations, and make your work easier.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    title: 'One-Click Email Magic',
    description:
      'Send booking requests with a single click, seamlessly integrated with Gmail and Outlook. Customize emails instantly without leaving your workflow.',
    icon: <Mail className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Multiple Email Templates',
    description:
      'Easily create and switch between multiple custom email templates designed for specific types of load bookings.',
    icon: <Mail className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Google Maps Integration',
    description:
      'Plan routes and calculate miles directly from DAT.com with integrated Google Maps support. Save time and optimize dispatching workflow.',
    icon: <Map className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Weather Widget',
    description:
      'When you open a load, the extension provides destination-specific weather details alongside the load information, making it easier to make a decision.',
    icon: <CloudSun className="h-8 w-8 text-primary" />,
  },
  {
    title: 'RPM Column',
    description:
      'View real-time rates per mile directly in your dashboard, helping you make smarter decisions quickly.',
    icon: <Calculator className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Instant RPM Calculator',
    description:
      'Calculate costs, profits, and rates per mile instantly, empowering you with real-time financial insights.',
    icon: <Calculator className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Send Emails from Comments',
    description:
      'Coming soon: Send emails directly from comments when an email address is mentioned, streamlining your workflow further.',
    icon: <Mail className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Built-in Email Editor',
    description:
      'Effortlessly customize emails with our built-in editor. Make quick adjustments directly from your dashboard for precise, on-point trucking communications.',
    icon: <Mail className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Load Companion Map',
    description:
      'When you open a load, the extension automatically integrates a map with comprehensive load details, helping you evaluate its suitability at a glance.',
    icon: <Map className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Multiple Email Addresses',
    description:
      'Send emails using multiple email addresses directly within Load Companion. This upcoming feature offers enhanced flexibility and convenience, empowering you to manage communications effortlessly across various accounts.',
    icon: <Mail className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Click to Call',
    description:
      'Click to Call is a feature that allows users to initiate a phone call directly from the load board with a single click.',
    icon: <Phone className="h-8 w-8 text-primary" />,
  },
  {
    title: 'RTS Rating (Coming Soon)',
    description:
      'Assess brokers directly from the load board with RTS ratings, empowering you to make informed decisions and streamline your workflow.',
    icon: <Star className="h-8 w-8 text-primary" />,
  },
]
