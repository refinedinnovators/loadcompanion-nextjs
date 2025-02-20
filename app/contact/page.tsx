import { Facebook, Instagram, Send } from "lucide-react"
import { EmailCard } from "@/components/email-card"
import { ContactCard } from "@/components/contact-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const contactPageHeader = {
  kicker: "Contact Us",
  title: "We're Here to Help.",
  description:
    "Our team is available to assist you with any questions or concerns you may have. Feel free to reach out through any of the channels below, and we'll get back to you as soon as possible.",
}

export const emailCardContent = {
  email: "help@refinedinnovators.com",
  label: "PRIMARY CONTACT",
  description: "For the quickest response, reach out to us via email. We typically respond within 24 hours.",
  benefits: ["24/7 Support", "Fast Response Time", "Technical Assistance"],
}

export const socialLinks = [
  {
    icon: Send,
    title: "Telegram",
    content: "@loadcompanion",
    link: "https://t.me/loadcompanion",
  },
  {
    icon: Facebook,
    title: "Facebook",
    content: "LoadCompanion",
    link: "https://www.facebook.com/loadcompanion",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@loadcompanion",
    link: "https://www.instagram.com/loadcompanion",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-background via-background/50 to-background">
        <div className="container max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-primary text-sm font-semibold mb-2">{contactPageHeader.kicker}</p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              {contactPageHeader.title}
            </h1>
            <p className="text-lg text-muted-foreground">{contactPageHeader.description}</p>
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
                <ContactCard key={index} icon={link.icon} title={link.title} content={link.content} link={link.link} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

