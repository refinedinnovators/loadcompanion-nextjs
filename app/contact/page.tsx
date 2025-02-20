import { Metadata } from 'next'

import { ContactCard } from '@/components/contact-card'
import { EmailCard } from '@/components/email-card'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { contactPageHeader, emailCardContent, socialLinks } from './content'

export const metadata: Metadata = {
  title: 'Contact Us - Load Companion Support',
  description:
    'Get in touch with Load Companion support team. We offer 24/7 support, fast response times, and technical assistance for all your trucking automation needs.',
  openGraph: {
    title: 'Contact Load Companion Support',
    description:
      'Get help with your Load Companion extension. Our support team is available 24/7.',
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-background via-background/50 to-background">
        <div className="container max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-primary text-sm font-semibold mb-2">
              {contactPageHeader.kicker}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              {contactPageHeader.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {contactPageHeader.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <EmailCard
                email={emailCardContent.email}
                label={emailCardContent.label}
                description={emailCardContent.description}
                benefits={emailCardContent.benefits}
              />
            </div>
            <div className="flex flex-col justify-between gap-6">
              {socialLinks.map((link, index) => (
                <ContactCard
                  key={index}
                  iconName={link.iconName}
                  title={link.title}
                  content={link.content}
                  link={link.link}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
